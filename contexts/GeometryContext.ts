import React, { useContext } from 'react';

export type GeometryContext = {
    geometry: string,
    setGeometry: (newGeometry: string) => void
}

export const CanvasGeometryContext = React.createContext<GeometryContext>({
    geometry: "BoxGeometry",
    setGeometry: () => {}
});

export const useGeometryContext = () => useContext(CanvasGeometryContext);

// need to figure out how to create multiple contexts

export interface BoxOptions {
    width: number,
    height: number,
    depth: number,
    widthSegments: number,
    heightSegments: number,
    depthSegments: number
}

export type BoxOptionsContext = {
    boxOptions: BoxOptions,
    setBoxOptions: (newBoxOptions: BoxOptions) => void
}

export const CanvasBoxOptionsContext = React.createContext<BoxOptionsContext>({
    boxOptions: { 
        width: 1,
        height: 1,
        depth: 1,
        widthSegments: 1,
        heightSegments: 1,
        depthSegments: 1
    },
    setBoxOptions: () => {}
});

export const useGemetryOptionsContext = () => useContext(CanvasBoxOptionsContext);