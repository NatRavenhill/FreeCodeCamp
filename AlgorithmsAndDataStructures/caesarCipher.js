function rot13(str) 
{ 
    var result = [];
    for (var i = 0; i < str.length;i++)
    {
        var aCode = 'A'.charCodeAt(0);
        var zCode = 'Z'.charCodeAt(0);
      if(!str[i].match(/[^a-z0-9]/gi))
      {
        if(str.charCodeAt(i) - 13 >= aCode)
            result.push(String.fromCharCode(str.charCodeAt(i) - 13));
        else if (str.charCodeAt(i) + 13 <= zCode)
            result.push(String.fromCharCode(str.charCodeAt(i) + 13));
      }
      else
          result.push(str[i]);
    }
    
    return result.join("");
}
  
// Change the inputs below to test
rot13("SERR YBIR?");