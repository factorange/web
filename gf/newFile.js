// If the button exists, add a click event listener to it
if (contactButton) {
  contactButton.addEventListener("click", function () {
    // Redirect the user to the new page URL (replace "demo.html" with the actual URL)
    window.location.href = "your-contact-page.html";
  });
} else {
  console.error("Contact button with ID 'contactButtonId' not found.");
}
