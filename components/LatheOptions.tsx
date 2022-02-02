import React from "react";
import NumberInput from "./NumberInput";

const LatheOptions = () => {
    return (
        <>
            <NumberInput dimension="segments" min={1} max={64} startingValue={32} />
        </>
    );
}

export default LatheOptions;