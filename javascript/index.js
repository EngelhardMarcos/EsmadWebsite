/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

const header = document.getElementById('header')
const card = document.querySelectorAll('.card');
const firstTerm = document.getElementById('FirstTermbtn')
const secondTerm = document.getElementById('SecondTermbtn')
const competenciatxt = document.getElementById('competenciatxt')
let CompetenciaBtn = []
let WorkProjectHighlight = []


if (card != null && card.length > 0) {
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('mouseover', function(){
    
            card[i].querySelector('.card__inner').classList.add('is-flipped')
            
        })
        
        card[i].addEventListener('mouseout', function(){
            
            card[i].querySelector('.card__inner').classList.remove('is-flipped')
        })
        
    }
    
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) { 
    header.style.top = "0";
  } else {
    header.style.top = "-250px";
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
GetCompetenciaButtons();
GetPreviousWorkImg();
function GetCompetenciaButtons() {

    for (let i = 0; i < 8; i++) {
        let button = document.getElementById(`Competencia${i}`)
        if (button != null) { //Prevent add null objects
            CompetenciaBtn.push(document.getElementById(`Competencia${i}`))
        }
        
        
    }
    for (let index = 0; index < CompetenciaBtn.length; index++) {
        CompetenciaBtn[index].addEventListener('click', () => CompetenciaButton(CompetenciaBtn[index]))
        CompetenciaBtn[index].addEventListener('mouseenter', () => Hover(CompetenciaBtn[index]))
        CompetenciaBtn[index].addEventListener('mouseleave', () => NotHover(CompetenciaBtn[index]))
    }
    
}

function GetPreviousWorkImg () {
    var conveniancecount = $("div[class*='workDiv']").length // Find how many previous works there is
    //Make them blurry (and stop blurry)
    for (let i = 0; i < conveniancecount; i++) {
        WorkProjectHighlight = document.getElementsByClassName('workDiv')
        
    }
    for (let j = 0; j < WorkProjectHighlight.length; j++) {
        //Add listeners
        WorkProjectHighlight[j].addEventListener('mouseenter', () => BlurEffect(WorkProjectHighlight[j]))
        WorkProjectHighlight[j].addEventListener('mouseleave', () => BlurLift(WorkProjectHighlight[j]));
        
    }
}

function BlurEffect(e) {
    // TO do: text hide unhide
    let img = e.querySelector('.workImg')
    img.classList.add('blur') //Add blur
    let txt1 = e.querySelector('.centered-firsttxt')
    let txt2 = e.querySelector('.centered-secondtxt')
    txt1.style.visibility = "visible"
    txt2.style.visibility = "visible"
    txt1.style.opacity = 1
    txt2.style.opacity = 1
}

function BlurLift(e) {
    let img = e.querySelector('.workImg')
    img.classList.remove('blur') // Remove Blur
    let txt1 = e.querySelector('.centered-firsttxt')
    let txt2 = e.querySelector('.centered-secondtxt')
    txt1.style.visibility = "hidden"
    txt2.style.visibility = "hidden"
    txt1.style.opacity = 0
    txt2.style.opacity = 0
}

function Hover(e) {
    let img = e.firstElementChild;
    if (!img.src.includes('Clicked.png')) {
        img.src = img.src.replace('.png', 'Clicked.png')
    }
    
}

function NotHover(e) {
    let img = e.firstElementChild;
    var ret= img.src.replace('Clicked.png', '.png')
    img.src = ret
}


function CompetenciaButton(e) {
    let img = e.firstElementChild;
    
    if(!img.classList.contains('w3-ligh-grey-opacity')){
        //Change to click image
        //img.src = img.src.replace('.png', 'Clicked.png')
        var getsrcText = img.alt;
        img.classList.add('w3-ligh-grey-opacity')
        competenciatxt.innerHTML = getsrcText
        for (let i = 0; i < CompetenciaBtn.length; i++) {
            if (img.src != CompetenciaBtn[i].firstElementChild.src) {
                if (CompetenciaBtn[i].firstElementChild.classList.contains('w3-ligh-grey-opacity')) {
                    //Remove the click image from other buttons
                    //var ret= CompetenciaBtn[i].firstElementChild.src.replace('Clicked', '')
                    //CompetenciaBtn[i].firstElementChild.src = ret
                    CompetenciaBtn[i].firstElementChild.classList.remove('w3-ligh-grey-opacity')
                }
            }
            
        }
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
if(firstTerm != null){
    firstTerm.addEventListener('click', function openTerm() {
        firstTerm.classList.add('w3-orange')
        secondTerm.classList.remove('w3-orange')
        var i;
        var x = document.getElementsByClassName("term");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        document.getElementById('SecondTerm').style.display = "block";
      
    })
    
}

if( secondTerm != null){
    secondTerm.addEventListener('click', function openTerm() {
        secondTerm.classList.add('w3-orange')
        firstTerm.classList.remove('w3-orange')
        var i;
        var x = document.getElementsByClassName("term");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        document.getElementById('FirstTerm').style.display = "block";
      
    })
}


function openYear(cityName, button) {
    button.classList.add('w3-orange')
    var i;
    var x = document.getElementsByClassName("term");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById('SecondTerm').style.display = "block";
  }

