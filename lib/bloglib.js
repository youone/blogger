/**
 * Created by johan on 2016-07-26.
 */
define(['showdown'], function(showdown){


    var markdownFormatter = function(markdownText) {
        var markDownConverter = new showdown.Converter();
        var htmlText = markDownConverter.makeHtml(markdownText);
        return htmlText;
    };


    var markdownFetcher = function(textUrl) {
        var task = $.Deferred();
        $.when($.get(textUrl, function(theText){}, 'text')).done(function(theText){
            task.resolve(markdownFormatter(theText));
        });
        return task;
    };


    var sendMail = function() {
        $.ajax({
            url: 'https://api.mailgun.net/v3/sandboxdbc67071f4b641f4820c4dea2bc0115b.mailgun.org/messages',
            type: 'POST',
            dataType: 'json',
            //username: 'api',
            //password: '',
            headers: {"Authorization": "Basic "+btoa("")},
            data: {
                from:'postmaster@sandboxdbc67071f4b641f4820c4dea2bc0115b.mailgun.org',
                to:'jolundq@gmail.com',
                subject:'test',
                text:'test'
            },
            success: function() {
                console.log('ok');
            },
            error: function() {
                console.log('problems');
            }
        });
    };

    return {
        markdownFetcher: markdownFetcher,
        sendMail: sendMail
    };

});