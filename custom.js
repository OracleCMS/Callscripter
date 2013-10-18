// Returns a string with a Greeting (eg. Good Morning) based on the hours
// value given.
function greetingTime(hours)
{
	// Create a Date object.
	var d = new Date();
	
	// Set hours to the one specified.
	if (hours !== undefined)
		d.setHours(hours);
	
	var output;

	// Between 4am and 12pm
	if (d.getHours() >= '4' && d.getHours() < '12')
		output = 'Good Morning';
		
	// Between 12pm and 6pm
	else if (d.getHours() >= '12' && d.getHours() < '18')
		output = 'Good Afternoon';
		
	// Between 6pm and 10pm
	else if (d.getHours() >= '18' && d.getHours() < '22')
		output = 'Good Evening';
		
	// All others
	else
		output = 'Hello';
	
	return output;
}

// Returns a string with a Greeting (eg. Good Morning) based on the current
// system time.
function greeting()
{
	// Get current date and time
	var d = new Date();
	
	// Return a greeting string given the current hours
	return greetingTime(d.getHours());
}

// Validates a telephone (landline) number. Returns true if valid, or an error message if not.
function isValidTelNumber(telNumber)
{
	// Remove whitespace from string
	var temp = telNumber.replace(/\s+/g, '');
	
	// Check if blank
	if (temp == '')
		return 'Please enter Tel Number.';
	
	// Make number uppercase (in the case of 'DECLINED' being entered).
	temp = temp.toUpperCase();
	
	// Return true/false whether number is valid.
	if (temp == 'DECLINED')
		return true;
	else
	{
		// Regex - must start with 0, next number between 0 and 8, then 8 digits
		var phonePattern = /^0[0-8]\d{8}$/g;
		
		// Test and return result.
		if (phonePattern.test(temp))
			return true;
		else
			return 'Invalid Tel Number. Tel numbers should be 10 digits including STD!';
	}
}

// Formats a telephone (landline) number. Returns formatted string if number
// is valid, or the same string if not. Should be used with isValidTelNumber
// to check for errors.
//
// -- Example Usage: [Tel Number] = formatTelNumber([Tel Number]);
function formatTelNumber(telNumber)
{
	// Remove whitespace from string
	var temp = telNumber.replace(/\s+/g, '');
	
	// Make number uppercase (in the case of 'DECLINED' being entered).
	temp = temp.toUpperCase();
	
	// If number is blank or declined, just remove whitespace.
	if (temp == '' || temp == 'DECLINED')
		return temp;
	
	// Check whether number is valid.
	if (isValidTelNumber(temp) != true)
		return telNumber; // <- don't change string
	
	// Format number as '## #### ####'.
	var output = temp.substring(0, 2)
				 + ' '
				 + temp.substring(2, 6)
				 + ' '
				 + temp.substring(6);
				 
	return output;
}

// Validates a mobile telephone number. Returns true if valid, or an error message if not.
function isValidMobileTelNumber(mobileTelNumber)
{
	// Remove whitespace from string
	var temp = mobileTelNumber.replace(/\s+/g, '');
	
	// Check if blank
	if (temp == '')
		return 'Please enter Mobile Tel Number.';
	
	// Make number uppercase (in the case of 'DECLINED' being entered).
	temp = temp.toUpperCase();
	
	// Return true/false whether number is valid.
	if (temp == 'DECLINED')
		return true;
	else
	{
		// Regex - must start with 04, then 8 digits
		var phonePattern = /^04\d{8}$/g;
		
		// Test and return result.
		if (phonePattern.test(temp))
			return true;
		else
			return 'Invalid Mobile Tel Number. Mobile numbers should start with 04 followed by 8 digits!';
	}
}

