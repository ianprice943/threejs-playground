import React from "react";
import NumberInput from "./NumberInput";

const BoxOptions = () => {

    return (
        <>
            <NumberInput dimension="width" min={1} max={5} startingValue={1} />
            <NumberInput dimension="height" min={1} max={5} startingValue={1} />
            <NumberInput dimension="depth" min={1} max={5} startingValue={1} />
            <NumberInput dimension="widthSegments" min={1} max={64} startingValue={1} />
            <NumberInput dimension="heightSegments" min={1} max={64} startingValue={1} />
            <NumberInput dimension="depthSegments" min={1} max={64} startingValue={1} />
        </>
    );
}

export default BoxOptions;