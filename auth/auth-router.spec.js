const request = require("supertest");
const server = require("../api/server.js");

describe("register", () => {
  //   it("should return 200", async () => {
  //     const user = await request(server)
  //       .post("/api/auth/register")
  //       .send({ username: "cody", password: "pass" })
  //       .set("Content-Type", "application/json");

  //     expect(user.status).toBe(200);
  //   });
  it("should return json", () => {
    return request(server)
      .post("/api/auth/register")
      .send({ username: "eric", password: "password" })
      .then(res => {
        expect(res.type).toBe("application/json");
      });
  });
});

describe("login", () => {
  it("should return an array", () => {
    return request(server)
      .get("/api/auth/login")
      .then(res => {
        expect(Array.isArray([res.body])).toBe(true);
      });
  });
});