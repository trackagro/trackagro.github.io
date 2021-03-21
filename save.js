var url = "https://mysterious-plateau-47196.herokuapp.com/contact"


function saveDB(){
	fetch(url, {
		method: "POST",
		headers: {"Content-type": "application/json"},
		body: JSON.stringify({email : document.getElementById("email").value})
	}).then(console.log("Done"))
    .then(document.getElementById("email").value  = "Thanks! We will get back to you soon");
}