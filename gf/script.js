// Get a reference to the memories button using its id
const memoriesButton = document.getElementById("memoriesButtonId");

// If the button exists, add a click event listener to it
if (memoriesButton) {
  memoriesButton.addEventListener("click", function() {
    // Redirect the user to the new page URL (replace "memories-page.html" with the actual URL)
    window.location.href = "memories-page.html";
  });
} else {
  console.error("Memories button with ID 'memoriesButtonId' not found.");
}
// Get a reference to the contact button using its id
const contactButton = document.getElementById("contactButtonId");


