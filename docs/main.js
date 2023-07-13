$(document).ready(function(){
	$('.header').height($(window).height());
})

//global variables
	var mrn
	var ais_head_neck = -1;
	var ais_chest = -1; 
	var ais_extrem = -1; 
	var ais_total =-1; 
	var age = -1; 
	var cci_index = -1; 
	var amb_status = -1; 
	var sttgma_score = -1; 
	var risk_level = " ";
	var gcs_total = -1;
	var gcs_eye = -1; 
	var gcs_verbal = -1; 
	var gcs_motor = -1; 
	var covid_value = -1;
	var sttgma = -1;
	var asa = -1; 
	var anticoag = -1;
	var asst_div = -1;
	var albumin = -1;
	var buttonColor = "#EAECEF"; 
	var textColor = "#6C757D";

	//procedure names
	// var crpp = 0
	// var shs = 0
	// var short_cmn = 0
	// var long_cmn = 0
	// var hemiartho = 0
	// var total_hip_artho = 0
	// var peri_orif = 0
	var procedure = [0,0,0,0,0,0,0]
//gets MRN and stores it in a varible
function updateMRN(){
	mrn = document.getElementById("MRN").value;
}
//Script for autocalculating age from DOB -->

function updateAge(){
	var userdate = document.getElementById("date").value;
	userdate = Date.parse(userdate)
	var month_diff = Date.now() - userdate
	var age_dt = new Date(month_diff)
	var year = age_dt.getUTCFullYear();
	age = Math.abs(year - 1970);
	document.getElementById("age").setAttribute("placeholder",age);
	}

function update(option, buttonId)
{
	string_option = option.toString();
	updateDropdown(string_option,buttonId);
	updateTot(option, buttonId)
}
function updateDropdown(option, buttonId) {
	$('#' + buttonId).text(option);
	let intOption = +option;
	if (buttonId == "dropdownMenuEye")
	{
		gcs_eye = intOption;
	}
	else if (buttonId == "dropdownMenuMotor")
	{
		gcs_motor = intOption;
	}
	else if (buttonId == "dropdownMenuVerbal")
	{
		gcs_verbal = intOption;
	}
	else if (buttonId == "dropdownMenuAISHN")
	{
		ais_head_neck = intOption;
	}
	else if (buttonId == "dropdownMenuAISC")
	{
		ais_chest = intOption;
	}
	else if (buttonId == "dropdownMenuAISEX")
	{
		ais_extrem = intOption;
	}
	else if (buttonId == "dropdownMenuAMB")
	{
		amb_status = intOption;
	}
	else if (buttonId == "dropdownMenuCovid")
	{
		if (option == "Negative")
		{
			covid_value = 0;
		}
		else if (option == "Positive/Suspected")
		{
			covid_value = 1;
		}
	}
	else if (buttonId == "dropdownMenuASA")
	{
		asa = intOption;
	}

	else if (buttonId == "dropdownMenuAnticoag")
	{
		if (option == "No")
		{
			anticoag = 0;
		}
		else if (option == "Yes")
		{
			anticoag = 1;
		}
	}

	else if (buttonId == "dropdownMenuAsstDiv")
	{
		if (option == "No")
		{
			asst_div = 0;
		}
		else if (option == "Yes")
		{
			asst_div = 1;
		}
	}

	else if(buttonId == "dropdownMenuProcedure"){
		var procedureNames = ["CRPP","SHS","Short CMN","Long CMN", "Hemiarthroplasty","Total Hip Arthroplasty","Periprosthetic ORIF"]
		$('#' + buttonId).text(procedureNames[option]);
		procedure = [0,0,0,0,0,0,0]
		procedure[option] = 1
	}

}

function updateDropdownExample(option, buttonId) {
	$('#' + buttonId).text(option);
	var buttonColor = "grey"
	if (option == "No")
	{
		buttonColor = "#FF5252";
	}
	if (option == "Yes")
	{
		buttonColor = "#52FF89";
	}
	var buttonObj = document.getElementById(buttonId);
	buttonObj.style.backgroundColor = buttonColor;




}
function updateTot(value, buttonId)
{
	gcs_total = gcs_motor + gcs_eye + gcs_verbal;


	//reconcile start values being -1
	if (gcs_motor == -1)
	{
		gcs_total +=1;
	}
	if (gcs_eye == -1)
	{
		gcs_total+=1;
	}
	if (gcs_verbal == -1)
	{
		gcs_total+=1;
	}

	document.getElementById("total").setAttribute("placeholder", gcs_total)
}

//<!-- modal functions-->
                                
function openModal(event) {
	event.preventDefault(); // Prevents the default button behavior
	// Additional code to open the modal
}

function calculateCheckSum()
	{
	var past_cci = cci_index;
	const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

	checkboxes.forEach(function(checkbox) 
	{
		cci_index += parseInt(checkbox.value);
	});

	cci_index -= past_cci;
	
	// Do something with the sum value
	var button = document.getElementById("CCI_BUTTON");

	// Update the button text
	button.innerHTML = cci_index;
	}



