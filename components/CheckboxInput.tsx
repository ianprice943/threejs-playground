import React, { useState } from "react";

interface CheckboxInputProps {
    label: string,
    isChecked: boolean
}

const CheckboxInput: React.FC<CheckboxInputProps> = (props) => {
    const [checked, setChecked] = useState(props.isChecked);

    const onChange = (event: any) => {
        event.persist();
        setChecked(event.target.checked);
    }

    return (
        <div className="flex pt-2">
            <label htmlFor={props.label} className="pr-2" >{props.label}</label>
            <input className="ml-auto my-auto" type="checkbox" id={props.label} name={props.label} checked={checked} onChange={onChange} />
        </div>
    )
}

export default CheckboxInput;