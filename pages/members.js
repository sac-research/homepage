import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { members } from "../data/members";

const customLink = (target) => {
    return (
        <Link href={"#" + target.toLowerCase()}>
            <a className="hover:underline underline-offset-2">{target}</a>
        </Link>
    );
};

const LinkedInButton = ({ target }) => {
    let url = target;
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                window.open(url);
            }}
            className="flex font-semibold justify-center items-center rounded-md py-2 px-4 border-2 border-sky-400 hover:bg-sky-400 transition-all text-white"
        >
            <svg
                width="1.25em"
                height="1.25em"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {/* <span className="px-2">LinkedIn</span> */}
        </button>
    );
};

function memberMapping(memberType) {
    return members.map((member, index) =>
        member.type == memberType ? (
            <div
                className="text-black flex justify-start mt-4 w-full p-4"
                key={index}
            >
                <div
                    id="member-photo"
                    style={{
                        backgroundImage:
                            "url('/members-photos/" + member.photo + "')",
                    }}
                    className={
                        "w-32 h-32 flex-none bg-center bg-cover rounded-full"
                    }
                ></div>

                <div className="ml-4">
                    <h2
                        id="member-name"
                        className="text-teal-700 font-bold text-2xl"
                    >
                        {member.honorific +
                            " " +
                            member.firstName +
                            " " +
                            member.midName +
                            " " +
                            member.lastName}
                    </h2>
                    <p id="member-role">{member.role}</p>
                    <div className="list-disc">{member.brief_intro}</div>
                    <div>
                        {member.project !== "" ? (
                            <>
                                <h3
                                    id="member-project"
                                    className="font-bold text-teal-700"
                                >
                                    Projects
                                </h3>
                                <ul>
                                    {member.project.map((proj) => (
                                        <li className="list-disc list-inside">
                                            {proj}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                    {member.social !== "" ? (
                        <div className="my-2">
                            <LinkedInButton
                                target={member.social}
                            ></LinkedInButton>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        ) : (
            ""
        )
    );
}

export default function Members() {
    return (
        <Layout>
            <SEO title="SAC - Members"></SEO>
            <Header></Header>
            <div className="flex mt-8">
                <div className="pr-8">
                    <ul>
                        <li>{customLink("Faculty")}</li>
                        <li>{customLink("Graduates")}</li>
                        <li>{customLink("Undergraduates")}</li>
                        <li>{customLink("Alumni")}</li>
                        <li>{customLink("Visitors")}</li>
                    </ul>
                </div>
                <div>
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 pb-[1px]">
                        <h1
                            id="faculty"
                            className="text-4xl text-red-800 bg-white pb-2"
                        >
                            Faculty Members
                        </h1>
                    </div>
                    {memberMapping("faculty")}
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 pb-[1px]">
                        <h1
                            id="graduates"
                            className="text-4xl text-red-800 bg-white pb-2"
                        >
                            Graduates
                        </h1>
                    </div>
                    {memberMapping("graduate")}
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 pb-[1px]">
                        <h1
                            id="undergraduates"
                            className="text-4xl text-red-800 bg-white pb-2"
                        >
                            Undergraduates
                        </h1>
                    </div>
                    {memberMapping("undergraduate")}
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 pb-[1px]">
                        <h1
                            id="alumni"
                            className="text-4xl text-red-800 bg-white pb-2"
                        >
                            Alumni
                        </h1>
                    </div>
                    {memberMapping("alumni")}
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 pb-[1px]">
                        <h1
                            id="visitors"
                            className="text-4xl text-red-800 bg-white pb-2"
                        >
                            Visitors
                        </h1>
                    </div>
                    {memberMapping("visitor")}
                </div>
            </div>
        </Layout>
    );
}
