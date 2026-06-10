# Infy - File Management Application

Welcome to the **Infy** project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Structure](#structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Repository](https://github.com/aabubokarr/infy)

## About

**Infy** is a cross-platform file management and Retrieval-Augmented Generation (RAG) ecosystem. It features an Express.js backend using PostgreSQL and Qdrant, coupled with Google’s Gemini AI and LangChain to enable semantic chat querying over uploaded files.

## Features

- File Management
- Google Drive Integration
- Dropbox Integration
- Chatbot

## Structure

The detailed directory tree of the project is outlined below:

```
.
├── bot/                              # Node.js-based Telegram bot service
│   ├── bot.js                        # Telegram bot CLI command handlers & API integration
│   └── package.json                  # Telegram bot dependencies (node-telegram-bot-api, axios)
├── client/                           # React SPA frontend application
│   ├── src/                          # Web app source directory
│   │   ├── components/               # Modular UI components
│   │   │   ├── Auth/                 # Authentication pages (Login, Register, OTP validation)
│   │   │   │   └── Auth.jsx
│   │   │   ├── Pages/                # Main feature layouts
│   │   │   │   ├── All/              # "All files" dashboard listing view
│   │   │   │   │   └── All.jsx
│   │   │   │   ├── Chatbot/          # Document-based Q&A AI RAG chatbot
│   │   │   │   │   └── Chatbot.jsx
│   │   │   │   ├── Dashboard/        # User stats and connected cloud storage view
│   │   │   │   │   └── Dashboard.jsx
│   │   │   │   ├── Files/            # File explorer and drag-and-drop upload
│   │   │   │   │   └── Files.jsx
│   │   │   │   ├── Images/           # Dedicated gallery viewer for images
│   │   │   │   │   └── Images.jsx
│   │   │   │   └── Parent/           # Sidebar layout shell container
│   │   │   │       └── Parent.jsx
│   │   │   ├── Profile/              # User profile settings & user avatar view
│   │   │   │   └── Avatar.jsx
│   │   │   └── Sidebar/              # Navigation panel component & links JSON
│   │   │       ├── Sidebar.jsx
│   │   │       └── barData.json
│   │   ├── App.jsx                   # Central layout router using react-router-dom
│   │   ├── index.css                 # Global styles and Tailwind imports
│   │   └── main.jsx                  # React DOM initialization & entry point
│   ├── package.json                  # Web client dependencies (Vite, React, Antd, Tailwind)
│   └── tailwind.config.js            # Tailwind CSS style overrides config
├── database/                         # SQL storage initialization
│   └── db.sql                        # PostgreSQL schema definition (users, cloud drives, file metadata, chunks)
├── mobile-app/                       # Native Android application
│   ├── app/                          # Mobile app code modules
│   │   ├── build.gradle.kts          # App dependencies & Kotlin compiler config
│   │   └── src/main/                 # Source files manifest & classes
│   │       ├── AndroidManifest.xml   # Permission declarations (network, storage)
│   │       └── java/com/example/myapplication/ # App Kotlin codebase
│   │           ├── ApiService.kt     # Retrofit endpoints mapping Express server routes
│   │           ├── MainActivity.kt   # Main entry point with Jetpack Compose views
│   │           ├── RetrofitClient.kt # Network HTTP handler config
│   │           └── TokenManager.kt   # Shared preferences storage for JWT token
│   └── build.gradle.kts              # Global Android project build configuration
└── server/                           # Express.js REST API server
    ├── config/                       # System database initialization
    │   └── db.js                     # PostgreSQL connection pool manager
    ├── middlewares/                  # Express validation middlewares
    │   └── authMiddleware.js         # JWT validation route blocker
    ├── models/                       # Database query handling models
    │   ├── auth.model.js             # User registry, login verification, & OTP generators
    │   ├── bucket.model.js           # Low level DB file management functions
    │   ├── dropbox.model.js          # Dropbox connection token queries
    │   ├── file.model.js             # Relates files to chunk IDs & handles embeddings
    │   └── google.model.js           # Google Drive OAuth persistence queries
    ├── routes/                       # Express router routes mapping API
    │   ├── authRoutes.js             # Handles user log in, sign up, and OTP generation/verification
    │   ├── dropboxRoutes.js          # Dropbox auth links and file tree mapping
    │   ├── fileRoutes.js             # File actions (upload/download/delete) and Gemini AI RAG query router
    │   ├── googleRoutes.js           # Google authorization loop and callback
    │   └── userRoutes.js             # Endpoint resolving user profiles info
    ├── utils/                        # Backend helper modules
    │   └── llm.js                    # Integrates LangChain/Gemini Pro connection client
    ├── server.js                     # Root entry point initializing server/routes
    └── package.json                  # Backend dependencies (Express, @google/generative-ai, Qdrant client, pg)
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabubokarr/infy.git
   ```
2. Navigate to the project's frontend directory:
   ```bash
   cd client
   ```
3. Install dependencies:
   ```bash
   npm add vite@latest
   ```
4. Navigate to the project's backend directory:
   ```bash
   cd server
   ```
5. Install dependencies:
   ```bash
   npm i
   ```

## Usage

1. Start the frontend:
   ```bash
   npm run dev
   ```
2. Start the backend:
   ```bash
   npm start
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Contributors

<p align="center">
  <a href="https://github.com/aabubokarr/infy/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=aabubokarr/infy" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
