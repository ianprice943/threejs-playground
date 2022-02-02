import React from "react";
import NumberInput from "./NumberInput";

const DodecahedronOptions: React.FC = () => {
    return (
        <>
            <NumberInput dimension="radius" min={1} max={5} />
            <NumberInput dimension="detail" min={0} max={5} />
        </>
    );
}

export default DodecahedronOptions;