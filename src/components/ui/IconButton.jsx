import React from 'react'

const IconButton = ({textColor, icon, clickHandler}) => {

  return (
    <button className={`w-8 text-xl font-semibold cursor-pointer ${textColor}`} onClick={clickHandler}>
        {icon}
    </button>
  )
}

export default IconButton