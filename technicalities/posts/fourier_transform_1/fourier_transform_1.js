require(['jqueryui', 'mathjax'], function(jqueryui, mathjax){

    var blogName = 'technicalities';
    var postName = 'fourier_transform_1';
    var postPath = blogName + '/posts/' + postName+ '/';
    var postUrl = require.toUrl(postPath);

    var content = $('#' + postName).parent();
    //var textContent = $('<div>').html('Loading Text ...').appendTo(content);

    //console.log('<object data="' + postUrl + 'fourier1.svg" width="500" height="320" type="image/svg+xml" />');
    //var svgObject = $('<object data="' + postUrl + 'fourier1.svg" width="500" height="320" type="image/svg+xml" />').appendTo(content);

    //var svgObject = $('<object>').
    //    attr('data', postUrl + 'fourier1.svg').
    //    //attr('width',"500").
    //    //attr('height',"500").
    //    attr('type',"image/svg+xml").
    //    appendTo(content);


    var circleRadius = 0;
    var circleX = 0;
    var circleY = 0;
    $.get(postUrl + 'phase_diagram2.svg', function(svgData) {
        //console.log(svgData.documentElement);
        content.append(svgData.documentElement);
        circleX = parseInt($('#unitCircle').attr('cx'));
        circleY = parseInt($('#unitCircle').attr('cy'));
        circleRadius = parseInt($('#unitCircle').attr('r'));
        //console.log($('#g4181')[0]);
        //$('#wheel').attr('transform', 'rotate(10,100,110)');
    });

    var eq1 = (function () {/*
     $$\tilde x(t) = \sum\limits_{k =  - \infty }^\infty  {{a_k}{e^{ik{\omega _0}t}}}$$
     */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

    var eq2 = (function () {/*
     $${a_k} = \frac{1}{T}\int\limits_0^T {\tilde x(t){e^{ - ik{\omega _0}t}}dt}$$
     */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

    content.append(eq1);
    content.append(eq2);

    var valueDisplay = $('<div>').attr('id','valueDisplay').appendTo(content);

    var k = 3;
    var N = 100;

    var signal = [];
    for (var iSignal=0; iSignal<=N; iSignal++) {
        signal[iSignal] = Math.sin(iSignal * 2*Math.PI / N);
    }

    var sumX=0, sumY=0;
    var sliderObj = $('<div>').slider({
        min: 0,
        max: N,
        step: 1,
        slide: function(event, ui) {
            var rotDegrees = ui.value * 360 * k / N;
            var rotRadians = rotDegrees * Math.PI / 180;
            $('#phase').attr('transform', 'rotate(' + rotDegrees + ',' + circleX + ',' + circleY + ')');
            if (ui.value == 0 || ui.value == N) {
                $('#MathJax-Span-56').html('T');
            }
            else {
                $('#MathJax-Span-56').html(ui.value/N + 'T');
            }

            var pointX = circleX + signal[ui.value] * circleRadius * Math.cos(rotRadians);
            var pointY = circleY + signal[ui.value] * circleRadius * Math.sin(rotRadians);

            sumX += signal[ui.value] * circleRadius * Math.cos(rotRadians);
            sumY += signal[ui.value] * circleRadius * Math.sin(rotRadians);
            console.log(sumX);
            console.log(sumY);

            valueDisplay.html('');
            valueDisplay.append(signal[ui.value] + '<br>');
            valueDisplay.append(pointX + '<br>');
            valueDisplay.append(pointY + '<br>');

            var newPoint = $('#point').clone();

            newPoint.attr('cx', pointX).attr('cy', pointY).appendTo($('#points'));
            //var svgPoint = $('<circle>').
            //    attr('r','2').
            //    attr('cx',pointX).
            //    attr('cy',pointY).
            //    css({
            //        fill: '#0000ff',
            //        stroke: 'none',
            //        'stroke-width': 1,
            //        'stroke-miterlimit': 4,
            //        'stroke-dasharray': 'none',
            //        'stroke-dashoffset': 0
            //    }).appendTo($('#points'));

        }
    }).appendTo(content);


    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);



});
