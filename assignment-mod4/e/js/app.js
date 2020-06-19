(function () {
	var names = ["vijay", "ajith", "jhons", "jayakumr", "god", "jakuvar", "henry", "joe", "poda", "Jaggaray"];
	for (var i = 0; i < names.length; i++) {
		  var firstLetter = names[i].charAt(0).toLowerCase();
		  if (firstLetter === 'j') {
		     goodByeSpeaker.speak(names[i]);
		  } 
		  else {
		     helloSpeaker.speak(names[i]);
		  }
	}

})();
