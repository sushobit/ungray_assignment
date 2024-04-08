import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function CompnentFive() {

    const [compFiveData, setcompFiveData] = useState({})

    const component5Data = async() =>{
    await axios.get("http://3.227.101.169:8020/api/v1/sample_assignment_api_5/",{
      headers: {
            'accept': 'application/json',
            'Authorization': 'Basic dHJpYWw6YXNzaWdubWVudDEyMw=='
          }
      })
    .then((res)=>{
      console.log(res.data)
      setcompFiveData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect (()=>{
    component5Data()
  },[])

  return (
    <div class="card m-1 mt-1">
              <div class="card-body">
                <h6 class="card-title">Community feedback</h6>
                <h2 class="card-subtitle mb-2 text-body-secondary">
                  Mostly Positive
                </h2>
                <br></br>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: ""+compFiveData.negative+"%" }}
                    aria-valuenow={compFiveData.negative}
                    aria-valuemin="0"
                    aria-valuemax="65"
                  ></div>
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: ""+compFiveData.neutral+"%" }}
                    aria-valuenow={compFiveData.neutral}
                    aria-valuemin="0"
                    aria-valuemax="10"
                  ></div>
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: ""+compFiveData.positive+"%" }}
                    aria-valuenow={compFiveData.positive}
                    aria-valuemin="0"
                    aria-valuemax="13"
                  ></div>
                </div>
                <br></br>
                <ul className="ps-1">
                  <span href="#" class="card-link">
                    Negative
                  </span>
                  <span href="#" class="card-link">
                    Neutral
                  </span>
                  <span href="#" class="card-link">
                    Positive
                  </span>
                </ul>
                <ul className="ps-1">
                  <span className="me-3" href="#" class="card-link">
                    {compFiveData.negative}
                  </span>
                  <span className="ms-5" href="#" class="card-link">
                    {compFiveData.neutral}
                  </span>
                  <span className="ms-5" href="#" class="card-link">
                    {compFiveData.positive}
                  </span>
                </ul>
              </div>
            </div>
  )
}
