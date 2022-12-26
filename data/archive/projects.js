function createProject({ key = 0, title = "", description = [""], link_ref = "" } = {}) {
    return {
        key,
        title,
        description,
        link_ref,
    };
}

const month = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
};

export const projects = {
    active: [
        createProject({
            title: "A Monitoring Framework to Enable Elasticity Decision by Monitoring High Available Services in The Cloud",
            description: [
                "This work intends to develop a Monitoring Framework to monitor the HA Services provided by the OpenSAF middleware. The Monitoring Framework will alert the Elasticity Engine of OpenSAF upon workload change of the running Services. The alert will consist of the name of the affected Service Instance name and the workload status. The research problem is to collect low level trace from the cloud cluster running OpenSAF, process and analyze the trace to obtain numerical workload data and interpret the workload in terms of Service Instances to detect workload change in the Services.",
                "This project is in collaboration with MAGIC NSERC/ERICSSON Industrial Research Chair.",
            ],
        }),
        createProject({
            title: "Load Adaptive Optimization for Incremental Data Processing Platforms",
            description: [
                "Stream processing software frameworks enable real-time processing of continuous unbounded streams of data at a high speed. Leveraging the elasticity of cloud computing infrastructure, stream processing frameworks can become Platform as a Service for many domain applications that provides simplified development and run-time management. An issue of making such a PaaS scalability is to allocate data processing operators on nodes of clusters and balance the workload dynamically. Since the data volume and rate can be unpredictable, static mapping between operators and cluster resources open results in unbalanced operator load distribution. This projects proposes an optimization method that combines correlation of resource utilization of nodes and capacity of clusters. The associated software components form a layer between a streaming processing software framework and cloud clusters and nodes. This software layer allows dynamic transferring of an operator to different cluster nodes at runtime and keeps transparent to developers.≈",
            ],
        }),
        createProject({
            title: "Performance and Cost Evaluation of Running Data Intensive Applications on Hadoop and Streaming Processing Middleware",
            description: [
                "Processing large scale data is an increasing common and important problem for many domains. The de facto standard programming model MapReduce, and the associated run-time systems were originally adopted by Google. Subsequently, an open-source platform named Hadoop that supports the same programming model has also gained tremendous popularity. However, MapReduce was not designed to efficiently process small and independent updates. This means the MapReduce must be run again over both the newly updated data and the old data. Given enough computing resources, MapReduce’s scalability makes this approach feasible. However, reprocessing the entire data discards the work done in earlier runs and makes latency proportional to the size of entire data, rather than the size of an update.",
                "S4 is a distributed computing platform for processing continuous unbounded streams of data. The motivation of S4 is to provide a highly scalable software solution (akin to Hadoop for batch data processing) to operate at high data rates and process massive amounts of data.",
                "This research aims to present an empirical performance and cost evaluation of both Hadoop and S4 on processing continuous and incremental updated data streams.",
            ],
        }),
        createProject({
            title: "REST-based Interactive Visualization Software Framework Design",
            description: [
                "There are numerous data sources available online which makes it necessary to analyse the data streams and demonstrate the hidden trends. To present the insightful information interactively, we propose REST APIs to retrieve the raw data, POST them into Non-SQL data storage then present correlation of events in visualization which allows the end users to interact with the data, provide their interests and monitor the events accordingly.",
            ],
        }),
    ],
    completed: [
        createProject({
            title: "Performance Evaluation of Open Source E-commerce Framework in Private Cloud Infrastructure",
            description: [
                "This project is about the evaluation of performance of the open source e-commerce platform KONAKART over open source private cloud Eucalyptus, using free Application performance management solution – AppDynamics Lite. This project revolves around how open source platforms can be used to leverage the performance of ecommerce application at no cost. Also, this project provides a solution on how an application should be distributed and scaled over the cloud to handle huge amount of day-to day transactions and traffic.",
            ],
        }),
        createProject({
            title: "Cloud Computing Capability-Based System Security Access Mechanism",
            description: [
                "This project explores an intial architectural structure of storage security on cloud. It is a capability-based system, which consists in giving a user the rights based in a unique object identifier. In the case of this project, the capability file is storage in a specific server, not the cloud, and this file has all operations that the each user can do. This research uses Google drive to store all files of our clients and the server that runs our application on top of it and protects users' files.",
            ],
            link_ref: "/project_refs/Capability-Based.pdf",
        }),
    ],
};
