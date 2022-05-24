import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { members } from "../data/members";

const customLink = (target) => {
    return (
        <Link href={"#" + target}>
            <a className="hover:underline underline-offset-2">{target}</a>
        </Link>
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
                    <p id="member-role" className="text-xl text-center">
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
                <div className="flex-initial">
                    {memberTypeSection("Faculty Members")}
                    <div className="my-4 flex flex-wrap justify-center md:justify-start">
                        {memberMapping("faculty")}
                    </div>
                    {memberTypeSection("Graduates")}
                    <div className="my-4 flex flex-wrap justify-center md:justify-start">
                        {memberMapping("graduate")}
                    </div>
                    {memberTypeSection("Undergraduates")}
                    <div className="my-4 flex flex-wrap justify-center md:justify-start">
                        {memberMapping("undergraduate")}
                    </div>
                    {memberTypeSection("Alumni")}
                    <div className="my-4 flex flex-wrap justify-center md:justify-start">
                        {memberMapping("alumni")}
                    </div>
                    {memberTypeSection("Visitors")}
                    <div className="my-4 flex flex-wrap justify-center md:justify-start">
                        {memberMapping("visitor")}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
