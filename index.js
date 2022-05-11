console.log("hello world");

function addNum(str = "") {
  const a = Number(str);
  console.log(a);
  return a;
}

const b = addNum("5");

console.log(b);

/* Non-letter hero */

const a = 5;

const promise = new Promise((resolve, reject) => {
  if (a === 5) {
    resolve(true);
  } else {
    reject(new Error("number not equal to 5"));
  }
});

promise.then(console.log).catch((err) => {
  console.log(err);
});
