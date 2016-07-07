<%@ Import Namespace="Donate.Code" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Donate.index" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <!--關鍵字meta-->
    <meta name="keywords" content="亞匯,Go2Pay,第三方支付平台" />
    <meta property="og:title" content="捐款系統">
    <meta property="og:type" content="website" />
    <%--<meta property="og:image" content="https://donate.pay2go.com/images/member_img/洪秀柱_637.png" />--%>
    <%--<meta property="og:url" content="https://donate.pay2go.com/%E6%B4%AA%E7%A7%80%E6%9F%B1/小額捐款">--%>
    <meta property="og:description" content="您可以透過信用卡/WebATM/ATM轉帳/超商代碼/超商條碼...來給我們支持，也歡迎多多分享我們的訊息給您的朋友們，謝謝！">
    <meta name="description" content="您可以透過信用卡/WebATM/ATM轉帳/超商代碼/超商條碼...來給我們支持，也歡迎多多分享我們的訊息給您的朋友們，謝謝！">
    <title>捐款系統-亞匯Go2Pay</title>

    <link href="Style/reset.css" rel="stylesheet" />
    <link href="Style/pay2go.css" rel="stylesheet" />
    <link href="Style/pay_page.css" rel="stylesheet" />
    <link href="Style/menu.css" rel="stylesheet" />
    <link href="Style/login_btn.css" rel="stylesheet" />
    <link href="Style/intro_button.css" rel="stylesheet" />
    <link href="Style/bootstrap.css" rel="stylesheet" />
    <link href="Style/docs.css" rel="stylesheet" />
    <link href="Style/non-responsive.css" rel="stylesheet" />
    <link href="Style/metro-bootstrap.css" rel="stylesheet" />
    <link href="Style/jquery-ui-1.9.2.custom.css" rel="stylesheet" />
    <link href="Style/PrintArea.css" rel="stylesheet" type="text/css" />
    <link href="Style/sign_login.css" rel="stylesheet" type="text/css" />
    <link rel="icon" href="icon/donate.png" ></link>


    <!--     HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries
        [if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif] -->
  <%--  <script src="Script/jquery-1.10.1.js"></script>--%>
    <script src="Scripts/jquery-2.1.4.min.js"></script>
    <script src="Script/jquery.widget.min.js"></script>
    <script src="Script/jquery-ui-1.9.2.custom.js"></script>
    <script src="Script/bootstrap.min.js"></script>
    <script src="Script/metro.min.js"></script>
    <script src="Script/jquery.twzipcode.js"></script>
    <script src="Script/jquery.placeholder.js"></script>
    <script src="Script/general_function.js"></script>
    <script src="Script/register_member.js"></script>
    <script src="Script/alertify.min.js"></script>
    <!-- css3-mediaqueries.js for IE less than 9 -->
    <!--[if lt IE 9]>
     <script>
     $(document).ready(function() {
    setTimeout(function() {
                      $("#ie_warning").slideDown('slow');
                 }, 500);

         });
     </script>
     <![endif]-->


</head>
<script language="JavaScript">
    var register_member_info = new register_member();
    register_member_info.set_base_url("");
</script>
<style type="text/css">
    input, textarea {
        color: #000;
    }

    .placeholder {
        color: #aaa;
    }
</style>
<script>
    $(document).ready(function() {
        //$('input, textarea').placeholder();
        //$(document).on("click", ".iebye_close", function() {
        //    $(".iebye").hide();
        //})


        /////////////////////////////////////////



    });
