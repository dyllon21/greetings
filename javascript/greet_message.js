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
};

var getLanguageSelected = function() {
    if (radios[0].checked) {
        return "English";
    } else if (radios[1].checked) {
        return "Afrikaans";
    } else if (radios[2].checked) {
        return "Columbian";
    }
};

btn.addEventListener('click', function() {
    theName = document.querySelector('.theName');
    var enteredName = theName.value;
    if (enteredName.length > 0) {

        greeting.innerHTML = greet(enteredName, getLanguageSelected());;
        // document.getElementById('myForm').reset();

    } else {
        greeting.innerHTML = 'require name'
        // document.getElementById('myForm').reset();
    }

    var nameExist = greetedBefore(enteredName);

    if (nameExist === false) {

            namesGreeted.push(enteredName);
      
        incrementCounter();
    };

});

//});
