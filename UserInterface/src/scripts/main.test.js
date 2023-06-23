import {
  fillCountriesSelectList,
  checkBoxEvaluation,
  validateForm,
} from "../scripts/main";

// -------------------------------------------------------------//
// ---Function evaluation: fillCountriesSelectList
// -------------------------------------------------------------//

describe("Function evaluation: fillCountriesSelectList", () => {
  test("Scenario 1: Adds new options to the countries list without removing existing ones", () => {
    // Setting environment for the test
    document.body.innerHTML = `
          <select id="countriesSelectList">
            <option value="NY - New York">NY - New York</option>
          </select>
        `;

    // Calling function
    fillCountriesSelectList();

    // Verify that the new options have been added without removing the existing ones
    const selectList = document.getElementById("countriesSelectList");
    expect(selectList.options.length).toBe(51); // Verify that there are 51 options in total (50 + 1)
    expect(selectList.options[0].value).toBe("NY - New York"); // Verify that the existing option is preserved
  });
});

// -------------------------------------------------------------//
// ---Function evaluation: checkBoxEvaluation
// -------------------------------------------------------------//
describe("Function evaluation: checkBoxEvaluation", () => {
  test("Scenario 1: At least one checkbox is selected", () => {
    // Set up the necessary environment for the test
    document.body.innerHTML = `
      <input type="checkbox" name="genderOption" value="1" checked>
      <input type="checkbox" name="genderOption" value="2">
      <input type="checkbox" name="genderOption" value="3">
    `;

    // Calling function
    const checkbox1 = document.querySelector('input[value="1"]');
    checkBoxEvaluation(checkbox1);

    // Verify that only the selected checkbox remains checked
    const checkboxes = document.querySelectorAll('input[name="genderOption"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox === checkbox1) {
        expect(checkbox.checked).toBe(true);
      } else {
        expect(checkbox.checked).toBe(false);
      }
    });
  });

  test("Scenario 2: No checkbox is selected", () => {
    // Set up the necessary environment for the test
    document.body.innerHTML = `
      <input type="checkbox" name="genderOption" value="1">
      <input type="checkbox" name="genderOption" value="2">
      <input type="checkbox" name="genderOption" value="3">
    `;

    // Calling the function
    const checkboxes = document.querySelectorAll('input[name="genderOption"]');
    checkBoxEvaluation(checkboxes[0]);

    // Verify that no checkboxes are checked
    checkboxes.forEach((checkbox) => {
      expect(checkbox.checked).toBe(false);
    });
  });
});

// -------------------------------------------------------------//
// ---Function evaluation: validateForm
// -------------------------------------------------------------//
describe("Function evaluation: validateForm", () => {
  beforeEach(() => {
    // Set up the necessary environment for the test
    document.body.innerHTML = `
          <form id="registrationForm">
            <label for="firstNameInput">First Name:</label>
            <input type="text" id="firstNameInput" name="firstName" value="John">
            
            <label for="lastNameInput">Last Name:</label>
            <input type="text" id="lastNameInput" name="lastName" value="Doe">
            
            <label for="genderInput">Gender:</label>
            <input type="checkbox" id="genderInput" name="genderOption" value="1" checked>
            
            <label for="descriptionTextArea">Description:</label>
            <textarea id="descriptionTextArea" name="descriptionTextArea"></textarea>
            
            <label for="countriesSelectList">State:</label>
            <select id="countriesSelectList" name="countriesSelectList">
              <option value="AL - Alabama">AL - Alabama</option>
            </select>
          </form>
        `;
  });

  test("Scenario 1: Displays an alert if the firstname field is blank", () => {
    //Creating spy to catch the window alert
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    // Update the value of the first name input to be empty
    const firstNameInput = document.getElementById("firstNameInput");
    firstNameInput.value = "";

    // Call the function you want to test
    const eventMock = { preventDefault: jest.fn() };
    const result = validateForm(eventMock);

    // Verify that the correct alert is displayed and the function returns false
    expect(alertSpy).toHaveBeenCalledWith("Please enter your first name.");
    expect(result).toBe(false);

    //Removing spy
    alertSpy.mockRestore();
  });

  test("Scenario 2: Displays an alert if the lastname field is blank", () => {
    //Creating spy to catch the window alert
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    // Update the value of the last name input to be empty
    const lastNameInput = document.getElementById("lastNameInput");
    lastNameInput.value = "";

    const eventMock = { preventDefault: jest.fn() };
    const result = validateForm(eventMock);

    // Verify that the correct alert is displayed and the function returns false
    expect(window.alert).toHaveBeenCalledWith("Please enter your last name.");
    expect(result).toBe(false);

    //Removing spy
    alertSpy.mockRestore();
  });

  test("Scenario 3: Displays an alert if no gender option is selected", () => {
    //Creating spy to catch the window alert
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    // Uncheck the gender checkbox
    const genderInput = document.getElementById("genderInput");
    genderInput.checked = false;

    const eventMock = { preventDefault: jest.fn() };
    const result = validateForm(eventMock);

    // Verify that the correct alert is displayed and the function returns false
    expect(alertSpy).toHaveBeenCalledWith("Please select a gender option.");
    expect(result).toBe(false);

    //Removing spy
    alertSpy.mockRestore();
  });

  test("Scenario 4: Displays an alert if the description field is blank", () => {
    //Creating spy to catch the window alert
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    // Update the value of the description textarea to be empty
    const descriptionTextArea = document.getElementById("descriptionTextArea");
    descriptionTextArea.value = "";

    const eventMock = { preventDefault: jest.fn() };
    const result = validateForm(eventMock);

    // Verify that the correct alert is displayed and the function returns false
    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a description about yourself."
    );
    expect(result).toBe(false);
  });

  test("Scenario 5: Displays an alert if no state is selected", () => {
    //Creating spy to catch the window alert
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    // Update the value of the state select list to be empty
    const countriesSelectList = document.getElementById("countriesSelectList");
    countriesSelectList.value = "";

    const eventMock = { preventDefault: jest.fn() };
    const result = validateForm(eventMock);

    // Verify that the correct alert is displayed and the function returns false
    expect(alertSpy).toHaveBeenCalledWith(
      "Please enter a description about yourself."
    );
    expect(result).toBe(false);

    //Removing spy
    alertSpy.mockRestore();
  });
});
// -------------------------------------------------------------//
