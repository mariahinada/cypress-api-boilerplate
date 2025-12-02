import { UserService } from "../services/example.service";
import { UserAssert } from "../asserts/example.assert";

export const UserAction = {
  createUser() {
    const fakePayload = { name: "Mariah" };

    UserService.createUser(fakePayload).then((response) => {
      UserAssert.validateUserCreated(response);
    });
  },
};
