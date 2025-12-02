export const UserService = {
  createUser(payload: any) {
    return cy.request({
      method: "POST",
      url: "/users",
      body: payload,
      failOnStatusCode: false, // suporte para testes de falha
    });
  },
};
