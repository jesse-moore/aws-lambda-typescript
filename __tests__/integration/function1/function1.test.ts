import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from "vitest";
import event from "../../events/event.json";

type APIError = string | Error | null | undefined;

describe("Function 1 Tests", function () {
  const gatewayEvent = event as unknown as APIGatewayEvent;
  beforeEach(() => {
    // tell vitest we use mocked time
  });

  afterEach(() => {
    // restoring date after each test run
  });

  it("verifies successful response", async () => {
    expect(0).toBe(1);
    // const [error, response]: [APIError, APIGatewayProxyResult] = callback.mock.calls[0];
    // expect(error).to.toBeNull();
    // expect(response).to.be.an("object");
    // expect(response.statusCode).to.equal(200);
    // expect(response.body).to.be.an("string");

    // const body = JSON.parse(response.body);
    // expect(body).toHaveProperty("message");
    // expect(body.message).toBe("Function 1");

    // let response = JSON.parse(result.body);s

    // expect(response).to.be.an("object");
    // expect(response.message).to.be.equal("hello world");
    // expect(response.location).to.be.an("string");
  });
});
