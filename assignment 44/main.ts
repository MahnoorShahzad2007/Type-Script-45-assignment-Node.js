function makeSandwich (...items: String[]){
    console.log("\n Making Sandwich with following items: \n");

items.forEach(singleItem => console.log(singleItem)
    );
console.log("\n Now enjoy your Sandwich \n");
}

makeSandwich("chicken","mayo","bread");

makeSandwich("jam","butter","bread");

makeSandwich("egg","mayo","chicken","bread");