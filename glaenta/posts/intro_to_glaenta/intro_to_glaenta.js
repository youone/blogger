require(['bloglib'], function(bloglib){

	var blogName = 'glaenta';
	var postName = 'intro_to_glaenta';
	var postPath = blogName + '/posts/' + postName+ '/';
	var postUrl = require.toUrl(postPath);

	var content = $('#' + postName).parent();
	var textContent = $('<div>').html('Loading Text ...').appendTo(content);


	//$($('#intro_to_glaenta').parents()[4]).find('.date-header').find('span').html('Sticky Post')

	$.when(bloglib.markdownFetcher(postUrl + '/intro_to_glaenta.txt')).done(function (convertedText) {
		textContent.html(convertedText);
	});

});


