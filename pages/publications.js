import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { getGlobalData } from "../utils/global-data";
import { useState } from "react";
import { pubs } from "../data/publications";

const topics = [...new Set(pubs.map((pub) => pub.topic))];
const subtopics = [...new Set(pubs.map((pub) => pub.subtopic))];
const years = [...new Set(pubs.map((pub) => pub.pub_year))];

const PublicationObject = ({ entry, index }) => {
    return (
        <li key={index} className="list-disc text-slate-800 w-5/6">
            <h2>
                {entry.authors.map((author, index) => {
                    const numberOfAuthors = entry.authors.length;
                    if (index < numberOfAuthors - 1) {
                        return author + "; ";
                    } else return author + ". ";
                })}
                <span className="italic">{entry.title + ". "}</span>
                <span className="">{entry.journal}</span>
                <span className="">{entry.conference + ". "}</span>
                <span className="">{entry.pub_loc}</span>
                <span className="">
                    {entry.pub_date + " " + entry.pub_month + " " + entry.pub_year + ". "}
                </span>
                <span className="">{entry.doi}</span>
            </h2>
        </li>
    );
};

const PublicationsMapping = ({ subtopic, topic, entries }) => {
    return (
        <>
            <ul>
                {entries.map((entry, index) =>
                    entry.topic === topic
                        ? PublicationObject({ entry, index })
                        : topic === ""
                        ? PublicationObject({ entry, index })
                        : ""
                )}
            </ul>
        </>
    );
};

const Sidebar = ({ topics, years, topicCallback, yearCallback }) => {
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
    const [tp, setTopic] = useState("");
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
                <div className="flex flex-col text-sm shrink-0">
                    <Sidebar
                        topics={topics}
                        years={years}
                        topicCallback={setTopic}
                        yearCallback={setYear}
                    ></Sidebar>
                </div>

                <div className="flex flex-col grow">
                    {tp === "" ? "" : <h2 className="text-2xl">{tp}</h2>}
                    <PublicationsMapping
                        entries={pubs}
                        props={(tp, yr)}
                        topics={topics}
                        topic={tp}
                        subtopics={subtopics}
                    ></PublicationsMapping>
                </div>
            </div>
        </Layout>
    );
}
