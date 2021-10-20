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

*/
