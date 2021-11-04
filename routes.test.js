const request = require("supertest");
const App = require("./app");
const MockDatabase = require('./__MOCKS__/mock_database.js')

const server = new App(MockDatabase,3001)

describe("Test API routes", () => {
  test("Service route should return array with 6 objects", async () => {
    const response = await request(server.getApp()).get("/api/services/6");
    expect(response.statusCode).toBe(200);
    expect(MockDatabase.fetchServices).toHaveBeenCalled();
    expect(response.body.names).toHaveLength(6);
  });
  test("Visualization route should return array with 6 objects", async () => {
    const response = await request(server.getApp()).get("/api/visualizations/6");
    expect(response.statusCode).toBe(200);
    expect(MockDatabase.fetchVisualizations).toHaveBeenCalled();
    expect(response.body.visualizations).toHaveLength(6);
  });
  test("Data Sources route should return array with 6 objects", async () => {
    const response = await request(server.getApp()).get("/api/data-sources/6");
    expect(response.statusCode).toBe(200);
    expect(MockDatabase.fetchDataSources).toHaveBeenCalled();
    expect(response.body.titles).toHaveLength(6);
  });
  test("Search Options route should return array with 6 objects", async () => {
    const response = await request(server.getApp()).get("/api/search-options");
    expect(response.statusCode).toBe(200);
    expect(MockDatabase.fetchDataSources).toHaveBeenCalled();
    expect(response.body.options).toHaveLength(6);
  });
});