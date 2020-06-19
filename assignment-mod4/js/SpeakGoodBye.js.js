(function (window) {
  var goodByeSpeaker = {};
  var speakWord = "Good Bye";
  goodByeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.goodByeSpeaker = goodByeSpeaker;

})(window);

