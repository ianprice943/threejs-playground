import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { BoxGeometry, Color } from "three";
import { threeOptions, CameraOptions, RendererOptions, BasicGeometry, GeometryOptions, MaterialOptions, EnvMaps, MeshBasicMaterialOptions, MeshMatcapMaterialOptions, MeshNormalMaterialOptions, MeshPhongMaterialOptions, MeshPhysicalMaterialOptions, MeshStandardMaterialOptions, GradientMap, MeshToonMaterialOptions } from "OptionTypes";


let camera: THREE.Camera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
let geometry: THREE.BoxGeometry, material: THREE.Material, mesh: THREE.Mesh;

function init(cameraOpts: CameraOptions, geometryOpts: GeometryOptions, renderOpts: RendererOptions) {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
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
    
    renderer.dispose();
    init();
    console.log(`resized to: ${window.innerWidth} ${window.innerHeight}`)
}

const ThreeCanvas: React.FC<threeOptions> = (threeOptions) => {
    
    useEffect(() => {
        init();
    });

    const delta = 200;
    let resize: any;
    window.addEventListener('resize', () => {
        clearTimeout(resize);
        resize = setTimeout(resizeCanvas, delta);
    });
    
    return (
        <canvas id="renderWindow"></canvas>
    )
}

export default dynamic(() => Promise.resolve(ThreeCanvas), {
    ssr: false
});