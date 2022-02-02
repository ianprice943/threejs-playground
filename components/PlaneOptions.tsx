import React from "react";
import NumberInput from "./NumberInput";

const PlaneOptions = () => {
    return (
        <>
            <NumberInput dimension="width" min={1} max={5} startingValue={1} />
            <NumberInput dimension="height" min={1} max={5} startingValue={1} />
            <NumberInput dimension="widthSegments" min={1} max={64} startingValue={16} />
            <NumberInput dimension="heightSegments" min={1} max={64} startingValue={16} />
        </>
    );
}

export default PlaneOptions;