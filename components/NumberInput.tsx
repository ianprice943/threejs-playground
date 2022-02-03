import React, { useState } from "react";

interface NumberInputProps {
    dimension: string,
    min: number,
    max: number,
    startingValue: number
}

const NumberInput = (props: NumberInputProps) => {
    const [dimensionValue, setDimensionValue] = useState(props.startingValue.toString());

    const clamp = (event: any) => {
        const value = event.target.value;
        const min = event.target.min;
        const max = event.target.max;
        console.log(`value: ${value}, min: ${min}, max: ${max}`);
        if (value === "" || value < min) {
            setDimensionValue(min);
        } else if (value > max) {
            setDimensionValue(max);
        } else {
            setDimensionValue(value);
        }
    }
    
    return (
        <div className="flex mt-2">
            <label htmlFor={props.dimension} className="pr-2">{props.dimension}</label>
            <input className="ml-auto bg-transparent border-2 border-white rounded-md" type="number" id={props.dimension} name={props.dimension} value={dimensionValue} min={props.min} max={props.max} onChange={e => clamp(e)}></input>
        </div>
    )
}

export default NumberInput;