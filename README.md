fis3-parser-markdown-vue
===============

A parser for fis3 to compile markdown file to vue components.

## 功能

 - 将markdown模版编译为VUE组件，不是单纯的.vue文件而是转换为组件了
 - 

## 用法

### 安装插件

    $ npm install --save-dev fis3-parser-markdown-vue
 

### 启用插件

```javascript
fis.match('src/page/apidoc/doc/**.md', {
    parser: fis.plugin('markdown-vue'),
    rExt: '.js',
    isMod: true
});
```


fis.config.set('settings.parser.jade', jadeConf);
```