import React from "react";
import NumberInput from "./NumberInput";

const CylinderOptions: React.FC = () => {
    return (
        <>
            <NumberInput dimension="radiusTop" min={1} max={5} />
            <NumberInput dimension="radiusBottom" min={1} max={5} />
            <NumberInput dimension="height" min={1} max={5} />
            <NumberInput dimension="radialSegments" min={1} max={64} />
            <NumberInput dimension="heightSegments" min={1} max={64} />
        </>
    );
}

export default CylinderOptions;