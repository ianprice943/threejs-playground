import React, { useState } from "react";

interface NumberInputProps {
    dimension: string,
    min: number,
    max: number
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
    const [dimensionValue, setDimensionValue] = useState(props.min.toString());
    
    return (
        <div className="flex pt-2">
            <label htmlFor={props.dimension} className="pr-2">{props.dimension}</label>
            <input className="ml-auto" type="number" id={props.dimension} name={props.dimension} value={dimensionValue} min={props.min} max={props.max} onChange={e => setDimensionValue(e.target.value)}></input>
        </div>
    )
}

export default NumberInput;