// ==UserScript==
// @name         禁止自动添加自定义搜索引擎
// @version      0.1.1
// @description  用于禁止网站通过opensearch自动向浏览器添加自定义搜索引擎，以避免浏览器出现非常多的自定义搜索引擎。如需允许，请将其域名添加入排除名单，然后重新刷新页面即可。
// @author       binsee
// @namespace    https://github.com/binsee/tampermonkey-scripts
// @supportURL   https://github.com/binsee/tampermonkey-scripts/issues
// @license      GPL
// @match        *://*/*
// @exclude      *://*.bilibili.com/*
// @exclude      *://*.github.com/*
// @exclude      *://*.google.com/*
// @exclude      *://*.google.cn/*
// @exclude      *://*.youtube.com/*
// @exclude      *://*.yandex.com/*
// @exclude      *://*.douban.com/*
// @exclude      *://*.zhihu.com/*
// @grant        none
// ==/UserScript==

let debugFlag = false
let jsName = '禁止自动添加自定义搜索引擎'
let logger = {
  debug: createDebugMethod('debug'),
  info: createDebugMethod('info'),
  warn: createDebugMethod('warn'),
  error: createDebugMethod('error')
};

function createDebugMethod(name) {
  const bgColorMap = {
    debug: '#0070BB',
    info: '#009966',
    warn: '#BBBB23',
    error: '#bc0004'
  };
  name = bgColorMap[name] ? name : 'info';
  return function () {
    const args = Array.from(arguments);
    args.unshift(`color: white; background-color: ${bgColorMap[name] || '#FFFFFF'}`);
    args.unshift(`【${jsName}】 %c[${name.toUpperCase()}]:`);
    console[name].apply(console, args);
  }
}


(function () {
  'use strict';

  var elOpenSearch = document.querySelector('[type="application/opensearchdescription+xml"]');
  if (elOpenSearch) {
    logger.info('此站点配置了OpenSearch，以向浏览器添加自定义搜索引擎，已经对其进行屏蔽。如需同意此站点添加自定义搜索引擎，请为本脚本排除此站点域名。\nelOpenSearch:', elOpenSearch);
    elOpenSearch.remove();
  }
})();

