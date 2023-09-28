# Employee Details Web Application

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

This is a web application that allows you to view and manage employee details. It uses React and React Router for the front-end and a RESTful API on the back-end to fetch employee data.

## Features

- View employee details, including name, email, and phone number.
- Navigate between different employee profiles.
- Easily go back to the home page.

## Technologies Used

- React
- React Router
- JavaScript
- RESTful API

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- A RESTful API providing employee data running locally or on a remote server. Update the API endpoint in the code accordingly.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/employee-details-app.git
   
2. Navigate to the project directory:

   ```bash
   cd employee-details-app
   
3. Install dependencies:

     ```bash
    npm install
     
4. Start the development server: The application will be accessible at http://localhost:3000 in your web browser.

     ```bash
   npm start
     
6. Start the json server : The Server will be accessible at http://localhost:8000/employee in your web browser.
   
     ```bash
    json-server --watch db.json --port 8000
     
## Usage

- Access the home page where you can see a list of employees.
- Click on an employee's name to view their details.
- You can navigate back to the home page using the "Back to Home" button.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your fork.
- Submit a pull request with a detailed description of your changes.
  
## License

This project is licensed under the MIT License - see the LICENSE file for details.
