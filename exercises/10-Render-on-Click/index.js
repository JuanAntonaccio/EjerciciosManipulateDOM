let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let dato = document.querySelector("body");
	const div = document.createElement("div");
	div.innerHTML = "Hello World";
	//div.textContent="Hello World";
	div.style.background = "yellow";
	
	dato.appendChild(div);


});
