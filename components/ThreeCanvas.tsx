import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { useFormOptionsContext, useWireframeContext } from "../contexts/GeometryContext";

class CustomSinCurve extends THREE.Curve<THREE.Vector3> {
    scale: number;

	constructor( scale = 1 ) {
		super();
		this.scale = scale;
	}

	getPoint( t: number, optionalTarget = new THREE.Vector3() ) {
		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
	}
}

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
let geometryToRender: any, material: THREE.Material, mesh: THREE.Mesh;

function init(geometry: string, formOptions: any, wireframe: boolean) {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 100 );
    camera.position.z = 10;

    scene = new THREE.Scene();

    let convertedFormOptions: any = {};
    for (const key in formOptions) {
        if(key !== "geometry") {
            convertedFormOptions[key] = parseInt(formOptions[key]);
        } else {
            convertedFormOptions[key] = formOptions[key];
        }
    }

    if (geometry === "BoxGeometry") {
        geometryToRender = new THREE.BoxGeometry( convertedFormOptions.width, convertedFormOptions.height, convertedFormOptions.depth, convertedFormOptions.widthSegments, convertedFormOptions.heightSegments, convertedFormOptions.depthSegments);
    } else if (geometry === "CircleGeometry") {
        geometryToRender = new THREE.CircleGeometry( convertedFormOptions.radius, convertedFormOptions.segments, 0, 2*Math.PI );
    } else if (geometry === "ConeGeometry") {
        geometryToRender = new THREE.ConeGeometry( convertedFormOptions.radius, convertedFormOptions.height, convertedFormOptions.radialSegments, convertedFormOptions.heightSegments, false, 0, 2*Math.PI );  
    } else if (geometry === "CylinderGeometry") {
        geometryToRender = new THREE.CylinderGeometry( convertedFormOptions.radiusTop, convertedFormOptions.radiusBottom, convertedFormOptions.height, convertedFormOptions.radialSegments, convertedFormOptions.heightSegments, false, 0, 2*Math.PI );  
    } else if (geometry === "DodecahedronGeometry") {
        geometryToRender = new THREE.DodecahedronGeometry( convertedFormOptions.radius, convertedFormOptions.detail );  
    } else if (geometry === "IcosahedronGeometry") {
        geometryToRender = new THREE.IcosahedronGeometry( convertedFormOptions.radius, convertedFormOptions.detail );  
    // } else if (geometry === "LatheGeometry") {
    //     const lathePoints = [];
    //     for ( let i = 0; i < 10; i ++ ) {
	//         lathePoints.push( new THREE.Vector2( Math.sin( i * 0.5 ) * 2.5 + .25, ( i - .5 ) * .5 ) );
    //     }
    //     geometryToRender = new THREE.LatheGeometry( lathePoints, convertedFormOptions.segments, 0, 2*Math.PI );  
    } else if (geometry === "OctahedronGeometry") {
        geometryToRender = new THREE.OctahedronGeometry( convertedFormOptions.radius, convertedFormOptions.detail );  
    } else if (geometry === "PlaneGeometry") {
        geometryToRender = new THREE.PlaneGeometry( convertedFormOptions.width, convertedFormOptions.height, convertedFormOptions.widthSegments, convertedFormOptions.heightSegments );  
    } else if (geometry === "RingGeometry") {
        geometryToRender = new THREE.RingGeometry( convertedFormOptions.innerRadius, convertedFormOptions.outerRadius, convertedFormOptions.thetaSegments, convertedFormOptions.phiSegments, 0, 2*Math.PI );  
    } else if (geometry === "SphereGeometry") {
        geometryToRender = new THREE.SphereGeometry( convertedFormOptions.radius, convertedFormOptions.widthSegments, convertedFormOptions.heightSegments, 0, 2*Math.PI, 0, Math.PI );  
    } else if (geometry === "TetrahedronGeometry") {
        geometryToRender = new THREE.TetrahedronGeometry( convertedFormOptions.radius, convertedFormOptions.detail );  
    } else if (geometry === "TorusGeometry") {
        geometryToRender = new THREE.TorusGeometry( convertedFormOptions.radius, convertedFormOptions.tube, convertedFormOptions.radialSegments, convertedFormOptions.tubularSegments, 2*Math.PI);  
    } else if (geometry === "TorusKnotGeometry") {
        geometryToRender = new THREE.TorusKnotGeometry( convertedFormOptions.radius, convertedFormOptions.tube, convertedFormOptions.tubularSegments, convertedFormOptions.radialSegments, convertedFormOptions.p, convertedFormOptions.q );  
    } else if (geometry === "TubeGeometry") {
        const tubePath = new CustomSinCurve(.25);
        geometryToRender = new THREE.TubeGeometry(tubePath, convertedFormOptions.tubularSegments, convertedFormOptions.radius, convertedFormOptions.radialSegments, false);  
    } else {
        console.log("context failed?: ", geometry);
    }

    const materialOptions = {
        wireframe: wireframe
    }

    material = new THREE.MeshNormalMaterial(materialOptions);

    mesh = new THREE.Mesh( geometryToRender, material );
    scene.add( mesh );

    const canvas: HTMLCanvasElement | null = document.getElementById("renderWindow") as HTMLCanvasElement;

    renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        canvas: canvas
    });
    renderer.setSize(window.innerWidth * .98, window.innerHeight * .92);
    renderer.setAnimationLoop( animation );
}

function animation(time: number) {
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render( scene, camera );
}

const ThreeCanvas = () => {

    const { formOptions } = useFormOptionsContext();
    const { wireframe } = useWireframeContext();
    const geometry = formOptions.geometry;
    
    useEffect(() => {
        init(geometry, formOptions, wireframe);
    });

    const resizeCanvas = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth * .98, window.innerHeight * .92);
    }

    const delta = 200;
    let resize: any;
    window.addEventListener('resize', () => {
        clearTimeout(resize);
        resize = setTimeout(resizeCanvas, delta);
    });
    
    return (
        <div className="flex justify-center align-middle">
            <canvas id="renderWindow"></canvas>
        </div>
    )
}

export default dynamic(() => Promise.resolve(ThreeCanvas), {
    ssr: false
});