
/**
 * 
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
 * @returns {memberObject} Member object with all the above attributes
 */
function createMember(firstName, midName="", lastName, role, brief_intro, project, social, homepage="", scholarPage="", type) {
    return {firstName, midName, lastName, role, brief_intro, project, social, homepage, scholarPage, type}
}

const members = [
    createMember("Anh", "Hoang", "Nguyen", "Undergraduate Research Assistant", "I am a full-stack software developer with focus in DevOps and SRE with interests in cloud architectures, system designs, and applied machine learning.", "MLaaS Platform Benchmarking", "https://linkedin.com/in/aaanh", "https://hoanganh.dev", "", "undergraduate")
]



export default function dataMembers({ createMember } ) { 
    return members;
}