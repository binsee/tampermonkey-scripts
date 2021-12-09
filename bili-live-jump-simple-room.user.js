// ==UserScript==
// @name         不显示B站直播间活动皮肤
// @version      0.0.2
// @description  Jump to the simple version of the live broadcast room.
// @description:zh-cn  让有活动皮肤的B站直播间，跳转到直播间原始样式，还原简洁的观看体验。
// @author       binsee
// @namespace    https://github.com/binsee/tampermonkey-scripts
// @supportURL   https://github.com/binsee/tampermonkey-scripts/issues
// @license      GPL
// @run-at       document-end
// @noframes
// @match        *://live.bilibili.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  if (window.__initialState?.BaseInfo?.__activity_id) {
    const tmp = window.location.pathname.match(/^\/(\d+)/)
    const roomId = tmp ? tmp[1] : window.__initialState['live-non-revenue-player'][0].defaultRoomId
    const url = 'https://live.bilibili.com/blanc/' + roomId
    console.log('【不要显示B站直播活动皮肤】', '即将跳转到', url)
    window.location.href = url
  }
})();