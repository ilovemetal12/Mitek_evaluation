import puppeteer from "puppeteer";

// Apologies by hand because the UI is looking pretty ugly at testing browser

// It is really important to replace this urlPage variable with the index.html relative path of your project, because it's local
const fileUrl = "http://127.0.0.1:5500/UserInterface/src/pages/index.html";

// Values mockup to test
const dataMockup = {
  firstName: "John",
  lastName: "Doe",
  gender: 0,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem",
  state: "CA - California",
};

// -------------------------------------------------------------------------//
(async () => {
  // Creating browser instance
  const browser = await puppeteer.launch({
    headless: false,
    product: "chrome",
  });

  // Creating new page
  const page = await browser.newPage();
  // Using the fileUrl, the Index.html ---Remember this url needs to be replaced
  await page.goto(fileUrl);

  // Waiting for the DOM to be loaded to  avoid loading errors
  await page.waitForSelector("body");
  // Waiting all the fields to be loaded
  await page.waitForSelector("#firstNameInput");
  await page.waitForSelector("#lastNameInput");
  await page.waitForSelector("#inputMaleGenderOption");
  await page.waitForSelector("#inputFemaleGenderOption");
  await page.waitForSelector("#inputOtherGenderOption");
  await page.waitForSelector("#descriptionTextArea");
  await page.waitForSelector("#countriesSelectList");

  // Introducing mockup data into the fields
  await page.type("#firstNameInput", dataMockup.firstName);

  await page.type("#lastNameInput", dataMockup.lastName);

  await page.click("#inputMaleGenderOption");

  await page.type("#descriptionTextArea", dataMockup.description);

  await page.select("#countriesSelectList", dataMockup.state);

  // Clicking the submit button
  await page.click("#submitButton");

  // -------------------------------------------------------------------------//
  //   I commented this line to watch the proccess, but, if you don't need
  //   you can remove the comment

  //   await browser.close();
})();
