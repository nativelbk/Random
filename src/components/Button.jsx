import React from 'react'

const Boutton = (props) => {
    return (
        <div>
            <button className='border-2 rounded-full border-white 
            gap-10
            bg-transparent w-[150px] h-[50px]  '>
                {props.btn}
            </button>
        </div>
    )
}

export default Boutton
