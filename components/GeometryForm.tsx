import React, { FormEvent, useState, useRef } from "react";
import Draggable from "react-draggable";
import { useGeometryContext, useFormOptionsContext } from "../contexts/GeometryContext";
import BoxOptions from "./BoxOptions";
import CircleOptions from "./CircleOptions";
import ConeOptions from "./ConeOptions";

const GeometryForm: React.FC = () => {
    //const { geometry, setGeometry } = useGeometryContext();
    const { formOptions, setFormOptions } = useFormOptionsContext();
    const geometry = formOptions.geometry;

    const formRef = useRef<HTMLFormElement>(null);

    const handleFormInput = (event: FormEvent) => {
        event.preventDefault();
        const formEl: HTMLFormElement = event.currentTarget as HTMLFormElement;
        const formEntries = new FormData(formEl);
        const formData = Object.fromEntries(formEntries.entries());

        if(formData.geometry !== geometry) {
            const newGeometryData = setDefaults(formData.geometry.toString());
            setFormOptions(newGeometryData);
        } else {
            setFormOptions(formData);
        }
    }

    const setDefaults = (geometry: string) => {
        if (geometry === "BoxGeometry") {
            return {
                geometry: "BoxGeometry",
                width: "1",
                height: "1",
                depth: "1",
                widthSegments: "1",
                heightSegments: "1",
                depthSegments: "1"
            }
        } else if (geometry === "CircleGeometry") {
            return {
                geometry: "CircleGeometry",
                radius: "1",
                segments: "1"
            }
        } else if (geometry === "ConeGeometry") {
            return {
                geometry: "ConeGeometry",
                radius: "1",
                height: "1",
                radialSegments: "1",
                heightSegments: "1",
                openEnded: "false"
            }
        } else {
            return {}
        }
    }

    let geometryOptions;

    if (geometry === "BoxGeometry") {
        geometryOptions = <BoxOptions />
    } else if (geometry === "CircleGeometry") {
        geometryOptions = <CircleOptions />
    } else if (geometry === "ConeGeometry") {
        geometryOptions = <ConeOptions />
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