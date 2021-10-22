// ==UserScript==
// @name         No alert
// @version      0.1.0
// @description  Don't pop up alert, use console.log
// @author       binsee
// @namespace    https://github.com/binsee/tampermonkey-scripts
// @supportURL   https://github.com/binsee/tampermonkey-scripts/issues
// @license      GPL
// @run-at       document-start
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  var _alert = alert;
  alert = console.log;
})();