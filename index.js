// Assuming you have a main element with the id 'main' in your HTML
const mainElement = document.getElementById('main');

// Check if the 'main' element exists
if (mainElement) {
  // Remove the 'main' element if it exists
  mainElement.remove();
}
// Create a new h1 element
const newHeader = document.createElement("h1");

// Set the id attribute of the new h1 element to "victory"
newHeader.id = "victory";

// Add text content to the new h1 element
newHeader.textContent = "Victory Header";

// Append the new h1 element to the document body or any other desired location
document.body.appendChild(newHeader);

