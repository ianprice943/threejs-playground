import React, { useState } from "react";

interface WireframeProps {
    isWireframe: boolean,
    onChange: (wireframe: boolean) => void
}

const WireframeButtons = (props: WireframeProps) => {
    
    return (
        <div className="flex mt-2">
            <label className="pr-2" >wireframe</label>
            <button className="ml-auto px-2 bg-green-800 border-2 border-transparent rounded-md hover:border-black" onClick={(e) => { e.preventDefault(); props.onChange(true); }} tabIndex={0} aria-label="Turn on wireframe mode.">Yes</button>
            <button className="mx-2 px-2 bg-red-800 border-2 border-transparent rounded-md hover:border-black" onClick={(e) => { e.preventDefault(); props.onChange(false); }} tabIndex={0} aria-label="Turn off wireframe mode.">No</button>
        </div>
    )
}

export default WireframeButtons;