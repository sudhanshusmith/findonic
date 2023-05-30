import React from 'react'

function TextError(props) {
  return (
    <div className='text-red-600 font-medium my-2'>{props.children}</div>
  )
}

export default TextError