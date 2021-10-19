/*const input = [1,2,3,4,5];
var result = input.map(x=>x*x);
*/

const input = [1, -4, 12, 0, -3, 29, -150];
var result = input.reduce((x,val) => {
    if(val>=0) x+=val;
    return x;
},0)


/*const input = [12, 46, 32, 64];
var sortedInput = input.sort();
var addedInput = input.reduce((x,val) => {
    return x+val;
})
console.log(addedInput/input.length);

console.log(sortedInput[sortedInput.length/2-1]);*/


/*const input = 'George Raymond Richard Martin';
var splitInput = input.split(" ");
var result = "";
for(var i=0;i<splitInput.length;i++){
    result += splitInput[i][0]
}
console.log(result);*/


/*const input = [
    {
      name: 'John',
      age: 13,
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    },
  ];

  var minAge=100;
  var maxAge=0;
  for(var i=0;i<input.length;i++){
      if(input[i].age>=maxAge) maxAge=input[i].age;
      if(input[i].age<=minAge) minAge=input[i].age;
  }
  console.log(minAge,maxAge,maxAge-minAge);
  */

  const input = 'Every developer likes to mix kubernetes and javascript';
  var splitInput = input.split(" ");
  var temp = "";
  for(var i=0;i<splitInput.length;i++){
    if(splitInput[i].length <=4) {
        temp += splitInput[i] + " ";
    } else {
        temp += splitInput[i][0] + "" + (splitInput[i].length-2 + "") + splitInput[i][splitInput[i].length-1] + " ";
    }
  }
  console.log(temp);

  /*const input = 8;
  const array = new Array(input).fill(1);
  var temp = array
  .map(function (currentValue, index) { return index + 1;})
  .reduce((currentValue,previousValue) => {
    return currentValue*previousValue
});
  console.log(temp);*/