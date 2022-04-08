import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { useState } from "react";
import { pubs } from "../data/publications";

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

const topics = Object.keys(pubs);
const years = [2014, 2013];

function PublicationEntry({ entry }) {}

function PublicationsMap({ topic, entries, year }) {
    return (
        <div>
            <div>
                <h2 className="text-3xl text-red-800">Middleware and Platforms</h2>
                <h3 className="text-xl">Streaming Processing Middleware</h3>
                <ul>
                    {entries["Software and System Architecture"][
                        "Streaming Processing Middleware"
                    ].map((pub, index) => (
                        <li key={index} className="list-disc text-slate-800 w-5/6">
                            {pub.authors.map((author, index) => {
                                const numOfAuthors = pub.authors.length;
                                if (index < numOfAuthors - 1) {
                                    return author + "; ";
                                } else return author + ". ";
                            })}
                            <span className="italic">{pub.title + ". "}</span>
                            <span className="">{pub.journal}</span>
                            <span className="">{pub.conference + ". "}</span>
                            <span className="">{pub.pub_loc}</span>
                            <span className="">
                                {pub.pub_date + " " + pub.pub_month + " " + pub.pub_year + ". "}
                            </span>
                            <span className="">{pub.doi}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

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
                    <PublicationsMap entries={pubs} topic={tp} year={yr}></PublicationsMap>
                </div>
            </div>
        </Layout>
    );
}
