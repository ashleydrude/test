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
shape1541.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"tobj1541inner\"><svg viewBox=\"0 0 824 103\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(412 51.5)\" style=\"\">\n	<path d=\"M 51.5 0 L 772.5 0 A 51.5 51.5 0 0 1 824 51.5 L 824 51.5 A 51.5 51.5 0 0 1 772.5 103 L 51.5 103 A 51.5 51.5 0 0 1 0 51.5 L 0 51.5 A 51.5 51.5 0 0 1 51.5 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55); pointer-events: auto;\" transform=\"translate(0 0) translate(-412, -51.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(412 51.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 168px; top: 25px; width: 824px; height: 103px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1541",
	htmlId:		"tobj1541",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Pill"
	},
	objData:	{"a":[0,32,0,[168,25.0000000000001,824,103]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":168,"y":25,"width":824,"height":103},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Pill","titleValue":"Pill"}
};
text1542.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 849px; min-height: 111px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 839px; min-height: 101px;\"><p style=\"text-align: center;\"><span style=\"font-size:36pt; color: rgb(255, 0, 255); font-family: Impact, sans-serif;\">Hiring a Moving Company vs. DIY Move</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 171px; top: 37px; width: 849px; height: 111px; z-index: 1;",
	cssClasses:	"",
	id:		"1542",
	htmlId:		"tobj1542",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[171,37,849,111]],"rcdOvr":{"res":0},"textShadowEffect":{"opacity":"0.9","depth":8,"color":"#000000","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":171,"y":37,"width":849,"height":111},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape1537.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"tobj1537inner\"><svg viewBox=\"0 0 971 505\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485.5 252.5)\" style=\"\">\n	<path d=\"M 126.25 0 L 844.75 0 A 126.25 126.25 0 0 1 971 126.25 L 971 378.75 A 126.25 126.25 0 0 1 844.75 505 L 126.25 505 A 126.25 126.25 0 0 1 0 378.75 L 0 126.25 A 126.25 126.25 0 0 1 126.25 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-485.5, -252.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485.5 252.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 21px; top: 135px; width: 971px; height: 505px; z-index: 2; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1537",
	htmlId:		"tobj1537",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[20.999999999999943,135.0000000000001,971,505]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":135,"width":971,"height":505},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle"}
};
text1546.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 633px; min-height: 243px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 623px; min-height: 233px;\"><ul style=\"padding-inline-start: 27px;\">\n	<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n	<p><span><strong><span style=\"color: rgb(89, 126, 170); font-size:14pt; font-family: Georgia, serif;\">Research local moving companies, noting costs, availability, and services offered (e.g., packing, loading/unloading).</span></strong></span></p>\n	</li>\n</ul>\n\n<p><strong style=\"null\"><span style=\"font-size:14pt; color: rgb(89, 126, 170); font-family: Georgia, serif;\">​</span></strong></p>\n\n<ul style=\"padding-inline-start: 27px;\">\n	<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n	<p><strong><span style=\"color: rgb(89, 126, 170); font-size:14pt; font-family: Georgia, serif;\">Consider the pros and cons of hiring professionals versus handling the move yourself. If handling it yourself, outline key steps for renting a moving truck, securing help, and obtaining packing materials.</span></strong></p>\n	</li>\n</ul>\n\n<p><strong style=\"null\"><span style=\"font-size:14pt; color: rgb(89, 126, 170); font-family: Georgia, serif;\">​</span></strong></p>\n\n<ul style=\"padding-inline-start: 27px;\">\n	<li style=\"font-family: Georgia, serif; font-size:14pt; color: rgb(89, 126, 170);\">\n	<p><strong><span style=\"color: rgb(89, 126, 170); font-size:14pt; font-family: Georgia, serif;\">Make a final decision, and if hiring a company, schedule the moving date.</span></strong></p>\n	</li>\n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 72px; top: 264px; width: 633px; height: 243px; z-index: 3;",
	cssClasses:	"",
	id:		"1546",
	htmlId:		"tobj1546",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[72,264,633,243]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":72,"y":264,"width":633,"height":243},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image1547.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1547Img\" src=\"images/Kelly%20Avatar.png\" alt=\"Kelly Avatar\" title=\"Kelly Avatar\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 662px; height: 662px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 505px; top: 63px; width: 662px; height: 662px; z-index: 4; border-radius: 0px;",
	cssClasses:	"",
	id:		"1547",
	htmlId:		"tobj1547",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kelly Avatar"
	},
	objData:	{"a":[0,288,0,[505,63,662,662]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":505,"y":63,"width":662,"height":662}}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	60
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Life%20is%20a%20Game%20Bkgrnd.png","images/Kelly%20Avatar.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: auto; visibility: hidden;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,1];
