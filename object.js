//object clone...
let user = {
  name: "John",
  age: 30,
};
let clone = {};

for (let key in user) {
  clone[key] = user[key];
}
clone.name = "Pete";

//
let user = {
  name: "John",
  age: 30
};
let clone = Object.assign({}, user);
console.log(clone)


//replace array with object...
const arr = ["kraft", "jacy"];
const obj = Object.assign({}, arr);
console.log(obj);

//
const arr = ["kraft", "jacy"];
const obj = {
  name: arr[0],
  otherName: arr[1],
};
console.log(obj);

//delete elem..
let obj = {
	a: 'aa',
	b: 'bb',
	c: 'cc'	
}
function myFunction(obj) {
  const { b, ...rest } = obj;
  console.log(rest);
}  // { a: 'aa', c: 'cc' }