</script>
<body>
    <div class="iebye alert alert-warning fade in" style="display:none;margin-bottom: 0px" id="ie_warning">
        <div class='container nomal_text'>
            <button type="button" class="iebye_close close" data-dismiss="alert" aria-hidden="true">&times;</button>
            您的IE瀏覽器版本過舊，為提升您的使用者體驗，建議您可升級或更換瀏覽器。瀏覽器下載：
            <a href="http://windows.microsoft.com/zh-tw/internet-explorer/download-ie" target="_blank">IE11</a> /
            <a href="https://www.google.com/intl/zh-TW/chrome/browser/?hl=zh-TW&brand=CHMI" target="_blank">Chrome</a> /
            <a href="http://mozilla.com.tw/firefox/download/" target="_blank">FireFox</a>
        </div>
    </div>
    <div class="head_top" id="index_top" style='margin-top:0px'>
        <div class="container">
            <div class="logo fl" style='margin-top:15px'><a href="https://www.pay2go.com/" target="_blank"><img src="https://web.pay2go.com/images/logo/logo_0112_200x35.png" style="margin-top:-10px;margin-left:100px;width: 160px; padding-top:3px;"></a><span style="margin-top:20px;left:170px; top:10px;font-family: 微軟正黑體;font-size: 18px;"> | 捐款系統 </span></div>

        </div>

    </div>






    <!--        <meta name="title" content="智富寶寶-捐款系統管理專區" >
            <meta name="description" content="•免費申請、快速啟用，並提供客製化工具、上傳banner、捐款說明，成為您專屬的捐款網頁。">
            <link rel="image_src" type=image/jpeg" herf="https://www.pay2go.com/images/logo/footlog.png">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>捐款系統-智付寶Pay2go</title>-->
    <script src="Script/sell_shop.js"></script>
    <script src="Script/donate_payment.js"></script>
    <script type="text/javascript" src="Script/jquery.twzipcode.js"></script>
    <link href="Style/alertify.core.css" rel="stylesheet">
    <link href="Style/alertify.default.css" rel="stylesheet">
    <script src="Script/alertify.min.js"></script>
    <link rel="stylesheet" href="Style/card.css">



    <script language="JavaScript">
    var payment = new donate_payment();
    payment.set_base_url("https://donate.pay2go.com/%E6%B4%AA%E7%A7%80%E6%9F%B1/小額捐款");
    </script>
    <script>
    $(document).ready(
            function () {
///////////////////////////////////////////////////////////////////////////////////////////////                
                $('input[name=Payment_Amt_1]').attr('disabled', true); //把textbox輸入金額disabled
                //選到可選金額時，自訂金額radio button及textbox取消，傳入金額給變數
                $('input[name=Payment_Amt]').click(function () {
                    Amount = $('input[name=Payment_Amt]:checked').val();
                    //alertify.success(Amount);
                    $('input[name=radio_pay1]').each(function () {
                        this.checked = false;
                    });
                    $('input[name=Payment_Amt_1]').val("").attr('disabled', true);
                });
                //選到自訂金額時， 可選金額取消，focus移動
                $('input[name=radio_pay1]').click(function () {
                    $('input[name=Payment_Amt]').each(function () {
                        this.checked = false;
                    });//關閉可選金額
                    $('input[name=Payment_Amt_1]').attr('disabled', false).focus();//恢復textbox並焦點
                    
                    //$('input[name=Payment_Amt_1]').focus();
                });
                //其他金額focus時，特定金額取消，radio button 選取自訂金額
                $('input[name=Payment_Amt_1]').click(function () {
                    $('input[name=Payment_Amt]').each(function () {
                        this.checked = false;
                    });
                    $('input[name=radio_pay1]').each(function () {
                        this.checked = true;
                    });
                });
                // 其他金額失去焦點時，傳入金額給變數
                $('input[name=Payment_Amt_1]').blur(function () {
                    if ($(this).val() != "") {
                        Amount = $('input[name=Payment_Amt_1]').val();
                    }
                });


                //傳入捐款方式給變數   CREDITCARD WEBATM VACC CVS BARCODE
                $('input[name=PaymentType]').click(function () {
                    Sponsor = $('input[name=PaymentType]:checked').val();
                    //alertify.success(Sponsor);

                });
//////////////////////////////////////////////////////////////////////////////////////////////////////







				$("#twzipcode").twzipcode({
                    'css': ['county', 'district', 'zipcode']
                });
                $("#twzipcode-1").twzipcode({
                    countyName: 'county-1',
                    districtName: 'district-1',
                    zipcodeName: 'zipcode-1',
                    'css': ['county-1', 'district-1', 'zipcode-1']
                });
                $("#twzipcode-2").twzipcode({
                    countyName: 'county-2',
                    districtName: 'district-2',
                    zipcodeName: 'zipcode-2',
                    'css': ['county-2', 'district-2', 'zipcode-2']
                });
                $(".county").change(show_addr);
                $(".district").change(show_addr);
                $(".county-1").change(show_addr_1);
                $(".district-1").change(show_addr_1);
                $(".county-2").change(show_addr_2);
                $(".district-2").change(show_addr_2);
                $("#same_address").change(copy_addr);
                $("#same_address1").change(copy_addr1);
                $("#same_address2").change(copy_addr2);
                $("#same_email").change(copy_email);
				$('#Payment_MAIL1').change(copy_email1);
				$('#Payment_MAIL').change(copy_email2);
				$("input[name=Payment_Amt]").on("click",function () {
					$("#radio_pay1").each(function(){
						$("#radio_pay1").prop("checked",false);
						$("#input_amt").val('');
					});
				});
				$("#radio_pay1").on("click",function () {
					$("#radio_pay").each(function(){
						$("input[name=Payment_Amt]").prop("checked",false);
				   });
				});
				$("#input_amt").on("click",function () {
					$("#radio_pay1").prop("checked",true);
					$("#radio_pay").each(function(){
						$("input[name=Payment_Amt]").prop("checked",false);
				   });
				});
				$("#nickNameSelectArea").on("change",function () {
					$("#addr").val($(this).val());
				});

				$("input[name=same_address1]").change(function () {
				    if ($(this).prop('checked') == true) {
				        if ($('input[name=Payment_house_address]').val() == '') {
				            alertify.error('請填入戶籍地址');
				            $(this).attr('checked', false);
				        }
				        else {
				            $('input[name=Payment_mail_address]').val($('input[name=Payment_house_address]').val());
				            $('.county-2')[0].selectedIndex = 0;

				            $('.district-2').find('option')
                                            .remove()
                                            .end()
                                            .append('<option value="鄉鎮市區">鄉鎮市區</option>')
				        }
				    }
				    else {
				        $('input[name=Payment_mail_address]').val("");
				    }
				});



				$('input[name=same_address]').change(function () {
				    switch ($('input:radio:checked[name="same_address"]').val()) {
				        case '同戶籍':
				            if ($('input[name=Payment_house_address]').val() == '') {
				                $('input[name=Payment_house_address]').focus();
				                alertify.error('請填入戶籍地址');
				            }
				            else {
                                // select 的值是否也加入
				                $('input[name=Payment_home_address]').val($('input[name=Payment_house_address]').val());
				            }
				            break;
				        case '同通訊':
				            if ($('input[name=Payment_house_address]').val() == '') {
				                $('input[name=Payment_home_address]').focus();
				                alertify.error('請填入通訊地址');
				            }
				            else {
				                $('input[name=Payment_home_address]').val($('input[name=Payment_mail_address]').val());
				            }
				            break;
				    }
				});

            }
    );
    function show_addr() {
        $("#addr").val($('.zipcode').val() + $(".county").find("option:selected").val() + $(".district").find("option:selected").val());
    }
    ;
    function show_addr_1() {
        $("#addr-1").val($('.zipcode-1').val() + $(".county-1").find("option:selected").val() + $(".district-1").find("option:selected").val());
    }
    function show_addr_2() {
        $("#addr-2").val($('.zipcode-2').val() + $(".county-2").find("option:selected").val() + $(".district-2").find("option:selected").val());
    }
    function copy_addr() {
        var x = document.getElementById("same_address").checked;
        if (x === true) {
            $("#addr-1").val($('#addr').val());
            var tmp1=$(".county").get(0).selectedIndex;
              $(".county-1").hide;
              $(".district-1").options.text="Melon";
        }
        if (x === false) {
            $("#addr-1").val($('.zipcode-1').val() + $(".county-1").find("option:selected").val() + $(".district-1").find("option:selected").val());
        }
    }
    function copy_addr1() {
        var x = document.getElementById("same_address1").checked;
        if (x === true) {
            $("#addr-2").val($('#addr').val());
        }
        if (x === false) {
            $("#addr-2").val($('.zipcode-2').val() + $(".county-2").find("option:selected").val() + $(".district-2").find("option:selected").val());
        }
    }
    function copy_addr2() {
        var x = document.getElementById("same_address2").checked;
        if (x === true) {
            $("#addr-1").val($('#addr-2').val());
        }
        if (x === false) {
            $("#addr-1").val($('.zipcode-1').val() + $(".county-1").find("option:selected").val() + $(".district-1").find("option:selected").val());
        }
    }
    function copy_email() {
        var x = document.getElementById("same_email").checked;
        if (x === true) {
            $("#Payment_MAIL").val($('#Card_MAIL').val());
        }
    }
    function copy_email1() {
            $("#Payment_MAIL").val($('#Payment_MAIL1').val());
    }
    function copy_email2() {
            $("#Payment_MAIL1").val($('#Payment_MAIL').val());
    }
    function receipt_on() {
        var receipt = document.getElementById("home_address");
        if (receipt.style.display === 'none') {
            receipt.style.display = 'inline-block';
        }
    }
    function receipt_off() {
        var receipt = document.getElementById("home_address");
        if (receipt.style.display === 'inline-block') {
            receipt.style.display = 'none';
            document.getElementsByName('Payment_home_address')[0].value = '';
        }
    }

///////////////////////////////////////////////////////setp1 
    function nickName_on(obj, id) {
        var nickname_on = document.getElementById(id);
        if (nickname_on.style.display === 'inline-block') {
            nickname_on.style.display = 'none';
            document.getElementById("nickName_pay").style.display = 'inline-block';
            document.getElementById("nickname").value = "YES";
//            document.getElementById("nicklimit").style.display = 'inline-block';
            $("#nicklimit").css("display","inline-block");
			$("#btn_nickname").addClass("btn-success");
			$("#btn_nickname_off").removeClass("btn-success");
			
        }
    }
    function nickName_off(obj, id) {
        var nickName_off = document.getElementById(id);
        if (nickName_off.style.display === 'none') {
            nickName_off.style.display = 'inline-block';
            document.getElementById("nickName_pay").style.display = 'none';
            document.getElementById("nickname").value = "NO";
//            document.getElementById("nicklimit").style.display = 'none';
            $("#nicklimit").css("display","none");
			$("#btn_nickname").removeClass("btn-success");
			$("#btn_nickname_off").addClass("btn-success");
			
        }
    }
