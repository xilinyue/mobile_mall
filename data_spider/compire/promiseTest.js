function fun() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 3000);
    });
}
let a = fun();
console.log(a);