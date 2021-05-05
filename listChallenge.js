const name = process.argv[2];
const age = parseInt(process.argv[3]);

if (age < 18) {
    console.log("NOT ALLOWED! You're under 18.");
    return;
}
else {
    switch (name) {
        case "Rafa":
            console.log("Welcome to the party");
            break;
        case "Dani":
            console.log("Welcome to the party");
            break;
        case "Filipe":
            console.log("Welcome to the party");
            break;
        default:
            console.log("You're not in the gestlist.")
    }
}

// Professor's solution
/* 
const gestList = ["Douglas", "Rafael", "Daniel"]; 

if (!guestList.includes(name)) {
    console.log("You're not inveted");
    return;
} 

if (age < 18) {
    console.log("You're under age");
    return;
}

console.log("Welcome to the party!!");

*/