layui
    .define([
        "form", "jquery"
    ], function (exports) {
        var form = layui.form,
            $ = layui.jquery,
            Address = function () {};
        var data = [
            {
                "name": "河南省",
                "child": [
                    {
                        "name": "郑州市",
                        "child": [
                            {
                                "name": "管城区",
                                "child": [
                                    {
                                        "name": "学校",
                                        "child": [
                                            {
                                                "name": "不知名学校",
                                                "id": "9"
                                            }
                                        ]
                                    }, {
                                        "name": "社区",
                                        "child": [
                                            {
                                                "name": "正商玉兰湾",
                                                "id": "7"
                                            }, {
                                                "name": "正商芙蓉湾",
                                                "id": "8"
                                            }, {
                                                "name": "蓝海港湾",
                                                "child": [
                                                    {
                                                        "name": "一期",
                                                        "id": "11"
                                                    }, {
                                                        "name": "二期",
                                                        "id": "12"
                                                    }, {
                                                        "name": "三期",
                                                        "id": "13"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                "name": "金水区",
                                "child": [
                                    {
                                        "name": "学校",
                                        "child": [
                                            {
                                                "name": "司法警官学院",
                                                "child": [
                                                    {
                                                        "name": "南校区",
                                                        "id": "2"
                                                    }, {
                                                        "name": "北校区",
                                                        "id": "3"
                                                    }
                                                ]
                                            }
                                        ]
                                    }, {
                                        "name": "社区",
                                        "child": [
                                            {
                                                "name": "集优生活",
                                                "child": [
                                                    {
                                                        "name": "新西兰中心",
                                                        "id": "5"
                                                    }, {
                                                        "name": "平顶山中心",
                                                        "id": "6"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        Address.prototype.provinces = function () {
            //加载省数据
            var proHtml = '',
                that = this;
            for (var i = 0; i < data.length; i++) {
                proHtml += '<option value="' + data[i].name + '">' + data[i].name + '</option>';
            }
            //初始化省数据
            $("select[name=province]").append(proHtml);
            form.render();
            form.on('select(province)', function (proData) {
                $("select[name=area]").html('<option value="">请选择县/区</option>');
                var value = proData.value;
                if (value) {
                    that.citys(data[$(this).index() - 1].child);
                } else {
                    $("select[name=city]").attr("disabled", "disabled");
                    form.render()
                }
            });
        }
        //加载市数据
        Address.prototype.citys = function (citys) {
            var cityHtml = '<option value="">请选择市</option>',
                that = this;
            for (var i = 0; i < citys.length; i++) {
                cityHtml += '<option value="' + citys[i].name + '">' + citys[i].name + '</option>';
            }
            $("select[name=city]")
                .html(cityHtml)
                .removeAttr("disabled");
            form.render();
            form.on('select(city)', function (cityData) {
                var value = cityData.value;
                if (value) {
                    that.areas(citys[$(this).index() - 1].child);
                } else {
                    $("select[name=area]").attr("disabled", "disabled");
                    form.render()
                }
            });
        }
        //加载县/区数据
        Address.prototype.areas = function (areas) {
            var areaHtml = '<option value="">请选择县/区</option>',
                that = this;
            for (var i = 0; i < areas.length; i++) {
                areaHtml += '<option value="' + areas[i].name + '">' + areas[i].name + '</option>';
            }
            $("select[name=area]")
                .html(areaHtml)
                .removeAttr("disabled");
            form.render();
            form.on('select(area)', function (data) {
                var value = data.value;
                console.log($(this).index());
                if (value) {
                    that.commuType(areas[$(this).index() - 1].child);
                } else {
                    $("select[name=commuType]").attr("disabled", "disabled");
                    form.render()
                }
            });
        }
        //加载地址类型
        Address.prototype.commuType = function (areas) {
            var areaHtml = '<option value="">请选择地址类型</option>',
                that = this;
            for (var i = 0; i < areas.length; i++) {
                areaHtml += '<option value="' + i + '">' + areas[i].name + '</option>';
            }
            $("select[name=commuType]")
                .html(areaHtml)
                .removeAttr("disabled");
            form.render();
            form.on('select(commuType)', function (data) {
                var value = data.value;
                console.log($(this).index());
                // if (value) {     that.commuType(areas[$(this).index() - 1].child); } else {
                // $("select[name=commuType]").attr("disabled", "disabled");     form.render() }
                if (data.value == '0') {
                    $('.type1').show();
                    $('.type2').hide();
                    that.school(areas[data.value].child);
                } else if (data.value == '1') {
                    $('.type2').show();
                    $('.type1').hide();
                    that.community(areas[data.value].child);
                }
            });
        }
        //加载学校
        Address.prototype.school = function (areas) {
            var areaHtml = '<option value="">请选择学校</option>',
                that = this;
            for (var i = 0; i < areas.length; i++) {
                areaHtml += '<option value="' + i + '">' + areas[i].name + '</option>';
            }
            $("select[name=school]")
                .html(areaHtml)
                .removeAttr("disabled");
            form.render();
            form.on('select(school)', function (data) {
                var value = data.value;
                if (value) {
                    that.schoolArea(areas[$(this).index() - 1].child);
                } else {
                    $("select[name=schoolArea]").attr("disabled", "disabled");
                    form.render()
                }

            });
        }
        //加载校区
        Address.prototype.schoolArea = function (areas) {
            var areaHtml = '<option value="">请选择校区</option>',
                that = this;
            for (var i = 0; i < areas.length; i++) {
                areaHtml += '<option value="' + i + '">' + areas[i].name + '</option>';
            }
            $("select[name=schoolArea]")
                .html(areaHtml)
                .removeAttr("disabled");
            form.render();

        }

        //加载社区
        Address.prototype.community = function (areas) {
            var areaHtml = '<option value="">请选择社区</option>',
                that = this;
            for (var i = 0; i < areas.length; i++) {
                areaHtml += '<option value="' + i + '">' + areas[i].name + '</option>';
            }
            $("select[name=community]")
                .html(areaHtml)
                .removeAttr("disabled");
            form.render();
            form.on('select(community)', function (data) {
                var value = data.value;
                if (value) {

                    that.term(areas[$(this).index() - 1].child);
                } else {
                    $("select[name=term]").attr("disabled", "disabled");
                    form.render()
                }

            });
        }
        //加载社区期号
        Address.prototype.term = function (areas) {
            var areaHtml = '<option value="">请选择期号</option>',
                that = this;
                console.log(areas);
            if (areas.length > 0) {
                for (var i = 0; i < areas.length; i++) {
                    areaHtml += '<option value="' + i + '">' + areas[i].name + '</option>';
                };
                $("select[name=term]")
                    .html(areaHtml)
                    .removeAttr("disabled");
                form.render();
            } else {
                $("select[name=term]").html('');
                form.render();
                alert('no')
            }

        }

        var address = new Address();
        exports("address", function () {
            address.provinces();
        });
    });