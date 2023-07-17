chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
	console.log(message);
	cssLoaded = message.loaded;
	toggleCSSContent();

	return true;
});

let link;
function toggleCSSContent() {
	const cssURL = chrome.runtime.getURL('semantic-colors.css');
	console.log('BBB');
	console.log(cssLoaded);
	// Check if the CSS file is already loaded
	const isCSSLoaded =
		Array.from(document.querySelectorAll(`link[rel="stylesheet"][href="${cssURL}"]`)).length > 0;

	// Check if the CSS file is already loaded
	if (isCSSLoaded) {
		console.log('CSS is already loaded, removing it');
		// CSS is already loaded, so remove it
		const link = document.querySelector(`link[rel="stylesheet"][href="${cssURL}"]`);
		link.parentNode.removeChild(link);
	} else if (!isCSSLoaded) {
		console.log('CSS is not loaded, adding it');
		// CSS is not loaded, so add it
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = cssURL;
		document.head.appendChild(link);
	}
}
