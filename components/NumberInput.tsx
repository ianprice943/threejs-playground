import React, { useRef, useState } from "react";

interface NumberInputProps {
    dimension: string,
    min: number,
    max: number,
    startingValue: number
}

const NumberInput = (props: NumberInputProps) => {
    const [dimensionValue, setDimensionValue] = useState(props.startingValue.toString());

    const clamp = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value === "" ? NaN : parseInt(event.target.value);
        const min = parseInt(event.target.min);
        const max = parseInt(event.target.max);

        if (isNaN(value)) {
            setDimensionValue(min.toString());
        } else if (value < min) {
            setDimensionValue(min.toString());
        } else if (value > max) {
            setDimensionValue(max.toString());
        } else {
            setDimensionValue(value.toString());
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