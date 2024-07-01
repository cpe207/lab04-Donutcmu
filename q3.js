function primeNumber(a) {
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
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
