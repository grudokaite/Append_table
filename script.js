"use strict"

var text = document.querySelectorAll("input")[0]
function addData(){
	var firstname=document.getElementById('vardas').value;
	var lastname=document.getElementById('pavardė').value;
	var address=document.getElementById('amžius').value;
 
	if(vardas =="" || pavardė =="" || amžius==""){
		alert("Please enter something first!");
	}else{
		var html="";
 
		html="<tr><td>"+vardas+"</td><td>"+pavardė+"</td><td>"+amžius+"</td></tr>";
 
		document.getElementById('result').innerHTML+=html;
 
		document.getElementById('vardas').value="";
		document.getElementById('pavardė').value="";
		document.getElementById('amžius').value="";
	}
 
}