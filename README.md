# DOMNavigator for Chrome DevTools

## 概要

`DOMNavigator` は、Chrome DevTools の機能を拡張する拡張機能で、ユーザーがElementsパネルで選択したDOM要素の情報を表示し、コピーできるようにします。

コピーされた情報を[Xpath生成アシスタント](https://chat.openai.com/g/g-aIA7TLluS-xpathsheng-cheng-asisutanto)に貼り付けると、XPathの候補が生成されます。

![DOMNavigatorのスクリーンショット](https://i.gyazo.com/9777e3b96b4bfb97a3aa18462f3d1a4c.png)

## 特徴

- 選択したDOM要素のタグ名、属性、テキストコンテンツを含む詳細情報をリアルタイムで取得します。
- 整形された要素の詳細をリスト表示します。
- Elementsパネルから直接アクセス可能で、右クリックしでコピーするだけですぐに利用できます。
- Xpath生成アシスタントに貼り付けると、XPathの候補が生成されます。

## インストール方法

1. [Google Chromen に追加](https://chrome.google.com/webstore/detail/domnavigator/djffbmcigflbjkkbimdpfoloelgddcgk)します
1. 拡張機能がDevToolsに組み込まれ、利用可能になります。

## 使い方

1. 任意のウェブページを開き、DevToolsを起動します（F12キーまたはCtrl+Shift+I、MacではCmd+Option+I）。
1. `Elements`パネルにて、調べたいDOM要素を選択します。
1. サイドバーから `DOMNavigator` を選択します。
1. `DOMNavigator` にDOMのリストが作成されます。
1. リストの一番上のオブジェクトを選択して、右クリックメニューから`CopyObject`ボタンをクリックすると、JSON形式の要素情報がクリップボードにコピーされます。
1. [XPath生成アシスタント](https://chat.openai.com/g/g-aIA7TLluS-xpathsheng-cheng-asisutanto)に貼り付けて送信すると、XPathの候補が生成されます。
1. 生成されたXPathを使って、Seleniumなどの自動テストツールでDOM要素を操作できます。

## 開発者向け情報

- `src/devtools.ts`: DevToolsサイドバーパネルの作成と要素の情報を更新するためのスクリプトです

## ライセンス

`DOMNavigator` は [MITライセンス](LICENSE) の下で提供されています。
