function cubeOdd(arr) {
let sum=0;
//Loping over the elements of array
for (let i=0; i<arr.length; i++)
{
let cur = arr[i]; 
if (typeof cur != "number") 
{
  return undefined;
}
// if the number is odd then adding its cube to the sum
if (cur % 2 !== 0)
{
   sum += cur * cur * cur;
}

}

return sum;
}