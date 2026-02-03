fetch('https://hplussport.com/api/products?qty=2&order=name')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData)
	var name = jsonData[0].name;
	console.log(name)

	var product = document.createElement("li");
	product.innerHTML = name;
	document.body.appendChild(product);
})


// How to get data from an API
// How to filter the data 
// How to use the data on a webpage
// How to incorporate the API data into HTML