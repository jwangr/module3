const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
  },
  basket() {
    this.score += 2;
  },
  threePointer() {
    this.score += 3;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
  },
};

 //modify each of the above object methods to enable function chaining as below:
 basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime(); 