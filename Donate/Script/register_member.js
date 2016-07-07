
/*
 * 註冊
 * @author ellen
 */
register_member.prototype = new general_function;
function register_member() {

    thisObj = this;
    //換驗證碼

    //檢查帳號
    thisObj.check_id = function() {

        encode_str = "Account=" + $("#register_id").val() + "&WebType=" + $("#web_type").val();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "main/check_registration/check_account";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_chkid_result);


    }

    thisObj.get_chkid_result = function(msg) {
        get_chkid_result = jQuery.parseJSON(msg);

        if (get_chkid_result['status'] == "SUCCESS") {

            str_html = "<span style=color:green;display: inline-block;vertical-align:middle>" + get_chkid_result['message'] + "</span>"
            $("#chek_id").html(str_html);

        } else {



            str_html = "<span style=color:red;display: inline-block;vertical-align:middle>" + get_chkid_result['message'] + "</span>"
            $("#chek_id").html(str_html);
        }
    }
    //檢查密碼
    //for註冊
    thisObj.check_pwd = function() {

        encode_str = "Account=" + $("#register_id").val() + "&Password=" + $("#register_pwd").val();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);

        url = "main/check_registration/pwd_strength";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.ger_chkpwd_result);


    }
    //for更改密碼 
    thisObj.check_in_changePwd = function() {

        encode_str = "Password=" + $("#register_pwd").val();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);

        url = "main/check_registration/pwd_strength";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.ger_chkpwd_result);


    }

    thisObj.ger_chkpwd_result = function(msg) {
        ger_chkpwd_result = jQuery.parseJSON(msg);

        if (ger_chkpwd_result['status'] == "SUCCESS") {

            str_html = "<span style=color:green;display: inline-block>" + ger_chkpwd_result['message'] + "</span>"
            $("#chek_pwd").html(str_html);

        } else {



            str_html = "<span style=color:red;display: inline-block>" + ger_chkpwd_result['message'] + "</span>"
            $("#chek_pwd").html(str_html);
        }
    }
//檢查email
    thisObj.check_mail = function() {

        encode_str = "Mail=" + $("#register_mail").val();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);

        url = "main/check_registration/check_mail";
        send_url = thisObj.get_base_url() + url;

        thisObj.AjaxWork(send_url, send_data, thisObj.get_chkmail_result);


    }

    thisObj.get_chkmail_result = function(msg) {
        get_chkmail_result = jQuery.parseJSON(msg);

        if (get_chkmail_result['status'] == "SUCCESS") {

            str_html = "<img src='" + thisObj.get_base_url() + "images/arrow/r_info_arrow_o.png' style='margin-left: 10px'/><span style=color:green;display: inline-block>" + get_chkmail_result['message'] + "</span>"
            $("#chek_email").html(str_html);

        } else {
            str_html = "<img src='" + thisObj.get_base_url() + "images/arrow/r_info_arrow_o.png' style='margin-left: 10px'/><span style=color:red;display: inline-block>" + get_chkmail_result['message'] + "</span>"
            $("#chek_email").html(str_html);
        }
    }

