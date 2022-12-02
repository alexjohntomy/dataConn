//DEFINE SOME VARIABLES
let number = Math.round(Math.random()*(84-10)+10);
let url = "https://api.allorigins.win/raw?url=http://numbersapi.com/" + number + "/?write&fragment"; 
let count = 0;
let answer = 0;

if (sessionStorage.getItem("score") < 1) {
sessionStorage.setItem("score",0);
}

document.getElementById("score").innerHTML = "Score: " + (sessionStorage.getItem("score"));
console.log(number)

//JQUERY GET NUMBERS API 
$.get(url, function(data) {
    $('#number').text(data);
});

function wrong() {
  device && device.send([0x90,64,5]);
  device && device.send([0x90,64,5]);
  device && device.send([0x90,61,5]);
  device && device.send([0x90,61,5]);
  device && device.send([0x90,58,5]);
  device && device.send([0x90,58,5]);
  device && device.send([0x90,55,5]);
  device && device.send([0x90,55,5]);
  device && device.send([0x90,80,5]);
  device && device.send([0x90,80,5]);
  device && device.send([0x90,77,5]);
  device && device.send([0x90,77,5]);
  device && device.send([0x90,74,5]);
  device && device.send([0x90,74,5]);
  device && device.send([0x90,71,5]);
  device && device.send([0x90,71,5]);
  device && device.send([0x90,36,5]);
  device && device.send([0x90,36,5]);
  device && device.send([0x90,41,5]);
  device && device.send([0x90,41,5]);
  device && device.send([0x90,46,5]);
  device && device.send([0x90,46,5]);
  device && device.send([0x90,51,5]);
  device && device.send([0x90,51,5]);
  device && device.send([0x90,84,5]);
  device && device.send([0x90,84,5]);
  device && device.send([0x90,89,5]);
  device && device.send([0x90,89,5]);
  device && device.send([0x90,94,5]);
  device && device.send([0x90,94,5]);
  device && device.send([0x90,99,5]);
  device && device.send([0x90,99,5]);
}
function clear() {
  device && device.send([0x90,64,0]);
  device && device.send([0x90,60,0]);
  device && device.send([0x90,64,0]);
  device && device.send([0x90,56,0]);
  device && device.send([0x90,60,0]);
  device && device.send([0x90,52,0]);
  device && device.send([0x90,56,0]);
  device && device.send([0x90,48,0]);
  device && device.send([0x90,52,0]);
  device && device.send([0x90,44,0]);
  device && device.send([0x90,48,0]);
  device && device.send([0x90,40,0]);
  device && device.send([0x90,44,0]);
  device && device.send([0x90,36,0]);
  device && device.send([0x90,40,0]);
  device && device.send([0x90,36,0]);
  device && device.send([0x90,65,0]);
  device && device.send([0x90,61,0]);
  device && device.send([0x90,65,0]);
  device && device.send([0x90,57,0]);
  device && device.send([0x90,61,0]);
  device && device.send([0x90,53,0]);
  device && device.send([0x90,57,0]);
  device && device.send([0x90,49,0]);
  device && device.send([0x90,53,0]);
  device && device.send([0x90,45,0]);
  device && device.send([0x90,49,0]);
  device && device.send([0x90,41,0]);
  device && device.send([0x90,45,0]);
  device && device.send([0x90,37,0]);
  device && device.send([0x90,41,0]);
  device && device.send([0x90,37,0]);
  device && device.send([0x90,66,0]);
  device && device.send([0x90,62,0]);
  device && device.send([0x90,66,0]);
  device && device.send([0x90,58,0]);
  device && device.send([0x90,62,0]);
  device && device.send([0x90,54,0]);
  device && device.send([0x90,58,0]);
  device && device.send([0x90,50,0]);
  device && device.send([0x90,54,0]);
  device && device.send([0x90,46,0]);
  device && device.send([0x90,50,0]);
  device && device.send([0x90,42,0]);
  device && device.send([0x90,46,0]);
  device && device.send([0x90,38,0]);
  device && device.send([0x90,42,0]);
  device && device.send([0x90,38,0]);
  device && device.send([0x90,67,0]);
  device && device.send([0x90,63,0]);
  device && device.send([0x90,67,0]);
  device && device.send([0x90,59,0]);
  device && device.send([0x90,63,0]);
  device && device.send([0x90,55,0]);
  device && device.send([0x90,59,0]);
  device && device.send([0x90,51,0]);
  device && device.send([0x90,55,0]);
  device && device.send([0x90,47,0]);
  device && device.send([0x90,51,0]);
  device && device.send([0x90,43,0]);
  device && device.send([0x90,47,0]);
  device && device.send([0x90,39,0]);
  device && device.send([0x90,43,0]);
  device && device.send([0x90,39,0]);
  device && device.send([0x90,96,0]);
  device && device.send([0x90,92,0]);
  device && device.send([0x90,96,0]);
  device && device.send([0x90,88,0]);
  device && device.send([0x90,92,0]);
  device && device.send([0x90,84,0]);
  device && device.send([0x90,88,0]);
  device && device.send([0x90,80,0]);
  device && device.send([0x90,84,0]);
  device && device.send([0x90,76,0]);
  device && device.send([0x90,80,0]);
  device && device.send([0x90,72,0]);
  device && device.send([0x90,76,0]);
  device && device.send([0x90,68,0]);
  device && device.send([0x90,72,0]);
  device && device.send([0x90,68,0]);
  device && device.send([0x90,97,0]);
  device && device.send([0x90,93,0]);
  device && device.send([0x90,97,0]);
  device && device.send([0x90,89,0]);
  device && device.send([0x90,93,0]);
  device && device.send([0x90,85,0]);
  device && device.send([0x90,89,0]);
  device && device.send([0x90,81,0]);
  device && device.send([0x90,85,0]);
  device && device.send([0x90,77,0]);
  device && device.send([0x90,81,0]);
  device && device.send([0x90,73,0]);
  device && device.send([0x90,77,0]);
  device && device.send([0x90,69,0]);
  device && device.send([0x90,73,0]);
  device && device.send([0x90,69,0]);
  device && device.send([0x90,69,0]);
  device && device.send([0x90,69,0]);
  device && device.send([0x90,98,0]);
  device && device.send([0x90,94,0]);
  device && device.send([0x90,98,0]);
  device && device.send([0x90,90,0]);
  device && device.send([0x90,94,0]);
  device && device.send([0x90,86,0]);
  device && device.send([0x90,90,0]);
  device && device.send([0x90,82,0]);
  device && device.send([0x90,86,0]);
  device && device.send([0x90,78,0]);
  device && device.send([0x90,82,0]);
  device && device.send([0x90,74,0]);
  device && device.send([0x90,78,0]);
  device && device.send([0x90,70,0]);
  device && device.send([0x90,74,0]);
  device && device.send([0x90,70,0]);
  device && device.send([0x90,99,0]);
  device && device.send([0x90,95,0]);
  device && device.send([0x90,99,0]);
  device && device.send([0x90,91,0]);
  device && device.send([0x90,95,0]);
  device && device.send([0x90,87,0]);
  device && device.send([0x90,91,0]);
  device && device.send([0x90,83,0]);
  device && device.send([0x90,87,0]);
  device && device.send([0x90,79,0]);
  device && device.send([0x90,83,0]);
  device && device.send([0x90,75,0]);
  device && device.send([0x90,79,0]);
  device && device.send([0x90,71,0]);
  device && device.send([0x90,75,0]);
  device && device.send([0x90,71,0]);
}
function correct() {
device && device.send ([0x90,50,21]);
device && device.send ([0x90,47,21]);
device && device.send ([0x90,80,21]);
device && device.send ([0x90,85,21]);
device && device.send ([0x90,90,21]);
}

