function arrayStringify(a: number[]): string{
  /* Your code here */
  let result = "";
  let b = a.length;
  for(let i = 0; i <b; i++){
    result += a[i].toString();
  }
  return result;
}
//นายปัณณทัต เงินงาม 660610775

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;
