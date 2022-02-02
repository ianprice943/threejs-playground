import React from "react";
import NumberInput from "./NumberInput";

const LatheOptions: React.FC = () => {
    return (
        <>
            <NumberInput dimension="segments" min={1} max={64} />
        </>
    );
}

export default LatheOptions;