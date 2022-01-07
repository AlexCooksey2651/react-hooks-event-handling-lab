// Code Keypad Component Here
import React from "react";

function Keypad() {
    function change() {
        console.log('Entering password...')
    }
    return (
        <input onChange={change} type="password" />
    )   
}

export default Keypad;