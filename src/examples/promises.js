const promise = new Promise((res, rej) => {
  res("RESOLVED!");
});

promise.then((data) => {
  console.log("data", data);
});
