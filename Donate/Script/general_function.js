function general_function() {
    thisObj = this;
    thisObj.base_url;
    thisObj.set_base_url = function(input_str) {
        thisObj.base_url = input_str;
    };
    thisObj.get_base_url = function() {
        return thisObj.base_url;
    };


    thisObj.loading_dote = function()
    {
        source = $("#dote").html();

        if (source != null) {
            if (source.length > 10) {
                $("#dote").html(".");
            } else {
                $("#dote").html(source + ".");
            }
            setTimeout(thisObj.loading_dote, 200);
        }
    };

    thisObj.AjaxWork = function(inputURL, inputData, completeDo, block, parameter) {
        //alert(inputURL);
        if (block == 'undefined') {
            block = false;
        }
        returnValue = "";
        $.ajax({
            url: inputURL,
            data: inputData,
            type: "POST",
            dataType: 'text',
            cache: false,
            global: true,
            async: true,
            beforeSend: function() {
                if (block == true) {
                    $("body").append("<div id='loading' >系統作業中<font id='dote'>.</font></div>");
                    $("#loading").css("background-color", "rgba(5,127,182, 0.3)");
//                    $("#loading").css("background-color", "rgba(231, 133, 0, 0.6)");
                    //$("#loading").css("border", "3px solid #f1a85c");
                    $("#loading").css("top", "0px");
                    $("#loading").css("left", "40%");
                    $("#loading").css("right", "50%");
                    $("#loading").css("bottom", "50%");
                    $("#loading").css("width", "300px");
                    $("#loading").css("height", "30px");
                    $("#loading").css("font-family", "Microsoft JhengHei");
                    $("#loading").css("color", "#FFF");
                    $("#loading").css("position", "absolute");
                    $("#loading").css("font-size", "18px");
                    $("#loading").css("text-align", "center");
                    $("#loading").css("text-shadow", "2px 2px 0px rgba(0,0,0,0.2")

                    //thisObj.easy_loading("dote");
                    timer = setTimeout(thisObj.loading_dote, 200);
                }
            },
            complete: function() {
                if (block == true) {
                    clearTimeout(timer);
                    $("#loading").remove();
                }
            },
            success: function(msg) {

                if (typeof(eval(completeDo)) === 'function') {
                    completeDo(msg, parameter);
                } else {
                    alert("所指定的function無法正常運作。");
                }


            },
            error: function(xhr, ajaxOptions, thrownError) {
                location.reload(true);
                //alert("網路可能不夠順暢，請稍後在嚐試。");
                //alert(thrownError + "資料處理中請稍候");
            }
        });
        return returnValue;
    };
    thisObj.web_base_encode = function(s) {
        var es = [], c = '', ec = '';
        s = s.split('');//10.19补 忘记ie不能下标访问字符串
        for (var i = 0, length = s.length; i < length; i++) {
            c = s[i];
            ec = encodeURIComponent(c);
            if (ec == c) {
                ec = c.charCodeAt().toString(16);
                ec = ('00' + ec).slice(-2);
            }
            es.push(ec);
        }
        return es.join('').replace(/%/g, '').toUpperCase();
    };

    /*
     * 轉換日期格式
     * 將datetime->date
     * 2014/06/03
     * Ellen
     */
    thisObj.display_datetime = function(date_time) {
        var display_datetime = date_time.split(" ");
        return(display_datetime[0]);
    };

    /*
     * 判斷資料若為NULL或空值則將資料改為"-"
     * 2014/06/03
     * Ellen
     */
    thisObj.display_null_data = function(str) {
        var display_str;
        if (str === "" || str === null) {
            display_str = "-";
        } else {
            display_str = str;
        }
        return(display_str);
    };

    /*
     * 金額加上千分位與單位
     * 2014/06/24
     * Ellen
     */
    thisObj.display_amt = function(str) {
        var re = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g; //千分位正規式
        str = str.toString().replace(re, "$1,");
        var display_str ;
       display_str = "NT$" + str;
            
        return(display_str);
    };


}



