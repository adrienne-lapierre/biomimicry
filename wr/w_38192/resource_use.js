var xframe = 1;
var scrolling, border1, loading, urltext;
var mleft,mtop;
var loadme,browseroption,windowoption,windowwidth,windowheight,displayIn;
var elem;
var width
var height
var handle
resourceUse1 = {
	onLoad: function()
	{
		if ( ! this.captivate )
			return;
				handle = this.captivate.CPMovieHandle;
		if(handle.isWidgetVisible() == true)
		{
		this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
		if ( ! this.movieProps )
			return;
		this.varHandle = this.movieProps.variablesHandle;
		this.eventDisp = this.movieProps.eventDispatcher;
		this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
		this.internalImage = '';
		this.externalImage = '';
		this.description = '';
		this.myVar = '';
		this.myVar1 = '';
		var size = this.OpenAjax.getSize();
        width = size.width;
        height = size.height;
		this.ta_fontname = '';
		this.ta_fontsize = '';
		this.ta_bold = '';
		this.ta_underline = '';
		this.ta_italic = '';
		this.ta_align = '';
		this.ta_textcolr = '';
		this.ta_highlightcolor = '';
		this.strProp = '';
		this.updateData();
		this.doUpdate();
		
		}
	},

	updateData: function()
	{
	//if (this.captivate.CPMovieHandle.pauseMovie ) {
      //                                          setTimeout("parent.cp.movie.pause(parent.cp.ReasonForPause.INTERACTIVE_ITEM)",100);                        }
		var id = 0;
		var result = jQuery.parseXML( this.xmlStr );
		var resultDoc = jQuery( result );
		this.strProp = resultDoc.find( 'string' ).text();
		
		testXml(this.xmlStr);
		
		
		if (!jQuery.browser.msie)
		{
		
			var urltext1 = resultDoc.find('#urlentered');

        if (urltext1) {
            if (urltext1.find('string')) {
                urltext = urltext1.find('string').text();

            }
        }
		
			var loading1 = resultDoc.find('#loading');

        if (loading1) {
            if (loading1.find('string')) {
                loading = loading1.find('string').text();

            }
        }
		
		
		var scrolling1 = resultDoc.find('#scrolling');

        if (scrolling1) {
            if (scrolling1.find('string')) {
                scrolling = scrolling1.find('string').text();
				
				if(scrolling == "true")
				scrolling = "auto"
				else
				scrolling = "no"
		

            }
        }
		
		var border11 = resultDoc.find('#border1');

        if (border11) {
            if (border11.find('string')) {
                border1 = border11.find('string').text();
				
				if(border1 == "true")
				border1 = "1"
				else
				border1 = "0"
		

            }
        }
		
		var loadme1 = resultDoc.find('#AutoLoad');

        if (loadme1) {
            if (loadme1.find('string')) {
                loadme = loadme1.find('string').text();

            }
        }
		
		
		var browseroption1 = resultDoc.find('#browsercontrols');

        if (browseroption1) {
            if (browseroption1.find('string')) {
                browseroption = browseroption1.find('string').text();

            }
        }
		
		
		var windowoptions = resultDoc.find('#windowoptions');

        if (windowoptions) {
            if (windowoptions.find('string')) {
                windowoption = windowoptions.find('string').text();

            }
        }
		
			
			
		var wwidth = resultDoc.find('#wwidth');

        if (wwidth) {
            if (wwidth.find('number')) {
                windowwidth = wwidth.find('number').text();

            }
        }
		
		
			
		var wheight = resultDoc.find('#wheight');

        if (wheight) {
            if (wheight.find('number')) {
                windowheight = wheight.find('number').text();

            }
        }
		
		
			
		var displayIn1 = resultDoc.find('#displayIn');

        if (displayIn1) {
            if (displayIn1.find('string')) {
                displayIn = displayIn1.find('string').text();

            }
        }
		
		}

		
			//this.description = strProp1;
		
		// if ( strProp1 ) {
			// if ( strProp.find( 'string' ) )
				// this.description = strProp.find( 'string' ).text();
		// }
		
		
		
//		if (this.captivate.CPMovieHandle.pauseMovie ) {
  //          setTimeout("parent.cp.movie.pause(parent.cp.ReasonForPause.INTERACTIVE_ITEM)",100);}
			var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
			var myFrameName = window.name;
			var myWidgetiFrame = window.parent.document.getElementById(window.name);
			if(myWidgetiFrame)
			{
				
				var w = myWidgetiFrame.parentElement.parentElement.offsetWidth
				var h = myWidgetiFrame.parentElement.parentElement.offsetHeight
			}
			
				mleft = (w/2) - 20
				mtop = -(h/2)
				
				
	
	},
	
	

 

	doUpdate: function() 
	{
		
		elem = document.getElementById( 'description_div' );
			var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
			var myFrameName = window.name;
			var myWidgetiFrame = window.parent.document.getElementById(window.name);
			if(myWidgetiFrame)
			{
				
				var w = myWidgetiFrame.offsetWidth
				var h = myWidgetiFrame.offsetHeight
			}
		
		elem.style.width = w + "px"
		elem.style.height = h + "px"
		
		if(loadme == 'false')
		{
		elem.innerHTML = "<img id=\'clicktoload\' src=\'LoadIcon.png\' style=\'position:relative;cursor:pointer\'>"
		
		var e = document.getElementById( 'clicktoload' );
		
		e.style.left = w/2-35 + "px";
		e.style.top = h/3 + "px"

		$('#clicktoload').click(function (){buildwebpage();});
		//buildwebpage()
		}
		else
		{
		buildwebpage();
		}
		
		
		resizeInteraction(width, height);
		
	}
};


