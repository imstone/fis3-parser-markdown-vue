/*
 * fis
 * trxx@163.com
 * http://fis.baidu.com/
 */

'use strict';


var marked = require('marked');
var component = require('fis3-parser-vue-component');
var renderer = new marked.Renderer();
var Prism = require('prismjs')

var basedir = fis.project.getProjectPath();
global.__vue_com_list = []
renderer.code = function (code, lang) {
    lang = lang || '';
    var hl = Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
        .replace(/{{/g, '<span>{{</span>');
    return `<pre data-lang="${lang}"><code class="lang-${lang}">${hl}</code></pre>`
};
module.exports = function(content, file, conf){
  global.__vue_com_list.push(file.basename);
  var html = '<template><div>' + marked(content, { renderer: renderer }) + '</div></template>'
  html = component(html, file,conf )
  console.log(html)
  return html;
};
