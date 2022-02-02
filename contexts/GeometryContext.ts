import React, { useContext } from 'react';

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

export type WireframeContext = {
    wireframe: boolean,
    setWireframe: (newWireframe: boolean) => void
}

export const CanvasWireframeContext = React.createContext<WireframeContext>({
    wireframe: false,
    setWireframe: () => {}
});

export const useWireframeContext = () => useContext(CanvasWireframeContext);