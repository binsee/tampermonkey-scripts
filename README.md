# Tampermonkey油猴脚本

自制或收藏脚本

## 安装方式

### 使用greasyfork安装

1. 打开下方对应脚本的`greasyfork`链接
2. 在greasyfork站点页面上安装脚本

### 使用github url安装

1. 打开下方对应脚本的`github`链接
2. 在脚本页面上点`Raw`按钮跳转到原始文件页面
3. 然后复制网址
4. 打开Tampermonkey设置，进入`实用工具`页面
5. 在`Install from URL`一项中粘贴网址，点击安装

## 脚本列表

### 修复屏蔽mmstat后淘系站点问题

屏蔽mmstat域名以躲避数据追踪来保护隐私后，会导致天猫页面出现验证无法正常显示商品列表，此脚本对此问题进行了修复。

脚本文件:

- greasyfork: [修复屏蔽mmstat后淘系站点问题](https://greasyfork.org/zh-CN/scripts/417225-%E4%BF%AE%E5%A4%8D%E5%B1%8F%E8%94%BDmmstat%E5%90%8E%E6%B7%98%E7%B3%BB%E7%AB%99%E7%82%B9%E9%97%AE%E9%A2%98)
- github(打开后点RAW按钮): [fix-block-mmstat.user.js](./fix-block-mmstat.user.js)

### 修复屏蔽wl.jd.com后京东站点问题

屏蔽wl.jd.com域名后，会导致京东站点出现无法正常显示之类的问题，此脚本对此问题进行了修复

脚本文件:

- greasyfork: 
- github(打开后点RAW按钮): [fix-block-jd-log.user.js](./fix-block-jd-log.user.js)

### 禁止自动添加自定义搜索引擎

用于禁止网站通过opensearch自动向浏览器添加自定义搜索引擎，以避免浏览器出现非常多的自定义搜索引擎。如需允许，请将其域名添加入排除名单，然后重新刷新页面即可。

脚本文件:

- greasyfork: [禁止自动添加自定义搜索引擎](https://greasyfork.org/zh-CN/scripts/417217-%E7%A6%81%E6%AD%A2%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E)
- github(打开后点RAW按钮): [block-auto-add-opensearch.user.js](./block-auto-add-opensearch.user.js)

### 屏蔽html5播放器p2p上传

屏蔽html5播放器使用WebRTC技术进行p2p上传，以及防止通过p2p泄露ip，如斗鱼直播后台上传等。需要注意默认屏蔽所有网站html5的p2p功能，需要使用p2p的网站请自行加入排除列表，如网易uu语音、twitch等。
嫌麻烦的请勿用。

脚本文件:

- greasyfork: [屏蔽html5播放器p2p上传](https://greasyfork.org/zh-CN/scripts/417216-%E5%B1%8F%E8%94%BDhtml5%E6%92%AD%E6%94%BE%E5%99%A8p2p%E4%B8%8A%E4%BC%A0)
- github(打开后点RAW按钮): [block-html5-p2p.user.js](./block-html5-p2p.user.js)

### 屏蔽弹窗信息

屏蔽网站使用 `alert` 弹出提示框，改用 `console.log` ，以提高页面使用体验。

脚本文件:

- greasyfork: [no alert](https://greasyfork.org/zh-CN/scripts/434311-no-alert)
- github(打开后点RAW按钮): [no-alert.user.js ](./no-alert.user.js)
