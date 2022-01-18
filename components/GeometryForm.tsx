import React, { FormEvent, useState, useRef } from "react";
import Draggable from "react-draggable";
import { useGeometryContext } from "../contexts/GeometryContext";
// import { threeOptions, CameraOptions, RendererOptions, BasicGeometry, GeometryOptions, MaterialOptions, EnvMaps, MeshBasicMaterialOptions, MeshMatcapMaterialOptions, MeshNormalMaterialOptions, MeshPhongMaterialOptions, MeshPhysicalMaterialOptions, MeshStandardMaterialOptions, GradientMap, MeshToonMaterialOptions } from "OptionTypes";

const GeometryForm: React.FC = () => {
    const { geometry, setGeometry } = useGeometryContext();

    console.log(geometry);

    const formRef = useRef(null);

    const handleFormInput = (event: FormEvent) => {
        event.preventDefault();
        const formEl: HTMLFormElement = event.currentTarget as HTMLFormElement;
        const formEntries = new FormData(formEl);
        const formData = Object.fromEntries(formEntries.entries());

        console.log(formData);
        setGeometry(formData.geometry as string);
    }

    return (
        <Draggable nodeRef={formRef}>
            <form ref={formRef} onChange={handleFormInput} className="absolute p-2 bg-slate-400 bg-opacity-70 hover:cursor-pointer">
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
                </div>
            </form>
        </Draggable>
    )
}

export default GeometryForm;