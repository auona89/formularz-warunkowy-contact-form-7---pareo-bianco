/*! jQuery script to hide certain form fields */

$(document).ready(function() {

	//Hide the field initially
	$("#hide1").hide();
	$("#hide2").show();
	$("#hide3").hide();
	$("#hide4").hide();
	$("#hide5").show();
	$("#hide6").hide();
	$("#hide7").hide();
	$("#hide8").hide();
	//Show the text field only when the third option is chosen - this doesn't
	$('#awesome').change(function() {
		if ($("#awesome").val() == "Frota Pętelka") {
			$("#hide1").show();
			$("#hide2").hide();
		}
		 else if
			($("#awesome").val() == "Wafel") {
			$("#hide1").hide();
			$("#hide2").hide();
			$("#hide3").show();
		}
		else if ($("#awesome").val() == "Frota Strzyżona") {
			$("#hide1").hide();
			$("#hide2").show();
			$("#hide3").hide()
		}
	});
	$('#meski').change(function() {
		if ($("#meski").val() == "Frota Pętelka") {
			$("#hide4").show();
			$("#hide5").hide();
		}
		 else if
			($("#meski").val() == "Wafel") {
			$("#hide4").hide();
			$("#hide5").hide();
			$("#hide6").show();
		}
		else if ($("#meski").val() == "Frota Strzyżona") {
			$("#hide4").hide();
			$("#hide5").show();
			$("#hide6").hide()
		}
	});
	$('#fv').change(function() {
		if ($("#fv").val() == "Tak") {
			$("#hide7").show()
			}
		else if ($("#fv").val() == "Nie") {
			$("#hide7").hide()
			}
});
$('#fv2').change(function() {
		if ($("#fv2").val() == "Tak") {
			$("#hide8").show()
			}
		else if ($("#fv2").val() == "Nie") {
			$("#hide8").hide()
			}
});
});