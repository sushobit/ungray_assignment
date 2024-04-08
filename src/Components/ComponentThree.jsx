import React from "react";
import Chart from "react-apexcharts"; // Assuming you're using ApexCharts for React
import { useEffect , useState} from "react";
import axios from "axios";

const ComponentThree= () => {

const [compThreeData, setcompThreeData] = useState({})

  const component3Data = async() =>{
    // this component getting data from api
    await axios.get("http://3.227.101.169:8020/api/v1/sample_assignment_api_3/",{
      headers: {
            'accept': 'application/json',
            'Authorization': 'Basic dHJpYWw6YXNzaWdubWVudDEyMw=='
          }
      })
    .then((res)=>{
      // here setting the data for this component
      setcompThreeData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect (()=>{
    component3Data()
  },[])

  const options = {
    series: [compThreeData.score],
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  };

  return (
      <div class="card m-1" style={{ height: "25rem" }}>
              <div class="card-body mb-5">
                <div id="chart">
                  <Chart
                    options={options}
                    series={options.series}
                    type="radialBar"
                    height={350}
                  />
                </div>
                <p class="text-center">Of 100% points</p>
                <hr></hr>
                <h5 class="card-text">{compThreeData.title}</h5>
                <p>
                  {compThreeData.message}
                </p>
                <button className="btn btn-outline-warning">
                  Improve your score
                </button>
              </div>
      </div>
        
    
  );
};

export default ComponentThree;
