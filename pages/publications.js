import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { useState } from "react";
import { pubs } from "../data/publications";

const Sidebar = ({ topics, years, topicCallback, yearCallback }) => {
    return (
        <div className="hidden md:block">
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
        </div>
    );
};

const topics = Object.keys(pubs);
const years = [2014, 2013];

function PublicationEntry({ pub, index }) {
    return (
        <li key={index} className="list-disc text-slate-800 w-5/6">
            {pub.authors.map((author, index) => {
                const numOfAuthors = pub.authors.length;
                if (index < numOfAuthors - 1) {
                    return author + "; ";
                } else return author + ". ";
            })}
            <span className="italic">{pub.title + ". "}</span>
            <span className="">{pub.journal}</span>
            <span className="">{pub.conference !== "" ? pub.conference + ". " : ""}</span>
            <span className="">{pub.pub_loc}</span>
            <span className="">
                {pub.pub_date + " " + pub.pub_month + " " + pub.pub_year !== ""
                    ? pub.pub_year + ". "
                    : ""}
            </span>
            <span className="">
                <a href={pub.doi}>{pub.doi}</a>
            </span>
        </li>
    );
}

function PublicationsMap({ topic, entries, year }) {
    return (
        <div>
            {topic === "Middleware and Platforms" || topic === "" ? (
                <div className="mb-2">
                    <h2 className="text-3xl text-purple-800">Middleware and Platforms</h2>
                    <h3 className="text-xl">Streaming Processing Middleware</h3>
                    <ul>
                        {entries["Middleware and Platforms"]["Streaming Processing Middleware"].map(
                            (pub, index) => PublicationEntry({ pub, index })
                        )}
                    </ul>
                </div>
            ) : (
                ""
            )}
            {topic === "Software and System Architecture" || topic === "" ? (
                <div className="mb-2">
                    <h2 className="text-3xl text-purple-800">Software and System Architecture</h2>
                    <h3 className="text-xl">Service Oriented Computing</h3>
                    <ul>
                        {entries["Software and System Architecture"][
                            "Service Oriented Computing"
                        ].map((pub, index) => PublicationEntry({ pub, index }))}
                    </ul>
                    <h3 className="text-xl">Domain-Specific System Design</h3>
                    <ul>
                        {entries["Software and System Architecture"][
                            "Domain-Specific System Design"
                        ].map((pub, index) => PublicationEntry({ pub, index }))}
                    </ul>
                </div>
            ) : (
                ""
            )}
            {topic === "Modeling and Analysis" || topic === "" ? (
                <div className="mb-2">
                    <h2 className="text-3xl text-purple-800">Modeling and Analysis</h2>
                    <h3 className="text-xl">Simulation Method and Tool</h3>
                    <ul>
                        {entries["Modeling and Analysis"]["Simulation Method and Tool"].map(
                            (pub, index) => PublicationEntry({ pub, index })
                        )}
                    </ul>
                </div>
            ) : (
                ""
            )}
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
                    <PublicationsMap entries={pubs} topic={tp} year={yr}></PublicationsMap>
                </div>
            </div>
        </Layout>
    );
}
