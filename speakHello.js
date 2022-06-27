(function(window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function(names) {
    console.log(speakWord + " " + names);
  }
  var speakWord = "Hello";
  window.helloSpeaker = helloSpeaker;
}(window));
//helloSpeaker.speak(names[i]); //caus you'r calling object from script.js file