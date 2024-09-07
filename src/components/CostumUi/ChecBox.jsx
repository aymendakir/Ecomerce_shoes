import { Check } from "lucide-react";
import React, { useState } from "react";

function CheckBox({ value, handleCheck }) {
  const [checked, setChecked] = useState(false);

  function handleClick(val) {
    handleCheck(val);
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
        className={`p-1 h-5 w-5 rounded-md border border-black relative ${
          checked ? "bg-black" : ""
        } flex items-center justify-center`}
      >
        {checked && <Check className="text-white " width={20} />}
      </div>
      <p className="capitalize font-light ">{value}</p>
    </div>
  );
}

export default CheckBox;
