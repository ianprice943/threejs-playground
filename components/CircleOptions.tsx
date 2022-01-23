import React from "react";
import NumberInput from "./NumberInput";

const CircleOptions: React.FC = () => {
    return (
        <>
            <NumberInput dimension="radius" min={1} max={5} />
            <NumberInput dimension="segments" min={1} max={64} />
        </>
    );
}

export default CircleOptions;