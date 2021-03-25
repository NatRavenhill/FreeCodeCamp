function palindrome(str) 
{
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  var halfLength = Math.floor(str.length / 2);
  var half1 = str.substr(0, halfLength);
  var half2 = str.substr(str.length - halfLength, str.length);
  var revhalf2 = half2.split("").reverse().join("");;
  return revhalf2 === half1;
}

palindrome("eye");