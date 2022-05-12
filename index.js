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
console.log(a + 2);
