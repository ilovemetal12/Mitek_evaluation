// ---Every script were migrated to this file---
// In order to use webpack

// Countries list
export const countries = [
  {
    State: "Alabama",
    Code: "AL",
  },
  {
    State: "Alaska",
    Code: "AK",
  },
  {
    State: "Arizona",
    Code: "AZ",
  },
  {
    State: "Arkansas",
    Code: "AR",
  },
  {
    State: "California",
    Code: "CA",
  },
  {
    State: "Colorado",
    Code: "CO",
  },
  {
    State: "Connecticut",
    Code: "CT",
  },
  {
    State: "Delaware",
    Code: "DE",
  },
  {
    State: "Florida",
    Code: "FL",
  },
  {
    State: "Georgia",
    Code: "GA",
  },
  {
    State: "Hawaii",
    Code: "HI",
  },
  {
    State: "Idaho",
    Code: "ID",
  },
  {
    State: "Illinois",
    Code: "IL",
  },
  {
    State: "Indiana",
    Code: "IN",
  },
  {
    State: "Iowa",
    Code: "IA",
  },
  {
    State: "Kansas",
    Code: "KS",
  },
  {
    State: "Kentucky",
    Code: "KY",
  },
  {
    State: "Louisiana",
    Code: "LA",
  },
  {
    State: "Maine",
    Code: "ME",
  },
  {
    State: "Maryland",
    Code: "MD",
  },
  {
    State: "Massachusetts",
    Code: "MA",
  },
  {
    State: "Michigan",
    Code: "MI",
  },
  {
    State: "Minnesota",
    Code: "MN",
  },
  {
    State: "Mississippi",
    Code: "MS",
  },
  {
    State: "Missouri",
    Code: "MO",
  },
  {
    State: "Montana",
    Code: "MT",
  },
  {
    State: "Nebraska",
    Code: "NE",
  },
  {
    State: "Nevada",
    Code: "NV",
  },
  {
    State: "New Hampshire",
    Code: "NH",
  },
  {
    State: "New Jersey",
    Code: "NJ",
  },
  {
    State: "New Mexico",
    Code: "NM",
  },
  {
    State: "New York",
    Code: "NY",
  },
  {
    State: "North Carolina",
    Code: "NC",
  },
  {
    State: "North Dakota",
    Code: "ND",
  },
  {
    State: "Ohio",
    Code: "OH",
  },
  {
    State: "Oklahoma",
    Code: "OK",
  },
  {
    State: "Oregon",
    Code: "OR",
  },
  {
    State: "Pennsylvania",
    Code: "PA",
  },
  {
    State: "Rhode Island",
    Code: "RI",
  },
  {
    State: "South Carolina",
    Code: "SC",
  },
  {
    State: "South Dakota",
    Code: "SD",
  },
  {
    State: "Tennessee",
    Code: "TN",
  },
  {
    State: "Texas",
    Code: "TX",
  },
  {
    State: "Utah",
    Code: "UT",
  },
  {
    State: "Vermont",
    Code: "VT",
  },
  {
    State: "Virginia",
    Code: "VA",
  },
  {
    State: "Washington",
    Code: "WA",
  },
  {
    State: "West Virginia",
    Code: "WV",
  },
  {
    State: "Wisconsin",
    Code: "WI",
  },
  {
    State: "Wyoming",
    Code: "WY",
  },
];

// ---This function is used to fill the countries select list---
export function fillCountriesSelectList() {
  let select = document.getElementById("countriesSelectList");
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.id = "optionState" + "-" + country.State;
    option.value = country.Code + " - " + country.State;
    option.text = country.Code + " - " + country.State;
    select.appendChild(option);
  });
}

// -------------------------------------------------------------//
// ---This function is used to validate de gender check box, in order to keep 1 active at the time
// -------------------------------------------------------------//
// formGenderValidator

export function checkBoxEvaluation(checkbox) {
  let genderCheckboxes = document.getElementsByName("genderOption");
  if (!genderCheckboxes) {
    alert(
      "There was a problem loading the checkboxes, please reload the page."
    );
  }
  genderCheckboxes.forEach(function (element) {
    if (element !== checkbox) {
      element.checked = false;
    }
  });
}
// -------------------------------------------------------------//
// ---This function is used to validate the form
// -------------------------------------------------------------//

export function validateForm(event) {
  event.preventDefault();
  // Obtain the form element by ID
  let form = document.getElementById("registrationForm");

  // Fields validation
  let firstName = form.elements["firstName"].value;
  let lastName = form.elements["lastName"].value;
  let genderOption = parseInt(
    form.querySelector('input[name="genderOption"]:checked')?.value
  );
  let description = form.elements["descriptionTextArea"].value;
  let state = form.elements["countriesSelectList"].value;

  // Blank values validation
  if (firstName === "") {
    alert("Please enter your first name.");
    return false;
  }

  if (lastName === "") {
    alert("Please enter your last name.");
    return false;
  }

  // Checking that at least one gender option is selected
  if (isNaN(genderOption)) {
    alert("Please select a gender option.");
    return false;
  }

  if (description === "" || description === null || description === undefined) {
    alert("Please enter a description about yourself.");
    return false;
  }

  if (state === "") {
    alert("Please select a state.");
    return false;
  }

  // If all fields are valid, then we prepare a variable to send it to the server
  let formData = {
    firstName: firstName,
    lastName: lastName,
    gender: genderOption,
    description: description,
    state: state,
  };

  // We send the data to the server

  fetch("http://ec2-184-72-82-44.compute-1.amazonaws.com/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(function (response) {
      if (response.ok) {
        // The request was successful
        alert("Form submitted successfully!");
      } else {
        // The request failed
        alert("An error occurred. Please try again.");
      }
    })
    .catch(function (error) {
      // If there's an error scenario
      alert("An error occurred. Please try again.");
    });

  return true;
}
