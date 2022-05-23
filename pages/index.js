import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { getGlobalData } from "../utils/global-data.js";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function CameraController() {
    const { camera, gl } = useThree();

    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
            controls.dispose();
        };
    }, [camera, gl]);
    return null;
}

export default function Home({ globalData }) {
    const icosaLoop = useRef();
    return (
        <Layout>
            <SEO title={globalData.siteName} description={globalData.description}></SEO>
            <div className="m-8">
                <div className="w-full justify-center">
                    <h2 className="text-center text-4xl font-extralight">
                        Software System Architecture in Cloud Computing
                    </h2>
                </div>
            </div>
            <div className="flex flex-wrap space-x-4 items-center px-12">
                <div className="w-[300px] h-[300px] shadow-lg justify-center items-center flex p-2 my-4">
                    <span className="text-slate-300 text-center">
                        This is a placeholder imagery.
                    </span>
                    <Canvas
                        shadows={true}
                        className="bg-transparent"
                        camera={{ position: [2, 2, 2] }}
                    >
                        <CameraController></CameraController>
                        <ambientLight intensity={0.2}></ambientLight>
                        <directionalLight intensity={0.5}></directionalLight>
                        <mesh ref={icosaLoop} scale={[1.5, 1.5, 1.5]}>
                            <icosahedronBufferGeometry
                                attach="geometry"
                                args={[1, 0]}
                            ></icosahedronBufferGeometry>
                            <meshPhongMaterial wireframe attach="material"></meshPhongMaterial>
                        </mesh>
                    </Canvas>
                </div>
                <div>
                    <p>
                        {
                            "Our research endeavours on designing adaptive software components, architecture framework and analysis method to scale data intensive distributed systems, through modeling software architecture; quantifying the system's characteristics using statistical models; predicting the system's quality attributes and devising system platforms. "
                        }
                    </p>
                    <br></br>
                    <p>
                        {
                            "Current projects investigate mechanisms to improve the scalability and reliability of MapReduce Framework and Stream Processing Middleware to process incremental data analysis."
                        }
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
    return { props: { globalData } };
}
