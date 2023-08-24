/**
 * 第一题：输出什么
 */

let obj1 = {
  key: "obj1",
};
let obj2 = {
  key: "obj2",
};
function a(obj) {
  obj.key = "obj11";
  return obj;
}
function b(obj) {
  obj = {
    key: "obj22",
  };
  return obj;
}
console.log(a(obj1), b(obj2));
console.log(obj1, obj2);

/**
 * 第二题，闭包
 */
function fun(){
    let len=0
    return ()=>{
        len++
        return len
    }
}
let fun1=fun()
let fun2=fun()
console.log(fun1())
console.log(fun2())
console.log(fun1())
console.log(fun2())


/**
 * 第三题，输出顺序
 */

async function fun1() {
  console.log("script start");
  await fun2();
  console.log("script end");
}
async function fun2() {
  console.log("fun2");
}
console.log("line1");
fun1();
setTimeout(() => {
  console.log("timeout");
}, 0);
new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => console.log("promise2"));
console.log("script end");

/**
 * 第四题，每调用一次输出下一个素数，如2，3，5...
 */







/**
 * 第五题。上面第四题如果不在外面定义一个变量，怎么优化。
 * 第五题题目，给定一个有序number数组arr和目标数字n，
 * 输出起始和终点位置。let arr=[1,1,2,2,2,3,3,4],n=2
 * 输出 [2,4]
 */