var guest = ['Amir', 'Aima', 'Saad', "Zainab", "Laiba"];
var guestDontCome = guest[0];
console.log(guestDontCome, 'Cannot join sorry!');
guest.splice(0, 0, 'Hania');
for (var i = 0; i < guest.length; i++) {
    console.log("Asalam o Alaikum! ".concat(guest[i], " Would you like to have dinner with me tonight."));
}
