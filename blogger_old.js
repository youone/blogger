function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
};

function postloader(blogName, path) {
	console.log("loading: " + blog_baseUrls[blogName] + path);
	return $.getScript(blog_baseUrls[blogName] + path);
}

function jsloader(blogName, type, filename) {
	var path = "";
	if (type == "header") {
		path = blog_headerUrls[blogName] + filename
	}
	else if (type == "post") {
		path = blog_postUrls[blogName] + filename
	}
	else {
	}

	console.log("loading: " + path);
	return $.getScript(path);
}

function string2html(string) {
	return string.replace(/(?:\r\n|\r|\n)/g, '<br />');
}

blogger_baseUrl = "https://dl.dropboxusercontent.com/u/29864737/web/blogger/javascript/";
//blogger_baseUrl = "https://rawgit.com/youone/blogger/master";
//blogger_baseUrl = "https://googledrive.com/host/0B73dmhu9AdL_aTN6SGYyZDJhR1E/javascript/blogger";

blog_baseUrls = {
	valfardskollaps: blogger_baseUrl + "valfardskollaps/",
	technicalities: blogger_baseUrl + "technicalities/",
	testblog: blogger_baseUrl + "testblog/",
};

blog_headerUrls = blog_baseUrls;

blog_postUrls = {
	valfardskollaps: blog_baseUrls.valfardskollaps + "posts/",
	technicalities: blog_baseUrls.technicalities + "posts/",
	testblog: blog_baseUrls.testblog + "posts/",
};

loadjscssfile(blogger_baseUrl + "showdown.min.js", "js");
loadjscssfile(blogger_baseUrl + "blogger.css", "css");


loadjscssfile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min.js", "js");
loadjscssfile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/styles/default.min.css", "css");

loadjscssfile("https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js", "js");
loadjscssfile("https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css", "css");

//loadjscssfile("http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default&delayStartupUntil=configured", "js");

console.log(window.MathJax);
window.MathJax = {
   	tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
	displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
	processEscapes: true
};

//inside here jQuery will have been loaded
window.onload = function() { 

loadjscssfile("http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default", "js");

//	MathJax.Hub.Config({
//		tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
//		displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
//	});

	//turn off "Powered by blogger ... "
	$('#Attribution1').css({display: 'none'});

	console.log("site is initialised");
	
}

