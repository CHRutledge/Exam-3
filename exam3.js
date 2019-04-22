// Read JSON File

var fs = require('fs');
var json = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Log the name and age of each 'item'
for (i = 0; i < json.items.length; i++){
    console.log(json.items[i].fname + " " + json.items[i].age)
}

// console.log(json.items.length)