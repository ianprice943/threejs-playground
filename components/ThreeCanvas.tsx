import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { useFormOptionsContext, useWireframeContext } from "../contexts/GeometryContext";
import { parse } from "path/posix";

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

let camera: THREE.Camera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
let geometry: any, material: THREE.Material, mesh: THREE.Mesh;

function init(geometry: string, formOptions: any, wireframe: boolean) {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    let geometryToRender;

    if (geometry === "BoxGeometry") {
        geometryToRender = new THREE.BoxGeometry( shrinkValue(formOptions.width), shrinkValue(formOptions.height), shrinkValue(formOptions.depth), parseInt(formOptions.widthSegments), parseInt(formOptions.heightSegments), parseInt(formOptions.depthSegments));
    } else if (geometry === "CircleGeometry") {
        geometryToRender = new THREE.CircleGeometry( shrinkValue(formOptions.radius), parseInt(formOptions.segments), 0, 2*Math.PI );
    } else if (geometry === "ConeGeometry") {
        geometryToRender = new THREE.ConeGeometry( shrinkValue(formOptions.radius), shrinkValue(formOptions.height), parseInt(formOptions.radialSegments), parseInt(formOptions.heightSegments), false, 0, 2*Math.PI );  
    } else if (geometry === "CylinderGeometry") {
        geometryToRender = new THREE.CylinderGeometry( shrinkValue(formOptions.radiusTop), shrinkValue(formOptions.radiusBottom), shrinkValue(formOptions.height), parseInt(formOptions.radialSegments), parseInt(formOptions.heightSegments), false, 0, 2*Math.PI );  
    } else if (geometry === "DodecahedronGeometry") {
        geometryToRender = new THREE.DodecahedronGeometry( shrinkValue(formOptions.radius), parseInt(formOptions.detail) );  
    } else if (geometry === "IcosahedronGeometry") {
        geometryToRender = new THREE.IcosahedronGeometry( shrinkValue(formOptions.radius), parseInt(formOptions.detail) );  
    } else if (geometry === "LatheGeometry") {
        const lathePoints = [];
        for ( let i = 0; i < 10; i ++ ) {
	        lathePoints.push( new THREE.Vector2( Math.sin( i * 0.05 ) * .25 + .025, ( i - .05 ) * .05 ) );
        }
        geometryToRender = new THREE.LatheGeometry( lathePoints, formOptions.segments, 0, 2*Math.PI );  
    } else if (geometry === "OctahedronGeometry") {
        geometryToRender = new THREE.OctahedronGeometry( shrinkValue(formOptions.radius), parseInt(formOptions.detail) );  
    } else if (geometry === "PlaneGeometry") {
        geometryToRender = new THREE.PlaneGeometry( shrinkValue(formOptions.width), shrinkValue(formOptions.height), parseInt(formOptions.widthSegments), parseInt(formOptions.heightSegments) );  
    } else if (geometry === "RingGeometry") {
        geometryToRender = new THREE.RingGeometry( shrinkValue(formOptions.innerRadius), shrinkValue(formOptions.outerRadius), parseInt(formOptions.thetaSegments), parseInt(formOptions.phiSegments), 0, 2*Math.PI );  
    } else if (geometry === "SphereGeometry") {
        geometryToRender = new THREE.SphereGeometry( shrinkValue(formOptions.radius), parseInt(formOptions.widthSegments), parseInt(formOptions.heightSegments), 0, 2*Math.PI, 0, Math.PI );  
    } else if (geometry === "TetrahedronGeometry") {
        geometryToRender = new THREE.TetrahedronGeometry( shrinkValue(formOptions.radius), parseInt(formOptions.detail) );  
    } else if (geometry === "TorusGeometry") {
        geometryToRender = new THREE.TorusGeometry( shrinkValue(formOptions.radius), shrinkValue(formOptions.tube), parseInt(formOptions.radialSegments), parseInt(formOptions.tubularSegments), 2*Math.PI);  
    } else if (geometry === "TorusKnotGeometry") {
        geometryToRender = new THREE.TorusKnotGeometry( shrinkValue(formOptions.radius), shrinkValue(formOptions.tube), parseInt(formOptions.tubularSegments), parseInt(formOptions.radialSegments), parseInt(formOptions.p), parseInt(formOptions.q) );  
    } else if (geometry === "TubeGeometry") {
        const tubePath = new CustomSinCurve(.25);
        geometryToRender = new THREE.TubeGeometry(tubePath, parseInt(formOptions.tubularSegments), shrinkValue(formOptions.radius), parseInt(formOptions.radialSegments), false);  
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
    renderer.setSize(window.innerWidth * .98, window.innerHeight * .95);
    renderer.setAnimationLoop( animation );
}

function animation(time: number) {
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render( scene, camera );
}

function shrinkValue(value:string): number {
        return (parseInt(value) / 10);
}

const ThreeCanvas = () => {

    const { formOptions } = useFormOptionsContext();
    const { wireframe } = useWireframeContext();
    const geometry = formOptions.geometry;
    
    useEffect(() => {
        init(geometry, formOptions, wireframe);
    });

    const resizeCanvas = () => {
        renderer.dispose();
        init(geometry, formOptions, wireframe);
        console.log(`resized to: ${window.innerWidth * .98} ${window.innerHeight * .95}`);
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