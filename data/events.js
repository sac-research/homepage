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
        date: "April 3rd",
        year: 2014,
    }),
    createEvent({
        title: "Xing Wu (MASc student) presented his research paper at IEEE IC2E International Workshop. Boston, USA",
        description: [
            `The paper is titled "Enabling A Load Adaptive Distributed Stream Processing Platform on Synchronized Clusters" by Xing Wu and Yan Liu.`,
        ],
        date: "Mar 11th",
        year: 2014,
    }),
    createEvent({
        title: "SAC group co-organized the IEEE Lecture from Dr. Ian Gorton",
        description: [
            `SAC group hosted Dr. Ian Gorton's visit and co-organized his IEEE Lecture on "Software Architecture for Big Data Systems". Dr. Hamou-Lhadj is the Chair of IEEE Montreal Section Computer Society Chapter, who co-organized this event.`,
        ],
        date: "Feb 5th",
        year: 2014,
    }),
    createEvent({
        title: "The 1st SAC Workshop",
        description: [
            "SAC group hosted Dr. Ian Gorton's visit from Carnegie Mellon University Software Engineering Institute, where he works on software architectures for big data systems. Before joining the SEI in 2013, he was a Laboratory Fellow in the Computational Sciences and Mathematics Division at the Pacific Northwest National Laboratory (PNNL). We collaborate on MapReduce/Hadoop performance analysis and prediction of data intensive applications.",
        ],
        date: "Feb 5th",
        year: 2014,
    }),
    createEvent({
        title: "Mehran Khan attended the LTTng-Tmf-hack Day",
        description: [
            "Mehran Khan (MASc student) worked in a team to instrument the VLC player (Video LAN Player) with LTTng UST trace pointers for tracing. École Polytechnique de Montréal, Montreal, Quebec, Canada.",
        ],
        date: "Dec 12th",
        year: 2013,
    }),
    createEvent({
        title: "",
    }),
];
