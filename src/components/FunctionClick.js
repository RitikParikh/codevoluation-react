import { click } from '@testing-library/user-event/dist/click'
import React from 'react'

function FunctionClick() {
    const clickHendler = () =>{
        console.log("Click");
    }
  return (
    <div>
        <button onClick={clickHendler}>Click</button>
    </div>
  )
}

export default FunctionClick