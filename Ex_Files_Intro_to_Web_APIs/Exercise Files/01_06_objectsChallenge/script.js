var cat = {
   name: "Honey Badger",
   age: 3,
   breed: "mix",
   meow: function() { alert("Meeeeeowwww!"); },
   owner: { name: "Stephanie", state: "CA" }
}

//Get the cat's name
var catName = cat.name;

//Get the owner's name
var catOwner = cat.owner.name;

//Show a message
alert(catOwner + " has a cute cat named " + catName)

// Completed Feb 3 2026 10:52
// By Estelle