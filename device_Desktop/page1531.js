if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

}
text1559.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 849px; min-height: 111px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 839px; min-height: 101px;\"><p style=\"text-align: center;\"><span style=\"font-size:36pt; color: rgb(255, 0, 255); font-family: Impact, sans-serif;\">Coordinating Move-In Day Logistics</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 171px; top: 37px; width: 849px; height: 111px; z-index: 0;",
	cssClasses:	"",
	id:		"1559",
	htmlId:		"tobj1559",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[171,37,849,111]],"rcdOvr":{"res":0},"textShadowEffect":{"opacity":"0.9","depth":8,"color":"#000000","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":171,"y":37,"width":849,"height":111},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text1557.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 633px; min-height: 299px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 623px; min-height: 289px;\"><ul style=\"padding-inline-start: 27px;\">\n	<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n	<p><strong><span style=\"font-size:14pt; font-family:Georgia, serif; color:rgb(89, 126, 170)\">Plan a timeline for move-in day, including when to start packing, loading, and traveling to the new home.</span></strong></p>\n	</li>\n</ul>\n\n<p><strong style=\"null\"><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif; font-size:14pt;\">​</span></strong></p>\n\n<ul style=\"padding-inline-start: 27px;\">\n	<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n	<p><span><strong><span style=\"color: rgb(89, 126, 170); font-size:14pt; font-family: Georgia, serif;\">Determine which items are essential for the first day in your new home (e.g., toiletries, bedding, basic kitchen items) and pack them separately</span></strong></span></p>\n	</li>\n</ul>\n\n<p><strong style=\"null\"><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif; font-size:14pt;\">​</span></strong></p>\n\n<ul style=\"padding-inline-start: 27px;\">\n	<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n	<p><strong><span style=\"color: rgb(89, 126, 170); font-size:14pt; font-family: Georgia, serif;\">Assign tasks for any friends or family members assisting with the move to help things run smoothly.</span></strong></p>\n	</li>\n</ul>\n\n<p><strong style=\"null\"><span style=\"font-size:14pt; color: rgb(89, 126, 170); font-family: Georgia, serif;\">​</span></strong></p>\n\n<ul style=\"padding-inline-start: 27px;\">\n	<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n	<p><strong><span style=\"font-size:14pt; font-family:Georgia, serif; color:rgb(89, 126, 170)\">Check in with all involved parties (moving company, helpers, service providers) a few days before to confirm all details.</span></strong></p>\n	</li>\n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 238px; width: 633px; height: 299px; z-index: 1;",
	cssClasses:	"",
	id:		"1557",
	htmlId:		"tobj1557",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[78,238,633,299]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":238,"width":633,"height":299},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	62
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Life%20is%20a%20Game%20Bkgrnd.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: auto; visibility: hidden;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,1];
