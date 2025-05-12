# 💰 Finance-Flow

**Finance-Flow** is a full-stack financial management web application built using **React** and **Node.js**. It enables users to track income and expenses, visualize financial trends, and gain insights into personal financial habits.

---

## 🚀 Features Overview

### 🔐 Authentication System
- User registration and login
- JWT-based secure authentication
- Profile photo upload

### 🏠 Dashboard (`Home.jsx`)
- Total balance, income, and expense overview
- Recent transactions display
- Financial charts and insights
- 30-day expense analysis
- 60-day income tracking

### 💵 Income Management (`Income.jsx`)
- Add and manage income entries
- View and filter income history
- Download reports in Excel format
- Visualize income analytics
- Delete income records

### 💸 Expense Management (`Expense.jsx`)
- Track expenses by category
- View full expense history
- Analyze expense trends
- Download expense reports (Excel)
- Delete expense records

### 🧩 UI Components
- Reusable modal component
- Custom form input components
- Responsive design with Tailwind CSS
- Financial charts using Recharts

---

## 🖥️ Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Multer](https://github.com/expressjs/multer) for file uploads
- [JWT](https://jwt.io/) for authentication

---

## 🧠 Core Backend Features
- RESTful API endpoints
- JWT authentication middleware
- File uploads (profile photos)
- MongoDB data models:
  - **User Model** (with encrypted passwords)
  - **Income Model**
  - **Expense Model**
- Income & Expense CRUD operations
- Dashboard data aggregation for insights

---

## 📊 Charts & Visualization
- Income and expense trend lines
- Category-based breakdowns
- Interactive visual feedback for budgeting

---

## 📁 File Export Support
- Downloadable income and expense reports in Excel format

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/finance-flow.git
cd finance-flow
```

### 2. Install Frontend Dependencies
```bash
cd client
npm install
npm run dev
```

### 3. Install Backend Dependencies
```bash
cd ../server
npm install
npm start
```

### 4. Configure Environment Variables

#### Inside the /server directory, create a .env file and add:
#### MONGO_URI=your_mongo_connection_string
#### JWT_SECRET=your_jwt_secret_key

## Screenshots

![Screenshot 2025-05-07 192220](https://github.com/user-attachments/assets/f942f3ab-289b-457c-ae3e-79ad2df5239d)

![Screenshot 2025-05-07 192209](https://github.com/user-attachments/assets/5a87c093-519c-4ba8-b379-d2b3c7d30613)

![Screenshot 2025-05-07 192105](https://github.com/user-attachments/assets/b46e6fdb-fe51-4271-b98d-f06537db8f51)

![Screenshot 2025-05-07 192119](https://github.com/user-attachments/assets/93d328d3-0ce6-48ce-b24d-cbb16fb64f59)

![Screenshot 2025-05-07 192137](https://github.com/user-attachments/assets/bc507020-f006-41a4-89ef-ecc043b7d1e6)

![Screenshot 2025-05-07 192148](https://github.com/user-attachments/assets/a61240ce-ae6b-432c-be77-776038797ceb)

---



