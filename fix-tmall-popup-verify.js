// ==UserScript==
// @name         修复屏蔽mmstat后天猫弹验证问题
// @version      0.1.1
// @description  屏蔽mmstat域名以躲避数据追踪来保护隐私后，会导致天猫页面出现验证无法正常显示商品列表，此脚本对此问题进行了修复
// @author       binsee
// @namespace    https://github.com/binsee/tampermonkey-scripts
// @supportURL   https://github.com/binsee/tampermonkey-scripts/issues
// @license      GPL
// @match        https://*.tmall.com/*
// @match        https://*.taobao.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    //伪造log.mmstat.log/eg.js内容，避免页面弹验证。
    window.goldlog = (window.goldlog || {}); goldlog.Etag = "xxxxxxxxxxx"; goldlog.stag = 1;
})();