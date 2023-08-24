// 回溯，讲究顺序，就用if (tempArr.includes(arr[i])) continue;
function getRandomSubSet1(arr) {
  let len = arr.length;
  let result = [];
  let tempArr = [];
  function huisuo(curArr) {
    result.push(curArr.slice());
    for (let i = 0; i < len; i++) {
      if (tempArr.includes(arr[i])) continue;
      tempArr.push(arr[i]);
      huisuo(tempArr);
      tempArr.pop();
    }
  }
  huisuo([]);
  console.log(result);
  return result;
}
// 不要顺序，就限制起始坐标
function getRandomSubSet2(arr) {
  let len = arr.length;
  let result = [];
  let tempArr = [];
  function huisuo(start, curArr) {
    result.push(curArr.slice());
    for (let i = start; i < len; i++) {
      tempArr.push(arr[i]);
      huisuo(i + 1, tempArr);
      tempArr.pop();
    }
  }
  huisuo(0, []);
  console.log(result);
  return result;
}
let res = getRandomSubSet1([0, 1, 2]);
console.log(res[Math.floor(Math.random() * res.length)]);
