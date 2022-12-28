function createPublication({
  key = 0,
  authors = [],
  topic = "",
  subtopic = "",
  title = "",
  journal = "",
  conference = "",
  abstract = "",
  url = "#",
  pub_loc = "",
  pub_date = "",
  pub_month = "",
  pub_year = "",
  doi = "",
} = {}) {
  return {
    key,
    authors,
    title,
    topic,
    subtopic,
    journal,
    conference,
    abstract,
    url,
    pub_loc,
    pub_date,
    pub_month,
    pub_year,
    doi,
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

export const pubs = {
  "Middleware and Platforms": {
    "Streaming Processing Middleware": [
      createPublication({
        authors: ["Xing Wu", "Yan Liu"],
        topic: "Middleware and Platforms",
        subtopic: "Streaming Processing Middleware",
        title: "Optimization of Load Adaptive Distributed Stream Processing Services",
        conference:
          "Accepted by 11th IEEE International Conference on Services Computing (IEEE SCC 2014)",
        pub_loc: "Anchorage, Alaska, USA",
        pub_date: "",
        pub_month: month[6],
        pub_year: 2014,
      }),
      createPublication({
        authors: ["Xing Wu", "Yan Liu"],
        topic: "Middleware and Platforms",
        subtopic: "Streaming Processing Middleware",
        title:
          "Enabling A Load Adaptive Distributed Stream Processing Platform on Synchronized Clusters",
        conference:
          "Accepted by IEEE International Workshop on the Future of PaaS 2014 Part of the IEEE IC2E Conference",
        pub_loc: "Boston, MA, USA",
        pub_date: "",
        pub_month: month[3],
        pub_year: 2014,
      }),
    ],
  },
  "Software and System Architecture": {
    "Service Oriented Computing": [
      createPublication({
        authors: ["Phoomvuthisarn, Suronapee", "Liu, Yan", "Zhu, Liming", "Jeffery, Ross"],
        topic: "Software and System Architecture",
        subtopic: "Service Oriented Computing",
        title: "Integrating a market-based model in trust-based service systems",
        journal: "Journal of Tsinghua Science and Technology, vol.18, no.6, pp.554 - 567",
        pub_month: month[12],
        pub_year: 2013,
        doi: "https://doi.org/10.1109/TST.2013.6678901",
      }),
    ],
    "Domain-Specific System Design": [
      createPublication({
        authors: ["Ferosh Jacob", "Adam Wynne", "Yan Liu", "Jeff Gray"],
        topic: "Software and System Architecture",
        subtopic: "Domain-Specific System Design",
        title:
          "Domain-Specific Languages for Developing and Deploying Signature Discovery Workflows",
        journal: "IEEE Computing in Science and Engineering, vol. 16, no. 1, pp. 52-64",
        pub_month: month[1] + "/" + month[2],
        pub_year: 2014,
      }),
      createPublication({
        authors: ["Shuai Lu", "Yan Liu", "Da Meng"],
        topic: "Software and System Architecture",
        subtopic: "Domain-Specific System Design",
        title:
          "Towards a Collaborative Simulation Platform for Renewable Energy Systems, Services (SERVICES)",
        conference: "2013 IEEE Ninth World Congress",
        pub_month: month[6] + "/" + month[7],
        pub_year: 2013,
        doi: "https://doi.org/10.1109/SERVICES.2013.31",
      }),
      createPublication({
        authors: ["Yan Liu", "Gorton, I.", "Wynne, A."],
        topic: "Software and System Architecture",
        subtopic: "Domain-Specific System Design",
        title: "Architecture-Based Adaptivity Support for Service Oriented Scientific Workflows",
        journal: "Service Oriented System Engineering (SOSE)",
        conference: "2013 IEEE 7th International Symposium on , vol., no., pp.309 - 314",
        pub_date: "25-28",
        pub_month: month[3],
        pub_year: 2013,
        doi: "https://doi.org/10.1109/SOSE.2013.37",
      }),
      createPublication({
        authors: [
          "Ian Gorton",
          "Yan Liu",
          "Carina Lansing",
          "Todd Elsethagen",
          "Kerstin Kleese van Dam",
        ],
        topic: "Software and System Architecture",
        subtopic: "Domain-Specific System Design",
        title:
          "Build less code deliver more science: an experience report on composing scientific environments using component-based and commodity software platforms",
        conference:
          "In Proceedings of the 16th International ACM Sigsoft symposium on Component-based software engineering (CBSE '13)",
        pub_loc: "ACM, New York, NY, USA, 159-168",
        doi: "https://dl.acm.org/doi/abs/10.1145/2465449.2465460",
      }),
    ],
  },
  "Modeling and Analysis": {
    "Simulation Method and Tool": [
      createPublication({
        authors: ["Agarwal, K.", "Sharma, P.", "Ma, J.", "Lo, C.", "Gorton, I.", "Liu, Y."],
        topic: "Modeling and Analysis",
        subtopic: "Simulation Method and Tool",
        title: "REVEAL: An Extensible Reduced Order Model Builder for Simulation and Modeling",
        journal: "IEEE Computing in Science & Engineering , vol.PP, no.99, pp.1-10",
        doi: "https://doi.org/10.1109/MCSE.2013.46",
      }),
      createPublication({
        authors: ["Ilge Akkaya", "Yan Liu", "Edward A. Lee", "Ian Gorton"],
        topic: "Modeling and Analysis",
        subtopic: "Simulation Method and Tool",
        title: "Modeling uncertainty for middleware-based streaming power grid applications",
        conference:
          "In Proceedings of the 8th Workshop on Middleware for Next Generation Internet Computing (MW4NextGen '13)",
        pub_loc: "ACM, New York, NY, USA, Article 4, 6 pages",
        doi: "https://doi.org/10.1145/2541608.2541612",
      }),
    ],
  },
};
