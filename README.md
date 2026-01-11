# 🐾 Veterinary Chatbot Backend

This is the backend service for the Veterinary Chatbot SDK.  
It handles chat messages, conversational appointment booking, and data persistence.

---

## 🚀 Features

- REST API for chatbot communication
- Conversational appointment booking flow
- Session-based conversation handling
- MongoDB persistence
- Mock AI service (vet-only responses)
- Clean and modular Express architecture
- SDK served as a static asset

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose

---

## 📁 Project Structure

Backend/
├── src/
│ ├── app.js
│ ├── server.js
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── services/
│ └── utils/
├── public/
│ └── chatbot.js
├── .env.example
└── package.json

yaml
Copy code

---

## 🔧 Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Environment Variables
Create a .env file based on .env.example:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
3️⃣ Run Server
bash
Copy code
npm run dev
Server will start on:

arduino
Copy code
http://localhost:5000
📡 API Endpoint
POST /api/chat
Handles:

User messages

Bot responses

Appointment booking flow

Session management

Request Body Example:

json
Copy code
{
  "message": "I want to book an appointment",
  "sessionId": "optional-session-id",
  "context": {
    "userName": "Aakash",
    "petName": "Buddy"
  }
}
🤖 AI Layer Note
The backend is designed to integrate with external AI providers (Gemini / OpenAI).
Due to API access limitations during development, a mock AI service is used for stability.

The AI layer is abstracted and can be replaced without changing business logic.

📦 SDK Hosting
The chatbot SDK is served as a static file:

bash
Copy code
/sdk/chatbot.js
Example usage:

html
Copy code
<script src="https://your-backend-domain/sdk/chatbot.js"></script>
🚀 Future Improvements
Admin dashboard for appointments

Authentication for clinics

Real AI provider integration

Message streaming

Docker setup

👤 Author
Aakash Nishad
MERN Stack Developer

yaml
Copy code

---

# 📘 Frontend README (`Frontend/README.md`)

```md
# 🐾 Veterinary Chatbot Frontend

This repository contains the frontend components of the Veterinary Chatbot system:
- Chatbot SDK (script-based integration)
- React-based Chatbot UI

---

## 📁 Folder Structure

Frontend/
├── chatbot-sdk/
│ ├── chatbot.js
│ └── test.html
│
└── chatbot-ui/
├── src/
├── package.json
└── vite.config.js

yaml
Copy code

---

## 🧩 chatbot-sdk

### Description
A lightweight, embeddable SDK that injects a floating chatbot widget into any website using a single script tag.

### Features
- Plug-and-play integration
- Floating chatbot button
- iframe-based UI isolation
- Optional contextual configuration

### Usage
```html
<script>
  window.VetChatbotConfig = {
    userName: "John",
    petName: "Buddy",
    source: "marketing-site"
  };
</script>

<script src="chatbot.js"></script>
Local Testing
Open test.html in browser to simulate SDK integration on a normal website.
