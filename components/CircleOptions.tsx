import React from "react";
import NumberInput from "./NumberInput";

const CircleOptions = () => {
    return (
        <>
            <NumberInput dimension="radius" min={1} max={5} startingValue={1} />
            <NumberInput dimension="segments" min={1} max={64} startingValue={32} />
        </>
    );
}

export default CircleOptions;