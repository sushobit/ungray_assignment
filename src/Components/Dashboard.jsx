import React, { useEffect, useState } from "react";
import ComponentThree from "./ComponentThree";
import ComponentTwo from "./ComponentTwo";
import CompnentFive from "./CompnentFive";
import CompoSixTable from "./CompoSixTable";
import ComponentOne from "./ComponentOne";
import NavBar from "./navBar";
import ComponentFour from "./ComponentFour";

const Dashboard = () => {

  return (
    <div>

      <div classNameName="container-fluid" style={{ height: "50rem" }}>
        <div className="row flex-nowrap ">
          <div className="col-auto mt-2 col-md-3 col-xl-2 px-sm-2 px-0 bg-white ">
            {<NavBar />}
          </div>

          <div className="col py-2 shadow-lg">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12">
                  <div class="card  ">
                    <div class="card-header bg-white ">
                      <h5>Dashboard</h5>
                    </div>
                    {<ComponentOne />}

                    <h5 className="ps-3">Comparison</h5>
                    {<ComponentTwo />}

                    <h5 className="ps-3"> Top Products</h5>
                    <div className="ps-3 pe-3">
                      {<CompoSixTable />}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column" style={{ width: "20rem",height:"10rem" }}>
            <ComponentThree />
            <ComponentFour />
            <CompnentFive />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
