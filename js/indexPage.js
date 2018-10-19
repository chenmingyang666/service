//一般直接写在一个js文件中
layui
    .use([
        'layer',
        'form',
        'jquery',
        'element',
        'common',
        'address'
    ], function () {
        var $ = layui.$,
            layer = layui.layer,
            form = layui.form,
            element = layui.element,
            layEvent = layui.event,
            address = layui.address(),
            common = layui.common;
        element.init();
        layer.msg('欢迎您，尊贵的服务商！');
        if (!layui.sessionData('token').token) {
            window.location.href = 'login.html'
        } else {
            if (!layui.sessionData('nickName').nickName) {
                $('.shadeBg').show();
                $('.userData').show();
                form.on('submit(sendInfo)', function (data) {
                    var field = data.field;
                    // console.log(field);
                    if (field.email) {
                        if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(field.email)) {
                            layer.tips('请输入正确的邮箱', '#email');
                            return false;
                        }
                    }
                    layer.open({
                        content: '确定保存信息?',
                        btn: [
                            '确定', '取消'
                        ],
                        fixed: true,
                        offset: '40%',
                        yes: function (index, layero) {
                            common
                                .updateInfo(field, function (res) {
                                    if (res.code == 200) {
                                        layer.msg('保存成功');
                                        if (res.data) {
                                            layui.sessionData('nickName', {
                                                key: 'nickName',
                                                value: res.data.name
                                            });
                                            $('.nickName').text(res.data.name);
                                            $('.shadeBg').hide();
                                            $('.userData').hide();
                                            layer.close(index); //如果设定了yes回调，需进行手工关闭
                                        }
                                    }
                                })
                        },
                        btn2: function (index) {
                            layer.close(index)
                        },
                        cancel: function (index) {
                            layer.close(index)
                        }
                    });
                });
            } else {
                $('.nickName').text(layui.sessionData('nickName').nickName);
            }
        };
        form.render();
        FrameWH();
        function FrameWH() {
            var h = $(window).height() - 41 - 10 - 60 - 10 - 44 - 10;
            $("iframe").css("height", h + "px");
        };
        $(window).resize(function () {
            FrameWH();
        });
        // 此处开始
        $('a').click(function (e) {
            e.preventDefault();
        });
        $('.quit').on('click', function () {
            layer
                .confirm('确认退出系统?', {
                    icon: 3,
                    title: '提示'
                }, function (index) {
                    //do something
                    sessionStorage.clear();
                    window.location.href = 'login.html'
                    layer.close(index);
                });
        });
        // 标签栏下拉菜单
        $('.layadmin-tabs-select li').hover(function (e) {
            $(this)
                .find('dl')
                .show();

        }, function (e) {
            $(this)
                .find('dl')
                .hide();
        });
        $('.layadmin-pagetabs  .layui-icon-prev').on('click', function () {
            active.leftPage();
        });
        $('.layadmin-pagetabs  .layui-icon-next').on('click', function () {
            active.rightPage();
        });
        var active = {
            //在这里给active绑定几项事件，后面可通过active调用这些事件
            tabAdd: function (url, id, name) {
                // 新增一个Tab项 传入三个参数，分别对应其标题，tab页面的地址，还有一个规定的id，是标签中data-id的属性值
                // 关于tabAdd的方法所传入的参数可看layui的开发文档中基础方法部分
                element.tabAdd('layadmin-layout-tabs', {
                    title: name,
                    content: '<iframe data-frameid="' + id + '" scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:99%;"></iframe>',
                    id: id //规定好的id
                })
                FrameWH(); //计算ifram层的大小
            },
            tabChange: function (id) {

                //切换到指定Tab项
                element.tabChange('layadmin-layout-tabs', id); //根据传入的id传入到指定的tab项
                active.rollPage();
            },
            tabDelete: function (id) {
                element.tabDelete("layadmin-layout-tabs", id); //删除
            },
            tabDeleteOther: function (idOther) {
                $.each(idOther, function (i, item) {
                        element.tabDelete("layadmin-layout-tabs", item); //ids是一个数组，里面存放了多个id，调用tabDelete方法分别删除

                    })

            },
            tabDeleteAll: function (ids) {
                //删除所有
                $.each(ids, function (i, item) {
                        element.tabDelete("layadmin-layout-tabs", item); //ids是一个数组，里面存放了多个id，调用tabDelete方法分别删除
                    })
            },
            tabsBodyChange: function () {
                active.rollPage('auto')
            },
            rollPage: function (e, i) {
                var t = $("#LAY_app_tabsheader"),
                    l = t.children("li"),
                    n = (t.prop("scrollWidth"), t.outerWidth()),
                    s = parseFloat(t.css("left"));
                if ("left" === e) {
                    if (!s && s <= 0) 
                        return;
                    var r = -s - n;
                    l.each(function (e, i) {
                        var l = $(i),
                            n = l
                                .position()
                                .left;
                        if (n >= r) 
                            return t.css("left", -n),
                            !1
                    })
                } else {
                    "auto" === e
                        ? !function () {
                            var e,
                                r = l.eq(i);
                            if (r[0]) {
                                if (e = r.position().left, e < -s) 
                                    return t.css("left", -e);
                                if (e + r.outerWidth() >= n - s) {
                                    var o = e + r.outerWidth() - (n - s);
                                    l.each(function (e, i) {
                                        var l = $(i),
                                            n = l
                                                .position()
                                                .left;
                                        if (n + s > 0 && n - s > o) 
                                            return t.css("left", -n),
                                            !1
                                    })
                                }
                            }
                        }()
                        : l.each(function (e, i) {
                            var l = $(i),
                                r = l
                                    .position()
                                    .left;
                            if (r + l.outerWidth() >= n - s) 
                                return t.css("left", -r),
                                !1
                        })
                }
            },
            leftPage: function () {
                active.rollPage("left")
            },
            rightPage: function () {
                active.rollPage()
            }
        };
        // 监听tab标签栏的变化
        element.on('tab(layadmin-layout-tabs)', function (data) {
            var thisId = $(this).attr('lay-id');
            $('.layui-side .layui-nav-tree li dd a[data-url="' + thisId + '"]')
                .parent('dd')
                .addClass('layui-this');
            $('.layui-side .layui-nav-tree dd')
                .not($('.layui-side .layui-nav-tree li dd a[data-url="' + thisId + '"]').parent('dd'))
                .removeClass('layui-this')
        });
        //  动态添加Iframe到主显示框
        $('.layui-side ul .layui-nav-item:first>a[data-url],.layui-side ul li a[data-title]' +
                    ',.top-right  li a[data-url]').on('click', function (e) {
            e.preventDefault();
            var href = $(this).attr('href'),
                dataid = $(this);
            //这时会判断右侧.layui-tab-title属性下的有lay-id属性的li的数目，即已经打开的tab项数目
            if ($(".layui-tab-title li[lay-id]").length <= 0 && $(this).attr("lay-id") != dataid.attr("data-id")) {
                //如果比零小，则直接打开新的tab项
                active.tabAdd(dataid.attr("data-url"), dataid.attr("data-id"), dataid.attr("data-title"));
            } else {
                //否则判断该tab项是否以及存在
                var isData = false; //初始化一个标志，为false说明未打开该tab项 为true则说明已有
                $.each($(".layui-tab-title li[lay-id]"), function () {
                    //如果点击左侧菜单栏所传入的id 在右侧tab项中的lay-id属性可以找到，则说明该tab项已经打开
                    if ($(this).attr("lay-id") == dataid.attr("data-id")) {
                        isData = true;
                        active.rollPage('auto', $('.layui-tab-title li[lay-id="' + href + '"]').index())
                    }
                });
                if (isData == false && $(this).attr) {
                    //标志为false 新增一个tab项
                    active.tabAdd(dataid.attr("data-url"), dataid.attr("data-id"), dataid.attr("data-title"));
                }
            };
            //最后不管是否新增tab，最后都转到要打开的选项页面上
            active.tabChange(dataid.attr("data-id"));
        });
        $('.layadmin-pagetabs .layui-tab li')
            .first()
            .on('click', function () {
                $('.layui-side ul .layui-nav-item:first>a[data-url]').trigger('click')
            });
        $('.layadmin-pagetabs .layui-tab li')
            .not($('.layadmin-pagetabs .layui-tab li:first'))
            .on('click', function () {
                $('.layui-side ul .layui-nav-item:first>a[data-url]').removeClass('layui-this')
            });
        // 关闭tab
        $('.tabmenu dd').on('click', function () {
            var type = $(this).attr('data-type');
            if (type === 'closeThisTabs') { //关闭当前页面

                var id = $('#LAY_app_tabsheader li.layui-this').attr('lay-id');
                if (id != 'pages/Index/index.html') {
                    active.tabDelete(id);
                } else {
                    return false
                }

            } else if (type === 'closeOtherTabs') { //关闭其他页面
                var idOther = [];
                $('#LAY_app_tabsheader li').not('#LAY_app_tabsheader li:first')
                    .not('#LAY_app_tabsheader li.layui-this')
                    
                    .each(function () {
                        idOther.push($(this).attr('lay-id'));
                    });
                active.tabDeleteOther(idOther);
            } else if (type === 'closeAllTabs') { //关闭除首页之外的所有页面
                var ids = [];
                $('#LAY_app_tabsheader li')
                    .not('#LAY_app_tabsheader li:first')
                    .each(function () {
                        ids.push($(this).attr('lay-id'));
                    });
                    console.log(ids);
                active.tabDeleteAll(ids);
                active.leftPage();
            }
        });
        // 实现侧边菜单的收缩
        var isFlex = true; //定义一个标志位

        $('.flex_button').click(function () {
            //判断的状态
            if (isFlex) {
                $('.layui-side.layui-bg-black,.layui-layout-admin .layui-logo,.layui-side-scroll,.l' +
                        'ayui-body').width(60); //设置宽度

                $('.layui-layout-left.flex_button').css('left', '60px'); //修改图标的位置
                //将footer和body的宽度修改
                $('.layadmin-pagetabs,.layui-footer').css('left', 60 + 'px');
                $('.main-content').css('left', 60 + 'px');
                //将二级导航栏隐藏 $('dd span').each(function () {     $(this).hide(); });
                $('.layui-logo span,.layui-side span').each(function () {
                    $(this).fadeOut(100);
                });
                $('.mainlogo').hide();
                $('.minlogo').show();
                $('.layui-side .layui-nav-item').removeClass('layui-nav-itemed')
                //修改标志位
                isFlex = false;
            } else {
                $('.layui-side.layui-bg-black,.layui-layout-admin .layui-logo,.layui-side-scroll,.l' +
                        'ayui-body').width(200);

                $('.layui-layout-left.flex_button,.layui-body,.layui-footer,.layadmin-pagetabs').css('left', 200 + 'px');
                $('.main-content').css('left', 200 + 'px');
                $('.mainlogo').show();
                $('.minlogo').hide();
                $('.layui-logo span,.layui-side span').each(function () {
                    $(this).fadeIn(300);
                });

                isFlex = true;
            }
        });
        // 侧边栏缩进去
        $('.layui-side ul li.layui-nav-item').click(function () {
            if (isFlex === false) {
                $('.layui-side.layui-bg-black,.layui-layout-admin .layui-logo,.layui-side-scroll,.l' +
                        'ayui-body').width(200);
                $('.layui-logo span').show();
                $('.layui-layout-left.flex_button,.layui-body,.layui-footer,.layadmin-pagetabs').css('left', 200 + 'px');
                $('.main-content').css('left', 200 + 'px');
                $('.layui-logo span,.layui-side span').each(function () {
                    $(this).fadeIn(300);
                });
                $('.mainlogo').show();
                $('.minlogo').hide();
                isFlex = true;
            }
        })

    });