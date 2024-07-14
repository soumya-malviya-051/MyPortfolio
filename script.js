// ---------------- SKills------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ------------------------Name---------------------

const introText = "Hi, I'm ";
const nameText = "Soumya Malviya";
const fromText = " from IIT Gandhinagar";

// Get the span elements where the text will be displayed
const introSpan = document.getElementById("intro");
const nameSpan = document.getElementById("name");
const fromSpan = document.getElementById("from");
const cursorSpan = document.getElementById("cursor");

// Initialize index for tracking characters
let charIndex = 0;

// Function to simulate typing effect
function type() {
  if (charIndex < introText.length) {
    introSpan.innerHTML += introText.charAt(charIndex);
  } else if (charIndex < introText.length + nameText.length) {
    nameSpan.innerHTML += nameText.charAt(charIndex - introText.length);
  } else if (charIndex < introText.length + nameText.length + fromText.length) {
    fromSpan.innerHTML += fromText.charAt(
      charIndex - introText.length - nameText.length
    );
  }

  charIndex++;

  // Check if typing is complete
  if (charIndex < introText.length + nameText.length + fromText.length) {
    setTimeout(type, 100); // Adjust typing speed (milliseconds)
  } else {
    // Typing completed, start blinking cursor
    cursorSpan.style.visibility = "visible";
    blinkCursor(); // Start blinking cursor
  }
}

// Function to blink the cursor
function blinkCursor() {
  setInterval(function () {
    cursorSpan.style.visibility =
      cursorSpan.style.visibility === "hidden" ? "visible" : "hidden";
  }, 500); // Adjust blinking speed (milliseconds)
}

// Start typing when the page loads
document.addEventListener("DOMContentLoaded", function () {
  type(); // Start typing animation
});

// side menu
var sidemenu=document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right="0";
}

function closemenu(){
  sidemenu.style.right="-200px";
}
