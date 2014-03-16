function butCalc_onclick()
{  
	alert("butCalc_onclick");
    var x = document.getElementById("txtVal1");
	var y = document.getElementById("txtVal2");
    if (x.value == "") 
	{
        alert("Please enter value");
        if (x.value == "") 
		{
            x.focus();
        }
    }
    else 
	{
		alert("Before call");
        var res = converter.convertFromImperialToMetric(x.value);
		x.value
        alert("After call");
		y.value = "" + res;
   }
}