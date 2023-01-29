import React from "react";

function CheckBox({ value, className, id, callback }) {
  return (
    <div>
      <button className="flex i mb-2 rounded-md text-[#656464] items-center text-[14px] w-[100%] md:w-[350px] lg:w-[370px] border-[#c0c0c0]  border px-1 h-[45px]">
        <input
          type="checkbox"
          name="checkbox"
          id={id}
          onChange={callback}
          className={` ${className}`}
          value = {` ${value}`}
        />
  
        {value}
      </button>
    </div>
  );
}

export default CheckBox;
