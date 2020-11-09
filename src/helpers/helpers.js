export const compareTitleAsc = (a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    let comparison = 0;

    if (titleA > titleB) {
        return (comparison = 1);
    } else if (titleA < titleB) {
        return (comparison = -1);
    }
};

export const compareTitleDes = (a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    let comparison = 0;

    if (titleA > titleB) {
        return (comparison = -1);
    } else if (titleA < titleB) {
        return (comparison = 1);
    }
};

export const compareDateAsc = (a, b) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA > dateB) {
        return 1;
    } else if (dateA < dateB) {
        return -1;
    }
};

export const compareDateDes = (a, b) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA > dateB) {
        return -1;
    } else if (dateA < dateB) {
        return 1;
    }
};
