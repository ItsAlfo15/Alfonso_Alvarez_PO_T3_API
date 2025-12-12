const express = require("express");

const cors = require("cors");

const v1Router = require("./v1/routes/routes")

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3030;

app.use("/api/v1", v1Router)

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
