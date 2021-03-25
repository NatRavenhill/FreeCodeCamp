//Assignment description is at https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

// cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
function checkCashRegister(price, cash, cid) 
{
  var allCoinsUsed = true; 
 	var changeRequired = cash - price;
  var resultArray = [];
  var closedArray = [];

  DoCalculation(100, "ONE HUNDRED");
  DoCalculation(20, "TWENTY");
  DoCalculation(10, "TEN");
  DoCalculation(5, "FIVE");
  DoCalculation(1, "ONE");
  DoCalculation(0.25, "QUARTER");
  DoCalculation(0.1, "DIME");
  DoCalculation(0.05, "NICKEL", true);
  DoCalculation(0.01, "PENNY"); 
 
 if (changeRequired > 0.01)
 		return  {status: "INSUFFICIENT_FUNDS", change: []}
    
 	if(allCoinsUsed)
 	{
 			MakeClosedArray();
 			return {status: "CLOSED", change: closedArray.reverse() };
 	}

  return {status: "OPEN", change: resultArray };
  
  //Create the array with empty fields for the CLOSED output
  function MakeClosedArray()
	{
    AddToClosedArray("ONE HUNDRED");
    AddToClosedArray("TWENTY");
  	AddToClosedArray("TEN");
  	AddToClosedArray("FIVE");
  	AddToClosedArray("ONE");
  	AddToClosedArray("QUARTER");
  	AddToClosedArray("DIME");
  	AddToClosedArray("NICKEL");
  	AddToClosedArray("PENNY"); 
	}
  
  //Add an element to the closed array for the given coin name
  function AddToClosedArray(coinName)
  {
   	var result = resultArray.find(x => x[0] === coinName);
     
     if (result == undefined)
     		closedArray.push([coinName, 0]);
      else
        closedArray.push(result);
  }
  
  // Calculate the required coins fora given coin value
  function CalculateCoinsRequired(coinValue, isSmallValue)
  {
      if (isSmallValue)
        return  Math.trunc(((changeRequired * 100) / (coinValue * 100)));
      
      return Math.trunc(changeRequired / coinValue);
  }
  
  /// Calculate the coins used and resulting change required for a given coin
  function DoCalculation(coinValue, coinName, isSmallValue)
  {
    var actualCoinsTotal = 0;
    var coinsRequired = 0;
    
    coinsRequired = CalculateCoinsRequired(coinValue, isSmallValue);
   
    if (coinsRequired > 0)
    {
      var cidValue = cid.find(e => e[0] == coinName)[1];
      var noOfCoins = Math.trunc(cidValue / coinValue);
      
      if (isSmallValue)
      	noOfCoins = Math.trunc((cidValue * 100) / (coinValue * 100));
      
      if (noOfCoins > 0 && noOfCoins != coinsRequired)
      	allCoinsUsed = false;
      
      if (noOfCoins < coinsRequired)
      	coinsRequired = noOfCoins;
        
      actualCoinsTotal = (coinsRequired * coinValue * 100.0 / 100.0);
      
      resultArray.push([coinName, actualCoinsTotal]);

    	changeRequired -= actualCoinsTotal;
    	changeRequired = parseFloat(changeRequired.toFixed(2));
    
		}
  
  }
  
}

//tests
var result = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(result);