//單獨登入頁註冊檢查mail
    thisObj.check_login_mail = function() {

        encode_str = "Mail=" + $("#register_mail").val();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);

        url = "main/check_registration/check_mail";
        send_url = thisObj.get_base_url() + url;

        thisObj.AjaxWork(send_url, send_data, thisObj.get_login_mail_result);


    }

    thisObj.get_login_mail_result = function(msg) {
        get_login_mail_result = jQuery.parseJSON(msg);

        if (get_login_mail_result['status'] == "SUCCESS") {

            str_html = "<span style=color:green;display: inline-block>" + get_login_mail_result['message'] + "</span>"
            $("#chek_email").html(str_html);

        } else {
            str_html = "<span style=color:red;display: inline-block>" + get_login_mail_result['message'] + "</span>"
            $("#chek_email").html(str_html);
        }
    }

    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     *註冊會員:先檢查(check_register)→同意條款→儲存(register) 
     * @returns {undefined}
     */
    thisObj.check_register = function() {

        encode_str = $("#register_member").serialize() + "&Page=1";
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);

        url = "main/registration/create_user_data";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.ready_show_term, true);


    }
    thisObj.ready_show_term = function(msg) {
        ready_show_term = jQuery.parseJSON(msg);
        if (ready_show_term['status'] == "SUCCESS") {
            $("#register_area").hide();
            $("#term_area").show();
            $("#regest_tips").show();
            $("body").animate({scrollTop: 0}, 0)

        } else {
            if (ready_show_term['status'] == "MEM10005") {   //over time
                location.reload(true);
            }
            if (ready_show_term['status'] == "MEM30010") {  // re-mobile

                if (confirm("您的手機號碼已經註冊過了，若您未註冊過智付寶會員，請點選確定進入申訴中心"))
                {
                    var post_data = ready_show_term['result']['post_data'];

                    encode_str = "post_data_=" + post_data;
                    send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
                    window.location.href = thisObj.get_base_url() + "main/verification/mobile_appeal_page?" + send_data;
                }
            } else {
                alert("錯誤：" + ready_show_term['message'] + " (" + ready_show_term['status'] + ")");

            }


        }
    }
    //註冊會員:ajax
    thisObj.register = function() {
        if ($("#check_accept").prop("checked") === true) {
            encode_str = $("#register_member").serialize() + "&Page=2";

            send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
            url = "main/registration/create_user_data";
            send_url = thisObj.get_base_url() + url;
            thisObj.AjaxWork(send_url, send_data, thisObj.get_register, true);

        } else {
            alert("請勾選同意個人會員條款及隱私權政策");
            return false;
        }


    }
    thisObj.get_register = function(msg) {
        get_register = jQuery.parseJSON(msg);
        if (get_register['status'] == "SUCCESS") {

            var mobile_cert_url = 'main/registration/mobile_verification';
            var get_mobile = get_register['result']['post_data'];
            var cookie_time = get_register['result']['CookieTime'];
            var registration_data = get_register['result']['registration_data'];


            $("#re_foot").append("<div id='sb_div' style='display:none;'></div>");
            $("#sb_div").append("<form id='sb_form' action='" + thisObj.get_base_url() + mobile_cert_url + "' method='post'></form> ");
            $("<input type='hidden' id='postdata' name='post_data_'/><input type='hidden' id='time' name='Time'/><input type='hidden' id='registration_data' name='registration_data'/><br><input type='submit' value='Send' />").appendTo($("#sb_form"));
            $("#postdata").val(get_mobile);
            $("#time").val(cookie_time);
            $("#registration_data").val(registration_data);
            $('#sb_form').trigger('submit');

        } else {
            str_html = "";
            $("#chek_pwd").html(str_html);
            var error_cod = get_register['status'];
            if (error_cod == "MEM10005") {
                alert("錯誤：" + get_register['message'] + " (" + get_register['status'] + ")");
                location.reload(true);
            } else {
                alert("錯誤：" + get_register['message'] + " (" + get_register['status'] + ")");
                $(".pwd").val("");
                $(".res_color").css("color", "black");

                thisObj.error_check(error_cod);
            }



        }
    }
    //for會員資料用
    thisObj.error_check = function(error_cod) {

        if (error_cod == 'MEM10006') {
            $("#rename").css("color", "red");
        }

        if (error_cod == 'MEM10007') {

            $("#reid").css("color", "red");
        }

        if (error_cod == 'MEM10028') {

            $("#reid").css("color", "red");
        }

        if (error_cod == 'MEM10029') {

            $("#reid").css("color", "red");
        }

        if (error_cod == 'MEM10010') {

            $("#repw").css("color", "red");
        }

        if (error_cod == 'MEM10011') {

            $("#repw").css("color", "red");
        }

        if (error_cod == 'MEM10012') {

            $("#reconfirmpw").css("color", "red");
        }

        if (error_cod == 'MEM10013') {

            $("#repw").css("color", "red");
            $("#reconfirmpw").css("color", "red");
        }
        if (error_cod == 'MEM10018' || error_cod == 'MEM10019' || error_cod == 'MEM30010') {

            $("#remobile").css("color", "red");
        }

    }
    /*
     * 手機驗證--取得結果
     * @returns {undefined}
     */
    thisObj.mobile_certify_result = function() {

        data = "post_data_=" + $("#post_data_").val() + "&" + "WebType=" + $("#web_type").val() + "&Member_data=" + $("#registration_data").val();
        encode_str = data;
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "main/registration/get_lock_check_mobile";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_mobile_result)

    }
    thisObj.get_mobile_result = function(msg) {
        get_mobile_result = jQuery.parseJSON(msg);
        if (get_mobile_result['status'] == "SUCCESS") {

            $("#certify_text").hide();
            $("#succ_text").show();
            var succShow = $("#succ_text").is(":visible");
            if (succShow) {
                //自動跳頁
                setTimeout(function() {
                    location.href = thisObj.get_base_url() + 'main/user_center/modify_user_data';
                }, 15000);
            }
        } else {


            $("#certify_text").hide();
            $("#error_code").text("錯誤代碼：" + get_mobile_result['status'])
            $("#fail_text").show();

        }
    }

    /*
     * 登入
     */
    thisObj.login = function() {

        encode_str = $("#login_form").serialize();
        send_data = thisObj.web_base_encode(encode_str);
        url = "main/login_center/login_by_db";
//        send_url = thisObj.get_base_url() + url;
//        thisObj.AjaxWork(send_url, send_data, thisObj.process_login, true)

        $("#re_foot").append("<div id='sb_div' style='display:none;'></div>");
        $("#sb_div").append("<form id='sb_form' action='" + thisObj.get_base_url() + url + "' method='post'></form> ");
        $("<input type='hidden' id='postdata' name='send_data_'/><br><input type='submit' value='Send' />").appendTo($("#sb_form"));
        $("#postdata").val(send_data);

        $('#sb_form').trigger('submit');

    }
