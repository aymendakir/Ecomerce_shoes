import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

function MethodPayment({ onclick }) {
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);

  const handleCheck1 = (value) => {
    setCheckbox1Checked(!checkbox1Checked);
    if (!checkbox1Checked) {
      setCheckbox2Checked(false);
      setCheckbox3Checked(false);
      onclick(value);
    }
  };

  const handleCheck2 = (value) => {
    setCheckbox2Checked(!checkbox2Checked);
    if (!checkbox2Checked) {
      setCheckbox1Checked(false);
      setCheckbox3Checked(false);
      onclick(value);
    }
  };
  const handleCheck3 = (value) => {
    setCheckbox3Checked(!checkbox3Checked);
    if (!checkbox3Checked) {
      setCheckbox1Checked(false);
      setCheckbox2Checked(false);
      onclick(value);
    }
  };

  return (
    <header className="mt-5">
      <h2 className="text-2xl font-bold capitalize font-mono mt-2">Payment</h2>
      <div className="border border-gray-200 rounded-xl mt-3">
        <ul className="">
          <li className="border-b  border-gray-400 py-5 pl-5 capitalize">
            <CheckBox
              value={"payment delivery"}
              valueChecked={checkbox1Checked}
              handleCheck={(value) => {
                handleCheck1(value);
              }}
            />
          </li>
          <li className="border-b  border-gray-400 py-5 pl-5 capitalize">
            <CheckBox
              value={"card payment"}
              valueChecked={checkbox2Checked}
              handleCheck={(value) => {
                handleCheck2(value);
              }}
            />
          </li>
          <li className="border-b rounded-b-xl border-gray-400 py-5 pl-5 capitalize">
            <CheckBox
              value={"Paypal payment"}
              valueChecked={checkbox3Checked}
              handleCheck={(value) => {
                handleCheck3(value);
              }}
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MethodPayment;
