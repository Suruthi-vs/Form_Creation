
function submit(){
var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
var age=document.getElementById('age').value;
var phone=document.getElementById('phone').value;
var state=document.getElementById('state').value;
var city=document.getElementById('city').value;
var country=document.getElementById('country').value;

var table=document.getElementsByTagName('table')[0];

var newRow=table.insertRow(1);

var cell=newRow.insertCell(0);
var cell1=newRow.insertCell(1);
var cell2=newRow.insertCell(2);
var cell3=newRow.insertCell(3);
var cell4=newRow.insertCell(4);
var cell5=newRow.insertCell(5);
var cell6=newRow.insertCell(6);

cell.innerHTML=name;
cell1.innerHTML=email;
cell2.innerHTML=age;
cell3.innerHTML=phone;
cell4.innerHTML=state;
cell5.innerHTML=city;
cell6.innerHTML=country;
}
