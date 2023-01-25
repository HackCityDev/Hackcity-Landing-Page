import React, {useState, useEffect} from "react";

function CheckBox({ name, value }) {


  const [option, setOption] = useState("")
  const handleOption = (e) => {
    setOption(e.target.value)
    console.log(option)
  }
  useEffect(() => {
  setOption('')
  }, [])


  return (
    <div>
      <button className="flex i mb-2 rounded-md text-[#656464] items-center text-[14px] w-[100%] md:w-[350px] lg:w-[370px] border-[#c0c0c0]  border px-1 h-[45px]">
        <input type="radio" value={value} onChange={handleOption} className="mr-3 ml-2 border" />
        {/* <div className="mr-5 ml-2 bg-[#032555] h-[15px] w-[15px] bg-[#acc5f1] rounded-2xl border border-[#2679ed]"> </div>  */}
        {name}
      </button>
    </div>
  );
}
// value ='hello' 
export default CheckBox;
