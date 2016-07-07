
/*
 * 賣家操作
 * @author ellen
 */
sell_shop.prototype = new general_function;
function sell_shop() {

    thisObj = this;
    /*
     * 建立商店
     * @returns {undefined}
     */
    thisObj.add_shop = function() {

        encode_str = $("#add_shop").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/add_shop_by_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.save_new_shop, true);
    }
    thisObj.save_new_shop = function(msg) {

        save_new_shop = jQuery.parseJSON(msg);
        if (save_new_shop['status'] == "SUCCESS") {
            var shop = "shop/member_shop/shop_list";
            alert("您已建立商店，可至「商店資料設定」管理您的商店");
            window.location.href = thisObj.get_base_url() + shop;
        } else {
            alert("錯誤：" + save_new_shop['message'] + " (" + save_new_shop['status'] + ")");
        }
    }

    /*
     * 編輯商店資料
     * I-編輯商店基本資料
     */
    thisObj.modify_shop_data = function() {
        encode_str = $("#modify_shop").serialize() + "&Type=ModifyData";
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/modify_shop_data_by_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.show_shop_data, true);
    }

    thisObj.show_shop_data = function(msg) {
        show_shop_data = jQuery.parseJSON(msg);
        if (show_shop_data['status'] == "SUCCESS") {
            alert("更新成功!");
            location.reload(true);
        } else {
            alert("錯誤：" + show_shop_data['message'] + " (" + show_shop_data['status'] + ")");
        }
    }
    /*
     * 編輯商店資料
     * II-編輯商店狀態
     */
    thisObj.modify_shop_status = function() {
        encode_str = $("#modify_shop_status").serialize() + "&Type=ModifyStatus";
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/modify_shop_data_by_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.show_shop_status, true);
    }

    thisObj.show_shop_status = function(msg) {
        show_shop_status = jQuery.parseJSON(msg);
        if (show_shop_status['status'] == "SUCCESS") {


            alert("更新成功!");
            location.reload(true);
        } else {
            alert("錯誤：" + show_shop_status['message'] + " (" + show_shop_status['status'] + ")");
        }
    }

    /*
     * 更換金鑰
     */


    thisObj.change_key = function(postdata) {

        encode_str = "post_data_=" + postdata + "&Password=" + $("#hash_pwd").val();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/change_member_shop_hash_iv_key";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.change_key_result, true);
    }
    thisObj.change_key_result = function(msg) {
        change_key_result = jQuery.parseJSON(msg);
        if (change_key_result['status'] == "SUCCESS") {
            tabindex = "1"
            location.reload(true);
        } else {
            alert("錯誤：" + change_key_result['message'] + " (" + change_key_result['status'] + ")");
        }
    }
    /*
     * 更換請款狀態
     * @returns {undefined}
     */
    thisObj.set_shop_config = function() {

        encode_str = $("#shop_config_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/modify_payment_config_to_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_modify_config_result, true);
    }
    thisObj.get_modify_config_result = function(msg) {
        get_modify_config_result = jQuery.parseJSON(msg);
        if (get_modify_config_result['status'] == "SUCCESS") {
            alert("修改成功!")
            location.reload(true);
        } else {
            alert("錯誤：" + get_modify_config_result['message'] + " (" + get_modify_config_result['status'] + ")");
        }
    }


    /*
     * 更換支付密碼 
     * @returns {undefined}
     */
    thisObj.change_payment_pwd = function() {

        encode_str = $("#modify_pay_pwd").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/modify_pwd_to_check_mail_by_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.send_new_pay_pwd, true);
    }
    thisObj.send_new_pay_pwd = function(msg) {
        send_new_pay_pwd = jQuery.parseJSON(msg);
        if (send_new_pay_pwd['status'] == "SUCCESS") {
            alert("支付密碼驗證信已經寄出，請於1小時內前往收取異動支付密碼確認信並進行新密碼設定。");
            $('#change_paypwd_modal').modal('hide');
        } else {
            alert("錯誤：" + send_new_pay_pwd['message'] + " (" + send_new_pay_pwd['status'] + ")");
        }
    }
    /*
     *收到變更支付密碼認證信  
     * @returns {undefined}
     */
    thisObj.confirm_change_pay_pwd = function() {

        encode_str = $("#modify_pay_pwd").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/modify_transaction_pwd_to_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.change_pay_pwd_done, true);
    }
    thisObj.change_pay_pwd_done = function(msg) {
        change_pay_pwd_done = jQuery.parseJSON(msg);
        if (change_pay_pwd_done['status'] == "SUCCESS") {
            alert("變更支付密碼完成，請重新登入");
            url = "main/login_center/single_login";
            window.location.href = thisObj.get_base_url() + url;
        } else {
            alert("錯誤：" + change_pay_pwd_done['message'] + " (" + change_pay_pwd_done['status'] + ")");
        }
    }

    /*
     *搜尋交易 
     */

    thisObj.search_transation = function(NowPage) {

        $("#table_title").hide();
        $("#table_area_trans").hide();
        $(".page_foot").hide();
//        $("#error_foot").hide();
//        $("#mem_trans_table").hide();
        $("input[name='NowPage']").val(NowPage);
        encode_str = $("#trans_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/transaction/get_mem_transaction_data_by_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_transation_data, true);
    }
    thisObj.get_transation_data = function(msg) {
        get_transation_data = jQuery.parseJSON(msg);
        html_str = "";
        html_str += " <table class='table-bordered bank_table hv' width='100%' border='0' cellspacing='0' cellpadding='0'>";
        html_str += "<thead>";
        html_str += "<tr>";
        html_str += "<th width='10%' align='center'>智付寶交易序號<br>商店訂單編號</th>";
        html_str += "<th width='8%' align='center'>商店代號</th>";
        html_str += "<th width='5%' align='center'>支付方式</th>";
        html_str += "<th width='15%' align='center'>交易日期<br>收款日期</th>";
        html_str += "<th width='10%' align='center'>金額</th>";
        html_str += "<th width='8%' align='center'>支付狀態</th>";
        html_str += "<th width='15%' align='center'>預計撥款日<br>實際撥款日</th>";
        html_str += "<th width='5%' align='center'>詳細</th>";
        html_str += "</tr>";
        html_str += "</thead>";
        html_str += "<tbody style='font-size:13px'>";
        if (get_transation_data['status'] == "SUCCESS") {
            var total_amt = get_transation_data['result']['tran_amt'];
            total_amt = thisObj.display_amt(total_amt);
            $("#data_count").text(get_transation_data['result']['transaction_count'])
            $("#total_amount").text("總交易金額：" + total_amt + "元")
            $("#download_div").html("<a style='cursor:pointer' id='download_trans'>下載查詢結果</a>")
            $("#table_title").slideDown();
            $("#now_page").val(get_transation_data['result']['NowPage']);
            for (i = 0; i < get_transation_data['result']['transaction_data'].length; i++) {
                var MerTranNo = get_transation_data['result']['transaction_data'][i]['TS_MerTrade_No'];
                var TranID = get_transation_data['result']['transaction_data'][i]['TS_Tran_ID'];
                var MerID = get_transation_data['result']['transaction_data'][i]['TS_Mer_ID'];
                var PayType = get_transation_data['result']['transaction_data'][i]['TS_Payment_Type'];
                var TransDate = get_transation_data['result']['transaction_data'][i]['TS_Create_Time'];
                var PayTime = get_transation_data['result']['transaction_data'][i]['TS_Response_Time'];
                var PayInfo = get_transation_data['result']['transaction_data'][i]['TS_Pay_Info'];
                var Amt = get_transation_data['result']['transaction_data'][i]['TS_Amount'];
                var Paystatus = get_transation_data['result']['transaction_data'][i]['TS_Status'];
                var Systemfundtime = get_transation_data['result']['transaction_data'][i]['TS_System_Fund_Time'];
                var Predictfundtime = get_transation_data['result']['transaction_data'][i]['TS_System_Predict_Time'];
                var postdata = get_transation_data['result']['transaction_data'][i]['post_data']
                var num = i + 1;
                thisObj.show_trans_data(MerTranNo, TranID, MerID, PayType, TransDate, PayTime, PayInfo, Amt, Paystatus, Systemfundtime, Predictfundtime, postdata);
                //$("#mem_trans_table").slideDown(500);
            }
            html_str += "</tbody>";
            html_str += "</table>";
            html_str += "<div class='nomal_text' style='width:100%;text-align: center;margin-top: 10px;margin-bottom:10px;'>";
            html_str += "<span><b>智付寶Pay2go貼心提醒</b>：信用卡支付方式中收款日期為請款日期</span>";
            html_str += "</div>";
            $("#table_area_trans").html(html_str);
            $(".page_foot").show();
            $("#table_area_trans").slideDown(500);
            html_foot = "<div>";
            html_foot += "總筆數 共" + get_transation_data['result']['transaction_count'] + "筆，"

            if (get_transation_data['result']['NowPage'] != 1) {
                html_foot += "&nbsp;<a class='previous' style='cursor: pointer;'>上一頁</a>&nbsp;"
            }
            html_foot += "目前頁次第<select class='page_choose' style='width:auto' name='PageChoose' >"
            html_foot += "<option value=''>" + get_transation_data['result']['NowPage'] + "</option>"
            for (page = 1; page <= get_transation_data['result']['Page']; page++)
            {
                html_foot += "<option value='" + page + "'>" + page + "</option>"

            }
            html_foot += "</select>頁/共" + get_transation_data['result']['Page'] + "頁";
            if (get_transation_data['result']['NowPage'] < get_transation_data['result']['Page']) {
                html_foot += "&nbsp;<a class='nextpage' style='cursor: pointer;'>下一頁</a>"
            }

            html_foot += "</div>"
            $(".page_foot").html(html_foot);
            $('.page_choose').bind("change", function() {
                var page_selected = $(this).val();
                thisObj.search_transation(page_selected);
            });
            $('.previous').bind("click", function() {
                var page_selected = get_transation_data['result']['NowPage'] - 1;
                thisObj.search_transation(page_selected);
            });
            $('.nextpage').bind("click", function() {
                var page_selected = get_transation_data['result']['NowPage'] * 1 + 1 * 1;
                thisObj.search_transation(page_selected);
            });
        } else {
            if (get_transation_data['message'] === null) {
                alert("系統發生錯誤，請與智付寶聯繫");
            } else {
                alert(get_transation_data['message'] + "(" + get_transation_data['status'] + ")")
            }

        }
    }
    thisObj.show_trans_data = function(MerTranNo, TranID, MerID, PayType, TransDate, PayTime, PayInfo, Amt, Paystatus, Systemfundtime, Predictfundtime, postdata) {
        if (PayType == "VACC") {
            PayType = "ATM轉帳";
        } else if (PayType == "WEBATM") {
            PayType = "WebATM";
        } else if (PayType == "CVS") {
            PayType = "超商代碼繳費";
        } else if (PayType == "BARCODE") {
            PayType = "條碼繳費";
            var pay_barcode = "y";
        } else if (PayType == "CREDIT") {
            PayType = "信用卡";
        }


        if (PayType == "條碼繳費") {
            var barcode_info = PayInfo.split(',');
            PayInfo = barcode_info[0]+"<br>"+barcode_info[1]+"<br>"+barcode_info[2];
            
        }else if (PayType != "條碼繳費"){
            PayInfo = PayInfo;
        }
     
        var trans_status
        if (Paystatus == "0") {
            trans_status = "未付款";
        } else if (Paystatus == "1") {
            trans_status = "已付款";
        } else if (Paystatus == "2") {
            trans_status = "付款失敗";
        } else if (Paystatus == "3") {
            trans_status = "付款取消";
        } else {
            trans_status = "-";
        }

        var format_pay_time;
        if (PayTime == "0000-00-00 00:00:00" || PayTime == null) {
            format_pay_time = "未收款";
        } else {
            format_pay_time = PayTime;
        }
        var format_trans_date = thisObj.display_datetime(TransDate);
        var format_system_fund_time;
        var format_predict_fund_time;
        if (Systemfundtime == null || Systemfundtime == "0000-00-00 00:00:00") {
            format_system_fund_time = "-";
        } else {
            format_system_fund_time = Systemfundtime;
        }
        if (Predictfundtime == null || Predictfundtime == "0000-00-00 00:00:00") {
            format_predict_fund_time = "-";
        } else {
            format_predict_fund_time = Predictfundtime;
        }

        if (Amt == null || Amt == "") {
            Amt = "-";
        } else {
            Amt = thisObj.display_amt(Amt);
        }


        if (PayInfo == null || PayInfo == "") {
            PayInfo = "-";
        }

        html_str += "<tr >";
        html_str += "<td  style=' vertical-align:middle;'>" + TranID + "<br>" + MerTranNo + "</td>";
        html_str += "<td  style=' vertical-align:middle;'>" + MerID + "</td>";

        html_str += "<td  style=' vertical-align:middle;'>" + PayType + "<br>" + PayInfo + "</td>";

        html_str += "<td  style=' vertical-align:middle;'>" + TransDate + "<br>" + format_pay_time + "</td>";
        html_str += "<td style='vertical-align:middle'>" + Amt + "</td>";
        html_str += "<td  style=' vertical-align:middle;'>" + trans_status + "</td>";
        html_str += "<td  style=' vertical-align:middle;'>" + format_predict_fund_time + "<br>" + format_system_fund_time + "</td>";
        html_str += "<td  style=' vertical-align:middle;'><a id='trans_detail' style='cursor:pointer' onclick=sell_shop_info.search_trans_detail('" + postdata + "')>詳細</a></td>";
//        html_str += "<td  style=' vertical-align:middle;'><select><option value=''>請選擇</option>";
//        if (PayTime == "0000-00-00 00:00:00") {
//            html_str += "<option value='1'>刪除</option>";
//        } else {
//            html_str += "<option value='2'>退款</option>";
//        }
//        html_str += "</select></td>";


        html_str += "</tr >";
        return;
    }


    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     * 交易查詢detail
     * @returns {undefined}
     */
    thisObj.search_trans_detail = function(post_data) {
        $("#order_info").html("");
        $("#payer_info").html("");
        encode_str = "post_data=" + post_data;
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/transaction/get_transaction_order_detail";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_trans_detail, true)


    }
    thisObj.get_trans_detail = function(msg) {

        var get_trans_detail = jQuery.parseJSON(msg);
        if (get_trans_detail['status'] == "SUCCESS") {

            //tra
            var MerID = get_trans_detail['result']['TRA']['TS_Mer_ID'];
            var mer_trano = get_trans_detail['result']['TRA']['TS_MerTrade_No'];
            var tran_id = get_trans_detail['result']['TRA']['TS_Tran_ID'];
            var pay_type = get_trans_detail['result']['TRA']['TS_Payment_Type'];
            var trans_date = get_trans_detail['result']['TRA']['TS_Create_Time'];
            var bank_type = get_trans_detail['result']['TRA']['TS_Bank_Type'];
            var pay_time = get_trans_detail['result']['TRA']['TS_Response_Time'];
            var pay_info = get_trans_detail['result']['TRA']['TS_Pay_Info'];
            var amt = get_trans_detail['result']['TRA']['TS_Amount'];
            var trust_bank = get_trans_detail['result']['TRA']['TS_Trust_Bank'];
            var pay_status = get_trans_detail['result']['TRA']['TS_Status'];
            var prod_desc = get_trans_detail['result']['TRA']['TS_Prod_Desc'];
            var system_fundtime = get_trans_detail['result']['TRA']['TS_System_Fund_Time'];
            var predict_fundtime = get_trans_detail['result']['TRA']['TS_System_Predict_Time'];
            var ip_add = get_trans_detail['result']['TRA']['TS_IP'];
            var buyer_mail = get_trans_detail['result']['TRA']['TS_Buyer_Email'];
            //付款人資訊
            if (get_trans_detail['result']['MEM'] != "") {
                var mem_data = "1";
                var payer_addr = get_trans_detail['result']['MEM']['MB_Addr'];
                var payer_name = get_trans_detail['result']['MEM']['MB_Name'];
                var payer_tel = get_trans_detail['result']['MEM']['MB_Mobile'];
                var payer_mail = get_trans_detail['result']['MEM']['MB_Mail'];
                thisObj.show_trans_detail(MerID, mer_trano, tran_id, pay_type, trans_date, bank_type, pay_time, pay_info, amt, trust_bank, pay_status, prod_desc, system_fundtime, predict_fundtime, ip_add, buyer_mail, mem_data, payer_addr, payer_name, payer_tel, payer_mail)

            } else if (get_trans_detail['result']['EPG'] != "") {
                var mem_data = "1";
                var payer_addr = get_trans_detail['result']['EPG']['EPG_Payer_Addr'];
                var payer_name = get_trans_detail['result']['EPG']['EPG_Payer_Name'];
                var payer_tel = get_trans_detail['result']['EPG']['EPG_Payer_Tel'];
                var payer_mail = get_trans_detail['result']['EPG']['EPG_Payer_Email'];
                thisObj.show_trans_detail(MerID, mer_trano, tran_id, pay_type, trans_date, bank_type, pay_time, pay_info, amt, trust_bank, pay_status, prod_desc, system_fundtime, predict_fundtime, ip_add, buyer_mail, mem_data, payer_addr, payer_name, payer_tel, payer_mail)

            } else {
                var mem_data = "0";
                thisObj.show_trans_detail(MerID, mer_trano, tran_id, pay_type, trans_date, bank_type, pay_time, pay_info, amt, trust_bank, pay_status, prod_desc, system_fundtime, predict_fundtime, ip_add, buyer_mail, mem_data)

            }




        } else {

            alert("錯誤：" + get_trans_detail['message'] + " (" + get_trans_detail['status'] + ")");
        }
    }
    /*
     * modal 秀出交易明細
     * @param {type} MerID
     * @param {type} mer_trano
     * @param {type} tran_id
     * @param {type} pay_type
     * @param {type} trans_date
     * @param {type} bank_type
     * @param {type} pay_time
     * @param {type} pay_info
     * @param {type} amt
     * @param {type} pay_status
     * @param {type} prod_desc
     * @param {type} system_fundtime
     * @param {type} predict_fundtime
     * @param {type} mem_data
     * @param {type} payer_addr
     * @param {type} payer_name
     * @param {type} payer_tel
     * @param {type} payer_mail 
     */
    thisObj.show_trans_detail = function(MerID, mer_trano, tran_id, pay_type, trans_date, bank_type, pay_time, pay_info, amt, trust_bank, pay_status, prod_desc, system_fundtime, predict_fundtime, ip_add, buyer_mail, mem_data, payer_addr, payer_name, payer_tel, payer_mail) {

        if (pay_time == "0000-00-00 00:00:00") {
            var f_pay_time = "未付款";
        } else {

            var f_pay_time = pay_time;
        }


        if (pay_status == "0") {
            pay_status = "未付款";
        } else if (pay_status == "1") {
            pay_status = "已付款";
        } else if (pay_status == "2") {
            pay_status = "付款失敗";
        } else if (pay_status == "3") {
            pay_status = "付款取消";
        }

        if (system_fundtime == "0000-00-00 00:00:00" || system_fundtime == null) {
            var f_system_fundtime = "-";
        } else {
            var f_system_fundtime = system_fundtime;
        }

        if (predict_fundtime == "0000-00-00 00:00:00" || predict_fundtime == null) {
            var f_predict_fundtime = "-";
        } else {
            var f_predict_fundtime = predict_fundtime;
        }

        if (pay_type == "VACC") {
            pay_type = "ATM轉帳";
        } else if (pay_type == "WEBATM") {
            pay_type = "WebATM";
        } else if (pay_type == "CVS") {
            pay_type = "超商代碼繳費";
        } else if (pay_type == "BARCODE") {
            pay_type = "條碼繳費"; 
        } else if (pay_type == "CREDIT") {
            pay_type = "信用卡";
        }
        if (pay_type == "條碼繳費") {
            var barcode_info = pay_info.split(',');
            pay_info = barcode_info[0]+"<br>"+barcode_info[1]+"<br>"+barcode_info[2];
            
        }else if (pay_type != "條碼繳費"){
            pay_info = pay_info;
        }
        
        if (trust_bank === null) {
            trust_bank = "萬泰銀行";
        }

        amt = thisObj.display_amt(amt);
        ip_add = thisObj.display_null_data(ip_add);


        a_str = "";
        a_str += " <table class='table-bordered bank_table' width='100%' border='0' cellspacing='0' cellpadding='0'>";
        a_str += "<thead>";
        a_str += "<tr>";
        a_str += "<th width='10%' align='center' colspan='2'>智付寶交易序號<br>商店訂單編號</th>";
        a_str += "<th width='10%' align='center'>商店代號</th>";
        a_str += "<th width='10%' align='center'>支付方式</th>";
        a_str += "<th width='10%' align='center'>金額</th>";
        a_str += "<th width='10%' align='center'>收款狀態</th>";
        a_str += "<th width='10%' align='center'>款項保管銀行</th>";
//        html_str += "<th width='8%' align='center'>提前合意</th>";
        a_str += "<th width='10%' align='center'>IP位址</th>";
        a_str += "</tr>";
        a_str += "</thead>";
        a_str += "<tbody style='font-size:13px'>";
        a_str += "<tr >";
        a_str += "<td  style=' vertical-align:middle;' colspan='2'>" + tran_id + "<br>" + mer_trano + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + MerID + "</td>";
 
            a_str += "<td  style=' vertical-align:middle;'>" + pay_type + "<br>" + pay_info + "</td>";

      
        a_str += "<td style='vertical-align:middle'>" + amt + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + pay_status + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + trust_bank + "</td>";
        a_str += "<td>" + ip_add + "</td>";
        a_str += "</tr >";
        a_str += "<tr >";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>交易日期</b></td>";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>收款日期</b></td>";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>預計撥款日</b></td>";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>實際撥款日</b></td>";
        a_str += "</tr >";
        a_str += "<tr >";
        a_str += "<td  style=' vertical-align:middle;' colspan='2'>" + trans_date + "</td>";
        a_str += "<td  style=' vertical-align:middle;' colspan='2'>" + f_pay_time + "</td>";
        a_str += "<td  style=' vertical-align:middle;' colspan='2'>" + f_predict_fundtime + "</td>";
        a_str += "<td  style=' vertical-align:middle;' colspan='2'>" + f_system_fundtime + "</td>";
        a_str += "</tr >";
        a_str += "<tr >";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>商品說明</b></td>";
        a_str += "<td  style='text-align: left;' colspan='6'>" + prod_desc + "</td>";
        a_str += "</tr >";
        if (buyer_mail != null) {
            a_str += "<tr >";
            a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>付款E-Mail</b></td>";
            a_str += "<td  style='text-align: left;' colspan='6'>" + buyer_mail + "</td>";
            a_str += "</tr >";
        }
        a_str += "</tbody>";
        a_str += "</table>";
        $("#order_info").html(a_str);
        if (mem_data == "1") {
            if (payer_addr == null || payer_addr == "") {
                payer_addr = "無地址資訊";
            }
            b_str = "<div class='content_title' id='sell_top_title' style='margin-top: 10px;margin-bottom: 10px'>  付款資訊</div>";
            b_str += " <table class='table-bordered bank_table' width='100%' border='0' cellspacing='0' cellpadding='0'>";
            b_str += "<thead>";
            b_str += "<tr>";
            b_str += "<th   align='center'>付款人</th>";
            b_str += "<th align='center'>聯絡電話</th>";
            b_str += "<th   align='center'>付款E-Mail</th>";
            b_str += "<th  align='center'>付款日期</th>";
            b_str += "</tr>";
            b_str += "</thead>";
            b_str += "<tbody style='font-size:13px'>";
            b_str += "<tr >";
            b_str += "<td  style=' vertical-align:middle;'>" + payer_name + "</td>";
            b_str += "<td  style=' vertical-align:middle;'>" + payer_tel + "</td>";
            b_str += "<td  style=' vertical-align:middle;'>" + payer_mail + "</td>";
            b_str += "<td  style=' vertical-align:middle;'>" + f_pay_time + "</td>";
            b_str += "</tr >";
            b_str += "<tr >";
            b_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;'><b>收貨地址</b></td>";
            b_str += "<td  style='text-align: left;' colspan='3'>" + payer_addr + "</td>";
            b_str += "</tr >";
            b_str += "</tbody>";
            b_str += "</table>";
            $("#payer_info").html(b_str);
        }


        $('#trans_detail_table').modal('show')
    }


    /*
     *搜尋信用卡交易 
     */

    thisObj.search_card_transation = function(NowPage) {

        $("#table_title").hide();
        $("#table_area_trans").hide();
        $(".page_foot").hide();
        $("#com_nowpage").val(NowPage);
        encode_str = $("#ccard_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/transaction/get_credit_transaction_data_by_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_card_transation_data, true);
    }
    thisObj.get_card_transation_data = function(msg) {
        get_card_transation_data = jQuery.parseJSON(msg);
        html_str = "";
        html_str += " <table class='table-bordered bank_table ' width='100%' border='0' cellspacing='0' cellpadding='50'>";
        html_str += "<thead>";
        html_str += "<tr>";
        html_str += "<th   align='center' width='10%'>智付寶交易序號<br>商店訂單編號</th>";
        html_str += "<th  align='center' width='5%'>商店<br>代號</th>";
        html_str += "<th  align='center' width='5%'>請款<br>倒數日</th>";
        html_str += "<th  align='center' width='20%'>授權日期<br>請款日期</th>";
        html_str += "<th  align='center' width='15%'>信用卡號<br>授權碼</th>";
        html_str += "<th align='center' width='10%'>授權金額<br>請款金額</th>";
        html_str += "<th align='center' width='5%'>3D<br>交易</th>";
        html_str += "<th align='center' width='10%' >回應碼<br>回應信息</th>";
//        html_str += "<th align='center'>交易IP</th>";
        html_str += "<th align='center' width='15%'>執行</th>";
        html_str += "</tr>";
        html_str += "</thead>";
        html_str += "<tbody style='font-size:13px'>";
        if (get_card_transation_data['status'] === "SUCCESS") {
            $("#data_count").text(get_card_transation_data['result']['transaction_count'])
            var total_amt = get_card_transation_data['result']['tran_amt'];
            total_amt = thisObj.display_amt(total_amt);
            $("#total_amount").text("總交易金額：" + total_amt + "元")
            $("#download_div").html("<a style='cursor:pointer' id='download_card_trans'>下載查詢結果</a>")
            $("#table_title").slideDown();
            $("#now_page").val(get_card_transation_data['result']['NowPage']);
            for (i = 0; i < get_card_transation_data['result']['transaction_data'].length; i++) {
                var trans_no = get_card_transation_data['result']['transaction_data'][i]['TC_Trade_No'];
                var mer_oder_no = get_card_transation_data['result']['transaction_data'][i]['TC_Merchant_Trade_No'];
                var MerID = get_card_transation_data['result']['transaction_data'][i]['TC_Merchant_ID'];
                var AuthDate = get_card_transation_data['result']['transaction_data'][i]['Auth_Deadline'];
                var card_create_time = get_card_transation_data['result']['transaction_data'][i]['TC_Create_Time'];
                var payed_time = get_card_transation_data['result']['transaction_data'][i]['TC_Payed_Time'];
                var four = get_card_transation_data['result']['transaction_data'][i]['TC_Card_No4'];
                var six = get_card_transation_data['result']['transaction_data'][i]['TC_Card_No6'];
                var auth_code = get_card_transation_data['result']['transaction_data'][i]['TC_Auth_Code'];
                var amt = get_card_transation_data['result']['transaction_data'][i]['TC_Amt'];
                var close_amt = get_card_transation_data['result']['transaction_data'][i]['TC_Colse_Amt'];
                var eci = get_card_transation_data['result']['transaction_data'][i]['TC_ECI'];
                var respond_code = get_card_transation_data['result']['transaction_data'][i]['TC_Respond_Code'];
                var respond_msg = get_card_transation_data['result']['transaction_data'][i]['TC_Msg'];
                var post_data = get_card_transation_data['result']['transaction_data'][i]['post_data'];
                var auth_status = get_card_transation_data['result']['transaction_data'][i]['TC_Auth_Status'];
                var close_status = get_card_transation_data['result']['transaction_data'][i]['TC_Close_Status'];
                var back_status = get_card_transation_data['result']['transaction_data'][i]['TC_Back_Status'];
                var back_amt = get_card_transation_data['result']['transaction_data'][i]['TC_Back_Amt'];
                var back_day = get_card_transation_data['result']['transaction_data'][i]['Back_Deadline'];
                thisObj.show_card_trans_data(trans_no, mer_oder_no, MerID, AuthDate, card_create_time, payed_time, four, six, auth_code, amt, close_amt, eci, respond_code, respond_msg, post_data, i, auth_status, close_status, back_status, back_amt, back_day);
                //$("#mem_trans_table").slideDown(500);
            }
            html_str += "</tbody>";
            html_str += "</table>";
            $("#table_area_trans").html(html_str);
            $(".page_foot").show();
            $("#table_area_trans").slideDown(500);
            html_foot = "<div>";
            html_foot += "總筆數 共" + get_card_transation_data['result']['transaction_count'] + "筆，"

            if (get_card_transation_data['result']['NowPage'] != 1) {
                html_foot += "&nbsp;<a class='previous' style='cursor: pointer;'>上一頁</a>&nbsp;"
            }
            html_foot += "目前頁次第<select class='page_choose' style='width:auto' name='PageChoose' >"
            html_foot += "<option value=''>" + get_card_transation_data['result']['NowPage'] + "</option>"
            for (page = 1; page <= get_card_transation_data['result']['Page']; page++)
            {
                html_foot += "<option value='" + page + "'>" + page + "</option>"

            }
            html_foot += "</select>頁/共" + get_card_transation_data['result']['Page'] + "頁";
            if (get_card_transation_data['result']['NowPage'] < get_card_transation_data['result']['Page']) {
                html_foot += "&nbsp;<a class='nextpage' style='cursor: pointer;'>下一頁</a>"
            }

            html_foot += "</div>"
            $(".page_foot").html(html_foot);
            $('.page_choose').bind("change", function() {
                var page_selected = $(this).val();
                thisObj.search_card_transation(page_selected);
            });
            $('.previous').bind("click", function() {
                var page_selected = get_card_transation_data['result']['NowPage'] - 1;
                thisObj.search_card_transation(page_selected);
            });
            $('.nextpage').bind("click", function() {
                var page_selected = get_card_transation_data['result']['NowPage'] * 1 + 1 * 1;
                thisObj.search_card_transation(page_selected);
            });
        } else {
            if (get_card_transation_data['message'] === null) {
                alert("系統發生錯誤，請與智付寶聯繫");
            } else {
                alert(get_card_transation_data['message'] + "(" + get_card_transation_data['status'] + ")")
            }

        }
    }

    thisObj.show_card_trans_data = function(trans_no, mer_oder_no, MerID, AuthDate, card_create_time, payed_time, four, six, auth_code, amt, close_amt, eci, respond_code, respond_msg, post_data, i, auth_status, close_status, back_status, back_amt, back_day) {
        trans_no = thisObj.display_null_data(trans_no);
        mer_oder_no = thisObj.display_null_data(mer_oder_no);
        auth_code = thisObj.display_null_data(auth_code);
        respond_code = thisObj.display_null_data(respond_code);
        respond_msg = thisObj.display_null_data(respond_msg);
        var create_time;
        if (card_create_time == "0000-00-00 00:00:00") {
            create_time = "-";
        } else {
            create_time = card_create_time;
        }
        if (payed_time == "0000-00-00 00:00:00" || payed_time == "" || payed_time == null) {
            var dis_payedtime = "-";
        } else {
            dis_payedtime = payed_time;
        }

        if (eci == null) {
            eci = "無";
        } else {
            eci = "有";
        }


        if (close_amt == null || close_amt == "") {
            display_close_amt = "-";
        } else {
            display_close_amt = thisObj.display_amt(close_amt);
        }

        if (amt == null || amt == "") {
            display_amt = "-";
        } else {
            display_amt = thisObj.display_amt(amt);
        }

        var card_num
        if (six == "" || six == null || four == "" || four == null) {
            card_num = "無卡號記錄";
        } else {
            card_num = six + "******" + four;
        }





        /*auth_status, close_status, back_status
         * 		auth         close        back      button_type
         (接授權成功)
         未請款          1		0	    0      1(取消授權0,請款1)
         請款申請中      1		1	    0	   2(取消請款2)
         請款處理中      1              2           0         3(退款3) 
         請款完成        1              3           0         3(退款3)
         請款失敗        1              4           0         5(-)
         
         
         請款時間過期 到數日 =0
         已部分退款
         已全額退款
         退款時間過期
         多次退款
         
         退款申請中      1              3           1	       4(取消退款4)	
         退款處理中      1              3           2 	        5(-)
         退款完成        1              3           3          5(-)
         退款失敗        1              3           4           5(-)
         授權失敗         0              0           0          5(-)
         */

        var button_type;
        if (auth_status == "1" && close_status == "0" && back_status == "0") {
            if (AuthDate > 0) {  //請款日未超過21天
                button_type = 1;
            } else {
                button_type = 5;
            }
        } else if (auth_status == "1" && close_status == "1" && back_status == "0") {
            button_type = 5; //2
            respond_msg = "請款申請中";
        } else if (auth_status == "1" && close_status == "2" && back_status == "0") {
            button_type = 5;
            respond_msg = "請款處理中";
        } else if (auth_status == "1" && close_status == "3") {
            if (back_status == "0") {
                if (back_day > 0) {
                    if (back_amt === null) {
                        button_type = 3;
                        respond_msg = "請款完成";
                    }
                } else {
                    button_type = 5;
                    respond_msg = "請款完成，但已超過可退款日期";
                }
            } else if (back_status == "1") {
                button_type = 5; //4
                respond_msg = "退款申請中";
            } else if (back_status == "2" || back_status == "4") {
                button_type = 5;
                respond_msg = "退款處理中";
            } else if (back_status == "3") { //
                if (back_day > 0) {
                    if (back_amt > 0 && back_amt < close_amt) { //退款金額小於請款金額
                        button_type = 3;
                        respond_msg = "可進行退款";
                    } else {
                        button_type = 5;
                        respond_msg = "已不可退款";
                    }
                } else {
                    button_type = 5;
                    respond_msg = "已超過可退款日期";
                }
            }

        } else if (auth_status == "1" && close_status == "4") {
            button_type = 5;
            respond_msg = "請款失敗";
            ///////////////////////////////////////////////////////////////////////////
        } else if (auth_status == "3") {
            button_type = 5;
            respond_msg = "已取消授權";
        } else {
            button_type = 5;
            respond_msg = respond_msg;
        }
        if (respond_code !== "00" || respond_code == null || respond_code == "") {
            html_str += "<tr class='crows' style='background-color:rgba(240, 238, 225, 0.22);'>";
        } else if (respond_code == "00") {
            html_str += "<tr>";
        }
        html_str += "<td  style='vertical-align:middle;'><a style='cursor:pointer' onclick=sell_shop_info.search_card_detail('" + post_data + "')>" + trans_no + "</a><br>" + mer_oder_no + "</td>";
        html_str += "<td  style='vertical-align:middle;'>" + MerID + "</td>";
        html_str += "<td  style='vertical-align:middle;'>" + AuthDate + "</td>";
        html_str += "<td  style='vertical-align:middle;' <td title='" + card_create_time + "'>" + create_time + "<br>" + dis_payedtime + "</td>";
        html_str += "<td style='vertical-align:middle'>" + card_num + "<br>" + auth_code + "</td>";
        html_str += "<td style='vertical-align:middle'><b>" + display_amt + "<br>" + display_close_amt + "</b></td>";
        html_str += "<td  style='vertical-align:middle;'>" + eci + "</td>";
        html_str += "<td  style='vertical-align:middle;'>" + respond_code + "<br>" + respond_msg + "</td>";
//        html_str += "<td  style=' vertical-align:middle;'>---.---.---.---</td>";
//        html_str += "<td  style=' vertical-align:middle;'><select  id='card_process" + i + "' ><option value=''>請選擇</option><option value='0'>取消授權</option><option value='1'>請款</option><option value='2'>取消請款</option><option value='3'>退款</option><option value='4'>取消退款</option>";
        html_str += "<td>";
        if (button_type == "1") {
            html_str += "<button type='button' class='btn btn-success btn-sm' onclick=sell_shop_info.change_card_status('" + post_data + "'" + "," + "'" + 1 + "'" + "," + "'" + amt + "')>請款</button>"
            html_str += "<button type='button' class='btn btn-danger btn-sm'  style='margin-left:3px' onclick=sell_shop_info.change_card_status('" + post_data + "'" + "," + "'" + 0 + "'" + "," + "'" + amt + "')>取消授權</button>"
        } else if (button_type == "2") {
            html_str += "<button type='button' class='btn btn-danger btn-sm'  onclick=sell_shop_info.change_card_status('" + post_data + "'" + "," + "'" + 2 + "'" + "," + "'" + amt + "')>取消請款</button>"
        } else if (button_type == "3") {
            if (back_amt == null) {
                amt = close_amt;
            } else if (back_amt != null) {
                amt = back_amt;
            }
            html_str += "<button type='button' class='btn btn-primary btn-sm' onclick=sell_shop_info.change_card_status('" + post_data + "'" + "," + "'" + 3 + "'" + "," + "'" + amt + "')>退款</button>"
        } else if (button_type == "4") {
            html_str += "<button type='button' class='btn btn-danger btn-sm'  onclick=sell_shop_info.change_card_status('" + post_data + "'" + "," + "'" + 4 + "'" + "," + "'" + amt + "')>取消退款</button>"
        } else if (button_type == "5") {
            html_str += "-"
        }
        html_str += "</td>";
        html_str += "</tr >";
        return;
    }
    /*
     * 
     * @param {type} post_data
     * @returns {undefined}
     */
    thisObj.change_card_status = function(post_data, type, amt) {
        if (type == "1" || type == "3") {
            var type_name;
            if (type == "1") {
                type_name = "請款";
            } else if (type == "3") {
                type_name = "退款";
            }
            $(".title").text(type_name);
            $("#apply_amt").val(amt);
            $("#postdata_card_process").val(post_data);
            $("#type_card_process").val(type);
            $("#card_process_modal").modal("show");
        }
        if (type == "0") {
            if (confirm("確定要取消授權嗎?")) {
                thisObj.credit_card_process(post_data, type);
            }
        } else if (type == "2") {
            if (confirm("確定要取消請款嗎?")) {
                thisObj.credit_card_process(post_data, type);
            }
        } else if (type == "4") {
            if (confirm("確定要取消退款嗎?")) {
                thisObj.credit_card_process(post_data, type);
            }
        }
    }

    /*
     * 信用卡操作執行 
     * 1=請款 
     * 3=退款 
     */
    thisObj.credit_card_process_with_amt = function() {
        encode_str = $("#process_card_with_money").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/transaction/request_close_by_credit_card";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.request_credfit_card_result, true)
    }

    /*
     * 信用卡操作執行
     * 0=取消授權 
     * 2=取消請款 
     * 4=取消退款
     */

    thisObj.credit_card_process = function(post_data, type) {

        encode_str = "post_data=" + post_data + "&Type=" + type;
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        if (type == "0") {
            url = "shop/transaction/cancel_credit_card";
        } else if (type == "2") {
            url = "";
        } else if (type == "4") {
            url = "";
        }

        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.request_credfit_card_result, true)

    }

    thisObj.request_credfit_card_result = function(msg) {
        request_credfit_card_result = jQuery.parseJSON(msg);
        if (request_credfit_card_result['status'] == "SUCCESS") {
            alert(request_credfit_card_result['message']);
            location.reload(true);
        } else {

            alert("錯誤：" + request_credfit_card_result['message'] + " (" + request_credfit_card_result['status'] + ")");
        }
    }


    /*
     * 信用卡交易詳細資料查詢
     * @param {type} post_data
     * @returns {undefined}
     */
    thisObj.search_card_detail = function(post_data) {
        $("#card_order_info").html("");
        $("#card_payer_info").html("");
        encode_str = "post_data_=" + post_data;
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/transaction/credit_transaction_detail";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_card_trans_detail, true)
    }

    thisObj.get_card_trans_detail = function(msg) {
        get_card_trans_detail = jQuery.parseJSON(msg);
        if (get_card_trans_detail['status'] == "SUCCESS") {

            var trans_no = get_card_trans_detail['result']['Credit']['TC_Trade_No'];
            var mer_oder_no = get_card_trans_detail['result']['Credit']['TC_Merchant_Trade_No'];
            var MerID = get_card_trans_detail['result']['Credit']['TC_Merchant_ID'];
            var AuthDate = get_card_trans_detail['result']['Credit']['Auth_Deadline'];
            var card_create_time = get_card_trans_detail['result']['Credit']['TC_Create_Time'];
            var payed_time = get_card_trans_detail['result']['Credit']['TC_Payed_Time'];
            var four = get_card_trans_detail['result']['Credit']['TC_Card_No4'];
            var six = get_card_trans_detail['result']['Credit']['TC_Card_No6'];
            var auth_code = get_card_trans_detail['result']['Credit']['TC_Auth_Code'];
            var amt = get_card_trans_detail['result']['Credit']['TC_Amt'];
            var close_amt = get_card_trans_detail['result']['Credit']['TC_Colse_Amt'];
            var eci = get_card_trans_detail['result']['Credit']['TC_ECI'];
            var respond_code = get_card_trans_detail['result']['Credit']['TC_Respond_Code'];
            var respond_msg = get_card_trans_detail['result']['Credit']['TC_Msg']
            var post_data = get_card_trans_detail['result']['Credit']['post_data']
            var ip = get_card_trans_detail['result']['Tran']['TS_IP'];
            var trust_bank = get_card_trans_detail['result']['Tran']['TS_Trust_Bank'];
            var prod_desc = get_card_trans_detail['result']['Tran']['TS_Prod_Desc'];
            var Systemfundtime = get_card_trans_detail['result']['Tran']['TS_System_Fund_Time'];
            var Predictfundtime = get_card_trans_detail['result']['Tran']['TS_System_Predict_Time'];
            var auth_status = get_card_trans_detail['result']['Credit']['TC_Auth_Status'];
            var close_status = get_card_trans_detail['result']['Credit']['TC_Close_Status'];
            var back_status = get_card_trans_detail['result']['Credit']['TC_Back_Status'];
            var buyer_mail = get_card_trans_detail['result']['Tran']['TS_Buyer_Email'];
            var close_data = get_card_trans_detail['result']['Close'];
            if (get_card_trans_detail['result']['Member'] != null) {
                var mem_data = "1";
                var payer_addr = get_card_trans_detail['result']['Member']['MB_Addr'];
                var payer_name = get_card_trans_detail['result']['Member']['MB_Name'];
                var payer_tel = get_card_trans_detail['result']['Member']['MB_Mobile'];
                var payer_mail = get_card_trans_detail['result']['Member']['MB_Mail'];
                thisObj.show_card_trans_detail(trans_no, mer_oder_no, MerID, AuthDate, card_create_time, payed_time, four, six, auth_code, amt, close_amt, eci, respond_code, respond_msg, post_data, trust_bank, prod_desc, ip, Systemfundtime, Predictfundtime, auth_status, close_status, back_status, buyer_mail, close_data, mem_data, payer_addr, payer_name, payer_tel, payer_mail)

            } else {
                var mem_data = "0";
                thisObj.show_card_trans_detail(trans_no, mer_oder_no, MerID, AuthDate, card_create_time, payed_time, four, six, auth_code, amt, close_amt, eci, respond_code, respond_msg, post_data, trust_bank, prod_desc, ip, Systemfundtime, Predictfundtime, auth_status, close_status, back_status, buyer_mail, close_data, mem_data);
            }
            $('#card_detail_table').modal('show');

        } else {

            alert("錯誤：" + get_card_trans_detail['message'] + " (" + get_card_trans_detail['status'] + ")");
        }

    }
    /*
     * modal 秀出card交易明細
     *  
     */
    thisObj.show_card_trans_detail = function(trans_no, mer_oder_no, MerID, AuthDate, card_create_time, payed_time, four, six, auth_code, amt, close_amt, eci, respond_code, respond_msg, post_data, trust_bank, prod_desc, ip, Systemfundtime, Predictfundtime, auth_status, close_status, back_status, buyer_mail, close_data, mem_data, payer_addr, payer_name, payer_tel, payer_mail) {


        trans_no = thisObj.display_null_data(trans_no);
        mer_oder_no = thisObj.display_null_data(mer_oder_no);
        auth_code = thisObj.display_null_data(auth_code);
        respond_code = thisObj.display_null_data(respond_code);
        respond_msg = thisObj.display_null_data(respond_msg);
        ip = thisObj.display_null_data(ip);
        var create_time;
        if (card_create_time == "0000-00-00 00:00:00" || card_create_time == null) {
            create_time = "-";
        } else {
            create_time = card_create_time;
        }
        var payedtime;
        if (payed_time == "0000-00-00 00:00:00" || payed_time == null) {
            payedtime = "-";
        } else {
            payedtime = payed_time;
        }
        ;
        if (Predictfundtime == "0000-00-00 00:00:00" || Predictfundtime == null) {
            var format_predict_fund_time = "-";
        } else {
            var format_predict_fund_time = Predictfundtime;
        }

        if (Systemfundtime == "0000-00-00 00:00:00" || Systemfundtime == null) {
            var format_system_fund_time = "-";
        } else {
            var format_system_fund_time = Systemfundtime;
        }

        if (trust_bank === null) {
            trust_bank = "萬泰銀行";
        }

        if (eci == null) {
            eci = "無";
        } else {
            eci = "有";
        }
        var card_num
        if (six == "" || six == null || four == "" || four == null) {
            card_num = "無卡號記錄";
        } else {
            card_num = six + "******" + four;
        }

        if (close_amt == null || close_amt == "") {
            close_amt = "-";
        } else {
            close_amt = thisObj.display_amt(close_amt);
        }

        if (amt == null || amt == "") {
            amt = "-";
        } else {
            amt = thisObj.display_amt(amt);
        }

        var buy_mail = thisObj.display_null_data(buyer_mail);
        if (auth_status == "1" && close_status == "0" && back_status == "0") {
        } else if (auth_status == "1" && close_status == "1" && back_status == "0") {
            respond_msg = "請款申請中";
        } else if (auth_status == "1" && close_status == "2" && back_status == "0") {
            respond_msg = "請款處理中";
        } else if (auth_status == "1" && close_status == "3" && back_status == "0") {
            respond_msg = "請款完成";
        } else if (auth_status == "1" && close_status == "4" && back_status == "0") {
            respond_msg = "請款失敗";
            ///////////////////////////////////////////////////////////////////////////
        } else if (auth_status == "1" && close_status == "3" && back_status == "1") {
            respond_msg = "退款申請中";
        } else if (auth_status == "1" && close_status == "3" && back_status == "2") {
            respond_msg = "退款處理中";
        } else if (auth_status == "1" && close_status == "3" && back_status == "3") {
            respond_msg = "退款完成";
        } else if (auth_status == "1" && close_status == "3" && back_status == "4") {
            respond_msg = "退款失敗";
        } else if (auth_status == "3" && close_status == "0" && back_status == "0") {
            respond_msg = "已取消授權";
        } else {
            respond_msg = respond_msg;
        }
        a_str = "";
        a_str += " <table class='table-bordered bank_table' width='100%' border='0' cellspacing='0' cellpadding='0'>";
        a_str += "<thead>";
        a_str += "<tr>";
        a_str += "<th   width='10%' align='center' >智付寶交易序號<br>商店訂單編號</th>";
        a_str += "<th  width='10%' align='center'>商店代號</th>";
        a_str += "<th  width='10%' align='center'>請款倒數日</th>";
        a_str += "<th  width='10%' align='center'>信用卡號<br>授權碼</th>";
        a_str += "<th width='10%' align='center'>授權金額<br>實際請款金額</th>";
        a_str += "<th width='10%' align='center'>3D<br>交易</th>";
        a_str += "<th width='10%' align='center'>回應碼<br>回應信息</th>";
        a_str += "<th width='10%' align='center'>款項<br>保管銀行</th>";
        a_str += "<th width='10%' align='center'>交易IP</th>";
        a_str += "</tr>";
        a_str += "</thead>";
        a_str += "<tbody style='font-size:13px'>";
        a_str += "<tr >";
        a_str += "<td  style=' vertical-align:middle;'  >" + trans_no + "<br>" + mer_oder_no + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + MerID + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + AuthDate + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + card_num + "<br>" + auth_code + "</td>";
        a_str += "<td style='vertical-align:middle'>" + amt + "<br>" + close_amt + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + eci + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + respond_code + "<br>" + respond_msg + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + trust_bank + "</td>";
        a_str += "<td  style=' vertical-align:middle;'>" + ip + "</td>";
        a_str += "</tr >";
        a_str += "<tr >";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>授權日期</b></td>";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>請款日期</b></td>";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>預計撥款日</b></td>";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='3'><b>實際撥款日</b></td>";
        a_str += "</tr >";
        a_str += "<tr >";
        a_str += "<td  style=' vertical-align:middle;' colspan='2'>" + create_time + "</td>";
        a_str += "<td  style=' vertical-align:middle;' colspan='2'>" + payedtime + "</td>";
        a_str += "<td  style=' vertical-align:middle;' colspan='2'>" + format_predict_fund_time + "</td>";
        a_str += "<td  style=' vertical-align:middle;' colspan='3'>" + format_system_fund_time + "</td>";
        a_str += "</tr >";
        a_str += "<tr >";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>商品說明</b></td>";
        a_str += "<td  style='text-align: left;' colspan='7'>" + prod_desc + "</td>";
        a_str += "</tr >";
        a_str += "<tr >";
        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;' colspan='2'><b>付款人信箱</b></td>";
        a_str += "<td  style='text-align: left;' colspan='7'>" + buy_mail + "</td>";
        a_str += "</tr >";
        a_str += "</tbody>";
        a_str += "</table>";
        $("#card_order_info").html(a_str);
        if (mem_data == "1") {
            b_str = "<div class='content_title' id='sell_top_title' style='margin-top: 10px;margin-bottom: 10px'>  付款資訊</div>";
            b_str += " <table class='table-bordered bank_table' width='100%' border='0' cellspacing='0' cellpadding='0'>";
            b_str += "<thead>";
            b_str += "<tr>";
            b_str += "<th   align='center'>付款人</th>";
            b_str += "<th align='center'>聯絡電話</th>";
            b_str += "<th   align='center'>付款E-Mail</th>";
            b_str += "<th  align='center'>付款日期</th>";
            b_str += "</tr>";
            b_str += "</thead>";
            b_str += "<tbody style='font-size:13px'>";
            b_str += "<tr >";
            b_str += "<td  style=' vertical-align:middle;'>" + payer_name + "</td>";
            b_str += "<td  style=' vertical-align:middle;'>" + payer_tel + "</td>";
            b_str += "<td  style=' vertical-align:middle;'>" + payer_mail + "</td>";
            b_str += "<td  style=' vertical-align:middle;'>" + payedtime + "</td>";
            b_str += "</tr >";
            b_str += "<tr >";
            b_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;'><b>收貨地址</b></td>";
            b_str += "<td  style='text-align: left;' colspan='3'>" + payer_addr + "</td>";
            b_str += "</tr >";
            b_str += "</tbody>";
            b_str += "</table>";
            $("#card_payer_info").html(b_str);
        }
        if (close_data != "") {
            thisObj.show_close_data_table(close_data);
        }
        return;

    }
    /*
     * 交易歷程記錄20140708
     * @param {type} formname
     * @returns {undefined}
     */
    thisObj.show_close_data_table = function(close_data) {
        c_str = " <table class='table-bordered bank_table' width='100%' border='0' cellspacing='0' cellpadding='0'>";
        c_str += "<thead>";
        c_str += "<tr>";
        c_str += "<td colspan='5' align='center'>交易歷程記錄</td>";
        c_str += "</tr>";
        c_str += "<tr>";
        c_str += "<td  align='center'>日期</td>";
        c_str += "<td  align='center'>執行狀態</td>";
        c_str += "<td  align='center'>金額</td>";
        c_str += "<td  align='center'>預計撥款日</td>";
        c_str += "<td  align='center'>執行IP</td>";
        c_str += "</tr>";
        c_str += "</thead>";
        c_str += "<tbody>";
        for (i = 0; i < close_data.length; i++) {
            var cc_date = close_data[i]['CC_Set_Time'];
            var cc_status = close_data[i]['CC_Close_Type'];
            var cc_amt = close_data[i]['CC_Amt'];
            var cc_per_time = close_data[i]['CC_Fund_Time'];
            var cc_ip = close_data[i]['CC_IP'];
            if (cc_status == "1") {
                cc_status = "請款";
            } else if (cc_status == "2") {
                cc_status = "退款";
            }

            if (cc_amt == null || cc_amt == "") {
                cc_amt = "-";
            } else {
                cc_amt = thisObj.display_amt(cc_amt);
            }
            if (cc_per_time == null || cc_per_time == "0000-00-00 00:00:00") {
                cc_per_time = "-";
            } else {
                cc_per_time = cc_per_time;
            }
            cc_ip = thisObj.display_null_data(cc_ip);

            c_str += "<tr>";
            c_str += "<td  align='center'>" + cc_date + "</td>";
            c_str += "<td  align='center'>" + cc_status + "</td>";
            c_str += "<td  align='center'>" + cc_amt + "</td>";
            c_str += "<td  align='center'>" + cc_per_time + "</td>";
            c_str += "<td  align='center'>" + cc_ip + "</td>";
            c_str += "</tr>";
        }
        c_str += "</tbody>";
        c_str += "</table>";
        $("#card_payer_info").html(c_str);
        return;
    }

    /*
     * 設定撥款帳戶
     */
    thisObj.set_bank_account = function() {

        encode_str = $("#set_bank").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/add_money_account_setting_by_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_bank_account, true)


    }
    thisObj.get_bank_account = function(msg) {

        var get_bank_account = jQuery.parseJSON(msg);
        if (get_bank_account['status'] == "SUCCESS") {
            alert("已設定!");
            location.reload(true);
        } else {

            alert("錯誤：" + get_bank_account['message'] + " (" + get_bank_account['status'] + ")");
        }
    }

    /*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     * 檢查密碼
     * @returns {undefined}
     */
    thisObj.nomal_check_pwd = function(type) {
        var encode_str;
        switch (type) {
            case 1:    //密碼長度(有帳號) 
                encode_str = "Account=" + $("#check_account").val() + "&Password=" + $("#password_check").val();
                break;
            case 2:  //密碼長度(無帳號)
                encode_str = "Password=" + $("#password_check").val();
                break;
            default:
                "不正常程序，請確認";
        }

        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "main/check_registration/pwd_strength";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_chkpwd_result);
    }

