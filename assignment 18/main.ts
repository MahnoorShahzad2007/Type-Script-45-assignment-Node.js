//original order
let placesToVisit:string[]= ['Turkey','America','Paris','Korea','Japan'];

console.log("Original Order:",placesToVisit);

//alphabetical order
console.log("Alphabetical Order:",[...placesToVisit].sort());

//still in original order
console.log(" Still in Original Order:",placesToVisit);

//reverse order
console.log("Reverse Order:",[...placesToVisit].reverse());

//still in original order
console.log(" Still in Original Order:",placesToVisit);

//original array reversed
console.log("Original Array Reversed:",placesToVisit.reverse());

//again to original array
console.log("Back to Original Order:",placesToVisit.reverse());

//sort original order in alphabetical order
console.log("Original Order in Alphabetical Order:",placesToVisit.sort());

//reverse again 
console.log("Original Array Reversed again:",placesToVisit.reverse());
