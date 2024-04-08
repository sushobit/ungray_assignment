import React from 'react'
import { useState,useEffect } from 'react'
import { LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line } from 'recharts'
import axios from 'axios'

export default function ComponentFour() {

    const [compFourData, setcompFourData] = useState([])

    const component4Data = async() =>{
        await axios.get("http://3.227.101.169:8020/api/v1/sample_assignment_api_4/",{
        headers: {
                'accept': 'application/json',
                'Authorization': 'Basic dHJpYWw6YXNzaWdubWVudDEyMw=='
            }
        })
        .then((res)=>{
        console.log(res.data)
        setcompFourData(res.data)
        })
        .catch((err)=>{
        console.log(err)
        })
    }

    useEffect (()=>{
        component4Data()
    },[])

  return (
    <div class="card m-1" style={{ height: "25rem" }}>
            <div class="card-body mb-5">
                <LineChart width={250} height={350} data={compFourData}
                margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="unique_count" stroke="#8884d8" dot={false} strokeWidth={3}/>
                <Line type="monotone" dataKey="cumulative_tweets" stroke="#82ca9d" dot={false} strokeWidth={3}/>
                </LineChart>
            </div>
    </div>
  )
}
