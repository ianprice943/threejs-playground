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