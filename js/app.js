//console.log('js loaded');


game = {
    deck:
[
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ],

    player: {
        name: "Ash",
        hand:[],
        points: 0,
        roundsWon: 0
    },
    computer: {
        name: "Gary",
        hand: [],
        points: 0,
        roundsWon: 0
    },
    dealCard(player) {
        let randomIndex = Math.floor(Math.random()*this.deck.length);
        let cardToDeal = game.deck.splice(randomIndex, 1)[0];
        console.log(cardToDeal.name + ' and does '+ cardToDeal.damage+' damage. ');
        player.hand.push(cardToDeal);

    },
    startGame () {
        for (let i = 0; i < 3; i++) { 
            console.log('Ash chooses and plays..');
            this.dealCard(game.player);
            console.log('Gary chooses and plays..');
            this.dealCard(game.computer);
            console.log(' ');
        }
        this.battle();

    },
    battle () {
        let playerCard = this.player.hand.pop();
        let computerCard = this.computer.hand.pop();
        if(playerCard.damage > computerCard.damage){
            this.player.points++
            console.log("Ash won this battle")
        } else if(playerCard.damage === computerCard.damage){
            console.log("All pokemon died tragically in a tie....Ash walks over to Gary and mercilessly beats the fuck out of him.");
        } else {
            this.computer.points++
            console.log("Gary won this battle");
        }
    },

    rounds () {
        for (let i = 0; i < 3; i++) {
            battle()
                console.log(this.player.points);
        }
    }
};

game.startGame();

