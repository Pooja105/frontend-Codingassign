


var i, len, outputValue, newNumber, result, indexvalue, inpValue;
      
  function startFunc() {
  for (i = 0; i <= len; i++) {

  initialNum = document.getElementById("demo2");
        
  }

  fingerToe();
  if(i <= 0) {
    alert('Please use positive integers!');
  }
}

function resetFunc() {
  if(i == null || len == null) {
    alert('There is nothing to reset!');
  } else {
    document.getElementById("myForm").reset();
  }
}


function fingerToe() {
      for (i = 0, len = document.getElementById("inpValue").value; i <= len; i++) {
      (function(indexvalue) { 
       setTimeout(function() {
        
		outputValue = "";
        newNumber = document.createElement("BR");
        result =  document.getElementById("demo2");

        if (indexvalue % 3 === 0)
          outputValue += "Fingers";
        if (indexvalue % 5 === 0)
          outputValue += "Toes";
        if (i % 3 === 0 && i % 5 === 0)
          outputValue += "FingersToes";
          console.log(indexvalue);

        result.insertBefore(newNumber, indexvalue[i]);
        result.innerHTML += outputValue || indexvalue;}, i * 500);
		 	
      })(i);
  }
}