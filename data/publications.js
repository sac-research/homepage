/**
 *
 * @param {int} key
 * @param {string} title
 * @param {Object} abstract
 * @param {string} url
 * @param {string} progress
 * @param {int} pub_date
 * @returns {object} publications
 */
function createPublications({
    key = 0,
    title = "",
    abstract = "",
    url = "#",
    progress = "",
    pub_date = "",
} = {}) {
    return {
        key,
        title,
        abstract,
        url,
        progress,
        pub_date,
    };
}

export const pubs = [
    createPublications({
        title: "A Monitoring Framework to Enable Elasticity Decision by Monitoring High Available Services in The Cloud",
        abstract: [
            "This work intends to develop a Monitoring Framework to monitor the HA Services provided by the OpenSAF middleware. The Monitoring Framework will alert the Elasticity Engine of OpenSAF upon workload change of the running Services. The alert will consist of the name of the affected Service Instance name and the workload status. The research problem is to collect low level trace from the cloud cluster running OpenSAF, process and analyze the trace to obtain numerical workload data and interpret the workload in terms of Service Instances to detect workload change in the Services.",
            "This project is in collaboration with MAGIC NSERC/ERICSSON Industrial Research Chair.",
        ],
        progress: "active",
    }),
    createPublications({
        title: "Performance Evaluation of Open Source E-commerce Framework in Private Cloud Infrastructure",
        abstract: [
            "This project is about the evaluation of performance of the open source e-commerce platform KONAKART over open source private cloud Eucalyptus, using free Application performance management solution – AppDynamics Lite. This project revolves around how open source platforms can be used to leverage the performance of ecommerce application at no cost. Also, this project provides a solution on how an application should be distributed and scaled over the cloud to handle huge amount of day-to day transactions and traffic.",
        ],
        progress: "complete",
    }),
];
