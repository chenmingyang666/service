layui
    .use([
        'form', 'jquery'
    ], function () {
        var form = layui.form,
            $ = layui.jquery,
            element = layui.element;
        (function ($) {
            var pca = {};
            pca.keys = {};
            pca.ckeys = {};
            pca.init = function (initData, province, city, area, initprovince, initcity, initarea) { //jQuery选择器, 省-市-区
                if (!province || !$(province).length) 
                    return;
                $(province).html('');
                $(province).append('<option value="" selected>请选择</option>');
                for (var i in initData) {
                    $(province).append('<option value="0' + (Number(i) + Number(1)) + '">' + initData[i].name + '</option>');
                    pca.keys[initData[i].name] = initData[i];
                }
                form.render();
                if (initprovince) 
                    $(province).next().find('[lay-value="' + initprovince + '"]').click();
                if (!city || !$(city).length) 
                    return;
                pca.formRender(city);
                form.on('select(cate)', function (data) {
                    if (data.value == '') {
                        $(city)
                            .next()
                            .find('dl dd')
                            .eq(0)
                            .click();
                    } else {
                        var cs = pca.keys[
                            $(data.elem)
                                .find('option[value=' + data.value + ']')
                                .text()
                        ];
                    };

                    $(city).html('');
                    $(city).append('<option value="" selected>请选择</option>');
                    if (cs) {
                        cs = cs.child;
                        for (var i in cs) {
                            $(city).append('<option>' + cs[i].name + '</option>');
                            pca.ckeys[cs[i].name] = cs[i];
                        }
                        $(city)
                            .find('option:eq(1)')
                            .attr('selected', true);
                    }
                    form.render();
                    $(city)
                        .next()
                        .find('.layui-this')
                        .removeClass('layui-this')
                        .click();
                    pca.formHidden('cate', data.value);
                });
                if (initprovince) 
                    $(province).next().find('[lay-value="' + initprovince + '"]').click();
                if (initcity) 
                    $(city).next().find('[lay-value="' + initcity + '"]').click();
                if (!area || !$(area).length) 
                    return;
                pca.formRender(area);
                form.on('select(brandName)', function (data) {
                    var cs = pca.ckeys[data.value];
                    $(area).html('');
                    $(area).append('<option value="" selected>请选择</option>');
                    if (cs) {
                        cs = cs.child;
                        for (var i in cs) {
                            $(area).append('<option value=' + cs[i].id + '>' + cs[i].name + '</option>');
                        }
                        $(area)
                            .find('option:eq(1)')
                            .attr('selected', true);
                    }
                    form.render();
                    $(area)
                        .next()
                        .find('.layui-this')
                        .removeClass('layui-this')
                        .click();
                    pca.formHidden('brandName', data.value);
                });
                form.on('select(brandCode)', function (data) {
                    pca.formHidden('brandCode', data.value);
                });
                if (initprovince) 
                    $(province).next().find('[lay-value="' + initprovince + '"]').click();
                if (initcity) 
                    $(city).next().find('[lay-value="' + initcity + '"]').click();
                if (initarea) 
                    $(area).next().find('[lay-value="' + initarea + '"]').click();
                }
            
            pca.formRender = function (obj) {
                $(obj).html('');
                // $(obj).append('<option>全部</option>');
                form.render();
            }
            pca.formHidden = function (obj, val) {
                if (!$('#pca-hide-' + obj).length) 
                    $('body').append('<input id="pca-hide-' + obj + '" type="hidden" value="' + val + '" />');
                else 
                    $('#pca-hide-' + obj).val(val);
                }
            
            window.pca = pca;
            return pca;
        })($);
    });