//顯示於密碼欄位旁
    thisObj.get_chkpwd_result = function(msg) {
        get_chkpwd_result = jQuery.parseJSON(msg);
        if (get_chkpwd_result['status'] == "SUCCESS") {
            str_html = "<span style=color:green;>" + get_chkpwd_result['message'] + "</span>"
            $("#chek_pwd").html(str_html);
        } else {
            str_html = "<span style=color:red;>" + get_chkpwd_result['message'] + "</span>"
            $("#chek_pwd").html(str_html);
        }
    }


    /*
     * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     * 檢查密碼與密碼確認是否相符、手機、mail格式
     * @param {type} type
     * @returns {undefined}
     */
    thisObj.chk_form = function(type) {
        switch (type) {
            case 1:

                if ($("#password_check").val() != "" && $("#confirm_password_check").val() != "") {
                    if ($("#password_check").val() == $("#confirm_password_check").val()) {

                        str_html = "<span style=color:green;display: inline-block>確認密碼與密碼相符</span>"
                        $("#chek_confirm_pwd").html(str_html);
                    } else if ($("#password_check").val() != $("#confirm_password_check").val()) {

                        str_html = "<span style=color:red;display: inline-block>密碼與密碼確認不相符</span>"
                        $("#chek_confirm_pwd").html(str_html);
                    }
                }

                break;
            case 2:
                re = /^[09]{2}[0-9]{8}$/;
                if (!re.test($("#register_mobile").val())) {

                    str_html = "<span style=color:red;display: inline-block>手機號碼格式不正確</span>"
                    $("#chek_mobile").html(str_html);
                } else {

                    str_html = "<span style=color:green;display: inline-block>格式正確</span>"
                    $("#chek_mobile").html(str_html);
                }
                break;
            case 3:
                re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
                if (!re.test($("#register_mail").val())) {

                    str_html = "<span style=color:red;display: inline-block>Email格式不正確</span>"
                    $("#chek_email").html(str_html);
                } else {

                    str_html = "<span style=color:green;display: inline-block>格式正確</span>"
                    $("#chek_email").html(str_html);
                }
                break;
            default:
                "不正常程序，請確認";
        }



    }
    /*
     * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     * 修改撥款帳戶狀態
     */
    thisObj.send_mem_bank_status = function(postdata, status, merid) {
        if (status == "2") {
            $("#tips_div").css("display", "inline-block");
        } else {
            $("#tips_div").css("display", "none");
        }

        $("#bank_status").val(status);
        $("#bank_postdata").val(postdata);
        $("#bank_pwd").val("");
        $('#myModal').modal('show')
        //$("#bank_mer_id").text(merid)

    }
    thisObj.modify_mem_bank_status = function() {
        encode_str = $("#change_bank_status_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/change_money_account_status_by_db";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_new_bank_status, true);
    }
    thisObj.get_new_bank_status = function(msg) {
        get_new_bank_status = jQuery.parseJSON(msg);
        if (get_new_bank_status['status'] == "SUCCESS") {
            alert("已完成變更!")
            location.reload(true);
        } else {
            alert("錯誤：" + get_new_bank_status['message'] + " (" + get_new_bank_status['status'] + ")");
        }
    }

    /*
     * 銀行帳戶選擇
     * @returns {undefined}
     */

