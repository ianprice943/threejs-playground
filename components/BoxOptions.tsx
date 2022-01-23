import React from "react";
import NumberInput from "./NumberInput";

const BoxOptions: React.FC = () => {
    return (
        <>
            <NumberInput dimension="width" min={1} max={5} />
            <NumberInput dimension="height" min={1} max={5} />
            <NumberInput dimension="depth" min={1} max={5} />
            <NumberInput dimension="widthSegments" min={1} max={5} />
            <NumberInput dimension="heightSegments" min={1} max={5} />
            <NumberInput dimension="depthSegments" min={1} max={5} />
        </>
    );
}

export default BoxOptions;