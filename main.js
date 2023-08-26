// Get the array of img
let images = Array.from(document.querySelectorAll(".slider-container img"));

let numberOfImages = images.length;
let currentSlide = 0;
let slideNumber = document.querySelector(".slide-number");

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// Handle the buttons' functions
nextBtn.onclick = next;
prevBtn.onclick = prev;

// Create the ul and the li for the number buttons
let ul = document.createElement("ul");
ul.setAttribute("id", "pagination-ul");

for (let i = 1; i <= numberOfImages; i++) {
    let li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.appendChild(document.createTextNode(i));

    ul.appendChild(li);
}

document.getElementById('indicators').appendChild(ul);

let ulList = document.getElementById("pagination-ul");
let list = Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop through li buttons
for (let j = 0; j < list.length; j++) {
    list[j].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index")) - 1;
        check();
    };
}

// Trigger the check function
check();

// Create the next function
function next() {
    if (nextBtn.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        check();
    }
}

// Create the prev function
function prev() {
    if (prevBtn.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
        check();
    }
}

// Create the Check function
function check() {
    // Set the number on the div
    slideNumber.textContent = `Slide #${currentSlide + 1}`;

    // Trigger the removeActive from all
    removeActive();

    // Add the active class to the img and the li
    images[currentSlide].classList.add("active");
    ulList.children[currentSlide].classList.add("active");

    // Check if the current slide is at the beginning or the end
    prevBtn.classList.toggle("disabled", currentSlide === 0);
    nextBtn.classList.toggle("disabled", currentSlide === numberOfImages - 1);
}

// Create the removeActive function
function removeActive() {
    images.forEach((img) => {
        img.classList.remove("active");
    });

    list.forEach((li) => {
        li.classList.remove("active");
    });
}
