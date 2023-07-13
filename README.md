<!-- -------------------------------------------------------------------- -->

Project structure:
UserInterface: Holds the front-end, the e2e testing files
Server: Holds the back-end and the unit testing files

<!-- -------------------------------------------------------------------- -->

Installed dependencies:
Server:
-Node
-Express
-nodemon
-Morgan
-Cors
-Jest
-webpack
-babel

<!-- -------------------------------------------------------------------- -->

Commands:
npm install
npm test
npm run test:e2eÇ
npx webpack

<!-- -------------------------------------------------------------------- -->

Hello review team,
Thank you in advance for taking the time to review my project. I will explain it briefly:

It was requested to have a form that would send a POST request and be tested using Jest. Honestly, I approached it in a slightly different way. I didn't want the form to be pointing to nowhere, so I developed a small Node.js Express server to handle the form submission. It includes the server, route, controller, and is properly commented.

I included the Jest library for unit testing. However, I applied the tests to the backend, as you can see. I didn't apply them to the frontend because, to my knowledge, it required the use of an external library called jsdom, which allows simulating an HTML tree. I didn't want to overload the functions unnecessarily, so I focused my Jest testing on the backend controller.

I developed the integration with Puppeteer and was able to automate the form filling actions. However, please note that the URLs need to be adjusted. Since it is a local file, they need to be updated depending on the project's location for them to work correctly. Nevertheless, the code is readable. I must admit that I find it more convenient to perform end-to-end (e2e) testing with more advanced frameworks dedicated to testing, such as Selenium or Cypress, as Puppeteer is more oriented towards web scraping.

I built a distribution using webpack, and I have to be honest, it was a bit challenging for me as I wasn't very accustomed to using these technologies. Nowadays, most frameworks include these features by default, but it was good to refresh my memory.

Thank you in advance for your attention. I sincerely hope that it meets your expectations, and I will take any feedback with respect and learn from it. Thank you very much.

Jair Alviárez

<!-- --------------------------------------------------------------------- -->
