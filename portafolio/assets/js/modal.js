var modal1 = document.getElementById("modal1");
// Get the button that opens the modal
var btn1 = document.getElementById("btn1");
// Get the <span> element that closes the modal
//var span1 = document.getElementsByClassName("close1")[0];
// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
$('.close1').click(function(){
	$('.video1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  modal1.style.display = "none";  
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementById("modal2");
// Get the button that opens the modal
var btn2 = document.getElementById("btn2");
// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}
$('.close2').click(function(){
	$('.video2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  modal2.style.display = "none";  
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById("modal3");
// Get the button that opens the modal
var btn3 = document.getElementById("btn3");
// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}
$('.close3').click(function(){
	$('.video3')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  modal3.style.display = "none";  
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


var modal4 = document.getElementById("modal4");
// Get the button that opens the modal
var btn4 = document.getElementById("btn4");
// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}
$('.close4').click(function(){
	$('.video4')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  modal4.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

var modal5 = document.getElementById("modal5");
// Get the button that opens the modal
var btn5 = document.getElementById("btn5");
// When the user clicks on the button, open the modal
btn5.onclick = function() {
  modal5.style.display = "block";
}
$('.close5').click(function(){
	$('.video5')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  modal5.style.display = "none";  
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

var modal6 = document.getElementById("modal6");
// Get the button that opens the modal
var btn6 = document.getElementById("btn6");
// When the user clicks on the button, open the modal
btn6.onclick = function() {
  modal6.style.display = "block";
}
$('.close6').click(function(){
	$('.video6')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  modal6.style.display = "none";  
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}
