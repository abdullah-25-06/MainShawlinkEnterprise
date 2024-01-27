const { employee, times } = require("../models/models");
const asyncHandler = require("express-async-handler");
const CustomErrorApi = require("../error/error");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const generateAuthToken = require("../utils/jwt");
const { parsePhoneNumber } = require("awesome-phonenumber");
const moment = require("moment");
const Register = asyncHandler(async (req, res, next) => {
  const {
    username,
    password,
    email,
    pin,
    f_name,
    l_name,
    salary,
    dob,
    joining_date,
    p_no,
  } = req.body;
  if (
    !email ||
    !password ||
    !username ||
    !pin ||
    !f_name ||
    !salary ||
    !dob ||
    !joining_date ||
    !p_no
  ) {
    throw new CustomErrorApi("Please Fill all the form fields", 400);
  }

  const checkUser = await employee.findOne({ email });

  if (checkUser) {
    throw new CustomErrorApi("User already exists with same email", 400);
  }

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);

  const pn = parsePhoneNumber(p_no, { regionCode: "PK" });

  const session = await mongoose.startSession();

  session.startTransaction();

  const user = await employee.create({
    ...req.body,
    p_no: pn.number.e164,
    password: hashPassword,
  });

  if (!user) {
    throw new CustomErrorApi("Can't Register right now", 400);
  }

  const { access_token, jti } = generateAuthToken(user);

  const token = await employee.updateOne(
    { _id: user._id },
    { token_detail: { access_token, jti } }
  );

  await session.commitTransaction();

  return res.status(200).json({ user, token: { access_token } });
});
const Login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new CustomErrorApi("Enter your email address and password", 400);
  const user = await employee.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const { access_token, jti } = generateAuthToken(user);

    const token = await employee.findByIdAndUpdate(
      { _id: user._id },
      { token_detail: { access_token, jti } }
    );

    return res.status(200).json({ access_token, isAdmin: user.isAdmin });
  }
  throw new CustomErrorApi("Invalid email or password", 400);
});
const Logout = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const user = await employee.findOneAndUpdate(
    { email },
    { token_detail: { access_token: null, jti: null } },
    { new: true }
  );
  console.log(user);
  if (!user) {
    throw new CustomErrorApi("Invalid employee", 403);
  }
  return res.status(201).json({ msg: "Logout successful" });
});

const clocktimein = asyncHandler(async (req, res) => {
  const currtime = moment().format("MMMM Do YYYY, h:mm:ss a");
  const { pin } = req.body;
  const user = await employee.findById({ _id: req.user.id });
  if (pin !== user.pin) throw new CustomErrorApi("Enter Correct Pin", 401);
  const already = await times.findOne({
    user_id: req.user.id,
    starttime: { $ne: null },
    endtime: null,
  });
  if (already)
    throw new CustomErrorApi("Please try again after ending previoustime", 403);
  const replacing = await times.create({
    user_id: req.user.id,
    starttime: currtime,
  });
  if (!replacing)
    throw new CustomErrorApi("Please try again to Start time", 403);
  return res.status(201).json({ replacing });
});

const clocktimeout = asyncHandler(async (req, res) => {
  const currtime = moment().format("MMMM Do YYYY, h:mm:ss a");
  const { pin } = req.body;
  const user = await employee.findById({ _id: req.user.id });
  if (pin !== user.pin) throw new CustomErrorApi("Enter Correct Pin", 401);
  const replacing = await times.findOneAndUpdate(
    {
      user_id: req.user.id,
      starttime: { $ne: null },
      endtime: null,
    },
    { $set: { endtime: currtime } },
    { new: true }
  );
  if (!replacing) throw new CustomErrorApi("First Previous start Time ", 403);
  return res.status(201).json({ replacing });
});

module.exports = { Register, Login, Logout, clocktimein, clocktimeout };
