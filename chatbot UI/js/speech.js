document.querySelector('span.speech-input').addEventListener('click', function (e) {
  document.querySelector('form.query-search').classList.add('disabled');
  console.log('clicked');
});


function speech() {
  console.log('ff');
  if (window.SpeechSynthesis) {
    let recognition = window.SpeechSynthesis;
    recognition.start = function() {
      console.log('hello');
      recognizing = true;
      document.querySelector('p.message').innerHTML = 'Speak now.';
    }
  }
};

  /*
try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    console.log(recognition);

    recognition.continuous = true;
    recognition.interimResults = true;
    document.querySelector('p.message').innerHTML = 'started.';

    recognition.onstart = function () {
      console.log('hello');
      recognizing = true;
      document.querySelector('p.message').innerHTML = 'Speak now.';
    };

    recognition.onresult = function (event) {
      var interim_transcript = '';
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
          console.log(final_transcript);
        } else {
          interim_transcript += event.results[i][0].transcript;
          console.log(interim_transcript);
        }
      }
      document.querySelector('form.input[type="text"]').value = final_transcript;
      document.querySelector('p.message').innerHTML = interim_transcript;
    };

    recognition.onend = function () {

      recognizing = false;
      if (ignore_onend) {
        return;
      }
      if (!final_transcript) {
        document.querySelector('p.message').innerHTML = 'Click "Talk" and begin speaking.';
        return;
      }

    };
  }
  catch (e) {
    alert('Browser is not supported!');
    console.error(e);
  }





  recognition.onstart = function() { 
    instructions.text('Voice recognition activated. Try speaking into the microphone.');
  }
  
  recognition.onspeechend = function() {
    instructions.text('You were quiet for a while so voice recognition turned itself off.');
  }
  
  recognition.onerror = function(event) {
    if(event.error == 'no-speech') {
      instructions.text('No speech was detected. Try again.');  
    };
  }
  recognition.onresult = function(event) {

    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    var current = event.resultIndex;
  
    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;
  
    // Add the current transcript to the contents of our Note.
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

if(!mobileRepeatBug) {
  noteContent += transcript;
  noteTextarea.val(noteContent);
}
$('#start-record-btn').on('click', function(e) {
  recognition.start();
});
$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
});

unction readOutLoud(message) {
  var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
*/
