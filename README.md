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

## Screenshots

<img width="1920" height="1080" alt="Screenshot 2025-12-18 232106" src="https://github.com/user-attachments/assets/1d2903ad-38fb-4c74-ad6e-4eac263916a6" />

<img width="1920" height="1080" alt="Screenshot 2025-12-18 232114" src="https://github.com/user-attachments/assets/9ae10937-2eb7-4331-b245-85a4cbeacbea" />

<img width="1920" height="1080" alt="Screenshot 2025-12-18 232240" src="https://github.com/user-attachments/assets/762f5a1f-43e6-4bd5-960b-429db16954e5" />

<img width="1920" height="1080" alt="Screenshot 2025-12-18 232254" src="https://github.com/user-attachments/assets/8e7c4c5b-e13b-4095-96d6-51455ddb3834" />

<img width="1920" height="1080" alt="Screenshot 2025-12-18 232305" src="https://github.com/user-attachments/assets/33f5d66e-5073-4843-9405-9fe81e060aad" />

<img width="1920" height="1080" alt="Screenshot 2025-12-18 232318" src="https://github.com/user-attachments/assets/6d24908a-539d-453c-8135-cb1b55171910" />

<img width="1920" height="1080" alt="Screenshot 2025-12-18 232333" src="https://github.com/user-attachments/assets/0214a6fe-1687-4a8c-89cc-04cb4dafdaf4" />

<img width="1920" height="1080" alt="Screenshot 2025-12-18 232342" src="https://github.com/user-attachments/assets/533b203c-3eff-4feb-9bed-79e1a36a1025" />

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

- Inside the /server directory, create a .env file and add:
- MONGO_URI=your_mongo_connection_string
- JWT_SECRET=your_jwt_secret_key





