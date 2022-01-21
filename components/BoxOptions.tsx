import React, { useState } from "react";

const BoxOptions = () => {
    const [width, setWidth] = useState("1");
    const [height, setHeight] = useState("1");
    const [depth, setDepth] = useState("1");
    const [widthSegments, setWidthSegments] = useState("1");
    const [heightSegments, setHeightSegments] = useState("1");
    const [depthSegments, setDepthSegments] = useState("1");

    // TODO make individual label/input combinations into components to cut down on repeat code

    return (
        <>
            <div className="flex pt-2">
                <label htmlFor="width" className="pr-2">width</label>
                <input className="ml-auto" type="number" id="width" name="width" value={width} min="1" max="5" onChange={e => setWidth(e.target.value)}></input>
            </div>
            <div className="flex pt-2">
                <label htmlFor="height" className="pr-2">height</label>
                <input className="ml-auto" type="number" id="height" name="height" value={height} min="1" max="5" onChange={e => setHeight(e.target.value)}></input>
            </div>
            <div className="flex pt-2">
                <label htmlFor="depth" className="pr-2">depth</label>
                <input className="ml-auto" type="number" id="depth" name="depth" value={depth} min="1" max="5" onChange={e => setDepth(e.target.value)}></input>
            </div>
            <div className="flex pt-2">
                <label htmlFor="widthSegments" className="pr-2">widthSegments</label>
                <input className="ml-auto" type="number" id="widthSegments" name="widthSegments" value={widthSegments} min="1" max="5" onChange={e => setWidthSegments(e.target.value)}></input>
            </div>
            <div className="flex pt-2">
                <label htmlFor="heightSegments" className="pr-2">heightSegments</label>
                <input className="ml-auto" type="number" id="heightSegments" name="heightSegments" value={heightSegments} min="1" max="5" onChange={e => setHeightSegments(e.target.value)}></input>
            </div>
            <div className="flex pt-2">
                <label htmlFor="depthSegments" className="pr-2">depthSegments</label>
                <input className="ml-auto" type="number" id="depthSegments" name="depthSegments" value={depthSegments} min="1" max="5" onChange={e => setDepthSegments(e.target.value)}></input>
            </div>
        </>
    );
}

export default BoxOptions;