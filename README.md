# Authentication System with JWT

## Overview
This project implements a secure authentication system using JSON Web Tokens (JWT). It includes user registration, login, and token-based authentication to manage access to protected resources.

---

## Features
- **User Registration**: Users can create an account with a unique email and password.
- **User Login**: Registered users can log in with their credentials.
- **JWT Authentication**:
  - Generates a JWT upon successful login.
  - Verifies the JWT to authenticate requests to protected routes.
- **Secure Password Handling**: Passwords are hashed using bcrypt before storage.
- **Environment Variables**: Sensitive data like the JWT secret is stored securely in a `.env` file.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/auth-jwt-system.git
   cd auth-jwt-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   JWT_SECRET=your_secret_key
   DB_URI=your_database_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## Endpoints

### 1. **User Registration**
**POST** `/api/register`

Registers a new user.

#### Request Body:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

#### Response:
```json
{
  "message": "User registered successfully!",
  "user": {
    "id": "unique_user_id",
    "email": "johndoe@example.com"
  }
}
```

### 2. **User Login**
**POST** `/api/login`

Authenticates a user and returns a JWT.

#### Request Body:
```json
{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

#### Response:
```json
{
  "message": "Login successful!",
  "token": "your_jwt_token"
}
```

### 3. **Protected Route**
**GET** `/api/protected`

Access a protected resource. Requires a valid JWT.

#### Headers:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```

#### Response:
```json
{
  "message": "Welcome to the protected route!"
}
```

---

## JWT Workflow
1. **User Login**: Upon successful login, a JWT is generated and returned to the client.
2. **Token Storage**: The client stores the JWT (e.g., in localStorage or a cookie).
3. **Request Authorization**: For protected routes, the client includes the JWT in the `Authorization` header.
4. **Token Verification**: The server verifies the JWT and grants or denies access to the requested resource.

---

## Technologies Used
- **Node.js**: Backend runtime.
- **Express**: Web framework.
- **bcrypt**: For secure password hashing.
- **jsonwebtoken**: For generating and verifying JWTs.
- **MongoDB**: Database for storing user data.

---

## Security Best Practices
1. Use a strong, randomly generated JWT secret.
2. Store the `.env` file securely and never commit it to version control.
3. Use HTTPS to encrypt data transmission.
4. Set a reasonable expiration time for JWTs.
5. Use refresh tokens for long-lived sessions.

---

## Example `.env` File
```env
PORT=5000
JWT_SECRET=super_secure_jwt_secret
DB_URI=mongodb+srv://user:password@cluster.mongodb.net/mydatabase
```

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing
Feel free to submit issues and pull requests for new features or improvements.

---

## Contact
For any inquiries or support, please contact:
- **Email**: support@example.com
- **GitHub**: [your-username](https://github.com/your-username)

