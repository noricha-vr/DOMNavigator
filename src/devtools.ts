
chrome.devtools.panels.elements.createSidebarPane("DOMNavigator", sidebar => {
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
          const text = element.textContent.trim().substring(0, 20);
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
