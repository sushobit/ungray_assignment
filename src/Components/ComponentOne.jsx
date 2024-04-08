import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import './ComponentOne.css'

export default function ComponentOne() {
const [compOneData, setcompOneData] = useState({})

  const component1Data = async() =>{
    await axios.get("http://3.227.101.169:8020/api/v1/sample_assignment_api_1/",{
      headers: {
            'accept': 'application/json',
            'Authorization': 'Basic dHJpYWw6YXNzaWdubWVudDEyMw=='
          }
      })
    .then((res)=>{
      console.log(res.data)
      setcompOneData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect (()=>{
    component1Data()
  },[])

  return (
    <div class="row p-2">
                      <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Purchase</h5>
                            <p class="card-text">{compOneData.purchases}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Revenue</h5>
                            <p class="card-text">{compOneData.revenue}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Refunds</h5>
                            <p class="card-text">{compOneData.refunds}</p>
                          </div>
                        </div>
                      </div>
                    </div>
  )
}
