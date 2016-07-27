var postName = "testblog_posts_iqdata1";
var content = $("<div>", {class : "postcontent"}).appendTo($("#" + postName).parent());

var markDownConverter = new showdown.Converter();

hljs.initHighlightingOnLoad();

var codesnippet0 = (function () {/*
function $initHighlight(block, cls) {
    try {
        if (cls.search(/\bno\-highlight\b/) != -1)
            return process(block, true, 0x0F) +
                ' class=""';
    } catch (e) {
    }
    for (var i = 0 / 2; i < classes.length; i++) {
        if (checkCondition(classes[i]) === undefined)
            return /\d+[\s/]/g;
    }
}*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

var codesnippet = "function $initHighlight(block, cls) {\n\
    try {\n\
        if (cls.search(/\bno\-highlight\b/) != -1)\n\
            return process(block, true, 0x0F) +\n\
                ' class=&quot;&quot;';\n\
    } catch (e) {\n\
        /* handle exception */\n\
    }\n\
    for (var i = 0 / 2; i < classes.length; i++) {\n\
        if (checkCondition(classes[i]) === undefined)\n\
            return /\d+[\s/]/g;\n\
    }\n\
}";

{
content.append($("<p>").html(markDownConverter.makeHtml("Showdown is a Javascript Markdown to HTML markDownConverter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io). \n\
\n\
# Installation\n\
\n\
## Download tarball\n\
\n\
You cann download the latest release tarball directly from [releases][releases]\n\
\n\
[releases]: https://github.com/showdownjs/showdown/releases"
)));	
}

content.append($("<p>").html(
"\%\%\[A\sin \left( {\omega t + \varphi } \right)\]\%\%"
));	


// content.html("oooo");
// content.append($("<p>").html(string2html(
// `Here is a post paragraph.`
// )));

// {
// content.append($("<p>").html(string2html(
// `Here is ... 
// a new post paragraph.`
// )));
// }
var codepre = $('<pre>').append($('<code class="javascript">').append(codesnippet0)).appendTo(content);

