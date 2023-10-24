describe("testy API", () => {
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

  it("First Tets API POST", () => {
    cy.request(requestPOST).then((response) => {
      assert.equal(200, response.status);
      assert.notStrictEqual(bodyData, response.body.data);
    });
  });

  it("First Tets API GET", () => {
    cy.request(requestGET).then((response) => {
      assert.equal("value", response.body.args.key);
    });
  });

  it("First Tets API HEADERS", () => {
    cy.request(requestHeaders).then((response) => {
      assert.equal(200, response.status);
      assert.equal("My test user-agent", response.requestHeaders["user-agent"]);
    });
  });

  // it('Test Duration', () => {
  //     cy.request(requestPOST).then(response => {
  //       assert.isTrue(response.duration <= 150)
  //       cy.log(response.duration) miliseconds
  //     })
  //   })
});
