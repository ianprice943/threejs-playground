import React from "react";
import NumberInput from "./NumberInput";

const IcosahedronOptions: React.FC = () => {
    return (
        <>
            <NumberInput dimension="radius" min={1} max={5} />
            <NumberInput dimension="detail" min={0} max={5} />
        </>
    );
}

export default IcosahedronOptions;