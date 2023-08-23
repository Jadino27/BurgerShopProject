import React, { useState } from "react";
import { State } from "country-state-city";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("IT");
  const [selectedState, setSelectedState] = useState("");
  
  const handleCountryChange = (event) => {
    const countryValue = event.target.value;
    setSelectedCountry(countryValue);
    setSelectedState(""); // Reset the selected state when the country changes
  };
  
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const countryOptions = [
    { code: "IT", name: "Italy" },
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "IN", name: "India" }
  ];

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select onChange={handleCountryChange} value={selectedCountry}>
              <option value="">Select a Country</option>
              {countryOptions.map((country) => (
                <option value={country.code} key={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select onChange={handleStateChange} value={selectedState}>
              <option value="">Select a State</option>
              {selectedCountry &&
                State.getStatesOfCountry(selectedCountry).map((state) => (
                  <option value={state.isoCode} key={state.isoCode}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="number" placeholder="Enter Phone Number" />
          </div>
          <Popup
            trigger={
              <Link className="link" to="/myorders">
                Confirm Order
              </Link>
            }
          >
            <div
              style={{
                color: "red",
                transform: "translate(0%, -500%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Order Successfully Placed!
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;



