import React, { useState } from "react";

interface NumberInputProps {
    dimension: string,
    min: number,
    max: number,
    startingValue: number
}

const NumberInput = (props: NumberInputProps) => {
    const [dimensionValue, setDimensionValue] = useState(props.startingValue.toString());
    
    return (
        <div className="flex mt-2">
            <label htmlFor={props.dimension} className="pr-2">{props.dimension}</label>
            <input className="ml-auto" type="number" id={props.dimension} name={props.dimension} value={dimensionValue} min={props.min} max={props.max} onChange={e => setDimensionValue(e.target.value)}></input>
        </div>
    )
}

export default NumberInput;