function calculateSttgma()
{
	console.log("in calculate Sttgma");
	console.log("age: " + age);
	console.log("gcs: " + gcs_total);
	console.log("ais_head_neck: " + ais_head_neck); 
	console.log("ais_chest: "+ ais_chest);
	console.log("cci: " + cci_index);
	console.log("amb_status:" + amb_status);
	console.log("covid_value" + covid_value);
	console.log("asa: " + asa);
	var sttgma_power = -1 * (-15.76 + 0.026 * age + 0.207 * gcs_total + 0.354 * ais_head_neck + 0.441 * ais_chest + 0.165 * cci_index + 0.335 * amb_status + 2.727 * covid_value + 1.65 * asa);
	console.log("power: " + sttgma_power);
	var sttgma_e_val = Math.exp(sttgma_power);
	console.log("e_val" + sttgma_e_val);
	sttgma = 1/(1+ sttgma_e_val);

	var rounded_sttgma = sttgma.toFixed(5);

	document.getElementById("score").setAttribute("placeholder", rounded_sttgma);
}

function calculateRisk()
{
	var sttgma_percent = sttgma * 100;
	var buttonColor = "";
	var textColor = "#000000";
		
	if (sttgma_percent < 0.24)
	{
		risk_level = "Q1: Low Risk";
		buttonColor = "#78D982";
	}
	else if (sttgma_percent < 0.68)
	{
		risk_level = "Q2: Mild Risk";
		buttonColor = "#FFFE57";
	}
	else if (sttgma_percent < 1.32)
	{
		risk_level = "Q3: Moderate Risk";
		buttonColor = "#FFAF34";
	}
	else if (sttgma_percent <6.90)
	{
		risk_level = "Q4: Highest Risk";
		buttonColor = "#FF4747";
	}
	else 
	{
		risk_level = "Top 5%: Extreme Risk";
		buttonColor = "#810101";
		textColor = "#F7F7F7";
	}

	//document.getElementById("risk").setAttribute("placeholder", risk_level);
	//btn btn-secondary btn-lg btn-block disabled tex-left
	// Do something with the sum value
	var button = document.getElementById("risk");
	

	// Update the button text
	button.innerHTML = risk_level;
	button.style.color = textColor;
	button.style.backgroundColor = buttonColor;


}

// Get reference to the button
//const myButton = document.getElementById('calculate_sttgma_button');

// Function to handle button click
function handleClick(event) {
	event.preventDefault();
	console.log ("in handle click");
	if ((age!= -1 && gcs_total!= -1 && ais_head_neck!=-1 && ais_chest!=-1 && cci_index!=-1 && amb_status!=-1 && covid_value!=-1 && asa!=-1))
	{
		console.log("in if statement");
		calculateSttgma();
		calculateRisk();
	}
	else 
	{
		console.log("in alert else");
		var myAlert = document.getElementByID("myAlert");
		myAlert.style.display = 'block';
	}
	
		// Prevents the default button behavior
// Additional code for button click handling
}

//updates Albumin var
function updateAlb(){
	albumin = document.getElementById("Albumin").value;
}

//<!--Persona Click Handler and Calculator-->

	function handlePClick(event) {
		event.preventDefault();
		
		if (age!= -1 && gcs_total!= -1 && ais_head_neck!=-1 && ais_chest!=-1 && ais_extrem != -1 && cci_index!=-1 && 
			anticoag != -1 &&amb_status!=-1 && asst_div != -1 && albumin !=-1 && procedure != [0,0,0,0,0,0,0])
		{
			console.log("in if statement");
			calculatePCostScore();
		}
		else 
		{
			console.log("in alert else");
			var myAlert = document.getElementByID("myAlert");
			myAlert.style.display = 'block';
		}
		
		 // Prevents the default button behavior
	// Additional code for button click handling


	}
function calculatePCostScore(){
	console.log("in calculate Pscore");
	console.log("age: " + age);
	console.log("gcs: " + gcs_total);
	console.log("ais_head_neck: " + ais_head_neck); 
	console.log("ais_chest: "+ ais_chest);
	console.log("ais_extrema: " + ais_extrem);
	console.log("cci: " + cci_index);
	console.log("amb_status:" + amb_status);
	console.log("anticoag:" + anticoag);
	console.log("asst_div" + asst_div);
	console.log("Albumin:" + albumin)
	console.log("Procedure:" + procedure)
	var p_power = -1 * (3.637 - 0.1 * age - 0.654 * gcs_total + 1.274 * ais_head_neck + 1.886 * ais_chest - 1.6 * ais_extrem + 0.364 * cci_index + 1.827 * anticoag + 0.862 * amb_status + 0.634 * asst_div - 1.228*albumin+ 14.955 * procedure[1]+
	11.893 * procedure[2]+ 15.927 * procedure[3]+ 18.094 * procedure[4]+ 17.627 * procedure[5]- 6.843*procedure[6]);
	console.log("power: " + p_power);
	var p_e_val = Math.exp(p_power);
	console.log("e_val" + p_e_val);
	pscore = 1/(1+ p_e_val);

	var rounded_pscore = pscore.toFixed(5);

	document.getElementById("pscore").setAttribute("placeholder", rounded_pscore);
}


