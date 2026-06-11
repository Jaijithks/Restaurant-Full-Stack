# 🍽️ Restaurant Full Stack Application

A full-stack restaurant management and food ordering platform built using the MERN stack. The application provides a customer-facing website for browsing menu items and an admin dashboard for managing products, tables, and restaurant operations.

## 🚀 Live Demo

**Frontend:**
[Restaurant Full Stack Application](https://restaurant-full-stack-w1bu.vercel.app/?utm_source=chatgpt.com)

## 📌 Features

### Customer Side

* Browse restaurant menu items
* View food categories
* Responsive user interface
* Product image previews
* Modern and mobile-friendly design

### Admin Dashboard

* Secure admin login
* Add new menu items
* Upload food images
* Manage menu categories
* Update product details
* Delete products
* View all menu items
* Manage restaurant tables

### Backend

* REST API built with Express.js
* MongoDB database integration
* Image uploads using Multer
* Cloudinary image storage
* JWT-based authentication
* Environment variable configuration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* Cloudinary
* JWT Authentication
* dotenv

### Deployment

* Vercel (Frontend)
* MongoDB Atlas (Database)
* Cloudinary (Image Storage)

---

## 📂 Project Structure

```text
Restaurant-Full-Stack/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Admin/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/jaijithks/Restaurant-Full-Stack.git
cd Restaurant-Full-Stack
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

Run backend:

```bash
npm run server
```

---

### 3. Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

### 4. Admin Setup

```bash
cd Admin
npm install
npm run dev
```

---

## 🔐 Environment Variables

| Variable              | Description                     |
| --------------------- | ------------------------------- |
| PORT                  | Backend Port                    |
| MONGODB_URI           | MongoDB Atlas Connection String |
| JWT_SECRET            | JWT Authentication Secret       |
| CLOUDINARY_NAME       | Cloudinary Cloud Name           |
| CLOUDINARY_API_KEY    | Cloudinary API Key              |
| CLOUDINARY_SECRET_KEY | Cloudinary Secret Key           |

---

## 📸 Screenshots

### Home Page

* Food menu browsing
* Responsive design
* Category filtering

### Admin Dashboard

* Add menu items
* Upload images
* Manage products
* Table management

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full-stack MERN development
* REST API design
* Authentication and authorization
* File upload handling
* Cloud image storage integration
* MongoDB database operations
* React state management
* Frontend-backend communication using Axios
* Deployment workflows

---

## 👨‍💻 Author

**Jaijith K S**

GitHub:
[Jaijithks GitHub Profile](https://github.com/jaijithks?utm_source=chatgpt.com)

---

## 📜 License

This project is licensed under the MIT License.

Feel free to fork, modify, and use it for learning purposes.
