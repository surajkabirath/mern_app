import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cors from "cors";

const app = express();
export default app;
dotenv.config({
  path: "./config/config.env",
});

// middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
      secure: process.env.NODE_ENV === "development" ? false : true,
      httpOnly: process.env.NODE_ENV === "development" ? false : true,
      sameSite: process.env.NODE_ENV === "development" ? false : "none",
    },
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    Credential: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.enable("trust proxy");

connectPassport();

// import Our routes

app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);

// error handling middleware
app.use(errorMiddleware);
