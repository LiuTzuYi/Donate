<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DonateMiner.aspx.cs" Inherits="Donate.DonateMiner" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <script src="../Scripts/jquery-2.1.4.min.js"></script>
    <script src="../Scripts/menuscript.js"></script>
    <link href="../Content/menustyles.css" rel="stylesheet" />
    <script type="text/javascript">
        function ChangeiFrame(url) {
            document.getElementById('iframeE').src = url;
        }
    </script>
</head>
<body>
    <form id="form1" style="height:100%" runat="server">
    <div>
      <div id='cssmenu'>
        <ul>
            <li ><a href='#' onclick="ChangeiFrame('MaintainAnonymous.aspx');" >匿名捐款查詢</a></li>
            <li><a href='#' onclick="ChangeiFrame('MaintainNamed.aspx');" > 具名捐款查詢</a></li>
            <li><a href='#' onclick="ChangeiFrame('MaintainCreditCard.aspx');" >信用卡捐款</a></li>
            <li><a href='#' onclick="ChangeiFrame('MaintainWebATM.aspx');" >WEBATM捐款</a></li>
            <li><a href='#' onclick="ChangeiFrame('MaintainATM.aspx');" >ATM轉帳</a></li>
            <li><a href='#' onclick="ChangeiFrame('MaintainChainStore.aspx');" >超商代碼捐款</a></li>
            <li><a href='#' onclick="ChangeiFrame('MaintainBarCode.aspx');" >BarCode 捐款</a></li>
        
            <li><a>&nbsp;&nbsp;&nbsp;</a></li>
            <li><a>&nbsp;&nbsp;&nbsp;</a></li>
            <li><a>&nbsp;&nbsp;&nbsp;</a></li>
            <li><a>&nbsp;&nbsp;&nbsp;</a></li>
       <%--     <li><a href='#' onclick="ChangeiFrame('MaintainSiteTerm.aspx');" >名詞管理</a></li>--%>
            <li><a href='#' onclick="ChangeiFrame('MaintainDonateSiteData.aspx');" >網站名詞/候選人管理</a></li>
       </ul>
      </div>
        <p></p>
        <p></p>
        <p></p>
       <div style="border:1px solid black;border-radius:5px;margin:0px auto;width:1180px;height:620px">
           <iframe id="iframeE" name="iframeE" frameborder="0" scrolling="yes" style="height:620px;width:1180px;margin:0px auto;" ></iframe>
       </div>
    </div>
    </form>
</body>
</html>

