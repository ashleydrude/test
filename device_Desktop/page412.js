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
shape418.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"tobj418inner\"><svg viewBox=\"0 0 867 525\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(433.5 262.5)\" style=\"\">\n	<path d=\"M 131.25 0 L 735.75 0 A 131.25 131.25 0 0 1 867 131.25 L 867 393.75 A 131.25 131.25 0 0 1 735.75 525 L 131.25 525 A 131.25 131.25 0 0 1 0 393.75 L 0 131.25 A 131.25 131.25 0 0 1 131.25 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55); pointer-events: auto;\" transform=\"translate(0 0) translate(-433.5, -262.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(433.5 262.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 65px; top: 97px; width: 867px; height: 525px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"418",
	htmlId:		"tobj418",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[64.99999999999994,97.00000000000011,867,525]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":65,"y":97,"width":867,"height":525},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle"}
};
text433.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 622px; min-height: 398px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 612px; min-height: 388px;\"><p style=\"text-align:left\"><span><b><span style=\"font-family: Georgia, serif; font-size: 21.3333px; color: rgb(89, 126, 170);\">Run a credit check to see how you shape up to lenders</span></b></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 188px; top: 166px; width: 622px; height: 398px; z-index: 1;",
	cssClasses:	"",
	id:		"433",
	htmlId:		"tobj433",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[188,166,622,398]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":188,"y":166,"width":622,"height":398},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image417.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj417Img\" src=\"images/Kelly%20Avatar.png\" alt=\"Kelly Avatar\" title=\"Kelly Avatar\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 423px; height: 423px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 691px; top: 258px; width: 423px; height: 423px; z-index: 2; border-radius: 0px;",
	cssClasses:	"",
	id:		"417",
	htmlId:		"tobj417",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kelly Avatar"
	},
	objData:	{"a":[0,288,0,[691,258,423,423]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":691,"y":258,"width":423,"height":423}}
};
image437.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj437Img\" src=\"images/Credit_Score_Range_Infographic_Web.png\" alt=\"Credit_Score_Range_Infographic_Web\" title=\"Credit_Score_Range_Infographic_Web\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 375px; height: 328px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 311px; top: 236px; width: 375px; height: 328px; z-index: 3; border-radius: 0px;",
	cssClasses:	"",
	id:		"437",
	htmlId:		"tobj437",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Credit_Score_Range_Infographic_Web"
	},
	objData:	{"a":[0,288,0,[311,236,375,328]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":311,"y":236,"width":375,"height":328}}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	52
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Life%20is%20a%20Game%20Bkgrnd.png","images/Kelly%20Avatar.png","images/Credit_Score_Range_Infographic_Web.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: auto; visibility: hidden;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,1];
