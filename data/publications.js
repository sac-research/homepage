/**
 *
 * @param {int} key
 * @param {string} title
 * @param {Object} author
 * @param {Object} abstract
 * @param {string} url
 * @param {string} progress
 * @param {int} pub_date
 * @param {string} topic
 * @returns {object} publications
 */
function createPublication({
    key = 0,
    authors = [],
    title = "",
    topic = "",
    subtopic = "",
    journal = "",
    conference = "",
    abstract = "",
    url = "#",
    pub_loc = "",
    pub_date = "",
    pub_month = "",
    pub_year = 0,
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
    };
}

/**
 * IEEE bibliography format with markdown notation:
 * **{authors[0]}** and **{authors[1]}**. *{title}*, {journal, vol, no, pg.}, {conference}, {location}. {pub_date} {pub_year}
 */
export const pubs = [
    createPublication({
        authors: ["Xing Wu", "Yan Liu"],
        topic: "Middleware and Platforms",
        subtopic: "Streaming Processing Middleware",
        title: "Optimization of Load Adaptive Distributed Stream Processing Services",
        conference:
            "accepted by 11th IEEE International Conference on Services Computing (IEEE SCC 2014)",
        pub_loc: "Anchorage, Alaska, USA",
        pub_month: "June",
        pub_year: 2014,
    }),
];
