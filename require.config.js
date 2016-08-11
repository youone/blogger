var require = {
	baseUrl: 'https://dl.dropboxusercontent.com/u/29864737/blogger/javascript/',
//	baseUrl: 'https://34f3dde4c8432b51c2e4c0d257d77c165978e780.googledrive.com/host/0B73dmhu9AdL_b05MaGhNVzJPREU/javascript/',
	
	paths: {

	//3rd party
	hilit:         'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min',
	jquery:        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min',
	jqueryui:      'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min',
	mathjax:	   'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.6.1/MathJax.js?config=default',
	showdown:      'https://cdnjs.cloudflare.com/ajax/libs/showdown/1.4.2/showdown.min',
	jstat:         'https://cdnjs.cloudflare.com/ajax/libs/jstat/1.5.3/jstat.min',
	numeric:       'https://cdnjs.cloudflare.com/ajax/libs/numeric/1.2.6/numeric.min',
	d3:            'https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.0/d3.min,',
	ol3:           'https://cdnjs.cloudflare.com/ajax/libs/ol3/3.17.1/ol',
	gjsapi:        'https://www.google.com/jsapi?noext',
	velocity:      'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js',

	//my own libs
	blogger: 'blogger',
	bloglib: 'lib/bloglib',

	//projects
	p1: 'project'
	}
};

window.MathJax = {
	tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
	displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
	processEscapes: true
	//extensions: ["fast-preview.js"]
};

var cssFileref=document.createElement("link");
cssFileref.setAttribute("rel", "stylesheet");
cssFileref.setAttribute("type", "text/css");
cssFileref.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.css");
//console.log(cssFileref);
document.getElementsByTagName("head")[0].appendChild(cssFileref);


window.onload = function() {

	//require(['mathjax'], function(mathjax){
	//	console.log('loading mathjaxx');
	//});

	console.log("site is initialised");

	//if (_WidgetManager._GetAllData().blog.isMobile) {
	//	require(['jquery'], function ($) {
    //
	//		$('header').css('background-image','url("http://1.bp.blogspot.com/-XX5IcEzVVu0/V6MAdlcd5EI/AAAAAAAAElA/VHtKv8_dLvgFxkxvUMh8Q266hfFLOTLVgCK4B/s1600/6925296-forest-glade.png")');
	//		//$('header').find('.title').css('color','black');
	//	});
	//}

};


