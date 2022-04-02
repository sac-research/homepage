import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { useState } from "react";
import { pubs } from "../data/publications";

const PublicationMapping = ({ pubs, topic, year }) => {};

export default function PublicationNew() {
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
                    <PublicationMapping pubs={pubs}></PublicationMapping>
                </div>
            </div>
        </Layout>
    );
}
