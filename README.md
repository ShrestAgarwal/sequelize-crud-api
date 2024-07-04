# User Management API

A user management API built with Express, PostgreSQL and Sequelize, featuring full CRUD operations and following the MVC pattern.

## Features

- **CRUD Operations**: Create, Read, Update, Delete user records.
- **UUID Support**: Unique identifiers for users.
- **Password Hashing**: Secure password storage.
- **MVC Architecture**: Separation of concerns for maintainability.

## Technologies Used

- Node.js
- Express
- Sequelize
- PostgreSQL
- UUID
- Bcrypt for password hashing

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```git clone https://github.com/ShrestAgarwal/sequelize-crud-api.git```
2. Navigate to the project directory:
   ```cd sequelize-crud-api```
3. Install dependencies:
   ```npm install```
4. Set up the database:
   Create a PostgreSQL database.
   Configure the database connection in 'config/config.json' file.

### Endpoints
- POST /users: Create a new user.
- GET /users: Get all users.
- GET /users/:id : Get a user by ID.
- PATCH /users/:id : Update a user by ID.
- DELETE /users/:id : Delete a user by ID.

### Project Structure
- config/: Database configuration.
- controllers/: Request handlers.
- models/: Sequelize models.
- routes/: API routes.
- services/: Business logic.
