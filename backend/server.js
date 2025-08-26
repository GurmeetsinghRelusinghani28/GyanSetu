const app = require("./app");
const PORT = process.env.PORT || 5000;

app.listen(PORT)
  .on("listening", () => console.log(`✅ Server running on port ${PORT}`))
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`❌ Port ${PORT} is already in use`);
      process.exit(1);
    } else {
      throw err;
    }
  });
