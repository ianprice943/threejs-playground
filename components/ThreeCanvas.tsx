import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { BoxGeometry, Color } from "three";
import { useGeometryContext } from "../contexts/GeometryContext";
// import { threeOptions, CameraOptions, RendererOptions, BasicGeometry, GeometryOptions, MaterialOptions, EnvMaps, MeshBasicMaterialOptions, MeshMatcapMaterialOptions, MeshNormalMaterialOptions, MeshPhongMaterialOptions, MeshPhysicalMaterialOptions, MeshStandardMaterialOptions, GradientMap, MeshToonMaterialOptions } from "OptionTypes";


let camera: THREE.Camera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
let geometry: any, material: THREE.Material, mesh: THREE.Mesh;

function init(geometry: string) {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    let geometryToRender;

    if(geometry === "BoxGeometry") {
        geometryToRender = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    } else if (geometry === "CircleGeometry") {
        geometryToRender = new THREE.CircleGeometry( .5, 32, 0, 2*Math.PI );
    } else if (geometry === "ConeGeometry") {
        geometryToRender = new THREE.ConeGeometry( .2, .5, 20, 1, false, 0, 2*Math.PI );  
    } else if (geometry === "CylinderGeometry") {
        geometryToRender = new THREE.CylinderGeometry( .2, .2, .7, 20, 1, false, 0, 2*Math.PI );  
    } else if (geometry === "DodecahedronGeometry") {
        geometryToRender = new THREE.DodecahedronGeometry( .2, 0 );  
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

const ThreeCanvas: React.FC = () => {

    const { geometry } = useGeometryContext();
    
    useEffect(() => {
        init(geometry);
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