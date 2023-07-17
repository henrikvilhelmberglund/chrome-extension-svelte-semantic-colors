let cssLoaded = false;

chrome.action.onClicked.addListener(async (tab) => {
	cssLoaded = !cssLoaded;

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.action.setIcon({
			tabId: tabs[0].id,
			path: cssLoaded ? 'icon_enabled.png' : 'icon_disabled.png'
		});
		chrome.tabs.sendMessage(
			tabs[0].id,
			// cssLoaded isn't used now but keeping this here so I know how to send stuff
			{ action: 'toggleCSS', loaded: cssLoaded },
			function (response) {}
		);
	});
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
	const tab = await chrome.tabs.get(activeInfo.tabId);
	chrome.action.setIcon({
		tabId: tab.id,
		path: cssLoaded ? 'icon_enabled.png' : 'icon_disabled.png'
	});
});
