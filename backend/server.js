require ("dotenv").config();
const express=require("express");
const cors=require("cors");
const path=require("path");
const connectDB=require("./config/db");
const authRoutes=require("./routes/authRoutes");
const incomeRoutes=require("./routes/incomeRoutes");
const expenseRoutes=require("./routes/expenseRoutes");
const dashboardRoutes=require("./routes/dashboardRoutes");

const app=express();

app.use(
  cors({
    origin: ["https://finance-flow-by-star.vercel.app", "http://localhost:5173"], // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
connectDB();

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/income",incomeRoutes);
app.use("/api/v1/expense",expenseRoutes);
app.use("/api/v1/dashboard",dashboardRoutes);

app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.get('/', (req, res) => {
  res.send('API is live!');
});

const PORT=process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', ()=> console.log(`Server running on port ${PORT}`));
