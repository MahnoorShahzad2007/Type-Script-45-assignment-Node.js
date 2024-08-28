let guest = ['Amir','Aima','Saad',"Zainab","Laiba"];

let guestDontCome = guest[0];

console.log(guestDontCome,'Cannot join sorry!');

guest.splice(0 , 0,'Hania');

for (let i=0; i<guest.length;i++){
    console.log(`Asalam o Alaikum! ${guest[i]} Would you like to have dinner with me tonight.`);
}