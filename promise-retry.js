Promise.retry = function (fn, times, delay) {
  return new Promise((resolve, reject) => {
    function retryFun(curtimes) {
      fn()
        .then(resolve)
        .catch((rej) => {
          if (curtimes > 1) {
            setTimeout(() => retryFun(curtimes - 1), delay);
          } else reject(rej);
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
