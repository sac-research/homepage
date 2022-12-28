import { members } from "../../data/members";
import Layout from "../../components/Layouts/Layout";
import SEO from "../../components/SEO";
import { LinkedInSvg, GitHubSvg, GoogleScholarSvg, HomepageSvg } from "../../components/BrandIcons";
import { useEffect, useState } from "react";

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
  const github_username = filteredMember.github.split("/")[3];
  const [githubAvatarUrl, setGithubAvatarUrl] = useState("");
  useEffect(() => {
    setGithubAvatarUrl(`https://github.com/` + `${github_username}` + `.png?size=200`);
  }, []);

  function externalLinkHandler(target) {
    window.open(target);
  }

  return (
    <Layout>
      <SEO title={filteredMember.firstName + " " + filteredMember.lastName[0] + ". @ SAC"}></SEO>
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
                  filteredMember.github.length > 0
                    ? "url('" + githubAvatarUrl + "')"
                    : "url('/members-photos/" + filteredMember.photo + "')",
              }}
              className={"w-48 h-48 flex-none bg-center bg-cover rounded-full"}
            ></div>
          </div>

          <div className="flex flex-wrap justify-center space-x-2 items-center">
            {filteredMember.linkedIn.length > 0 ? (
              <button
                className="hover:text-info"
                onClick={(e) => {
                  e.preventDefault();
                  externalLinkHandler(filteredMember.linkedIn);
                }}
              >
                <LinkedInSvg></LinkedInSvg>
              </button>
            ) : null}
            {filteredMember.github.length > 0 ? (
              <button
                className="hover:text-info"
                onClick={(e) => {
                  e.preventDefault();
                  externalLinkHandler(filteredMember.github);
                }}
              >
                <GitHubSvg />
              </button>
            ) : null}
            {filteredMember.googleScholar.length > 0 ? (
              <button
                className="hover:text-info"
                onClick={(e) => {
                  e.preventDefault();
                  externalLinkHandler(filteredMember.googleScholar);
                }}
              >
                <GoogleScholarSvg></GoogleScholarSvg>
              </button>
            ) : null}
            {filteredMember.homepage.length > 0 ? (
              <button
                className="hover:text-info"
                onClick={(e) => {
                  e.preventDefault();
                  externalLinkHandler(filteredMember.homepage);
                }}
              >
                <HomepageSvg></HomepageSvg>
              </button>
            ) : null}
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
            <div className="whitespace-pre-line">{filteredMember.brief_intro}</div>
          </div>
          {filteredMember.interests.length > 0 ? (
            <div className="flex flex-wrap justify-center flex-col">
              <h2 className="text-2xl font-bold">Interests</h2>
              <div className="flex space-x-1 flex-wrap mt-2">
                {filteredMember.interests.map((interest, idx) => (
                  <span key={idx} className="badge badge-outline">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
