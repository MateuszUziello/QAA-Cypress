describe("HTTP TESTS API", () => {
  const bodyData = {
    bodyKey: "bodyValue",
  };

  const requestPOST = {
    method: "POST",
    url: "https://httpbin.org/post",
    body: bodyData,
    failOnStatusCode: false,
  };

  const requestGET = {
    method: "GET",
    url: "https://httpbin.org/get",
    qs: {
      key: "value",
    },
    failOnStatusCode: false,
  };

  const requestHeaders = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      "user-agent": "My test user-agent",
    },
    failOnStatusCode: false,
  };

  it("Test API POST", () => {
    cy.request(requestPOST).then((response) => {
      const status = response.status;
      assert.equal(200, status);
      assert.notStrictEqual(bodyData, response.body.data);
    });
  });

  it("Test API GET", () => {
    cy.request(requestGET).then((response) => {
      const status = response.status;
      assert.equal(200, status);
      assert.equal("value", response.body.args.key);
    });
  });

  it("Test API Headers", () => {
    cy.request(requestHeaders).then((response) => {
      const status = response.status;
      assert.equal(200, status);
      assert.equal("My test user-agent", response.requestHeaders["user-agent"]);
    });
  });

  // it('Test Duration', () => {

  //     cy.request(requestPOST).then(response => {
  //         const durationCurrent = response.duration
  //         assert.isTrue(durationCurrent <= 200, 'Time was too long: ' + durationCurrent)

  //     })

  // })
});
