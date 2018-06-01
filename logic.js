function myFunction(event) {
    var result=0;
    var input = (event.which) ? event.which : event.input;
    if((input>=48 && input<=57) || (input==42 || input==43 || input==45 || input == 46 || input==47 || input==61 || input == 13))
    {
        if((input==61))
        {
            var inpstr = "";
            inpstr=document.getElementById("inp").value;
            var res = "";
            for (i=0;i<inpstr.length;i++)
            {
                
                if((inpstr[i]>='0') && (inpstr[i]<='9')){
                    res = res+inpstr[i];
                    //alert(inpstr[i]);
                    }
                else if(inpstr[i]=='+' || inpstr[i]=='-' || inpstr[i]=='*' || inpstr[i]=='/')
                {
                    var num = eval(res);
                    var opr = inpstr[i];
                    res = num.toString()+opr;
                }
            }
             result = eval(res);  
        }
        alert(result);
        return true;
    }
    return false;
}