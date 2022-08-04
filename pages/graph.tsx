import { Line } from "react-chartjs-2";

export default function BreakEvenGraph() {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Fixed costs",
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return <Line data={data} height={"1vh"} width={"1vw"} />;
}
