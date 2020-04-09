const promise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("RESOLVED!");
    // res("SECOND RESOLVE!");
    rej("this is my error");
  }, 1000);
});

console.log("before");
promise
  .then((data) => {
    console.log("1", data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("after");
