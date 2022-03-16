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
    title = "",
    journal = "",
    conference = "",
    authors = [],
    abstract = "",
    url = "#",
    pub_date = "",
    pub_year = "",
    pub_loc = "",
    topic = "",
} = {}) {
    return {
        key,
        authors,
        title,
        journal,
        conference,
        abstract,
        url,
        pub_date,
        pub_year,
        pub_loc,
        topic,
    };
}

/**
 * IEEE bibliography format with markdown notation:
 * **{authors[0]}** and **{authors[1]}**. *{title}*, {journal, vol, no, pg.}, {conference}, {location}. {pub_date} {pub_year}
 */
export const pubs = [createPublication()];
