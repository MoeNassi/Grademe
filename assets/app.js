var btn_set = document.querySelector('.Btn-sett');
var btn_X = document.querySelector('.Btn-exit');
var btn_reset = document.querySelector('.Btn-reset');
var btn_div1 = document.querySelector('.light');
var btn_div2 = document.querySelector('.dark');
var btn_dark = document.querySelector('.btn-dark');
var btn_sun = document.querySelector('.btn-sun');
var mainly = document.querySelector('.settings');
var title = document.querySelector('.left h1')
var first = document.querySelector('.first')
var btn_copy = document.querySelector('.sec-center button')
let index = 0;

btn_set.addEventListener("click", () => {
	index++;
	if (index % 2 == 0) {
		mainly.style.display = "none";
		mainly.classList.remove(".animate");
	}
	else {
		mainly.style.display = "block";
		mainly.classList.add(".animate");
	}
});
btn_copy.addEventListener("click", () => {
	var element = document.createElement("input");
	var st = document.querySelector(".script").textContent
	element.value = st;
	document.body.appendChild(element);
	element.select();
	element.setSelectionRange(0, 99999);
	document.execCommand("copy");
	document.body.removeChild(element);
	setTimeout(() => {
		btn_copy.innerHTML = "copy";
		btn_copy.style.background = "black";
	}, 1000);
	btn_copy.innerHTML = "copied";
	btn_copy.style.background = "#6dbe70";
});
btn_X.addEventListener('click', () => {
	mainly.style.display = "none";
	index++;
});
btn_reset.addEventListener('click', () => {
	document.body.style.background = "white";
	mainly.style.background = "white";
	btn_dark.style.color = "black";
	btn_sun.style.color = "black";
	btn_div1.style.background = "rgba(177, 177, 177, 0.062)";
	btn_div2.style.background = "rgba(177, 177, 177, 0.062)";
	mainly.style.boxShadow = "-30px 0 30px rgba(179, 179, 179, 0.219)"
	title.style.color = "rgb(22, 28, 36)";
	first.style.color = "black";
});
btn_div2.addEventListener('click', () => {
	document.body.style.background = "rgb(22, 28, 36)";
	mainly.style.background = "rgb(22, 28, 36)";
	btn_dark.style.color = "white";
	btn_sun.style.color = "white";
	title.style.color = "white";
	mainly.style.boxShadow = "-30px 0 30px rgb(0, 0, 0, 0.5)"
	first.style.color = "white";
	btn_div2.style.background = "rgba(187, 187, 187, 0.425)";
	btn_div1.style.background = "rgba(177, 177, 177, 0.062)";
});
btn_div1.addEventListener('click', () => {
	document.body.style.background = "white";
	mainly.style.background = "white";
	btn_dark.style.color = "black";
	btn_sun.style.color = "black";
	title.style.color = "rgb(22, 28, 36)";
	mainly.style.boxShadow = "-30px 0 30px rgba(179, 179, 179, 0.219)"
	first.style.color = "black";
	btn_div1.style.background = "rgba(187, 187, 187, 0.425)";
	btn_div2.style.background = "rgba(177, 177, 177, 0.062)";
});