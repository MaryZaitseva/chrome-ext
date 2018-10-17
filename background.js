chrome.runtime.onInstalled.addListener(function() {

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                css: ["p"]
              }),
              new chrome.declarativeContent.PageStateMatcher({
                css: ["span"]
              })
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });


  });

  