const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    sessionId: String,
    ownerName: String,
    petName: String,
    phone: String,
    datetime: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);
