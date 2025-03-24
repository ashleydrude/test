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
shape642.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"tobj642inner\"><svg viewBox=\"0 0 831 495\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(415.5 247.5)\" style=\"\">\n	<path d=\"M 123.75 0 L 707.25 0 A 123.75 123.75 0 0 1 831 123.75 L 831 371.25 A 123.75 123.75 0 0 1 707.25 495 L 123.75 495 A 123.75 123.75 0 0 1 0 371.25 L 0 123.75 A 123.75 123.75 0 0 1 123.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.65;filter:alpha(opacity=65); pointer-events: auto;\" transform=\"translate(0 0) translate(-415.5, -247.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(415.5 247.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.65;filter:alpha(opacity=65);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 83px; width: 831px; height: 495px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"642",
	htmlId:		"tobj642",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[88.99999999999994,83.00000000000011,831,495]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":89,"y":83,"width":831,"height":495},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle"}
};
text643.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 590px; min-height: 307px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 580px; min-height: 297px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Georgia, serif; font-size:16pt; color: rgb(9, 99, 177);\"><span style=\"font-size:20pt; color: rgb(9, 99, 177);\">Step 1:</span> </span></strong></p>\n\n<p style=\"text-align:left\"><span style=\"font-family: Georgia, serif; font-size:20pt; color: rgb(9, 99, 177);\">​</span></p>\n\n<p style=\"text-align:left\"><span style=\"font-family: Georgia, serif; font-size:16pt; color: rgb(9, 99, 177);\">Compare lenders and interest rates with each loan option.</span></p>\n\n<p style=\"text-align:left\"><span style=\"font-family: Georgia, serif; font-size:16pt; color: rgb(9, 99, 177);\">​</span></p>\n\n<p style=\"text-align:left\"><span style=\"font-size:16pt; font-family: Georgia, serif; color: rgb(9, 99, 177);\">Check with your personal bank or credit union and speak with your realtor about other lenders.</span></p>\n\n<p style=\"text-align:left\"><span style=\"font-size:16pt; font-family: Georgia, serif; color: rgb(9, 99, 177);\">​</span></p>\n\n<p style=\"text-align:left\"><span style=\"font-size:16pt; font-family: Georgia, serif; color: rgb(9, 99, 177);\">Your realtor likely has&nbsp;preferred lenders, but there are also lenders who offer special rates for teachers, first-time homebuyers, veterans, and other demographics. Explore your options before settling on a specific lender.</span></p>\n\n<p style=\"text-align:left\"><span style=\"font-family: Georgia, serif; font-size:16pt; color: rgb(9, 99, 177);\">​</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 178px; top: 146px; width: 590px; height: 307px; z-index: 1;",
	cssClasses:	"",
	id:		"643",
	htmlId:		"tobj643",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[178,146,590,307]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":178,"y":146,"width":590,"height":307},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image644.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj644Img\" src=\"images/Kelly%20Avatar.png\" alt=\"Kelly Avatar\" title=\"Kelly Avatar\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 662px; height: 662px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 511px; top: 11px; width: 662px; height: 662px; z-index: 2; border-radius: 0px;",
	cssClasses:	"",
	id:		"644",
	htmlId:		"tobj644",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kelly Avatar"
	},
	objData:	{"a":[0,288,0,[511,11,662,662]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":511,"y":11,"width":662,"height":662}}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Life%20is%20a%20Game%20Bkgrnd.png","images/Kelly%20Avatar.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: auto; visibility: hidden;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,1];
