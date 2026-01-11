const Conversation = require("../models/Conversation");
const Appointment = require("../models/Appointment");
const { getVetAIResponse } = require("../services/ai.service");
const { isBookingIntent, getNextStep, getQuestion } = require("../services/appointmentFlow.service");
const { getSessionId } = require("../utils/session.util");
const { isValidPhone, isValidDate } = require("../utils/validators");

exports.handleChat = async (req, res) => {
  const { message, sessionId, context } = req.body;
  const sid = getSessionId(sessionId);

  let convo = await Conversation.findOne({ sessionId: sid });
  if (!convo) {
    convo = await Conversation.create({
      sessionId: sid,
      context,
      messages: [],
      bookingState: { data: {} }
    });
  }

  convo.messages.push({ role: "user", content: message });

  let reply = "";

  // INITIATE BOOKING
  if (isBookingIntent(message) && !convo.bookingState.step) {
    convo.bookingState.step = "ownerName";
    reply = getQuestion("ownerName");
  }

  // CONTINUE BOOKING FLOW
  else if (convo.bookingState.step) {
    const step = convo.bookingState.step;
    const data = convo.bookingState.data;

    // Save input
    if (step === "phone" && !isValidPhone(message)) {
      reply = "Please enter a valid 10-digit phone number.";
    } else if (step === "datetime" && !isValidDate(message)) {
      reply = "Please enter a valid date and time.";
    } else {
      data[step] = message;
      const nextStep = getNextStep(data);
      convo.bookingState.step = nextStep;

      // CONFIRMATION
      if (nextStep === "confirm") {
        reply = getQuestion("confirm", data);
      } else {
        reply = getQuestion(nextStep);
      }
    }
  }

  // CONFIRMATION RESPONSE
  else if (convo.bookingState.step === "confirm") {
    if (message.toLowerCase() === "yes") {
      await Appointment.create({
        sessionId: sid,
        ...convo.bookingState.data,
        datetime: new Date(convo.bookingState.data.datetime)
      });

      reply = "✅ Your appointment has been successfully booked!";
      convo.bookingState = null;
    } else {
      reply = "❌ Appointment cancelled. Let me know if you'd like to start again.";
      convo.bookingState = null;
    }
  }

  // NORMAL AI CHAT
  else {
    reply = await getVetAIResponse(message);
  }

  convo.messages.push({ role: "bot", content: reply });
  await convo.save();

  res.json({ reply, sessionId: sid });
};
