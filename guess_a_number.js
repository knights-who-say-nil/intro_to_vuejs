var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    targetNumber: 42,
    guess: null
  },
  methods: {
    checkGuess: function() {
      if (this.guess > this.targetNumber) {
        this.message = "Too High";
      } else if (this.guess < this.targetNumber) {
        this.message = "Too Low";
      } else {
        this.message = "Just right";
      }
    },
    resetGame: function() {
      this.guess = null;
      this.message = "Play again";
      this.targetNumber = Math.floor((Math.random() * 100) + 1);
    }
  }
});