//    thisObj.process_login = function(msg) {
//        process_login = jQuery.parseJSON(msg);
//        if (process_login['status'] == "SUCCESS") {
//            var login_center = "main/user_center";
//            window.location.href = thisObj.get_base_url() + login_center;
//        } else {
//            alert("錯誤：" + process_login['message'] + " (" + process_login['status'] + ")");
//
//        }
//    }
    /*
     * 登出
     * @returns {undefined}
     */
    thisObj.logout = function() {

        encode_str = $("#login_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.process_login, true)

    }
    thisObj.process_logout = function(msg) {
        process_login = jQuery.parseJSON(msg);
        if (process_login['status'] == "SUCCESS") {
            alert("登出成功")
        } else {
            alert("錯誤：" + process_login['message'] + " (" + process_login['status'] + ")");

        }
    }

    /*
     * 會員忘記密碼
     */
    thisObj.forgot_pwd = function() {

        encode_str = $("#foget_pwd").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "main/forget_password/get_user_password";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.send_pwd_mail, true)

    }
    thisObj.send_pwd_mail = function(msg) {
        send_pwd_mail = jQuery.parseJSON(msg);

        if (send_pwd_mail['status'] == "SUCCESS") {

            var main = "main/main";
            alert("請至您的信箱收取更改密碼通知信");
            window.location.href = thisObj.get_base_url() + main;
        } else {
            alert("錯誤：" + send_pwd_mail['message'] + " (" + send_pwd_mail['status'] + ")");

        }
    }
    /*
     * 變更密碼送出新密碼
     * @returns {undefined}
     */
    thisObj.change_new_pwd = function() {

        encode_str = $("#change_pwd").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "main/forget_password/modify_pwd";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.send_new_pwd, true)

    }
    thisObj.send_new_pwd = function(msg) {
        send_new_pwd = jQuery.parseJSON(msg);
        if (send_new_pwd['status'] == "SUCCESS") {
            alert("變更成功，請重新登入");
            var main = "main/main";
            window.location.href = thisObj.get_base_url() + main;
        } else {
            alert("錯誤：" + send_new_pwd['message'] + " (" + send_new_pwd['status'] + ")");

        }
    }
    thisObj.chk_form = function(type) {
        switch (type) {
            case 1:
                if ($("#register_pwd").val() != "") {
                    if ($("#register_pwd").val() == $("#confirm_pwd").val()) {

                        str_html = "<span style=color:green;display: inline-block;>確認密碼與密碼相符</span>"
                        $("#chek_confirm_pwd").html(str_html);
                    } else if ($("#register_pwd").val() != $("#confirm_pwd").val()) {

                        str_html = "<span style=color:red;display: inline-block>密碼與密碼確認不相符</span>"
                        $("#chek_confirm_pwd").html(str_html);
                    }
                }

                break;
            case 2:
                re = /^09[0-9]{2}[0-9]{6}$/;
                if (!re.test($("#register_mobile").val())) {

                    str_html = "<span style=color:red;display: inline-block>手機號碼格式不正確</span>";
                    $("#chek_mobile").html(str_html);
                } else {

                    str_html = "<span style=color:green;display: inline-block>格式正確</span>"
                    $("#chek_mobile").html(str_html);
                }
                break;
            case 3:
                re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
                if (!re.test($("#register_mail").val())) {

                    str_html = "<span style=color:red;display: inline-block>Email格式不正確</span>";
                    $("#chek_email").html(str_html);
                } else {

                    str_html = "<span style=color:green;display: inline-block>格式正確</span>";
                    $("#chek_email").html(str_html);
                }
                break;
            default:
                "不正常程序，請確認";
        }



    }
    thisObj.chk_login_form = function(type) {
        switch (type) {

            case 2:
                re = /^09[0-9]{2}[0-9]{6}$/;
                if (!re.test($("#register_mobile").val())) {

                    str_html = "<span style=color:red;display: inline-block>手機號碼格式不正確</span>";
                    $("#chek_mobile").html(str_html);
                } else {

                    str_html = "<span style=color:green;display: inline-block>格式正確</span>"
                    $("#chek_mobile").html(str_html);
                }
                break;
            case 3:
                re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
                if (!re.test($("#register_mail").val())) {

                    str_html = "<span style=color:red;display: inline-block>Email格式不正確</span>";
                    $("#chek_email").html(str_html);
                } else {

                    str_html = "<span style=color:green;display: inline-block>格式正確</span>";
                    $("#chek_email").html(str_html);
                }
                break;
            default:
                "不正常程序，請確認";
        }



    }
    //檢查email
    thisObj.suggest_p2g = function() {

        encode_str = $("#suggest_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "info/site_description/proposal_to_send";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.send_suggest);
    }

    thisObj.send_suggest = function(msg) {
        send_suggest = jQuery.parseJSON(msg);

        if (send_suggest['status'] == "SUCCESS") {

            alert("謝謝您寶貴的建議，智付寶客服人員會盡速處理。");
            window.location.href = thisObj.get_base_url() + "main/main";


        } else {
            alert("錯誤：" + send_suggest['message'] + " (" + send_suggest['status'] + ")");
        }
    }
    /*
     * scroll事件
     */
    thisObj.show_term = function() {
        $("#back_first").click(function() {

            $("#register_area").show();
            $("#term_area").hide();
            $("#regest_tips").hide();

            $("#check_accept").prop('checked', false);
            $("#check_accept").prop("disabled", true);
            $("#accept_text").css("color", "black");

//            var check_status = $("#check_accept").prop("checked");
//            if (check_status == true) {
//                $("input[name='Accept']").each(function() {
//                    $(this).prop("disabled", true);
//                });
//            } else {
//                $("input[name='Accept']").each(function() {
//                    $(this).prop("disabled", false);
//                });
//            }
        })

        var first_scroll = 0;
        var second_scroll = 0;
        // var least = 0; // 距離底部多少就可以, 0 表示得完全到底部
        $("#term_a").scroll(function() {
            var top_a = $(this).scrollTop();
            var height_a = $(this).prop('scrollHeight');
            var div_height_a = $(this).height();
            var max_height_a = height_a - div_height_a - 20;
            var least_a = 0;

            if (max_height_a - top_a <= least_a) {
                first_scroll = "1";
            }
            if (first_scroll == 1 && second_scroll == 1) {
                $("#accept_text").css("color", "red");
                $("#check_accept").prop("disabled", false);
            } else {
                $("#accept_text").css("color", "blace");
                $("#check_accept").prop("disabled", true);
            }
        });

        $("#term_b").scroll(function() {
            var top_b = $(this).scrollTop();
            var height_b = $(this).prop('scrollHeight');
            var div_height_b = $(this).height();
            var max_height_b = height_b - div_height_b - 20;
            var least_b = 0;

            if (max_height_b - top_b <= least_b) {
                second_scroll = "1";
            }
            if (first_scroll == 1 && second_scroll == 1) {
                $("#accept_text").css("color", "red");
                $("#check_accept").prop("disabled", false);
            } else {
                $("#accept_text").css("color", "blace");
                $("#check_accept").prop("disabled", true);
            }
        });


    }

    /*
     * 申訴中心
     * 
     * 寄信給申訴中心
     */

    thisObj.send_appeal = function() {
        encode_str = $("#appeal_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "main/verification/mobile_appeal_to_admin";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_appeal_reault);
    }

    thisObj.get_appeal_reault = function(msg) {
        get_appeal_reault = jQuery.parseJSON(msg);

        if (get_appeal_reault['status'] == "SUCCESS") {

            alert(get_appeal_reault['message'] + "，智付寶客服人員會儘速處理。");
            window.location.href = thisObj.get_base_url() + "main/main/registration_way";

        } else {
            alert("錯誤：" + get_appeal_reault['message'] + " (" + get_appeal_reault['status'] + ")");
        }
    }

  





}

