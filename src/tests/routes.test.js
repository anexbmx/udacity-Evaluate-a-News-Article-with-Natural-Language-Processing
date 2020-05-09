const request = require('supertest');
const app = require("../server/index");

describe("check the root path", () => {
    test("status code should be 200", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });



describe("check the 'test' path", () => {
    test("status code should be 200", () => {
      return request(app)
        .get("/test")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

  
  
