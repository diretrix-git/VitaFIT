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
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Security](#security)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## ✨ Features

- **User Authentication**

  - Secure login/signup system
  - Role-based access (admin and user)
  - JWT-based session management

- **Workout Plans**

  - Dynamic workout plans for different levels
  - Categorized exercises (cardio, strength training)
  - Upper and lower body workout routines

- **Recipe Guides**

  - Nutritional information for each recipe
  - Recipe photos

- **Responsive Design**

  - Mobile-first approach
  - Hamburger menu for mobile navigation
  - Adaptive layouts for all screen sizes
  - Touch-friendly interface

- **Modern UI/UX**
  - Clean, minimalist interface
  - Framer Motion animations
  - Intuitive navigation
  - Consistent design language

## 🛠️ Tech Stack

### Frontend

- React 18.x
- Tailwind CSS 3.x
- Framer Motion 6.x
- React Router 6.x

### Backend

- Node.js 16.x or higher
- Express.js 4.x
- MongoDB 5.x
- JWT for authentication
- Multer for file uploads

### Development Tools

- ESLint for code linting
- Prettier for code formatting
- Cypress for E2E testing

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

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
   Create a `.env` file in the backend directory:

```plaintext
PORT=5000
MONGO_URI=mongodb://localhost:27017/finalProject
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d
NODE_ENV=development
```

<!-- Create a `.env` file in the back-end directory:

```plaintext
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
``` -->

## 🚀 Running the Application

### Development Mode

```bash
# Start the backend server
cd back-end
npm start

# Start the frontend application (in a new terminal)
cd front-end
npm start
```

### Production Mode

```bash
# Build the frontend
cd front-end
npm run build

# Start the production server
cd ../back-end
npm start
```

## 🔒 Security

### Authentication Flow

1. JWT-based authentication with refresh tokens
2. Password hashing using bcrypt
3. Role-based access control (RBAC)

### API Security

- Rate limiting: 100 requests per IP per 15 minutes
- CORS configuration for approved domains
- XSS protection headers
- CSRF token validation

## 📁 Folder Structure

````plaintext
front-end/
├── node_modules/           # Node.js dependencies
├── public/                 # Public static files
├── src/                    # Source code
│   ├── app/               # Application core setup
│   │   └── store.js       # Redux store configuration
│   ├── assets/            # Static assets (svgs)
│   ├── Components/        # Reusable React components
│   ├── config/            # Configuration files
│   ├── design/            # Design UI utilities
│   ├── features/          # Redux features/slices
│   ├── ProtectedRoutes/   # Authentication route protection
│   ├── App.css            # Main application styles
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   └── transition.js      # Page transition animations
├── .gitignore            # Git ignore configuration
├── package-lock.json     # Dependency lock file
├── package.json          # Project configuration and dependencies
├── README.md             # Project documentation
└── tailwind.config.js    # Tailwind CSS configuration

## Backend Structure (`/back-end`)
```plaintext
backend/
├── node_modules/         # Node.js dependencies
├── media/               # Media file storage
├── src/                 # Source code
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── uploads/        # File upload directories
│       ├── exerciseImg/   # Exercise images
│       ├── productImg/    # Product images
│       ├── profile/       # User profile images
│       ├── recipeImg/     # Recipe images
│       └── workoutImg/    # Workout images
├── .env                 # Environment variables
├── .gitignore          # Git ignore configuration
├── app.js              # Application entry point
├── package-lock.json   # Dependency lock file
└── package.json        # Project configuration and dependencies
````

## 🔮 Future Enhancements

- **User Profile Customization**

  - Custom avatars
  - Progress photos
  - Achievement badges
  - Fitness goals tracking

- **Advanced Analytics Dashboard**

  - Workout progress visualization
  - Calorie tracking graphs
  - Body measurements tracking
  - Personal records tracking

- **Community Features**

  - User forums
  - Social sharing
  - Workout challenges
  - Friend system

- **Enhanced Content**
  - Video tutorials
  - Live streaming classes
  - Expert consultations
  - Personalized recommendations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes:

```bash
git commit -m 'Add some AmazingFeature'
```

4. Push to the branch:

```bash
git push origin feature/AmazingFeature
```

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

<!-- # VitaFit

# A fully functional project written in JavaScript showing the different workout plans and recipes according to the user's requirements.

This project is a fully functional web application that allows users to view the workout plans and recipes according to their requirements. The application is designed to be user-friendly and easy to use, with a simple interface that allows users to select their workout plan and view the recipes.

## Features

- User-friendly interface
- View workout plans and recipes
- Save user's progress
- Customize workout plans and recipes
- Access to a database of workout plans and recipes
- Access to a database of recipes

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine.
2. Open the project in your preferred IDE (e.g., Visual Studio Code).
3. Install the required dependencies by running the command `npm install`.
4. Start the application by running the command `npm start`.

## Usage

To use the application, follow these steps:

1. Open the application in your web browser.
2. Select your workout plan from the available options.
3. View the recipes for your selected workout plan.
4. Customize your workout plan and recipes as desired.
5. Save your progress if you want to resume it later.
6. Enjoy your new-found fitness!

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgments

The application makes use of the following libraries:

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)

The application also makes use of the following APIs:

- [OpenWeatherMap](https://openweathermap.org/)
- [Sport-Tracker](https://www.sport-tracker.com/)

The application was inspired by the need for a simple and user-friendly web application that allows users to view workout plans and recipes according to their requirements. The application is designed to be a one-stop-shop for all fitness needs, providing users with a comprehensive and customizable solution for their fitness journey.

Overall, VitaFit is a fully functional web application that allows users to view workout plans and recipes according to their requirements. The application is designed to be user-friendly and easy to use, with a simple interface that allows users to select their workout plan and view the recipes. The application also includes features such as the ability to save user's progress, customize workout plans and recipes, and access to a database of workout plans and recipes. The application is licensed under the MIT License and is open source, which means that it can be modified and improved upon by the community. The application is available for both Windows and Mac, and it can be downloaded from the official website.

## Screenshots

![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)
![Screenshot 3](screenshots/screenshot3.png)
![Screenshot 4](screenshots/screenshot4.png)

## Video Demo

[Link to the video demo](https://youtu.be/dQw4w9WgXcQ)
 -->

<!-- VitaFit

VitaFit is a free and open source program that allows you to fit your vita to your body. It is designed to be used with a smartphone or tablet, and it is compatible with both Android and iOS. The program is available for both Windows and Mac, and it can be downloaded from the official website.

The program is designed to be user-friendly and easy to use. It provides a simple interface that allows you to select your vita, adjust the fit, and see the results in real-time. The program also includes a feature that allows you to save your progress and resume it later.

The program is open source and free, which means that you can use it for any purpose you want. You can modify the program to suit your needs, and you can also share your modifications with others. The program is available for both Windows and Mac, and it can be downloaded from the official website.

To get started with VitaFit, you can follow these steps:

1. Download the program from the official website.
2. Install the program on your computer.
3. Open the program and select your vita.
4. Adjust the fit as desired.
5. Save your progress if you want to resume it later.
6. Enjoy your new-found fit!

Note: The program is designed to be used with a smartphone or tablet, and it is compatible with both Android and iOS. The program is available for both Windows and Mac, and it can be downloaded from the official website. However, the program may not be able to fit your vita perfectly, and it may not be able to fit all types of vita. If you are not satisfied with the results, you can contact the developers for support. -->
