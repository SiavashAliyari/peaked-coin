"use client";
import { CurrencyBtc } from "@phosphor-icons/react";
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

function page() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
      {/* card */}
      <div className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-xl border-2 border-gray-700">
        {/* first row */}
        <div className="flex flex-row w-full">
          {/* icon and info row */}
          <div className="flex flex-row w-full">
            <div>
              <CurrencyBtc size={64} weight="thin" color="White" />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between">
                <p className="text-white">Bitcoin</p>
                <p className="text-gray-500">$23,748.90</p>
              </div>
              <p className="text-gray-500">BTC</p>
            </div>
          </div>
        </div>
        <div>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}

export default page;
