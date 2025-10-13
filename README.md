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

<img width="1920" height="1080" alt="Screenshot 2025-10-13 195306" src="https://github.com/user-attachments/assets/3f5bd95c-1029-482a-aa30-50cbfb3ab5ee" />

<img width="1920" height="1080" alt="Screenshot 2025-10-13 195315" src="https://github.com/user-attachments/assets/0c64b255-6505-4ac4-8dd8-d32ff3bc5e5d" />

<img width="1920" height="1080" alt="Screenshot 2025-10-13 200631" src="https://github.com/user-attachments/assets/ebf3fec8-b0fe-495f-bd58-d5f05f117852" />

<img width="1920" height="1080" alt="Screenshot 2025-10-13 200644" src="https://github.com/user-attachments/assets/b8ec07a4-bf47-4375-8324-d372d0441312" />

<img width="1920" height="1080" alt="Screenshot 2025-10-13 200313" src="https://github.com/user-attachments/assets/3f53cd95-6f08-4e0b-8ef7-c0b8f1e9c402" />

<img width="1920" height="1080" alt="Screenshot 2025-10-13 200320" src="https://github.com/user-attachments/assets/c931c8c7-41da-44ac-a1a7-1fc3d4bbcc80" />

<img width="1920" height="1080" alt="Screenshot 2025-10-13 200328" src="https://github.com/user-attachments/assets/7f7f1096-1189-4f28-a033-8d48aa3416ca" />

<img width="1920" height="1080" alt="Screenshot 2025-10-13 200335" src="https://github.com/user-attachments/assets/771c331a-aac4-4deb-bc18-77f6ffc8fd0a" />


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





