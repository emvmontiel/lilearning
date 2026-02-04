fetch('https://api.giphy.com/v1/gifs/random?api_key=bwBAcjO5j2Cec47TG7flBCn7Gdw57Fo8&tag=squirrel&rating=g')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData);
	var gifUrl = jsonData.data.images.original.url
	console.log(gifUrl)
	var gifImg = document.createElement("img")
	gifImg.setAttribute("src", gifUrl)
	document.body.appendChild(gifImg)
})

// Research and Understand here: https://gemini.google.com/share/f690eca59a6d