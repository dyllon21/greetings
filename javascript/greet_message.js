var radios = document.getElementsByName('language');
var greeting = document.querySelector('.output');
var btn = document.querySelector('.theButton');

var greet = function(name, language) {

  if (language === "Afrikaans") {
    return "Goeie Dag, " + name;
  }

  if (language === "Columbian") {
    return "Buenos Dias, " + name;
  }

  return "Hello, " + name;
}

btn.addEventListener('click', function() {
    theName = document.querySelector('.theName');
    if (theName.value.length > 0) {

        var greet = ''
        if (radios[0].checked) {
            greet = 'Hi,Hello'
        } else if (radios[1].checked) {
            greet = "goeie more"
        } else if (radios[2].checked) {
            greet = "Buenos días "
        }

        if ((theName.value).length > 0) {
            greeting.innerHTML = greet + " " + theName.value;
            document.getElementById('myForm').reset();

        } else {
            greeting.innerHTML = 'require name'
            document.getElementById('myForm').reset();
        }


    }
});
