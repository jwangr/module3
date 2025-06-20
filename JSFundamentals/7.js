const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;    
  },

  fouls: 0,
  addFoul() {
    this.fouls ++;
    return this;
  },

  halfTime() {
    console.log(`Halftime score is ${this.score}. Noted ${this.fouls} fouls.`);
  },
  fullTime() {
    console.log(`Final score is ${this.score}. Noted ${this.fouls} fouls.`);
  },
};

 basketballGame.basket().addFoul().freeThrow().freeThrow().basket().threePointer().addFoul().fullTime(); 