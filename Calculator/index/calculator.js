
function calculation(x) { 
	
	let A = parseFloat(document.calculate.numberA.value);
	let B = parseFloat(document.calculate.numberB.value);
	let C = 0;
	
	if (x == '+') { C = A + B } else 
	 if (x == '-') { C = A - B } else
	  if (x == '*') { C = A * B } else 
	   if (x == '/'){ C = A / B } else
	    if (x == 'reset') {C = 0};
	
	document.getElementById('output').innerHTML = C;
	};

