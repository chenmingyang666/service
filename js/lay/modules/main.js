layui
    .define([
        'laytpl', 'laypage', 'layer', 'form'
    ], function (e) {
        var $ = layui.$,
            laytpl = layui.laytpl,
            laypage = layui.laypage,
            layer = layui.layer,
            form = layui.form;
        initModal = function (title, url) {
            layer.open({
                title: title,
                type: 2,
                content: url,
                area: ['100%', '100%']
            });
        },
        initMinModal = function (title, url) {
            layer.open({
                title: title,
                type: 2,
                content: url,
                area: ['60%', '100%']
            });
        };

        e('main', {})
    })