import request from "supertest";
import app from "../src/app";

const ENDPOINT = "/location";

describe("One Location test", () => {
  it("Get with sucess location with ID: 1", async () => {
    const id = 1;
    const { statusCode, body } = await request(app).get(`${ENDPOINT}/${id}`);

    expect(statusCode).toBe(200);
    expect(body.error).toBe(false);
    expect(body.data).not.toBeNull();
    expect(body.data.id).toBe(id);
  });

  it("Get Bad Request when location ID type is a string", async () => {
    const id = "test";
    const { statusCode, body } = await request(app).get(`${ENDPOINT}/${id}`);

    expect(statusCode).toBe(400);
    expect(body.error).toBe(true);
  });

  it("Get Not Found when location ID doesn't exists", async () => {
    const id = 2000;
    const { statusCode, body } = await request(app).get(`${ENDPOINT}/${id}`);

    expect(statusCode).toBe(404);
    expect(body.error).toBe(true);
    expect(body.errorMessage).toBeDefined();
  });
});
