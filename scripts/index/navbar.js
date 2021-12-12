const ready = (fn) => {
	if (document.readyState != "loading") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
};
const toggle = (ele, name) => {
	const element = document.querySelector(ele);

	element.classList.contains(name) ? element.classList.remove(name) : element.classList.add(name);
};

ready(() => {
	document.querySelector(".menu-toggle").addEventListener("click", () => {
		toggle("nav", "active");
	});
});
