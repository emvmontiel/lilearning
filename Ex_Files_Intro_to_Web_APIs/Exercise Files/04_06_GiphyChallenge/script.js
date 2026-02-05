fetch('https://api.giphy.com/v1/gifs/random?api_key=1CVUPKgBTkGqkAxC09x1mpej5kDtTw4O&tag=scream+love&rating=g')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData);
	var gifUrl = jsonData.data.images.original.url // Retrieves gif URL and puts it into gifUrl variable
	console.log(gifUrl)

	// Create gif on page
	var gif = document.createElement('img');
	gif.setAttribute('src', gifUrl);
	document.body.appendChild(gif)
	
	var gifTitle = jsonData.data.title; // Retrieves gif title and puts it into gifTitle variable

	var title = document.createElement('h1'); // Creates h1 element
	title.innerText = gifTitle; // Adds gifTitle to HTML
	document.body.appendChild(title);
 

})

// Your API Key: 1CVUPKgBTkGqkAxC09x1mpej5kDtTw4O