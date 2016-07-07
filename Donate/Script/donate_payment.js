/*
 * donate_payment
 * 
 */
donate_payment.prototype = new general_function;

function donate_payment() {

    thisObj = this;
    
    thisObj.payment = function() {      //捐款資料檢查
		$("#sendButtom").hide();
		$("#Process").html("捐款資料處理中，請稍候！");
		$("#donateProcess").modal("show"); 	
        encode_str = $("#payment").serialize();
        send_data = "send_data_=" + thisObj.web_base_encode(encode_str);
        send_url = "https://donate.pay2go.com/admin/payment_chk";
        thisObj.AjaxWork(send_url, send_data, thisObj.payment_result, true);
    };

    thisObj.payment_result = function(msg) {
        result = jQuery.parseJSON(msg);
        if (result['payment'] == "CREDITCARD"){
            var url = "https://web.pay2go.com/API/CreditCard";
            var send_id = result['post_id'];
            var send_post = result['post_data'];
            $("#re_foot").append("<div id='sb_div' style='display:none;'></div>");
            $("#sb_div").append("<form id='rsb_form' action='" +  url + "' method='post' data-ajax='false'></form> ");
            $("<input type='hidden' id='send_id' name='MerchantID_'/>").appendTo($("#rsb_form"));  
            $("<input type='hidden' id='send_pos' name='Pos_' value='donate'/>").appendTo($("#rsb_form"));
            $("<input type='hidden' id='send_data' name='PostData_'/><br><input type='submit' value='Send' />").appendTo($("#rsb_form"));
            $("#send_id").val(send_id);
            $("#send_data").val(send_post);
            $('#rsb_form').trigger('submit');     
        }
        if (result['payment'] == "WEBATM"){
            var url = "https://web.pay2go.com/API/gateway/WEBATM";
            var send_id = result['post_id'];
            var send_post = result['post_data'];
            $("#re_foot").append("<div id='sb_div' style='display:none;'></div>");
            $("#sb_div").append("<form id='rsb_form' action='" +  url + "' method='post' data-ajax='false'></form> ");
            $("<input type='hidden' id='send_id' name='MerchantID_'/>").appendTo($("#rsb_form"));            
            $("<input type='hidden' id='send_data' name='PostData_'/><br><input type='submit' value='Send' />").appendTo($("#rsb_form"));
            $("#send_id").val(send_id);
            $("#send_data").val(send_post);
            $('#rsb_form').trigger('submit'); 
        }
        if (result['payment'] == "VACC"){
            var url = "https://donate.pay2go.com/payment/VACC/"+result['OrderNo'];
            var send_post = result['OrderNo'];
            $("#re_foot").append("<div id='sb_div' style='display:none;'></div>");
            $("#sb_div").append("<form id='rsb_form' action='" +  url + "' method='post' data-ajax='false'></form> ");
            $("<input type='hidden' id='send_data' name='OrderNo_'/><br><input type='submit' value='Send' />").appendTo($("#rsb_form"));
            $("#send_data").val(send_post);
            $('#rsb_form').trigger('submit');            
        }
        if (result['payment'] == "CVS"){
            var url = "https://donate.pay2go.com/payment/CVS/"+result['OrderNo'];
            var send_post = result['OrderNo'];
            $("#re_foot").append("<div id='sb_div' style='display:none;'></div>");
            $("#sb_div").append("<form id='rsb_form' action='" +  url + "' method='post' data-ajax='false'></form> ");
            $("<input type='hidden' id='send_data' name='OrderNo_'/><br><input type='submit' value='Send' />").appendTo($("#rsb_form"));
            $("#send_data").val(send_post);
            $('#rsb_form').trigger('submit');  
        }
        if (result['payment'] == "BARCODE"){
            var url = "https://donate.pay2go.com/payment/BARCODE";
            var send_post = result['OrderNo'];
            $("#re_foot").append("<div id='sb_div' style='display:none;'></div>");
            $("#sb_div").append("<form id='rsb_form' action='" +  url + "' method='post'  data-ajax='false'></form> ");
            $("<input type='hidden' id='send_data' name='OrderNo_'/><br><input type='submit' value='Send' />").appendTo($("#rsb_form"));
            $("#send_data").val(send_post);
            $('#rsb_form').trigger('submit');            
        }   
		
		if (result['status'] === "CheckValueError") {
            alertify.error("提示：" + result['message'] );
		    setTimeout(function(){
				location.reload();
		    }, 2000);		
		}else if (result['status'] === "Error") {
			$("#donateProcess").modal("hide"); 
			$("#sendButtom").show();
            alertify.error("提示：" + result['message'] );
            $.mobile.loading( "hide" );
		}
    };
    
    //表單資料清除
    thisObj.reset_form = function() { 
        var form = "#payment";
        $(form).each(function() {
            //this.reset();
            
        });
    };
    
}

