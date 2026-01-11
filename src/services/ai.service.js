const VET_TOPICS = [
  "food",
  "diet",
  "nutrition",
  "vaccin",
  "dog",
  "cat",
  "pet",
  "puppy",
  "kitten",
  "illness",
  "fever",
  "care",
  "health",
  "parasite",
  "ticks",
  "fleas"
];

function isVetQuestion(message) {
  const lower = message.toLowerCase();
  return VET_TOPICS.some(topic => lower.includes(topic));
}

async function getVetAIResponse(userMessage) {
  const lower = userMessage.toLowerCase();

  if (!isVetQuestion(userMessage)) {
    return "I can only help with veterinary-related questions such as pet care, diet, vaccinations, and preventive health.";
  }

  if (lower.includes("food") || lower.includes("diet")) {
    return "A balanced diet with quality protein, essential vitamins, and minerals is important for pets. The exact diet depends on your pet’s age, breed, and health condition.";
  }

  if (lower.includes("vaccin")) {
    return "Pets usually require core vaccinations annually or as advised by a veterinarian. Puppies and kittens follow a more frequent initial schedule.";
  }

  if (lower.includes("fever") || lower.includes("illness")) {
    return "If your pet shows signs of illness such as fever, lethargy, or loss of appetite, it’s best to consult a veterinarian as soon as possible.";
  }

  if (lower.includes("parasite") || lower.includes("ticks") || lower.includes("fleas")) {
    return "Regular deworming and parasite prevention help protect pets from ticks, fleas, and internal parasites.";
  }

  return "I’m here to help with general veterinary questions related to pet health, nutrition, and preventive care.";
}

module.exports = { getVetAIResponse };
