import SEO from "../../components/SEO";
import { getGlobalData } from "../../utils/global-data";
import { projects } from "../../data/archive/projects";
import Layout from "../../components/Layouts/Layout";

const prospectiveProjects = [
  "Mobile development on open cloud platforms",
  "Social application design and development",
  "Security analysis of cloud architectures",
  "Monitoring of performance and cost of cloud resources",
  "Software project management tools on cloud",
  "Data analysis and visualization",
  "Modeling and simuation of cloud resources",
];

export default function ArchivedProjects() {
  let globalData = getGlobalData();
  return (
    <Layout>
      <div className="sm:mx-64 sm:my-12 mx-4 my-4 flex flex-col space-y-4">
        <SEO title="SAC | Projects" description={globalData.description}></SEO>
        <div className="flex flex-col space-y-4" id="active-projects">
          <h2 className="text-4xl text-emerald-500 font-bold">Active</h2>
          {projects.active.map((p, i) => (
            <div key={i}>
              <h3 className="font-bold ">
                <a className="no-underline" href={p.link_ref}>
                  {p.title}
                </a>
              </h3>

              <details>
                <summary>Learn more</summary>
                {p.description.map((d, j) => (
                  <p className="my-2 dark:text-slate-300" key={j}>
                    {d}
                  </p>
                ))}
              </details>
            </div>
          ))}
          <hr></hr>
        </div>
        <div className="flex flex-col space-y-4" id="completed-projects">
          <h2 className="text-4xl text-emerald-500 font-bold">Completed</h2>
          {projects.completed.map((p, i) => (
            <div key={i}>
              <h3 className="font-bold">
                <a className="no-underline" href={p.link_ref}>
                  {p.title}
                </a>
              </h3>
              <details>
                <summary>Learn more</summary>
                {p.description.map((d, j) => (
                  <p className="my-2" key={j}>
                    {d}
                  </p>
                ))}
              </details>
            </div>
          ))}
          <hr></hr>
        </div>
        <div className="flex flex-col space-y-4" id="prospective-projects">
          <h2 className="text-4xl text-emerald-500 font-bold">Prospective Projects</h2>
          <p id="forewords" className="text-blue-500 font-bold">
            {
              "Dr. Liu is currently accepting applications of projects on all levels, including MEng project, summer internship project (with requirements on GPA) and Capstone project. The topic broadly covers, but not limited to:"
            }
          </p>
          <ul className="list-disc list-inside">
            {prospectiveProjects.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
