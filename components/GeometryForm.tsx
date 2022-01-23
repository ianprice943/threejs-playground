import React, { FormEvent, useState, useRef } from "react";
import Draggable from "react-draggable";
import { useGeometryContext, useFormOptionsContext } from "../contexts/GeometryContext";
import BoxOptions from "./BoxOptions";

const GeometryForm: React.FC = () => {
    const { geometry, setGeometry } = useGeometryContext();
    const { formOptions, setFormOptions } = useFormOptionsContext();

    const formRef = useRef(null);

    const handleFormInput = (event: FormEvent) => {
        event.preventDefault();
        const formEl: HTMLFormElement = event.currentTarget as HTMLFormElement;
        const formEntries = new FormData(formEl);
        const formData = Object.fromEntries(formEntries.entries());

        console.log(formData);
        setGeometry(formData.geometry as string);
        setFormOptions(formData);
    }

    let geometryOptions;

    if (geometry === "BoxGeometry") {
        geometryOptions = <BoxOptions />
    }

    return (
        <Draggable nodeRef={formRef}>
            <form ref={formRef} onChange={handleFormInput} className="absolute flex flex-col p-2 bg-slate-400 bg-opacity-70 hover:cursor-pointer">
                <div>
                    <label htmlFor="geometry">Geometry: </label>
                    <select name="geometry" id="">
                        <option value="BoxGeometry">Box</option>
                        <option value="CircleGeometry">Circle</option>
                        <option value="ConeGeometry">Cone</option>
                        <option value="CylinderGeometry">Cylinder</option>
                        <option value="DodecahedronGeometry">Dodecahedron</option>
                        <option value="IcosahedronGeometry">Icosahedron</option>
                        <option value="LatheGeometry">Lathe</option>
                        <option value="OctahedronGeometry">Octahedron</option>
                        <option value="PlaneGeometry">Plane</option>
                        <option value="RingGeometry">Ring</option>
                        <option value="SphereGeometry">Sphere</option>
                        <option value="TetrahedronGeometry">Tetrahedron</option>
                        <option value="TorusGeometry">Torus</option>
                        <option value="TorusKnotGeometry">Torus Knot</option>
                        <option value="TubeGeometry">Tube</option>
                    </select>
                    {geometryOptions}
                </div>
            </form>
        </Draggable>
    )
}

export default GeometryForm;