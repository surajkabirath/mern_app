import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Myorders from "./components/myOrders/Myorders"
import OrderDetails from "./components/myOrders/OrderDetails"
import Dashboard from "./components/admin/Dashboard"
import Users from "./components/admin/Users"
import Orders from "./components/admin/Orders"
import About from "./components/about/About"
import NotFound from "./components/layout/NotFound";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/users.scss";
import "./styles/orders.scss"
import "./styles/about.scss"
import "./styles/loader.scss"
import "./styles/notfound.scss"
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="/confirmorder" element={<ConfirmOrder />}></Route>
        <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/me" element={<Profile />}></Route>
        <Route path="/myorders" element={<Myorders />}></Route>
        <Route path="/myorders" element={<Myorders />}></Route>
        <Route path="/order/:id" element={<OrderDetails />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/users" element={<Users />}></Route>
        <Route path="/admin/orders" element={<Orders />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
