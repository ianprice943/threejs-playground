import React, { useRef, useState } from "react";

interface NumberInputProps {
    dimension: string,
    min: number,
    max: number,
    startingValue: number
}

const NumberInput = (props: NumberInputProps) => {
    return (
        <div className="flex mt-2">
            <label htmlFor={props.dimension} className="pr-2">{props.dimension}</label>
            <input className="ml-auto bg-transparent border-2 border-white rounded-md w-1/5" 
                type="number" 
                id={props.dimension} 
                name={props.dimension} 
                min={props.min} max={props.max} 
                defaultValue={props.startingValue}
            >
            </input>
            <div className="pl-2 w-1/5">
                <span className="pr-2">{props.min}</span>
                <span>{props.max}</span>
            </div>
        </div>
    )
}

export default NumberInput;