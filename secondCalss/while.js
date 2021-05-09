// While - be aware of the manual incrementation/decrementation
let carNumber = 1;
const washCar = () => {
    console.log(`Washing car number:  ${carNumber}`);
}

const verifyIfHasCarInQueue = () => {
    return ( carNumber < 10 );
    }
    
    let hasCarsInQueue = true;
    while (hasCarsInQueue) {
        washCar();
        hasCarsInQueue = verifyIfHasCarInQueue();
        carNumber++;
}