import React, { useState } from "react";

interface CheckboxInputProps {
    label: string,
    isChecked: boolean
}

const CheckboxInput: React.FC<CheckboxInputProps> = (props) => {
    const [labelValue, setLabelValue] = useState(props.isChecked.toString());

    return (
        <div className="flex pt-2">
            <label htmlFor={props.label} className="pr-2" >{props.label}</label>
            <input className="ml-auto" type="checkbox" id={props.label} name={props.label} value={labelValue} onChange={e => setLabelValue(e.target.value)} />
        </div>
    )
}

export default CheckboxInput;