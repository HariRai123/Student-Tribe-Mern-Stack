//leap year 
let year=2004;
if(year%4==0 && year%100!=0 || year%400==0)
{
    console.log(`The given year ${year} is an leap year`);
}
else{
    console.log(`The given year ${year} is not an leap year`);
}