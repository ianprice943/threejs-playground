import React from "react";
import CheckboxInput from "./CheckboxInput";
import NumberInput from "./NumberInput";

const ConeOptions: React.FC = () => {
    return (
        <>
            <NumberInput dimension="radius" min={1} max={5} />
            <NumberInput dimension="height" min={1} max={5} />
            <NumberInput dimension="radialSegments" min={1} max={64} />
            <NumberInput dimension="heightSegments" min={1} max={64} />
            <CheckboxInput label="openEnded" isChecked={false} />
        </>
    );
}

export default ConeOptions;