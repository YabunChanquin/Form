
function alerta(){


let name= document.getElementById("nombre").value;
let old= document.getElementById("old").value;
let email= document.getElementById("email").value;


if(name===""){
	alert("Ingrese un nombre valido");
}else{
	if(old===""){
  		alert("Ingrese una edad valida");
  	}else{
  		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  		{
  			alert("OK");
  		}else{
  			alert("Ingrese un Email valido");
  		}
  		
  	}	
}
}




