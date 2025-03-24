if (window.VarCurrentView) VarCurrentView.set('PhonePortrait');
function init_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

}
shape1568.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj1568inner\"><svg viewBox=\"0 0 392 49\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(196 24.5)\" style=\"\">\n	<path d=\"M 24.5 0 L 367.5 0 A 24.5 24.5 0 0 1 392 24.5 L 392 24.5 A 24.5 24.5 0 0 1 367.5 49 L 24.5 49 A 24.5 24.5 0 0 1 0 24.5 L 0 24.5 A 24.5 24.5 0 0 1 24.5 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55); pointer-events: auto;\" transform=\"translate(0 0) translate(-196, -24.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(196 24.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 25px; width: 392px; height: 49px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1568",
	htmlId:		"tobj1568",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Pill"
	},
	objData:	{"a":[0,32,0,[80,25.00000000000005,392,49]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":168,"y":25,"width":824,"height":103},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Pill","titleValue":"Pill"}
};
text1567.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 404px; min-height: 53px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 394px; min-height: 43px;\"><p style=\"text-align: center;\"><span style=\"font-size:36pt; color: rgb(255, 0, 255); font-family: Impact, sans-serif;\">Final Checklist for Move-In Readiness</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 81px; top: 37px; width: 404px; height: 53px; z-index: 1;",
	cssClasses:	"",
	id:		"1567",
	htmlId:		"tobj1567",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[81,37,404,53]],"rcdOvr":{"res":0},"textShadowEffect":{"opacity":"0.9","depth":8,"color":"#000000","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":171,"y":37,"width":849,"height":111},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape1566.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj1566inner\"><svg viewBox=\"0 0 462 240\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(231 120)\" style=\"\">\n	<path d=\"M 60 0 L 402 0 A 60 60 0 0 1 462 60 L 462 180 A 60 60 0 0 1 402 240 L 60 240 A 60 60 0 0 1 0 180 L 0 60 A 60 60 0 0 1 60 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-231, -120) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(231 120)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 10px; top: 135px; width: 462px; height: 240px; z-index: 2; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1566",
	htmlId:		"tobj1566",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[9.999999999999972,135.00000000000006,462,240]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":135,"width":971,"height":505},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle"}
};
text1565.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 301px; min-height: 142px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 291px; min-height: 132px;\"><ul style=\"padding-inline-start: 27px;\">\n	<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n	<p><span><strong><span style=\"font-size:14pt; font-family:Georgia, serif; color:rgb(89, 126, 170)\">Develop a final move-in day checklist to ensure that nothing is overlooked. Include reminders to:</span></strong></span></p>\n\n	<ul style=\"padding-inline-start: 27px;\">\n		<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n		<p><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif; font-size:14pt;\">Double-check all arrangements</span></strong></p>\n		</li>\n		<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n		<p><strong style=\"null\"><span style=\"font-size:14pt; color: rgb(89, 126, 170); font-family: Georgia, serif;\">Pack essentials documents and personal valuables separately</span></strong></p>\n		</li>\n		<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n		<p><strong style=\"null\"><span style=\"font-size:14pt; color: rgb(89, 126, 170); font-family: Georgia, serif;\">Complete any final cleaning of the new home if necessary</span></strong></p>\n		</li>\n	</ul>\n	</li>\n</ul>\n\n<p><strong style=\"null\"><span style=\"font-size:14pt; color: rgb(89, 126, 170); font-family: Georgia, serif;\">​</span></strong></p>\n\n<p></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 37px; top: 238px; width: 301px; height: 142px; z-index: 3;",
	cssClasses:	"",
	id:		"1565",
	htmlId:		"tobj1565",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[37,238,301,142]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":238,"width":633,"height":299},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image1564.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj1564Img\" src=\"images/Kelly%20Avatar.png\" alt=\"Kelly Avatar\" title=\"Kelly Avatar\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 315px; height: 315px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 240px; top: 63px; width: 315px; height: 315px; z-index: 4; border-radius: 0px;",
	cssClasses:	"",
	id:		"1564",
	htmlId:		"tobj1564",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kelly Avatar"
	},
	objData:	{"a":[0,288,0,[240,63,315,315]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":505,"y":63,"width":662,"height":662}}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	65
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/Life%20is%20a%20Game%20Bkgrnd.png","images/Kelly%20Avatar.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 763px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: 480px 315px; visibility: hidden;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,0.4757185332011893];
