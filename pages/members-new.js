import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { members } from "../data/members";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const customLink = (target) => {
    return (
        <Link href={"#" + target}>
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
            aria-label={"Open LinkedIn " + target}
            className="flex font-semibold justify-center items-center hover:text-sky-700 transition-all text-2xl mx-2 my-2"
        >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </button>
    );
};

const GoogleScholarButton = ({ target }) => {
    let url = target;
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                window.open(url);
            }}
            aria-label={"To Google Scholar " + target}
            className="flex font-semibold justify-center items-center hover:text-red-500 transition-all text-2xl mx-2 my-2"
        >
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </button>
    );
};

const HomepageButton = ({ target }) => {
    let url = target;
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                window.open(url);
            }}
            aria-label={"To member's homepage " + target}
            className="flex font-semibold justify-center items-center hover:text-green-500 transition-all text-2xl mx-2 my-2"
        >
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
        </button>
    );
};

function memberTypeSection(memberType) {
    return (
        <div className="my-12">
            <h1 id={memberType} className="text-3xl text-blue-500 font-bold">
                {memberType}
            </h1>
        </div>
    );
}

function memberMapping(memberType) {
    return members.map((member, index) =>
        member.type == memberType ? (
            <div
                className="text-black flex flex-col justify-center items-center min-h-[400px] p-4"
                key={index}
            >
                <div className="flex flex-col">
                    <div
                        id="member-photo"
                        style={{
                            backgroundImage: "url('/members-photos/" + member.photo + "')",
                        }}
                        className={"w-48 h-48 flex-none bg-center bg-cover rounded-[36px]"}
                    ></div>
                    <div className="flex my-2 flex-wrap justify-center">
                        {member.social !== "" ? (
                            <LinkedInButton target={member.social}></LinkedInButton>
                        ) : (
                            ""
                        )}
                        {member.homepage !== "" ? (
                            <HomepageButton target={member.homepage}></HomepageButton>
                        ) : (
                            ""
                        )}
                        {member.scholarPage !== "" ? (
                            <GoogleScholarButton target={member.scholarPage}></GoogleScholarButton>
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <div className="">
                    <h2 id="member-name" className="text-black font-bold text-3xl text-center">
                        {member.honorific +
                            " " +
                            member.firstName +
                            " " +
                            member.midName +
                            " " +
                            member.lastName}
                    </h2>
                    <p id="member-role" className="text-xl">
                        {member.role}
                    </p>
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
            <SEO title="SAC | Members"></SEO>
            <div className="flex mt-8 mx-12">
                {/* <div className="mr-4 pr-4 hidden md:block">
                    <ul>
                        <li>{customLink("Faculty Members")}</li>
                        <li>{customLink("Graduates")}</li>
                        <li>{customLink("Undergraduates")}</li>
                        <li>{customLink("Alumni")}</li>
                        <li>{customLink("Visitors")}</li>
                    </ul>
                </div> */}
                <div className="flex-initial">
                    {memberTypeSection("Faculty Members")}
                    <div className="my-4 flex flex-wrap justify-start space-x-4">
                        {memberMapping("faculty")}
                    </div>
                    {memberTypeSection("Graduates")}
                    <div className="my-4 flex flex-wrap justify-start space-x-4">
                        {memberMapping("graduate")}
                    </div>
                    {memberTypeSection("Undergraduates")}
                    <div className="my-4 flex flex-wrap justify-start space-x-4">
                        {memberMapping("undergraduate")}
                    </div>
                    {memberTypeSection("Alumni")}
                    <div className="my-4 flex flex-wrap justify-start space-x-4">
                        {memberMapping("alumni")}
                    </div>
                    {memberTypeSection("Visitors")}
                    <div className="my-4 flex flex-wrap justify-start space-x-4">
                        {memberMapping("visitor")}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
