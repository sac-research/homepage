import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { members } from "../../data/members";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { LinkedInSvg, GitHubSvg, GoogleScholarSvg, HomepageSvg } from "../../components/BrandIcons";

export const getStaticPaths = async () => {
    const paths = members
        .map((obj) => (obj.firstName + obj.midName + obj.lastName).toLowerCase())
        .map((member) => ({ params: { member } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const memberObj = await members.filter(
        (obj) => (obj.firstName + obj.midName + obj.lastName).toLowerCase() == params.member
    )[0];
    return {
        props: {
            filteredMember: memberObj,
        },
    };
};

export default function Member({ filteredMember }) {
    function externalLinkHandler(target) {
        window.open(target);
    }

    return (
        <Layout>
            <SEO
                title={filteredMember.firstName + " " + filteredMember.lastName[0] + ". @ SAC"}
            ></SEO>
            <div className="m-16 flex space-x-2">
                <div className="flex flex-col max-w-[350px] min-w-64 min-h-[600px] justify-center rounded-md shadow-md p-6 space-y-2">
                    <div className="flex flex-col items-center justify-center">
                        <div
                            id="member-photo"
                            style={{
                                backgroundImage:
                                    "url('/members-photos/" + filteredMember.photo + "')",
                            }}
                            className={"w-48 h-48 flex-none bg-center bg-cover rounded-full"}
                        ></div>
                        <h1 className="text-2xl font-bold">
                            {filteredMember.firstName +
                                " " +
                                filteredMember.midName +
                                " " +
                                filteredMember.lastName}
                        </h1>
                    </div>

                    <div className="flex flex-wrap justify-center space-x-2 items-center">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                externalLinkHandler(filteredMember.linkedIn);
                            }}
                            className="rounded-sm p-1"
                        >
                            <LinkedInSvg></LinkedInSvg>
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                externalLinkHandler(filteredMember.github);
                            }}
                            className="rounded-sm p-1"
                        >
                            <GitHubSvg />
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                externalLinkHandler(filteredMember.googleScholar);
                            }}
                            className="rounded-sm p-1"
                        >
                            <GoogleScholarSvg></GoogleScholarSvg>
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                externalLinkHandler(filteredMember.homepage);
                            }}
                            className="rounded-sm p-1"
                        >
                            <HomepageSvg></HomepageSvg>
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center flex-col items-center">
                        <div id="institution" className="">
                            {filteredMember.institution}
                        </div>
                        <div id="location" className="">
                            {filteredMember.location}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center flex-col">
                        <h2 className="text-2xl font-bold">Interests</h2>
                        <ul className="list-disc list-inside">
                            <li>Machine Learning Operations</li>
                            <li>Cloud Architectures</li>
                            <li>System Designs</li>
                            <li>SotA Software Frameworks</li>
                        </ul>
                    </div>
                </div>
                <div className="px-4">
                    <div>
                        <h2 className="text-3xl font-bold">Introduction</h2>
                        <p>{filteredMember.brief_intro}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
