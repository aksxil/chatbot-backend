const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  role: { type: String, enum: ["user", "bot"], required: true },
  content: String,
  timestamp: { type: Date, default: Date.now }
});

const ConversationSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true },
    messages: [MessageSchema],
    context: Object,
    bookingState: {
      step: String,
      data: Object
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
