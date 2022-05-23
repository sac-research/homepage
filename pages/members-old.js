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

// const LinkedInButton = ({ target }) => {
//     let url = target;
//     return (
//         <button
//             onClick={(e) => {
//                 e.preventDefault();
//                 window.open(url);
//             }}
//             aria-label={"Open LinkedIn " + target}
//             className="flex font-semibold justify-center items-center hover:text-sky-700 transition-all text-2xl mx-2 my-2"
//         >
//             <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
//         </button>
//     );
// };

// const GoogleScholarButton = ({ target }) => {
//     let url = target;
//     return (
//         <button
//             onClick={(e) => {
//                 e.preventDefault();
//                 window.open(url);
//             }}
//             aria-label={"To Google Scholar " + target}
//             className="flex font-semibold justify-center items-center hover:text-red-500 transition-all text-2xl mx-2 my-2"
//         >
//             <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
//         </button>
//     );
// };

// const HomepageButton = ({ target }) => {
//     let url = target;
//     return (
//         <button
//             onClick={(e) => {
//                 e.preventDefault();
//                 window.open(url);
//             }}
//             aria-label={"To member's homepage " + target}
//             className="flex font-semibold justify-center items-center hover:text-green-500 transition-all text-2xl mx-2 my-2"
//         >
//             <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
//         </button>
//     );
// };

function memberTypeSection(memberType) {
    return (
        <div className="">
            <h1 id={memberType} className="text-3xl">
                {memberType}
            </h1>
        </div>
    );
}

function memberMapping(memberType) {
    return members.map((member, index) =>
        member.type == memberType ? (
            <div className="text-black flex justify-start mt-4 w-full p-4" key={index}>
                <div className="flex flex-col">
                    <div
                        id="member-photo"
                        style={{
                            backgroundImage: "url('/members-photos/" + member.photo + "')",
                        }}
                        className={"w-32 h-32 flex-none bg-center bg-cover rounded-full"}
                    ></div>
                    {/* <div className="flex my-2 flex-wrap justify-center">
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
                    </div> */}
                </div>

                <div className="ml-4">
                    <h2 id="member-name" className="text-purple-600 font-light text-3xl">
                        {member.honorific +
                            " " +
                            member.firstName +
                            " " +
                            member.midName +
                            " " +
                            member.lastName}
                    </h2>
                    <p id="member-role" className="text-2xl">
                        {member.role}
                    </p>
                    <div className="list-disc">{member.brief_intro}</div>
                    <div>
                        {member.project !== "" ? (
                            <>
                                <h3 id="member-project" className="font-bold text-black">
                                    Projects
                                </h3>
                                <ul>
                                    {member.project.map((proj, index) => (
                                        <li key={index} className="list-disc list-inside">
                                            {proj}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
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
            <div className="flex mt-8 ml-4">
                <div className="mr-4 pr-4 hidden md:block">
                    <ul>
                        <li>{customLink("Faculty Members")}</li>
                        <li>{customLink("Graduates")}</li>
                        <li>{customLink("Undergraduates")}</li>
                        <li>{customLink("Alumni")}</li>
                        <li>{customLink("Visitors")}</li>
                    </ul>
                </div>
                <div className="flex-initial">
                    <div className="my-4">
                        {memberTypeSection("Faculty Members")}
                        {memberMapping("faculty")}
                    </div>
                    <div className="my-4">
                        {memberTypeSection("Graduates")}
                        {memberMapping("graduate")}
                    </div>
                    <div className="my-4">
                        {memberTypeSection("Undergraduates")}
                        {memberMapping("undergraduate")}
                    </div>
                    <div className="my-4">
                        {memberTypeSection("Alumni")}
                        {memberMapping("alumni")}
                    </div>
                    <div className="my-4">
                        {memberTypeSection("Visitors")}
                        {memberMapping("visitor")}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
