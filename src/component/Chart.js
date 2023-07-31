//to Make Line chart import line first ,for barchart import Bar
import { Line } from "react-chartjs-2";
// important
import { Chart as ChartJS } from "chart.js/auto";

const Chart = ({ arr = {}, currency, days }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    // [i][0] me mili second me time hai
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    }
    // [i][1] me price hai
    prices.push(arr[i][1]);
  }

  return (
    <>
      <Line
        data={{
          // first Label is for y axis line
          labels: date,
          //   datasets contain 2 values 1.original data ,2. label sabse upr kya likha jayega
          datasets: [
            {
              label: "Prices In " + currency,
              data: prices,
              borderColor: "rgb(128,255,0)",
              backgroundColor: "rgba(128,255,0,0.5)",
            },
          ],
        }}
      />
    </>
  );
};
export default Chart;
