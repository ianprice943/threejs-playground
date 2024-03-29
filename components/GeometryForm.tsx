import React, { FormEvent, useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { useFormOptionsContext, useWireframeContext } from "../contexts/GeometryContext";
import BoxOptions from "./BoxOptions";
import CircleOptions from "./CircleOptions";
import ConeOptions from "./ConeOptions";
import CylinderOptions from "./CylinderOptions";
import DodecahedronOptions from "./DodecahedronOptions";
import IcosahedronOptions from "./IcosahedronOptions";
import OctahedronOptions from "./OctahedronOptions";
// import LatheOptions from "./LatheOptions";
import PlaneOptions from "./PlaneOptions";
import WireframeButtons from "./WireframeButtons";
import RingOptions from "./RingOptions";
import SphereOptions from "./SphereOptions";
import TetrahedronOptions from "./TetrahedronOptions";
import TorusOptions from "./TorusOptions";
import TorusKnotOptions from "./TorusKnotOptions";
import TubeOptions from "./TubeOptions";

const GeometryForm = () => {
    const { formOptions, setFormOptions } = useFormOptionsContext();
    const { wireframe, setWireframe } = useWireframeContext();
    let geometry = formOptions.geometry;
    const [geometryOptions, setGeometryOptions] = useState<JSX.Element>(<></>);

    const handleFormInput = (event: FormEvent) => {
        event.preventDefault();
        const formEl: HTMLFormElement = event.currentTarget as HTMLFormElement;
        let formEntries = new FormData(formEl);
        formEntries = clampFormData(formEl, formEntries);
        const formData = Object.fromEntries(formEntries.entries());

        if(formData.geometry !== geometry) {
            const newGeometryData = setDefaults(formData.geometry.toString());
            setFormOptions(newGeometryData);
        } else {
            setFormOptions(formData);
        }
    }

    const clampFormData = (formEl: HTMLFormElement, formEntries: FormData) => {
        //formEl.children[0] and 1 can be skipped since they're always the drop down and wireframe buttons
        for(let i = 3; i < formEl.children.length - 1; i++) {
            const curInput = formEl.children[i].children[1];
            console.log('curInput', curInput)
            const min = parseInt(curInput.getAttribute('min') as string);
            const max = parseInt(curInput.getAttribute('max') as string);
            const curKey = curInput.getAttribute('name');
            let curValue = formEntries.get(curKey as string) as unknown as number;
            curValue = isNaN(curValue) ? min : curValue;
            if(curValue !== null && min !== null && curValue < min) {
                curValue = min;
            } else if (curValue !== null && max !== null && curValue > max) {
                curValue = max;
            }
            if(curKey !== null && curValue !== null) {
                formEntries.set(curKey, curValue.toString());
            }
        }

        return formEntries;
    }

    const updateFormOptionsFromNewGeometry = (e: any) => {
        console.log('value', e?.target?.value);
        const newGeometryData = setDefaults(e?.target?.value);
        setFormOptions(newGeometryData);
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
                segments: "32"
            }
        } else if (geometry === "ConeGeometry") {
            return {
                geometry: "ConeGeometry",
                radius: "1",
                height: "1",
                radialSegments: "32",
                heightSegments: "1",
                openEnded: "false"
            }
        } else if(geometry === "CylinderGeometry") {
            return {
                geometry: "CylinderGeometry",
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
                radius: "1",
                detail: "0"
            }
        } else if (geometry === "IcosahedronGeometry") {
            return {
                geometry: "IcosahedronGeometry",
                radius: "1",
                detail: "0"
            }
        // } else if (geometry === "LatheGeometry") {
        //     return {
        //         geometry: "LatheGeometry",
        //         wireframe: false,
        //         segments: "32",
        //     }
        } else if (geometry === "OctahedronGeometry") {
            return {
                geometry: "OctahedronGeometry",
                radius: "1",
                detail: "0"
            }
        } else if (geometry === "PlaneGeometry") {
            return {
                geometry: "PlaneGeometry",
                width: "1",
                height: "1",
                widthSegments: "16",
                heightSegments: "16"
            }
        } else if (geometry === "RingGeometry") {
            return {
                geometry: "RingGeometry",
                innerRadius: "1",
                outerRadius: "2",
                thetaSegments: "32",
                phiSegments: "8"
            }
        } else if (geometry === "SphereGeometry") {
            return {
                geometry: "SphereGeometry",
                radius: "1",
                widthSegments: "32",
                heightSegments: "16"
            }
        } else if (geometry === "TetrahedronGeometry") {
            return {
                geometry: "TetrahedronGeometry",
                radius: "1",
                detail: "0"
            }
        } else if (geometry === "TorusGeometry") {
            return {
                geometry: "TorusGeometry",
                radius: "2",
                tube: "1",
                radialSegments: "16",
                tubularSegments: "32"
            }
        } else if (geometry === "TorusKnotGeometry") {
            return {
                geometry: "TorusKnotGeometry",
                radius: "2",
                tube: "1",
                tubularSegments: "32",
                radialSegments: "8",
                p: "2",
                q: "3"
            }
        } else if (geometry === "TubeGeometry") {
            return {
                geometry: "TubeGeometry",
                tubularSegments: "32",
                radius: "1",
                radialSegments: "8",
            }
        } else {
            return {}
        }
    }

    // let geometryOptions;
    useEffect(() => {
        if (geometry === "BoxGeometry") {
            setGeometryOptions(<BoxOptions />);
        } else if (geometry === "CircleGeometry") {
            setGeometryOptions(<CircleOptions />);
        } else if (geometry === "ConeGeometry") {
            setGeometryOptions(<ConeOptions />);
        } else if (geometry === "CylinderGeometry") {
            setGeometryOptions(<CylinderOptions />);
        } else if (geometry === "DodecahedronGeometry") {
            setGeometryOptions(<DodecahedronOptions />);
        } else if (geometry === "IcosahedronGeometry") {
            setGeometryOptions(<IcosahedronOptions />);
        } else if (geometry === "OctahedronGeometry") {
            setGeometryOptions(<OctahedronOptions />);
        } else if (geometry === "PlaneGeometry") {
            setGeometryOptions(<PlaneOptions />);
        } else if (geometry === "RingGeometry") {
            setGeometryOptions(<RingOptions />);
        } else if (geometry === "SphereGeometry") {
            setGeometryOptions(<SphereOptions />);
        } else if (geometry === "TetrahedronGeometry") {
            setGeometryOptions(<TetrahedronOptions />);
        } else if (geometry === "TorusGeometry") {
            setGeometryOptions(<TorusOptions />);
        } else if (geometry === "TorusKnotGeometry") {
            setGeometryOptions(<TorusKnotOptions />);
        } else if (geometry === "TubeGeometry") {
            setGeometryOptions(<TubeOptions />);
        }
    }, [geometry]);

    const formRef = useRef<HTMLFormElement>(null!);
    const buttonRef = useRef<HTMLButtonElement>(null!);

    const toggleFormHide = (event: any) => {
        event.preventDefault();
        formRef.current.classList.toggle("hide");
        if (buttonRef.current.innerHTML === "Hide Form") {
            buttonRef.current.innerHTML = "Show Form";
        } else {
            buttonRef.current.innerHTML = "Hide Form";
        }
    }

    return (
        <Draggable handle=".drag-handle" >
            <div className="absolute bg-slate-400 bg-opacity-50 text-white">
                <div className="flex justify-center px-4 my-2">
                    <span className="drag-handle border-2 border-white rounded-md p-1 hover:cursor-pointer" role="button">Drag Form</span>
                    <button ref={buttonRef} className="p-1 ml-4 border-2 border-white rounded-md" onClick={toggleFormHide}>Hide Form</button>
                </div>
                <form ref={formRef} onSubmit={handleFormInput} className="flex flex-col p-4 pt-0">
                    <div className="flex">
                        <label htmlFor="geometry">Geometry:&nbsp;</label>
                        <select
                            className="ml-auto border-2 border-white rounded-md"
                            name="geometry"
                            id="geometry"
                            tabIndex={0}
                            onChange={updateFormOptionsFromNewGeometry}
                        >
                            <option value="BoxGeometry">Box</option>
                            <option value="CircleGeometry">Circle</option>
                            <option value="ConeGeometry">Cone</option>
                            <option value="CylinderGeometry">Cylinder</option>
                            <option value="DodecahedronGeometry">Dodecahedron</option>
                            <option value="IcosahedronGeometry">Icosahedron</option>
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
                    <WireframeButtons isWireframe={false} onChange={setWireframe} />
                    <div className="flex flex-row justify-end mt-2" aria-label="min and max header for subsequent number inputs"><span>Min-Max</span></div>
                    {geometryOptions}
                    <button type="submit" aria-label="submit the form to rerender the geometry" className="mt-2 bg-blue-600 rounded-md border-2 border-transparent hover:border-white">Apply New Geometry</button>
                </form>
            </div>
        </Draggable>
    )
}

export default GeometryForm;