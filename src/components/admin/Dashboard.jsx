import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../layout/Loader";

ChartJS.register(Tooltip, ArcElement, Legend);

const loading = false;

const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income" && "रु."}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboaard = () => {
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [10, 10, 20],
        backgroundColor: [
          "rgb(196, 30, 58)",
          "rgb(0, 0, 255)",
          "rgb(0,100,0)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className="dashboard">
      {loading === false ? (
      <main>
        <article>
          <Box title="Users" value={213} />
          <Box title="Orders" value={23} />
          <Box title="Income" value={21323} />
        </article>

        <section>
          <div>
            <Link to="/admin/orders">View Orders</Link>
            <Link to="/admin/users">View Users</Link>
          </div>

          <aside>
            <Doughnut data={data} />
          </aside>
        </section>
      </main>
       ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboaard;
