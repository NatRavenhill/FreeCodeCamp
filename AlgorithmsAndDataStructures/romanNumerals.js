function convertToRoman(num) 
{
    var numeral = "";
    var thousands = Math.trunc(num / 1000);
    if(thousands > 0){
      numeral += "M".repeat(thousands);
      num -= 1000 * thousands;
    }
    
    var hunds = Math.trunc(num / 100);
    var convertHunds = createNumArray("C", "D", "M");
    if(hunds > 0){
      numeral += convertHunds[hunds];
      num -= hunds * 100;
    }
    var tens = Math.trunc(num / 10);
    var convertTens = createNumArray("X", "L", "C");
    if(tens > 0){
      numeral += convertTens[tens];
      num -= tens * 10;
    }
  
    var convert = createNumArray("I", "V", "X");
    numeral += convert[num];
    return numeral;
}
  
function createNumArray(min, mid, max)
{
    var arr = [];
    arr.push("");
    arr.push(min);
    arr.push(min.repeat(2));
    arr.push(min.repeat(3));
    arr.push(min + mid);
    arr.push(mid);
    arr.push(mid + min);
    arr.push(mid + min.repeat(2));
    arr.push(mid + min.repeat(3));
    arr.push(min + max);
    
    return arr;
}

convertToRoman(1000);