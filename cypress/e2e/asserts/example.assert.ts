export const UserAssert = {
    validateUserCreated(response: any) {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        expect(response.body).to.have.property("name");
    }
}