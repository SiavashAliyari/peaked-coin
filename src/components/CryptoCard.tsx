import React from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  name: string;
  price: number;
  code: string;
  children: JSX.Element;
};

function CryptoCard(props: Props) {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(1, 99, 132)",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-xl border-2 border-gray-700 mx-8 my-2">
      {/* first row */}
      <div className="flex flex-row w-full">
        {/* icon and info row */}
        <div className="flex flex-row w-full relative">
          <div className="absolute -translate-x-12 -translate-y-12 bg-gray-800 rounded-3xl p-2 border-t-4 border-b-[1px] border-r-[1px] border-l-4 border-gray-700">
            {props.children}
          </div>
          <div className="flex flex-col w-full ml-12">
            <div className="flex flex-row items-center justify-between">
              <p className="text-white">{props.name}</p>
              <p className="text-gray-500">${props.price}</p>
            </div>
            <p className="text-gray-500">{props.code}</p>
          </div>
        </div>
      </div>
      <div>
        <Line
          data={data}
          options={{
            responsive: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            scales: {
              x: {
                ticks: {
                  display: false,
                },
                grid: {
                  display: false,
                },
                border: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  display: false,
                },
                grid: {
                  display: false,
                },
                border: {
                  display: false,
                },
              },
            },
            hover: {},
          }}
        />
      </div>
    </div>
  );
}

export default CryptoCard;