function resizeInteraction(thewidth, theheight)
{
    var scale = 0;
    thewidth = String(thewidth).replace("px", "");
    theheight = String(theheight).replace("px", "");
    if (thewidth < theheight)
    {
        scale = thewidth / (550);
    }
    else
    {
        scale = theheight / (400);
    }
    var margins = Math.round(25 * scale);
    margins += "px"
    scale = "scale(" + scale + ")";
 
	
	if(loading == "true")
	{
    $('#loading').css('-webkit-transform', scale);
    $('#loading').css('-moz-transform', scale);
    $('#loading').css('-o-transform', scale);
    $('#loading').css('-ms-transform', scale);
    $('#loading').css('-moz-transform-origin', '0 0');
    $('#loading').css('-webkit-transform-origin', '0 0');
    $('#loading').css('-moz-transform-origin', '0 0');
    $('#loading').css('-o-transform-origin', '0 0');
    $('#loading').css('-ms-transform-origin', '0 0');
    }
	
	if(loadme == 'false')
	{
	 $('#clicktoload').css('-webkit-transform', scale);
    $('#clicktoload').css('-moz-transform', scale);
    $('#clicktoload').css('-o-transform', scale);
    $('#clicktoload').css('-ms-transform', scale);
    $('#clicktoload').css('-moz-transform-origin', '0 0');
    $('#clicktoload').css('-webkit-transform-origin', '0 0');
    $('#clicktoload').css('-moz-transform-origin', '0 0');
    $('#clicktoload').css('-o-transform-origin', '0 0');
    $('#clicktoload').css('-ms-transform-origin', '0 0');

	}
   
}


function buildwebpage()
{


if(urltext.search("app") != -1)
{
urltext = urltext.split("app:/")[1];
}

//console.log("URL ",urltext)

if(displayIn == "SlideDisplay")
		{
		 buildiframe("hello" , "helloiframe", urltext , "helloembedid" , scrolling, border1 );
		 
		//buildiframe("hello" , "helloiframe", "http://www.adobe.com" , "helloembedid" , "auto" );
		 
		 $('#helloiframe').load(function (){$('#loading').css('display','none')});
		 //$('#helloiframe').ready(function (){$('#loading').css('display','none')});
		 
		//if (this.captivate.CPMovieHandle.pauseMovie ) {
            //setTimeout("parent.cp.movie.pause(parent.cp.ReasonForPause.INTERACTIVE_ITEM)",100);}
			var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
			var myFrameName = window.name;
			var myWidgetiFrame = window.parent.document.getElementById(window.name);
			if(myWidgetiFrame)
			{
				
				var w = myWidgetiFrame.parentElement.parentElement.offsetWidth
				var h = myWidgetiFrame.parentElement.parentElement.offsetHeight
			}
			
		
			myframe = $(elem).find('iframe');
			
			myframe.width(w-10)
			myframe.height(h-10)
			if (/iPhone|iPod|iPad/.test(navigator.userAgent)){
                $('iframe').wrap(function(){
                    var $this = $(this);
                    return $('<div />').css({
                        width: w,
                        height: h,
                        overflow: 'auto',
                        '-webkit-overflow-scrolling': 'touch'
                    });
                });
			}

		
	
		//check for xframe value
		
		if (!jQuery.browser.msie)
		{
		setTimeout(function(){
			if(xframe == 1){elem.innerHTML = "<div><b>This content cannot be displayed in a frame</b></div><br/><div>To protect your security,the publisher of this content does not allow it to be displayed in a frame</div><br/><a href="+urltext+" target='_blank'>Click here to open in new window</a>";}},30000);
			
		}	
		}
		else if(displayIn == "BrowserDisplay")
		{
		
		
		OpenNewWindow(urltext,"_blank");
		}

		
}

