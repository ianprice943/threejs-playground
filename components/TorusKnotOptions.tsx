import React from "react";
import NumberInput from "./NumberInput";

const TorusKnotOptions = () => {
    return (
        <>
            <NumberInput dimension="radius" min={1} max={5} startingValue={2} />
            <NumberInput dimension="tube" min={1} max={5} startingValue={1} />
            <NumberInput dimension="tubularSegments" min={1} max={128} startingValue={32} />
            <NumberInput dimension="radialSegments" min={1} max={64} startingValue={8} />
            <NumberInput dimension="p" min={1} max={20} startingValue={3} />
            <NumberInput dimension="q" min={1} max={20} startingValue={2} />
        </>
    );
}

export default TorusKnotOptions;