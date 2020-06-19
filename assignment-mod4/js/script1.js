(function (window) {
  var goodByeSpeaker = {};
 // yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  goodByeSpeaker.speak = function (name) {
    console.log(greeting + name);
  }

  window.goodByeSpeaker = goodByeSpeaker;

})(window);
