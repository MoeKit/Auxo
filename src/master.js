// 主调用脚本，封装了iframe的数据获取
// iframe可以随页面加载，也可以用js加载
// @todo 考虑不同环境的url不一样
// @todo ready 返回store操作对象
var $ = require('jquery');
var Then = require('then');
var id = "Auxo";
var hasIframe = ($('#' + id).length) > 0;
var loaded = false;

// 初始化, 确保iframe加载完成
var ready = function (option, callback) {
    document.domain = 'seedit.com';
    var iUrl = 'http://common.seedit.com/cms/content.html?type=page&id=53bcf92ca3c3b1934e000064';
    var iframeUrl = option.url || iUrl;
    
    if ($('#' + id).length) {
        loaded = true;
        Then.nextTick(function () {
            callback(null, 'already ready');
        });
    } else {
        var $iframe = $('<iframe id="' + id + '"></iframe>')
            .hide()
            .load(function () {
                loaded = true;
                Then.nextTick(function () {
                    callback(null, 'ready');
                });
            })
            .attr('src', iframeUrl)
            .appendTo('body');
    }
};

exports.ready = function (option) {
    return Then(function (next, arg) {
        ready(option, next);
    });
};