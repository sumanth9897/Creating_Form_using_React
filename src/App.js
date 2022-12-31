

import { useState } from "react";
import Register from "./components/Registration";

import "./App.css";

function App() {
  const [completeDetails, setAllDetails] = useState([]);

  const getAllDetails = (detal) => {
    setAllDetails(detal);
    console.log(detal);
  };

  return (
    <p align="left" style={{ backgroundColor: 'orange', marginTop: '3%', marginLeft: '%33', marginRight: '%33', padding: '2%' }}>
      <div>
        <h1>Practise Lab Assignment</h1>
        <Register returnDetails={getAllDetails} />
        <br />
        <br />
        {completeDetails.length !== 0 && (
          <div>
            Registered Customer Details :
            <ul>
              {completeDetails.map((detl, pos) => (
                <li key={pos}>
                  <ul>
                    <li key={detl.firstname}>
                      First Name : {detl.firstname}
                    </li>
                    {detl.middlename.length !== 0 && (
                      <li key={detl.middlename}>
                        Middle Name : {detl.middlename}
                      </li>
                    )}
                    <li key={detl.lastname}>
                      Last Name : {detl.lastname}
                    </li>
                    <li key={detl.course}>
                      Course : {detl.course}
                    </li>
                    <li key={detl.gender}>
                      Gender : {detl.gender}
                    </li>
                    <li key={detl.phone}>
                      Phone Number : {detl.phone}
                    </li>
                    <li key={detl.address}>
                      Address : {detl.address}
                    </li>
                    <li key={detl.email}>
                      Email Id : {detl.email}
                    </li>
                  </ul>
                  <br />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </p>
  );
}

export default App;


