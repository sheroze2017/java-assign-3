function getnumber(num){
    var output = document.getElementById("output");
    output.value +=num;
}

function clean(){
    var output = document.getElementById("output");
    output.value = ""
}


function back (){
    var output = document.getElementById("output").value;
    output = output.slice(0,-1);
    document.getElementById("output").value = output;
}


function recp() { 
  var output = document.getElementById("output").value
  output= 1/output
  document.getElementById("output").value = output;
}

function udrt() { 
    var output = document.getElementById("output").value
    output= Math.sqrt(output)
    document.getElementById("output").value = output;
  }

function getresult(){
    var output = document.getElementById("output");
    output.value = eval(output.value)
}