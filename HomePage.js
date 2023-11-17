//On click play button we will open index2
const playBtn = document.querySelector(".play");

playBtn.addEventListener("click", function(){

    window.location.href =  "SelectAgent.html";

});

//Need to show one soft pop up to say for F11 key to make big screen for better experice or make big screen on click play or something like that
//On click menu i will show 3 option for history, game rules, report & contact us and credits
// //On click of EXIT btn want to close window //step1= want to show pop up with yes or no option//set 2 when on click yes need to close page












// function requestFullScreen(element) {
//     // Supports most browsers and their versions.
//     var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

//     if (requestMethod) { // Native full screen.
//         requestMethod.call(element);
//     } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
//         var wscript = new ActiveXObject("WScript.Shell");
//         if (wscript !== null) {
//             wscript.SendKeys("{F11}");
//         }
//     }
// }

// var elem = document.body; // Make the body go full screen.
// requestFullScreen(elem)