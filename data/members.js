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
    linkedIn = "",
    googleScholar = "",
    homepage = "",
    type = "",
    photo = "placeholder.jpg",
    institution = "Concordia University",
    location = "Montreal, QC. Canada", // city, state initial, country
    interests = [],
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
        linkedIn,
        homepage,
        googleScholar,
        type,
        photo,
        institution,
        location,
        interests,
    };
}

const professorIntroduction = (
    <>
        <h3 className="text-black font-normal list-disc">Research Areas</h3>
        <ul className="list-disc list-inside">
            <li>
                Distributed Computing: Middleware; Cloud Computing; Distributed Architectures;
                Performance Modeling, Analysis and Evaluation; Service-oriented Computing
            </li>
            <li>
                Software Engineering: Software Architecture; Model Driven Development; Embeded, and
                Cyber-physical systems
            </li>
            <li>
                Web-Enabled Applications and Services: eScience; Scientific Workflow; Business
                Processes
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
        brief_intro: `Distributed Computing: Middleware; Cloud Computing; Distributed Architectures;
        Performance Modeling, Analysis and Evaluation; Service-oriented Computing.`,
        role: "Associate Professor and Research Lead",
        homepage: "https://users.encs.concordia.ca/~liu",
        type: "faculty",
        photo: "yanliu.png",
        googleScholar:
            "https://scholar.google.ca/citations?sortby=pubdate&hl=en&user=7yrUAMsAAAAJ&view_op=list_works",
    }),
    createMember({
        firstName: "Anh",
        midName: "Hoang",
        lastName: "Nguyen",
        role: "Undergraduate Research Assistant",
        brief_intro:
            "I am a full-stack software developer with focus in DevOps and SRE with interests in cloud architectures, system designs, and applied machine learning.",
        project: ["MLaaS Platform Benchmarking", "MLaaS Platform Benchmarking"],
        linkedIn: "https://linkedin.com/in/aaanh",
        homepage: "https://hoanganh.dev",
        type: "undergraduate",
    }),
    createMember({
        firstName: "Anh",
        midName: "Hoang",
        lastName: "Nguyen",
        role: "This is a placeholder entry.",
        brief_intro: "This is a placeholder entry.",
        project: ["MLaaS Platform Benchmarking", "MLaaS Platform Benchmarking"],
        linkedIn: "https://linkedin.com/in/aaanh",
        homepage: "https://hoanganh.dev",
        type: "graduate",
    }),
    createMember({
        firstName: "Hanieh",
        lastName: "Alipour",
        role: "Ph.D. Student (Jan 2014)",
        brief_intro: `Completed her Master of Computer Science at Concordia University under Dr. Glitho. Her Master topic was “QoS Enabled Video Telephony with Virtualized HSS over 4G EPC environment”.`,
        project: [
            "Her project is about designing and validate the optimization model for auto-scaling mechanism in heterogeneous Data centers. Her PhD research will address the key questions in model-driven approach in virtual resource migration and auto-scaling in heterogeneous data centers. ",
        ],
        type: "alumni",
        photo: "haniehalipour.jpeg",
    }),
    createMember({
        firstName: "Gangha",
        lastName: "Dharan",
        role: "M.Eng. Student (Jan 2014 - May 2014)",
        brief_intro:
            "Final year student of Master of Engineering. Work as a part-time software developer and I have 2 years software development experience.",
        project: ["MEng: A Pattern Analysis Method of Intensive Monitoring Data from the Cloud"],
        type: "alumni",
    }),
    createMember({
        firstName: "Mehran",
        lastName: "Khan",
        role: "M.A.Sc Student (Sep 2013)",
        brief_intro:
            "BSc in Telecommunication Engineering, Computer Science, North South University, Bangladesh. Software Engineer at Jijoty, California, USA and SocialCube, Dhaka, Bangladesh.",
        project: [
            "A Monitoring Framework to Enable Elasticity Decision by Monitoring High Available Services in the Cloud",
        ],
        type: "alumni",
    }),
    createMember({
        key: "",
        honorific: "",
        firstName: "Yawei (Vivian)",
        midName: "",
        lastName: "Zhang",
        role: "M.A.Sc Student (Jan 2014)",
        brief_intro:
            "Obtained a Diploma of Information Technology in Medicine Hat College, Alberta and gained a Bachelor of Computer Science from Hebei Normal University of Science & Technology Hebei, China",
        type: "alumni",
        project: ["REST-based Interactive Visualization Software Framework Design"],
        homepage: "",
        googleScholar: "",
        photo: "yaweizhang.jpg",
    }),
    createMember({
        key: "",
        honorific: "",
        firstName: "Xing",
        midName: "",
        lastName: "Wu",
        role: "M.A.Sc Student (Sep 2014)",
        brief_intro:
            "His primary interest lies in the distributed system framework for big data processing issues. Prior to studying in Concordia University, he has worked in Tencent (QQ.COM, top 10 websites in the world ranked by Alexa) as a software engineer for three years.",
        project: ["A Load Adaptive Middleware for Distributed Stream Processing Platforms​"],
        type: "alumni",
        homepage: "",
        googleScholar: "",
    }),
    createMember({
        key: "",
        honorific: "",
        firstName: "Rabih",
        midName: "G.",
        lastName: "El-Zahr",
        role: "Undergraduate Capstone Project",
        brief_intro:
            "Rabih G. El-Zahr is Computer Engineering student at Concordia University. He’s also a web developer who specializes in front-end development (JavaScript, HTML5, CSS3) and founder of Scorpion Shade. During his free time Rabih spends his time improving his programming skills by learning new programming languages. Rabih’s next goal is to get into the world of mobile application development. ",
        type: "alumni",
        photo: "rabih.jpeg",
    }),
    createMember({
        key: "",
        honorific: "",
        firstName: "Ryan",
        midName: "",
        lastName: "Held",
        role: "Undergraduate Capstone Project",
        brief_intro:
            "Ryan Held is a computer engineering undergraduate student at Concordia University and will graduate in June 2014. He has been involved with numerous academic projects including the development of a student scheduling software and a robot battle competition, where his team won second place. He was also a member of the capstone team that demonstrated OpenSAF's cluster error handling process using a game, which was supervised by Dr. Liu, Dr. Toeroe and Dr. Khendek. ",
        type: "alumni",

        photo: "ryanheld.jpeg",
    }),
    createMember({
        key: "",
        honorific: "",
        firstName: "Astou",
        midName: "",
        lastName: "Sene",
        role: "Undergraduate Capstone Project",
        brief_intro:
            "Astou Sene is a student in Computer Engineering at Concordia University, graduating in 2014. Astou has acquired several progamming skills and has implemented different types of applications at Concordia. She has work experience in mobile application development and software testing. She is a member of the Capstone team that worked on the project which aimed to visibly demonstrate the error handling mechanisms of OpenSAF through the control of a game. ",
        type: "alumni",
        photo: "astousene.jpeg",
    }),
    createMember({
        key: "",
        honorific: "Dr.",
        firstName: "Yao",
        midName: "",
        lastName: "Lan",
        role: "Aug 2014",
        brief_intro:
            "Associate Professor, School of Information Science and Engineering, Northeastern University, China",
        type: "visitor",
        homepage: "",
        googleScholar: "",
    }),
    createMember({
        key: "",
        honorific: "Dr.",
        firstName: "Ian",
        midName: "",
        lastName: "Gorton",
        role: "Feb 2014",
        brief_intro:
            "Ian Gorton is a Senior Member of the Technical Staff at the Carnegie Mellon University Software Engineering Institute, where he works on software architectures for big data systems. Before joining the SEI in 2013, he was a Laboratory Fellow in the Computational Sciences and Mathematics Division at the Pacific Northwest National Laboratory (PNNL). At PNNL, he led projects in various scientific domains that are building tools to process and manage complex, massive, distributed data collections for modeling and simulation. Gorton has published three books and 140+ conference and journal papers, mostly in the areas of software architectures and component technologies. He is Senior Member of the IEEE Computer Society and Fellow of the Australian Computer Society.",
        type: "visitor",
    }),
    createMember({
        key: "",
        honorific: "Mr.",
        firstName: "Paul",
        midName: "",
        lastName: "Rimba",
        role: "Jun 2013",
        brief_intro:
            "PhD Candidate, Unversity of New South Wales, Australia & National ICT Australia (NICTA)",
        type: "visitor",
    }),
    // createMember({
    //     key: "",
    //     honorific: "",
    //     firstName: "",
    //     midName: "",
    //     lastName: "",
    //     role: "",
    //     brief_intro: "",
    //     project: [""],
    //     type: "",
    //     homepage: "",
    //     googleScholar: "",
    //     linkedIn: "",
    //     photo:"",
    // }),
];

export default function dataMembers() {
    return members;
}
