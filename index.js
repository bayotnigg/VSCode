// searching is only logged in the console
// no real functionality (yet)

const button = document.getElementById("btn");
let search;
document.getElementById("submitBtn").onclick = function () {
	search = document.getElementById("searchInput").value;
	console.log(search);
};

// when pressing a button on the nav bar, it is displayed in the console
button.onclick = function () {
	console.log("clicked");
};

// test code
