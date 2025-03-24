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
shape1129.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj1129inner\"><svg viewBox=\"0 0 462 210\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(231 105)\" style=\"\">\n	<path d=\"M 52.5 0 L 409.5 0 A 52.5 52.5 0 0 1 462 52.5 L 462 157.5 A 52.5 52.5 0 0 1 409.5 210 L 52.5 210 A 52.5 52.5 0 0 1 0 157.5 L 0 52.5 A 52.5 52.5 0 0 1 52.5 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70); pointer-events: auto;\" transform=\"translate(0 0) translate(-231, -105) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(231 105)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 10px; top: 199px; width: 462px; height: 210px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1129",
	htmlId:		"tobj1129",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[9.999999999999972,199.00000000000006,462,210]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":199,"width":971,"height":441},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle"}
};
image1232.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj1232Img\" src=\"images/Clipboard.png\" alt=\"Clipboard\" title=\"Clipboard\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 120px; height: 120px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 308px; top: 331px; width: 120px; height: 120px; z-index: 1; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1232",
	htmlId:		"tobj1232",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Clipboard",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkOpenAttch',actItem:function(){ trivLogMsg('Action [OnMClkOpenAttch on Clipboard] fired!', 4)
		{var ret = window.open('Sample%20Loan%20Application%20(1).pdf','_blank','menubar=0,toolbar=0,status=0');} 
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[308,331,120,120]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":648,"y":331,"width":252,"height":252}}
};
qu1201.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"qu1201",
	bInsAnc:	undefined,
	cwObj:		{
		"crLineColor":	"",
		"questType":	14,
		"dwQuestFlags":	32771,
		"doImmFeedback":	32768,
		"maxAllowedAttempts":	0,
		"arrAns":	["\\u004C\\u006F\\u0061\\u006E\\u0020\\u004F\\u0072\\u0069\\u0067\\u0069\\u006E\\u0061\\u0074\\u006F\\u0072\\u0020\\u0049\\u006E\\u0066\\u006F\\u0072\\u006D\\u0061\\u0074\\u0069\\u006F\\u006E"],
		"correctFeedbackFunc":	"action1201_1",
		"incorrectFeedbackFunc":	"action1201_2",
		"attemptsFeedbackFunc":	0,
		"varQuest":	VarQuestion_1201
	},
	objData:	{"a":[0,32,0,[]]}
};
text1206.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 395px; min-height: 80px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 395px; min-height: 80px;\"><p><span>​</span></p>\n\n<p dir=\"ltr\"><span><b id=\"docs-internal-guid-2c8e6da2-7fff-6ed6-e61c-368a8c27e042\"><span style=\"color: rgb(23, 93, 152); font-family: Georgia, serif; font-size:14pt;\">Based on the provided sample loan application, which of the following elements of the mortgage application should <u><em>not</em></u> be completed by the homebuyer? (Each section labels whether it should be completed by the homebuyer or the lender.)</span></b></span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 100px; width: 395px; height: 80px; z-index: 2;",
	cssClasses:	"",
	id:		"1206",
	htmlId:		"tobj1206",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[50,100,395,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":81,"y":199,"width":902,"height":80},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text1207.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad1208\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 164px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 164px; min-height: 20px;\"><p align=\"left\"><strong><span style=\"font-family: Georgia, serif; color: rgb(23, 93, 152); font-size:12pt;\">Borrower Information</span></strong></p></div></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 190px; width: 164px; height: 20px; z-index: 3;",
	cssClasses:	"",
	id:		"1207",
	htmlId:		"tobj1207",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[79,190,164,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":88,"y":291,"width":253,"height":20},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
checkbox1208.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1208\" name=\"rad1208\" value=\"Borrower Information\" onclick=\"qu1201.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 190px; width: 19px; height: 19px; z-index: 4;",
	cssClasses:	"",
	id:		"1208",
	htmlId:		"tobj1208",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[50,190,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":59,"y":291,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1209.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad1210\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 318px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 318px; min-height: 20px;\"><p><strong><span style=\"color: rgb(23, 93, 152); font-family: georgia; font-size:12pt;\">Financial Information-Assets and Liabilities</span></strong></p></div></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 220px; width: 318px; height: 20px; z-index: 5;",
	cssClasses:	"",
	id:		"1209",
	htmlId:		"tobj1209",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[79,220,318,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":88,"y":321,"width":412,"height":20},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
checkbox1210.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1210\" name=\"rad1210\" value=\"Financial Information-Assets and Liabilities\" onclick=\"qu1201.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 220px; width: 19px; height: 19px; z-index: 6;",
	cssClasses:	"",
	id:		"1210",
	htmlId:		"tobj1210",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 2 button"
	},
	objData:	{"a":[0,32,0,[50,220,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":59,"y":321,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1211.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad1212\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 257px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 257px; min-height: 20px;\"><p><strong><span style=\"color: rgb(23, 93, 152); font-family: georgia; font-size:12pt;\">Financial Information--Real Estate</span></strong></p></div></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 250px; width: 257px; height: 20px; z-index: 7;",
	cssClasses:	"",
	id:		"1211",
	htmlId:		"tobj1211",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[79,250,257,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":88,"y":351,"width":359,"height":20},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
checkbox1212.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1212\" name=\"rad1212\" value=\"Financial Information--Real Estate\" onclick=\"qu1201.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 250px; width: 19px; height: 19px; z-index: 8;",
	cssClasses:	"",
	id:		"1212",
	htmlId:		"tobj1212",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 3 button"
	},
	objData:	{"a":[0,32,0,[50,250,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":59,"y":351,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1213.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad1214\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 231px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 231px; min-height: 20px;\"><p><strong><span style=\"color: rgb(23, 93, 152); font-family: georgia; font-size:12pt;\">Loan and Property Information</span></strong></p></div></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 280px; width: 231px; height: 20px; z-index: 9;",
	cssClasses:	"",
	id:		"1213",
	htmlId:		"tobj1213",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 4 text"
	},
	objData:	{"a":[0,32,0,[79,280,231,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":88,"y":381,"width":323,"height":20},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
checkbox1214.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1214\" name=\"rad1214\" value=\"Loan and Property Information\" onclick=\"qu1201.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 280px; width: 19px; height: 19px; z-index: 10;",
	cssClasses:	"",
	id:		"1214",
	htmlId:		"tobj1214",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 4 button"
	},
	objData:	{"a":[0,32,0,[50,280,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":59,"y":381,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1215.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad1216\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 104px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 104px; min-height: 20px;\"><p><strong><span style=\"color: rgb(23, 93, 152); font-family: georgia; font-size:12pt;\">Declarations</span></strong></p></div></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 310px; width: 104px; height: 20px; z-index: 11;",
	cssClasses:	"",
	id:		"1215",
	htmlId:		"tobj1215",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 5 text"
	},
	objData:	{"a":[0,32,0,[79,310,104,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":88,"y":411,"width":208,"height":20},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
checkbox1216.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1216\" name=\"rad1216\" value=\"Declarations\" onclick=\"qu1201.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 310px; width: 19px; height: 19px; z-index: 12;",
	cssClasses:	"",
	id:		"1216",
	htmlId:		"tobj1216",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 5 button"
	},
	objData:	{"a":[0,32,0,[50,310,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":59,"y":411,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1217.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad1218\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 275px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 275px; min-height: 20px;\"><p><strong><span style=\"color: rgb(23, 93, 152); font-family: georgia; font-size:12pt;\">Acknowledgements and Agreements</span></strong></p></div></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 340px; width: 275px; height: 20px; z-index: 13;",
	cssClasses:	"",
	id:		"1217",
	htmlId:		"tobj1217",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 6 text"
	},
	objData:	{"a":[0,32,0,[79,340,275,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":88,"y":441,"width":455,"height":20},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
checkbox1218.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1218\" name=\"rad1218\" value=\"Acknowledgements and Agreements\" onclick=\"qu1201.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 340px; width: 19px; height: 19px; z-index: 14;",
	cssClasses:	"",
	id:		"1218",
	htmlId:		"tobj1218",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 6 button"
	},
	objData:	{"a":[0,32,0,[50,340,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":59,"y":441,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1219.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad1220\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 123px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 123px; min-height: 20px;\"><p><strong><span style=\"color: rgb(23, 93, 152); font-family: georgia; font-size:12pt;\">Military Service</span></strong></p></div></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 370px; width: 123px; height: 20px; z-index: 15;",
	cssClasses:	"",
	id:		"1219",
	htmlId:		"tobj1219",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 7 text"
	},
	objData:	{"a":[0,32,0,[79,370,123,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":88,"y":471,"width":311,"height":20},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
checkbox1220.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1220\" name=\"rad1220\" value=\"Military Service\" onclick=\"qu1201.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 370px; width: 19px; height: 19px; z-index: 16;",
	cssClasses:	"",
	id:		"1220",
	htmlId:		"tobj1220",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 7 button"
	},
	objData:	{"a":[0,32,0,[50,370,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":59,"y":471,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1221.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad1222\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 195px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 195px; min-height: 20px;\"><p><strong><span style=\"color: rgb(23, 93, 152); font-family: georgia; font-size:12pt;\">Demographic Information</span></strong></p></div></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 400px; width: 195px; height: 20px; z-index: 17;",
	cssClasses:	"",
	id:		"1221",
	htmlId:		"tobj1221",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 8 text"
	},
	objData:	{"a":[0,32,0,[79,400,195,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":88,"y":501,"width":335,"height":20},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
checkbox1222.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1222\" name=\"rad1222\" value=\"Demographic Information\" onclick=\"qu1201.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 400px; width: 19px; height: 19px; z-index: 18;",
	cssClasses:	"",
	id:		"1222",
	htmlId:		"tobj1222",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 8 button"
	},
	objData:	{"a":[0,32,0,[50,400,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":59,"y":501,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1223.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad1224\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 210px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 210px; min-height: 20px;\"><p><strong><span style=\"color: rgb(23, 93, 152); font-family: georgia; font-size:12pt;\">Loan Originator Information</span></strong></p></div></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 430px; width: 210px; height: 20px; z-index: 19;",
	cssClasses:	"",
	id:		"1223",
	htmlId:		"tobj1223",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 9 text"
	},
	objData:	{"a":[0,32,0,[79,430,210,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":88,"y":531,"width":394,"height":20},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
checkbox1224.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1224\" name=\"rad1224\" value=\"Loan Originator Information\" onclick=\"qu1201.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 430px; width: 19px; height: 19px; z-index: 20;",
	cssClasses:	"",
	id:		"1224",
	htmlId:		"tobj1224",
	bInsAnc:	0,
	fieldsetId:	'fset1201',
	cwObj:		{
		"name":	"Choice 9 button"
	},
	objData:	{"a":[0,32,0,[50,430,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":59,"y":531,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
shape1128.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj1128inner\"><svg viewBox=\"0 0 431 73\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(215.5 36.5)\" style=\"\">\n	<path d=\"M 36.5 0 L 394.5 0 A 36.5 36.5 0 0 1 431 36.5 L 431 36.5 A 36.5 36.5 0 0 1 394.5 73 L 36.5 73 A 36.5 36.5 0 0 1 0 36.5 L 0 36.5 A 36.5 36.5 0 0 1 36.5 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55); pointer-events: auto;\" transform=\"translate(0 0) translate(-215.5, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(215.5 36.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.55;filter:alpha(opacity=55);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 25px; top: 25px; width: 431px; height: 73px; z-index: 21; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1128",
	htmlId:		"tobj1128",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Pill"
	},
	objData:	{"a":[0,32,0,[25,25.00000000000005,431,73]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":25,"width":906,"height":153},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Pill","titleValue":"Pill"}
};
text1127.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 418px; min-height: 59px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 408px; min-height: 49px;\"><p style=\"text-align: center;\"><span style=\"font-size:36pt; color: rgb(255, 0, 255); font-family: Impact, sans-serif;\">Step 7:&nbsp; Complete Your Mortgage Application</span></p>\n\n<p style=\"text-align: center;\"><span style=\"font-size:36pt; color: rgb(255, 0, 255); font-family: Impact, sans-serif;\">Application</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 31px; top: 42px; width: 418px; height: 59px; z-index: 22;",
	cssClasses:	"",
	id:		"1127",
	htmlId:		"tobj1127",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[31,42,418,59]],"rcdOvr":{"res":0},"textShadowEffect":{"opacity":"0.9","depth":8,"color":"#000000","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":65,"y":42,"width":879,"height":125},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
textbutton1125.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj1125inner\"><svg viewBox=\"0 0 29 19\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.5 9.5)\" style=\"\">\n	<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_19_10392\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEuNVk1PIkEQfd2TMAM3PHlQD7omAgmcNfGH7P6G3bM34109CHvw4sVo/DirFz7+AyaAie5f0CxklQS7e1NV3cAgbnaGmZ7pSfr1q3r1ClWtVr+ura39TJJkQSmF2QsKUHSjOw3+oEc3eZVnJzPOOdAJ63iK35zD23D4/Ovp6bu6ubl5LpfLea01lNbQSiHSEZSWDWhF834ztCIh08/JSItNgABnrYBaB+ssrHOwNGctj+12+0XV63W3sbEBAp29plnTZkDgzFghl8vxOHvQwv3+bwZjYA8WxofeA1SjQaAF6CjyLAWcWCtFzyHk9E5EFbLZLHZ3d3F3d5fC3NzcRK1WQ78/gLVGGDsLY4S9MQa9Xo9AG65QKCKKJLTjMDNY5EEJkL4pJEmCw8NDXFxcpAApWmdnZ3j98woTwsnhtbAEyqwNOgTaJNBiiRcMbDVvwDMmcdE3pRHHMU5OTnB8fJwCXF1d5U2MRu8w9h3OkoZCHgUs5LXb7UI1m01XLBbn5jOKIq9mjSSJcX19jf39/RTg8vIyrq6uRFQmCIdEZObmtCOgLVcqFkS5xFBHiDifEmpimGQT3N7eYm9vLwW4tLSE8/NzDrk1ZqJUCimXi7A0hkRlYazBhGmphIjCyaAhrJrzTKJptVrY2dlJAS4uLuL09BT5fN4rVEoklAarl5kTmJ83Fp1uB6rZaroSh5dEM79stre3P5QG5bZSqfjSEHVy3jxLEg+LaKZkOh0GpfB+zGlQce4/mQbQMfA4v2lgAfVCojyyepktKTZCxMolEf07p9kkkRBOszUUVu9KXr3Efr56vUkEcLFBjUwmw+o9ODhIhXplZQWXl5csPC4NBhbhiHjSTFOgrNaIlEuqpVIRxuJI4r9x5vM6JeDRaMSuQ3kVM/BMg7KNQTc40tw69ebPuR0bPxDHCbMlkOkjONLb26u3vcAw7b/MVGywMFFuKJ3QXdiNPFvf+ijH87x3a2sL1WoVg0EfllzJh3tcRtbntN6ouwIZfqpOJyHl+ak+S64fTP+zLjPo92G4ywhbFhirmQz/AdJPK+W8uJA3iCnf5ZxCg36cW99TpamR60g7l44yucSRpkVEmzBo39+/qKOjo2/rX9ZrcTZeYEZ0as1Lhn4anqfHWbeQZh7+Kci/iNmNDIfD58fHxx9/AfN1yZkrnuUWAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10392&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(14.5 9.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 4px; top: 609px; width: 29px; height: 19px; z-index: 23; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1125",
	htmlId:		"tobj1125",
	bInsAnc:	false,
	cwObj:		{
		"name":	"black1_back",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg('Action [OnMClkGoTo on black1_back] fired!', 4)
		trivExitPage('page18.html',false,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[3.9999999999999982,609,29,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":9,"y":609,"width":60,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10392\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEuNVk1PIkEQfd2TMAM3PHlQD7omAgmcNfGH7P6G3bM34109CHvw4sVo/DirFz7+AyaAie5f0CxklQS7e1NV3cAgbnaGmZ7pSfr1q3r1ClWtVr+ura39TJJkQSmF2QsKUHSjOw3+oEc3eZVnJzPOOdAJ63iK35zD23D4/Ovp6bu6ubl5LpfLea01lNbQSiHSEZSWDWhF834ztCIh08/JSItNgABnrYBaB+ssrHOwNGctj+12+0XV63W3sbEBAp29plnTZkDgzFghl8vxOHvQwv3+bwZjYA8WxofeA1SjQaAF6CjyLAWcWCtFzyHk9E5EFbLZLHZ3d3F3d5fC3NzcRK1WQ78/gLVGGDsLY4S9MQa9Xo9AG65QKCKKJLTjMDNY5EEJkL4pJEmCw8NDXFxcpAApWmdnZ3j98woTwsnhtbAEyqwNOgTaJNBiiRcMbDVvwDMmcdE3pRHHMU5OTnB8fJwCXF1d5U2MRu8w9h3OkoZCHgUs5LXb7UI1m01XLBbn5jOKIq9mjSSJcX19jf39/RTg8vIyrq6uRFQmCIdEZObmtCOgLVcqFkS5xFBHiDifEmpimGQT3N7eYm9vLwW4tLSE8/NzDrk1ZqJUCimXi7A0hkRlYazBhGmphIjCyaAhrJrzTKJptVrY2dlJAS4uLuL09BT5fN4rVEoklAarl5kTmJ83Fp1uB6rZaroSh5dEM79stre3P5QG5bZSqfjSEHVy3jxLEg+LaKZkOh0GpfB+zGlQce4/mQbQMfA4v2lgAfVCojyyepktKTZCxMolEf07p9kkkRBOszUUVu9KXr3Efr56vUkEcLFBjUwmw+o9ODhIhXplZQWXl5csPC4NBhbhiHjSTFOgrNaIlEuqpVIRxuJI4r9x5vM6JeDRaMSuQ3kVM/BMg7KNQTc40tw69ebPuR0bPxDHCbMlkOkjONLb26u3vcAw7b/MVGywMFFuKJ3QXdiNPFvf+ijH87x3a2sL1WoVg0EfllzJh3tcRtbntN6ouwIZfqpOJyHl+ak+S64fTP+zLjPo92G4ywhbFhirmQz/AdJPK+W8uJA3iCnf5ZxCg36cW99TpamR60g7l44yucSRpkVEmzBo39+/qKOjo2/rX9ZrcTZeYEZ0as1Lhn4anqfHWbeQZh7+Kci/iNmNDIfD58fHxx9/AfN1yZkrnuUWAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10392&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10394\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA2BJREFUSEuFlrtO40AUhv8Zg2KHKgsSBQ0SC8RB4n12S6iQEhA9LwG7j0ADHZcKiCsuHRKIOEiIVwARtNwkz6zOOTN2HIKwNLEzhb/5z+U/VltbW79mZmb+hmH4QymFwQWA9wAF+pWfYZeFtbQvd2v93fAzXa+vrw/39/dNdXh4+LC4uFjTWkMpjSDQUFpBK7kTUPNhNAMdmvcdw4GYBMMwC2vo2cAYA2uMe7a4vrp+VMfHx7Zer4Og/Yth7iCaeKyWDgY+RBRV+VCDF0F6vScYgwJGh8kyBt92u1AnJwSNRaHS0IFmlZpVykEGQx5FEXZ2dnB5eVlizs3NYXl5Gb1eD8aQYlFK6vluMnRThp7YuNFgSMDQIA+p1oGEmMCkU2uEYYiDgwOcnp6WgFNTU1hdXcW/lxenikLsoQY2M8iMQZeUttttG8exhDbQDCaIV8j7Lr+VSgVJkuDo6KgEnJycxPr6Ot4/3mGyIn8EpUUwzm9mkKapQBusVCMgRR7olPN/pVEJK7i4uMDe3l4JODExwUD/Ul9AUjw+rE6xyaGJbTRiyaUDSEEFkletEYUh5293d7cEHB8fx9raGkZGRjhfVDxcrT6XlFdWmvFelitN2nYhbnAuS9VLypVGVI1wc3OD7e3tErBWq6HZbGJsbExeyi0iEAYwkA5ClVuEt5N2oJKElEp4h63R0VFsbGx8ao2VlRVMT09zT4q68l2Ufw5vp0PQdmIbC1RITmneMmIO1aj6pdJWq4VqteragorGmwIBKY9fQPNCosrlFpGCynvVtcn3OfXO40BcrUWvZmQORSEV1SsVLL2ZF1UgJkHtcn5+jv39/aHVy+Hl3BHIhdYW/SnK+1sm71MJMTlQP9w70vd9+iHF4+D9uRalFmk3FUcaLCTpVW/6FGpv/NKvpPbs7GyoI72QI7kezR3JO5NXyjbolebGUOTUTxhW66YOWeEw752fn8fS0hKee88woNAWk6YUXpoycVyHUoEUEI826lGaY974Ja+85VST6cvkKV8yZZ7FIPLR1mf43Vvk8zSfMg6cVy9NUJfnYqC7WU4z1Q1oGdrFKk0Z3z7W4Prq6lFtbm7+/jk7+4e/HGiSOHP3A9urKVSR6kKdfBPQHC++HGi6W/6CKK+3t7eHu7u71n8FksybHzbBUQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10394&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10396\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA2ZJREFUSEuNls1KI0EUhU9VQ9IJomQQXLnSATuC7+FK8Gcx8wwzD6Mza5/CXX50oytBRkwyEASfwGESxp+BqhrOvdWd7iiOxra6k1hf33vPPbfN0dHRp7W1te9pmn4wxkAOayAvY8Cf+VXfBBDkj1wiBDkLchmK1XsvX+Gnj4+P97e3t1/MycnJ/dbWVstaCx4E2CSBjXBZjb6v9zBbZTMjOwrN8zR4BN4Ar72H57lzsvL6+vr6l+l0OmFjY0OA1SOHEQhYYwErSBhr0WykcjPzP9x48nsCT3iECjweo58jmG6X0AxJYmVjI2siKea1ZarztMe10Wjg9PQU4/G4wlxdXcX29jYmkwmCZ+SM1MO7IDfgvMNoJNBuyLJMolRwBOap5sossIjWoJGmuLi4wM3NTQW4vLyM3d1dPDz8gXOMUqFMt/MewTG9DkNCe91eyNpt2CRGVtTTIpEoCdXP6vU6rq6ucHl5WQG2Wi3s7+/j+fm5qCMBBGuECmSKh8MhTK/XC+2M0FlNGZkCE0kvxVRPU/mH8/PzCnBxcREHBwfwTtMnIvIBLii0XM8C2u/1Q9bOkIiQmFqrUXOVmlqkaSr1Ozs7ewHc29uT7+SbF6plSkOQ1HqqV0TlMRwMYfr9HMqoYrSEJdomzWYTd3d36HQ6FeDCwoLUkCnnhoVwRKWazvINCNQ5DDS9/bC52X6lZfQGarUajo+PX7TGzs4OVlZWio0L4eSqdVG5pXYheDAYwPT6/bA5V9PCKKxBs/HOSGPzi3BK55WaOo/BcADDmrbbWUVI6kxsoURS/K6axsjEkXIB5a4Ulct+FWivP6deEY+qlmBRr9V2eU29S0tL0i4aEQXD/tRWEeuTnnUqqHLLiHrZHtGV8p6lkkXN0X/r9dp/+vRvFBAB6sOEqnIJDhixpnSkNs1hzntnUc4MP4/4bUd6qPTmvILFHMo2WAaXI1RHotVDImeN3/Le6XSqbVTUdGb4wxGhnDJZFoUTx1u0vTLYkihzlvPVgqafz9lyPxE2nUzV6GPPSprzKUPvzedprtSyQZhEh7lMH441Gagm/ppicOsM1xkqr+i5+QzVqLW+PzhPDw8PP69/XP/GJweZmRwmMjh1WL94eojQcnSExccHeWKQZwgZ6PFG4vr09HQ/Ho+//gPYu82bdr7W+QAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10396&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10398\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEuNVk1PIkEQfd2TMAM3PHlQD7omAgmcNfGH7P6G3bM34109CHvw4sVo/DirFz7+AyaAie5f0CxklQS7e1NV3cAgbnaGmZ7pSfr1q3r1ClWtVr+ura39TJJkQSmF2QsKUHSjOw3+oEc3eZVnJzPOOdAJ63iK35zD23D4/Ovp6bu6ubl5LpfLea01lNbQSiHSEZSWDWhF834ztCIh08/JSItNgABnrYBaB+ssrHOwNGctj+12+0XV63W3sbEBAp29plnTZkDgzFghl8vxOHvQwv3+bwZjYA8WxofeA1SjQaAF6CjyLAWcWCtFzyHk9E5EFbLZLHZ3d3F3d5fC3NzcRK1WQ78/gLVGGDsLY4S9MQa9Xo9AG65QKCKKJLTjMDNY5EEJkL4pJEmCw8NDXFxcpAApWmdnZ3j98woTwsnhtbAEyqwNOgTaJNBiiRcMbDVvwDMmcdE3pRHHMU5OTnB8fJwCXF1d5U2MRu8w9h3OkoZCHgUs5LXb7UI1m01XLBbn5jOKIq9mjSSJcX19jf39/RTg8vIyrq6uRFQmCIdEZObmtCOgLVcqFkS5xFBHiDifEmpimGQT3N7eYm9vLwW4tLSE8/NzDrk1ZqJUCimXi7A0hkRlYazBhGmphIjCyaAhrJrzTKJptVrY2dlJAS4uLuL09BT5fN4rVEoklAarl5kTmJ83Fp1uB6rZaroSh5dEM79stre3P5QG5bZSqfjSEHVy3jxLEg+LaKZkOh0GpfB+zGlQce4/mQbQMfA4v2lgAfVCojyyepktKTZCxMolEf07p9kkkRBOszUUVu9KXr3Efr56vUkEcLFBjUwmw+o9ODhIhXplZQWXl5csPC4NBhbhiHjSTFOgrNaIlEuqpVIRxuJI4r9x5vM6JeDRaMSuQ3kVM/BMg7KNQTc40tw69ebPuR0bPxDHCbMlkOkjONLb26u3vcAw7b/MVGywMFFuKJ3QXdiNPFvf+ijH87x3a2sL1WoVg0EfllzJh3tcRtbntN6ouwIZfqpOJyHl+ak+S64fTP+zLjPo92G4ywhbFhirmQz/AdJPK+W8uJA3iCnf5ZxCg36cW99TpamR60g7l44yucSRpkVEmzBo39+/qKOjo2/rX9ZrcTZeYEZ0as1Lhn4anqfHWbeQZh7+Kci/iNmNDIfD58fHxx9/AfN1yZkrnuUWAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10398&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10400\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEuNVk1PIkEQfd2TMAM3PHlQD7omAgmcNfGH7P6G3bM34109CHvw4sVo/DirFz7+AyaAie5f0CxklQS7e1NV3cAgbnaGmZ7pSfr1q3r1ClWtVr+ura39TJJkQSmF2QsKUHSjOw3+oEc3eZVnJzPOOdAJ63iK35zD23D4/Ovp6bu6ubl5LpfLea01lNbQSiHSEZSWDWhF834ztCIh08/JSItNgABnrYBaB+ssrHOwNGctj+12+0XV63W3sbEBAp29plnTZkDgzFghl8vxOHvQwv3+bwZjYA8WxofeA1SjQaAF6CjyLAWcWCtFzyHk9E5EFbLZLHZ3d3F3d5fC3NzcRK1WQ78/gLVGGDsLY4S9MQa9Xo9AG65QKCKKJLTjMDNY5EEJkL4pJEmCw8NDXFxcpAApWmdnZ3j98woTwsnhtbAEyqwNOgTaJNBiiRcMbDVvwDMmcdE3pRHHMU5OTnB8fJwCXF1d5U2MRu8w9h3OkoZCHgUs5LXb7UI1m01XLBbn5jOKIq9mjSSJcX19jf39/RTg8vIyrq6uRFQmCIdEZObmtCOgLVcqFkS5xFBHiDifEmpimGQT3N7eYm9vLwW4tLSE8/NzDrk1ZqJUCimXi7A0hkRlYazBhGmphIjCyaAhrJrzTKJptVrY2dlJAS4uLuL09BT5fN4rVEoklAarl5kTmJ83Fp1uB6rZaroSh5dEM79stre3P5QG5bZSqfjSEHVy3jxLEg+LaKZkOh0GpfB+zGlQce4/mQbQMfA4v2lgAfVCojyyepktKTZCxMolEf07p9kkkRBOszUUVu9KXr3Efr56vUkEcLFBjUwmw+o9ODhIhXplZQWXl5csPC4NBhbhiHjSTFOgrNaIlEuqpVIRxuJI4r9x5vM6JeDRaMSuQ3kVM/BMg7KNQTc40tw69ebPuR0bPxDHCbMlkOkjONLb26u3vcAw7b/MVGywMFFuKJ3QXdiNPFvf+ijH87x3a2sL1WoVg0EfllzJh3tcRtbntN6ouwIZfqpOJyHl+ak+S64fTP+zLjPo92G4ywhbFhirmQz/AdJPK+W8uJA3iCnf5ZxCg36cW99TpamR60g7l44yucSRpkVEmzBo39+/qKOjo2/rX9ZrcTZeYEZ0as1Lhn4anqfHWbeQZh7+Kci/iNmNDIfD58fHxx9/AfN1yZkrnuUWAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10400&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10402\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEuNVk1PIkEQfd2TMAM3PHlQD7omAgmcNfGH7P6G3bM34109CHvw4sVo/DirFz7+AyaAie5f0CxklQS7e1NV3cAgbnaGmZ7pSfr1q3r1ClWtVr+ura39TJJkQSmF2QsKUHSjOw3+oEc3eZVnJzPOOdAJ63iK35zD23D4/Ovp6bu6ubl5LpfLea01lNbQSiHSEZSWDWhF834ztCIh08/JSItNgABnrYBaB+ssrHOwNGctj+12+0XV63W3sbEBAp29plnTZkDgzFghl8vxOHvQwv3+bwZjYA8WxofeA1SjQaAF6CjyLAWcWCtFzyHk9E5EFbLZLHZ3d3F3d5fC3NzcRK1WQ78/gLVGGDsLY4S9MQa9Xo9AG65QKCKKJLTjMDNY5EEJkL4pJEmCw8NDXFxcpAApWmdnZ3j98woTwsnhtbAEyqwNOgTaJNBiiRcMbDVvwDMmcdE3pRHHMU5OTnB8fJwCXF1d5U2MRu8w9h3OkoZCHgUs5LXb7UI1m01XLBbn5jOKIq9mjSSJcX19jf39/RTg8vIyrq6uRFQmCIdEZObmtCOgLVcqFkS5xFBHiDifEmpimGQT3N7eYm9vLwW4tLSE8/NzDrk1ZqJUCimXi7A0hkRlYazBhGmphIjCyaAhrJrzTKJptVrY2dlJAS4uLuL09BT5fN4rVEoklAarl5kTmJ83Fp1uB6rZaroSh5dEM79stre3P5QG5bZSqfjSEHVy3jxLEg+LaKZkOh0GpfB+zGlQce4/mQbQMfA4v2lgAfVCojyyepktKTZCxMolEf07p9kkkRBOszUUVu9KXr3Efr56vUkEcLFBjUwmw+o9ODhIhXplZQWXl5csPC4NBhbhiHjSTFOgrNaIlEuqpVIRxuJI4r9x5vM6JeDRaMSuQ3kVM/BMg7KNQTc40tw69ebPuR0bPxDHCbMlkOkjONLb26u3vcAw7b/MVGywMFFuKJ3QXdiNPFvf+ijH87x3a2sL1WoVg0EfllzJh3tcRtbntN6ouwIZfqpOJyHl+ak+S64fTP+zLjPo92G4ywhbFhirmQz/AdJPK+W8uJA3iCnf5ZxCg36cW99TpamR60g7l44yucSRpkVEmzBo39+/qKOjo2/rX9ZrcTZeYEZ0as1Lhn4anqfHWbeQZh7+Kci/iNmNDIfD58fHxx9/AfN1yZkrnuUWAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10402&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"black1_back","titleValue":"black1_back"}
};
textbutton1123.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj1123inner\"><svg viewBox=\"0 0 29 19\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.5 9.5)\" style=\"\">\n	<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_19_10404\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEt9lk8vZEEUxc+rSkRIiPkKItEt4Tuwwx5DbGwsZliwJ1YsmfkodrpthH1LulsiLETCCrPyXievanLurXr9uttMU/3+SOpX5/45V3J2drY2OTn5e3h4+FuSJOhfAORd+SoP/R8PeHjIN+/5BcA5Pju5//z8fHt4ePiRnJ+fv83Ozk4YY8BFgLEWhlfC+D4eBgnCL08iG+ne3DggnRO4dx7OOTjvFJzncN7jttF4Ty4uLvz09LQAdVkYo4r5PDY2BmvtoDDveXLZkGT5kVsnB1Ag4YR2193dHZLaRc1PVyowVhVFqKo2GB8fw87ODm5ubnrAi4uLODo6EjCjSig3j2C95zuuvFDdbrWR1Go1XwlQa6yAjGVowyGsxejoKDY2NsBTlj9ra2vY29tDmqYa3gDxUGUaYoUyAi53aLbbSOp1QqtFeAUsYWaI9UrVQ0NDIOTx8bEHvL29ja2tLXSyTKA5pYbQRnBehDdHq9UitO6rhDK8sZiMgQ1AHoD5jXldXV3F09NTD3h/fx8rKyvIOllXnc9DPkN+A1igl5f1QqmVvFJpKbes3FBcBDOU6+vreH5+7gEfHh5iaWkJWZpKAalKrdwvlc5UqZRV21UrOeWzDWFOjB7GGny8f2BzcxOvr6894JOTE8zPzyNlVUsOfWgZzSfhrVaTSi99ldAyUHqTwNi7MceaX65GoyG57P9cXV0FU+htFSoXaDNAK9UqbD80GkXpfQz7nw9V+vLy0sM8Pj7GwsIC0s8UOfu1r0cJbhJav2QhzcBK6EKImUdrYSWf2q9SxdZKzr7K6cHBAZaXl5FlWTADtlCOPA/X4ErNonqD0kQKqTevqs5IJOh4/6veTtaRfqRKsb5QSN7lWkye4Q0tU6lWwP7Unow2WIKHPiXwn33a6Wi7BGdir2qIoyNpRUvL0JH6C4khZZ9SJdtkZGTkS0fiIdijDCk3VydixXY9V6CiXFcBFRscKCRtFRr+7u4urq+vv/TesgXSgcvQwvjjtMkDlFOmgIY2ERssTRkeaGB8hikT52b0XpkyQW1hEHHqOIc2vVfm6dzchIQzGn0xWxUOg2KmcqDKJC3mqQ7rLjQaf3fExdZhjm8bt+/J6enp96mpqV/xPwduJiD51bmqDL3y7+GuKz6Mtqha5+vgQdI0fbu/v//5F22a6Ju5XoWiAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10404&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(14.5 9.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 443px; top: 609px; width: 29px; height: 19px; z-index: 24; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1123",
	htmlId:		"tobj1123",
	bInsAnc:	false,
	cwObj:		{
		"name":	"black1_next",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg('Action [OnMClkGoTo on black1_next] fired!', 4)
		trivExitPage('page20.html',true,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[443,609,29,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":932,"y":609,"width":60,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10404\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEt9lk8vZEEUxc+rSkRIiPkKItEt4Tuwwx5DbGwsZliwJ1YsmfkodrpthH1LulsiLETCCrPyXievanLurXr9uttMU/3+SOpX5/45V3J2drY2OTn5e3h4+FuSJOhfAORd+SoP/R8PeHjIN+/5BcA5Pju5//z8fHt4ePiRnJ+fv83Ozk4YY8BFgLEWhlfC+D4eBgnCL08iG+ne3DggnRO4dx7OOTjvFJzncN7jttF4Ty4uLvz09LQAdVkYo4r5PDY2BmvtoDDveXLZkGT5kVsnB1Ag4YR2193dHZLaRc1PVyowVhVFqKo2GB8fw87ODm5ubnrAi4uLODo6EjCjSig3j2C95zuuvFDdbrWR1Go1XwlQa6yAjGVowyGsxejoKDY2NsBTlj9ra2vY29tDmqYa3gDxUGUaYoUyAi53aLbbSOp1QqtFeAUsYWaI9UrVQ0NDIOTx8bEHvL29ja2tLXSyTKA5pYbQRnBehDdHq9UitO6rhDK8sZiMgQ1AHoD5jXldXV3F09NTD3h/fx8rKyvIOllXnc9DPkN+A1igl5f1QqmVvFJpKbes3FBcBDOU6+vreH5+7gEfHh5iaWkJWZpKAalKrdwvlc5UqZRV21UrOeWzDWFOjB7GGny8f2BzcxOvr6894JOTE8zPzyNlVUsOfWgZzSfhrVaTSi99ldAyUHqTwNi7MceaX65GoyG57P9cXV0FU+htFSoXaDNAK9UqbD80GkXpfQz7nw9V+vLy0sM8Pj7GwsIC0s8UOfu1r0cJbhJav2QhzcBK6EKImUdrYSWf2q9SxdZKzr7K6cHBAZaXl5FlWTADtlCOPA/X4ErNonqD0kQKqTevqs5IJOh4/6veTtaRfqRKsb5QSN7lWkye4Q0tU6lWwP7Unow2WIKHPiXwn33a6Wi7BGdir2qIoyNpRUvL0JH6C4khZZ9SJdtkZGTkS0fiIdijDCk3VydixXY9V6CiXFcBFRscKCRtFRr+7u4urq+vv/TesgXSgcvQwvjjtMkDlFOmgIY2ERssTRkeaGB8hikT52b0XpkyQW1hEHHqOIc2vVfm6dzchIQzGn0xWxUOg2KmcqDKJC3mqQ7rLjQaf3fExdZhjm8bt+/J6enp96mpqV/xPwduJiD51bmqDL3y7+GuKz6Mtqha5+vgQdI0fbu/v//5F22a6Ju5XoWiAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10404&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10406\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3ZJREFUSEt9lrtO40AUhs94imQXKRG8AotEYshKdFwqCjqgA+3CI+y+BT3KRaKDl6BLwjvAKgkIkGgokIB0uW3Gs/rPmUlsh8XCeGyQv/nP5T9WlUrlx+LiYi2bzS4opSh9Ep4REX65Fe5mDkuW8IPDWssnjiiKSJaWBv3++8Pj4y91eXn5XiqV5gMVUKADCpSiIAhI4cRaYe02I+TYBvByPADQUoQVQwQKYGQjiozlq40MXV//6ap6vW6Xl5cZlDgdLJfPkw6CWWXWUq/fE0XMFJCcAAAkYNwbE/H69vaWVKMBaJECrfjlUMiqHTSfz9P5+Tnd3d0lwGtra3R4eEj9fl9AHEsBASLKALWsEPcAdzodQBu2UCywSoYCOFGNUGuam5ujSqVCz8/PCfDW1hbt7u7ScDiQl0MZoE6dAC0ZB7UmonanTaoJaFjkl2vkUAsYirVTi81kslk6PT2ll5eXBHhnZ4e2t7dpOBxKXr3SSR4jMqzYcHg7DG02bbEIaDqn2ICWanZRwP8A/Pr6mgDv7+/T+vo6g30BTQoJxRQ7W20HDcMiKaVZpVcnlew24hVrTePxmMrlMr29vSXABwcHhDwPAPYQ5NUklbYFemXDEDnVM7kMuFXwfNo6UNvr9ahWq1G3202Aj4+PaWVlhQaDARnkFRWLopooNdRqtUldNZu2EIZcRBziuEJXyVzRvAG54v+enp7o7OxsppVOTk5o/Hc87dF0eFstBy06KICpymWD8BvhtWal1Wp1RunR0RGtrq6yUikcZxDxnAIqhRSyAo0Qo3p5HW8fr1KTMZ/nFMUkhiBADrO74r49hcIcUDiSP28SPqxSUPK3j6p3b2+PNjY2aDQaTcIqxuDyiQ0YaRlXSE1bKBQ4bB4IAIeVC0jUZzKZT/uUgWwM3menQHYk9G1kqO0dKdmnAlLO/KH6638caXNzk6ByOEKbeJizwQheMZtXVso2CKUfmAPCm8vl6OLigo06fnjvRdGI50dT72VLhFJLhj142jYMrdcbPGW0r1AupOmIAxQbSh8oFDF7AGW0QS0XEAnIG76MN+lZNnyep99L8+JESSsUD0a4MUcVMRprjHMeo8DJPJWRhkepeZoqppubm64ql8s/l74tVbNfsgv8ZZD4esAtfzfEru4zIi49rlY+HXjUJWesRf++39/f//4HMUHunGPcunYAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10406&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10408\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA21JREFUSEuFls9KHEEQxr/uDllRcEmeQJCFnVEMgie96MGHSI6ek4fR5DFUEAQP7voOCrsbEE+eBHFRJDO7Mt3hq5renVGzGRjmH/Svq+qrr8YcHBx8XV5e/jU3N/fZGIPXJ8B3kIPf/nmEgADICd7rDXzw8jKEgCzLHm5ubr6b09PTh7W1tU/GWjhjwat1BtZYOWUT1pAICwNYXVk2oCsrTBYmgCBCA7z38D4g+ELe8fnq8mpozs/PQztJYLkogeVJEKGLzSacJal+yM7/ZPCYRsJYg1covEdBuICn5+/fA5hOpxPaSRvOOFinkVnrIMFZi2azibOzM9ze3taorVYLOzs7yPOM6wPBS7RMZ4xycuUGCA4eg34JTdJEIzQWTsAaMTfgnMPCwgKOj49xf39fA6+urmJzcxN5nitIqTWwpLUgsEAoAvqDHkyn2wkrSVrWslJXQmUjBs46NOYaODw8xHA4rIE3Njawvr6O0WgkYKaXtZ2mVmvKZ18UGPT7MN1uN6RJKqmt1pQw45jmUlSOWXACfnx8rIG3traQpukELCkuRVStJ+/7E2iaCpCCYT1NVG8lWvnunIji6OgIT09PNfD29jZY53yUq5iicoPX9DLaKnRlJYUxTuoZayvqtfqO3WFEXEYyMh6NpcbPz8818O7uLpaWlpDluUDryi3kXa/Xh7m4uAgUEutWS2+lfaylQURl68bu7u5wcnLyppX29vbw8vJSa5Nqinu9Hkz3oitCsqxfDRRVPO1fglmC0Xg0O9IsU4N41aMaaY+RdkOSrMBJHVlPXVgcqmybGCnTTWXOqilVPK1nAV9oCxWeLePRey0kMYUSTpDYoDyzlh9kEzPVOx5LdOpKFSeaiKmmXjUHikUULH4bRaXARuPjzD4dC7D03BIo6Q0BRVHItyIU2jK0QfbY23pG9RrMz892pGgM2p9qDmr0ryKOLSPe206m7RLTWrbIYnPxP96rFhinjN6XffqOmMSROGWSdqJmb40YfzQHqrXZXJQsvDtlsoxzhV6vhg9a79QKJeJSSOq/HoPBADJPv3Ce0hhKoxdLnPRl7FFOcZmonOt6hZkM6xhh1X/jDK3O1curq6HZ39//1mq1fjYajc8UDxfTCaOLxr+FyV8DRfY2bP1jYNTlRNeLpjqeeZ4/XF9f//gL3e7vm3rfTesAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10408&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10410\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEt9lk8vZEEUxc+rSkRIiPkKItEt4Tuwwx5DbGwsZliwJ1YsmfkodrpthH1LulsiLETCCrPyXievanLurXr9uttMU/3+SOpX5/45V3J2drY2OTn5e3h4+FuSJOhfAORd+SoP/R8PeHjIN+/5BcA5Pju5//z8fHt4ePiRnJ+fv83Ozk4YY8BFgLEWhlfC+D4eBgnCL08iG+ne3DggnRO4dx7OOTjvFJzncN7jttF4Ty4uLvz09LQAdVkYo4r5PDY2BmvtoDDveXLZkGT5kVsnB1Ag4YR2193dHZLaRc1PVyowVhVFqKo2GB8fw87ODm5ubnrAi4uLODo6EjCjSig3j2C95zuuvFDdbrWR1Go1XwlQa6yAjGVowyGsxejoKDY2NsBTlj9ra2vY29tDmqYa3gDxUGUaYoUyAi53aLbbSOp1QqtFeAUsYWaI9UrVQ0NDIOTx8bEHvL29ja2tLXSyTKA5pYbQRnBehDdHq9UitO6rhDK8sZiMgQ1AHoD5jXldXV3F09NTD3h/fx8rKyvIOllXnc9DPkN+A1igl5f1QqmVvFJpKbes3FBcBDOU6+vreH5+7gEfHh5iaWkJWZpKAalKrdwvlc5UqZRV21UrOeWzDWFOjB7GGny8f2BzcxOvr6894JOTE8zPzyNlVUsOfWgZzSfhrVaTSi99ldAyUHqTwNi7MceaX65GoyG57P9cXV0FU+htFSoXaDNAK9UqbD80GkXpfQz7nw9V+vLy0sM8Pj7GwsIC0s8UOfu1r0cJbhJav2QhzcBK6EKImUdrYSWf2q9SxdZKzr7K6cHBAZaXl5FlWTADtlCOPA/X4ErNonqD0kQKqTevqs5IJOh4/6veTtaRfqRKsb5QSN7lWkye4Q0tU6lWwP7Unow2WIKHPiXwn33a6Wi7BGdir2qIoyNpRUvL0JH6C4khZZ9SJdtkZGTkS0fiIdijDCk3VydixXY9V6CiXFcBFRscKCRtFRr+7u4urq+vv/TesgXSgcvQwvjjtMkDlFOmgIY2ERssTRkeaGB8hikT52b0XpkyQW1hEHHqOIc2vVfm6dzchIQzGn0xWxUOg2KmcqDKJC3mqQ7rLjQaf3fExdZhjm8bt+/J6enp96mpqV/xPwduJiD51bmqDL3y7+GuKz6Mtqha5+vgQdI0fbu/v//5F22a6Ju5XoWiAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10410&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10412\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEt9lk8vZEEUxc+rSkRIiPkKItEt4Tuwwx5DbGwsZliwJ1YsmfkodrpthH1LulsiLETCCrPyXievanLurXr9uttMU/3+SOpX5/45V3J2drY2OTn5e3h4+FuSJOhfAORd+SoP/R8PeHjIN+/5BcA5Pju5//z8fHt4ePiRnJ+fv83Ozk4YY8BFgLEWhlfC+D4eBgnCL08iG+ne3DggnRO4dx7OOTjvFJzncN7jttF4Ty4uLvz09LQAdVkYo4r5PDY2BmvtoDDveXLZkGT5kVsnB1Ag4YR2193dHZLaRc1PVyowVhVFqKo2GB8fw87ODm5ubnrAi4uLODo6EjCjSig3j2C95zuuvFDdbrWR1Go1XwlQa6yAjGVowyGsxejoKDY2NsBTlj9ra2vY29tDmqYa3gDxUGUaYoUyAi53aLbbSOp1QqtFeAUsYWaI9UrVQ0NDIOTx8bEHvL29ja2tLXSyTKA5pYbQRnBehDdHq9UitO6rhDK8sZiMgQ1AHoD5jXldXV3F09NTD3h/fx8rKyvIOllXnc9DPkN+A1igl5f1QqmVvFJpKbes3FBcBDOU6+vreH5+7gEfHh5iaWkJWZpKAalKrdwvlc5UqZRV21UrOeWzDWFOjB7GGny8f2BzcxOvr6894JOTE8zPzyNlVUsOfWgZzSfhrVaTSi99ldAyUHqTwNi7MceaX65GoyG57P9cXV0FU+htFSoXaDNAK9UqbD80GkXpfQz7nw9V+vLy0sM8Pj7GwsIC0s8UOfu1r0cJbhJav2QhzcBK6EKImUdrYSWf2q9SxdZKzr7K6cHBAZaXl5FlWTADtlCOPA/X4ErNonqD0kQKqTevqs5IJOh4/6veTtaRfqRKsb5QSN7lWkye4Q0tU6lWwP7Unow2WIKHPiXwn33a6Wi7BGdir2qIoyNpRUvL0JH6C4khZZ9SJdtkZGTkS0fiIdijDCk3VydixXY9V6CiXFcBFRscKCRtFRr+7u4urq+vv/TesgXSgcvQwvjjtMkDlFOmgIY2ERssTRkeaGB8hikT52b0XpkyQW1hEHHqOIc2vVfm6dzchIQzGn0xWxUOg2KmcqDKJC3mqQ7rLjQaf3fExdZhjm8bt+/J6enp96mpqV/xPwduJiD51bmqDL3y7+GuKz6Mtqha5+vgQdI0fbu/v//5F22a6Ju5XoWiAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10412&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(14.5 9.5)\" style=\"\">\n\t<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_19_10414\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"19\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAATCAYAAABsmQZ/AAAAAXNSR0IArs4c6QAAA3FJREFUSEt9lk8vZEEUxc+rSkRIiPkKItEt4Tuwwx5DbGwsZliwJ1YsmfkodrpthH1LulsiLETCCrPyXievanLurXr9uttMU/3+SOpX5/45V3J2drY2OTn5e3h4+FuSJOhfAORd+SoP/R8PeHjIN+/5BcA5Pju5//z8fHt4ePiRnJ+fv83Ozk4YY8BFgLEWhlfC+D4eBgnCL08iG+ne3DggnRO4dx7OOTjvFJzncN7jttF4Ty4uLvz09LQAdVkYo4r5PDY2BmvtoDDveXLZkGT5kVsnB1Ag4YR2193dHZLaRc1PVyowVhVFqKo2GB8fw87ODm5ubnrAi4uLODo6EjCjSig3j2C95zuuvFDdbrWR1Go1XwlQa6yAjGVowyGsxejoKDY2NsBTlj9ra2vY29tDmqYa3gDxUGUaYoUyAi53aLbbSOp1QqtFeAUsYWaI9UrVQ0NDIOTx8bEHvL29ja2tLXSyTKA5pYbQRnBehDdHq9UitO6rhDK8sZiMgQ1AHoD5jXldXV3F09NTD3h/fx8rKyvIOllXnc9DPkN+A1igl5f1QqmVvFJpKbes3FBcBDOU6+vreH5+7gEfHh5iaWkJWZpKAalKrdwvlc5UqZRV21UrOeWzDWFOjB7GGny8f2BzcxOvr6894JOTE8zPzyNlVUsOfWgZzSfhrVaTSi99ldAyUHqTwNi7MceaX65GoyG57P9cXV0FU+htFSoXaDNAK9UqbD80GkXpfQz7nw9V+vLy0sM8Pj7GwsIC0s8UOfu1r0cJbhJav2QhzcBK6EKImUdrYSWf2q9SxdZKzr7K6cHBAZaXl5FlWTADtlCOPA/X4ErNonqD0kQKqTevqs5IJOh4/6veTtaRfqRKsb5QSN7lWkye4Q0tU6lWwP7Unow2WIKHPiXwn33a6Wi7BGdir2qIoyNpRUvL0JH6C4khZZ9SJdtkZGTkS0fiIdijDCk3VydixXY9V6CiXFcBFRscKCRtFRr+7u4urq+vv/TesgXSgcvQwvjjtMkDlFOmgIY2ERssTRkeaGB8hikT52b0XpkyQW1hEHHqOIc2vVfm6dzchIQzGn0xWxUOg2KmcqDKJC3mqQ7rLjQaf3fExdZhjm8bt+/J6enp96mpqV/xPwduJiD51bmqDL3y7+GuKz6Mtqha5+vgQdI0fbu/v//5F22a6Ju5XoWiAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 29 0 L 29 19 L 0 19 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_19_10414&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(14.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"black1_next","titleValue":"black1_next"}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	65
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/Life%20is%20a%20Game%20Bkgrnd.png","images/black1_back_1110_normal.gif","images/black1_back_1110_over.gif","images/black1_back_1110_clicked.gif","images/black1_next_1117_normal.gif","images/black1_next_1117_over.gif","images/black1_next_1117_clicked.gif","images/Clipboard.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 763px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: 480px 315px; visibility: hidden;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,0.4757185332011893];
