let current_userName = ["usman","ali","osama","areeb"]

let new_userName = ["Ali","omama","mehreen","areeb"]

new_userName.forEach((newUser) => {

    let ourCondition = current_userName.some(currentUser => currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase())

    if(ourCondition){
        console.log(`Username ${newUser} is already taken please enter a new name.`);
    }
    else{
        console.log(`Username ${newUser} is available.`)
    }
});