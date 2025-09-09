// array.concat - does not modifeis the original array


function fibonacci(n) {
  if(n === 1) return 0;
  if(n === 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2)
}
//===========================================================================================================================

function findBinary(num) {
  return num.toString(2);
}
//===========================================================================================================================

function findFactorial(num) {
  if(num === 0 || num === 1) {
    return 1
  }
  return num * findFactorial(num - 1);
}
//===========================================================================================================================

function unique() {
    let a = [10, 20, 20, 20, 30, 30, 40, 50];
    let res = a.filter((num, i, self) => self.indexOf(num) === i)
    console.log(res);
}
//===========================================================================================================================

function checkAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }
    let rev1 = str1.split("").sort().join("");
    let rev2 = str2.split("").sort().join("");
    return rev1 === rev2
}
console.log(checkAnagram('silent', 'listen'));
//===========================================================================================================================

const a = [
    { a: '1', b: '2' },
    { c: '2', d: '4' },
    { c: '2', d: '4' },
    { a: '1', b: '2' }
];

function uniqObj() {
    let uniq = [];
    return a.filter(o => {
        let s = JSON.stringify(o);
        if (!uniq.includes(s)) {
            uniq.push(s);
            return true;
        }
        return false;
    });
}
console.log(getUniq());
//===========================================================================================================================



