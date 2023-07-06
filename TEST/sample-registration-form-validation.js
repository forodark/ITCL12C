function {
	var uid = document.registration.userid;
	var passid = document.registration.passid;
	var uname = document.registration.username;
	var uadd = document.registration.address;
	var ucountry = document.registration.country;
	var uzip = document.registration.zip;
	var uemail = document.registration.email;
	var umsex = document.registration.msex;
	var ufsex = document.registration.fsex;

	if (userid validation(uid,5,12) {
		
	if (passid_validation(passid,7,12)) {
	
	if (allletter(uname)) {
	
	if (alphanumeric(uadd)) {
	
	if (countryselect(ucountry)) {
	
	if(alphanumeric(uzip)) {
	
	if (ValidateEmail(uemail)) {
	
	if (validsex(umsex,ufsex)) {
	}}}}}}}}
	return false;
	
	
	
}

function userid_validation(uid,mx,my) {
	var uid_len = uid.value.length;
	
	if (uid_len==0 || uid_len >= my || uid_len<mx) {
		alert("User ID length should be between " + mx + "and" + my);
		userid.focus();
		return false;
	}
	return true;
}

function passid_validation(passid,mx,my) {
	var uid_len = uid.value.length;
	
	if (passid_len==0 || passid_len >= my || passid_len<mx) {
		alert("Password length should be between " + mx + "and" + my);
		passid.focus();
		return false;
	}
	return true;
}

function allLetter(uname) {
	var letters = /^[A-Za-z]+$/;
	
	if (uname.value.match(letters)) {
		return true;
	}
	else {
		alert("Username must only contain alphanumeric characters");
		uname.focus();
		return false;
	}	
}

function alphanumeric(uadd) {
	var letters = /^[0-9A-Za-z]+$/;
	
	if (uadd.value.match(letters)) {
		return true;
	}
	else {
		alert("User address must only contain alphanumeric characters");
		uadd.focus();
		return false;
	}
}

function countryselect(ucountry) {
	if (ucountry.value == "Default") {
	alert("Select your country from te list");
	ucountry.focus();
	return false;
	}
	else {
		return true;
	}
}