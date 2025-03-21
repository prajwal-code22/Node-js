//The node:assert module provides a set of assertion functions for verifying invariants.

// const assert=require("node:assert").strict;
// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

//tracking functions t verify how much time function is executed
const assert=require("node:assert");
const process= require("node:process");

console.log(assert);

const tracker=new assert.CallTracker(); //here CallTracker is depreceated

function func(){
    console.log("hello world");
}

const callFunc=tracker.calls(func,5);
callFunc();
process.on("exit", ()=>{
    tracker.verify();
})
