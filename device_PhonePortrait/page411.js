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
shape416.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj416inner\"><svg viewBox=\"0 0 412 250\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(206 125)\" style=\"\">\n	<path d=\"M 62.5 0 L 349.5 0 A 62.5 62.5 0 0 1 412 62.5 L 412 187.5 A 62.5 62.5 0 0 1 349.5 250 L 62.5 250 A 62.5 62.5 0 0 1 0 187.5 L 0 62.5 A 62.5 62.5 0 0 1 62.5 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55); pointer-events: auto;\" transform=\"translate(0 0) translate(-206, -125) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(206 125)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 24px; top: 102px; width: 412px; height: 250px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"416",
	htmlId:		"tobj416",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[23.99999999999997,102.00000000000006,412,250]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":50,"y":102,"width":867,"height":525},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle"}
};
image415.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj415Img\" src=\"images/Kelly%20Avatar.png\" alt=\"Kelly Avatar\" title=\"Kelly Avatar\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 201px; height: 201px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 329px; top: 258px; width: 201px; height: 201px; z-index: 1; border-radius: 0px;",
	cssClasses:	"",
	id:		"415",
	htmlId:		"tobj415",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kelly Avatar"
	},
	objData:	{"a":[0,288,0,[329,258,201,201]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":691,"y":258,"width":423,"height":423}}
};
text432.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 296px; min-height: 189px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 286px; min-height: 179px;\"><p style=\"text-align:left\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif; font-size:16pt;\">Gather important documents such as:</span></strong></p>\n\n<ul style=\"padding-left: 24px; padding-inline-start: 31px; margin-left: 0px;\">\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:16pt; color: rgb(89, 126, 170); list-style-type: square; padding-left: 0px; padding-inline-start: 0px; margin: 0px;\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif; font-size:16pt;\">Bank statements&nbsp;</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:16pt; color: rgb(89, 126, 170); list-style-type: square; padding-left: 0px; padding-inline-start: 0px; margin: 0px;\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif; font-size:16pt;\">Credit card statements</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:16pt; color: rgb(89, 126, 170); list-style-type: square; padding-left: 0px; padding-inline-start: 0px; margin: 0px;\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif; font-size:16pt;\">Information on loans</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:16pt; color: rgb(89, 126, 170); list-style-type: square; padding-left: 0px; padding-inline-start: 0px; margin: 0px;\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif; font-size:16pt;\">Information on investments</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:16pt; color: rgb(89, 126, 170); list-style-type: square; padding-left: 0px; padding-inline-start: 0px; margin: 0px;\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif; font-size:16pt;\">Retirement account statements</span></strong></li>\n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 166px; width: 296px; height: 189px; z-index: 2;",
	cssClasses:	"",
	id:		"432",
	htmlId:		"tobj432",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[89,166,296,189]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":188,"y":166,"width":622,"height":398},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
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
