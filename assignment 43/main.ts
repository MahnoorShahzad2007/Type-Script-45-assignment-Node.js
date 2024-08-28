function show_magicians(magicians : String[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians : string[]){
   return magicians.map(name => (`The Great ${name}`))
}




let magicians_Name = ["Harry Potter","Zach Wizard","The Beast"];

let copy_magicians_Name = magicians_Name.slice()

let copy_great_magicians = make_great(copy_magicians_Name);


console.log("\n Original Array \n");
show_magicians(magicians_Name);

console.log("\n Copied Array \n");
show_magicians(copy_great_magicians);