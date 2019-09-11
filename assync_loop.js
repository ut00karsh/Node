function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  
  async function test()
  { 
      var j=0;
    j++
    console.log("outside promise"+j);
  await delay().then(()=>{
      j++;
      console.log("1st inside promise"+j);
    });
await delay().then(()=>{
    j++
    console.log("2nd inside promise"+j);
  });
await delay().then(()=>{
  j++
console.log("3rd inside promise"+j);
});
await delay().then(()=>{
j++;
console.log("4thd inside promise"+j);
});



  }

  
  async function delayedLog(item) {
    // notice that we can await a function
    // that returns a promise
    await delay();
    console.log(item);
  }
  async function processArray(array) {
      var j=0;
    for (count=0;count<5;count++) {
     await test();
    }
    console.log('Done!');
  }

  
  processArray([1,2,3,4,5]);