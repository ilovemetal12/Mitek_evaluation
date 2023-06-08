import app from "./app.js";
import User from "./routes/User.routes.js";

async function main() {
  try {
    app.listen(3000);
    console.log("Server running on port 3000");
    // ---Routes---
    // ---Basic default route---
    app.use("/", User);
  } catch (error) {
    console.log("Unable to start server: ", error);
  }
}

// ---Main call---
main();
