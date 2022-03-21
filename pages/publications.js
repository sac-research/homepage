import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { getGlobalData } from "../utils/global-data";
import { useState } from "react";
import { pubs } from "../data/publications";

const pubsMapping = ({ pubs }) => {
    return pubs.map((pub, index) => (
        <div key={index}>
            <h2 className="text-lg text-teal-500">{pub.title}</h2>
        </div>
    ));
};

const topics = [...new Set(pubs.map((pub) => pub.topic))];
const years = [...new Set(pubs.map((pub) => pub.year))];

export default function Publications() {
    const globalData = getGlobalData();
    const [tp, setTopic] = useState("");
    const [yr, setYear] = useState("");

    return (
        <Layout>
            <SEO
                title={"SAC | Publications"}
                description={
                    "Research papers and results published by members of SAC group on various computer science topics."
                }
            ></SEO>
            <div className="flex mt-8 ml-4">
                <div className="flex flex-col">
                    <h3>Sort by topic:</h3>
                    <ul>
                        {topics.map((topic, index) => (
                            <li key={index}>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault;
                                        setTopic(topic);
                                    }}
                                ></button>
                            </li>
                        ))}
                    </ul>
                    <h3>Sort by year:</h3>
                    <ul>
                        {years.map((year, index) => (
                            <li key={index}>
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.preventDefault;
                                        setYear(year);
                                    }}
                                ></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
