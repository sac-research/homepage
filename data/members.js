/**
 *
 * @param {int} key 1
 * @param {string} honorific
 * @param {string} firstName Anh
 * @param {string} midName Hoang
 * @param {string} lastName Nguyen
 * @param {string} role Undergraduate Research Assistant
 * @param {string} brief_intro I am a full-stack software developer with focus in DevOps and SRE with interests in cloud architectures, system designs, and applied machine learning.
 * @param {string} project (optional) empty string by default
 * @param {string} social https://linkedin.com/in/aaanh
 * @param {string} homepage https://hoanganh.dev
 * @param {string} scholarPage (optional) empty string by default
 * @param {string} type faculty | graduate | undergraduate | visitor
 * @param {string} photo <name>.fileType
 * @returns {memberObject} Member object with all the above attributes
 */
function createMember({
    key = 0,
    honorific = "",
    firstName = "",
    midName = "",
    lastName = "",
    role = "",
    brief_intro = "",
    project = "",
    social = "",
    homepage = "",
    scholarPage = "",
    type = "",
    photo = "placeholder.jpg",
} = {}) {
    return {
        key,
        honorific,
        firstName,
        midName,
        lastName,
        role,
        brief_intro,
        project,
        social,
        homepage,
        scholarPage,
        type,
        photo,
    };
}

const professorIntroduction = (
    <>
        <h3 className="text-teal-700 font-bold list-disc">Research Areas</h3>
        <ul className="list-disc list-inside">
            <li>
                Distributed Computing: Middleware; Cloud Computing; Distributed
                Architectures; Performance Modeling, Analysis and Evaluation;
                Service-oriented Computing
            </li>
            <li>
                Software Engineering: Software Architecture; Model Driven
                Development; Embeded, and Cyber-physical systems
            </li>
            <li>
                Web-Enabled Applications and Services: eScience; Scientific
                Workflow; Business Processes
            </li>
        </ul>
    </>
);

export const members = [
    createMember({
        key: "",
        honorific: "Dr.",
        firstName: "Yan",
        midName: "",
        lastName: "Liu",
        brief_intro: professorIntroduction,
        role: "Associate Professor and Research Lead",
        homepage: "https://users.encs.concordia.ca/~liu",
        type: "faculty",
    }),
    createMember({
        firstName: "Anh",
        midName: "Hoang",
        lastName: "Nguyen",
        role: "Undergraduate Research Assistant",
        brief_intro:
            "I am a full-stack software developer with focus in DevOps and SRE with interests in cloud architectures, system designs, and applied machine learning.",
        project: ["MLaaS Platform Benchmarking", "MLaaS Platform Benchmarking"],
        social: "https://linkedin.com/in/aaanh",
        homepage: "https://hoanganh.dev",
        type: "undergraduate",
    }),
];

export default function dataMembers() {
    return members;
}
