function getNextStep(state) {
  if (!state.ownerName) return "ownerName";
  if (!state.petName) return "petName";
  if (!state.phone) return "phone";
  if (!state.datetime) return "datetime";
  return "confirm";
}

function getQuestion(step, data) {
  switch (step) {
    case "ownerName":
      return "What is the pet owner's name?";
    case "petName":
      return "What is your pet's name?";
    case "phone":
      return "Please provide your phone number.";
    case "datetime":
      return "Preferred appointment date and time?";
    case "confirm":
      return `
Please confirm the appointment details:
Owner: ${data.ownerName}
Pet: ${data.petName}
Phone: ${data.phone}
Date & Time: ${data.datetime}

Reply with Yes or No.
`;
  }
}

function isBookingIntent(message) {
  return ["appointment", "book", "schedule", "vet visit"]
    .some(word => message.toLowerCase().includes(word));
}

module.exports = { getNextStep, getQuestion, isBookingIntent };
