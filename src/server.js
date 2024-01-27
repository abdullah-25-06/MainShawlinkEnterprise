const express = require("express");
const { connectdb } = require("./db/connectDB");
const error = require("./middlewares/error");
const user_router = require("./routes/user_route");
const passport = require("passport");
const passportConfig = require("./utils/passport");
const cors = require("cors")
passportConfig(passport);

const app = express();
app.use(cors({
  origin: 'http://127.0.0.1:3000',
}))
app.use(express.json({ limit: "50Mb" }));
app.use("/api/v1/user/", user_router);
app.use(error);
connectdb();

const port = process.env.PORT;

const portal = () => {
  console.log(`server running at ${port}`);
};
app.listen(port, portal);