// *** LAUNCHPAD CODE ***
let device;
let note;

// This block of functions are manage connecting the web-midi-api to your launchpad
// they also parse the incoming and outgoing signals into meaningful numbers
if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(success, failure);

}

function failure() {
  console.log("Could not connect MIDI");
}

function updateDevices(event) {
  // console.log(event);
}

function success(midiAccess) {
  midiAccess.addEventListener('statechange', updateDevices);
  let inputs = midiAccess.inputs;
    for (let output of midiAccess.outputs.values()) {
        device = output;
        
        // console.log('Output device selected', device);
    }

//COLOR EVERYTHING
device && device.send([0x90,64,5]);
device && device.send([0x90,60,5]);
device && device.send([0x90,56,5]);
device && device.send([0x90,52,5]);
device && device.send([0x90,48,5]);
device && device.send([0x90,44,5]);
device && device.send([0x90,40,5]);
device && device.send([0x90,36,5]);

//COLOR EVERYTHING
device && device.send([0x90,65,9]);
device && device.send([0x90,61,9]);
device && device.send([0x90,57,9]);
device && device.send([0x90,53,9]);
device && device.send([0x90,49,9]);
device && device.send([0x90,45,9]);
device && device.send([0x90,41,9]);
device && device.send([0x90,37,9]);

//COLOR EVERYTHING
device && device.send([0x90,66,13]);
device && device.send([0x90,62,13]);
device && device.send([0x90,58,13]);
device && device.send([0x90,54,13]);
device && device.send([0x90,50,13]);
device && device.send([0x90,46,13]);
device && device.send([0x90,42,13]);
device && device.send([0x90,38,13]);

//COLOR EVERYTHING
device && device.send([0x90,67,21]);
device && device.send([0x90,63,21]);
device && device.send([0x90,59,21]);
device && device.send([0x90,55,21]);
device && device.send([0x90,51,21]);
device && device.send([0x90,47,21]);
device && device.send([0x90,43,21]);
device && device.send([0x90,39,21]);

//COLOR EVERYTHING
device && device.send([0x90,96,41]);
device && device.send([0x90,92,41]);
device && device.send([0x90,88,41]);
device && device.send([0x90,84,41]);
device && device.send([0x90,80,41]);
device && device.send([0x90,76,41]);
device && device.send([0x90,72,41]);
device && device.send([0x90,68,41]);

//COLOR EVERYTHING
device && device.send([0x90,97,49]);
device && device.send([0x90,93,49]);
device && device.send([0x90,89,49]);
device && device.send([0x90,85,49]);
device && device.send([0x90,81,49]);
device && device.send([0x90,77,49]);
device && device.send([0x90,73,49]);
device && device.send([0x90,69,49]);

//COLOR EVERYTHING
device && device.send([0x90,98,57]);
device && device.send([0x90,94,57]);
device && device.send([0x90,90,57]);
device && device.send([0x90,86,57]);
device && device.send([0x90,82,57]);
device && device.send([0x90,78,57]);
device && device.send([0x90,74,57]);
device && device.send([0x90,70,57]);

//COLOR EVERYTHING
device && device.send([0x90,99,3]);
device && device.send([0x90,95,3]);
device && device.send([0x90,91,3]);
device && device.send([0x90,87,3]);
device && device.send([0x90,83,3]);
device && device.send([0x90,79,3]);
device && device.send([0x90,75,3]);
device && device.send([0x90,71,3]);



  inputs.forEach((input) => {
    input.addEventListener('midimessage', handleInput);
  });
}

