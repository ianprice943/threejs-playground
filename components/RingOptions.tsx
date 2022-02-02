import React from "react";
import NumberInput from "./NumberInput";

const RingOptions = () => {
    return (
        <>
            <NumberInput dimension="innerRadius" min={1} max={5} startingValue={1} />
            <NumberInput dimension="outerRadius" min={1} max={5} startingValue={2} />
            <NumberInput dimension="thetaSegments" min={1} max={64} startingValue={32} />
            <NumberInput dimension="phiSegments" min={1} max={64} startingValue={8} />
        </>
    );
}

export default RingOptions;