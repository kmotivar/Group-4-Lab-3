function getSum( a,b )
{
   var sum=0;
   if(a==b)
   {
     return a;
   }
   if(a>b)
   {
     for(var i=a;i>=b;i--)
     {
       sum+=i
     }
      return sum;
   }
     if(a<b)
     {
      for(var i=a;i<=b;i++)
      {
      sum+=i;
      }
      return sum;
     
   }
}