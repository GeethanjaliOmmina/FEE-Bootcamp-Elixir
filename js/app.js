var val = '';
var counter = 0;
var xwin=0;
var owin=0;
function clickCell(x) {
    var valueInGrid = document.getElementById(x);
    valueInGrid.innerHTML = val;
         if(val=='x')
            val='o';
        else
            val='x';
         counter+=1;    
        if(counter>4 && counter<=9)
        {
            var arr = [];
            for(i=0;i<9;i++)
                {
                    arr[i]=document.getElementById((i+1).toString()).innerHTML;
                }
            if((arr[0]=='x' && arr[1]=='x' && arr[2]=='x')|| (arr[3]=='x' && arr[4]=='x' && arr[5]=='x')
            || (arr[6]=='x' && arr[7]=='x' && arr[8]=='x')|| (arr[0]=='x' && arr[3]=='x' && arr[6]=='x')
            || (arr[1]=='x' && arr[4]=='o' && arr[7]=='x')|| (arr[2]=='x' && arr[5]=='x' && arr[8]=='x')
            || (arr[0]=='x' && arr[4]=='x' && arr[8]=='x')|| (arr[2]=='x' && arr[4]=='x' && arr[6]=='x')){
                alert("x wins");
                xwin+=1;
                document.getElementById("xwoncount").innerHTML=xwin+" "+"times(s)";
                clean();
            }
            else if((arr[0]=='o' && arr[1]=='o' && arr[2]=='o')|| (arr[3]=='o' && arr[4]=='o' && arr[5]=='o')
            || (arr[6]=='o' && arr[7]=='o' && arr[8]=='o') || (arr[0]=='o' && arr[3]=='o' && arr[6]=='o')
            || (arr[1]=='o' && arr[4]=='o' && arr[7]=='o')|| (arr[2]=='o' && arr[5]=='o' && arr[8]=='o')
            || (arr[0]=='o' && arr[4]=='o' && arr[8]=='o')|| (arr[2]=='o' && arr[4]=='o' && arr[6]=='o')){
                alert("o wins");
                owin+=1;
                document.getElementById("owoncount").innerHTML=owin+" "+"time(s)";
                clean();}
        }
         if(counter>=9){
            alert("Game over");
        }
}

function clean() {
    counter=0;
    for(i=1;i<=9;i++)
    {
        document.getElementById(i).innerHTML = ''; 
    }
}

function doubleClick(z) {
    alert("Dont cheat BRO!!!....");
    counter--;
    if(val=='x')
        document.getElementById(z).innerHTML = 'x';
    else
        document.getElementById(z).innerHTML = 'o';
}

function selectPlayer() {
    val = document.getElementById("myselect").value;
}