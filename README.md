fis3-parser-markdown-vue
===============

A parser for fis3 to compile markdown file to vue components.

## 功能

 - 将markdown模版编译为VUE组件，不是单纯的.vue文件而是转换为组件了
 - 

## 用法

### 安装插件

    $ npm install -g fis-parser-jade
    $ vi path/to/project/fis-conf.js

### 启用插件

```javascript
fis.match('src/page/apidoc/doc/**.md', {
    parser: fis.plugin('markdown-vue'),
    rExt: '.js',
    isMod: true
});
```

### 添加自定义filter与jade编译设置

```javascript
var jadeConf = {
	filters : {
		jadesrc : require('jade-highlighter')
	},
  pretty  : true
};

fis.config.set('settings.parser.jade', jadeConf);
```