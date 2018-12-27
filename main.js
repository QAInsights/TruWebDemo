load.initialize(async function () {
});

load.action("Action", async function () {
    
    load.log(`Hello there! Let's debug`);
    
    var a = 5;
    var b = 10;
    var sum = 0;
    sum = a + b;
    load.log(sum);
 });

load.finalize(async function () {
});
