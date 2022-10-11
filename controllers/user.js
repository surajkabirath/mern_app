import { User } from "../models/User.js";
import { asyncError } from "../middlewares/errorMiddleware.js";
import { Order } from "../models/Order.js";
export const myProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie("connect.sid");
    res.status(200).json({
      message: "Logged out",
    });
  });
};

export const getAdminUsers = asyncError(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    success: true,
    users,
  });
});

export const getAdminStats = asyncError(async (req, res, next) => {
  const userCount = await User.countDocuments();

  const orders = await Order.find({});

  const preparingOrders = orders.filter((i) => i.orderStatus === "Preparing");
  const shippedOrders = orders.filter((i) => i.orderStatus === "Shipped");
  const deliveredOrders = orders.filter((i) => i.orderStatus === "delivered");
  let totalIncome = 0;
  orders.forEach((i) => {
    totalIncome += i.totalAmount;
  });
  res.status(200).json({
    success: true,
    userCount,
    ordersCount: {
      total:orders.length,
      preparing:preparingOrders.length,
      shipped:shippedOrders.length,
      delivered:deliveredOrders.length,
    },
    totalIncome
  });
});