resource_use = function ()
{
	return resourceUse1;
}

function testXml(theXml)
{
	//var theXml = "<test><item id='1'>one</item><item id='2'>two</item></test>";		
	theXml = parseXml(theXml);
	
	$(theXml).find('property').each(function() 
	{
		var theItem = $(this);
		var theId = theItem.attr("id");
		var theText = theItem.text();		
		
		switch(theId)
		{
		case 'urlentered':
		urltext = theText;
		break;
		
		case 'loading':
		loading = theText;
		break;
		
		case 'AutoLoad':
		loadme = theText;
		break;
		
		
		case 'browsercontrols':
		browseroption = theText;
		break;
		
		case 'windowoptions':
		windowoption = theText;
		break;
		
		case 'wwidth':
		windowwidth = theText;
		break;
		
		case 'wheight':
		windowheight = theText;
		break;
		
		case 'displayIn':
		displayIn = theText;
		break;
		
		
		case 'scrolling':
		if(theText == "true")
		 scrolling = "auto"
		 else
		 scrolling = "no"
		break;
		
		case 'border1':
		if(theText == "true")
		 scrolling = "1"
		 else
		 scrolling = "0"
		break;
		
				
		}
			//alert(urltext);	
		//alert("Id=" + theId + " Text=" + theText);
	});
}

function parseXml(xml)
{	
	if (jQuery.browser.msie)
	{
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM"); 
		xmlDoc.loadXML(xml);
		xml = xmlDoc;
	}
	
	return xml;
}


//this function wont get called because onload event is not there for XFrame options websites


function callme()
{
//console.log("i m free from X frames");
xframe = 0;
}
function buildiframe(frameID, iframeID, url, embedID, scrollPolicy, framebord)
{

if(loading == "true")
document.getElementById('description_div').innerHTML = "<iframe onload='callme()' id="+iframeID+" src='"+url+"' name="+iframeID+" scrolling="+scrollPolicy+" frameborder=\'"+framebord+"\' style=\'width:758px; height:351px; \'>" + "</iframe><img id='loading' src='../loading.gif' alt='Loading...' style='left:"+mleft+"px; top:"+mtop+"px; width:40px; height:40px; position:relative; '/>";
else
document.getElementById('description_div').innerHTML = "<iframe onload='callme()' id="+iframeID+" src='"+url+"' name="+iframeID+" scrolling="+scrollPolicy+" frameborder=\'"+framebord+"\' style=\'width:758px; height:351px; \'>" + "</iframe>";
}


function OpenNewWindow(url,name)
{

var spec = ""
			
			  if (browseroption == "All")
            {
                spec = "'" +"toolbar=yes,location=yes,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes"
                //editmc.cmb.selectedIndex = 0
            }
            else if (browseroption == "NoAdd")
            {
               spec = "'" +"toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=no,resizable=no"
            }
			 else if (browseroption == "None")
            {
                spec = "'" +"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no"
            }
			
			
			  if (windowoption == "Full")
            {
                spec = spec + ",fullscreen=yes" + "'"
                //editmc.cmb.selectedIndex = 0
            }
            else if (windowoption == "Def")
            {
                spec = spec + "'";
            }
			else if (windowoption == "Cust")
            {
                spec = spec + ",width="+parseInt(windowwidth)+",height="+parseInt(windowheight)+ "'";
            }
			
			
window.open(url,"_blank",spec);		
//window.open(url,"_blank",spec);

//console.log(url,name,spec);

}