function handleInput(input) {
  let command   = input.data[0];
  note = input.data[1];
  let velocity  = input.data[2];
  
  //Use to quickly get code for button clicks
  //so u dont have to manually write all of them
  // console.log("device && device.send([0x90,"+note+",0]);");

//FIRST ROW
if (velocity == 127 && count < 1) {
  if (note ==  64 || note == 60 || note == 56 || note == 52 || note == 48 || note == 44 || note == 40 || note == 36) {
    document.getElementById("answer").innerHTML += "<h3>" + 10 + "</h3>";
    count+=1;
    answer=10;
    }
  } 
  
//SECOND ROW
if (velocity == 127 && count < 1) {
  if (note == 65 || note == 61 || note ==  57 || note == 53 || note == 49 || note == 45 || note == 41 || note == 37) {
    document.getElementById("answer").innerHTML += "<h3>" + 20 + "</h3>";
    count+=1;
    answer=20;
    }
  }
  
//THIRD ROW
if (velocity == 127 && count < 1) {
  if (note == 66 || note == 62 || note ==  58 || note == 54 || note == 50 || note == 46 || note == 42 || note == 38) {
    document.getElementById("answer").innerHTML += "<h3>" + 30 + "</h3>";
    count+=1;
    answer=30;
    }
  }

//FOURTH ROW
if (velocity == 127 && count < 1) {
  if (note == 67 || note == 63 || note ==  59 || note == 55 || note == 51 || note == 47 || note == 43 || note == 39) {
    document.getElementById("answer").innerHTML += "<h3>" + 40 + "</h3>";
    count+=1;
    answer=40;
    }
  }

//FIFTH ROW
if (velocity == 127 && count < 1) {
  if (note == 96 || note == 92 || note ==  88 || note == 84 || note == 80 || note == 76 || note == 72 || note == 68) {
    document.getElementById("answer").innerHTML += "<h3>" + 50 + "</h3>";
    count+=1;
    answer=50;
    }
  }

//SIXTH ROW
if (velocity == 127 && count < 1) {
  if (note == 97 || note == 93 || note ==  89 || note == 85 || note == 81 || note == 77 || note == 73 || note == 69) {
    document.getElementById("answer").innerHTML += "<h3>" + 60 + "</h3>";
    count+=1;
    answer=60;
    }
  }

//SEVENTH ROW
if (velocity == 127 && count < 1) {
  if (note == 98 || note == 94 || note ==  90 || note == 86 || note == 82 || note == 78 || note == 74 || note == 70) {
    document.getElementById("answer").innerHTML += "<h3>" + 70 + "</h3>";
    count+=1;
    answer=70;
    }
  }
//EIGHTH ROW
if (velocity == 127 && count < 1) {
  if (note == 99 || note == 95 || note ==  91 || note == 87 || note == 83 || note == 79 || note == 75 || note == 71) {
    document.getElementById("answer").innerHTML += "<h3>" + 80 + "</h3>";
    count+=1;
    answer=80;
    }
  }

//ROUND FUNCTION
  function roundUpNearest10(num) {
    return Math.round(num / 10) * 10;
  }

var answerTens = roundUpNearest10(answer);
var numberTens = roundUpNearest10(number);

if (answerTens == numberTens && velocity == 127) {
sessionStorage.setItem("score", 1 + parseInt(sessionStorage.getItem("score")));

setTimeout(() => {  
  document.getElementById("answer").innerHTML += "<h3>Correct! The exact answer was " + number + ". <br>+1 Point</h3>";
  clear();
  correct();
}, 500);

setTimeout(location.reload.bind(location), 2000);
document.getElementById("score").innerHTML = "Score: " + (sessionStorage.getItem("score"));


}
else if (velocity == 127){  

  if (sessionStorage.getItem("score") != 0) {
    sessionStorage.setItem("score", -1 + parseInt(sessionStorage.getItem("score")))
  }

setTimeout(() => {  
  document.getElementById("answer").innerHTML += "<h3>Wrong! The correct answer was " + number + ". <br>-1 Point</h3>";
  clear();
  wrong();
}, 500);

setTimeout(location.reload.bind(location), 2000);
document.getElementById("score").innerHTML = "Score: " + (sessionStorage.getItem("score"));
}
}

