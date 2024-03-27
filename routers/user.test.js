const request = require("supertest");
const { app } = require("../app.js");
const { Endpoints } = require("../constants/endpoints.constants.js");
const { status } = require("../constants/index.js");
const adminCred = {
  email: "mohammadadnan@gmail.com",
  password: "broadstairs@123",
};

const userToAdd = {
  fullName: "Mohammad Adnan",
  dateOfBirth: "01/02/2001",
  gender: "Male",
  email: "mohammadadnan0688@gmail.com",
  mobile: 9874563524,
  password: "broadstairs@123",
};

let accessToken = describe("POST /login", () => {
  test("should login the user", async () => {
    return request(app)
      .post(Endpoints.login)
      .send(adminCred)
      .expect(status.success)
      .then(({ body }) => {
        accessToken = body.data.accessToken;
      });
  });
});

describe(`PUT ${Endpoints.users}`, () => {
  test("should add the user", async () => {
    return request(app)
      .put(Endpoints.users)
      .set("Authorization", `Bearer ${accessToken}`)
      .send(userToAdd)
      .expect(201);
  });
});
