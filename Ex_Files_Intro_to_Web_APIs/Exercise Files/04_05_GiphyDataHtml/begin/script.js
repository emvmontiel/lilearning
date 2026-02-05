fetch('https://api.giphy.com/v1/gifs/random?api_key=1CVUPKgBTkGqkAxC09x1mpej5kDtTw4O&tag=screaming')
.then(
	function(response) {
		return response.json();
}
)
.then(
	function(jsonData) {
		console.log(jsonData);
		
		var gifUrl = jsonData.data.images.original.url;
		console.log(gifUrl);
		
		var gifImg = document.createElement("img"); // Creates an image element
		gifImg.setAttribute("src", gifUrl); // Sets the source attribute for the image
		document.body.appendChild(gifImg); // Adds the gif onto the page
	}
)

// Research and Understand here: https://gemini.google.com/share/f690eca59a6d
// Your API Key: 1CVUPKgBTkGqkAxC09x1mpej5kDtTw4O