// ==UserScript==
// @name         修复屏蔽wl.jd.com后京东站点问题
// @version      0.1.0
// @description  屏蔽wl.jd.com域名后，会导致京东站点出现无法正常显示之类的问题，此脚本对此问题进行了修复
// @author       binsee
// @namespace    https://github.com/binsee/tampermonkey-scripts
// @supportURL   https://github.com/binsee/tampermonkey-scripts/issues
// @license      GPL
// @match        *://*.jd.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    //伪造log.mmstat.log/eg.js内容，避免页面弹验证。
    window.log = () => { };
})();