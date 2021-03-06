require(['bloglib', 'mathjax'], function(bloglib, mathjax){

    var blogName = 'technicalities';
    var postName = 'exponential_lifetime';
    var postPath = blogName + '/posts/' + postName+ '/';
    var postUrl = require.toUrl(postPath);

    var content = $('#' + postName).parent();
    var textContent = $('<div>').html('Loading Text ...').appendTo(content);

    $.when(bloglib.markdownFetcher(postUrl + '/exponential_lifetime.md')).done(function (convertedText) {
        textContent.html(convertedText);

        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        //require(['mathjax'], function(mathjax){
        //    console.log('loading mathjaxx');
        //});

    });

});

//require(['bloglib'], function(bloglib){
//
//    var blogName = 'technicalities';
//    var postName = 'exponential_lifetime';
//    var postPath = blogName + '/posts/' + postName+ '/';
//    var postUrl = require.toUrl(postPath);
//
//    var content = $('#' + postName).parent();
//
//    content.append("Ccconsider a general sine shaped signal $s(t)$ with amplitude $a$, angular velocity $\\omega$ and phase $\\varphi$");
//
//    require(['mathjax'], function(mathjax){
//        console.log('loading mathjax');
//    });
//});

