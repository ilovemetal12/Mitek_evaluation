import { createUser } from "../controllers/User.controller";

describe("Controller method: createUser - Test Suite", () => {
  // Case: 1
  test("Should exist and should be a POST service", () => {
    expect(createUser).toBeDefined();
  });

  //   Case: 2
  test("Should return a success response with correct data", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: "Doe",
        gender: 0,
        description: "Lorem ipsum",
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({
      msg: "User created successfully",
      status: "success",
      statusCode: 201,
      data: {
        firstName: "John",
        lastName: "Doe",
        gender: 0,
        description: "Lorem ipsum",
        state: "California",
      },
    });
  });

  // Case: 3
  test("Should return an error when firstName is an empty string", () => {
    const req = {
      body: {
        firstName: "",
        lastName: "Doe",
        gender: 1,
        description: "Lorem ipsum",
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid firstName",
      status: "error",
      statusCode: 400,
    });
  });

  // Case: 4
  test("Should return an error when lastName is an empty string", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: "",
        gender: 1,
        description: "Lorem ipsum",
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid lastName",
      status: "error",
      statusCode: 400,
    });
  });

  // Case: 5
  test("Should return an error when gender is not a number", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: "Doe",
        gender: "+Hello there... -General Kenobi",
        description: "Lorem ipsum",
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid gender",
      status: "error",
      statusCode: 400,
    });
  });

  // Case: 6
  test("Should return an error when gender is different than 0,1 or 2", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: "Doe",
        gender: 12,
        description: "Lorem ipsum",
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid gender",
      status: "error",
      statusCode: 400,
    });
  });

  //   Case: 7
  test("Should return an error when description is an empty string", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: "Doe",
        gender: 0,
        description: "",
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid description",
      status: "error",
      statusCode: 400,
    });
  });

  //   Case: 8
  test("Should return an error when state is an empty string", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: "Doe",
        gender: 0,
        description: "Lorem ipsum",
        state: "",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid state",
      status: "error",
      statusCode: 400,
    });
  });

  //   Case: 9
  test("Should return an error when firstName is a null value", () => {
    const req = {
      body: {
        firstName: null,
        lastName: "Doe",
        gender: 1,
        description: "Lorem ipsum",
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid firstName",
      status: "error",
      statusCode: 400,
    });
  });

  //   Case: 10
  test("Should return an error when lastName is a null value", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: null,
        gender: 1,
        description: "Lorem ipsum",
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid lastName",
      status: "error",
      statusCode: 400,
    });
  });

  //   Case: 11
  test("Should return an error when gender is a null value", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: "Doe",
        gender: null,
        description: "Lorem ipsum",
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid gender",
      status: "error",
      statusCode: 400,
    });
  });

  //   Case: 12
  test("Should return an error when description is a null value", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: "Doe",
        gender: 0,
        description: null,
        state: "California",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid description",
      status: "error",
      statusCode: 400,
    });
  });
  //   Case: 13
  test("Should return an error when state is a null value", () => {
    const req = {
      body: {
        firstName: "John",
        lastName: "Doe",
        gender: 0,
        description: "Lorem ipsum",
        state: null,
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Invalid state",
      status: "error",
      statusCode: 400,
    });
  });
});
