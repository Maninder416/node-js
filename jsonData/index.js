const bioData = {
    name : "Maninder",
    age : 29,
    country : "Canada"
}

// convert string to json data:
const jsonData = JSON.stringify(bioData);
console.log("The JSON data is: "+jsonData);

// convert json to String data:
const stringData = JSON.parse(jsonData);
console.log("The string data is: "+stringData.name)
