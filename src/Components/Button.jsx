/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Button({children,type="button", className, ...props}) {
  return (
    <button style={{borderRadius: "5px", cursor: "pointer"}} className={`${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
