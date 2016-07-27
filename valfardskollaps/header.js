(function(){
	
function parseDate(str) {
	var mdy = str.split('/')
	return new Date(mdy[2], mdy[1]-1, mdy[0]);
}

function dhm(t){
	var cy = 256 * 24 * 60 * 60 * 1000,
		cd = 24 * 60 * 60 * 1000,
		ch = 60 * 60 * 1000,
		cm = 60 * 1000,
		y = Math.floor(t / cy),
		d = Math.floor((t - y * cy) / cd),
		h = Math.floor( (t - d*cd) / ch),
		m = Math.floor( (t - d*cd - h*ch) / cm),
		s = Math.floor( (t - d*cd - h*ch - m*cm) / 1000),
		pad = function(n){ return n < 10 ? '0' + n : n; };
  if( m === 60 ){
	h++;
	m = 0;
  }
  if( h === 24 ){
	d++;
	h = 0;
  }
//  return [y, d, pad(h), pad(m), pad(s)].join(':');
	return y + ' år<br> ' + 
		 d + ' dagar<br> ' + 
		 h + ' timmar<br> ' + 
		 m + ' minuter<br> ' + 
		 s + ' sekunder '; 
}

function daydiff(first, second) {
	return dhm(second-first);
}

function updateTime() {
	counter.html(daydiff(parseDate('11/10/2015'), new Date()));
	setTimeout(updateTime, 1000);
}

var content = $("<div>").appendTo($("#valfardskollaps_header").parent());

var counter = $("<div>").css({'margin-bottom': '30px'}).appendTo(content);

var playerWidth = content.width()*0.75;

var movieFrame = $("<iframe>", {
	allowfullscreen: true,
	width: playerWidth,
	height: playerWidth/2,
	src: 'https://www.youtube.com/embed/ePatMu1vBBo',
	frameborder:'0'
}).appendTo(content);
	
counter.parent().css({textAlign: 'center', 'padding-top': '20px'});
counter.css({fontSize: '40px', textAlign: 'center'});
counter.html(daydiff(parseDate('11/10/2015'), new Date()));

updateTime();

})();