// Formats a mobile telephone number. Returns formatted string if number
// is valid, or the same string if not. Should be used with isValidMobileTelNumber
// to check for errors.
//
// -- Example Usage: [Mobile Tel Number] = formatMobileTelNumber([Mobile Tel Number]);
function formatMobileTelNumber(mobileTelNumber)
{
	// Remove whitespace from string
	var temp = mobileTelNumber.replace(/\s+/g, '');
	
	// Make number uppercase (in the case of 'DECLINED' being entered).
	temp = temp.toUpperCase();
	
	// If number is blank or declined, just remove whitespace.
	if (temp == '' || temp == 'DECLINED')
		return temp;
		
	// Check whether number is valid.
	if (isValidMobileTelNumber(temp) != true)
		return mobileTelNumber; // <- don't change string
	
	// Format number as '#### ### ###'.
	var output = temp.substring(0, 4)
				 + ' '
				 + temp.substring(4, 7)
				 + ' '
				 + temp.substring(7);
				 
	return output;
}

// Checks to see whether at least one phone number is valid.
// First argument for Tel Number, second argument for Mobile Tel Number.
// This is designed to be used with a Conditional Button.
function isValidPhones(telNumber, mobileTelNumber)
{
	return (isValidTelNumber(telNumber) == true) || (isValidMobileTelNumber(mobileTelNumber) == true);
}

// Hides the div with the given id. (ie. no parentElements)
function hideDiv(id)
{
	document.getElementById(id).style.display = 'none';
}

// Shows the div with the given id. (ie. no parentElements)
function showDiv(id)
{
	document.getElementById(id).style.display = '';
}

// Hides the given CallScripter Object (ie. two parentElements)
// TODO: I would like to find a better solution for this one.
//
// -- Example Usage: hideCSObject(getCSObject([Button]));
function hideCSObject(obj)
{
	obj.parentElement.parentElement.style.display = 'none';
}

// Shows the given CallScripter Object (ie. two parentElements)
// TODO: I would like to find a better solution for this one.
//
// -- Example Usage: showCSObject(getCSObject([Button]));
function showCSObject(obj)
{
	obj.parentElement.parentElement.style.display = '';
}

// Hides the given Text Label (ie. two parentElements).
//
// To use this, wrap your text label in <div> tags, giving the div an id.
//
// -- Example Usage:
// -- Text Label: <div id=Advisory>Here is some text</div>
// -- Function Call: hideTextLabel('Advisory');
function hideTextLabel(id)
{
	document.getElementById(id).parentElement.parentElement.style.display = 'none';
}

// Shows the given Text Label (ie. two parentElements).
//
// To use this, wrap your text label in <div> tags, giving the div an id.
//
// -- Example Usage:
// -- Text Label: <div id=Advisory>Here is some text</div>
// -- Function Call: showTextLabel('Advisory');
function showTextLabel(id)
{
	document.getElementById(id).parentElement.parentElement.style.display = '';
}

// Hides the given Sticky Note (ie. four parentElements).
//
// To use this, wrap your sticky note text in <div> tags, giving the div an id.
//
// -- Example Usage:
// -- Sticky Note Text: <div id=Advisory>Agent Note: Hello</div>
// -- Function Call: hideStickyNote('Advisory');
function hideStickyNote(id)
{
	document.getElementById(id).parentElement.parentElement.parentElement.parentElement.style.display = 'none';
}

// Shows the given Sticky Note (ie. four parentElements).
//
// To use this, wrap your sticky note text in <div> tags, giving the div an id.
//
// -- Example Usage:
// -- Sticky Note Text: <div id=Advisory>Agent Note: Hello</div>
// -- Function Call: showStickyNote('Advisory');
function showStickyNote(id)
{
	document.getElementById(id).parentElement.parentElement.parentElement.parentElement.style.display = '';
}

// Validates an email address. Returns true if valid, or an error message if not.
function isValidEmail(email)
{
	// Remove whitespace from string
	var temp = email.replace(/\s+/g, '');
	
	// Check if blank
	if (temp == '')
		return 'Please enter Email Address.';
	
	// Make email lowercase
	temp = temp.toLowerCase();
	
	// Return true/error whether email is valid.
	if (temp == 'declined')
		return true;
	else if (temp.search(/[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z0-9_.-]+/gi) != 0)
		return 'Invalid Email Address!';
	else
		return true;
}

