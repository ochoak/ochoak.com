/*
 * Inaki lanz 
 * Oct-2012
 */


$.fn.writeMail = function (username,server){
	var e = $(this);
	var mail = username+"@"+server;

	$(e).text(mail);
	$(e).attr("href",'mailto:'+mail);
}

$.fn.writePhone = function (prefix,number){
	var e = $(this);
	var phone = "(+"+prefix+") "+number;

	$(e).text(phone);
}

$(function(){	
	$("a.mail").writeMail("inaki.lanz","ochoak.com");
	$("span.phone").writePhone("34","654 756 569");
});
