define(['jquery'], function ($) {

  var jsloader = function(blogName, type, filename) {
    $.getScript(require.toUrl(blogName + '/posts/' + filename + '/' + filename + '.js'), function( data, textStatus, jqxhr ) {
      console.log('loaded "' + filename + '" from '  + blogName);
    });
  };

  $.getJSON(
      "http://getcitydetails.geobytes.com/GetCityDetails?callback=?",
      function (data) {
        console.log(data);
      }
  );

  return {
    javascriptLoader: jsloader
  }

});

window.MathJax = {
    tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
    processEscapes: true
};

window.onload = function() {

    //$($('#intro_to_glaenta').parents()[4]).find('.date-header').find('span').html('Sticky Post');
    //require(['mathjax'], function(mathjax){
    //    console.log('loading mathjax');
    //});

    console.log("site is initialised");

}

//<!--script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'-->
//<script src='https://dl.dropboxusercontent.com/u/29864737/web/blogger/javascript/require.config.js'/>
//<script src='https://cdnjs.cloudflare.com/ajax/libs/require.js/2.2.0/require.min.js'/>
