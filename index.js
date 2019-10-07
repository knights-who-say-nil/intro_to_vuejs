// the vue object is defined by a large nested hash
// el, data, and methods are special keys on the first level of this large hash
// data and methods hold a hash themselves, with keys and values determined by your needs in the specific app.

var app = new Vue({
  el: "#app",
  // all models must be initialized in the data section before they can be used in the methods of the html
  data: {
    message: "Hello Vue!",
    showInfo: false,
    movies: ["Ready Player One", "Ghostbusters", "In the Army Now"],
    newMovie: ""
  },
  // methods are defined with 1st Citizen syntax
  methods: {
    changeMessage: function() {
      this.message = "Believe me!!! I can change!!!";
    },
    toggleInfo: function() {
      this.showInfo = !this.showInfo;
    },
    addMovie: function() {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    }
  }
});
