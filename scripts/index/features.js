/**
 * Get all of the feature cards.
 */
let list = document.querySelectorAll(".list");

/**
 * Set the active class on the cards and remove the previous ones when called.
 */
function setActiveClass() {
	list.forEach((item) => item.classList.remove("active"));
	this.classList.add("active");
}

// Go through each item, and listen for a hover event for every item.
list.forEach((item) => item.addEventListener("mouseover", setActiveClass));
