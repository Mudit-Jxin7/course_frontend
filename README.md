# Course Selling App - Frontend

## Description

This is the frontend part of a course selling app built with React, TypeScript, Vite, and Recoil. The app provides user and admin interfaces, allowing admins to perform CRUD operations on courses and users to view and purchase courses using Stripe for payment processing.
[Backend](https://github.com/Mudit-Jxin7/course_backend)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) - Version 14 or higher
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Mudit-Jxin7/course_frontend.git
```

2. Navigate to the project directory:

```bash
cd course_frontend
```

3. Install the project dependencies:

```bash
npm install
# or
yarn
```

### Configuration

You'll need to set up configuration for your app, including the Stripe API key inside CourseDetail.tsx.

### Development

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

This will start the development server on `http://127.0.0.1:5173/`. You can access the app in your web browser.

### Build

To build the production version of the app, run:

```bash
npm run build
# or
yarn build
```

The optimized production build will be available in the `dist` directory.

## Deployment

You can deploy the built application to your preferred hosting service or platform. Make sure to set up your server environment variables and configure your web server to serve the static files.

## Features

### User Interface

- Browse and search for available courses.
- Pagination of courses
- Purchase courses securely using Stripe integration.
- View purchased courses in the user dashboard.
- View and Give reviews for the courses.

### Admin Interface

- Log in with admin credentials.
- email : muditert34@gmail.com
- password : 123456
- Perform CRUD operations on courses:
  - Create new courses.
  - Update course information.
  - Delete courses.

### State Management

- The application uses Recoil for efficient state management, ensuring a smooth user experience.

## Technology Stack

- React
- TypeScript
- Vite
- Recoil
- Stripe for payment processing

## Contributing

If you would like to contribute to this project, please follow the standard GitFlow branching model. Submit pull requests to the `develop` branch and ensure your code meets the project's coding standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the creators of React, TypeScript, Vite, Recoil, and Stripe for their amazing tools and documentation.

## Contact

If you have any questions or need assistance, please contact [Mudit] at [muditert34@gmail.com].

Feel free to customize this README to fit your project's specific needs. It's essential to keep it up to date and provide clear and concise information for both developers and users.
