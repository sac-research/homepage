import { themes } from "../../data/projects";
import Layout from "../../components/Layouts/Layout";
import SEO from "../../components/SEO";
import { useEffect, useState } from "react";

export const getStaticPaths = async () => {
    const paths = themes.map((obj) => obj.slug).map((theme) => ({ params: { theme } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const getTheme = await themes.filter((themeObj) => themeObj.slug == params.theme)[0];
    return {
        props: {
            theme: getTheme,
        },
    };
};

export default function Theme({ theme }) {
    const [showProject, setShowProject] = useState("");

    useEffect(() => {
        setShowProject(theme.projects[0].title);
    }, []);

    return (
        <Layout>
            <SEO title={theme?.title}></SEO>
            <div className="my-2 flex flex-col items-center">
                <h1 className="text-primary text-4xl">Research Theme</h1>
                <h1 className="animate-text text-4xl py-2 bg-gradient-to-r text-transparent bg-clip-text from-emerald-400 via-pink-300 to-violet-300 inline-block">
                    {theme?.title}
                </h1>
            </div>
            <div>
                <div className="flex flex-col items-center">
                    Contributing members:{" "}
                    {theme?.members.map((member, index) => {
                        const numOfMembers = theme?.members.length;
                        if (index < numOfMembers - 1) {
                            return member + " | ";
                        } else return member + "";
                    })}
                </div>
            </div>
            <div id="project-selector" className="my-2 flex justify-center">
                {theme?.projects.map((project, idx) => (
                    <button
                        key={idx}
                        onClick={() => setShowProject(project.title)}
                        className={
                            "tab tab-bordered " + (project.title == showProject ? "tab-active" : "")
                        }
                    >
                        <h2 className="text-xl">{project?.title}</h2>
                    </button>
                ))}
            </div>
            <div id="project-details" className="my-2">
                {theme?.projects.map((project, idx) => (
                    <div>
                        {project?.title === showProject ? (
                            <div key={idx}>
                                <h3 className="text-accent">
                                    {"Author(s): "}
                                    {project.authors.map((a, idx) => (
                                        <span key={idx}>{a}</span>
                                    ))}
                                </h3>
                                <p>{project?.description}</p>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </Layout>
    );
}
