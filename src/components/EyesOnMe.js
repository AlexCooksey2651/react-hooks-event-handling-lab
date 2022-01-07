// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function printGood() {
        console.log('Good!')
    }
    function printEyesOnMe() {
        console.log('Hey! Eyes on me!')
    }
    return (
        <button onFocus={printGood} onBlur={printEyesOnMe}>Eyes on me</button>
    )
}

export default EyesOnMe;