import React from 'react'

function Button({pic}) {
    return (
       <div>
        <button className="hire-next-button text-center">
              Next{" "}
              <img
                className="ml-12 w-[12px] mt-0 "
                src={pic}
                alt="arrow right"
              />
            </button>
       </div> 
    )
}

export default Button
