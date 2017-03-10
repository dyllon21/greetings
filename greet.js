var theName;
var greeting = document.querySelector('.output');
var btn = document.querySelector('.theButton');
var resetClicks = document.getElementById('clearClicks');
var greet = ('');
var radios = document.getElementsByName('language');
var MyObject = document.querySelector('.myObject');
var clearBtn = document.querySelector('.clear');
var namesGreeted = [];
var  newClick = 0;

//console.log(namesGreeted);
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
    document.getElementById('clicks').innerHTML = clicks
};

btn.addEventListener('click', function() {
    theName = document.querySelector('.theName');
    if (theName.value.length > 0){


    var greet = ''
    if (radios[0].checked) {
        greet = 'Hi,Hello'
    } else if (radios[1].checked) {
        greet = "goeie more"
    } else if (radios[2].checked) {
        greet = "Buenos días "
    }


    var nameExist = greetedBefore();

    if (nameExist === false){
      if(nameExist.length == 0){
          namesGreeted[0] = theName.value;

      } else {
          namesGreeted.push(theName.value);
      }

      // newClick++;
      incrementCounter();
    };
    if ((theName.value).length > 0) {
      greeting.innerHTML = greet + " " + theName.value;
      document.getElementById('myForm').reset();

    } else {
      greeting.innerHTML = 'require name'
      document.getElementById('myForm').reset();
    }
  }
    //if(namesGreeted[theName.value] === undefined && theName.value.length > 1){
})

function greetedBefore(){
  var bool = false;
  var name = theName.value;

  if (namesGreeted.length === 0){
    return bool;
  }

  for(var i = 0; i < namesGreeted.length; i++){

    if (namesGreeted[i] === theName.value){
      bool = true;
    }
  }

return bool;
}
    //namesGreeted[theName.value] = 1;




console.log(resetClicks);
resetClicks.addEventListener("click", function() {
    console.log("resetClicks");
    //Clicks.innerHTML=0;
    localStorage.clicks = 0;
    localStorage.removeItem('Clicks');
    document.getElementById('clicks').innerHTML = 0;


});

//clearBtn.addEventListener('click', function(){
//theList.innerHTML = '';
//console.log