//取得第二層資料
    thisObj.choose_bank = function(str) {
        var encode_str = "BankType=" + str;
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        var url = "shop/member_shop/get_bank_type_second_layer"
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_bank_list, true);
    }
    thisObj.get_bank_list = function(msg) {  //取得第二層

        get_bank_list = jQuery.parseJSON(msg);
        if (get_bank_list['status'] == "SUCCESS") {
            var html_str;
            html_str += "<option value=''>選擇金融機構</option>"
            for (i = 0; i < get_bank_list['result'].length; i++) {

                html_str += "<option value=" + get_bank_list['result'][i]['BL_Bank_Name'] + ">" + get_bank_list['result'][i]['BL_Bank_Code'] + get_bank_list['result'][i]['BL_Bank_Name'] + "</option>"
            }
            $("#bank_id").html(html_str)
        } else {
            alert("錯誤：" + get_bank_list['message'] + " (" + get_bank_list['status'] + ")");
        }
    }

//取得第三層
    thisObj.choose_branch_bank = function(str) {
        var encode_str = "BankID=" + str;
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/get_bank_type_third_layer"
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_branch_bank, true);
    }
    thisObj.get_branch_bank = function(msg) {  //取得第三層

        get_branch_bank = jQuery.parseJSON(msg);
        if (get_branch_bank['status'] == "SUCCESS") {
            var html_str;
            html_str += "<option value=''>選擇分行或支局</option>"
            for (i = 0; i < get_branch_bank['result'].length; i++) {

                html_str += "<option value=" + get_branch_bank['result'][i]['BL_Full_Bank_Name'] + "_" + get_branch_bank['result'][i]['BL_Full_Code'] + ">" + "(" + get_branch_bank['result'][i]['BL_SubBank_Code'] + ")" + get_branch_bank['result'][i]['BL_Full_Bank_Name'] + "</option>"
            }
            $("#bank_branches").html(html_str)
        } else {
            alert("錯誤：" + get_branch_bank['message'] + " (" + get_branch_bank['status'] + ")");
        }
    }
    /*
     * 快速收款
     */
    thisObj.express_payment = function() {
        encode_str = $("#express_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/transaction/get_fast_transaction_link"
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.express_pay_link, true);
    }
    thisObj.express_pay_link = function(msg) {
        express_pay_link = jQuery.parseJSON(msg);
        if (express_pay_link['status'] == "SUCCESS") {
            var link = "  <div class='nomal_text' style='margin-top:20px;margin-left:30px;vertical-align: middle;'>";
            link += "收款連結如下：";
            link += "</div> ";
            link += "<div class='nomal_text' id='express_link' style='margin-left:30px;display: inline-block'>";
            link += "<textarea rows='4' col='60' class='form-control' id='shop_intro'  style='display: inline-block;width:500px;resize : none;' >" + express_pay_link['result']['all_url'] + "</textarea>"

            //link += "<span class='ifbox' id='copy_link' style='display:inline-block'><a style=' cursor: pointer;margin-top:63px;'>複製連結</a></span>";
            link += "</div> ";
            link += "<div style='margin-top:10px;text-align:center'>";
            link += "<input type='hidden' id='mail_posturl' value='" + express_pay_link['result']['post_url'] + "'/>";
            if ($("input[name='PaymentUser']").val() != "") {
                link += "<input class='div_login_btn re_btn' type='button' style='display: inline-block;' onclick='sell_shop_info.send_exp_mail()' value='立即發送E-maill通知' />";
            } else {
                link += "<input class='div_login_btn re_btn' type='button' style='display: inline-block;' onclick='sell_shop_info.close_dialog()' value='關閉頁面' />";
            }

            link += "</div>";
            $("#express_link_area").html(link);
            $("#link_succ_modal").modal("show");
        } else {
            alert("錯誤：" + express_pay_link['message'] + " (" + express_pay_link['status'] + ")");
        }
    }
    /*
     * 關閉dialog
     * @returns {undefined}
     */
    thisObj.close_dialog = function() {
        $("#link_succ_modal").modal("hide");
        location.reload(true);
    }

    /*
     * 快速收款連結寄送mail
     * @returns {undefined}
     */
    thisObj.send_exp_mail = function() {
        encode_str = $("#mail_posturl").val();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/transaction/send_mail_process_express"
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.send_expmail_result, true);
    }
    thisObj.send_expmail_result = function(msg) {
        send_expmail_result = jQuery.parseJSON(msg);
        if (send_expmail_result['status'] == "SUCCESS") {
            $("#link_succ_modal").modal("hide");
            $('#msg_succ_modal').modal('show');
        } else {
            alert("錯誤：" + send_expmail_result['message'] + " (" + send_expmail_result['status'] + ")");
        }
    }
    /*
     * reset按鈕
     * @param {type} formname
     * @returns {undefined}
     */
    thisObj.reset_search = function(formname) {
        var form = "#" + formname
        $(form).each(function() {
            this.reset();
            $("#barocde_input").hide();
            $("#nomal_input").hide();
            $("#card_num").hide();
            $("#card_keyword_search").hide();
            $("#card_date_select").show();
            $("#date_select").show();
        })

        $("#table_title").hide();
        $("#table_area_trans").hide();
        $(".page_foot").hide();
    }
    /*
     * 邀請共管
     * @returns {undefined}
     */
    thisObj.visit_manager_shop = function() {
        encode_str = $("#joint_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/add_join_manager"
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_visit_result, true);
    }
    thisObj.get_visit_result = function(msg) {
        get_visit_result = jQuery.parseJSON(msg);
        if (get_visit_result['status'] == "SUCCESS") {
            alert(get_visit_result['message'])
            location.reload(true);
        } else {
            alert("錯誤：" + get_visit_result['message'] + " (" + get_visit_result['status'] + ")");
        }
    }
    /*
     * 變更共同管理狀態
     * step 1 :跳出dialog,塞入變更資料
     * step 2 :送出變更狀態ajax
     */
    thisObj.change_joint_status = function(post_data, status) {
        $("#msg_succ_modal").modal('show');
        $("#joint_post_data").val(post_data);
        $("#joint_will_status").val(status);
    }
    thisObj.send_change_joint_status = function() {
        encode_str = $("#change_join_form").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/change_join_manager_status"
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_change_joint_status, true);
    }
    thisObj.get_change_joint_status = function(msg) {
        get_change_joint_status = jQuery.parseJSON(msg);
        if (get_change_joint_status['status'] == "SUCCESS") {
            alert(get_change_joint_status['message'])
            location.reload(true);
        } else {
            alert("錯誤：" + get_change_joint_status['message'] + " (" + get_change_joint_status['status'] + ")");
        }
    }
    /*
     * 付款連結詳細資料
     */
