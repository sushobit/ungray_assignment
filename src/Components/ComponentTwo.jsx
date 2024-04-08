import React from "react";
import Chart from "react-apexcharts";
import mongoose from "mongoose";
import { useState,useEffect } from "react";
import axios from "axios";
function ComponentTwo() {
  const [comp2Data,setCompo2Data] = useState([
    {
      name : "This Year",
      data : [3,2,4,5,6,6]
    },
    {
      name : "Last Year",
      data : [3,5,5,6,6,6]
    }
  ]);
  const componentTwoData = async() =>{
    await axios.get("http://localhost:8000/dashboard/componentTwoData")
    .then((res)=>{
      console.log("backend ",res.data.data)
      setCompo2Data(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect (()=>{
    componentTwoData();
  },[])
  const series = comp2Data
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "#000",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#000",
        },
      },
      title: {
        text: "",
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetX: 100,
    },
    series: [
      {
        name: "This year",
        data:  comp2Data[0].data,
        color: "#f44336",
      },
      {
        name: "Last year",
        data: comp2Data[1].data,
        color: "#3f51b5",
      },
    ],
  };

  return (
    <div className="ps-5 text-center" id="chart">
      <Chart
        options={options}
        series={comp2Data}
        type="bar"
        height={400}
        width={820}
      />
    </div>
  );
}

export default ComponentTwo;
