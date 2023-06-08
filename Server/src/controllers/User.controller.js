// ---POST Create User ---
export const createUser = (req, res) => {
  // Getting all the data from body sent by the user
  const { firstName, lastName, gender, description, state } = req.body;
  // Logging ---
  console.log(req.body);

  // Internal validations
  // I've worked the validations here but just for the testing purpose
  // The best practice is to handle all this validations on a middleware
  // Level, before invoking the controller.

  // --- First name validation
  if (firstName === undefined || firstName === "" || firstName === null) {
    return res.status(400).send({
      msg: "Invalid firstName",
      status: "error",
      statusCode: 400,
    });
  }

  // --- Last name validation
  if (lastName === undefined || lastName === "" || lastName === null) {
    return res.status(400).send({
      msg: "Invalid lastName",
      status: "error",
      statusCode: 400,
    });
  }

  // --- Gender validation
  if (gender === undefined || gender === null || gender === NaN || gender <1 || gender >3) {
    return res.status(400).send({
      msg: "Invalid gender",
      status: "error",
      statusCode: 400,
    });
  }

  
  // --- Description validation
  if (description === undefined || description === "" || description === null) {
    return res.status(400).send({
      msg: "Invalid description",
      status: "error",
      statusCode: 400,
    });
  }

  // ---State validation
  if (state === undefined || state === "" || state === null) {
    return res.status(400).send({
      msg: "Invalid state",
      status: "error",
      statusCode: 400,
    });
  }

  //   Not using try/catch because it's just to feed the form
  // And there's no model to interact with.
  //   Sending response back
  res.status(201).send({
    msg: "User created successfully",
    status: "success",
    statusCode: 201,
    data: {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      description: description,
      state: state,
    },
  });
};
