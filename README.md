# VitaFit

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

VitaFit is a comprehensive fitness hub website designed to provide users with workout plans, nutrition guides, and an online store for fitness-related products. The platform aims to create a seamless and engaging experience for fitness enthusiasts, helping them achieve their health goals with curated content and personalized resources.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Security](#security)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## ✨ Features

- **User Authentication**
  - Secure login/signup system with split-panel UI
  - Role-based access (admin and user)
  - JWT-based session management

- **Workout Plans**
  - Dynamic workout plans for different levels
  - Categorized exercises (cardio, strength training)
  - Upper and lower body workout routines

- **Recipe Guides**
  - Nutritional information for each recipe
  - Recipe photos and meal plan associations

- **Online Store**
  - Browse and manage fitness products by category
  - Admin product management (add, edit, delete)

- **Responsive Design**
  - Mobile-first approach
  - Hamburger menu for mobile navigation
  - Adaptive layouts for all screen sizes

- **Modern UI/UX**
  - Clean, dark-themed interface
  - Framer Motion animations
  - Intuitive navigation

## 🛠️ Tech Stack

### Frontend

- React 18.x
- Tailwind CSS 3.x
- Framer Motion 11.x
- React Router 6.x
- Redux Toolkit

### Backend

- Node.js 16.x or higher
- Express.js 4.x
- MongoDB 5.x
- JWT for authentication
- Multer for file uploads

## 📋 Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher
- MongoDB 5.x
- Git

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/diretrix-git/VitaFIT.git
cd vitafit
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd back-end
npm install

# Install frontend dependencies
cd ../front-end
npm install
```

3. **Configure environment variables**

Create a `.env` file in the `back-end` directory:

```plaintext
PORT=5000
MONGO_URI=mongodb://localhost:27017/finalProject
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d
NODE_ENV=development
```

## 🚀 Running the Application

### Development Mode

```bash
# Start the backend server
cd back-end
npm start

# Start the frontend (in a new terminal)
cd front-end
npm start
```

### Production Build

```bash
cd front-end
npm run build
```

## ☁️ Deployment

The frontend is deployed on **Vercel**.

### Vercel Setup

When deploying via Vercel, set the following environment variable in your project settings (Settings → Environment Variables):

| Key | Value |
|-----|-------|
| `CI` | `false` |

This prevents Vercel from treating ESLint warnings as build errors.

The backend should be deployed separately (e.g., Railway, Render, or any Node.js host). Update the `REACT_APP_API_URL` or axios base URL in the frontend config to point to your deployed backend.

## 🔒 Security

### Authentication Flow

1. JWT-based authentication
2. Password hashing using bcrypt
3. Role-based access control (RBAC) — admin and user roles

### API Security

- CORS configuration for approved domains
- XSS protection headers
- Input validation on all routes

## 📁 Folder Structure

```plaintext
front-end/
├── public/
├── src/
│   ├── app/               # Redux store
│   ├── assets/            # Static assets
│   ├── Components/        # React components
│   ├── config/            # Axios config
│   ├── features/          # Redux slices
│   ├── ProtectedRoutes/   # Auth route guards
│   ├── App.js
│   └── index.js
├── package.json
└── tailwind.config.js

back-end/
├── src/
│   ├── config/            # DB connection
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Auth, upload middleware
│   ├── models/            # Mongoose models
│   └── routes/            # Express routes
├── uploads/               # Uploaded images
├── app.js
└── package.json
```

## 🔮 Future Enhancements

- User progress tracking and analytics dashboard
- Video tutorials and live streaming classes
- Community features (forums, challenges, friend system)
- Personalized AI-based recommendations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by [Krish Maharjan](https://github.com/diretrix-git)
