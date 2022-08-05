import { useState } from "react";
import { Line } from "react-chartjs-2";
import { createLabels, getRevData, getCostData } from "../util";

export default function BreakEvenGraph() {
  const [fixedCost, setFixedCost] = useState(60_000);
  const [totalRevenue, setTotalRevenue] = useState(189_000);
  const [totalCost, setTotalCost] = useState(114_000);
  const [totalUnitsSold, setTotalUnitsSold] = useState(36_000);
  const [labels, setLabels] = useState(
    createLabels(fixedCost, totalRevenue, totalCost, totalUnitsSold)
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Fixed costs",
        data: [...new Array(12).fill(fixedCost)],
        fill: false,
        borderColor: "rgb(201, 41, 26)",
        tension: 0.1,
      },
      {
        label: "Total costs",
        data: getCostData(totalCost, totalUnitsSold, fixedCost, labels),
        fill: false,
        borderColor: "rgb(227, 81, 18)",
        tension: 0.1,
      },
      {
        label: "Total Revenue",
        data: getRevData(totalRevenue, totalUnitsSold, labels),
        fill: false,
        borderColor: "rgb(25, 18, 227)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
  };
  return (
    <div>
      Fixed Costs:{" "}
      <input
        type="number"
        name="fixedCost"
        id="fixedCostsInput"
        placeholder="60,000"
        onChange={(data) => setFixedCost(parseInt(data.target.value))}
      />
      <br />
      Total revenue:{" "}
      <input
        type="number"
        name="totalRevenue"
        id="totalRevenueInput"
        placeholder="189,000"
        onChange={(data) => setTotalRevenue(parseInt(data.target.value))}
      />
      <br />
      Total Cost:{" "}
      <input
        type="number"
        name="totalCost"
        id="totalCostInput"
        placeholder="114,000"
        onChange={(data) => setTotalCost(parseInt(data.target.value))}
      />
      <br />
      Total Number Of Units Sold:{" "}
      <input
        type="number"
        name="totalCost"
        id="totalCostInput"
        placeholder="36,000"
        onChange={(data) => {
          setTotalUnitsSold(parseInt(data.target.value));
          setLabels(
            createLabels(
              fixedCost,
              totalRevenue,
              totalCost,
              parseInt(data.target.value)
            )
          );
        }}
      />
      <Line data={data} options={options} />
    </div>
  );
}
