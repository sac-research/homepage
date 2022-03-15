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
                    {members.map((member, index) =>
                        member.type === "faculty" ? (
                            <div
                                className="text-black flex justify-start mt-4 w-full p-4"
                                key={index}
                            >
                                <div
                                    id="member-photo"
                                    style={{
                                        backgroundImage:
                                            "url('/members-photos/" +
                                            member.photo +
                                            "')",
                                    }}
                                    className={
                                        "w-32 h-32 flex-none bg-center bg-cover rounded-full"
                                    }
                                ></div>
                                <div className="ml-4">
                                    <h2
                                        id="member-name"
                                        className="text-teal-700 font-bold"
                                    >
                                        {member.firstName +
                                            " " +
                                            member.midName +
                                            " " +
                                            member.lastName}
                                    </h2>

                                    <p id="member-role">{member.role}</p>
                                    <p id="member-intro">
                                        {member.brief_intro}
                                    </p>
                                    <p id="member-project">
                                        Project: {member.project}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    )}
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 pb-[1px]">
                        <h1
                            id="graduates"
                            className="text-4xl text-red-800 bg-white pb-2"
                        >
                            Graduates
                        </h1>
                    </div>
                    {members.map((member, index) =>
                        member.type === "graduate" ? (
                            <div
                                className="text-black flex justify-between mt-4 w-full p-4"
                                key={index}
                            >
                                <div
                                    id="member-photo"
                                    style={{
                                        backgroundImage:
                                            "url('/members-photos/" +
                                            member.photo +
                                            "')",
                                    }}
                                    className={
                                        "w-32 h-32 flex-none bg-center bg-cover rounded-full"
                                    }
                                ></div>
                                <div className="ml-4">
                                    <h2
                                        id="member-name"
                                        className="text-teal-700 font-bold"
                                    >
                                        {member.firstName +
                                            " " +
                                            member.midName +
                                            " " +
                                            member.lastName}
                                    </h2>

                                    <p id="member-role">{member.role}</p>
                                    <p id="member-intro">
                                        {member.brief_intro}
                                    </p>
                                    <p id="member-project">
                                        Project: {member.project}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    )}
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 pb-[1px]">
                        <h1
                            id="undergraduates"
                            className="text-4xl text-red-800 bg-white pb-2"
                        >
                            Undergraduates
                        </h1>
                    </div>
                    {members.map((member, index) =>
                        member.type === "undergraduate" ? (
                            <div
                                className="text-black flex justify-between mt-4 w-full p-4"
                                key={index}
                            >
                                {console.log(member)}
                                <div
                                    id="member-photo"
                                    style={{
                                        backgroundImage:
                                            "url('/members-photos/" +
                                            member.photo +
                                            "')",
                                    }}
                                    className={
                                        "w-32 h-32 flex-none bg-center bg-cover rounded-full"
                                    }
                                ></div>
                                <div className="ml-4">
                                    <h2
                                        id="member-name"
                                        className="text-teal-700 font-bold"
                                    >
                                        {member.firstName +
                                            " " +
                                            member.midName +
                                            " " +
                                            member.lastName}
                                    </h2>

                                    <p id="member-role">{member.role}</p>
                                    <p id="member-intro">
                                        {member.brief_intro}
                                    </p>
                                    <p id="member-project">
                                        Project: {member.project}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    )}
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 pb-[1px]">
                        <h1
                            id="alumni"
                            className="text-4xl text-red-800 bg-white pb-2"
                        >
                            Alumni
                        </h1>
                    </div>
                    {members.map((member, index) =>
                        member.type === "alumni" ? (
                            <div
                                className="text-black flex justify-between mt-4 w-full p-4"
                                key={index}
                            >
                                <div
                                    id="member-photo"
                                    style={{
                                        backgroundImage:
                                            "url('/members-photos/" +
                                            member.photo +
                                            "')",
                                    }}
                                    className={
                                        "w-32 h-32 flex-none bg-center bg-cover rounded-full"
                                    }
                                ></div>
                                <div className="ml-4">
                                    <h2
                                        id="member-name"
                                        className="text-teal-700 font-bold"
                                    >
                                        {member.firstName +
                                            " " +
                                            member.midName +
                                            " " +
                                            member.lastName}
                                    </h2>

                                    <p id="member-role">{member.role}</p>
                                    <p id="member-intro">
                                        {member.brief_intro}
                                    </p>
                                    <p id="member-project">
                                        Project: {member.project}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    )}
                    <div className="bg-gradient-to-r from-rose-500 to-cyan-500 pb-[1px]">
                        <h1
                            id="visitors"
                            className="text-4xl text-red-800 bg-white pb-2"
                        >
                            Visitors
                        </h1>
                    </div>
                    {members.map((member, index) =>
                        member.type === "visitor" ? (
                            <div
                                className="text-black flex justify-between mt-4 w-full p-4"
                                key={index}
                            >
                                <div
                                    id="member-photo"
                                    style={{
                                        backgroundImage:
                                            "url('/members-photos/" +
                                            member.photo +
                                            "')",
                                    }}
                                    className={
                                        "w-32 h-32 flex-none bg-center bg-cover rounded-full"
                                    }
                                ></div>
                                <div className="ml-4">
                                    <h2
                                        id="member-name"
                                        className="text-teal-700 font-bold"
                                    >
                                        {member.firstName +
                                            " " +
                                            member.midName +
                                            " " +
                                            member.lastName}
                                    </h2>

                                    <p id="member-role">{member.role}</p>
                                    <p id="member-intro">
                                        {member.brief_intro}
                                    </p>
                                    <p id="member-project">
                                        Project: {member.project}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    )}
                </div>
            </div>
        </Layout>
    );
}
