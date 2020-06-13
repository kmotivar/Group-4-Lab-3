function countPositivesSumNegatives(input) 
{
  while (input == null || input.length < 1)
  {
        return [];
  }
  var sum=[0,0];
    for(var i in input) 
    {
        if(input[i] <= 0) 
        {
            sum[1] += input[i];
        }
        else 
        {
            sum[0] += 1;
        }
    }
    return sum;
}