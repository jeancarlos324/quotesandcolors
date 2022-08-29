import React from 'react'

const Quote = ({className,style,text,...otherProps}) => {
  return (
    <>
    {text&&(
      <span className={`${className} font-semibold`} style={{color:`${style}`}}>
      {text}
    </span>
    )}
    </>
  )
}

export default Quote