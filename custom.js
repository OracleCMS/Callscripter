// Returns a string with a Greeting (eg. Good Morning) based on the current
// system time.
function greeting()
{
	// Get current date and time
	var d = new Date();
	var str;

	// Between 4am and 12pm
	if (d.getHours() >= '4' && d.getHours() < '12')
		str = 'Good Morning';
		
	// Between 12pm and 6pm
	else if (d.getHours() >= '12' && d.getHours() < '18')
		str = 'Good Afternoon';
		
	// Between 6pm and 10pm
	else if (d.getHours() >= '18' && d.getHours() < '22')
		str = 'Good Evening';
		
	// All others
	else
		str = 'Hello';
	
	return str;
}

// Validates a telephone (landline) number. Returns true if valid, false if not.
function isValidTelNumber(telNumber)
{
	// Remove whitespace from string
	var temp = telNumber.replace(/\s+/g, '');
	
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
		return phonePattern.test(temp);
	}
}

// Formats a telephone (landline) number. Returns formatted string if number
// is valid, or the same string with an alert() if not.
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
	if (!isValidTelNumber(temp))
	{
		alert('Invalid Tel Number. Tel numbers should be 10 digits including STD!');
		return telNumber; // <- don't change string
	}
	
	// Format number as '## #### ####'.
	var output = temp.substring(0, 2)
				 + ' '
				 + temp.substring(2, 6)
				 + ' '
				 + temp.substring(6);
				 
	return output;
}

// Validates a mobile telephone number. Returns true if valid, false if not.
function isValidMobileTelNumber(mobileTelNumber)
{
	// Remove whitespace from string
	var temp = mobileTelNumber.replace(/\s+/g, '');
	
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
		return phonePattern.test(temp);
	}
}

// Formats a mobile telephone number. Returns formatted string if number
// is valid, or the same string with an alert() if not.
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
	if (!isValidMobileTelNumber(temp))
	{
		alert('Invalid Mobile Tel Number. Mobile numbers should begin with 04!');
		return mobileTelNumber; // <- don't change string
	}
	
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
	return isValidTelNumber(telNumber) || isValidMobileTelNumber(mobileTelNumber);
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
