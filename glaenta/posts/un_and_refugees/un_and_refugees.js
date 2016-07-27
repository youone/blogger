require(['bloglib'], function(bloglib){

	var blogName = 'glaenta';
	var postName = 'un_and_refugees';
	var postPath = blogName + '/posts/' + postName+ '/';
	var postUrl = require.toUrl(postPath);

	var content = $('#' + postName).parent();
	var textContent = $('<div>').html('Loading Text ...').appendTo(content);

	$.when(bloglib.markdownFetcher(postUrl + 'un_and_refugees.txt')).done(function (convertedText) {
		textContent.html(convertedText);
	});

});


