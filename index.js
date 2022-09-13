
// when help button on nav bar clicked
document.getElementById('help').onclick = function () { help() };//accesing help

// call help() function
function help() {

    //change container innner html
    document.querySelector('.container').innerHTML =
        ` 
        
        <nav  id="nav">
        <div class="navbar">
        <ul>
            <div class="left-logo"><img src="logol.png" alt="left-logo"></div>
            <div class="list">
                <li class="list-items" id="help" onclick="help()">Help</li>
                <li class="list-items">Our Product</li>
                <li class="list-items">Our Promotion</li>
                <li class="list-items">Join Us</li>
            </div>
            <div class="search-icon">

                <img src="searchlogo.png" class="search-icon" alt="Search"></i></button>
            </div>
        </ul>
        </div>
    </nav>
        
        
        <div class="help-body">
            <h1>Help</h1>
            <div class="help-list">
                <li class="help-items-list">FAQs</li>
                <li class="help-items-list">Switch to us</li>
                <li class="help-items-list"> Stores</li>
                <li class="help-items-list"> Contact us</li>
                <li class="help-items-list">How to pay</li>
                <li class="help-items-list"> Our partners</li>
                <li class="help-items-list"> Blog</li>
                <li class="help-items-list">Press release</li>
                <li class="help-items-list"> Legal</li>
            </div>
        </div>`
        ;
}

//when product button get click
document.getElementById('Product').onclick = function () { Product() };
function Product() {
    document.querySelector('.container').innerHTML = `
<h1>We will work on this site</h1>
    `;
}

//when promotion button get click
document.getElementById('Promotion').onclick = function () { Promotion() };
function Promotion() {
    document.querySelector('.container').innerHTML = `
<h1>We will work on this site</h1>
    `;
}

//when join button get click
document.getElementById('join').onclick = function () { join() };
function join() {
    document.querySelector('.container').innerHTML = `
<h1>We will work on this site</h1>
    `;
}

//when search buttom clicked
let search = document.getElementById('search');  // getting elements of 'search' id
search.addEventListener('click', function () { search_icon() });
function search_icon() {
    document.querySelector('.search-icon').innerHTML = `
    <input type="text" placeholder="Search..">
    `;
}


//on clicking on read more button
let read = document.getElementById('ReadMore');
read.addEventListener('click', function () { ReadMore() });   //Listing the event
function ReadMore() {                                         // Function fired
    document.querySelector('.container').innerHTML = `
     <h2>
     our plans 
 </h2>
 <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas repudiandae excepturi hic culpa animi eius nesciunt dolorem voluptate. Corrupti voluptatibus odit eligendi!</P>

 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi corporis, culpa tempore neque reprehenderit adipisci consectetur aut distinctio totam libero facilis quis.</p>
     `;
}

// when the footer button got clicked
document.querySelector('.btn').onclick = function () { btnclick() };
function btnclick() {
    document.querySelector('.container').innerHTML = `
"Error 404"
`;
}