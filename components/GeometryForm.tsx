import React, { FormEvent, useState, useRef } from "react";
import Draggable from "react-draggable";
import { useGeometryContext, useFormOptionsContext } from "../contexts/GeometryContext";
import BoxOptions from "./BoxOptions";
import CheckboxInput from "./CheckboxInput";
import CircleOptions from "./CircleOptions";
import ConeOptions from "./ConeOptions";
import CylinderOptions from "./CylinderOptions";
import DodecahedronOptions from "./DodecahedronOptions";
import IcosahedronOptions from "./IcosahedronOptions";
import OctahedronOptions from "./IcosahedronOptions copy";
import LatheOptions from "./LatheOptions";

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
                wireframe: false,
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
                wireframe: false,
                radius: "1",
                segments: "32"
            }
        } else if (geometry === "ConeGeometry") {
            return {
                geometry: "ConeGeometry",
                wireframe: false,
                radius: "1",
                height: "1",
                radialSegments: "32",
                heightSegments: "1",
                openEnded: "false"
            }
        } else if(geometry === "CylinderGeometry") {
            return {
                geometry: "CylinderGeometry",
                wireframe: false,
                radiusTop: "1",
                radiusBottom: "1",
                height: "2",
                radialSegments: "32",
                heightSegments: "1",
                openEnded: "false"
            }  
        } else if (geometry === "DodecahedronGeometry") {
            return {
                geometry: "DodecahedronGeometry",
                wireframe: false,
                radius: "1",
                detail: "0"
            }
        } else if (geometry === "IcosahedronGeometry") {
            return {
                geometry: "IcosahedronGeometry",
                wireframe: false,
                radius: "1",
                detail: "0"
            }
        } else if (geometry === "LatheGeometry") {
            return {
                geometry: "LatheGeometry",
                wireframe: false,
                segments: "32",
            }
        } else if (geometry === "OctahedronGeometry") {
            return {
                geometry: "OctahedronGeometry",
                wireframe: false,
                radius: "1",
                detail: "0"
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
    } else if (geometry === "CylinderGeometry") {
        geometryOptions = <CylinderOptions />
    } else if (geometry === "DodecahedronGeometry") {
        geometryOptions = <DodecahedronOptions />
    } else if (geometry === "IcosahedronGeometry") {
        geometryOptions = <IcosahedronOptions />
    } else if (geometry === "LatheGeometry") {
        geometryOptions = <LatheOptions />
    } else if (geometry === "OctahedronGeometry") {
        geometryOptions = <OctahedronOptions />
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
                    <CheckboxInput label="wireframe" isChecked={false} />
                    {geometryOptions}
                </div>
            </form>
        </Draggable>
    )
}

export default GeometryForm;