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
shape793.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"tobj793inner\"><svg viewBox=\"0 0 960 610\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(480 305)\" style=\"\">\n	<path d=\"M 152.5 0 L 807.5 0 A 152.5 152.5 0 0 1 960 152.5 L 960 457.5 A 152.5 152.5 0 0 1 807.5 610 L 152.5 610 A 152.5 152.5 0 0 1 0 457.5 L 0 152.5 A 152.5 152.5 0 0 1 152.5 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.65;filter:alpha(opacity=65); pointer-events: auto;\" transform=\"translate(0 0) translate(-480, -305) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(480 305)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.65;filter:alpha(opacity=65);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 25px; top: 31px; width: 960px; height: 610px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"793",
	htmlId:		"tobj793",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[24.999999999999943,31.000000000000114,960,610]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":31,"width":960,"height":610},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle"}
};
text794.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 368px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 358px; min-height: 37px;\"><p style=\"text-align:left\"><span style=\"color: rgb(9, 99, 177); font-family: Impact, sans-serif; font-size:18pt;\">Step 4: Sample Scenario</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 102px; top: 55px; width: 368px; height: 47px; z-index: 1;",
	cssClasses:	"",
	id:		"794",
	htmlId:		"tobj794",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[102,55,368,47]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":102,"y":55,"width":368,"height":47},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text795.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 820px; min-height: 124px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 810px; min-height: 114px;\"><p style=\"text-align:left\"><span style=\"color:#0963b1;\"><span style=\"font-size:14pt;\"><span style=\"font-family:\'Georgia\',serif;\">Emma, who has recently been pre-approved for a mortgage, is excited to start searching for her first home. She\'s looking for a three-bedroom house close to work, with room for a growing family. However, she’s uncertain about where to begin and wants to make sure he finds a home that fits her needs without exceeding her budget.<br>\nBased on this budget, Emma can determine how much home she can afford per month.</span></span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 95px; top: 96px; width: 820px; height: 124px; z-index: 2;",
	cssClasses:	"",
	id:		"795",
	htmlId:		"tobj795",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[95,96,820,124]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":95,"y":96,"width":820,"height":124},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image796.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj796Img\" src=\"images/Budget.PNG\" alt=\"Budget\" title=\"Budget\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 738px; height: 399px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 136px; top: 220px; width: 738px; height: 399px; z-index: 3; border-radius: 0px;",
	cssClasses:	"",
	id:		"796",
	htmlId:		"tobj796",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Budget"
	},
	objData:	{"a":[0,288,0,[136,220,738,399]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":136,"y":220,"width":738,"height":399}}
};
image798.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj798Img\" src=\"images/desktop_crop798.png\" alt=\"Kelly Avatar\" title=\"Kelly Avatar\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 196px; height: 410px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 805px; top: 231px; width: 196px; height: 410px; z-index: 4; border-radius: 0px;",
	cssClasses:	"",
	id:		"798",
	htmlId:		"tobj798",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kelly Avatar"
	},
	objData:	{"a":[0,288,0,[805,231,196,410]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":805,"y":231,"width":196,"height":410}}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	59
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Life%20is%20a%20Game%20Bkgrnd.png","images/Kelly%20Avatar.png","images/Budget.PNG"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: auto; visibility: hidden;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,1];
