import React from "react";
import { useState } from "react";

function Body() {
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [bmi, setBmi] = useState("");
  const [text, setText] = useState("")
  const [bmiRange, setBmiRange] = useState("");
  const [bmiHealth, setBmiHealth] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    let n = +mass / (+height / 100) ** 2;
    let bmi = n.toFixed(2);
    setBmi(bmi);
    setText("Your BMI is ");
    condition(bmi);

  };
  const condition = (bmi) => {
    if (bmi >= 0 && bmi <= 18.5) {
      setBmiRange("Your suggested weight range is __ - __");
      setBmiHealth("Your are Underweight");
    }
    else if (bmi > 18.5 && bmi <= 24.9) {
      setBmiRange("Your suggested weight range is __ - __");
      setBmiHealth("Your are in a Healthy weight range");
    }
    else if (bmi > 24.9 && bmi <= 29.9) {
      setBmiRange("Your suggested weight range is __ - __");
      setBmiHealth("Your are Overweight");
    }
    else if (bmi > 18.5 && bmi <= 24.9) {
      setBmiRange("Your suggested weight range is __ - __");
      setBmiHealth("Your are in a Healthy weight range");
    } else {
      setBmiRange("Your suggested weight range is __ - __");
      setBmiHealth("Your are Obese");
    }
  };
  return (
    <>
      <h1 className="text-center bg-primary text-white">BMI Calculator</h1>
      <div className="container d-flex justify-content-center">
        <form onSubmit={calculate}>
          <div className="mb-3 text-center">
            <label htmlFor="height" className="form-label fs-4">
              Enter your height in cm:
            </label>
            <input
              type={"number"}
              className="form-control"
              id="height"
              aria-describedby="emailHelp"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-3 text-center">
            <label htmlFor="weight" className="form-label fs-4">
              Enter your weight in kg:
            </label>
            <input
              type={"number"}
              className="form-control"
              id="weight"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
            />
          </div>
          <div className="container d-grid text-center">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
          <div className="text-center my-4">
            <p>{text}{bmi}</p>
            <p>{bmiRange}</p>
            <p>{bmiHealth}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Body;