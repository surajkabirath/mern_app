import React from "react";

const OrderDetails = () => {
  return (
    <section className="order_details">
      <main className="order_details_info">
        <h1>Order Details</h1>
        <div className="order_details_info_details">
          <h1>Shipping</h1>
          <p>
            <b>Address:</b>
            {"sjda 12-32ss dsad"}
          </p>
        </div>
        <div className="order_details_info_details">
          <h1>Contact</h1>
          <p>
            <b>Name:</b>
            {"Suraj Kabirath"}
          </p>
          <p>
            <b>Phone:</b>
            {658735687}
          </p>
        </div>

        <div className="order_details_info_details">
          <h1>Status</h1>
          <p>
            <b>Order Status:</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At:</b>
            {"23-02-2002"}
          </p>
          <p>
            <b>Delivered At:</b>
            {"23-02-2003"}
          </p>
        </div>

        <div className="order_details_info_details">
          <h1>Payment</h1>
          <p>
            <b>Payment Method:</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference:</b>#{"asdasdsadsad"}
          </p>
          <p>
            <b>Paid At:</b>
            {"23-02-2003"}
          </p>
        </div>

        <div className="order_details_info_details">
          <h1>Amount</h1>
          <p>
            <b>Items Total:</b>रु.{2132}
          </p>
          <p>
            <b>Shipping Charges:</b>रु.{200}
          </p>
          <p>
            <b>Tax:</b>रु.{232}
          </p>
          <p>
            <b>Total Amount:</b>रु.{232 + 200 + 2132}
          </p>
        </div>

        <article className="order_details_info_article">
          <h1>Ordered Items</h1>
          <div className="order_details_info_article_div">
            <h4>Cheese Burger</h4>
            <div className="order_details_info_article_div">
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div className="order_details_info_article_div">
            <h4>Veg Cheese Burger</h4>
            <div className="order_details_info_article_div">
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div className="order_details_info_article_div">
            <h4>Burger Fries</h4>
            <div className="order_details_info_article_div">
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>

          <div className="order_details_info_article_div">
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }} className="order_details_info_article_div"
            >
              रु.{2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
