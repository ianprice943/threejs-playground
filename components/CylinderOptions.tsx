import React from "react";
import NumberInput from "./NumberInput";

const CylinderOptions = () => {
    return (
        <>
            <NumberInput dimension="radiusTop" min={1} max={5} startingValue={1} />
            <NumberInput dimension="radiusBottom" min={1} max={5} startingValue={1} />
            <NumberInput dimension="height" min={1} max={5} startingValue={1} />
            <NumberInput dimension="radialSegments" min={1} max={64} startingValue={32} />
            <NumberInput dimension="heightSegments" min={1} max={64} startingValue={16} />
        </>
    );
}

export default CylinderOptions;