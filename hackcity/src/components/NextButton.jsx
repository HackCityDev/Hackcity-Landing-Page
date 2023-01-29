import React from "react";

function Button({ pic, value, className }) {
  return (
    <div>
      <button className={className}>
        {value}
        <img className="ml-12 w-[12px] mt-0 " src={pic} alt="arrow right" />
      </button>
    </div>
  );
}

export default Button;
