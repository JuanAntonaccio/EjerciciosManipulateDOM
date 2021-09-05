let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	const lista = document.querySelector("#myList");
	let nuevo = document.createElement("li");
	nuevo.innerHTML = "Fourth element";
	lista.appendChild(nuevo);
	

});
