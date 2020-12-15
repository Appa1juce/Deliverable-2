const rain = prompt("how many inches of rain fell?")

let raininches = rain

function repeatstringnumtimes(str){
return str.repeat(raininches)
}

console.log (repeatstringnumtimes("*", raininches));

let ferttype =null;

const totalbushles = 50;
let finalbushleyield = null;
const addfert = prompt("Was fertilizer added?")
if (addfert === "yes") {
   ferttype = prompt("What type of fertilizer was used? Normal or Premium")
    
}

let harvest = null;


if (raininches >= 20) {
    harvest = totalbushles * 0.9;
    
} else if (raininches < 10) {

    harvest = totalbushles * 0.8;

    
}else {
    totalbushles = 50
}

if (ferttype == ("Normal")) {
    finalharvest = harvest * 1.1;

} else if (ferttype == ("Premium")) {
    finalharvest = harvest * 1.15;

} else{
finalharvest = harvest
    
}

console.log("The final yield should be " + finalharvest + " bushles per acre!")
