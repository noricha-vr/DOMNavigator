console.log("background.ts");
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "getSelectedDom",
        title: "選択したDOMを取得",
        contexts: ["all"],
        documentUrlPatterns: ["<all_urls>"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "getSelectedDom") {
        if (tab && tab.id !== undefined) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: getSelectedDom
            });
        }
    }
});

function getSelectedDom() {
    chrome.devtools.inspectedWindow.eval("inspect($0)", (result, isException) => {
        if (!isException && result) {
            // ここで選択されたDOM要素に関する処理を行う
            console.log("選択された要素:", result);
        }
    });
}
