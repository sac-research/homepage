import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { getGlobalData } from "../utils/global-data";
import { useState } from "react";
import { pubs } from "../data/publications";

const topics = [...new Set(pubs.map((pub) => pub.topic))];
const subtopics = [...new Set(pubs.map((pub) => pub.subtopic))];
const years = [...new Set(pubs.map((pub) => pub.pub_year))];

const topicsMapping = (topic) => {
    return (
        <>
            <h1>{topic}</h1>
            {pubs.map((pub, index) => (pub.topic === topic ? <></> : ""))}
        </>
    );
};

const pubsMapping = () => {
    return pubs.map((pub, index) => (
        <div key={index}>
            <h2 className="text-lg text-teal-500">{pub.title}</h2>
        </div>
    ));
};

const Sidebar = ({ topics, years }) => {
    const [tp, setTopic] = useState("");
    const [yr, setYear] = useState("");
    return (
        <>
            <h3>Sort by topic:</h3>
            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>
                        <button
                            className="text-slate-800 hover:underline underline-offset-2"
                            onClick={(e) => {
                                e.preventDefault;
                                setTopic(topic);
                            }}
                        >
                            {topic}
                        </button>
                    </li>
                ))}
            </ul>
            <h3>Sort by year:</h3>
            <ul>
                {years.map((year, index) =>
                    year === 0 || year === "" ? (
                        ""
                    ) : (
                        <li key={index}>
                            <button
                                className="text-slate-800 hover:underline underline-offset-2"
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault;
                                    setYear(year);
                                }}
                            >
                                {year}
                            </button>
                        </li>
                    )
                )}
            </ul>
            <h3>
                <button
                    className="hover:underline underline-offset-2"
                    onClick={(e) => {
                        e.preventDefault();
                        setTopic("");
                        setYear("");
                    }}
                >
                    Reset sort/filter
                </button>
            </h3>
        </>
    );
};

export default function Publications() {
    const globalData = getGlobalData();

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
                    <Sidebar topics={topics} years={years}></Sidebar>
                </div>
            </div>
        </Layout>
    );
}
