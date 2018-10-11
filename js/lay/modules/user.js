/** layuiAdmin.std-v1.0.0 LPPL License By http://www.layui.com/admin/ */;
layui.define("form", function (e) {
    var s = layui.$,
        t = (layui.layer, layui.laytpl, layui.setter, layui.view, layui.admin),
        i = layui.form,
        a = s("body");
        function sendAuthCode(e) {
            e = a.extend({
                seconds: 60,
                elemPhone: "#LAY_phone",
                elemVercode: "#LAY_vercode"
            }, e);
            var i,
                t = e.seconds,
                l = a(e.elem),
                n = function (a) {
                    t--,
                    t < 0
                        ? (l.removeClass(f).html("获取验证码"), t = e.seconds, clearInterval(i))
                        : l
                            .addClass(f)
                            .html(t + "秒后重获"),
                    a || (i = setInterval(function () {
                        n(!0)
                    }, 1e3))
                };
            e.elemPhone = a(e.elemPhone),
            e.elemVercode = a(e.elemVercode),
            l.on("click", function () {
                var i = e.elemPhone,
                    l = i.val();
                if (t === e.seconds && !a(this).hasClass(f)) {
                    if (!/^1\d{10}$/.test(l)) 
                        return i.focus(),
                        layer.msg("请输入正确的手机号");
                    if ("object" == typeof e.ajax) {
                        var s = e.ajax.success;
                        delete e.ajax.success
                    }
                    F.req(a.extend(!0, {
                        url: "/auth/code",
                        type: "get",
                        data: {
                            phone: l
                        },
                        success: function (a) {
                            layer.msg("验证码已发送至你的手机，请注意查收", {
                                icon: 1,
                                shade: 0
                            }),
                            e
                                .elemVercode
                                .focus(),
                            n(),
                            s && s(a)
                        }
                    }, e.ajax))
                }
            })
        }
        i.verify({
        nickname: function (e, s) {
            return new RegExp("^[a-zA-Z0-9_一-龥\\s·]+$").test(e)
                ? /(^\_)|(\__)|(\_+$)/.test(e)
                    ? "用户名首尾不能出现下划线'_'"
                    : /^\d+\d+\d$/.test(e)
                        ? "用户名不能全为数字"
                        : void 0
                : "用户名不能有特殊字符"
        },
        pass: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"]
    }),
   sendAuthCode({
        elem: "#LAY-user-getsmscode",
        elemPhone: "#LAY-user-login-cellphone",
        elemVercode: "#LAY-user-login-vercode",
        ajax: {
            url: layui.setter.base + "json/user/sms.js"
        }
    }),
    a.on("click", "#LAY-user-get-vercode", function () {
        s(this);
        this.src = "https://www.oschina.net/action/user/captcha?t=" + (new Date).getTime()
    }),
    e("user", {})
});