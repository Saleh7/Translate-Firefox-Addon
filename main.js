/* Translate - الترجمة
 * Version: 2.1
 * Author: Saleh Bin Homoud
 * Github: https://github.com/Saleh7
 * Source:https://github.com/Saleh7/Translate-Firefox-Addon*/
const tabs = require("sdk/tabs");
const contextMenu = require("sdk/context-menu"); // Include the `context-menu` module.
const self = require("sdk/self");
// Create a Menu Item

// It will send the selected text to http://translate.google.com/#auto/ar/
// Google for translation
var menuItem = contextMenu.Item({
    label: "ترجمة | Google",
    image: self.data.url("t.png"),
    context: contextMenu.SelectionContext(),
    contentScript: 'self.on("click", function() {' +
                    '   var text = window.getSelection().toString();' +
                    '   self.postMessage(text);' +
                    '});',
    onMessage: function(selectionText) {
        tabs.open("http://translate.google.com/#auto/ar/" + encodeURIComponent(selectionText))
    }
});

// It will send the selected text to https://www.bing.com/translator/default.aspx?to=ar&from=auto&text=
// Bing for translation
var menuItem0 = contextMenu.Item({
    label: "ترجمة | Bing",
    image: self.data.url("bing.png"),
    context: contextMenu.SelectionContext(),
    contentScript: 'self.on("click", function() {' +
                    '   var text = window.getSelection().toString();' +
                    '   self.postMessage(text);' +
                    '});',
    onMessage: function(selectionText) {
        tabs.open("https://www.bing.com/translator/default.aspx?to=ar&from=auto&text=" + encodeURIComponent(selectionText))
    }
});

// It will send the selected text to https://www.bing.com/translator/default.aspx?to=ar&from=auto&text=
// Yandex for translation
var menuItem1 = contextMenu.Item({
    label: "ترجمة | Yandex",
    image: self.data.url("yandex.png"),
    context: contextMenu.SelectionContext(),
    contentScript: 'self.on("click", function() {' +
                    '   var text = window.getSelection().toString();' +
                    '   self.postMessage(text);' +
                    '});',
    onMessage: function(selectionText) {
        tabs.open("https://translate.yandex.com/?lang=zh-ar&text=" + encodeURIComponent(selectionText))
    }
});

// It will send the selected text to translate.google.com/translate_tts?&tl=en&q=
// Google translation voice
var menuItem2 = contextMenu.Item({
    label: "ترجمة | صوتية",
    image: self.data.url("m.png"),
    context: contextMenu.SelectionContext(),
    contentScript: 'self.on("click", function() {'+
                    '   var text = window.getSelection().toString();' +
                    '   self.postMessage(text);' +
                    '});',
    onMessage: function(selectionText) {
        tabs.open("http://translate.google.com/translate_tts?tl=en&q=" + encodeURIComponent(selectionText))
    }
});
