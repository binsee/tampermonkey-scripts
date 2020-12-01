// ==UserScript==
// @name         屏蔽html5播放器p2p上传
// @version      0.1
// @description  屏蔽html5播放器使用WebRTC技术进行p2p上传，如斗鱼直播后台上传等
// @author       binsee
// @match        http*://*.douyu.com/*
// @match        http*://*.qq.com/*
// @match        http*://*.huya.com/*
// @match        http*://*/*
// @exclude      *://*.bilibili.com/*
// @grant        none
// ==/UserScript==
let HookFlag = false

let debugFlag = true
let jsName = '屏蔽html5播放器p2p上传'
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
    let funNameList = [
        'RTCPeerConnection',
        'webkitRTCPeerConnection',
        'mozRTCPeerConnection',
        'msRTCPeerConnectio',
    ]
    funNameList.forEach(name => {
        if (typeof window._RTCPeerConnection === "undefined") window._RTCPeerConnection = window[name];
        if (typeof window[name] !== "undefined") window[name] = debugFlag ? MyPeerConnection : undefined;
    })
    logger.info('已屏蔽p2p上传功能')

    function MyPeerConnection(args) {
        logger.debug(`PeerConnection() 被调用！
当前页面尝试建立p2p连接！
调用参数: ${JSON.stringify(args)}`)
        return HookFlag ? new window._RTCPeerConnection(args) : undefined
    }
})();


