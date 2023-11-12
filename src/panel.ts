// DevToolsから選択された要素の情報を取得してテキストエリアに表示する
function updateElementProperties() {
    chrome.devtools.inspectedWindow.eval(
        `(${getElementInfo.toString()})($0)`,
        { useContentScriptContext: true },
        (result, isException) => {
            if (!isException && result) {
                const jsonOutput = document.getElementById('jsonOutput');
                if (jsonOutput !== null) {
                    (jsonOutput as HTMLInputElement).value = JSON.stringify(result, null, 2);
                }
            }
        }
    );
}

// 選択された要素の情報を取得するための関数
function getElementInfo(element: HTMLElement) {
    // ... getElementInfoの実装 ...
}

// サイドバーパネルが表示されたときにupdateElementProperties関数を呼び出す
chrome.devtools.panels.elements.createSidebarPane("Element JSON", sidebar => {
    sidebar.onShown.addListener((window) => {
        // window.updateElementProperties();
    });
});
