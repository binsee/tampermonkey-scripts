// ==UserScript==
// @name         修复屏蔽mmstat后淘系站点问题
// @version      0.1.3
// @description  屏蔽mmstat域名以躲避数据追踪来保护隐私后，会导致天猫、优酷等站点出现验证无法正常显示之类的问题，此脚本对此问题进行了修复
// @author       binsee
// @namespace    https://github.com/binsee/tampermonkey-scripts
// @supportURL   https://github.com/binsee/tampermonkey-scripts/issues
// @license      GPL
// @run-at       document-start
// @match        *://*.tmall.com/*
// @match        *://*.taobao.com/*
// @match        *://*.youku.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    //伪造log.mmstat.log/eg.js内容，避免页面弹验证。
    window.goldlog = (window.goldlog || {}); goldlog.Etag = "xxxxxxxxxxx"; goldlog.stag = 1;
})();