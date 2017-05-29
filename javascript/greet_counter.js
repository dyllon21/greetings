var theName = document.getElementsByClassName('theName');
var counter = 0;
var resetClicks = document.getElementById('clearClicks');

var namesGreeted = [];

function incrementCounter() {
    counter += 1;
    localStorage.setItem('counter', counter);
    document.getElementById("counter").innerHTML = counter;

}

function greetedBefore(name) {
    var bool = false;
    // var name = theName.value;

    if (namesGreeted.length === 0) {
        return bool;
    }

    for (var i = 0; i < namesGreeted.length; i++) {

        if (namesGreeted[i] === name) {
            bool = true;
            break;
        }
    }

    return bool;
}

if (localStorage.getItem('clicks') === null) {
    localStorage.setItem('clicks', 0);
    clicks = Number(localStorage.getItem('clicks'));
} else {
    clicks = Number(localStorage.getItem('clicks'));
    document.getElementById('counter').innerHTML = counter
};
console.log(resetClicks);
resetClicks.addEventListener("click", function() {
    console.log("resetClicks");
    //Clicks.innerHTML=0;
    localStorage.clicks = 0;
    localStorage.removeItem('Clicks');
    document.getElementById('counter').innerHTML = 0;


});
