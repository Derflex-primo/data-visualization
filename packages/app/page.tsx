"use client";

import { useRouter } from "next/navigation";
import React from "react";

const charts = [
  { id: 1, type: "Bar Chart" },
  { id: 2, type: "Line Chart" },
  { id: 3, type: "Pie Chart" },
  { id: 4, type: "Scatter Plot" },
  { id: 5, type: "Histogram" },
];

const DataVisualization = () => {
  const route = useRouter();
  return (
    <div className="h-[100vh] flex flex-col gap-20 justify-center items-center">
      <div className="text-stone-300">Fork here&nbsp;&nbsp;[<a className="text-red-400 hover:px-2 hover:text-red-500" target="_blank" href="https://github.com/Derflex-primo/data-visualization">Derflex-primo</a>] 👌🏼</div>
      <section className="flex flex-wrap justify-center md:flex-row">
        {charts.map((chart) => (
          <div
            key={chart.id}
            onClick={() =>
              route.push(`/data/${chart.type.toLowerCase().replace(/ /g, "-")}`)
            }
            className="p-4 m-2 bg-gray-200 bg-opacity-15 rounded-lg cursor-pointer hover:bg-opacity-20"
          >
            {chart.type}
          </div>
        ))}
      </section>
    </div>
  );
};

export default DataVisualization;
