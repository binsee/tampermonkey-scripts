// ==UserScript==
// @name         移除网址中的锚点
// @version      0.0.2
// @description  Remove hash from URL, such as Douban group.
// @description:zh-cn  移除网址中的锚点，例如豆瓣小组。
// @author       binsee
// @namespace    https://github.com/binsee/tampermonkey-scripts
// @supportURL   https://github.com/binsee/tampermonkey-scripts/issues
// @license      GPL
// @noframes
// @match        *://www.douban.com/group/topic/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  setTimeout(function () {
    if (window.history.replaceState) {
      window.history.replaceState(null, null, '#');
    } else {
      window.location.replace('#');
    }
  }, 500);
})();