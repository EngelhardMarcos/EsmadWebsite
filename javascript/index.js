/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

const header = document.getElementById('header')
const card = document.querySelector('.card');

if (card != null) {
    card.addEventListener('mouseover', function(){
    
        card.querySelector('.card__inner').classList.add('is-flipped')
        
    })
    
    card.addEventListener('mouseout', function(){
        
        card.querySelector('.card__inner').classList.remove('is-flipped')
    })
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) { 
    header.style.top = "0";
  } else {
    header.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
  
    var OpacityY = 740

    if(currentScrollPos <= OpacityY){ //Make opacity
        header.classList.add('w3-opacity-max')
        header.classList.remove('w3-grey')
    }
    else{ // Remove opacity
        header.classList.remove('w3-opacity-max')
        header.classList.add('w3-grey')
    }

}



// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (x.length > 0) {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 4000);
    }
    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openYear(cityName) {
    var i;
    var x = document.getElementsByClassName("term");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
  }

