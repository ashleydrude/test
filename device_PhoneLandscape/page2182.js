if (window.VarCurrentView) VarCurrentView.set('PhoneLandscape');
function init_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

}
image2183.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2183Img\" src=\"images/certificate1.png\" alt=\"Certificate\" title=\"Certificate\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 785px; height: 1016px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 785px; height: 1016px; z-index: 0; border-radius: 0px;",
	cssClasses:	"",
	id:		"2183",
	htmlId:		"tobj2183",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Certificate"
	},
	objData:	{"a":[0,416,0,[0,0,785,1016]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":800,"height":1035}}
};
text2185.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 648px; min-height: 111px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 648px; min-height: 111px;\"><p align=\"center\"><span style=\"font-family:Times New Roman;color:#000000;font-size:24pt;\"><strong>Certificate of Completion</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 69px; top: 223px; width: 648px; height: 111px; z-index: 1;",
	cssClasses:	"",
	id:		"2185",
	htmlId:		"tobj2185",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[69,223,648,111]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":227,"width":660,"height":113},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text2186.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 648px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 648px; min-height: 79px;\"><p align=\"center\"><span style=\"font-family:Times New Roman;color:#000000;font-size:24pt;\"><strong>This certifies that</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 69px; top: 378px; width: 648px; height: 79px; z-index: 2;",
	cssClasses:	"",
	id:		"2186",
	htmlId:		"tobj2186",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text"
	},
	objData:	{"a":[0,32,0,[69,378,648,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":385,"width":660,"height":80},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text2187.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 648px; min-height: 61px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 648px; min-height: 61px;\"><p align=\"center\"><span style=\"font-family:Times New Roman;color:#000000;font-size:24pt;\"><strong>Student Name</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 69px; top: 464px; width: 648px; height: 61px; z-index: 3;",
	cssClasses:	"",
	id:		"2187",
	htmlId:		"tobj2187",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Student Name"
	},
	objData:	{"a":[0,32,0,[69,464,648,61]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":473,"width":660,"height":62},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text2188.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 648px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 648px; min-height: 88px;\"><p align=\"center\"><strong><span style=\"font-family: &quot;Times New Roman&quot;, serif; color: rgb(0, 0, 0); font-size:24pt;\">has completed Swartz Realty First-Time Home Buyer eLearning Course</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 69px; top: 594px; width: 648px; height: 88px; z-index: 4;",
	cssClasses:	"",
	id:		"2188",
	htmlId:		"tobj2188",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text"
	},
	objData:	{"a":[0,32,0,[69,594,648,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":605,"width":660,"height":90},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text2190.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 648px; min-height: 73px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 648px; min-height: 73px;\"><p align=\"center\"><span style=\"font-family:Times New Roman;color:#000000;font-size:24pt;\"><strong>Date</strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 69px; top: 702px; width: 648px; height: 73px; z-index: 5;",
	cssClasses:	"",
	id:		"2190",
	htmlId:		"tobj2190",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Date"
	},
	objData:	{"a":[0,32,0,[69,702,648,73]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":715,"width":660,"height":74},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_PhoneLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	65
};
rcdObj.pgWidth_PhoneLandscape = pgWidth_phoneLand;
rcdObj.preload_PhoneLandscape = ["images/Life%20is%20a%20Game%20Bkgrnd.png","images/certificate1.png"];
rcdObj.pgStyle_PhoneLandscape = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 1021px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: 990px 650px; visibility: hidden;'
rcdObj.backgrd_PhoneLandscape = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,0.98125];
