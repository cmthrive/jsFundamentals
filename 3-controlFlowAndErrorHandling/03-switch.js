/*
 - switch statements execute a block of code depending on different cases
    - the switch statement is often used together with a break or a default keyword (or both). These are both optional.
    - the break keyword breaks out of the switch block. This will stop the execution of more code or case testing inside the block. If break is omitted, the next code block in the switch statement is executed.
    - the default keyword specifies some code to run if there is no case match. There can only be one default keyword in a switch. Although this is optional, it is recommended that you use it, as it takes care of unexpected cases.
*/
let num = -5;
switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num < 0):
        console.log('case 2 ran');
        break;
    case (num > 5):
        console.log('case 3 ran'); 
        break;
    default:
        console.log('did not work');
}
// run any code here if a "break" is reached
let officeCharacter = "Pam";
switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galatica.");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
        console.log('I\'m sorry,' + " " + officeCharacter + ",", 'but do I know you?');
        break;
}