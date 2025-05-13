const btn1 = document.querySelector(".btn");
const closebtn = document.querySelector(".close-icon");
const trailer = document.querySelector(".container");

// Show the trailer when the button is clicked
btn1.addEventListener("click", () => {
    trailer.classList.add("active"); // Add the active class to show the trailer
});

// Hide the trailer when the close button is clicked
closebtn.addEventListener("click", () => {
    trailer.classList.remove("active"); // Remove the active class to hide the trailer
});
