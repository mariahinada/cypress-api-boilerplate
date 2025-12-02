import { UserAction } from "../actions/example.action";

describe("Exemplo de teste de criação de usuário", () => {
  it("Deve criar um usuário com sucesso", () => {
    UserAction.createUser();
  });
});
