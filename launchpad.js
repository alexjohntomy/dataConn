//Install LaunchPad - Skip registration

//Launchpad Code
console.log(navigator);
let device;

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

function failure() {
    console.log("Could not connect");
}

function updateDevices(event) {
    console.log(event);
}

function success(midiAccess) {
    console.log(midiAccess);
    midiAccess.addEventListener('statechange', updateDevices);
    let inputs = midiAccess.inputs;
    console.log(inputs);

inputs.forEach((input) => {
    console.log(input);
    input.addEventListener('midimessage', handleInput);
});
function handleInput(input) {
        let command     = input.data[0];
        let note        = input.data[1];
        let velocity    = input.data[2];

        console.log(`command: ${command}, note: ${note}, velocity ${velocity}`);
}

if (note > 60) {
    document.body.backgroundColor = "white";
}

}

for (let output of midiAccess.outputs.values()) {
    
}