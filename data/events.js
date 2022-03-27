function createEvent({
    key = "",
    title = "",
    description = [],
    time = "",
    date = "",
    year = "",
} = {}) {
    return {
        key,
        title,
        description,
        time,
        date,
        year,
    };
}

export const events = [
    createEvent({
        title: "The 2nd SAC Workshop",
        description: [
            "SAC workshop features research students' presentation, visiting scholars' seminar and demonstration of current research progress. The next SAC workshop is scheduled on Apr 3rd 2014 at the Faculty of Engineering and Computer Science, EV Building.",
            "The next workshop will be held at the end of August. Contact Dr. Yan Liu for more information, #7255 or yan dot liu at concordia dot ca",
        ],
        date: "April 3",
        year: "2014",
    }),
    createEvent({
        title: "",
    }),
];
