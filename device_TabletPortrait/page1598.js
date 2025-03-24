if (window.VarCurrentView) VarCurrentView.set('TabletPortrait');
function init_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

}
shape1599.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj1599inner\"><svg viewBox=\"0 0 772 497\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(386 248.5)\" style=\"\">\n	<path d=\"M 124.25 0 L 647.75 0 A 124.25 124.25 0 0 1 772 124.25 L 772 372.75 A 124.25 124.25 0 0 1 647.75 497 L 124.25 497 A 124.25 124.25 0 0 1 0 372.75 L 0 124.25 A 124.25 124.25 0 0 1 124.25 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-386, -248.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(386 248.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 7px; top: 11px; width: 772px; height: 497px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1599",
	htmlId:		"tobj1599",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[6.999999999999943,11.000000000000085,772,497]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":9,"y":11,"width":992,"height":639},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle"}
};
text1600.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 706px; min-height: 446px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 696px; min-height: 436px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(89, 126, 170); font-family: Georgia, serif;\">Compare your checklist to this sample:</span></strong></p>\n\n<ol style=\"padding-inline-start: 24px;\">\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170);\"><u><strong><span style=\"font-family: Georgia, serif; color: rgb(89, 126, 170); font-size:12pt;\">Hiring a Moving Company vs. DIY Move</span></strong></u>\n\n	<ul style=\"padding-inline-start: 24px;\">\n		<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170);\"><strong><span style=\"font-family: Georgia, serif; color: rgb(89, 126, 170);\">Research local moving companies, noting costs, availability, and services offered (e.g., packing, loading/unloading).</span></strong></li>\n		<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170);\"><strong style=\"null\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Consider the pros and cons of hiring professionals versus handling the move yourself. If handling it yourself, outline key steps for renting a moving truck, securing help, and obtaining packing materials.</span></strong></strong></li>\n		<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170);\"><strong style=\"null\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Make a final decision, and if hiring a company, schedule the moving date.</span></strong></strong></li>\n	</ul>\n	</li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170);\"><u><strong><span style=\"font-family: Georgia, serif; color: rgb(89, 126, 170); font-size:12pt;\">Setting Up Utilities and Services</span></strong></u></li>\n</ol>\n\n<ul style=\"padding-inline-start: 24px; margin-left: 40px;\">\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170);\"><strong><span style=\"font-family: Georgia, serif; color: rgb(89, 126, 170);\">Make a checklist of necessary utilities/services to set up or transfer, such as electricity, water, gas, internet, trash collection, and cable.</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170);\"><strong style=\"null\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Research providers for any new services you may need, and schedule start dates to coincide with your move-in date.</span></strong></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170);\"><strong style=\"null\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Confirm installation or start dates with each provider and note any fees, security deposits, or requirements.</span></strong></strong></li>\n</ul>\n\n<ol start=\"3\" style=\"margin-left: 0px; padding-left: 25px; padding-inline-start: 24px;\">\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170); list-style-type: decimal; margin: 0px; padding-left: 0px; padding-inline-start: 0px;\"><u><strong><span style=\"font-family: Georgia, serif; color: rgb(89, 126, 170); font-size:12pt;\">Coordinating Move-In Day Logistics</span></strong></u></li>\n</ol>\n\n<ul style=\"padding-inline-start: 24px; margin-left: 40px;\">\n	<li style=\"text-align: left; font-family: Georgia, serif; margin: 0px; font-size:12pt; color: rgb(89, 126, 170);\"><strong><span style=\"font-family: Georgia, serif; color: rgb(89, 126, 170);\">Plan a timeline for move-in day, including when to start packing, loading, and traveling to the new home.</span></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; margin: 0px; font-size:12pt; color: rgb(89, 126, 170);\"><strong style=\"null\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Determine which items are essential for the first day in your new home (e.g., toiletries, bedding, basic kitchen items) and pack them separately.</span></strong></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; margin: 0px; font-size:12pt; color: rgb(89, 126, 170);\"><strong style=\"null\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Assign tasks for any friends or family members assisting with the move to help things run smoothly.</span></strong></strong></li>\n	<li style=\"text-align: left; font-family: Georgia, serif; margin: 0px; font-size:12pt; color: rgb(89, 126, 170);\"><strong style=\"null\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Check in with all involved parties (moving company, helpers, service providers) a few days before to confirm all details.</span></strong></strong></li>\n</ul>\n\n<ol start=\"4\" style=\"margin-left: 0px; padding-left: 25px; padding-inline-start: 24px;\">\n	<li style=\"text-align: left; font-family: Georgia, serif; font-size:12pt; color: rgb(89, 126, 170); list-style-type: decimal; padding-left: 0px; padding-inline-start: 0px; margin: 0px;\"><u><strong><span style=\"font-family: Georgia, serif; color: rgb(89, 126, 170); font-size:12pt;\">Final Checklist for Move-In Readiness</span></strong></u></li>\n</ol>\n\n<ul style=\"padding-inline-start: 24px; margin-left: 40px;\">\n	<li style=\"text-align: left; font-family: undefined, sans-serif; margin: 0px; font-size:12pt; color: rgb(0, 0, 0);\"><span style=\"font-family: Georgia, serif; color: rgb(89, 126, 170);\"><strong>Develop a final move-in day checklist to ensure that nothing is overlooked. Include reminders to:</strong> </span><span> </span>\n\n	<ul style=\"padding-inline-start: 24px;\">\n		<li style=\"text-align: left; font-family: Georgia, serif; margin: 0px; font-size:12pt; color: rgb(89, 126, 170);\"><strong style=\"null\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Double-check all arrangements.</span></strong></strong></li>\n		<li style=\"text-align: left; font-family: Georgia, serif; margin: 0px; font-size:12pt; color: rgb(89, 126, 170);\"><strong style=\"null\"><strong><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Pack essential documents and personal valuables separately.</span></strong></strong></li>\n		<li style=\"text-align: left; font-family: Georgia, serif; margin: 0px; font-size:12pt; color: rgb(89, 126, 170);\"><strong><strong style=\"null\"><span style=\"color: rgb(89, 126, 170); font-family: Georgia, serif;\">Complete any final cleaning of the new home if necessary.</span></strong></strong></li>\n	</ul>\n	<span> </span><span> </span><span> </span></li>\n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 65px; width: 706px; height: 446px; z-index: 1;",
	cssClasses:	"",
	id:		"1600",
	htmlId:		"tobj1600",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[40,65,706,446]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":51,"y":65,"width":908,"height":573},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_TabletPortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	65
};
rcdObj.pgWidth_TabletPortrait = pgWidth_tabletPort;
rcdObj.preload_TabletPortrait = ["images/Life%20is%20a%20Game%20Bkgrnd.png"];
rcdObj.pgStyle_TabletPortrait = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 1000px; -webkit-print-color-adjust: exact; overflow: hidden; background-image: url("images/Life%20is%20a%20Game%20Bkgrnd.png"); background-repeat: no-repeat; background-size: 785px 515px; visibility: hidden;'
rcdObj.backgrd_TabletPortrait = ["#FFFFFF","url(images/Life%20is%20a%20Game%20Bkgrnd.png)",1009,662,0.777998017839445];