/////////////////////////////////////////////////////step1
    function card_info() {
        document.getElementById("card_info").style.display = 'inline-block';
		$("#same_emailBtn").css("display","inline-block");
    }
    function card_hide() {
        document.getElementById("card_info").style.display = 'none';
		$("#same_emailBtn").css("display","none");
    }
    function next(obj, next) {
        var x = document.getElementById(next);
        var o = document.getElementById(obj);
        if (obj.value.length === obj.maxLength) {
            x.focus();
        }
    }


    </script>
    <style type="text/css">
        table_r {
            border-collapse: separate !important;
            border-spacing: 0;
        }

        .county, .district, .zipcode {
            font-size: 14px;
            margin-right: 1px;
            margin-bottom: 1px;
            width: 85px;
            color: #555555;
            height: 30px;
            background-color: #ffffff;
            border: 1px solid #cccccc;
            border-radius: 2px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
            transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        }

        .zipcode {
            display: none;
        }

        .county-1, .district-1, .zipcode-1 {
            font-size: 14px;
            margin-right: 1px;
            margin-bottom: 1px;
            width: 85px;
            color: #555555;
            height: 30px;
            background-color: #ffffff;
            border: 1px solid #cccccc;
            border-radius: 2px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
            transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        }

        .zipcode-1 {
            display: none;
        }

        .county-2, .district-2, .zipcode-2 {
            font-size: 14px;
            margin-right: 1px;
            margin-bottom: 1px;
            width: 85px;
            color: #555555;
            height: 30px;
            background-color: #ffffff;
            border: 1px solid #cccccc;
            border-radius: 2px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
            transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        }

        .zipcode-2 {
            display: none;
        }

        .Post_Code {
            width: 50px;
            cursor: not-allowed;
        }

        th {
            font-weight: normal;
        }

        label {
            font-weight: normal;
        }

        .bank_table {
            font-size: 17px;
            font-weight: normal;
        }
    </style>


    </head>
    <body>
        <form runat="server">
        <script src="Script/card.js"></script>
        <div class="container">
            <div class="col-xs-6">
                <!--<img id="logo" src="https://donate.pay2go.com/images/logo/pay2go_payment_logo.png" />-->
            </div>
        </div>
        <div class="container">
            <div style=" text-align: center;margin-bottom:10px">
                <img src="https://donate.pay2go.com/images/line/line_hr.png" style="width:100%" />
            </div>
        </div>
        <div class="container co-xs-12" style="margin: 0 auto">
            <div style="width:80%;margin-left: 100px;margin-top: 10px">
                <!--頁面標題-->
                <%--<img style="margin-bottom:20px;" id="image1" runat="server" src="image/蔡英文.jpg" />--%>
                <%--<div class="content_title" style="margin-bottom:20px;">募款單位: 洪秀柱　( 洪秀柱政治獻金專戶 )</div>--%>
                <img style="margin-bottom:20px;" id="image1" runat="server" src="" />
                <div class="content_title" style="margin-bottom:20px;"><%Response.Write(CandidateSite.Term1); %></div>
                <div class="content_title">請選擇捐款方式　</div>
                <div class="bottom_color" style="width:100%;margin-top: 20px">
                    <div class="bank_text">
                        <ul class="disc">
                            <!--說明內容-->
                        </ul>
                    </div>
                </div>
                <!--內容開始-->

                <form id="payment" action="https://donate.pay2go.com/admin/payment/114479936_2015071390858" method="post" autocomplete="off">
                    <div class="bottom_color" style="width:100%;font-family: 微軟正黑體;font-size: 16px;margin-top: 20px;margin-bottom:5px">
                        <div style="min-height: 400px">
                            <input type="hidden" class="form-control input-sm" name="CheckValue" value="2992cc33a806d6a79fe993f2ffab97e5638d6daa9c7b85ce0cb09dc6e4c32e69b3f583aca0c1823aae100a6239e4cf62948b12ca1e8d87033486cab606f93d3159c30a57b606f71f483172b3df34040d4ac66f79af7a007bce33a406c089cdc2310cff2957a83d6d13e339bfbeea1d0584aa13cc9873ffe21b1f65bc87b2d823407bf8344fa665890f78c9fe417e116e677ef5ca32d91f09f2c3f4106eccd38891af02f22f0402e095965204d62cc7e06b4bcec2a987095f96637699f6c1d62ecea49b2763dc3e53820c7faa9c188496a3df7da4ecaa1cd590e5414829ebb0570d306d9250d15c4523fc5760936ead08134656a88a51db9730b32ab81bf7b97723099967a8d2e38d5b36bf0acb730dd6998191a0c1e27467228bbdb92d59128271961adb382c8d56ea3244de72bef003e26c617c21ab36a1b2ed71a518eee1515da006450fc48cf28908d357235b9f670480e39a9a5f16de70cef416761e9e855044029431d805dc58accdaec731ae18724eb0a3fc91c1fc172684216dc3b86987c93f38122575ada070fa2f079f19fcf7c5b8a52dfb16f415beb71215b4c5da6cfcf994dcda1babaca85c8ded6bccd1ab12084b9c013832e3dca105a7d1cde7b4a7b61fe0190cdad46af57e3873b09ae44d77cc60b0d78f5aec75a55fa3175aadd1c971cc8806c397591ba6bf479bc79184292c7420347a8b76373317018f32f0077adc2ce27e854be25390ae3af86f4fe9aac641f1a92f9e9b40fa7b8a0ad545272555a905e39222e2481aa11f4670ccc550799dad4594fa228995d8715e475c0839854341bba581020388051b84a0e1cabbe9c5d507793a0d35ed45eff3d5619807fead03dd924a01319f3d0ccd0c64f65613d5e3459f986406f9d1f3b192141365a785e63b5c5071b383be521e59c43b987c57e2f51bd5fdac71e077863a6dee6ebdd0c0051f56a05966401cfb964bff814a2060140e82d85204363f9a77c84eefad133940b44871d66dd8eba745e2172d86c4b140394361152b435c35975d2e9be22253f9333485aa88bad4e2192adaf657eda3d4a6790b338d6edc7ac137fb09e629dbf79d0a109510d5aed71eb2b35d7a305950e8b13dfa57743a8e81" />
                            
                            
                            <input type="hidden" id="nickname" class="form-control input-sm" name="nickname" value="NO" />
                            
                            <button type="button" id="btn_nickname_off" class="btn btn-success btn" style="display: inline-block;" onclick='nickName_off(this, "person_info")'>具名捐款</button>
                            <button type="button" id="btn_nickname" class="btn" onclick='nickName_on(this, "person_info")'>匿名捐款</button>
                            <p>
                                <table class="table-bordered bank_table" width="100%" border="0" cellspacing="0" cellpadding="0">

                                    <tr>
                                        <th>
                                            <div id="payment" style="display: inline-block;">
                                                <span style="font-size:20px;color:#C00;display: inline-block;margin-left:10px;margin-bottom:15px;margin-top:15px;"></span>
                                                請填入捐款金額：
                                                <label><input type="radio" id="radio_pay" name="Payment_Amt" style="margin-bottom:15px;margin-top:15px;" value="100" /> 100元</span></label>
                                                <label><input type="radio" id="radio_pay" name="Payment_Amt" style="margin-bottom:15px;margin-top:15px;" value="500" /> 500元</span></label>
                                                <label><input type="radio" id="radio_pay" name="Payment_Amt" style="margin-bottom:15px;margin-top:15px;" value="1000" /> 1,000元</span></label>
                                                <label><input type="radio" id="radio_pay" name="Payment_Amt" style="margin-bottom:15px;margin-top:15px;" value="5000" /> 5,000元</span></label>
                                                <label><input type="radio" id="radio_pay" name="Payment_Amt" style="margin-bottom:15px;margin-top:15px;" value="10000" /> 10,000元</span></label>
                                                <label>
                                                    <input type="radio" id="radio_pay1" name="radio_pay1" style="margin-bottom:15px;margin-top:15px;">其它金額:
                                                    <input id="input_amt" name="Payment_Amt_1" type="text" class="form-control input-sm" title="僅可使用數字" pattern="[0-9]{*}" style="font-size:18px;margin-left:10px;margin-bottom:0px;margin-top:0px;width:100px;display: inline-block" value=""> 元
                                                </label>
                                                <br>　(幣別：新台幣 NTD)<span style="color:#C00;margin-left:20px;"></span>

                                                <span class="smalltxt big" style="margin-bottom:0px;margin-top:0px;display: inline-block; color: #F60;font-size: 16px;">*捐款區間為：100 至 100,000 元。</span>
                                                <input type="hidden" class="form-control input-sm" name="min_amt" value="100" />
                                                <input type="hidden" class="form-control input-sm" name="max_amt" value="100000" />


                                                <span id="nicklimit" class="smalltxt big" style="margin-bottom:0px;margin-top:0px;display: none; color: #F60;font-size: 16px;">*匿名捐款金額上限為：10,000 元。</span>

                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span style="font-size:20px;color:#C00;display: inline-block;margin-left:10px;margin-bottom:20px;margin-top:15px;"></span>
                                            請選擇捐款方式：

                                            <div id="payment_method" style="display: inline-block">
                                                <label><input type="radio" id="PaymentType" name="PaymentType" onclick='card_info()' class="pay_type pay_card" style="vertical-align: text-top;" value="CREDITCARD" /> 信用卡</label>

                                                <label><input type="radio" id="PaymentType" name="PaymentType" onclick='card_hide()' class="pay_type pay_webatm" style="vertical-align: text-top;" value="WEBATM" /> WebATM</label>
                                                <label><input type="radio" id="PaymentType" name="PaymentType" onclick='card_hide()' class="pay_type pay_vacc" style="vertical-align: text-top;" value="VACC" /> ATM轉帳</label>
                                                <label><input type="radio" id="PaymentType" name="PaymentType" onclick='card_hide()' class="pay_type pay_cvs" style="vertical-align: text-top;" value="CVS" /> 超商代碼繳費</label>
                                                <label><input type="radio" id="PaymentType" name="PaymentType" onclick='card_hide()' class="pay_type pay_barcode" style="vertical-align: text-top;" value="BARCODE" /> 條碼繳費<span class="smalltxt"> (Barcode)</span></label>
                                            </div>
                            <p>
                                </th>
                                </tr>
                                </table>
                                <div id="card_info" style="width:100%;display: none;">
                                    <div class="content_title" style="width:100%;margin-top: 20px;margin-bottom:10px">請填寫信用卡資料</div>
                                    <div class="bottom_color" style="width:100%;margin-top: 10px;margin-bottom:10px"></div>
                                    <div class="card-wrapper"></div>
                            <p>
                                <table class="table-bordered bank_table" width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <th>
                                            <span style="color:#C00;display: inline-block;margin-left:40px;margin-bottom:15px;margin-top:15px;"></span>
                                            信用卡卡號：
                                            <input class="form-control" style="font-size :17px;margin-bottom:15px;margin-top:15px;display: inline-block;width: 200px;" placeholder="輸入信用卡號" type="text" pattern="[0-9]{*}" id="CardNo" name="CardNo" style="width:200px" onkeyup="CardNumberDetector();">
                                            <img style="margin-left:20px;margin-bottom:5px;" src="https://donate.pay2go.com/images/payment/mpg_card_icon.png" />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span style="color:#C00;display: inline-block;margin-left:10px;margin-bottom:15px;margin-top:15px;"></span>
                                            信用卡有效月年：
                                            <input name="Exp" id="Exp" type="text" maxlength="7" placeholder="有效月年" class="form-control input-sm" style="font-size :17px;margin-bottom:15px;margin-top:15px;width:100px;display: inline-block;">
                                            <span style="color:#C00;display: inline-block;margin-left:20px;margin-bottom:15px;margin-top:15px;"></span>
                                            (例:09/18)　信用卡背面末三碼：
                                            <input name="cvc" id="cvc" type="text" class="form-control input-sm" maxlength="3" style="font-size :17px;margin-bottom:15px;margin-top:15px;width:50px;display: inline-block;">
                                            <img style="vertical-align: middle;margin-bottom:0px;" src="https://donate.pay2go.com/images/payment/card3_c.png" />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span style="color:#C00;display: inline-block;margin-left:40px;margin-bottom:15px;margin-top:15px;"></span>
                                            Email信箱：
                                            <input id="Card_MAIL" name="Card_MAIL" type="text" class="form-control input-sm" style="margin-bottom:15px;margin-top:15px;font-size :17px;width:250px;display: inline-block">
                                        </th>
                                    </tr>
                                </table>
                                <script>
                                $('form').card({
                                container: '.card-wrapper',
                                numberInput: 'input#CardNo', // optional — default input[name="number"]
                                expiryInput: 'input#Exp', // optional — default input[name="expiry"]
                                cvcInput: 'input#cvc', // optional — default input[name="cvc"]
                                width: 350, // optional — default 350px
                                formatting: true ,// optional - default true
                                values: {name: '信用卡捐款'},
                                messages: {
                                    validDate: '有效日期',
                                    monthYear: 'MONTH/YEAR'

                                }});
                                </script>
                        </div>
                        <div class="bank_text">
                            <ul class="disc">
                                <!--說明內容-->
                                <li>使用超商條 / 代碼繳款，金額不可超過 2 萬元。</li>
                                <li>使用網路 ATM / ATM 櫃員機轉帳，請注意轉帳金額上限! (依各家銀行規定)。</li>
                            </ul>
                        </div>
                        <div class="content_title" style="width:100%;margin-bottom:10px;margin-top:10px;">請填寫捐款人基本資料</div>

                        <div class="bottom_color" style="width:100%;margin-bottom:15px;margin-top:15px;"></div>
                        <div id="nickName_pay" style="font-size :17px;margin-bottom:15px;margin-top:15px;margin-left:40px;display: none;">
                            捐款方式： 匿名捐款
                            <span style="color:#C00;display: inline-block">&nbsp;&nbsp;</span>我來自：
                            <select class="form-control input" id="nickNameSelectArea" style="width:110px;display: inline-block">
                                <option value="">不透露</option>
                                <option value="基隆市">基隆市</option>
                                <option value="台北市">台北市</option>
                                <option value="新北市">新北市</option>
                                <option value="宜蘭縣">宜蘭縣</option>
                                <option value="新竹市">新竹市</option>
                                <option value="新竹縣">新竹縣</option>
                                <option value="桃園市">桃園市</option>
                                <option value="苗栗縣">苗栗縣</option>
                                <option value="台中市">台中市</option>
                                <option value="彰化縣">彰化縣</option>
                                <option value="南投縣">南投縣</option>
                                <option value="嘉義市">嘉義市</option>
                                <option value="嘉義縣">嘉義縣</option>
                                <option value="雲林縣">雲林縣</option>
                                <option value="台南市">台南市</option>
                                <option value="高雄市">高雄市</option>
                                <option value="屏東縣">屏東縣</option>
                                <option value="台東縣">台東縣</option>
                                <option value="花蓮縣">花蓮縣</option>
                                <option value="金門縣">金門縣</option>
                                <option value="連江縣">連江縣</option>
                                <option value="澎湖縣">澎湖縣</option>
                                <option value="南海諸島">南海諸島</option>
                            </select>
                            <br>
                            <span style="margin-left:-14px;color:#C00;display: inline-block;margin-bottom:10px;margin-top:20px;"></span> Email信箱：
                            <input id="Payment_MAIL1" name="Nickname_MAIL" type="text" class="form-control input-sm" style="font-size :17px;width:266px;display: inline-block">
                            <span style="color:#C00;display: inline-block;margin-left:15px;margin-bottom:10px;margin-top:10px;">建議您提供Email信箱,方便寄送通知,以便後續確認及查詢</span>
                        </div>
                        <div id="person_info" style="width:100%;display: inline-block;">
                            <table class="table-bordered bank_table" width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <th>
                                        <span style="color:#C00;display: inline-block;margin-left:15px;margin-bottom:15px;margin-top:15px;"></span>
                                        捐款人姓名（公司名稱）：

                                        <input name="Payment_Name" id="Payment_Name" type="text" class="form-control input-sm" style="font-size:18px;vertical-align: middle;margin-bottom:15px;margin-top:15px;width:200px;display: inline-block">
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <span style="color:#C00;display: inline-block;margin-left:15px;margin-bottom:15px;margin-top:15px;"></span>
                                        身分證字號（統一編號）：
                                        <input name="Payment_ID" id="Payment_ID" type="text" class="form-control input-sm" title="ID格式錯誤" pattern="/^[a-zA-Z]{1}[1-2]{1}[0-9]{8}/" style="font-size:18px;margin-bottom:15px;margin-top:15px;width:150px;display: inline-block" onkeyup="IDDetector();">
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <span style="color:#C00;display: inline-block;margin-left:30px;margin-bottom:20px;margin-top:20px;"></span>
                                        聯絡電話（行動電話）：
                                        <input name="Payment_TEL" id="Payment_TEL" type="text" class="form-control input-sm" title="電話格式錯誤" pattern="[0-9]{10}" style="margin-bottom:15px;margin-top:15px;font-size:18px;width:150px;display: inline-block" onkeyup="PhoneNumberDetector();">
                                        <span style="color:#C00;display: inline-block;margin-left:15px;margin-bottom:10px;margin-top:10px;">例：0226536000　或　0933123456</span>
                                    </th>
                                </tr>
                                <tr>

                                    <th>
                                        <span style="color:#C00;display: inline-block;margin-left:123px;margin-bottom:20px;margin-top:20px;"></span>
                                        Email信箱：
                                        <input id="Payment_MAIL" name="Payment_MAIL" type="text" class="form-control input-sm" style="margin-bottom:15px;margin-top:15px;font-size:18px;width:250px;display: inline-block">
                                        <!--<span style="color:#C00;display: inline-block;margin-left:15px;margin-bottom:10px;margin-top:10px;">捐款結果將寄至您的Email信箱</span>-->
                                        <span id="same_emailBtn" style="display:none;"><input type="checkbox" id="same_email" name="same_email" style="margin-bottom:15px;margin-top:15px;margin-left:10px;vertical-align: middle;" value=" " /> 同信用卡Email。</span>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <span style="color:#C00;display: inline-block;margin-left:133px;margin-bottom:15px;margin-top:15px;"></span>
                                        戶籍地址：
                                        <div class="modify_addr_text" id='twzipcode' style="display:inline-block;"></div>
                                        <input type="text" id="addr" class="form-control input-sm modify_addr_text" name="Payment_house_address" style="font-size:18px;margin-bottom:15px;margin-top:15px;width:300px;display:inline-block;" value="" />
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <div id="mail_address" style="display: inline-block">
                                            <span style="color:#C00;display: inline-block;margin-left:133px;margin-bottom:15px;margin-top:15px;"></span>
                                            通訊地址：
                                            <div class="modify_addr_text" id='twzipcode-2' style="display:inline-block;"></div>
                                            <input type="text" id="addr-2" class="form-control input-sm modify_addr_text" name="Payment_mail_address" style="font-size:18px;margin-bottom:15px;margin-top:15px;width:300px;display:inline-block;" value="" />
                                            <label><input type="checkbox" id="same_address1" name="same_address1" style="margin-bottom:15px;margin-top:15px;margin-left:10px;display:inline-block;vertical-align: middle;" value=" " /> 同戶籍地址</label>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <span style="color:#C00;display: inline-block;margin-left:98px;margin-bottom:15px;margin-top:15px;"></span>
                                        是否寄送收據：
                                        <label><span onclick='receipt_on()'><input type="radio" style="margin-bottom:15px;margin-top:15px;vertical-align: middle;" name="Receipt" id="Receipt" value="YES" checked="checked"> 要</span></label>
                                        <label><span onclick='receipt_off()'><input type="radio" style="margin-bottom:15px;margin-top:15px;vertical-align: middle;" name="Receipt" id="Recript" value="NO"> 不要</span></label>
                                        </span>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <div id="home_address" style="display: inline-block">
                                            <span style="color:#C00;display: inline-block;margin-left:98px;margin-bottom:15px;margin-top:15px;"></span>
                                            收據寄送地址：
                                            <div class="modify_addr_text" id='twzipcode-1' style="display:inline-block;"></div>
                                            <input type="text" id="addr-3" class="form-control input-sm modify_addr_text" name="Payment_home_address" style="font-size:18px;margin-bottom:15px;margin-top:15px;width:300px;display:inline-block;" value="" />
                                            <label><input type="radio"  name="same_address" style="margin-bottom:15px;margin-top:15px;margin-left:10px;display:inline-block;vertical-align: middle;" value="同戶籍" /> 同戶籍</label>
                                            <label><input type="radio"  name="same_address" style="margin-bottom:15px;margin-top:15px;margin-left:10px;display:inline-block;vertical-align: middle;" value="同通訊" /> 同通訊</label>
                                        </div>
                                    </th>
                                </tr>
                            </table>
                        </div>
                        <div class="content_title" style="width:100%;margin-top: 20px;margin-bottom:10px">捐款人注意事項</div>

                        <div class="bottom_color" style="width:100%;margin-top: 10px;margin-bottom:10px"></div>
                        <table class="table-bordered " width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <th>
                                    <span style="font-size:18px;">一、任何人不得以本人以外之名義捐贈。</span><br />
                                    <span style="font-size:18px;"> 二、捐贈者匿名方式捐贈，不得超過新台幣1萬元。</span><br />
                                    <span style="font-size:18px;"> 三、個人對同一擬參選人捐贈，不得超過新台幣10萬元。</span><br />
                                    <span style="font-size:18px;"> 四、屬下列各款之個人、人民團體及營利事業均不得為捐贈</span><br />
                                    <span style="font-size:18px;"> (1) 公營事業或政府持有資本達20%之民營企業。</span><br />
                                    <span style="font-size:18px;"> (2) 與政府機關有巨額採購或重大公共建設投資契約，且在履約期間之廠商。</span><br />
                                    <span style="font-size:18px;"> (3) 有累積虧損尚未依規定彌補之營利事業。</span><br />
                                    <span style="font-size:18px;"> (4) 宗教團體。</span><br />
                                    <span style="font-size:18px;"> (5) 外國人民、法人、團體，或主要成員為外國人民、法人、團體之法人、團體。</span><br />
                                    <span style="font-size:18px;"> (6) 大陸地區人民、法人、團體，或主要成員為大陸地區人民、法人、團體之法人、團體。</span><br />
                                    <span style="font-size:18px;"> (7) 港澳居民、法人、團體，或主要成員為香港、澳門居民、法人、團體之法人、團體。</span><br />
                                    <br />
                                    <span style="font-size:18px;"> 完整相關規定請詳閱監察院陽光法案網站。如有任何疑問，請洽競選辦公室。</span><br />
                                    <span style="font-size:18px;">
                                        連絡方式：E-Mail:<br />
                                        theway.best@gmail.com
                                    </span><br />
                                </th>
                            </tr>
                        </table>
                        <!--同意條款-->
                        <div id="term_for_pc">
                            <div style="margin-top: 10px">
                                <div class="panel panel-default" style="margin-top: 10px;margin-bottom: 5px;">
                                    <div class="panel-heading" role="tab" id="headingtwo">
                                        <a href='' target="_blank">
                                            <h4 class="panel-title">
                                                亞匯隱私權聲明
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel panel-default" style="margin-top: 0px;">
                                    <div class="panel-heading" role="tab" id="headingtwo">
                                        <a href='' target="_blank">
                                            <h4 class="panel-title">
                                                亞匯第三方支付金流平台服務條款
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nomal_text" style=" color: #e6003d; ">
                            <label style="font-weight:normal;">
                                <input type="checkbox" name="chk_terms" id="chk001" value="OK" style="width:1.5em;height:1.5em;vertical-align: bottom;margin-top:15px" /> 我已閱讀同意服務條款與隱私權聲明且確認付款資訊無誤。
                            </label>
                        </div>

                    </div>
            </div>
            </form>
            <!--內容結束-->

            <div id="sendButtom" style="margin-top:20px;margin-bottom:20px;text-align: center">
                <%--<input class="div_login_btn re_btn" type="button" style="display: inline-block" onclick="payment.payment()" value="確認捐款" />--%>
                <input class="div_login_btn re_btn" type="button" style="display: inline-block" onclick="startPayment();" value="確認捐款" />
                <input class="div_login_btn re_btn" type="button" style="display: inline-block" onclick="resetALL();" value="重設" />

            </div>
            <div id="re_foot">
                <div class="modal fade " id="donateProcess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                        <div class="modal-content " style="margin-top: 50px">
                            <div class="modal-body">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <div class="content_title" style="width:100%;margin-bottom:5px">提示訊息：<span style="color:#000000;margin-left:5px;display: inline-block"><div id="Process"></div></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            </form>

                <script type="text/javascript">
                    // 重置所有的欄位
                    function resetALL() {
                        $('#ctl00').each(function () {
                            this.reset();
                        });
                        DonateID = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();;
                    }
                    var UseCreditCard = false;
                    var UseWebATM = false;
                    var UseATM = false;
                    var UseChainStore = false;
                    var UseBarCode = false;

                    function S4() {
                        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                    }
                  
 
                    function IDDetector() {
                        var curLength = $("#Payment_ID").val().length;
                        if (curLength > 10) {
                            var num = $("#Payment_ID").val().substr(0, 10);
                            $("#Payment_ID").val(num);
                            alertify.error("ID格式錯誤，多出的字串將被移除");

                        } else {
                            $("#Payment_ID").text(10 - $("#Payment_ID").val().length);
                        }
                    }
                    function PhoneNumberDetector() {
                        var curLength = $("#Payment_TEL").val().length;
                        if (curLength > 10) {
                            var num = $("#Payment_TEL").val().substr(0, 10);
                            $("#Payment_TEL").val(num);
                            alertify.error("電話格式錯誤，多出的字串將被移除");

                        } else {
                            $("#Payment_TEL").text(10 - $("#Payment_TEL").val().length);
                        }
                    }
                    function CardNumberDetector() {
                        var curLength = $("#CardNo").val().length;
                        if (curLength > 20) {
                            var num = $("#CardNo").val().substr(0, 20);
                            $("#CardNo").val(num);
                            alertify.error("信用卡格式錯誤，多出的字串將被移除");

                        } else {
                            $("#CardNo").text(20 - $("#CardNo").val().length);
                        }
                    }
                    Date.prototype.Format = function (fmt) { //author: meizz 
                        var o = {
                            "M+": this.getMonth() + 1, //月份 
                            "d+": this.getDate(), //日 
                            "h+": this.getHours(), //小时 
                            "m+": this.getMinutes(), //分 
                            "s+": this.getSeconds(), //秒 
                            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                            "S": this.getMilliseconds() //毫秒 
                        };
                        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                        for (var k in o)
                            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                        return fmt;
                    }
                    alertify.set({ delay: 3000 });
                    var Amount = 0;
                    var ContributionWay = "";
                    var ComesFrom = "";
                    var Sponsor = "";
                    var DonorName = "";
                    var DonorID = "";
                    var DonateID = "";
                    var PhoneNumber = "";
                    var Email1 = "";                              //具名信箱
                    var Email2 = "";                              //匿名信箱
                    var Email3 = "";                              //信用卡信箱 
                    var Address1 = "";                            //戶籍地址
                    var Address2="";                              //通訊地址
                    var Address3 = "";                            //收據地址
                    var Receipt = "";                             //收據

                    var CardNumber = "";
                    var EffectiveDate = "";
                    var cvc = "";

                    //var JavaScriptDateFormat = {
                    //    weekday: "long", year: "numeric", month: "short",
                    //    day: "numeric", hour: "2-digit", minute: "2-digit"
                    //};
                    var DonateTime = ""; 
                    var DonateID = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
                    //檢查匿名捐款
                    function checkAnonymousValue() {
                        ContributionWay = "Anonymous";
                        if (Amount == 0) {
                            // 開始檢查捐款 自選或是可填任一是空的話
                            if ($('input[name=Payment_Amt]:checked').length == 0 || $('input[name=Payment_Amt_1]').val() == "") {
                                alertify.error("請選擇小額捐款金額!");
                            }
                            return false;
                        }
                        if ($('input[name=PaymentType]:checked').length == 0) {
                            alertify.error("請決定捐款方式");
                            return false;
                        }
                        else {
                            Sponsor = $('input[name=PaymentType]:checked').val();
                            //alertify.success(Sponsor);
                            //成功後，導到付款專屬頁面
                            switch (Sponsor) {
                                case 'CREDITCARD':
                                    //開始檢查信用卡內欄位
                                    if ($('#CardNo').val() == "" || $('#Exp').val() == "" || $('#cvc').val() == "" || $('#Card_MAIL').val() == "") {
                                        alertify.error("信用卡資訊錯誤或是不完整 !!");
                                    }
                                    else {
                                        CardNumber = $('#CardNo').val();
                                        EffectiveDate = $('#Exp').val();
                                        cvc = $('#cvc').val();
                                        Email3 = $('#Card_MAIL').val();
                                        UseCreditCard = true;
                                    }
                                    break;
                                case 'WEBATM':
                                    //alertify.success("B");
                                    //WebATMInsert();
                                    UseWebATM = true;
                                    break;
                                case 'VACC':
                                    UseATM=true;
                                    //ATMInsert();
                                    //alertify.success("C");
                                    break;
                                case 'CVS':
                                    UseChainStore = true;
                                    //ChainStoreInsert();
                                    //alertify.success("D");
                                    break;
                                case 'BARCODE':
                                    //alertify.success("E");
                                    //BarCodeInsert();
                                    UseBarCode = true;
                                    break;
                            }
                        }
                        //alert($('input[name=Nickname_MAIL]').val());
                        //alert($('#nickNameSelectArea :selected').text());  // ? 空一格才抓到 ?
                        ComesFrom = $('#nickNameSelectArea :selected').text();
                        Email2 = $('input[name=Nickname_MAIL]').val();
                        //導向合適的頁面 呼叫 ajax
                        //在此檢查所有寫入DB變數
                        //DonateTime = DonateTime.toLocaleTimeString("zh-TW", JavaScriptDateFormat);
                        //var total = Amount + "," + ContributionWay + "," + ComesFrom + "," + Email2 + "," + DonateTime;
                        //alert(total);
                        //alert("匿名捐款完成");
                        DonateTime = new Date().Format("yyyy-MM-dd hh:mm:ss");


                        //AnonymousInsert(140, "Anonymous", "台中市", "WEBATM", "cdcdcdcs@cdcd.com.tw", new Date().Format("yyyy-MM-dd hh:mm:ss"));
                        //var result = Amount + ", " + ContributionWay + ", " + ComesFrom + ", " + Sponsor + ", " + Email2 + ", " + DonateTime
                        //alert(result);
                        //insertAnonymous( Amount, ContributionWay, ComesFrom,  Sponsor,  Email2, DonateTime)
                        //alert(CardNo + "," + cvc + "," + Exp + "," + Email3);



                        AnonymousInsert(DonateID,Amount, ContributionWay, ComesFrom, Sponsor, Email2, DonateTime);
                        if (UseCreditCard)
                            CardInsert(DonateID, CardNumber, EffectiveDate, cvc,ContributionWay, Email3);

                        if (UseWebATM)
                            WebATMInsert(DonateID, Amount, ContributionWay);

                        if (UseATM)
                            ATMInsert(DonateID, Amount, ContributionWay);

                        if (UseChainStore)
                            ChainStoreInsert(DonateID, Amount, ContributionWay);

                        if (UseBarCode)
                            BarCodeInsert(DonateID, Amount, ContributionWay);

 
                        
                    }
                    //檢查具名捐款
                    function checkNamedValue() {
                        ContributionWay = "Named";
                                if (Amount == 0) {
                                    // 開始檢查捐款 自選或是可填任一是空的話
                                      if ($('input[name=Payment_Amt]:checked').length == 0 || $('input[name=Payment_Amt_1]').val() == "") {
                                         alertify.error("請選擇小額捐款金額!");
                                      }
                                      return false;
                                }
                               
                                if ($('input[name=PaymentType]:checked').length == 0) {
                                    alertify.error("請決定捐款方式");
                                    return false;
                                }
                                else {
                                    Sponsor = $('input[name=PaymentType]:checked').val();
                                    //alertify.success(Sponsor);
                                    //成功後，導到付款專屬頁面
                                    switch (Sponsor) {
                                        case 'CREDITCARD':
                                            //開始檢查信用卡內欄位
                                            if ($('#CardNo').val() == "" || $('#Exp').val() == "" || $('#cvc').val() == "" || $('#Card_MAIL').val() == "") {
                                                alertify.error("信用卡資訊錯誤或是不完整 !!");
                                            }
                                            else {
                                                CardNumber = $('#CardNo').val();
                                                EffectiveDate = $('#Exp').val();
                                                cvc = $('#cvc').val();
                                                Email3 = $('#Card_MAIL').val();
                                                UseCreditCard = true;
                                            }
                                            break;
                                        case 'WEBATM':
                                            UseWebATM = true;
                                            //WebATMInsert();
                                            //alertify.success("B");
                                            break;
                                        case 'VACC':
                                            UseATM = true;
                                            //ATMInsert();
                                            //alertify.success("C");
                                            break;
                                        case 'CVS':
                                            UseChainStore = true;
                                            //ChainStoreInsert();
                                            //alertify.success("D");
                                            break;
                                        case 'BARCODE':
                                            UseBarCode = true;
                                            //BarCodeInsert();
                                            //alertify.success("E");
                                            break;
                                    }
                                }
                                
                                if ($('#Payment_Name').val().length == 0) {
                                    alertify.error("請填入捐款人姓名");
                                    return false;
                                }
                                else {
                                    DonorName = $('#Payment_Name').val();
                                }

                                if ($('#Payment_ID').val().length == 0) {
                                    alertify.error("請填入身分證字號或統編");
                                    return false;
                                }
                                else {
                                    DonorID = $('#Payment_ID').val();
                                }

                                if ($('#Payment_TEL').val().length == 0) {
                                    alertify.error("請填入聯絡電話");
                                    return false;
                                }
                                else {
                                    PhoneNumber = $('#Payment_TEL').val();
                                }

                                if ($('#Payment_MAIL').val().length == 0) {
                                    alertify.error("請填入電子郵件位置");
                                    return false;
                                }
                                else {
                                    Email1 = $('#Payment_MAIL').val();
                                }

                                if ($('#addr').val().length == 0) {
                                    alertify.error("請填入戶籍地址");
                                    return false;
                                }
                                else {
                                    Address1 = $('#addr').val();
                                }

                                if ($('#addr-2').val().length == 0) {
                                    alertify.error("請填入通訊地址");
                                    return false;
                                }
                                else {
                                    Address2 = $('#addr-2').val();
                                }
                                ////////////////////////////////////
                                if ($('input[name=Receipt]:checked').val() == 'YES') {
                                    Receipt = true;//要收據
                                    if ($('#addr-3').val().length == 0) {
                                        alertify.error("請填入收據地址");
                                        return false;
                                    }
                                    else {
                                        Address3=$('#addr-3').val();
                                    }
                                }
                                else {
                                    Receipt = 0;//不要收據
                                    Address3 = "";
                                }
                                DonateTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                        //在此檢查所有寫入DB變數
                                //DonateTime = DonateTime.toLocaleTimeString("zh-TW", JavaScriptDateFormat);
                                //var total = Amount + "," + ContributionWay + "," + Sponsor + "," + DonorName + "," + DonorID + "," + PhoneNumber + "," + Email1 + "," + Email3 + "," + Address1 + "," + Address2 + "," + Address3 + "," + Receipt + "," + DonateTime;
                                //alert(total);
                                // 呼叫 ajax
                                NamedInsert(DonateID,Amount, ContributionWay, Sponsor, DonorName, DonorID, PhoneNumber, Email1, Email3, Address1, Address2, Address3, Receipt, DonateTime);
                                if (UseCreditCard)
                                    CardInsert(DonateID, CardNumber, EffectiveDate, cvc, ContributionWay, Email3);


                                if (UseWebATM)
                                    WebATMInsert(DonateID, Amount, ContributionWay);

                                if (UseATM)
                                    ATMInsert(DonateID, Amount, ContributionWay);

                                if (UseChainStore)
                                    ChainStoreInsert(DonateID, Amount), ContributionWay;

                                if (UseBarCode)
                                    BarCodeInsert(DonateID, Amount, ContributionWay);


                    }
                    // 寫入 DB 的機制
                    function NamedInsert(DonateID,Amount, ContributionWay, Sponsor, DonorName, DonorID, PhoneNumber, Email1, Email3, Address1, Address2, Address3, Receipt, DonateTime) {
                        $.ajax({
                            statusCode: {
                                404: function () {
                                    alert("Page not found");
                                }
                            },
                            type: 'post',
                            //data: "{Amount:'250'}",           //這樣寫傳資料
                            data: "{DonateID:'"+DonateID+"',Amount:'" + Amount + "',ContributionWay:'" + ContributionWay + "',Sponsor:'" + Sponsor + "',DonorName:'" + DonorName + "',DonorID:'" + DonorID + "',PhoneNumber:'" + PhoneNumber + "',Email1:'" + Email1 + "',Email3:'" + Email3 + "',Address1:'" + Address1 + "',Address2:'" + Address2 + "',Address3:'" + Address3 + "',Receipt:'" + Receipt + "',DonateTime:'" + DonateTime + "'}",
                            url: 'ProcessDB.asmx/insertNamed',
                            contentType: 'application/json;charset=utf-8',
                            dataType: 'json',
                            success: function (data) {
                                resetALL();
                                //alert('具名捐款成功 !!');
                            },
                            error: function (e) {
                                alert('ajax error:' + e.statusText);
                            }
                        });
                    }
                    function AnonymousInsert(DonateID,Amount,ContributionWay,ComesFrom,Sponsor,Email2,DonateTime) {
                        $.ajax({
                            statusCode: {
                                404: function () {
                                    alert("Page not found");
                                }
                            },
                            type: 'post',
                            //data: "{Amount:'250'}",           //這樣寫傳資料
                            data: "{DonateID:'" + DonateID +"',Amount:'" + Amount + "',ContributionWay:'" + ContributionWay + "',ComesFrom:'" + ComesFrom + "',Sponsor:'" + Sponsor + "',Email2:'" + Email2 + "',DonateTime:'" + DonateTime + "'}",
                            url: 'ProcessDB.asmx/insertAnonymous',
                            contentType: 'application/json;charset=utf-8',
                            dataType: 'json',
                            success: function (data) {
                                resetALL();
                                //alert('匿名捐款成功 !!');
                            },
                            error: function (e) {
                                alert('ajax error:' + e.responseText);
                            }
                        });
                    }


                    function CardInsert(DonateID,CardNumber, EffectiveDate, cvc, ContributionWay, Email3) {
                        $.ajax({
                            statusCode: {
                                404: function () {
                                    alert("Page not found");
                                }
                            },
                            type: 'post',
                            //data: "{Amount:'250'}",           //這樣寫傳資料
                            data: "{DonateID:'" + DonateID +"',CardNumber:'" + CardNumber + "',EffectiveDate:'" + EffectiveDate + "',CVC:'" + cvc +  "',ContributionWay:'"+ContributionWay+ "',Email3:'" + Email3 + "'}",
                            url: 'ProcessDB.asmx/insertCard',
                            contentType: 'application/json;charset=utf-8',
                            dataType: 'json',
                            success: function (data) {
                                alert('使用信用卡成功 !!');
                            },
                            error: function (e,ajaxOptions,throwError) {
                                alert('ajax error:' + e.responseText);
                            }
                        });
                        UseCreditCard = false;
                    }

                    function WebATMInsert(DonateID,Amount) {
                        $.ajax({
                            statusCode: {
                                404: function () {
                                    alert("Page not found");
                                }
                            },
                            type: 'post',
                            //data: "{Amount:'250'}",           //這樣寫傳資料
                            data: "{DonateID:'" + DonateID + "',Amount:'" + Amount + "',ContributionWay:'" + ContributionWay + "'}",
                            url: 'ProcessDB.asmx/insertWebATM',
                            contentType: 'application/json;charset=utf-8',
                            dataType: 'json',
                            success: function (data) {
                                alert('使用WebATM成功 !!');
                            },
                            error: function (e, ajaxOptions, throwError) {
                                alert('ajax error:' + e.responseText);
                            }
                        });
                        UseWebATM = false;
                    }
                    function ATMInsert(DonateID,Amount) {
                        $.ajax({
                            statusCode: {
                                404: function () {
                                    alert("Page not found");
                                }
                            },
                            type: 'post',
                            //data: "{Amount:'250'}",           //這樣寫傳資料
                            data: "{DonateID:'" + DonateID + "',Amount:'" + Amount + "',ContributionWay:'" + ContributionWay + "'}",
                            url: 'ProcessDB.asmx/insertATM',
                            contentType: 'application/json;charset=utf-8',
                            dataType: 'json',
                            success: function (data) {
                                alert('使用ATM成功 !!');
                            },
                            error: function (e, ajaxOptions, throwError) {
                                alert('ajax error:' + e.responseText);
                            }
                        });
                        UseATM = false;
                    }
                    function ChainStoreInsert(DonateID,Amount) {
                        $.ajax({
                            statusCode: {
                                404: function () {
                                    alert("Page not found");
                                }
                            },
                            type: 'post',
                            //data: "{Amount:'250'}",           //這樣寫傳資料
                            data: "{DonateID:'" + DonateID + "',Amount:'" + Amount + "',ContributionWay:'" + ContributionWay + "'}",
                            url: 'ProcessDB.asmx/insertChainStore',
                            contentType: 'application/json;charset=utf-8',
                            dataType: 'json',
                            success: function (data) {
                                alert('使用超商成功 !!');
                            },
                            error: function (e, ajaxOptions, throwError) {
                                alert('ajax error:' + e.responseText);
                            }
                        });
                        UseChainStore = false;
                    }
                    function BarCodeInsert(DonateID,AMount) {
                        $.ajax({
                            statusCode: {
                                404: function () {
                                    alert("Page not found");
                                }
                            },
                            type: 'post',
                            //data: "{Amount:'250'}",           //這樣寫傳資料
                            data: "{DonateID:'" + DonateID + "',Amount:'" + Amount + "',ContributionWay:'" + ContributionWay + "'}",
                            url: 'ProcessDB.asmx/insertBarCode',
                            contentType: 'application/json;charset=utf-8',
                            dataType: 'json',
                            success: function (data) {
                                alert('使用BarCode成功 !!');
                            },
                            error: function (e, ajaxOptions, throwError) {
                                alert('ajax error:' + e.responseText);
                            }
                        });
                        UseBarCode = false;
                    }


                </script>
                <script type="text/javascript" >
                    function startPayment() {
                        if ($('#chk001').prop('checked')) {
                            //勾選同意事項
                         
                            if ($('#nickname').val() =='NO') {
                                //具名  開始收集必要欄位資料並檢查，然後ajax送到後台
                                // 檢查付款方式，決定處理方式，送到不同的頁面處理
                                checkNamedValue();
                            }
                            else {
                                //匿名
                                checkAnonymousValue();
                            }
                        }
                        else {
                            alertify.error("未勾選同意事項 !!");
                        }
                    }
                </script>
    </body>
    </!DOCType>
    <!--footer-->
    <div class="footer_last ">
        <div class="container top_position">
            <div class="col-xs-12 ">
                <div class="col-xs-3" style='vertical-align: middle;margin-top: 5px'>
                    <img src="https://donate.pay2go.com/images/logo/footlog.png" />
                </div>
                <div class="col-xs-8">
                    <div style="font-size: 16px;margin-top: 10px">
                        <span class='foot_text'>電話客服時間：周一至周五上午9:00 ~下午6:00　電子信箱客服時間：全年無休</span>
                    </div>
                    <div style="font-size: 16px; ">
                        <span class='foot_text'>客服電話：02-xxxx-xxxx　客服傳真：02-xxxx-xxxx</span>
                    </div>
                    <div style="font-size: 16px; ">
                        <span class='foot_text'>客服信箱：<a href="mailto:cs@go2pay.com.tw">cs@go2pay.com.tw</a></span>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="copyright_text" style='text-align: center; '>
        <span>COPYRIGHT 2015 © 亞匯行動支付</span>
    </div>
    </html>
