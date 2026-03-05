# 🚀 ResumeAI: Build Your Resume in Minutes with AI

A modern, full-stack application that leverages artificial intelligence to help users instantly generate professional, ATS-friendly resumes. Built with the MERN stack, this platform features secure user authentication, cloud-based image handling, and a seamless client-server architecture.

### 🔗 **Live Demo:** [View Live App](https://resume-ai-build-your-resume-in-minu.vercel.app/)

## ✨ Features

* **AI-Powered Generation:** Instantly draft resume summaries, bullet points, and role descriptions using integrated AI services.
* **Secure Authentication:** Robust user login and registration protected by JSON Web Tokens (JWT) and encrypted passwords.
* **Cloud Media Uploads:** Seamless profile picture and asset management powered by ImageKit and Multer middleware.
* **Full CRUD Functionality:** Users can easily create, view, edit, and safely delete their saved resumes.
* **Modern Architecture:** A clean separation of concerns with a dedicated React/frontend client and an Express/MongoDB backend API.

## 🛠️ Technologies Used

| Category | Technologies |
| :--- | :--- |
| **Frontend (Client)** | React, modern CSS/UI frameworks |
| **Backend (Server)** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT) |
| **External Services** | AI API integration, ImageKit (Media), Multer (File Handling) |

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- `Node.js` installed on your machine.
- A `MongoDB` account or `local MongoDB` server.
- A modern web browser (Chrome, Edge, Firefox).

### Installation


1. **Clone the repository:**
   ```sh
   git clone https://github.com/iamAditya-Pandey/ResumeAI---Build-Your-Resume-in-Minutes-with-AI.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd ResumeAI---Build-Your-Resume-in-Minutes-with-AI
   ```

3. **Set up the Backend (Server):**
    ```sh
    cd server
    npm install
    ```
    - Create a new file named `.env` inside the `server` folder.
    - Add your secret keys to the `server/.env` file. It should look something like this:
    ```env
    PORT=5000
    MONGO_URI="your_mongodb_connection_string"
    JWT_SECRET="your_jwt_secret"
    ```

4. **Set up the Frontend (Client):**
    ```sh
    cd client
    npm install
    ```
    - Create a new file named `.env` inside the `client` folder.
    - Add your local server URL to the `client/.env` file:
    ```env
    VITE_BASE_URL="http://localhost:5000"
    ```


5. **Run the Server:** 
    - In your Server terminal, start the backend API:
    ```sh
    npm run server
    ```

6. **Run the Client:**  
    - In your Client terminal, start the Frontend API:
    ```sh
    npm run dev
    ```
    - Open your browser and go to the local URL provided by your client terminal `(usually http://localhost:5173).`

## 📂 Project Structure

The repository is structured into two main directories to separate the frontend client from the backend server logic.

```text
ResumeAI/
├── client/                     # Frontend Application
│   ├── src/                    # React components, pages, and assets
│   ├── public/                 # Static files
│   ├── package.json            # Client dependencies
│   └── .env                    # Client environment variables (Ignored)
│
└── server/                     # Backend API Application
    ├── configs/                # DB connection, AI setup, ImageKit & Multer logic
    ├── controllers/            # Logic for ai, resumes, and users
    ├── middlewares/            # JWT authMiddleware for protected routes
    ├── models/                 # Mongoose schemas (User.js, Resume.js)
    ├── routes/                 # API endpoint definitions (aiRoutes, resumeRoutes)
    ├── server.js               # Main Express entry point
    ├── package.json            # Server dependencies
    └── .env                    # Server environment variables (Ignored)
```

## 📬 Contact

**Aditya Pandey**
- **GitHub**: [@iamAditya-Pandey](https://github.com/iamAditya-Pandey)
- **Email**: pandeyaditya19012006@gmail.com
- **LinkedIn**: [Aditya Pandey](https://www.linkedin.com/in/aditya-pandey-23309a373/)
- **Instagram**: [@aditya.pandey_19](https://www.instagram.com/aditya.pandey_19/?hl=en)

---
*Built with ❤️ by Aditya Pandey.*