//    thisObj.search_exp_detail = function(post_data) {
//
//        encode_str = "post_data=" + post_data;
//        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
//        url = "shop/member_shop/payment_express_detail";
//        send_url = thisObj.get_base_url() + url;
//        thisObj.AjaxWork(send_url, send_data, thisObj.get_exp_detail, true)
//
//
//    }
//    thisObj.get_exp_detail = function(msg) {
//        get_exp_detail = jQuery.parseJSON(msg);
//        if (get_exp_detail['status'] == "SUCCESS") {
//
//
//        } else {
//
//            alert("錯誤：" + get_exp_detail['message'] + " (" + get_exp_detail['status'] + ")");
//        }
//    }
//
//    thisObj.show_exp_detail = function() {
//
//        a_str = "";
//        a_str += " <table class='table-bordered bank_table' width='100%' border='0' cellspacing='0' cellpadding='0'>";
//        a_str += "<thead>";
//        a_str += "<tr>";
//        a_str += "<th width='10%' align='center'>店鋪代號</th>";
//        a_str += "<th width='10%' align='center'>連結有效期限</th>";
//        a_str += "<th width='8%' align='center'>指定付款人</th>";
//        a_str += "<th width='10%' align='center'>付款金額</th>";
//        a_str += "<th width='8%' align='center'>交易類型</th>";
//        a_str += "<th width='8%' align='center'>提供的支付方式</th>";
//        a_str += "</tr>";
//        a_str += "</thead>";
//        a_str += "<tbody style='font-size:13px'>";
//        a_str += "<tr >";
//        a_str += "<td  style=' vertical-align:middle;'>" + mer_trano + "</td>";
//        a_str += "<td  style=' vertical-align:middle;'>" + MerID + "</td>";
//        a_str += "<td  style=' vertical-align:middle;'>" + pay_type + "</td>";
//        a_str += "<td  style=' vertical-align:middle;'>" + f_trans_date + "<br>" + f_pay_time + "</td>";
//        a_str += "<td  style=' vertical-align:middle;'>" + bank_type + "</td>";
//        a_str += "<td style='vertical-align:middle'><b>" + pay_info + "</b></td>";
//        a_str += "</tr >";
//        a_str += "<tr >";
//        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;'><b>商品說明</b></td>";
//        a_str += "<td  style=' vertical-align:middle;' colspan='6'>" + 123 + "</td>";
//        a_str += "</tr >";
//        a_str += "<tr >";
//        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;'><b>收款連結</b></td>";
//        a_str += "<td  style=' vertical-align:middle;' colspan='6'>" + 123 + "</td>";
//        a_str += "</tr >";
//        a_str += "<tr >";
//        a_str += "<td  style=' vertical-align:middle;background-color: #F8F7F7;'><b>銷售單列表</b></td>";
//        a_str += "<td  style=' vertical-align:middle;' colspan='6'>" + 123 + "</td>";
//        a_str += "</tr >";
//        a_str += "</tbody>";
//        a_str += "</table>";
//        $("#order_info").html(a_str);
//        $('#exp_detail_table').modal('show')
//    }

    /*
     * 刷卡ajajx
     */
    thisObj.send_payment_c_data = function() {
        re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if ($("#pay_mail").val() == "") {
            alert("付款通知信箱為必填欄位");
        } else if (!re.test($("#pay_mail").val())) {
            alert("您的信箱格式不正確");
        } else {
            encode_str = $("#card_form").serialize() + "&post_data_=" + $("#post_data").val();
            send_data = thisObj.web_base_encode(encode_str);
            url = "API/CreditCard/Auth";
            //Use POST
            $("#re_foot").append("<div id='sb_div' style='display:none;'></div>");
            $("#sb_div").append("<form id='sb_form' action='" + thisObj.get_base_url() + url + "' method='post' autocomplete='off'></form> ");
            $("<input type='hidden' id='postdata' name='send_data_'/><br><input type='submit' value='Send' />").appendTo($("#sb_form"));
            $("#postdata").val(send_data);
            $('#sb_form').trigger('submit');
        }


    }
    /*
     * 申請信用卡啟用
     */
    thisObj.apply_use_card = function(post_data) {

        encode_str = "post_data=" + post_data;
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/open_credit_card_config";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_apply_card_result, true)


    }
    thisObj.get_apply_card_result = function(msg) {
        get_apply_card_result = jQuery.parseJSON(msg);
        if (get_apply_card_result['status'] == "SUCCESS") {
            $('#apply_use_card_modal').modal("show");
        } else {

            alert("錯誤：" + get_apply_card_result['message'] + " (" + get_apply_card_result['status'] + ")");
            location.reload(true);
        }
    }

    /*
     * ajax查詢商店可用的付款方式
     */
    thisObj.get_payment_type_by_shop = function(value) {
        encode_str = "MerID=" + value;
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/member_shop/get_mer_config";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.get_payment_type_result, true)

    }
    thisObj.get_payment_type_result = function(msg) {
        get_payment_type_result = jQuery.parseJSON(msg);
        if (get_payment_type_result['status'] == "SUCCESS") {
            var able_barcode = get_payment_type_result['result']['MP_BARCODE'];
            var able_card = get_payment_type_result['result']['MP_CREDITCARD'];
            var able_cvs = get_payment_type_result['result']['MP_CVS'];
            var able_vacc = get_payment_type_result['result']['MP_VACC'];
            var able_webatm = get_payment_type_result['result']['MP_WEBATM'];
            if (able_barcode == "1") {
                $("#pay_barcode").css("display", "inline-block");
                $(".pay_barcode").prop("checked", true);
            } else {
                $("#pay_barcode").css("display", "none");
                $(".pay_barcode").prop("checked", false);
            }

            if (able_card == "1") {
                $("#pay_card").css("display", "inline-block");
                $(".pay_card").prop("checked", true);
            } else {
                $("#pay_card").css("display", "none");
                $(".pay_card").prop("checked", false);
            }

            if (able_cvs == "1") {
                $("#pay_cvs").css("display", "inline-block");
                $(".pay_cvs").prop("checked", true);
            } else {
                $("#pay_cvs").css("display", "none");
                $(".pay_cvs").prop("checked", false);
            }

            if (able_vacc == "1") {
                $("#pay_vacc").css("display", "inline-block");
                $(".pay_vacc").prop("checked", true);
            } else {
                $("#pay_vacc").css("display", "none");
                $(".pay_vacc").prop("checked", false);
            }

            if (able_webatm == "1") {
                $("#pay_webatm").css("display", "inline-block");
                $(".pay_webatm").prop("checked", true);
            } else {
                $("#pay_webatm").css("display", "none");
                $(".pay_webatm").prop("checked", false);
            }

        } else {

            alert("錯誤：" + get_payment_type_result['message'] + " (" + get_payment_type_result['status'] + ")");
        }
    }

    /*
     * 管理快速連結的狀態修改
     * 
     */

    thisObj.change_express_link_status = function(postdata, status, auth) {
        if (auth == "1") {
            encode_str = "post_data_=" + postdata + "&LinkStatus=" + status;
            send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
            url = "shop/member_shop/change_epg_status";
            send_url = thisObj.get_base_url() + url;
            thisObj.AjaxWork(send_url, send_data, thisObj.get_express_link_status, true)
        } else if (auth == "2") {
            alert("很抱歉！您非進階管理者，因此無法進行此操作")
        }



    }
    thisObj.get_express_link_status = function(msg) {
        get_express_link_status = jQuery.parseJSON(msg);
        if (get_express_link_status['status'] == "SUCCESS") {
            alert("修改成功");
            location.reload(true);
        } else {

            alert("錯誤：" + get_express_link_status['message'] + " (" + get_express_link_status['status'] + ")");
            //location.reload(true);

        }
    }



    /*
     * --------------------------------------------------------------------
     * jQuery-Plugin - $.download - allows for simple get/post requests for files
     * by Scott Jehl, scott@filamentgroup.com
     * http://www.filamentgroup.com
     * reference article: http://www.filamentgroup.com/lab/jquery_plugin_for_requesting_ajax_like_file_downloads/
     * Copyright (c) 2008 Filament Group, Inc
     * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
     * --------------------------------------------------------------------
     */
    thisObj.download = function(url, data, method) {
        //url and data options required
        if (url && data) {
            //data can be string of parameters or array/object
            data = typeof data == 'string' ? data : jQuery.param(data);
            //split params into form inputs
            var inputs = '';
            jQuery.each(data.split('&'), function() {
                var pair = this.split('=');
                inputs += '<input type="hidden" name="' + pair[0] + '" value="' + pair[1] + '" />';
            });
            //send request
            jQuery('<form action="' + url + '" method="' + (method || 'post') + '">' + inputs + '</form>')
                    .appendTo('body').submit().remove();
        }
        ;
    };
    /*
     * 下載呼叫download_function
     * url 要下載的網址
     * data 要傳送的網址 (呼叫click_download的時候就要把資料組好)
     */
    thisObj.click_download = function(url, data) {
        encode = data;
        send_data = "send_data_=" + thisObj.web_base_encode(encode);
        send_url = thisObj.get_base_url() + url;
        thisObj.download(send_url, send_data, 'POST');
    }
    /*
     * 刪除商店logo
     * Ellen 20140606
     */
    thisObj.del_mer_img_logo = function() {

        encode_str = $("#upload_logo_div").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        url = "shop/shop_logo/delete";
        send_url = thisObj.get_base_url() + url;
        thisObj.AjaxWork(send_url, send_data, thisObj.del_img_logo_result, true);
    }
    thisObj.del_img_logo_result = function(msg) {
        del_img_logo_result = jQuery.parseJSON(msg);
        if (del_img_logo_result['status'] == "SUCCESS") {
            alert("刪除成功");
            location.reload(true);
        } else {

            alert("錯誤：" + del_img_logo_result['message'] + " (" + del_img_logo_result['status'] + ")");
            //location.reload(true);

        }
    }

}
