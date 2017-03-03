var theName = document.querySelector('.theName');
var greeting = document.querySelector('.output');
var btn = document.querySelector('.theButton');
var greet = ('');
var radios = document.getElementsByName('language');
var MyObject = document.querySelector('.myObject');
var clearBtn = document.querySelector('.clear');

function resetCounter() {
    if (localStorage.clicks > 0 || localStorage.clicks != 0) {
        localStorage.setItem('clicks', 0);
    }
    clicks.innerHTML = localStorage('clicks');
}
if (localStorage.getItem('clicks') === null) {
    localStorage.setItem('clicks', 0);
    var clicks = Number(localStorage.getItem('clicks'));
} else {
    var clicks = Number(localStorage.getItem('clicks'));
    document.getElementById('clicks').innerHTML = clicks
};


function incrementCounter() {
    clicks += 1;
    localStorage.setItem('clicks', clicks);
    document.getElementById("clicks").innerHTML = clicks;
};

// when the button is clicked => run this event!!!
btn.addEventListener('click', function() {
    console.log(radios[0]);
    var greet = ''
    if (radios[0].checked) {
        greet = 'Hi,Hello'
    } else if (radios[1].checked) {
        greet = "goeie more"
    } else if (radios[2].checked) {
        greet = "Buenos días "

    }
  if (theName.value.length > 0) {
        greeting.innerHTML = greet + " " + theName.value;
        document.getElementById('myForm').reset();

    } else {
        greeting.innerHTML = 'require name'
        document.getElementById('myForm').reset();
    };

    incrementCounter();

});

//clearBtn.addEventListener('click', function(){
//theList.innerHTML = '';
//console.log
