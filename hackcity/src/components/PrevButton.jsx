import React from 'react'

function Button({pic, value}) {
    return (
       <div>
        <button className="hire-prev-button text-center">
          
              <img
                className="relative right-[30px] w-[12px] mt-0 "
                src={pic}
                alt="arrow right"
              />
                {value}
            </button>
       </div> 
    )
}

export default Button
