import React from "react";

function Input({name}) {
  return (
    <div>
      <button className="flex i mb-2 rounded-md text-[#656464] items-center text-[14px] w-[370px] border-[#c0c0c0]  border px-1 h-[45px]">
        {/* <input type="button" value="" className ='mr-5 ml-5' /> */}
        <div className="mr-5 ml-2 bg-[#032555] h-[15px] w-[15px] bg-[#acc5f1] rounded-2xl border border-[#2679ed]"> </div> 
        {name}
      </button>
    </div>
  );
}

export default Input;
