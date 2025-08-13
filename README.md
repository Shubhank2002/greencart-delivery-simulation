# 🚚 GreenCart Delivery Simulation

## 📌 Project Overview & Purpose

GreenCart Delivery Simulation is a full-stack web application designed to simulate delivery logistics for an e-commerce platform. It allows users to create drivers, orders, and routes, and visualize delivery performance. The goal is to provide a realistic simulation of delivery operations and profitability tracking.

---

## 🛠️ Tech Stack Used

| Layer       | Technology                     |
|-------------|--------------------------------|
| Frontend    | React, Vite, Tailwind CSS      |
| Backend     | Node.js, Express, MongoDB      |
| Auth        | JWT, HTTP-only Cookies         |
| Deployment  | Render                         |
| API Client  | Axios                          |

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/greencart-backend.git
   cd greencart-backend
2. npm install
3. 
4. JWT_SECRET=your_jwt_secret
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development

5. Backend (Render)
- Push your backend code to GitHub.
- Go to Render and create a new Web Service.
- Connect your GitHub repo.
- Set environment variables in the Render dashboard.
- Render will auto-deploy on every push to the main branch.

 6. Frontend (Render)
 - Push your frontend code to GitHub.
 - Go to Render and Create a New Static site
 - connect your GitHub repo
 - Render will auto-deploy on every push to the main branch.

7. Example Requests & Responses
Signup
POST /auth/signup
Request Body:
{
  "email": "user@example.com",
  "password": "securePassword123"
}


Response:
{
  "message": "user created successfully",
  "token": "JWT_TOKEN"
}


Login
POST /auth/login
Request Body:
{
  "email": "user@example.com",
  "password": "securePassword123"
}


Response:
{
  "message": "user logined successfully",
  "token": "JWT_TOKEN"
}

Frontend URL: "https://greencart-delivery-simulation-12.onrender.com"

Backend URL: "https://greencart-delivery-simulation.onrender.com"






🧠 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📄 License
This project is licensed under the MIT License.

---

Want help generating the actual Postman collection or converting this into Swagger/OpenAPI format? I can whip that up too.


