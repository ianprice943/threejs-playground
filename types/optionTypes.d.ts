import { Color } from "three";

declare module 'OptionTypes' {
    export interface threeOptions {
        cameraOpts: CameraOptions,
        geometryOpts: GeometryOptions,
        renderOpts: RendererOptions,
        materialOpts: MaterialOptions
    }

    export interface CameraOptions {
        fov: number,
        aspect: number,
        near: number,
        far: number
    }

    export interface RendererOptions {
        antialias: boolean,
        width: number,
        height: number
    }

    export enum BasicGeometry {
        Box = "BoxGeometry",
        Circle = "CircleGeometry",
        Cone = "ConeGeometry",
        Cylinder = "CylinderGeometry",
        Dodecahedron = "DodecahedronGeometry",
        Icosahedron = "IcosahedronGeometry",
        Lathe = "LatheGeometry",
        Octahedron = "OctahedronGeometry",
        Plane = "PlaneGeometry",
        Ring = "RingGeometry",
        Sphere = "SphereGeometry",
        Tetrahedron = "TetrahedronGeometry",
        Torus = "TorusGeometry",
        TorusKnot = "TorusKnotGeometry",
        Tube = "TubeGeometry"
    }

    export interface GeometryOptions {
        shape: BasicGeometry,
        width?: number,
        height?: number,
        depth?: number,
        radius?: number,
        segments?: number,
        thetaLength?: number,
        thetaStart?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        radiusTop?: number,
        radiusBottom?: number,
        detail?: number,
        widthSegments?: number,
        innerRadius?: number,
        outerRadius?: number,
        thetaSegments?: number,
        phiSegments?: number,
        phiStart?: number,
        phiLength?: number,
        tube?: number,
        tubularSegments?: number,
        arc?: number,
        p?: number,
        q?: number
    }

    export interface MaterialOptions {
        transparent: boolean,
        opacity: number,
        visible: boolean,
        depthTest?: boolean,
        depthWrite?: boolean,
        alphaTest?: number
    }

    export enum EnvMaps {
        none = "none",
        reflection = "reflection",
        refraction = "refraction"
    }

    export interface MeshBasicMaterialOptions {
        color: Color,
        wireframe?: boolean,
        vertexColors?: boolean,
        fog?: boolean,
        envMaps?: EnvMaps,
        reflectivity?: number,
        refractionRatio?: number
    }

    export interface MeshMatcapMaterialOptions {
        color: Color,
        flatShading: boolean
    }

    export interface MeshNormalMaterialOptions {
        flatshading: boolean,
        wireframe?: boolean
    }

    export interface MeshPhongMaterialOptions {
        color: Color,
        emissive: Color,
        specular: Color,
        shininess: number,
        flatshading: boolean,
        wireframe: boolean,
        vertexColors: boolean,
        fog: boolean,
        envMaps?: EnvMaps,
        reflectivity?: number,
        refractionRatio?: number
    }

    export interface MeshPhysicalMaterialOptions {
        color: Color,
        emissive: Color,
        roughness: number,
        metalness: number,
        reflectivity: number,
        clearcoat?: number,
        clearcoatRoughness?: number,
        flatShading?: number,
        wireframe?: boolean,
        vertexColors?: boolean,
        fog?: boolean,
        envMaps: EnvMaps
    }

    export interface MeshStandardMaterialOptions {
        color: Color,
        emissive: Color,
        roughness: number,
        metalness: number,
        flatShading?: number,
        wireframe?: boolean,
        vertexColors?: boolean,
        fog?: boolean,
        envMaps: EnvMaps
    }

    export enum GradientMap {
        threeTone = "threeTone",
        fiveTone = "fiveTone"
    }

    export interface MeshToonMaterialOptions {
        color: Color,
        gradientMap: GradientMap
    }
}