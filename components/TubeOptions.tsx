import React from "react";
import NumberInput from "./NumberInput";

const TubeOptions = () => {
    return (
        <>
            <NumberInput dimension="tubularSegments" min={1} max={128} startingValue={32} />
            <NumberInput dimension="radius" min={1} max={5} startingValue={1} />
            <NumberInput dimension="radialSegments" min={1} max={64} startingValue={8} />
        </>
    );
}

export default TubeOptions;