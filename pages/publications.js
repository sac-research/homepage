import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { getGlobalData } from "../utils/global-data";
import { useState } from "react";
import { pubs } from "../data/publications";

const topics = [...new Set(pubs.map((pub) => pub.topic))];
const subtopics = [...new Set(pubs.map((pub) => pub.subtopic))];
const years = [...new Set(pubs.map((pub) => pub.pub_year))];

const SubtopicsMapping = ({ subtopics, subtopic, topic }) => {
    return (
        <div className="flex flex-col">
            {subtopics.map((st, index) =>
                st === subtopic ? (
                    <div>
                        <h2 className="text-xl" key={index}>
                            {st}
                        </h2>
                    </div>
                ) : (
                    ""
                )
            )}
        </div>
    );
};

const TopicsMapping = ({ topics, subtopics, topic, entries }) => {
    return (
        <div className="flex flex-col">
            {topics.map((t, index) => {
                return subtopics.map((st, index) => {
                    return entries.map((entry, index) => {
                        return (
                            <>
                                {entry.topic === t &&
                                entry.subtopic === st &&
                                (entry.topic === "" || entry.subtopic === "") ? (
                                    <div key={index}>
                                        <h3>{entry.title}</h3>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </>
                        );
                    });
                });
            })}

            {/* {topics.map((t, index) =>
                t === topic || topic === "" ? (
                    <div>
                        <h1 className="text-3xl" key={index}>
                            {t}
                        </h1>
                        <SubtopicsMapping subtopics={subtopics}></SubtopicsMapping>
                    </div>
                ) : (
                    ""
                )
            )} */}
        </div>
    );
};

const Sidebar = ({ props, topics, years, topicCallback, yearCallback }) => {
    return (
        <>
            <h3 className="font-bold">Sort by topic:</h3>
            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>
                        <button
                            className="text-teal-600 hover:underline underline-offset-2"
                            onClick={(e) => {
                                e.preventDefault;
                                topicCallback(topic);
                            }}
                        >
                            {topic}
                        </button>
                    </li>
                ))}
            </ul>
            <h3 className="font-bold">Sort by year:</h3>
            <ul>
                {years.map((year, index) =>
                    year === 0 || year === "" ? (
                        ""
                    ) : (
                        <li key={index}>
                            <button
                                className="text-teal-600 hover:underline underline-offset-2"
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault;
                                    yearCallback(year);
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
                    className="hover:underline underline-offset-2 font-bold"
                    onClick={(e) => {
                        e.preventDefault();
                        topicCallback("");
                        yearCallback("");
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

    const [tp, setTopic] = useState();
    const [yr, setYear] = useState();

    return (
        <Layout>
            <SEO
                title={"SAC | Publications"}
                description={
                    "Research papers and results published by members of SAC group on various computer science topics."
                }
            ></SEO>
            <div className="flex mt-8 ml-4 space-x-8">
                <div className="flex flex-col text-sm">
                    <Sidebar
                        topics={topics}
                        years={years}
                        topicCallback={setTopic}
                        yearCallback={setYear}
                    ></Sidebar>
                </div>
                <TopicsMapping
                    entries={pubs}
                    props={(tp, yr)}
                    topics={topics}
                    topic={tp}
                    subtopics={subtopics}
                ></TopicsMapping>
            </div>
        </Layout>
    );
}
