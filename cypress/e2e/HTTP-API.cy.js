describe('HTTPBIN API Tests', () => {
  const baseUrl = 'https://httpbin.org';

  // Test 1: GET request without any query parameters
  it('Test GET Request without Query Parameters', () => {
    cy.request('GET', `${baseUrl}/get`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args).to.be.empty;
    });
  });

  // Test 2: POST request with a JSON body
  it('Test POST Request with JSON Body', () => {
    const requestBody = {
      key: 'value',
    };
    cy.request('POST', `${baseUrl}/post`, requestBody).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json).to.deep.equal(requestBody);
    });
  });

  // Test 3: Send custom headers and validate them in the response
  it('Test Custom Headers', () => {
    const headers = {
      'User-Agent': 'MyCustomUserAgent',
      'X-Custom-Header': 'CustomValue',
    };
    cy.request({
      method: 'GET',
      url: `${baseUrl}/headers`,
      headers: headers,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.headers['User-Agent']).to.eq(headers['User-Agent']);
      expect(response.body.headers['X-Custom-Header']).to.eq(
        headers['X-Custom-Header']
      );
    });
  });

  // Test 4: Send query parameters and validate them in the response
  it('Test Query Parameters', () => {
    const queryParams = {
      param1: 'value1',
      param2: 'value2',
    };
    cy.request({
      method: 'GET',
      url: `${baseUrl}/get`,
      qs: queryParams,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args).to.deep.equal(queryParams);
    });
  });

  // Test 5: Send a random query parameter and validate it in the response
  it('Test Random Query Parameter', () => {
    const randomQueryParam = {
      randomParam: Math.random().toString(36).substring(7),
    };
    cy.request({
      method: 'GET',
      url: `${baseUrl}/get`,
      qs: randomQueryParam,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args).to.deep.equal(randomQueryParam);
    });
  });

  // Test 6: Validate the content of the response
  it('Test Response Content', () => {
    cy.request('GET', `${baseUrl}/json`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('slideshow');
    });
  });

  // Test 7: Check the response time duration
  it('Test Response Time Duration', () => {
    cy.request('GET', `${baseUrl}/delay/3`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(4000); // 4 seconds
    });
  });

  // Test 8: Test POST request with form data
  it('Test POST Request with Form Data', () => {
    const formData = {
      key1: 'value1',
      key2: 'value2',
    };
    cy.request({
      method: 'POST',
      url: `${baseUrl}/post`,
      form: true,
      body: formData,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.form).to.deep.equal(formData);
    });
  });

  // Test 9: Test PUT request
  it('Test PUT Request', () => {
    const putData = {
      key: 'updatedValue',
    };
    cy.request('PUT', `${baseUrl}/put`, putData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json).to.deep.equal(putData);
    });
  });

  // Test 10: Test DELETE request
  it('Test DELETE Request', () => {
    cy.request('DELETE', `${baseUrl}/delete`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('url', `${baseUrl}/delete`);
    });
  });
})