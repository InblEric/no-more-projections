chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
   if (changeInfo.status == 'complete') {
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
       chrome.tabs.sendMessage(tab.id, {action: "remove_projections"}, function(response) {void chrome.runtime.lastError;});       
     });
   }
});