// Formats an email address. Returns formatted string if email
// is valid, or the same string if not. Should be used with isValidEmail
// to check for errors.
//
// -- Example Usage: [E-Mail Address] = formatEmail([E-Mail Address]);
function formatEmail(email)
{
	// Remove whitespace from string
	var temp = email.replace(/\s+/g, '');
	
	// Make email lowercase
	temp = temp.toLowerCase();
	
	// If email is blank or declined, just remove whitespace and make lowercase.
	if (temp == '' || temp == 'declined')
		return temp;
		
	// Check whether number is valid.
	if (isValidEmail(temp) != true)
		return email; // <- don't change string
	
	return temp;
}

// Returns true/false whether it is currently after hours.
// startTime = start of business hours. eg. '09:00'
// endTime = end of business hours. eg. '17:00'
function isAfterHoursTime(startTime, endTime)
{
	//var Days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
	var Today = new Date();
	//var DayOfWeek = Days[ Today.getDay() ];
	
	// Sunday and Saturday always after hours.
	if (Today.getDay() == 0 || Today.getDay() == 6)
		return true;
	
	var now = new Date();
	var a = now.getHours();
	if (a < 10) a = '0' + a;
	var b = now.getMinutes();
	if (b < 10) b = '0' + b;
	
	var time = a+':'+b;
	
	// Day must be Monday to Friday.
	if (time < startTime || time > endTime)
		return true;
	else
		return false;
}

// Returns true/false whether it is currently after hours
// with a default value of 9am to 5pm.
function isAfterHours()
{
	return isAfterHoursTime('09:00', '17:05');
}

// Returns 'Weekend' if today is Saturday or Sunday.
// Returns 'Weekday' otherwise.
function getDayType()
{
	var Today = new Date();
	if (Today.getDay() == 0 || Today.getDay() == 6)
		return 'Weekend';
	else
		return 'Weekday';
}

// Formats a mobile telephone number into an SMS email address.
// eg. 0400 111 222 = 61400111222@sms.oraclecms.com
function formatSMS(mobileTelNumber)
{
	// Remove whitespace from string
	var temp = mobileTelNumber.replace(/\s+/g, '');
	
	// Check if string contains numbers only
	if ((/^\d+$/).test(temp))
	{
		// Check if number is in format: 61400111222, return 61400111222@sms.oraclecms.com
		if (temp.substring(0, 3) == '614' && isValidMobileTelNumber('0' + temp.substring(1)) == true)
			return temp + '@sms.oraclecms.com';
		// Check if number is in format: 0400111222, return 61400111222@sms.oraclecms.com
		else if (isValidMobileTelNumber(temp) == true)
			return '61' + temp.substring(1) + '@sms.oraclecms.com';
		// If number format is invalid, return false.
		else
			return false;
	}
	// String contains non-digits, return false.
	else
		return false;
}

// Returns true if string is a valid SMS email address, false if not.
// Format: 61#########@sms.oraclecms.com (Australia)
function isValidSMS(sms)
{
	return (/^61\d{9}@sms\.oraclecms\.com$/).test(sms);
}

// Validates a New Zealand telephone (landline) number. Returns true if valid, or an error message if not.
// Should accept only 03, 04, 06, 07, 09 - plus 7 digits - xx xxx xxxx
function isValidNZTelNumber(nzTelNumber)
{
	// Remove whitespace from string
	var temp = nzTelNumber.replace(/\s+/g, '');
	
	// Check if blank
	if (temp == '')
		return 'Please enter NZ Tel Number.';
	
	// Make number uppercase (in the case of 'DECLINED' being entered).
	temp = temp.toUpperCase();
	
	// Return true/false whether number is valid.
	if (temp == 'DECLINED')
		return true;
	else
	{
		// Regex - must start with 03, 04, 06, 07, or 09, then 7 digits
		var phonePattern = /^0[34679]\d{7}$/g;
		
		// Test and return result.
		if (phonePattern.test(temp))
			return true;
		else
			return 'Invalid NZ Tel Number. NZ Tel numbers should be 9 digits including STD!';
	}
}

