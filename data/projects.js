function createTheme({ slug = "", title = "", projects = "", pub_list = [], members = [] } = {}) {
    return {
        slug,
        title,
        projects,
        pub_list,
        members,
    };
}

function createPub({
    authors = [],
    title = "",
    journal = "",
    conference = "",
    abstract = "",
    url = "#",
    pub_loc = "",
    pub_date = "",
    pub_month = month(1),
    pub_year = "",
    doi = "",
} = {}) {
    return {
        title,
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

function createProject({ title = "", description = [""], link_ref = "", authors = [] } = {}) {
    return {
        title,
        description,
        authors,
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

export const themes = [
    createTheme({
        slug: "applied-ml",
        title: "Applied Machine Learning for Data Intensive Computing",
        members: ["Fatima Ronda", "Ding Li", "Anh Hoang Nguyen"],
        projects: [
            createProject({
                title: `Fatima's`,
                description: `Excepteur mollit minim tempor ea id Lorem nulla velit sunt aliqua. Ullamco incididunt culpa consequat veniam duis ad quis esse ex sunt. Ad excepteur officia Lorem enim est in exercitation veniam proident culpa aliqua. Dolor incididunt aute non occaecat labore tempor laborum quis do tempor. Velit eu non enim reprehenderit nisi aliquip sint esse non voluptate voluptate do. Enim excepteur voluptate minim labore duis velit nulla do sit ea. Ullamco laborum pariatur fugiat nulla ut laborum nisi non velit deserunt deserunt consectetur qui.`,
                authors: ["Fatima Ronda"],
            }),
            createProject({
                title: `Ding's`,
                description: `Adipisicing eu et dolor do. Aute Lorem reprehenderit eu enim consequat magna officia nostrud irure proident. Pariatur esse ea non voluptate ut. Qui ad excepteur magna aliqua officia.`,
                authors: ["Ding Li"],
            }),
            createProject({
                title: `Anh's`,
                description: `Irure proident in ullamco quis et. Labore incididunt elit voluptate nostrud adipisicing pariatur et non sit nulla qui velit quis incididunt. Sint ullamco laborum reprehenderit irure qui sunt aute elit qui laboris. Quis quis amet adipisicing occaecat in incididunt deserunt nostrud aute sunt ex Lorem sunt. Esse ut duis laboris in aute excepteur proident voluptate qui proident velit sint est aliqua.`,
                authors: ["Anh Hoang Nguyen"],
            }),
        ],
        pub_list: [],
    }),
    createTheme({
        slug: "xai",
        title: "Explainability for Responsible AI",
        members: ["Zerui Wang, Jun Huang, Ding Li"],
        projects: [
            createProject({
                title: `Zerui, Jun, Ding's works (placeholder)`,
            }),
        ],
    }),
];
