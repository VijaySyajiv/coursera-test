(function (window) {
  var helloSpeaker = {};
  //johnGreeter.name = "John";
  var greeting = "Goodbye ";
  helloSpeaker.speak = function (name) {
    console.log(greeting + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);