chrome.action.onClicked.addListener(async (tab) => {
    console.log('Test');
    await chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['inject.js']
    });
  });
  