function findOutlier(integers){
  let odd;
  let even;
  let odd_count = 0;
  let even_count = 0;
  
//Looping over the array
  for (let i=0; i<integers.length; i++) 
  { // Checking if the number is even 
    if (integers[i] % 2 === 0) 
    {
      even = integers[i];
      even_count += 1;
    } // Checking the number is odd
    else 
    {
      odd = integers[i];
      odd_count += 1;
    }
  }
  //returning the outlier
  if (odd_count > even_count) 
  {
    return even;
  }
  
  return odd;
}