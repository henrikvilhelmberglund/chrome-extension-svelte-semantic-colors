// background.js or popup.js
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleColors' });
});
