// Do...while 
let pendingActivites;
let doneActivities = 0;

const consultDailyActivities = () => {
    if (doneActivities === 3) {
        return [];
    }

    return [
        'Activite 1',
        ' Activite 2',
        ' Activite 3'
    ];
}

const informActivities = (activites) => {
    if (activites.length === 0) {
        console.log("You don't have any more pending activities!");
        return;
    }
    console.log(`Pending activities: ${activites}`);
}

do {
    pendingActivites = consultDailyActivities();
    informActivities(pendingActivites);
    doneActivities++;
} while (pendingActivites.length > 0);