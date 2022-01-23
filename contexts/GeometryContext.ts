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

export interface FormOptions {
    [key: string]: any
}

export type FormOptionsContext = {
    formOptions: FormOptions,
    setFormOptions: (newFormOptions: FormOptions) => void
}

export const CanvasFormOptionsContext = React.createContext<FormOptionsContext>({
    formOptions: {},
    setFormOptions: () => {}
});

export const useFormOptionsContext = () => useContext(CanvasFormOptionsContext);