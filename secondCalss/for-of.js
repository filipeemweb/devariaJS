
// For of (same as foreach, but with an 'of' in the middle instead of 'in')
const newStudents = ["Douglas", "Daniel", "Filipe", "Rafa"];

const sayWelcome = (studentName) => {
    console.log(`Welcome ${studentName}`);
}

for (const aluno of newStudents) {
    sayWelcome(aluno);
}