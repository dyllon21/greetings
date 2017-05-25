// var theName;
// var input = document.querySelector('.input');
// var radios = document.getElementsByName('language');
// var greet = ('');
// var btn = document.querySelector('.theButton');

var greet = function(name, language) {
// btn.addEventListener('click', function() {
      // theName = document.querySelector('.theName');

    // radios.forEach(function(options) {
    //   console.log();
    //     if (options.type === "radio" && options.name === "language" && options.value === language) {
    //         // console.log("Hello, " + name);
    //         return "Hello, " + name;
    //     }
    // });

    if (language === "Afrikaans"){
      return "Goeie Dag, " + name;
    }

    if (language === "Columbian"){
      return "Buenos Dias, " + name;
    }

    return "Hello, " + name;
}

// greet();
// btn.addEventListener('click', function() {
//     theName = document.querySelector('.theName');
//     if (theName.value.length > 0) {
//
//       var greet = ''
//         if (radios[0].checked) {
//             greet = 'Hi,Hello'
//         } else if (radios[1].checked) {
//             greet = "goeie more"
//         } else if (radios[2].checked) {
//             greet = "Buenos días "
//         }
//
//
//         var nameExist = greetedBefore();
//
//         if (nameExist === false) {
//             if (nameExist.length == 0) {
//                 namesGreeted[0] = theName.value;
//
//             } else {
//                 namesGreeted.push(theName.value);
//             }
// };  if ((theName.value).length > 0) {
//       greeting.innerHTML = greet + " " + theName.value;
//       document.getElementById('myForm').reset();
//
//   } else {
//       greeting.innerHTML = 'require name'
//       document.getElementById('myForm').reset();
//   }
// }
// });
