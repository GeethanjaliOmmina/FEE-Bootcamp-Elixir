function del() {
    var val = document.getElementById('display').value;
    var l = val.length;
    var res = val.substring(0,l-1);
    document.getElementById('display').value = res;
}

function powerOff() {
    var tf = setTimeout(turnOff,1000);
    
    function turnOff() {
        var pf = "Power Off";
        document.getElementById('display').value = pf;

        var empty = setTimeout(sayResult,1000);
        function sayResult() {
            document.getElementById('display').innerHTML = "";
        }
    }
}

function calculateResult() {
    var str = document.getElementById('display').value;
    var result = eval(str);
    document.getElementById('answer').innerHTML = result;
}

function ON () {
    document.getElementById('display').value = '0';   
    document.getElementById('answer').innerHTML = '0';
}
// function runScript(e) {
//     if (e.keyCode == 13) {
//         var tb = document.getElementById('display');
//         eval(tb.value);
//         return false;
//     }
// }
