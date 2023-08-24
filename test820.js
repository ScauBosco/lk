let arr = [[1, 2, [23, 2, 2, 3, [3, 3, 4, [1, 4, 4], 4], 4], 44], 23];

function flats(arr, deepen) {
  return arr.flat(deepen);
}

// console.log(flats(arr, 2));
// console.log(flats(arr, 3));
// console.log(flats(arr, 4));

// let arr = [[1, 2, [23, 2, 2, 3, [3, 3, 4, [1, 4, 4], 4], 4], 44], 23];
// function flats2(arr, deepen) {
//   if (deepen == 0) return arr;
//   return arr.reduce(
//     (a, b) => a.concat(Array.isArray(b) ? flats2(b, deepen - 1) : b),
//     []
//   );
// }
// console.log(flats2(arr, 1));
// console.log(flats2(arr, 2));
// console.log(flats2(arr, 3));
// console.log(flats2(arr, 4));
// console.log(flats2(arr, 5));

// 千分位
// Int32Array;
// let bignums=2181514353141351345145135359090n
// let nums = 2181514353141351345145135359090.324234;
// console.log(nums.toString());
// let strs = (nums + "").split(".");
// console.log(strs);
// let newstr1 = strs[0]
//   .split("")
//   .reverse()
//   .map((el, i) => {
//     if (i % 3 == 0 && i != 0) return "," + el;
//     return el;
//   })
//   .join("")
//   .split("")
//   .reverse()
//   .join("");
// console.log(newstr1 + "." + strs[1]);

// console.log(BigInt(strs[0]).toLocaleString() + "." + strs[1]);
// let nf=new Intl.NumberFormat('en-US')
// console.log(nf.format(bignums));

Promise.retry = function (fn, times, delay) {
  return new Promise((resolve, reject) => {
    function retryFun(curtimes) {
      console.log(curtimes);
      fn()
        .then(resolve)
        .catch((rej) => {
          if (curtimes > 1) {
            setTimeout(() => retryFun(curtimes - 1), delay);
          } else return reject(rej);
        });
    }
    retryFun(times);
  });
};
function testFun() {
  return new Promise((resolve, reject) => {
    let num = Math.random();
    num < 0.5 ? resolve(num) : reject(num);
  });
}
Promise.retry(testFun, 2, 100)
  .then((res) => console.log("success", res))
  .catch((rej) => console.log("reject", rej));