// Formats a New Zealand telephone (landline) number. Returns formatted string if number
// is valid, or the same string if not. Should be used with isValidNZTelNumber
// to check for errors.
// Should accept only 03, 04, 06, 07, 09 - plus 7 digits - xx xxx xxxx
//
// -- Example Usage: [Tel Number] = formatNZTelNumber([Tel Number]);
function formatNZTelNumber(nzTelNumber)
{
	// Remove whitespace from string
	var temp = nzTelNumber.replace(/\s+/g, '');
	
	// Make number uppercase (in the case of 'DECLINED' being entered).
	temp = temp.toUpperCase();
	
	// If number is blank or declined, just remove whitespace.
	if (temp == '' || temp == 'DECLINED')
		return temp;
	
	// Check whether number is valid.
	if (isValidNZTelNumber(temp) != true)
		return nzTelNumber; // <- don't change string
	
	// Format number as '## ### ####'.
	var output = temp.substring(0, 2)
				 + ' '
				 + temp.substring(2, 5)
				 + ' '
				 + temp.substring(5);
				 
	return output;
}

// Validates a New Zealand mobile telephone number. Returns true if valid, or an error message if not.
// Should accept only 02, - plus 7 to 9 digits - xxx xxx xxx / xxx xxxx xxx / xxx xxxx xxxx
function isValidNZMobileTelNumber(nzMobileTelNumber)
{
	// Remove whitespace from string
	var temp = nzMobileTelNumber.replace(/\s+/g, '');
	
	// Check if blank
	if (temp == '')
		return 'Please enter NZ Mobile Tel Number.';
	
	// Make number uppercase (in the case of 'DECLINED' being entered).
	temp = temp.toUpperCase();
	
	// Return true/false whether number is valid.
	if (temp == 'DECLINED')
		return true;
	else
	{
		// Regex - must start with 02, then 7 to 9 digits
		var phonePattern = /^02(\d{7}|\d{8}|\d{9})$/g;
		
		// Test and return result.
		if (phonePattern.test(temp))
			return true;
		else
			return 'Invalid NZ Mobile Tel Number. NZ Mobile Tel numbers should start with 02 followed by 7 to 9 digits!';
	}
}

// Formats a mobile telephone number. Returns formatted string if number
// is valid, or the same string if not. Should be used with isValidNZMobileTelNumber
// to check for errors.
// Should accept only 02, - plus 7 to 9 digits - xxx xxx xxx / xxx xxxx xxx / xxx xxxx xxxx
//
// -- Example Usage: [Mobile Tel Number] = formatNZMobileTelNumber([Mobile Tel Number]);
function formatNZMobileTelNumber(nzMobileTelNumber)
{
	// Remove whitespace from string
	var temp = nzMobileTelNumber.replace(/\s+/g, '');
	
	// Make number uppercase (in the case of 'DECLINED' being entered).
	temp = temp.toUpperCase();
	
	// If number is blank or declined, just remove whitespace.
	if (temp == '' || temp == 'DECLINED')
		return temp;
	
	// Check whether number is valid.
	if (isValidNZMobileTelNumber(temp) != true)
		return nzMobileTelNumber; // <- don't change string
	
	// Format number as ### ### ### / ### #### ### / ### #### ####.
	var gap;
	
	// Add a gap before 6th (zero-index) number
	if (temp.length == 9)
		gap = 6;
	// Add a gap before 7th (zero-index) number
	else if (temp.length == 10 || temp.length == 11)
		gap = 7;
	
	// Build output
	var output = '';
	
	for (var i = 0; i < temp.length; ++i)
	{
		// Add a gap where needed
		if (i == 2 || i == gap)
			output += ' ';
		
		// Append next character
		output += temp.charAt(i);
	}
	
	// Return output string
	return output;
}

// Checks to see whether at least one phone number is valid.
// First argument for Tel Number, second argument for Mobile Tel Number.
// This is designed to be used with a Conditional Button.
function isValidNZPhones(nzTelNumber, nzMobileTelNumber)
{
	return (isValidNZTelNumber(nzTelNumber) == true) || (isValidNZMobileTelNumber(nzMobileTelNumber) == true);
}

// Returns true if string is a valid Pager email address, false if not.
// Format: ######.0000@e2m.hutch.com.au
function isValidPager(pager)
{
	return (/^\d{6}\.0000@e2m\.hutch\.com\.au$/).test(pager);
}
