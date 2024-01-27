const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employee_id: {
    type: Number,
  },
  email: {
    type: String,
    require: [true, "Enter email"],
  },
  password: {
    type: String,
    require: [true, "Enter Password"],
  },
  pin: {
    type: String,
    require: [true, "Enter PIN"],
    unique: true,
    minlength: 4,
    maxlength: 6,
  },
  f_name: {
    type: String,
    require: [true, "Enter First name"],
    max: 30,
  },
  l_name: {
    type: String,
    max: 30,
  },
  username: {
    type: String,
    require: [true, "Enter username"],
  },
  salary: {
    type: String,
    require: [true, "Enter Salary"],
  },
  dob: {
    type: String,
    require: [true, "Enter DOB"],
  },
  joining_date: {
    type: String,
    require: [true, "Enter joining date"],
  },
  p_no: {
    type: String,
    unique: [true, "Enter unique phone no"],
    require: [true, "Enter phone no"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token_detail: { access_token: { type: String }, jti: { type: String } },
});
const employee = mongoose.model("employee", employeeSchema);

const timing = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "employee",
      require: [true],
    },
    starttime: {
      type: String,
      null: true,
    },
    endtime: {
      type: String,
      null: true,
    },
  },
  {
    timestamps: true,
  }
);

const times = mongoose.model("timing", timing);

module.exports = { employee, times };
