//switch - statement that examines a value for a match against many case clauses. More efficient that many "else if" statements

let grade = "A";

switch (grade) {
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passes ... barely!");
        break;
    case "F":
        console.log("You FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade!");
}

let numberGrade = 55;

switch (true) {
    case numberGrade >= 90:
        console.log("You did great!");
        break;
    case numberGrade >= 80:
        console.log("You did good!");
        break;
    case numberGrade >= 70:
        console.log("You did okay!");
        break;
    case numberGrade >= 60:
        console.log("You passes ... barely!");
        break;
    case numberGrade < 60:
        console.log("You FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade!");
}