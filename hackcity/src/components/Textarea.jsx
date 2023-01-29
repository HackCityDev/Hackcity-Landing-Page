import React from 'react'

function Textarea({callback, id, type, placeholder, value}) {
    
    return (
        <div>
            <textarea
              className="border border-[2px] border-[#c0c0c0] rounded-md w-[100%] md:min-w-[600px] lg:w-[750px]"
              onChange ={callback}
              name="message"
              id={id}
              type = {type}
              value = {value}
              placeholder = {placeholder}
              cols="50"
              rows="6"
            ></textarea>
        </div>
    )
}

export default Textarea
