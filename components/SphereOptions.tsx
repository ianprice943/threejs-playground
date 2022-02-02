import React from "react";
import NumberInput from "./NumberInput";

const SphereOptions = () => {
    return (
        <>
            <NumberInput dimension="radius" min={1} max={5} startingValue={1} />
            <NumberInput dimension="widthSegments" min={1} max={64} startingValue={32} />
            <NumberInput dimension="heightSegments" min={1} max={64} startingValue={16} />
        </>
    );
}

export default SphereOptions;