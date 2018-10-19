layui
    .define(['jquery'], function (exports) {
        var $ = layui.jquery,
            baseUrl = 'http://api.gelives.com/';
            bxUrl = 'http://api.cloudbox.net.cn:8002/';
        //  baseUrl ='http://192.168.1.200:80/';
        // baseUrl = 'http://192.168.1.48/';
        // baseUrl = 'http://192.168.1.53:80/';
        var obj = {
            baseUrl: 'http://api.gelives.com/',
            bxUrl: 'http://api.cloudbox.net.cn:8002/',
            // baseUrl: 'http://192.168.1.200:80/',
            // baseUrl: 'http://192.168.1.48/',
            // baseUrl: 'http://192.168.1.53:80/', 注册用户
            regUser: function (field, callback) {
                $.ajax({
                    url: baseUrl + 'vender/register',
                    type: 'post',
                    dataType: 'json',
                    data: field,
                    success: callback
                })
            },
            // 用户登录请求
            loginRequest: function (field, callback) {
                $.ajax({
                    url: baseUrl + 'vender/login',
                    type: 'post',
                    dataType: 'json',
                    data: field,
                    xhrFields: {
                        withCredentials: true
                    },
                    success: callback
                });
            },
            // 忘记密码
            forgetPass: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vender/forget',
                    type: 'post',
                    dataType: 'json',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 更新密码
            updatePass: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vender/change',
                    type: 'post',
                    dataType: 'json',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 完善信息
            updateInfo: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vender/update',
                    type: 'post',
                    dataType: 'json',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 服务商用户详细信息
            userInfo: function (callback) {
                $.ajax({
                    url: baseUrl + 'vender/' + layui
                        .sessionData("id")
                        .id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 首页内容 获取首页订单收入统计 订单量,月收入，总收入，日统计
            getStaticData: function (callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/income',
                    data: {
                        "vendor_id": layui
                            .sessionData("id")
                            .id
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 产品
            getProductData: function (cate, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/pricing',
                    data: {
                        "vendor_id": layui
                            .sessionData("id")
                            .id,
                        "cate": cate
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 项目
            getProgramData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/project/revenue',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 当月设备利用率
            getMonthDeviceUseData: function (callback) {
                $.ajax({
                    url: baseUrl + 'device/countDeviceUseRate',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            getDeviceStatusData: function (callback) {
                $.ajax({
                    url: baseUrl + 'device/countDeviceByStauts',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },

            //  获取订单列表
            getOrderList: function (param, callback) {
                // console.log(param);
                $.ajax({
                    url: baseUrl + 'vendor/order/list',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            //  获取订单详情
            getOrderDetail: function (param, callback) {

                $.ajax({
                    url: baseUrl + 'vendor/order/detail',
                    data: {
                        "order_num": param
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 订单退款
            orderRefund: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/refund',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            //  导出订单详情
            exportOrderDetail: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/export',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            //获取设备列表
            getDeviceList: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'db',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    data: param,
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            //启用设备点
            activeDevice: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'device/online/' + id,
                    type: 'post',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 设备导出
            exportDeviceList: function (callback) {
                $.ajax({
                    url: baseUrl + 'device/export',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 获取设备状态数量
            getDeviceStatusLength: function (start, limitsize, status, callback) {
                $.ajax({
                    url: baseUrl + 'device/list?page=' + start + '&size=' + limitsize + '&status=' + status,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 保存新增设备
            addDeviceInfo: function (datas, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'db/add',
                    data: datas,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token

                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 根据ID获取设备信息
            getSingDeviceInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'db/get/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            getDeviceByNumber: function (data, callback) {
                $.ajax({
                    type: 'get',
                    url: baseUrl + 'device/getByNumber?number=' + data,
                    dataType: 'json',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 多槽位设备获取已绑定的物联网卡、二维码、位置的信息
            getBindByNumber: function (data, callback) {
                $.ajax({
                    type: 'get',
                    url: baseUrl + 'device/getBindByNumber?number=' + data,

                    dataType: 'json',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 更新编辑设备
            updateDeviceInfo: function (datas, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'db/update',
                    data: JSON.stringify(datas),
                    dataType: 'json',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 页面设备编辑保存
            updateDeviceHeaderInfo: function (datas, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'device/updateHeader',
                    data: JSON.stringify(datas),
                    dataType: 'json',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 删除设备
            deleteDevice: function (id, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'db/delete/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 批量删除设备
            deleteDevices: function (ids, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'db/delete/' + ids,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 机型品牌三级联动
            getDeviceLinked: function (callback) {
                $.ajax({
                    // url: baseUrl + 'common/linked',
                    url: baseUrl + 'dlc',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                }); 
            },
            // 获取设备下拉列表 getDeviceDropList: function (param, callback) {     $.ajax({ url:
            // baseUrl + 'device/dropList',         data: param,         headers: {
            // 'Authorization': 'Bearer ' + layui .sessionData('token') .token,
            // 'Content-Type': 'application/json'         },         // contentType:
            // 'application/json,application/x-www-form-urlencoded', beforeSend: function
            // (request) { request.setRequestHeader("Authorization", 'Bearer ' +
            // layui.sessionData("token").token);         },         success: callback });
            // }, 
            // 获取主板下拉列表
            getMBDropList: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'dlc/getImeis?modelId=' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 获取位置信息列表
            getLocateList: function (param, callback) {
                // console.log(param);
                $.ajax({
                    url: baseUrl + 'lct',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            //启用位置信息
            activeLocate: function (id, callback) {
                // console.log(id);
                $.ajax({
                    url: baseUrl + 'locate/enbale/' + id,
                    type: 'post',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 位置点下拉列表
            getLocateDropList: function (callback) {
                $.ajax({
                    // url: baseUrl + 'locate/dropList',
                    url: baseUrl + 'dlc/getLocates',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 获取高校信息
            getSchoolList: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'locate/getSchool',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 编辑地址
            getSinLocateInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'lct/get/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            //  根据id更新地址信息
            updateAddress: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'lct/update',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 删除多个地址
            deleteAddresses: function (ids, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'lct/deletes',
                    data: {
                        "ids": ids
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 删除单个地址
            deleteAddress: function (id, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'lct/delete/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 位置点增加
            addLocate: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'lct/add',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        // 'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 物联网卡列表
            getSimList: function (param, callback) {
                // console.log(param);
                $.ajax({
                    url: baseUrl + 'sim',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 新增物联网卡
            addSim: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'sim/add',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 删除多个物联网卡
            deleteSims: function (ids, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'sim/deletes',
                    data: {
                        "ids": ids
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 编辑物联网卡
            getSinSimInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'sim/get/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            //  根据id更新物联网卡信息
            updateSim: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'sim/update',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 物联网卡下拉列表
            getSimDropList: function (callback) {
                $.ajax({
                    //  url: baseUrl + 'common/dropListSim',
                    url: baseUrl + 'common/dropListSim',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 导出物联网卡
            exportSimList: function (callback) {
                $.ajax({
                    url: baseUrl + 'common/exportSim',

                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 主板管理列表
            getMBList: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'me',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },

            // 新增主板
            addMB: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'me/add',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 获得编辑主板信息
            getSinMBInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'me/get/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 更新编辑保存主板
            updateMBInfo: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'me/update',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 批量删除主板
            deleteMBInfos: function (ids, callback) {
                $.ajax({
                    url: baseUrl + 'me/deletes',
                    type: 'post',
                    data: {
                        "ids": ids
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    // contentType:'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 主机管理列表
            getEQList: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'eq',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },

            // 新增主机
            addEQ: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'eq/add',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 获得编辑主机信息
            getSinEQInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'eq/get/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 更新编辑保存主机
            updateEQ: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'eq/update',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 批量删除主机
            deleteEQInfos: function (ids, callback) {
                $.ajax({
                    url: baseUrl + 'eq/deletes',
                    type: 'post',
                    data: {
                        "ids": ids
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    // contentType:'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取主机下拉列表
            getHostList: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'dlc/getEqpts?modelId=' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },

                    success: callback
                });
            },
            // 获取二维码下拉列表
            getQrDropList: function (callback) {
                $.ajax({
                    url: baseUrl + 'dlc/getQrcodes',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },

                    success: callback
                });
            },
            //二维码列表
            getQrList: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'qr',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
             // 新增二维码
             addQr: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'qr/add',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 获得编辑二维码信息
            getSinQrInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'qr/get/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 更新编辑保存二维码
            updateQr: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'qr/update',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 批量删除二维码
            deleteQrInfos: function (ids, callback) {
                $.ajax({
                    url: baseUrl + 'qr/deletes',
                    type: 'post',
                    data: {
                        "ids": ids
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    // contentType:'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            //二维码改状态
            updateQrList: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'common/discardQr/' + param,
                    type: 'post',
                    // data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 导出二维码
            exportQrList: function (callback) {

                $.ajax({
                    url: baseUrl + 'common/exportQR',

                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },

            // 新增二维码
            addQr: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'qr/add',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 删除多个二维码
            deleteQrs: function (ids, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'qr/deletes',
                    data: {
                        "ids": ids
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },

            // 新增二维码
            addQr: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'qr/add',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 获得编辑二维码信息
            getSinQrInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'qr/get/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 更新编辑保存二维码
            updateQr: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'qr/update',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 新增营业时间
            addRule: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'rule/add',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 删除多个营业时间
            deleteRules: function (ids, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'rule/deletes',
                    data: {
                        "ids": ids
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },

            // 新增营业时间
            addRule: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'rule/add',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                            // ,'Content-Type': 'application/json'
                    },
                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 获得编辑营业时间信息
            getSinRuleInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'rule/get/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                        'Content-Type': 'application/json'
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 更新编辑保存营业时间
            updateRule: function (params, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'rule/update',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },

            // 项目管理 项目列表
            getProjectDetail: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'project/listDevice',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 项目批量上下线
            setProjectOnline: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'device/onlines',
                    type: 'post',
                    data: JSON.stringify(param),
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',

                    // contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },

            // 新增项目 下拉列表
            getProjectDropList: function (callback) {
                $.ajax({
                    url: baseUrl + 'project/dropList',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            //    通过选中项目名称获取项目信息
            getProjectDropListInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'project/edit/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 根据id更新项目信息
            updateProjectInfo: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'project/update',
                    type: 'post',
                    data: JSON.stringify(param),
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 根据id删除单个项目信息
            deleteProjectInfo: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'project/delete/' + id,
                    type: 'post',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 根据id删除多个项目信息
            deleteProjectInfos: function (ids, callback) {
                $.ajax({
                    url: baseUrl + 'project/deletes',
                    type: 'post',
                    data: {
                        "ids": ids
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    // contentType:'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 项目设备选择设备

            addProjectDetail: function (datas, callback) {
                $.ajax({
                    url: baseUrl + 'project/listDetail',
                    data: datas,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 按条件获取定价
            getPricingListby: function (datas, callback) {
                $.ajax({
                    url: baseUrl + 'pricing/listBy',
                    data: datas,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            //新增项目post请求
            addProjectDevice: function (datas, callback) {
                $.ajax({
                    url: baseUrl + 'project/relate',
                    type: 'post',
                    data: JSON.stringify(datas),
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },

                    success: callback
                })
            },
            // 添加项目信息post请求
            addProjectInfo: function (datas, callback) {
                $.ajax({
                    type: 'post',
                    url: baseUrl + 'project/save',
                    data: JSON.stringify(datas),
                    // data:datas,

                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    dataType: 'json',

                    success: callback
                })
            },
            // 项目信息管理
            getProjectList: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'project/list',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 定价下拉列表
            getPricingDropList: function (callback) {
                $.ajax({
                    url: baseUrl + 'pricing/dropList',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 定价信息列表
            getPricingList: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'pricing/list',
                    data: param,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 编辑单个的定价
            getSinPricing: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'pricing/list/' + id,

                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 保存编辑定价
            savePricings: function (datas, callback) {
                $.ajax({
                    url: baseUrl + 'pricing/update',
                    type: 'post',
                    data: JSON.stringify(datas),
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 删除多个信息
            deletePricings: function (ids, callback) {
                $.ajax({
                    url: baseUrl + 'pricing/deletes',
                    type: 'post',
                    data: {
                        "ids": ids
                    },
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 删除单个信息
            deletePricing: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'pricing/delete/' + id,
                    type: 'post',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 保存定价信息
            savePricing: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'pricing/save',
                    type: 'post',
                    data: JSON.stringify(param),
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            // 获取功能定价信息
            getPriceFuncs: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'pricing/funcs',

                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取空调订单
            getAirOrder: function (params, callback) {
                $.ajax({
                    url: bxUrl + 'air/order/list',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取空调列表
            getAirData: function (params, callback) {
                $.ajax({
                    url: bxUrl + 'air/list',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取空调用户
            getAirUserData: function (params, callback) {
                $.ajax({
                    url: bxUrl + 'student/user/list',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取空调宿舍
            getAirDorData: function (params, callback) {
                $.ajax({
                    url: bxUrl + 'dorm/list',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取订单分类统计
            getOrderTypeData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/order_type',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取设备状态统计
            getDeviceCountData: function (callback) {
                $.ajax({
                    url: baseUrl + 'device/countDeivceByProject',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取项目收益统计
            getProfitData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/project/income',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取财务汇总
            getFianceData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/finance',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取财务汇总详情
            getSinFianceData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/finance/detail',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            }
        };
        //输出接口
        exports('common', obj);
    })