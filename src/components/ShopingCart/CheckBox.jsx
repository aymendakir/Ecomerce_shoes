import React, { useEffect, useState } from "react";

function CheckBox({ value, handleCheck, valueChecked }) {
  const [checked, setChecked] = useState(valueChecked);
  useEffect(() => {
    setChecked(valueChecked);
  }, [valueChecked]);
  function handleClick(val) {
    if (!checked) {
      handleCheck(val);
    } else {
      handleCheck("");
    }
  }
  return (
    <div
      className="flex items-center gap-3"
      onClick={() => {
        setChecked(!checked);
        handleClick(value);
      }}
    >
      <div
        className={`p-1 h-5 w-5 rounded-full  bg-white border-blue-600 relative ${
          checked ? "border-blue-600 border-2" : "border-gray-600 border"
        } flex items-center justify-center`}
      >
        {checked && (
          <span className="bg-blue-600 w-full h-full rounded-full"></span>
        )}
      </div>
      <p className="capitalize font-light text-lg ">{value}</p>
    </div>
  );
}

export default CheckBox;
