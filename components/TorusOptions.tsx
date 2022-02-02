import React from "react";
import NumberInput from "./NumberInput";

const TorusOptions = () => {
    return (
        <>
            <NumberInput dimension="radius" min={1} max={5} startingValue={2} />
            <NumberInput dimension="tube" min={1} max={5} startingValue={1} />
            <NumberInput dimension="radialSegments" min={1} max={64} startingValue={16} />
            <NumberInput dimension="tubularSegments" min={1} max={128} startingValue={32} />
        </>
    );
}

export default TorusOptions;