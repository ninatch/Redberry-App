import { useState } from "react"


const Input = ({placeholder, state, change, name}) => {
    return (
        <input type="text" name={name} value={state} placeholder={placeholder} 
        onChange={change}></input>
    )
}

export default Input