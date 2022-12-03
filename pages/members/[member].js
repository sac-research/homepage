import { members } from "../../data/members";
import Layout from "../../components/Layouts/Layout";
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
            <h1 className="text-4xl font-bold text-center text-primary">
                {(filteredMember.honorific != "" ? filteredMember.honorific + " " : "") +
                    filteredMember.firstName +
                    " " +
                    filteredMember.midName +
                    " " +
                    filteredMember.lastName}
            </h1>
            <div className="flex space-x-2 mt-4">
                <div className="flex flex-col justify-center rounded-md shadow-md space-y-6">
                    <div className="flex flex-col items-center justify-center">
                        <div
                            id="member-photo"
                            style={{
                                backgroundImage:
                                    "url('/members-photos/" + filteredMember.photo + "')",
                            }}
                            className={"w-48 h-48 flex-none bg-center bg-cover rounded-full"}
                        ></div>
                    </div>

                    <div className="flex flex-wrap justify-center space-x-2 items-center">
                        <button
                            className="hover:text-info"
                            onClick={(e) => {
                                e.preventDefault();
                                externalLinkHandler(filteredMember.linkedIn);
                            }}
                        >
                            <LinkedInSvg></LinkedInSvg>
                        </button>
                        <button
                            className="hover:text-info"
                            onClick={(e) => {
                                e.preventDefault();
                                externalLinkHandler(filteredMember.github);
                            }}
                        >
                            <GitHubSvg />
                        </button>
                        <button
                            className="hover:text-info"
                            onClick={(e) => {
                                e.preventDefault();
                                externalLinkHandler(filteredMember.googleScholar);
                            }}
                        >
                            <GoogleScholarSvg></GoogleScholarSvg>
                        </button>
                        <button
                            className="hover:text-info"
                            onClick={(e) => {
                                e.preventDefault();
                                externalLinkHandler(filteredMember.homepage);
                            }}
                        >
                            <HomepageSvg></HomepageSvg>
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center flex-col items-center">
                        <div id="institution" className="font-bold text-accent">
                            {filteredMember.institution}
                        </div>
                        <div id="location" className="">
                            {filteredMember.location}
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div>
                        <h2 className="text-3xl font-bold">Introduction</h2>
                        <p>{filteredMember.brief_intro}</p>
                    </div>
                    {filteredMember.interests.length > 0 ? (
                        <div className="flex flex-wrap justify-center flex-col">
                            <h2 className="text-2xl font-bold">Interests</h2>
                            <ul className="list-disc list-inside">
                                {filteredMember.interests.map((interest) => (
                                    <li>{interest}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </Layout>
    );
}
