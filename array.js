//for....
let result = 0;
const arr = [2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
result += arr[i];
}
console.log(result); //14

//example1..
let arr = [2,45,64,2];
let text = 1;
for( let i = 0; i < arr.length; i++) {
text *= arr[i];
}
console.log(text);

//example2
let arr = [-2,5,-9,15,0,-4];
let sum = 0;
     for(let i = 0; i < arr.length; i++) {
     if(arr[i] > 0) {
        sum += arr[i];
        }
}
console.log(sum);

//forEach....
 let arr = ["John", "Mike", "Andry", "Shenon"];
arr.forEach((item, index) => {
   
    console.log(`${index}: ${item}` + "<br>");
})

//
let arr = ['BMW', 'Mercedes', 'Volkswagen', 'Toyota'];
arr.forEach((item, index) => {
    if (item === 'Toyota') {
        arr[index] = 'Lexus';
    }
})
console.log(arr);
  
// 
let arr = [1,5,67,73,54];
 arr.forEach(function(item) {
     if(item > 10) {
  console.log(item + ", ")
      }
 })

 //
const arr = [1,2,6,54,7,9,0];
  let result = 0;
  let Array = arr.forEach(function(item) {
      result += item;
     console.log(result + "<br>")
  })

//sort
let arr = [-2,5,-9,15,0,-4];

arr.sort(function(a, b) {
   return a - b;
});
console.log(arr);

//Filter....

let array = ["banana","mango", "apple"]
let filtered = array.filter((value) => {
  array.push(array[0]);
  array.push(array[1]);
  array.push(array[2]);
});

//
let ages = [23,45,72,48];
let result = ages.filter((item) => {
     if(item > 27) {
       return item;
  }
 });
 console.log(result);

// 
let arr = [-1,2,5,-6,8,-34];
  function func(elem) {
    return elem < 0;
}
  let newArr = arr.filter(func);
  console.log(newArr);

//
const arr = [1,2,6,89,3,7,0,2,7,0,3];
    let result = arr.filter(item => {
        return item % 2 == 0;
  })
  console.log(result);

//
const arr = [1,2,6,89,3,7,0,2,7,0,3];
let result = arr.filter(item => item % 2 == 0);
console.log(result);

//
let arr = ["askjhfa","asa","adgvgaa","afvaa", "asdjfd"];
let filteredArr = arr.filter(item => {	 
	if(item.length > 5 && item.charAt(1) == "s") {
		return item;
	}
})
console.log(filteredArr);

//
const arr = [
	{fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
	{fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
	{fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
	{fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
]
    
function myFunction(arr) {
	return arr.filter(function(param) {
		return param.gender === "female"; 
})
}
 
  document.write(JSON.stringify(myFunction ([
   {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
   {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
   {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
   {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
  ])));

//Map...

const users = [1,4,5,6]
const usersPlusOne = users.map(n => n + 1);
document.write(usersPlusOne)

let obj = {
  name: "Jack",
  age: 26
};

let obj1 = [
  ["name", "Jack"],
  ["age", 26]
];

let map = new Map(obj1)
  map.forEach(function(val, key) {
    document.write(val,key)
  })

//map.set..

let john = {name: "John"}
let pete = {name: "Pete"}
const map = new Map();
 map.set("name", "John");
 document.write(map.get("name"))

const student = {
  firstName: "Babken",
  lastName: "Hovhhanisyan",
  };

  let entries = Object.fromEntries([
    ["firstName", "Babken"],
    ["lastName", "Hovhannisyan"]
  ]);
  	
  console.log(entries.firstName);

//setter,getter...

const student = {
  firstName: "Babken",
  lastName: "Hovhhanisyan",
  get fullName() {
      return `${student.firstName} ${student.lastName}`
  },
  set fullName(value) {
    let valueDate = value.split(" ");
    this.firstName = valueDate[0];
    this.lastName = valueDate[1];
    }
  }
  
  student.fullName = "Ivan Vach"
  document.write(student.fullName);

//duplicate...

let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
let duplicate = arr.filter((item, index) => {
      return arr.indexOf(item) == index;
});
console.log(duplicate);

//
let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
let duplicate = [...new Set(arr)]

console.log(duplicate);

//slice...

 function myFunction(a) {
 return a.slice(2, 5); // վերձնում է զանգվածի 2-րդ ինդեքսից,  5-րդ էլեմենտը։
}
const myArray = [1, 2, 3, 4, 5, 6];
const result = myFunction(myArray);
console.log(result);  // [3, 4, 5]

//
const numbers = [1,3,5,67,87,98,8,9,8];

const count = (a) => {
	return a.slice(3, 6);
}
const result = count(numbers);
console.log(result); // [67, 87, 98]

//negative element...
let a = [1,2,-4,-5,3];
for(let i = 0; i < a.length; i++) {
     if (a[i] < 0) {
        console.log(a[i])
    }
}  // -4,-5

//
let numbers = [1,2,-4,-5,3]
let negativeNumbers = numbers.filter((el) => el < 0).length
console.log(negativeNumbers) // 2 hat

//reduce().....
let todos = [
     {price: 10, label: "UIN/FN"},
     {price: 140, label: "Employer Name"},
     {price: 5, label: "Employer Address"},
     {price: 15, label: "Phone number"}
    ]
let totalPrice = todos.reduce((total, item) => {
    return total + item.price;
  }, 0)
console.log(totalPrice);