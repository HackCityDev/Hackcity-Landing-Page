import React from 'react'

function Textarea({handleChange}) {
    
    return (
        <div>
            <textarea
              className="border border-[2px] border-[#c0c0c0] rounded-md w-[100%] md:min-w-[600px] lg:w-[750px]"
              onChange ={handleChange}
              name="message"
              id="message"
              cols="50"
              rows="6"
            ></textarea>
        </div>
    )
}

export default Textarea
