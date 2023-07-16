// content.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.action === 'toggleColors') {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = chrome.runtime.getURL('semantic-colors.css');
		document.head.appendChild(link);
	}
});
