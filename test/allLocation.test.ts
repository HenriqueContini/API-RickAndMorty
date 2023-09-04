import request from "supertest";
import app from "../src/app";

const ENDPOINT = "/location";

describe("All Locations tests", () => {
  it("Get with sucess all locations", async () => {
    const { statusCode, body } = await request(app).get(ENDPOINT);

    expect(statusCode).toBe(200);
    expect(body.error).toBe(false);
    expect(body.info.prev).toBeNull();
    expect(body.data).not.toBeNull();
  });

  it("Get with sucess all locations from page 2", async () => {
    const { statusCode, body } = await request(app)
      .get(`${ENDPOINT}`)
      .query("page=2");

    expect(statusCode).toBe(200);
    expect(body.error).toBe(false);
    expect(body.data).not.toBeNull();
  });

  it("Get with sucess all locations from last page", async () => {
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

  it("Get Bad Request when page type is a string", async () => {
    const { statusCode, body } = await request(app)
      .get(`${ENDPOINT}`)
      .query("page=test");

    expect(statusCode).toBe(400);
    expect(body.error).toBe(true);
    expect(body.errorMessage).toBeDefined();
  });
});
