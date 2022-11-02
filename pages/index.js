import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { getGlobalData } from "../utils/global-data.js";
import { useEffect, useRef } from "react";

import { pubs } from "../data/publications";

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

function LatestPublicationCard({ pub }) { 
    return <div className="w-[500px] h-auto rounded-sm shadow-md p-2">
        <h3 className="font-bold">{pub.title}</h3>
        <p>{pub.authors}</p>
        <p>{pub.journal}</p>
        <p>{pub.pub_year}</p>
        <p>{pub.topic}</p>
        <p>{pub.subtopic}</p>
    </div>
}

export default function Home({ globalData }) {
    const icosaLoop = useRef();

    const latestPubs = pubs["Middleware and Platforms"]["Streaming Processing Middleware"]

    useEffect(() => { 
        // set localstorage theme according to global preference
        const theme = localStorage.getItem("theme");
        if (theme) {
            localStorage.setItem("theme", theme);
        } else {
            localStorage.setItem("theme", "dark");
        }
    });

    return (
        <Layout>
            <SEO title={globalData.siteName} description={globalData.description}></SEO>
            <div className="flex flex-col justify-center items-center">
                <div className="m-8 w-4/5">
                    <div className="w-full justify-center">
                        <h2 className="text-center text-4xl font-extralight">
                            Software System Architecture in Cloud Computing
                        </h2>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center space-x-4 items-center px-12 w-4/5">
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
                <div className="mt-8 w-4/5">
                    <h2 className="text-center text-4xl font-extralight mb-2">Latest Publications</h2>
                    <div className="flex items-center justify-center flex-wrap space-x-4">
                        {/* {console.log(latestPubs)} */}
                        {latestPubs.map((pub, idx) => (
                            <LatestPublicationCard key={idx} pub={pub}></LatestPublicationCard>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
    return { props: { globalData } };
}
