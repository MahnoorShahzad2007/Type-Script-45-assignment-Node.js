function show_magicians(magicians : String[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians : string[]){
   return magicians.map(name => (`The Great ${name}`))
}




let magicians_Name = ["Harry Potter","Zach Wizard","The Beast"];

let great_magicians = make_great(magicians_Name)

show_magicians(great_magicians);