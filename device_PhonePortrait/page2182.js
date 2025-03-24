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
image2183.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj2183Img\" src=\"images/certificate1.png\" alt=\"Certificate\" title=\"Certificate\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 480px; height: 621px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 480px; height: 621px; z-index: 0; border-radius: 0px;",
	cssClasses:	"",
	id:		"2183",
	htmlId:		"tobj2183",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Certificate"
	},
	objData:	{"a":[0,416,0,[0,0,480,621]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":800,"height":1035}}
};
text2185.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 68px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 68px;\"><p align=\"center\"><span style=\"font-family:Times New Roman;color:#000000;font-size:24pt;\"><strong>Certificate of Completion</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 42px; top: 227px; width: 396px; height: 68px; z-index: 1;",
	cssClasses:	"",
	id:		"2185",
	htmlId:		"tobj2185",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[42,227,396,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":227,"width":660,"height":113},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text2186.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 48px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 48px;\"><p align=\"center\"><span style=\"font-family:Times New Roman;color:#000000;font-size:24pt;\"><strong>This certifies that</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 42px; top: 385px; width: 396px; height: 48px; z-index: 2;",
	cssClasses:	"",
	id:		"2186",
	htmlId:		"tobj2186",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text"
	},
	objData:	{"a":[0,32,0,[42,385,396,48]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":385,"width":660,"height":80},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text2187.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 37px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 37px;\"><p align=\"center\"><span style=\"font-family:Times New Roman;color:#000000;font-size:24pt;\"><strong>Student Name</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 42px; top: 473px; width: 396px; height: 37px; z-index: 3;",
	cssClasses:	"",
	id:		"2187",
	htmlId:		"tobj2187",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Student Name"
	},
	objData:	{"a":[0,32,0,[42,473,396,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":473,"width":660,"height":62},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text2188.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 54px;\"><p align=\"center\"><strong><span style=\"font-family: &quot;Times New Roman&quot;, serif; color: rgb(0, 0, 0); font-size:24pt;\">has completed Swartz Realty First-Time Home Buyer eLearning Course</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 42px; top: 605px; width: 396px; height: 54px; z-index: 4;",
	cssClasses:	"",
	id:		"2188",
	htmlId:		"tobj2188",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text"
	},
	objData:	{"a":[0,32,0,[42,605,396,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":605,"width":660,"height":90},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text2190.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 44px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 44px;\"><p align=\"center\"><span style=\"font-family:Times New Roman;color:#000000;font-size:24pt;\"><strong>Date</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 42px; top: 715px; width: 396px; height: 44px; z-index: 5;",
	cssClasses:	"",
	id:		"2190",
	htmlId:		"tobj2190",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Date"
	},
	objData:	{"a":[0,32,0,[42,715,396,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":715,"width":660,"height":74},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	65
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/Life%20is%20a%20Game%20Bkgrnd.png","images/certificate1.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 767px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: 605px 397px; visibility: hidden;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,0.6];
