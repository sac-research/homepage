import Link from "next/link";
import Layout from "../../components/Layouts/Layout";
import SEO from "../../components/SEO";
import { members } from "../../data/members";
import { useRouter } from "next/router";

const customLink = (target) => {
  return (
    <Link href={"#" + target}>
      <a className="hover:underline underline-offset-2">{target}</a>
    </Link>
  );
};

function memberTypeSection(memberType) {
  return (
    <div className="my-6">
      <h1 id={memberType} className="text-3xl text-primary font-bold">
        {memberType}
      </h1>
    </div>
  );
}

function memberMapping(memberType) {
  const router = useRouter();

  return members.map((member, index) =>
    member.type == memberType ? (
      <div className="flex flex-col items-center h-[200px] w-[200px] p-2" key={index}>
        <div className="flex flex-col">
          <div
            onClick={() => {
              router.push(
                "/members/" + (member.firstName + member.midName + member.lastName).toLowerCase()
              );
            }}
            id="member-photo"
            style={{
              backgroundImage:
                member.github.length > 0
                  ? "url('" +
                    "https://github.com/" +
                    member.github.split("/")[3] +
                    `.png?size=200` +
                    "')"
                  : "url('/members-photos/" + member.photo + "')",
            }}
            className={
              "w-28 h-28 flex-none bg-center bg-cover rounded-lg hover:opacity-60 transition-all ease-in-out hover:cursor-pointer"
            }
          ></div>
        </div>

        <div>
          <a
            className="no-underline hover:underline underline-offset-4 decoration-info"
            href={"/members/" + (member.firstName + member.midName + member.lastName).toLowerCase()}
          >
            <h2 id="member-name" className="font-bold text-lg text-center text-info">
              {member.honorific +
                " " +
                member.firstName +
                " " +
                member.midName +
                " " +
                member.lastName}
            </h2>
          </a>
          <p id="member-role" className="text-md text-center">
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
      <div className="flex mt-4 mx-12">
        <div className="flex-initial flex flex-wrap justify-center">
          <div className="text-center">
            {memberTypeSection("Faculty Members")}
            <div className="my-2 flex flex-wrap justify-center">{memberMapping("faculty")}</div>
          </div>
          <div className="text-center">
            {memberTypeSection("Graduates")}
            <div className="my-2 flex flex-wrap justify-center">{memberMapping("graduate")}</div>
          </div>
          <div className="text-center">
            {memberTypeSection("Undergraduates")}
            <div className="my-2 flex flex-wrap justify-center">
              {memberMapping("undergraduate")}
            </div>
          </div>
          <div className="text-center">
            {memberTypeSection("Alumni")}
            <div className="my-2 flex flex-wrap justify-center">{memberMapping("alumni")}</div>
          </div>
          <div className="text-center">
            {memberTypeSection("Visitors")}
            <div className="my-2 flex flex-wrap justify-center">{memberMapping("visitor")}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
