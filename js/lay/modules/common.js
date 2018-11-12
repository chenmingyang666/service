layui
    .define(['jquery'], function (exports) {
        var $ = layui.jquery,
            // baseUrl = 'http://api.gelives.com/';
            bxUrl = 'http://api.cloudbox.net.cn:8002/';
        //  baseUrl ='http://192.168.1.200:18080/';
        baseUrl = 'http://192.168.1.48:18080/';
        // baseUrl = 'http://192.168.1.53:18080/';
        var obj = {
            // baseUrl: 'http://api.gelives.com/',
            bxUrl: 'http://api.cloudbox.net.cn:8002/',
            // baseUrl: 'http://192.168.1.200:18080/',
            baseUrl: 'http://192.168.1.48:18080/',
            // baseUrl: 'http://192.168.1.53:18080/', 
            // 注册用户
            regUser: function (field, callback) {
                $.ajax({
                    url: baseUrl + 'vc/register',
                    type: 'post',
                    dataType: 'json',
                    data: field,
                    success: callback
                })
            },
            // 用户登录请求
            loginRequest: function (field, callback) {
                $.ajax({
                    url: baseUrl + 'vc/login',
                    type: 'post',
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
                    url: baseUrl + 'vc/forget',
                    type: 'post',
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
                    url: baseUrl + 'vc/change',
                    type: 'post',
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
                    url: baseUrl + 'vc/update',
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
                    url: baseUrl + 'vc/get/' + layui
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
            // 按日期统计销售额
            getSaleDataByDate: function (params,callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/income/time',
                    data: {
                        "vendor_id": layui
                            .sessionData("id")
                            .id,
                        "timeType":params
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
            // 按日期统计设备使用率
            getDeviceRateByDate: function (params,callback) {
                $.ajax({
                    url: baseUrl + 'rpt/usedPre?day='+params,
                    // data: {
                    //     "vendor_id": layui
                    //         .sessionData("id")
                    //         .id,
                    //     "timeType":params
                    // },
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
            // 产品
            getSalesOrdersData: function (cate, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/trend',
                    data: {
                        "vendor_id": layui
                            .sessionData("id")
                            .id,
                        "type": cate
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
            getProductData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/pricing',
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
            // 首页设备活跃度
            getActiveData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'rpt/getRate?day='+params,
                    // data: params,
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
             // 获取支付方式营收比例
             getPaywayData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/payway/revenue',
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
                    // url: baseUrl + 'device/countDeviceByStauts',
                    url: baseUrl + 'rpt/byDevStatus',
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
            // 订单复位
            orderUnlock: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/reset',
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
                        'Authorization': 'Bearer ' + layui.sessionData('token').token
                    },
                    data: param,
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            //启用设备
            activeSinDevice: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'db/opt/' + id,
                    type: 'post',
                    headers: {
                        'Authorization': 'Bearer ' + layui.sessionData('token').token
                    },
                    contentType: 'application/json,application/x-www-form-urlencoded',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                });
            },
            //启用项目设备
            activeDevice: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'pb/opt/' + id,
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
            //启用项目信息
            activeProject: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'pjt/opt/' + id,
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
                         
                    }, 
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
                    url: baseUrl + 'db/deletes',
                    data:{"ids":ids},
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token,
                    },
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
            // 获取联动数据
            getCimitsData: function (callback) {
                // console.log(param);
                $.ajax({
                    url: baseUrl + 'dlc/getCimts',
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
                    url: baseUrl + 'lct/opt/' + id,
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
                    },
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
                    },
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
                    },
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
                    },
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
            
            // 导出主板
            exportMB: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'me/export',
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

            // 主板3级联动
            getBoardDropList:function (callback) {
                $.ajax({
                    url: baseUrl + 'dlc/linked/imei',
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
                    },
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
                    url: baseUrl + 'qr/opt/' + param,
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

           
           


            // 营业时间下拉
            getHourDropList: function (callback) {
                $.ajax({
                    type: 'get',
                    url: baseUrl + 'dlc/getRules',
                    
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
            // 营业时间
            getHourList: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'rule',
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
                    },
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
                    // url: baseUrl + 'project/listDevice',
                    url: baseUrl + 'pb',
                    data: param,
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
            // 项目批量删除
            deleteProjectDevices: function (ids, callback) {
                $.ajax({
                    url: baseUrl + 'pb/delete',
                    type: 'post',
                    data:{'ids':ids},
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
            // 项目批量上下线
            setProjectOnline: function (param, callback) {
                $.ajax({
                    url: baseUrl + 'pb/opts',
                    type: 'post',
                    data:  param,
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

            // 新增项目 下拉列表
            getProjectDropList: function (callback) {
                $.ajax({
                    // url: baseUrl + 'project/dropList',
                     url: baseUrl + 'dlc/getProjects',
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
                    // url: baseUrl + 'project/edit/' + id,
                    url: baseUrl + 'pjt/get/' + id,
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
                    // url: baseUrl + 'project/update',
                    url: baseUrl + 'pjt/update',
                    type: 'post',
                    data: param,
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
                    // url: baseUrl + 'project/deletes',
                    url: baseUrl + 'pjt/deletes',
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
            addProjectDetail: function (id, callback) {
                $.ajax({
                    url: baseUrl + 'db/devs?modelId='+id,
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
            getPricingListby: function (id, callback) {
                $.ajax({
                    // url: baseUrl + 'pricing/listBy',
                    url: baseUrl + 'dlc/getPricing/'+id,
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
                    // url: baseUrl + 'project/relate',
                    url: baseUrl + 'pb/add',
                    type: 'post',
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
                })
            },
            //编辑项目设备
            getProjectSinInfo: function (id, callback) {
                $.ajax({
                    // url: baseUrl + 'project/relate',
                    url: baseUrl + 'pb/get/'+id,
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



            // 添加项目信息
            addProjectInfo: function (params, callback) {
                $.ajax({
                    type: 'post',
                    // url: baseUrl + 'project/save',
                    url: baseUrl + 'pjt/add',
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
            // 项目信息管理
            getProjectList: function (param,callback) {
                $.ajax({
                    // url: baseUrl + 'project/list',
                    url: baseUrl + 'pjt',
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
                    // url: baseUrl + 'pricing/list',
                    url: baseUrl + 'pic',
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
            getSinPricing: function (params, callback) {
                $.ajax({
                    // url: baseUrl + 'pricing/list/' + id,
                    url: baseUrl + 'pic/get/'+params.pid+'/'+params.modelId,
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
                    // url: baseUrl + 'pricing/update',
                    url: baseUrl + 'pic/update',
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
                    // url: baseUrl + 'pricing/deletes',
                    url: baseUrl + 'pic/deletes',
                    type: 'post',
                    data:{"ids":ids},
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
                    // url: baseUrl + 'pricing/save',
                    url: baseUrl + 'pic/add',
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
                    // url: baseUrl + 'pricing/funcs',
                    url: baseUrl + 'pic/getByModelid/'+params,
                    // data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui.sessionData('token').token
                    }, 
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
            getOrderTypeData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/type/statistics',
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
            getOrderStaticData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/statistics',
                    data: params,
                    headers: {
                        'Authorization': 'Bearer ' + layui.sessionData('token').token
                    },
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取设备状态统计
            getDeviceStateData: function (params,callback) {
                $.ajax({
                    url: baseUrl + 'rpt/bySts',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    data:params,
                    contentType: 'application/json',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", 'Bearer ' + layui.sessionData("token").token);
                    },
                    success: callback
                })
            },
            // 获取设备状态统计详情
            getDeviceDetails: function (params,callback) {
                $.ajax({
                    url: baseUrl + 'rpt/byStsDetail',
                    headers: {
                        'Authorization': 'Bearer ' + layui
                            .sessionData('token')
                            .token
                    },
                    data:params,
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
            // 获取设备活跃度统计
            getDeviceActivityData: function (params, callback) {
                $.ajax({
                    url: baseUrl + 'rpt/byActivity',
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
            },
            // 退款申请
            getRefundReqData:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/refund/list',
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
            // 结算申请列表
            getRevenueApplyData:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/revenue/list',
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
            // 发起申请结算
            doRevenueApply:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/order/revenue/apply',
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
            // 获取操作人员
            getVendorUser:function(id,callback){
                $.ajax({
                    url: baseUrl + 'vendor/user/info',
                    data: {'user_id':id},
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
             // 成员列表
             getVendorUserData:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/user/list',
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
            // 新增成员列表
            addVendorUser:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'vendor/user/save',
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
            // 角色下拉列表
            getRoleDropList:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'role/list',
                    data: {'vendorId':params},
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
             // 角色人员添加
            addRole:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'role/save',
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
            // 角色权限绑定
            bindPermission:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'user/menu/bind',
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
            // 菜单所有列表
            getAllMenuList:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'menu/all',
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
            // 菜单用户列表
            getUserMenuList:function (params, callback) {
                $.ajax({
                    url: baseUrl + 'menu/list',
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
        };
        //输出接口
        exports('common', obj);
    })