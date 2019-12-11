$(document).ready(function() {

	var rellax = new Rellax(".rellax");

	$(".navicon").click(function() {
		$(this).fadeOut("fast");
		$(".navicon2").fadeOut("slow");
		$(".navclose").delay(160).fadeIn("fast");
		$(".navmenu").delay(160).fadeIn("fast");
		$(".genbutton").delay(160).fadeIn("fast");
		$(".effectsbutton").delay(160).fadeIn("fast");
		$(".campusbutton").delay(160).fadeIn("fast");
		$(".externalbutton").delay(160).fadeIn("fast");
		$(".campaignsbutton").delay(160).fadeIn("fast");
		$(".navicon1").animate({top: "+=8.5px"}, "slow");
		$(".navicon1").css({"transform" : "rotate("+ 40 +"deg)"}, "slow");
		$(".navicon3").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ -40 +"deg)"}, "slow");
	});

	$(".navicon1").click(function() {
		$(".navicon").fadeOut("fast");
		$(".navicon2").fadeOut("slow");
		$(".navclose").delay(160).fadeIn("fast");
		$(".navmenu").delay(160).fadeIn("fast");
		$(".genbutton").delay(160).fadeIn("fast");
		$(".effectsbutton").delay(160).fadeIn("fast");
		$(".campusbutton").delay(160).fadeIn("fast");
		$(".externalbutton").delay(160).fadeIn("fast");
		$(".campaignsbutton").delay(160).fadeIn("fast");
		$(".navicon1").animate({top: "+=8.5px"}, "slow");
		$(".navicon1").css({"transform" : "rotate("+ 40 +"deg)"}, "slow");
		$(".navicon3").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ -40 +"deg)"}, "slow");
	});

	$(".navicon2").click(function() {
		$(".navicon").fadeOut("fast");
		$(".navicon2").fadeOut("slow");
		$(".navclose").delay(160).fadeIn("fast");
		$(".navmenu").delay(160).fadeIn("fast");
		$(".genbutton").delay(160).fadeIn("fast");
		$(".effectsbutton").delay(160).fadeIn("fast");
		$(".campusbutton").delay(160).fadeIn("fast");
		$(".externalbutton").delay(160).fadeIn("fast");
		$(".campaignsbutton").delay(160).fadeIn("fast");
		$(".navicon1").animate({top: "+=8.5px"}, "slow");
		$(".navicon1").css({"transform" : "rotate("+ 40 +"deg)"}, "slow");
		$(".navicon3").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ -40 +"deg)"}, "slow");
	});

	$(".navicon3").click(function() {
		$(".navicon").fadeOut("fast");
		$(".navicon2").fadeOut("slow");
		$(".navclose").delay(160).fadeIn("fast");
		$(".navmenu").delay(160).fadeIn("fast");
		$(".genbutton").delay(160).fadeIn("fast");
		$(".effectsbutton").delay(160).fadeIn("fast");
		$(".campusbutton").delay(160).fadeIn("fast");
		$(".externalbutton").delay(160).fadeIn("fast");
		$(".campaignsbutton").delay(160).fadeIn("fast");
		$(".navicon1").animate({top: "+=8.5px"}, "slow");
		$(".navicon1").css({"transform" : "rotate("+ 40 +"deg)"}, "slow");
		$(".navicon3").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ -40 +"deg)"}, "slow");
	});

	$(".navclose").click(function() {
		$(this).fadeOut("fast");
		$(".navicon2").fadeIn("fast");
		$(".navmenu").fadeOut("fast");
		$(".navicon").fadeIn("fast");
		$(".genbutton").fadeOut("fast");
		$(".effectsbutton").fadeOut("fast");
		$(".campusbutton").fadeOut("fast");
		$(".externalbutton").fadeOut("fast");
		$(".campaignsbutton").fadeOut("fast");
		$(".navicon1").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon1").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon3").animate({top: "+=8.5px"}, "slow");
	});

	$(".genbutton").click(function() {
		$('body,html').animate({scrollTop: 900}, 1000);
		$(this).fadeOut("fast");
		$(".navicon2").fadeIn("fast");
		$(".navmenu").fadeOut("fast");
		$(".navicon").fadeIn("fast");
		$(".navclose").fadeOut("fast");
		$(".effectsbutton").fadeOut("fast");
		$(".campusbutton").fadeOut("fast");
		$(".externalbutton").fadeOut("fast");
		$(".campaignsbutton").fadeOut("fast");
		$(".navicon1").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon1").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon3").animate({top: "+=8.5px"}, "slow");
	});

	$(".effectsbutton").click(function() {
		$('body,html').animate({scrollTop: 1800}, 1000);
		$(this).fadeOut("fast");
		$(".navicon2").fadeIn("fast");
		$(".navmenu").fadeOut("fast");
		$(".navicon").fadeIn("fast");
		$(".navclose").fadeOut("fast");
		$(".genbutton").fadeOut("fast");
		$(".campusbutton").fadeOut("fast");
		$(".externalbutton").fadeOut("fast");
		$(".campaignsbutton").fadeOut("fast");
		$(".navicon1").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon1").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon3").animate({top: "+=8.5px"}, "slow");
	});

	$(".campusbutton").click(function() {
		$('body,html').animate({scrollTop: 2700}, 1000);
		$(this).fadeOut("fast");
		$(".navicon2").fadeIn("fast");
		$(".navmenu").fadeOut("fast");
		$(".navicon").fadeIn("fast");
		$(".navclose").fadeOut("fast");
		$(".genbutton").fadeOut("fast");
		$(".effectsbutton").fadeOut("fast");
		$(".externalbutton").fadeOut("fast");
		$(".campaignsbutton").fadeOut("fast");
		$(".navicon1").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon1").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon3").animate({top: "+=8.5px"}, "slow");
	});

	$(".externalbutton").click(function() {
		$('body,html').animate({scrollTop: 4350}, 1000);
		$(this).fadeOut("fast");
		$(".navicon2").fadeIn("fast");
		$(".navmenu").fadeOut("fast");
		$(".navicon").fadeIn("fast");
		$(".navclose").fadeOut("fast");
		$(".genbutton").fadeOut("fast");
		$(".effectsbutton").fadeOut("fast");
		$(".campusbutton").fadeOut("fast");
		$(".campaignsbutton").fadeOut("fast");
		$(".navicon1").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon1").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon3").animate({top: "+=8.5px"}, "slow");
	});

	$(".campaignsbutton").click(function() {
		$('body,html').animate({scrollTop: 5725}, 1000);
		$(this).fadeOut("fast");
		$(".navicon2").fadeIn("fast");
		$(".navmenu").fadeOut("fast");
		$(".navicon").fadeIn("fast");
		$(".navclose").fadeOut("fast");
		$(".genbutton").fadeOut("fast");
		$(".effectsbutton").fadeOut("fast");
		$(".campusbutton").fadeOut("fast");
		$(".externalbutton").fadeOut("fast");
		$(".navicon1").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon1").animate({top: "-=8.5px"}, "slow");
		$(".navicon3").css({"transform" : "rotate("+ 0 +"deg)"}, "slow");
		$(".navicon3").animate({top: "+=8.5px"}, "slow");
	});

});