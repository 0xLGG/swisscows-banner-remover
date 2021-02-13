var inter = window.setInterval( function() {
	var doc = document.getElementsByClassName("banners-wrap")[0];

	if (doc) {
		doc.hidden = true;
		window.clearInterval(inter);
	}
}, 300);
