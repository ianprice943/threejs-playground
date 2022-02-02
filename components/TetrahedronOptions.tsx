import React from "react";
import NumberInput from "./NumberInput";

const TetrahedronOptions = () => {
    return (
        <>
            <NumberInput dimension="radius" min={1} max={5} startingValue={1} />
            <NumberInput dimension="detail" min={0} max={5} startingValue={0} />
        </>
    );
}

export default TetrahedronOptions;