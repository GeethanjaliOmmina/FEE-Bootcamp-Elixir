var val = "x";
var counter = 0;
function clickCell(x) {
         document.getElementById(x).innerHTML = val;
        //alert(demo);
   
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
            if(arr[0]=='x' && arr[1]=='x' && arr[2]=='x'){
                alert("x wins");
                
            }
            else if(arr[0]=='o' && arr[1]=='o' && arr[2]=='o')
                alert("o wins");
            if(arr[3]=='x' && arr[4]=='x' && arr[5]=='x')
                alert("x wins");
            else if(arr[3]=='o' && arr[4]=='o' && arr[5]=='o')
                alert("o wins");
            if(arr[6]=='x' && arr[7]=='x' && arr[8]=='x')
                alert("x wins");
            else if(arr[6]=='o' && arr[7]=='o' && arr[8]=='o')
                alert("o wins");
            if(arr[0]=='x' && arr[3]=='x' && arr[6]=='x')
                alert("x wins");
            else if(arr[0]=='o' && arr[3]=='o' && arr[6]=='o')
                alert("o wins");
            if(arr[1]=='x' && arr[4]=='x' && arr[7]=='x')
                alert("x wins");
            else if(arr[1]=='o' && arr[4]=='o' && arr[7]=='o')
                alert("o wins");
            if(arr[2]=='x' && arr[5]=='x' && arr[8]=='x')
                alert("x wins");
            else if(arr[2]=='o' && arr[5]=='o' && arr[8]=='o')
                alert("o wins");
            if(arr[0]=='x' && arr[4]=='x' && arr[8]=='x')
                alert("x wins");
            else if(arr[0]=='o' && arr[4]=='o' && arr[8]=='o')
                alert("o wins");
            if(arr[2]=='x' && arr[4]=='x' && arr[6]=='x')
                alert("x wins");
            else if(arr[2]=='o' && arr[4]=='o' && arr[6]=='o')
                alert("o wins");
        }
        else if(counter>=9){
            alert("Game over");
        }
}

function clean() {
    window.location.href = "index.html";
    /*for(i=1;i<=9;i++)
        {
            document.getElementById(i).innerHTML = '';
        }*/
}

function demo(z) {
    alert("Dont cheat BRO!!!....");
    counter--;
    if(val=='x')
        document.getElementById(z).innerHTML = 'x';
    else
        document.getElementById(z).innerHTML = 'o';
}
