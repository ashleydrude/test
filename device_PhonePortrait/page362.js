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
shape363.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj363inner\"><svg viewBox=\"0 0 417 247\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(208.5 123.5)\" style=\"\">\n	<path d=\"M 61.75 0 L 355.25 0 A 61.75 61.75 0 0 1 417 61.75 L 417 185.25 A 61.75 61.75 0 0 1 355.25 247 L 61.75 247 A 61.75 61.75 0 0 1 0 185.25 L 0 61.75 A 61.75 61.75 0 0 1 61.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55); pointer-events: auto;\" transform=\"translate(0 0) translate(-208.5, -123.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(208.5 123.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 32px; top: 71px; width: 417px; height: 247px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"363",
	htmlId:		"tobj363",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[31.99999999999997,71.00000000000006,417,247]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":67,"y":71,"width":876,"height":520},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle"}
};
text364.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 268px; min-height: 186px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 258px; min-height: 176px;\"><p style=\"text-align:left\"><em><strong><span style=\"color: rgb(23, 93, 152); font-family: Georgia, serif; font-size:18pt;\">Consider what is most important to you as a client.</span></strong></em></p>\n\n<p style=\"text-align:left\"><em style=\"null\"><strong><span style=\"color: rgb(23, 93, 152); font-family: Georgia, serif; font-size:18pt;\">​</span></strong></em></p>\n\n<ul style=\"padding-inline-start: 34px;\">\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:18pt; color: rgb(23, 93, 152);\"><strong><span style=\"color: rgb(23, 93, 152); font-family: Georgia, serif; font-size:18pt;\">Do you want a realtor who works primarily with rentals?</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:18pt; color: rgb(23, 93, 152);\"><strong><span style=\"color: rgb(23, 93, 152); font-family: Georgia, serif; font-size:18pt;\">Do you need your realtor to have a strong web presence?</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:18pt; color: rgb(23, 93, 152);\"><strong><span style=\"color: rgb(23, 93, 152); font-family: Georgia, serif; font-size:18pt;\">Does your realtor need to be available during the week/weekends, mornings/afternoons?</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:18pt; color: rgb(23, 93, 152);\"><strong><span style=\"color: rgb(23, 93, 152); font-family: Georgia, serif; font-size:18pt;\">Do you want your realtor to have a certain number of years of experience?</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:18pt; color: rgb(23, 93, 152);\"><strong><span style=\"color: rgb(23, 93, 152); font-family: Georgia, serif; font-size:18pt;\">Does your realtor need to be comfortable around kids?</span></strong></li>\n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 156px; top: 143px; width: 268px; height: 186px; z-index: 1;",
	cssClasses:	"",
	id:		"364",
	htmlId:		"tobj364",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[156,143,268,186]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":327,"y":143,"width":563,"height":392},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image365.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj365Img\" src=\"images/Kelly%20Avatar.png\" alt=\"Kelly Avatar\" title=\"Kelly Avatar\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 315px; height: 315px;\">",
	cssText:	"visibility: inherit; position: absolute; left: -58px; top: 93px; width: 315px; height: 315px; z-index: 2; border-radius: 0px;",
	cssClasses:	"",
	id:		"365",
	htmlId:		"tobj365",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kelly Avatar"
	},
	objData:	{"a":[0,288,0,[-58,93,315,315]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-121,"y":93,"width":662,"height":662}}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	65
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/Life%20is%20a%20Game%20Bkgrnd.png","images/Kelly%20Avatar.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 906px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: 480px 315px; visibility: hidden;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,0.4757185332011893];
