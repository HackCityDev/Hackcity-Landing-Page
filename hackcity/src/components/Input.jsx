import React from "react";

function Input({ name, id, callback }) {
  return (
    <div>
      <input
        type="text"
        id={id}
        onChange={callback}
        className="mb-2 rounded-md text-[#656464] items-center text-[13px] px-2 w-[360px] border-[#c0c0c0]  border px-1 h-[43px]"
        placeholder={name}
      />
    </div>
  );
}

export default Input;
