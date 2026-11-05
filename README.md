# VitaFit

![License](https://img.shields.io/badge/license-MIT-blue.svg)

VitaFit is a MERN fitness application with workout and meal-plan content, recipes, profiles, product management, and order endpoints. It is an earlier full-stack project with security and test gaps, not a verified production service.

This README describes the default `vitaFit` branch at [`d7207371811a0fbd670db9fa2480376aa0398553`](https://github.com/diretrix-git/VitaFIT/tree/d7207371811a0fbd670db9fa2480376aa0398553). The older `main` branch contains only the initial README. The React/CRA/Redux frontend and Express/Mongoose backend are represented by the [frontend manifest](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/front-end/package.json#L5-L35), [backend manifest](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/package.json#L2-L18), and [registered API routes](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/app.js#L29-L39). No install, application execution, deployment check, or fresh test run was performed for this documentation update.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Security and Known Gaps](#security-and-known-gaps)
- [Validation and Asset Scope](#validation-and-asset-scope)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## ✨ Features

- **User Authentication**
  - Login/signup source with split-panel UI; see the response privacy gap below
  - JWT and role middleware on protected routes, including admin, user, and subscribedUser roles
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
  - Responsive layout styles; device coverage has not been freshly verified

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

- Node.js
- Express.js 4.x
- MongoDB through Mongoose 8.x
- JWT for authentication
- Multer for file uploads

## 📋 Prerequisites

- Node.js and npm compatible with the checked-in manifests
- A local or hosted MongoDB instance
- Git

## 🚀 Installation

1. **Clone the repository**

```bash
git clone --branch vitaFit https://github.com/diretrix-git/VitaFIT.git
cd VitaFIT
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
JWT_SECRET=replace_with_a_unique_local_secret
```

`MONGO_URI` is read by the [database connector](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/config/db.js#L1-L17). `PORT=5000` matches the frontend's [hardcoded Axios base URL](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/front-end/src/config/axiosConfig.js#L1-L8); the backend otherwise defaults to 3000. JWT login expiry is currently hardcoded to one day, not controlled by `JWT_EXPIRE`. [Login source](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/controllers/userControllers.js#L69-L85).

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

The existing deployment notes target **Vercel** for the frontend. Current deployment availability has not been verified.

### Vercel Setup

When deploying via Vercel, set the following environment variable in your project settings (Settings → Environment Variables):

| Key | Value |
|-----|-------|
| `CI` | `false` |

The existing `CI=false` setting suppresses warning-as-error behavior in the build. Review the warnings rather than treating this setting as validation of the application.

Deploy the backend separately if needed. Update the hardcoded Axios `baseURL` in `front-end/src/config/axiosConfig.js` to the backend URL. `REACT_APP_API_URL` is not read by this config. Update the localhost CORS origin in `back-end/app.js` for the intended frontend. [Axios config](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/front-end/src/config/axiosConfig.js#L1-L8), [CORS configuration](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/app.js#L15-L21).

## 🔒 Security and Known Gaps

- **Implemented mechanisms:** bcrypt password hashing, JWT verification, and role middleware exist. These are specific source features, not a guarantee that every endpoint is secure. [User model](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/models/userModels.js#L4-L44), [JWT middleware](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/middleware/authMiddleware.js#L5-L25), [role middleware](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/middleware/authorizationMiddleware.js#L3-L24).
- **Response privacy:** registration returns the saved user document and login returns the queried user document. The schema does not exclude `password` from serialization, so these responses can expose the password hash. Return explicit safe response fields and add regression tests before using real accounts. [Registration/login responses](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/controllers/userControllers.js#L26-L85), [schema](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/models/userModels.js#L4-L46).
- **Authorization verification:** protected order/profile routes use authentication and role middleware, but per-user resource ownership still needs focused tests. Do not infer ownership isolation solely from role checks. [Order routes](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/routes/orderRoutes.js#L13-L23), [profile routes](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/routes/profileRoutes.js#L19-L54).
- **Uploads:** Multer stores files on disk using a MIME allowlist. Only the exercise upload configuration sets an explicit size limit; the other shown upload configurations do not. MIME metadata alone is not content validation. Add content/size validation and access/retention rules. `/uploads` is served as static content. [Upload middleware](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/src/middleware/uploadMiddleware.js#L19-L108), [static serving](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/app.js#L26-L27).

## Validation and Asset Scope

No application test suite was found in the inspected source tree. The backend `test` command is a placeholder that exits with an error; the frontend declares the CRA test runner, which by itself does not establish test coverage. [Backend scripts](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/back-end/package.json#L15-L18), [frontend scripts](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/front-end/package.json#L31-L35). The `test3` component is not evidence of a test suite. Build and runtime compatibility remain unverified by this documentation review.

The tracked tree contains `back-end/back.zip`, media, and uploaded profile/product/recipe/workout assets. Archive contents, asset ownership, and consent for uploaded personal images were not verified. Review them before redistribution or portfolio reuse, and use synthetic data for demonstrations. The source description here excludes archive contents. Source originality and sole authorship have not been independently verified. The existing MIT license and attribution below are retained; they do not establish rights to every uploaded asset. [Inspected tree](https://github.com/diretrix-git/VitaFIT/tree/d7207371811a0fbd670db9fa2480376aa0398553/back-end), [existing license](https://github.com/diretrix-git/VitaFIT/blob/d7207371811a0fbd670db9fa2480376aa0398553/LICENSE).

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
