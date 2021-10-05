/* 
    const nemo = ['nemo'];
    const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
    const large = new Array(1000).fill('nemo');
    
    
    function findNemo(array) {
        let t0 = performance.now();
        for ( let i = 0; i < array.length; i++) {
            if(array[i] === 'nemo'){
                console.log('Found NEMO!');
            }
        }
        let t1 = performance.now();
        console.log('call to find Nemo took ' + (t1 - t0)
        + ' milliseconds');
    }
    
    findNemo(large) 
    
    O(n) --> linear Time
    O(1) --> constant Time - is a flat time
    
    const boxes = [0,1,2,3,4,5,6];
    
    function logFirstTwoBoxes(boxes) {
        console.log(boxes[0]); // O(1)
        console.log(boxes[1]); // O(1)
    }
    
    logFirstTwoBoxes(boxes) // O(2)
*/
    
/*
Big O cheat sheet:
----------------
WWW.bigOcheatsheet.com

-Big Os-
O(1) Constant- no loops
0(log N) Lagarithmic - usually searching algorithms have log(n) if they are sorted(binary search)
O(n) Linear- for loops & while loops
O(n*log(n)) Log Liniear- sorting opertions usually
O(n^N) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
O(2^N) Exponential- recursive algorithms that solve a problem of size N
o(n!) - you are adding a loop for every element

-Rule Book-
1. ALways worse case
2.remove constants
3. different inputs should have different variables O(a+b). A and B arrays nested would be O(a*b)
    + for stepes in order
    * for nested steps
4. Drop Non-Dominant terms

-What causes space complexity?-
    variables
    Data Structures
    functions call
    Allocations

*/

function Booo(n) {
    for(let i = 0; i< n.length; i++){
        console.log('boooo!!!');
    }
}

Booo([1,2,3,4,5]) //O(1)

function arrayofhiNTimes(n){
    let hiArray = []
    for(let i = 0; i< n; i++){
        console.log(hiArray[i] = 'hi');
    }
    return hiArray;
}

arrayofhiNTimes(6) //O(n)