Register & Login Authentication System

This project is a Node.js & Express-based authentication system with secure user registration and login functionality. It uses MongoDB for storage and JWT for authentication, along with bcrypt for password hashing.

🚀 Features

✅ User Registration & Login

🔒 Password Hashing with bcrypt

🔐 Secure Authentication using JWT (jsonwebtoken)

🌍 Cross-Origin Resource Sharing handled via CORS

⚙️ Environment Variables via dotenv

🗄️ MongoDB Connection using Mongoose

🧾 Structured Project with MVC (Model-View-Controller) pattern

🔁 Auto-restart during development using nodemon

📁 Project Structure
project-folder/
│── controllers/
│── database/
│── middleware/
│── models/
│── routes/
│── .env
│── index.js   ← Server Entry Point
│── package.json

🛠️ Technologies Used
Package	Purpose
bcrypt	Hashing user passwords
cors	Handling Cross-Origin Requests
dotenv	Managing environment variables
express	Server framework
jsonwebtoken	User authentication tokens
mongoose	MongoDB connection & schema
nodemon	Auto server restart (dev only)

📦 Installation & Setup
# Clone the repository
git clone: https://github.com/lokesperni/REGISTER-LOGIN

# Navigate to project directory
cd project-folder

# Install dependencies
npm install

▶️ Run the Server

# Or standard start
npm start

Server runs from index.js.

🔗 API Routes (Example)
Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	User login
GET	/protected	Example of JWT-protected route