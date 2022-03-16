import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { getGlobalData } from "../utils/global-data";
import { useState } from "react";

const pubsMapping = ({ pubs }) => {
    return pubs.map((pub, index) => (
        <div>
            <h2 className="text-lg text-teal-500">{pub.title}</h2>
        </div>
    ));
};

const topics = [];

export default function Publications() {
    const globalData = getGlobalData();
    const [progress, setProgress] = useState("active");

    return (
        <Layout>
            <SEO
                title={"SAC - Publications"}
                description={
                    "Research papers and results published by members of SAC group on various computer science topics."
                }
            ></SEO>
            <div className="flex mt-8">
                <div>
                    <div className="mr-4 pr-4">
                        <ul>
                            <li>Sort by topic</li>
                            <li>Completed</li>
                            <li>Prospective</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h1 className="capitalize ml-8 text-4xl text-red-800 bg-white pb-2">
                        {progress + " projects"}
                    </h1>
                </div>
            </div>
        </Layout>
    );
}
