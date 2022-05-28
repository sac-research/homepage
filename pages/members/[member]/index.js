import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { members } from "../../../data/members";
import Layout from "../../../components/Layout";

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
    return (
        <Layout>
            <div className="m-16">
                <div className="flex flex-col max-w-[300px] min-w-64 min-h-[600px] justify-center rounded-md shadow-md p-6 space-y-2">
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
                        <button className="border border-black rounded-sm p-1">LinkedIn</button>
                        <button className="border border-black rounded-sm p-1">Github</button>
                        <button className="border border-black rounded-sm p-1">Homepage</button>
                    </div>
                    <div className="flex flex-wrap justify-center flex-col items-center">
                        <div id="education" className="">
                            Concordia University
                        </div>
                        <div id="location" className="">
                            Montreal, QC. Canada
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
            </div>
        </Layout>
    );
}
