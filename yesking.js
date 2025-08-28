<yesking class="js"></yesking>

// who made that mess?
// you did king!
// i made that mess?
// yes king!

const rl = require('readline')
const rli = rl.createInterface((
    input: process.stdin,
)) 
rli.on('line', give_next_line)

function give_next_line(num){
switch(num) {
    case '1':
        console.log("Who made that mess?");
        break;
    case '2':
        console.log("You did king!");
        break;
    case '3':
        console.log("I made that mess?");
        break;
    case '4':
        console.log("Yes king!");
        break;
    default:
        console.log("You didn't say anything.")
}
}


