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

### 修复屏蔽mmstat后天猫弹验证问题

屏蔽mmstat域名以躲避数据追踪来保护隐私后，会导致天猫页面出现验证无法正常显示商品列表，此脚本对此问题进行了修复。

脚本文件:

- greasyfork: [修复屏蔽mmstat后天猫弹验证问题](https://greasyfork.org/zh-CN/scripts/417205-%E4%BF%AE%E5%A4%8D%E5%B1%8F%E8%94%BDmmstat%E5%90%8E%E5%A4%A9%E7%8C%AB%E5%BC%B9%E9%AA%8C%E8%AF%81%E9%97%AE%E9%A2%98)
- github(打开后点RAW获得原始文件url): [fix-tmall-popup-verify.js](./fix-tmall-popup-verify.js)

### 禁止自动添加自定义搜索引擎

用于禁止网站通过opensearch自动向浏览器添加自定义搜索引擎，以避免浏览器出现非常多的自定义搜索引擎。如需允许，请将其域名添加入排除名单，然后重新刷新页面即可。

脚本文件:

- greasyfork: [禁止自动添加自定义搜索引擎](https://greasyfork.org/zh-CN/scripts/417217-%E7%A6%81%E6%AD%A2%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E)
- github(打开后点RAW获得原始文件url): [block-auto-add-opensearch.js](./block-auto-add-opensearch.js)

### 屏蔽html5播放器p2p上传

屏蔽html5播放器使用WebRTC技术进行p2p上传，以及防止通过p2p泄露ip，如斗鱼直播后台上传等。需要注意默认屏蔽所有网站html5的p2p功能，需要使用p2p的网站请自行加入排除列表，如网易uu语音、twitch等。
嫌麻烦的请勿用。

脚本文件:

- greasyfork: [屏蔽html5播放器p2p上传](https://greasyfork.org/zh-CN/scripts/417216-%E5%B1%8F%E8%94%BDhtml5%E6%92%AD%E6%94%BE%E5%99%A8p2p%E4%B8%8A%E4%BC%A0)
- github(打开后点RAW获得原始文件url): [block-html5-p2p.js](./block-html5-p2p.js)

