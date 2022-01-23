import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { BoxGeometry, Color } from "three";
import { useGeometryContext, useFormOptionsContext } from "../contexts/GeometryContext";
// import { threeOptions, CameraOptions, RendererOptions, BasicGeometry, GeometryOptions, MaterialOptions, EnvMaps, MeshBasicMaterialOptions, MeshMatcapMaterialOptions, MeshNormalMaterialOptions, MeshPhongMaterialOptions, MeshPhysicalMaterialOptions, MeshStandardMaterialOptions, GradientMap, MeshToonMaterialOptions } from "OptionTypes";

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

function init(geometry: string, formOptions: any) {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    let geometryToRender;

    if (geometry === "BoxGeometry") {
        geometryToRender = new THREE.BoxGeometry( shrinkValue(formOptions.width), shrinkValue(formOptions.height), shrinkValue(formOptions.depth), formOptions.widthSegments, formOptions.heightSegments, formOptions.depthSegments );
    } else if (geometry === "CircleGeometry") {
        geometryToRender = new THREE.CircleGeometry( .5, 32, 0, 2*Math.PI );
    } else if (geometry === "ConeGeometry") {
        geometryToRender = new THREE.ConeGeometry( .2, .5, 20, 1, false, 0, 2*Math.PI );  
    } else if (geometry === "CylinderGeometry") {
        geometryToRender = new THREE.CylinderGeometry( .2, .2, .7, 20, 1, false, 0, 2*Math.PI );  
    } else if (geometry === "DodecahedronGeometry") {
        geometryToRender = new THREE.DodecahedronGeometry( .2, 0 );  
    } else if (geometry === "IcosahedronGeometry") {
        geometryToRender = new THREE.IcosahedronGeometry( .2, 0 );  
    } else if (geometry === "LatheGeometry") {
        const lathePoints = [];
        for ( let i = 0; i < 10; i ++ ) {
	        lathePoints.push( new THREE.Vector2( Math.sin( i * 0.05 ) * .25 + .025, ( i - .05 ) * .05 ) );
        }
        geometryToRender = new THREE.LatheGeometry( lathePoints, 15, 0, 2*Math.PI );  
    } else if (geometry === "OctahedronGeometry") {
        geometryToRender = new THREE.OctahedronGeometry( .2, 0 );  
    } else if (geometry === "PlaneGeometry") {
        geometryToRender = new THREE.PlaneGeometry( .5, .5, 4, 4 );  
    } else if (geometry === "RingGeometry") {
        geometryToRender = new THREE.RingGeometry( .2, .4, 32, 32, 0, 2*Math.PI );  
    } else if (geometry === "SphereGeometry") {
        geometryToRender = new THREE.SphereGeometry( .2, 32, 16, 0, 2*Math.PI, 0, Math.PI );  
    } else if (geometry === "TetrahedronGeometry") {
        geometryToRender = new THREE.TetrahedronGeometry( .2, 0 );  
    } else if (geometry === "TorusGeometry") {
        geometryToRender = new THREE.TorusGeometry( .2, .05, 16, 100, 2*Math.PI);  
    } else if (geometry === "TorusKnotGeometry") {
        geometryToRender = new THREE.TorusKnotGeometry( .2, .05, 64, 8, 2, 3 );  
    } else if (geometry === "TubeGeometry") {
        const tubePath = new CustomSinCurve(.2);
        geometryToRender = new THREE.TubeGeometry(tubePath, 64, .05, 8, false);  
    } else {
        console.log("context failed?: ", geometry);
    }

    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometryToRender, material );
    scene.add( mesh );

    const canvas: HTMLCanvasElement | null = document.getElementById("renderWindow") as HTMLCanvasElement;

    renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        canvas: canvas
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop( animation );
}

function animation(time: number) {
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render( scene, camera );
}

function resizeCanvas() {
    
    // renderer.dispose();
    // init();
    console.log(`resized to: ${window.innerWidth} ${window.innerHeight}`)
}

function shrinkValue(value:string): number {
        return (parseInt(value) / 10);
}

const ThreeCanvas: React.FC = () => {

    const { geometry } = useGeometryContext();
    const { formOptions } = useFormOptionsContext();
    
    useEffect(() => {
        init(geometry, formOptions);
    });

    // const delta = 200;
    // let resize: any;
    // window.addEventListener('resize', () => {
    //     clearTimeout(resize);
    //     resize = setTimeout(resizeCanvas, delta);
    // });
    
    return (
        <div>
            <canvas id="renderWindow"></canvas>
        </div>
    )
}

export default dynamic(() => Promise.resolve(ThreeCanvas), {
    ssr: false
});