// ** JQuery functions converted **
/**
 * Similar to JQuery's `ready` method.
 * 
 * @param {() => void} fn The function to call when ready.
 */
const ready = (fn) => {
	if (document.readyState != "loading") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
};
/**
 * Similar to JQuery's `toggle` method.
 * 
 * @param {string} ele The element name.
 * @param {string} name The class name to toggle.
 */
const toggle = (ele, name) => {
	const element = document.querySelector(ele);

	element.classList.contains(name) ? element.classList.remove(name) : element.classList.add(name);
};

// ** Using JQuery-like way **
ready(() => {
	document.querySelector(".menu-toggle").addEventListener("click", () => {
		toggle("nav", "active");
	});
});
