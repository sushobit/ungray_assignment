import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function CompoSixTable() {

    const [tableData ,settableData] = useState([]);
    const componentSixData = async() =>{
      // I have used local server to get the data from mongodb
    await axios.get("http://localhost:8000/dashboard/componentSixData")
    .then((res)=>{
      console.log("backend ",res.data.data)
      settableData(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect (()=>{
    componentSixData();
  },[])   
  return (
    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Sold amount</th>
                          <th scope="col">Unit Price</th>
                          <th scope="col">Revenue</th>
                          <th scope="col">Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((ele) => {
                          return (
                            <>
                              <tr>
                                <th scope="row">{ele.Product}</th>
                                <td>{ele.sold_amount}</td>
                                <td>{ele.unit_price}</td>
                                <td>{ele.revenue}</td>
                                <td>{ele.rating}</td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
  )
}
