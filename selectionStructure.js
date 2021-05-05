const valid = process.argv.length > 2 ? true : false;
let age = process.argv[2];

if(valid && age >= 18) {
    console.log("You're over 18");
}
else if(!valid){
    console.log("Plese, enter your age!");
} else {
    console.log("You're under age.");
}
