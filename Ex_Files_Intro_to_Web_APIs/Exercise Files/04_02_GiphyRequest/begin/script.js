fetch("https://api.giphy.com/v1/gifs/random?api_key=1CVUPKgBTkGqkAxC09x1mpej5kDtTw4O&tag=scream&rating=g")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData)
})