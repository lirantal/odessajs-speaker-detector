function updateExtensionIcon(message, metadata) {
  if (!message) {
    return;
  }

  if (!message.hasOwnProperty("foundMatch")) {
    return;
  }

  if (message.foundMatch === true) {
    browser.browserAction.setIcon({
      path: "icon/odessajs-logo-red.png",
      tabId: metadata.tab.id
    });
  } else {
    browser.browserAction.setIcon({
      path: "icon/odessajs-logo-black.png"
    });
  }
}

browser.runtime.onMessage.addListener(updateExtensionIcon);
