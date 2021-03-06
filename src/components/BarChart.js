import React from "react";
import Chart from "chart.js";

import styled from "styled-components";
import ProjectCards from "./ProjectCards";

const BarGraphContainer = styled.div`
  border: 2px solid #7fcd91;
  box-sizing: border-box;
  border-radius: 4px;
`;

export default function BarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#575A89",
            borderColor: "#575A89",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          // {
          //   label: new Date().getFullYear() - 1,
          //   fill: false,
          //   backgroundColor: "#4c51bf",
          //   borderColor: "#4c51bf",
          //   data: [27, 68, 86, 74, 10, 4, 87],
          //   barThickness: 8
          // }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="w-full xl:w-4/12 pl-1 pr-4">
        <BarGraphContainer className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded h-32">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h2 className="text-gray-800 text-xl font-semibold text-center">
                  Task completion rate
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            <div className="relative">
              <canvas id="bar-chart"></canvas>
            </div>
          </div>
        </BarGraphContainer>
        <ProjectCards />
      </div>
    </>
  );
}
