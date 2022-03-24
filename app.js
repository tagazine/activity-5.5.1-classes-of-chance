class Casino {
    constructor(name, isFakeCoin){
        this.name = name;
        this.timesPlayed = 0;
        this.isFakeCoin = isFakeCoin;
    }
    playGame(betAmount) {
        if (this.isFakeCoin === 'true') {
            console.log(`${this.name} wins!`)
        }
        else if (Math.random() <= .5) {
            console.log(`${this.name} wins!`)
        }
        else {
            console.log(`The player wins ${betAmount}`)
        }

        this.timesPlayed = this.timesPlayed + 1;
    }
    rollDie(d) {
        console.log(`You've rolled a ${Math.ceil(Math.random() * d)}`);
    }
}



// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", false);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(5);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);

