/*
-ARRAYS-

Organizes items sequentialy.
- have the smallest footprint then any DS


const strings = ["a", "B", "c", "d"];

// 4 * 4 = 16 bytes of storage in RAM

strings[2]; //output: "c"

//push
strings.push("e"); //o(1)

//pop
strings.pop();
strings.pop(); //o(1)



//unshift
strings.unshift("x"); //O(n)

//splice
strings.splice(2, 0, "alien"); //O(n)

console.log(strings);


- reference type(non-primative)
    * created by a programmer.
    * referensing different objects that are created by programer.

- context vs scope
    *scope
        function b(){
            //new scope
            let a = 4;
        }
    *contect
        -where we are within the object.
        - "this" means, what is the object enviroment we current are in.
        ex)
            const object4 = function a() {
                a: function() {
                    console.log(this)
                }
            }

            object4.a() 
            // {a: f}

- instantiation

class Player {
    contructor(name, type) {
        this.name = name;
        this.type = type;
  }
  introduce() {
      console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}
const Wizard1 = new Wizard("shelly", "Healer");
const Wizard2 = new Wizard("shawn", "Dark Magic");



class MyArry {
    constructor() {
        this.length = 0;
    this.data = {};
}

get(index) {
    return this.data[index];
}

push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
}

pop() {
    const lastItem = this.data[this.lenngth - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
}

delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
}

shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
    }
    this.data[this.length + 1];
    this.length--;
}
}

const newArry = new MyArry();
newArry.push("hi"); //data: {0: 'hi'} length: 1
newArry.push("you"); // data: {0: 'hi', 1: 'you'} length: 2
newArry.push("!!!"); // data: {0: 'hi', 1: 'you', 3: '!!!'} length: 3
// newArry.pop();
newArry.delete(1);
console.log(newArry);

const str = "Hi My name is Andrei";
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse(str));

//my attept
const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
let newArray = [];

function mergeSortedArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
          if (array1[i] < array2[j]) {
              newArray.push(array1[i]);
            } else if (array2[j] < array1[i]) {
                newArray.push(array2[j]);
            }
        }
    }
    console.log(newArray);
}

mergeSortedArrays(array1, array2);

*/

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  i = 1;
  j = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array2;
  }

  while (array1Item || array2Item) {
    if (array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  console.log(mergedArray);
  return mergedArray;
}
mergeSortedArrays(array1, array2);
