const Income = require("../models/Income");
const Expense = require("../models/Expense");
const { isValidObjectId, Types } = require("mongoose");

// Dashboard Data
exports.getDashboardData = async (req, res) => {
  try {
 
const userId = req.user.id;
const userObjectId = new Types.ObjectId(String(userId));



const totalIncome = await Income.aggregate([
  { $match: { userId: userObjectId } },
  { $group: { _id: null, total: { $sum: "$amount" } } },
]);



const totalExpense = await Expense.aggregate([
  { $match: { userId: userObjectId } },
  { $group: { _id: null, total: { $sum: "$amount" } } },
]);



    // Last 60 Days Income Transactions
    const last60DaysIncomeTransactions = await Income.find({
      userId,
      date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
    }).sort({ date: -1 });

    const incomeLast60Days = last60DaysIncomeTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    // Last 30 Days Expense Transactions
    const last30DaysExpenseTransactions = await Expense.find({
      userId,
      date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    }).sort({ date: -1 });

    const expensesLast30Days = last30DaysExpenseTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    // Last 5 Transactions (Merged)
    const recentIncome = await Income.find({ userId })
      .sort({ date: -1 })
      .limit(5);
    const recentExpenses = await Expense.find({ userId })
      .sort({ date: -1 })
      .limit(5);

    const lastTransactions = [
      ...recentIncome.map((txn) => ({ ...txn.toObject(), type: "income" })),
      ...recentExpenses.map((txn) => ({ ...txn.toObject(), type: "expense" })),
    ]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);

    // Final Response
    res.json({
      totalBalance:
        (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
      totalIncome: totalIncome[0]?.total || 0,
      totalExpense: totalExpense[0]?.total || 0,
      last30DaysExpenses: {
        total: expensesLast30Days,
        transactions: last30DaysExpenseTransactions,
      },
      last60DaysIncome: {
        total: incomeLast60Days,
        transactions: last60DaysIncomeTransactions,
      },
      recentTransactions: lastTransactions,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
