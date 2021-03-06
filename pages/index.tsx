import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ThreeCanvas from '../components/ThreeCanvas'
import GeometryForm from '../components/GeometryForm'
import { CanvasFormOptionsContext, CanvasWireframeContext } from '../contexts/GeometryContext'
import { useState } from 'react'

const Home: NextPage = () => {
    const [geometry, setGeometry] = useState<string>("BoxGeometry");
    const [formOptions, setFormOptions] = useState<any>({geometry: "BoxGeometry", width: 1, height: 1, depth: 1, widthSegments: 1, heightSegments: 1, depthSegments: 1});
    const [wireframe, setWireframe] = useState<boolean>(false);

    return (
        <div>
            <Head>
                <title>Three-JS Playground</title>
                <meta name="description" content="A small demo site to play with Three-JS" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <meta property="og:title" content="Three-JS Playground - Home" />
                <meta property="og:description" content="The homepage of Ian Price's Three-JS Playground" />
                <meta property="og:image" content="" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Three-JS Playground - Home" />
                <meta property="twitter:description" content="The homepage of Ian Price's Three-JS Playground" />
                <meta property="twitter:image" content="" />
            </Head>
            <header>
                <h1 className="text-center text-lg bg-black text-white w-screen">A Small Three.js Playground by Ian Price</h1>
            </header>
            <main className="relative">
                <CanvasFormOptionsContext.Provider value={{ formOptions, setFormOptions }}>
                    <CanvasWireframeContext.Provider value={{ wireframe, setWireframe }}>
                        <GeometryForm />
                        <ThreeCanvas />
                    </CanvasWireframeContext.Provider>
                </CanvasFormOptionsContext.Provider>
            </main>
            <footer className="text-center">
                <p className="text-white">Check the code out <a className="underline" href="https://github.com/ianprice943/threejs-playground">here</a></p>
            </footer>
        </div>
    )
}

export default Home
