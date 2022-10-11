import app from "./app.js";
import { mongoDB } from "./config/database.js";
import razorpay from "razorpay";

mongoDB();

export const instance = new razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});


app.listen(process.env.PORT, () =>
  console.log(`server is working on Port :${process.env.PORT}, in ${process.env.NODE_ENV} MODE`)
);
