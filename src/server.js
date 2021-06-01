require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRouter");

const PORT = process.env.PORT || 8080;

const server = express();

server.use("/users", userRouter);

server.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));
