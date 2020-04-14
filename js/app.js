function generatepassword(){

// Variable Declaration

var alpha = "abcdefghijklmnopqrstuvwxyz"; //Alphabets(a,z)
var num = "0123456789" ;//Numbers(0,9)
var spcl = "!@#$&"; //Special Character
var pass = ""; //Password

// Limit of Variables

const alpha_min = 0; 
const alpha_max = 25;
const num_min = 0;
const num_max = 9;
const spcl_min=0;
const spcl_max=4;

// Count of variabes

var c_num=0;
var c_spcl=0;


// Function for random number

 var rand_num = () => {
	if( (Math.floor( Math.random() * ( num_max - num_min)) + num_min) == (Math.floor(Math.random() * (num_max - num_min)) + num_min)) return true;
	else return false;
}

// Function for random Special

var rand_spcl = () => {
	if( (Math.floor( Math.random() * ( spcl_max - spcl_min)) + spcl_min) == (Math.floor(Math.random() * (spcl_max - spcl_min)) + spcl_min)) return true;
	else return false;
}

// Loop for generating Password

for(var i=0;i<7;i++)
{
pass += alpha[Math.floor(Math.random() * (alpha_max - alpha_min)) + alpha_min];

if(i==0) pass=pass.toUpperCase();
	
	// Function to add number 
 if(rand_num() && c_num<3){
 	pass += num[Math.floor(Math.random() * (num_max - num_min)) + num_min];
 	c_num++;
 }

 if(rand_spcl() && c_spcl<2) {
 	pass += spcl[Math.floor(Math.random() * (spcl_max - spcl_min)) + spcl_min];
 	c_spcl++;
 }
}
document.getElementById("h2").innerHTML=pass;
} 