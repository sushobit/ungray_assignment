import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    userName: " ",
    password: " ",
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(formData)
    axios
      .post("http://3.227.101.169:8020/api/v1/login/",{
  "username": formData.userName,
  "email": "rushi@123gmail.com",
  "password": formData.password,
  "phone_number": "9393939099",
  "input_code": 0
})
      .then((res) => {
        console.log(res)
        if (res.status === 200 && res.data.message === "Successfully Logged in") {
          navigate("/dashboard")
        }
        else {
          alert("Enter correct credentials")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div> 
    <div class="container" id="log">
      <div class="row loginmaincontainer">
        <div class="col-md-6 offset-md-3 mt-5">
          <div class="signup-form">
            <div
              class="mt-5 border p-4 shadow logincontainer"
            >
              <h4 class="mb-5 text-secondary text-center">Login Account</h4>
              <div class="row">
                <div class="mb-3 col-md-12">
                  <label>
                    User Name<span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="userName"
                    class="form-control"
                    placeholder="Enter User Name"
                    onChange={(event) =>
                      setFormData({ ...formData, userName: event.target.value })
                    }
                  />
                </div>

                <div class="mb-3 col-md-12">
                  <label>
                    Password<span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                  />
                </div>

                <div class="col-md-12">
                  <button onClick={handleSubmit} class="btn btn-primary float-end login-btn">Login Page</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
