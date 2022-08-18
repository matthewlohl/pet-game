function Pet (name, happinessLv, hungerLv, activity, color, weight){

}

const readLine = require('readline'); // import readLine
//create interface
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

//-- Create Promise functions to run multiple functions --
// Question 1 
const question_name = () => {
    return new Promise((resolve,reject) => {
        rl.question(('Q1: Give you pet a name: '), (name) => {
            console.log(`Your new pet is ${name}\n`)
            pet1.name = name
            resolve()
        })
    }
    )
}

// Question 2
const question_color = () => {
    return new Promise((resolve,reject) => {
        rl.question(('Q2: Give you pet a color: '), (color) => {
            console.log(`Your new pet is ${color}\n`)
            pet1.color = color
            resolve()
        })
    }
    )
}

// Question 3
const question_food = () => {
    return new Promise((resolve,reject) => {
        rl.question(('Q2: Give you some food (grapes/ walnuts/ lettuce/ pizza): '), (food) => {
            console.log(`You gave some ${food} to ${pet1.name}`)
            pet1.food = food
            hungerLevel_calculator();
            resolve()
        })
    }
    )
}

// Question 4
const question_activity = () => {
    return new Promise((resolve,reject) => {
        rl.question(('Q2: What activities do you want your pet to do? (1)watch TV  2)talk a stroll 3)take a bath 4)eat snacks):  '), (activity) => {
            pet1.activity = parseFloat(activity);
            happinessLevel_calculator();
            resolve()
        })
    }
    )
}


// -- Use Async to run Promise functions --
const userInput = async () => {
    pet1 = new Pet ()
    await question_name()
    await question_color()
    await game()
    // await question_food()
    // await question_activity()
    console.log(`--- END OF GAME ---\nYour score:\n minimise hunger level: ${pet1.hungerLv}/10 \n maximise happiness level: ${pet1.happinessLv}/10`)
    rl.close()
}

userInput()

// Calculators

hungerLevel_calculator = () => {
    
    if (pet1.food === 'grapes'){
        pet1.hungerLv = 4
    }
    console.log(`Your pet's hungerness level: ${pet1.hungerLv}/10\n`)
}

happinessLevel_calculator = () => {
    var happiness = 0
    if (pet1.activity === 1){
        happiness -= 3 
    } else if (pet1.activity === 2){
        happiness += 3
    } else if (pet1.activity === 3){
        happiness +=2
    } else if (pet1.activity === 4){
        happiness -=5
    }
    pet1.happinessLv = happiness;
    console.log(`Your pet's happiness level: ${pet1.happinessLv}/10\n`);
}


async function game () {
    try{
        let game = 1
        while (game < 6){
            console.log(`Game ${game}\n`)
            await question_food()
            await question_activity()
            game += 1;
        }
    }
    catch{
        
    }
}

