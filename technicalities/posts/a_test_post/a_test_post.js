require.config({
        paths: {
            waterfall: "https://rawgit.com/youone/spectrograph/9414fb8ef38ccb9abff50b4d6066c55f3c1f43b0/web/js/widgets/waterfall-jquery-widget"
        }
 });

require(['jqueryui'], function () {
    require(['jqueryui', 'waterfall', 'bloglib'], function (jqueryui, waterfall, bloglib) {

        var postPath = 'technicalities/posts/a_test_post/';

        //console.log($('script'));

        var content = $('#a_test_post').parent();
        var textContent = $('<div>').html('Loading Text ...').appendTo(content);

        //console.log(requirejs.s.contexts._.config );

        $.when(bloglib.markdownFetcher(require.toUrl(postPath + 'test.txt'))).done(function (convertedText) {
            textContent.html(convertedText);
        });

        //bloglib.sendMail();


    });
});
