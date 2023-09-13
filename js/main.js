//Get Slider Items
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//Get Number Of Slider
var sliderCount = sliderImages.length;

//Set Current Slide
var currentSlide = 1;

//Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

//Next And Prev Buttons
var nextButton = document.getElementById('next');
var prevtButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevtButton.onclick = prevSlide;

//Create The Main Ul Element
var paginationElement = document.createElement('ul');

//set Id on Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

//Create Items Li
for (var i=1; i <= sliderCount; i++){
    //Create The Main Li
    var paginationItem = document.createElement('li');

    //Set Custom Attrubute
    paginationItem.setAttribute('data-index', i);

    //Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    //Append Items To The Main Ul
    paginationElement.appendChild(paginationItem);
}


//Add The paginationElement On The Page
document.getElementById('indicators').appendChild(paginationElement);


//Get The  New Created Ul
var paginationCreatedUl = document.getElementById('pagination-ul')

//Get pagination Items
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


for(var i = 0 ; i < paginationBullets.length ; i++){

    paginationBullets[i].onclick = function(){
        
        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
        
    }

}


theChecker();

//Next Slide Function
function nextSlide(){

    if(nextButton.classList.contains('disabled')){

    }else{
        
    currentSlide++;

    theChecker();

    }
}

//Prev Slide Function
function prevSlide(){

    if(prevtButton.classList.contains('disabled')){

    }else{
        
    currentSlide--;

    theChecker();

    }

}

//Create The Checker Function
function theChecker(){

slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (sliderCount);


removeAllActive();

// Set Active Class On Current Slide
sliderImages[currentSlide - 1].classList.add('active');

// Set Active Class On Current  Pagination Item
paginationCreatedUl.children[currentSlide - 1].classList.add('active');

//Check If Current Slideis The First
if (currentSlide == 1 ){

    prevtButton.classList.add('disabled');

}else{

    prevtButton.classList.remove('disabled');
    
}

//Check If Current Slide is The Last
if (currentSlide == sliderCount){

    nextButton.classList.add('disabled');

}else{

    nextButton.classList.remove('disabled');
    
}


}

//Remove All Class Active
function removeAllActive(){

    sliderImages.forEach(function (img) {

        img.classList.remove('active');

    });

    paginationBullets.forEach(function (bullet) {

        bullet.classList.remove('active');

    });

}
