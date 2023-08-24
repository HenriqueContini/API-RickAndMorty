import request from "supertest";
import app from "../src/app";

const ENDPOINT = "/character";

describe("All Characters tests", () => {
  it("Get with sucess all characters", async () => {
    const { statusCode, body } = await request(app).get(ENDPOINT);

    expect(statusCode).toBe(200);
    expect(body.error).toBe(false);
    expect(body.info.prev).toBeNull();
    expect(body.data).not.toBeNull();
  });

  it("Get with sucess all characters from page 2", async () => {
    const { statusCode, body } = await request(app)
      .get(`${ENDPOINT}`)
      .query("page=2");

    expect(statusCode).toBe(200);
    expect(body.error).toBe(false);
    expect(body.data).not.toBeNull();
  });

  it("Get with sucess all characters from last page", async () => {
    const firstPage = await request(app).get(`${ENDPOINT}`);
    const pagesSize = Number(firstPage.body.info.pages);

    expect(pagesSize).not.toBeNaN();

    const { statusCode, body } = await request(app)
      .get(`${ENDPOINT}`)
      .query(`page=${pagesSize}`);

    expect(statusCode).toBe(200);
    expect(body.error).toBe(false);
    expect(body.info.next).toBeNull();
    expect(body.data).not.toBeNull();
  });

  it("Get Internal Server Error when page type is a string", async () => {
    const { statusCode, body } = await request(app)
      .get(`${ENDPOINT}`)
      .query("page=test");

    expect(statusCode).toBe(500);
    expect(body.error).toBe(true);
    expect(body.errorMessage).toBeDefined();
  });
});

describe("One Character test", () => {
  it("Get with sucess character with ID: 1", async () => {
    const id = 1;
    const { statusCode, body } = await request(app).get(`${ENDPOINT}/${id}`);

    expect(statusCode).toBe(200);
    expect(body.error).toBe(false);
    expect(body.data).not.toBeNull();
    expect(body.data.id).toBe(id);
  });

  it("Get Bad Request when character ID type is a string", async () => {
    const id = "test";
    const { statusCode, body } = await request(app).get(`${ENDPOINT}/${id}`);

    expect(statusCode).toBe(400);
    expect(body.error).toBe(true);
  });

  it("Get Not Found when character ID doesn't exists", async () => {
    const id = 2000;
    const { statusCode, body } = await request(app).get(`${ENDPOINT}/${id}`);

    expect(statusCode).toBe(404);
    expect(body.error).toBe(true);
    expect(body.errorMessage).toBeDefined();
  });
});
