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

function removeFocus() {
	var results = document.querySelectorAll("input#search");
    if (results.length === 1) {
        results[0].blur();
    }
}

setTimeout(function() {removeFocus(); removeAds();}, 1500);

//sometime page load very slow, so we need remove ads again.
setTimeout(function() {removeAds();}, 4000);