const jsonString = '{"name" : "john","age" : 30, "city":"new york" }';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject)

//Changing object to string using stringify():
const objectToConvert = {
    name:"Alice",
    age: 25,
}
const json = JSON.stringify(objectToConvert)
console.log(json);
console.log(typeof json)
