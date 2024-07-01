function primeNumber(a: number){
  /* Your code here */
  for (let i =2; i<=a+1; i++) {
    if(a==i){
      return "Yes";
    }
    if (a%i==0) {

      return "NO";
    }
      i++;
  }
  return "Yes";
}
//นายปัณณทัต เงินงาม 660610775

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
