function primeNumber(a:number){
  /* Your code here */
  for (let i =2; i<=a; i++) {
    if(a<=1){
      return "NO";
  }
    if(a==i){
      return "YES";
    }
    if (a%i==0) {

      return "NO";
    }
  }
}
//นายปัณณทัต เงินงาม 660610775

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
