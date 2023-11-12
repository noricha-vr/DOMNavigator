let elementInfo: any = null; // グローバル変数で要素情報を保存

chrome.devtools.panels.elements.createSidebarPane("Selected Element JSON", sidebar => {
    function updateElementProperties() {
        const expression = `
      (function() {
        let element = $0;
        const info = [];
        while (element && element.nodeType === Node.ELEMENT_NODE) {
          const tag = element.tagName.toLowerCase();
          const attrs = element.attributes;
          const attributes = {};
          for (let i = 0; i < attrs.length; i++) {
            attributes[attrs[i].name] = attrs[i].value;
          }
          const text = element.textContent.trim(); // 各要素のtextContentを取得
          info.push({ tag, attributes, text }); // textを追加
          if (element.id || element === document.documentElement) {
            break;
          }
          element = element.parentElement;
        }
        return [info.reverse()] // 結果をJSON形式に変換し、順序を反転
      })()
    `;
        sidebar.setExpression(expression);
    }

    chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
    updateElementProperties();
});
