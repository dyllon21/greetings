var namesGreeted = [];
var clicks = 0;



function incrementCounter() {
    clicks += 1;
     localStorage.setItem('clicks', clicks);
    document.getElementById("clicks").innerHTML = clicks;
}

if (localStorage.getItem('clicks') === null) {
    localStorage.setItem('clicks', 0);
    clicks = Number(localStorage.getItem('clicks'));
} else {
    clicks = Number(localStorage.getItem('clicks'));
    document.getElementById('clicks').innerHTML = clicks;
};
var nameExist = greetedBefore();

if (nameExist === false) {
    if (nameExist.length == 0) {
        namesGreeted[0] = theName.value;

    } else {
        namesGreeted.push(theName.value);
    }

    newClick++;
    incrementCounter();
};

 // newClick++;
// incrementCounter();
