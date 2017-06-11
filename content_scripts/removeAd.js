function removeBy(cssSelector) {
	var elements = document.querySelectorAll(cssSelector);
	elements.forEach(function(element, index, array) {
		element.style.display = 'none';
	});
}

function removeAds() {
	removeBy("div.adslot");
	removeBy("div.leaderboard-ad");
	removeBy("div#google_center_div")
}


setTimeout(function() {removeAds();}, 1500);