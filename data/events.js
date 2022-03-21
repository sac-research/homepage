function createEvent({
    key = "",
    title = "",
    description = "",
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

export const events = [createEvent(), createEvent()];
