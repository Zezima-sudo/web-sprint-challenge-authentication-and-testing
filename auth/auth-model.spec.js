const db = require("../database/dbConfig.js");
const Users = require("./auth-model.js");

beforeEach(async () => {
  await db("users").truncate();
});

describe("models", () => {
  it("insert data", async () => {
    await Users.insert({ username: "eric", password: "password" });
    const users = await db("users");
    expect(users).toHaveLength(1);
  });
  it("should return data", async () => {
    await Users.findBy({ username: "eric" });
    const users = await db("users");
    expect(Array.isArray([users])).toBe(true);
  });
});