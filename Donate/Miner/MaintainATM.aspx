﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MaintainATM.aspx.cs" Inherits="Donate.MaintainATM" %>

<%@ Register Assembly="DevExpress.Web.v16.1, Version=16.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web" TagPrefix="dx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        #div1{
            margin:0 auto;
            width:800px;
            height:auto;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <dx:ASPxCallback ID="ASPxCallback1" ClientInstanceName="ASPxCallback1" runat="server">
            <ClientSideEvents CallbackComplete="function(s,e){ ASPxLoadingPanel1.Hide();  }" />
        </dx:ASPxCallback>
        <dx:ASPxLoadingPanel ID="ASPxLoadingPanel1" ClientInstanceName="ASPxLoadingPanel1" runat="server"></dx:ASPxLoadingPanel>
    <div id="div1">
        <dx:ASPxGridView ID="ASPxGridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" EnableTheming="True" Theme="Office2003Olive" KeyFieldName="DonorID">
            <ClientSideEvents Init="function(s,e) { ASPxCallback1.PerformCallback();ASPxLoadingPanel1.Show(); }" />
            <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
            <SettingsSearchPanel Visible="True" />
            <SettingsText SearchPanelEditorNullText="搜" />
            <Columns>
                <dx:GridViewDataTextColumn FieldName="Amount" Caption="捐款金額" ReadOnly="True" VisibleIndex="0">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="DonorName" Caption="捐款人" ReadOnly="True" VisibleIndex="1">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="PhoneNumber" Caption="電話" ReadOnly="True" VisibleIndex="2">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="Address" Caption="地址" ReadOnly="True" VisibleIndex="3">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="DonorID" Caption="身份證字號/統編" ReadOnly="True" VisibleIndex="4">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="Sponsor" Caption="捐款方式" ReadOnly="True" VisibleIndex="5">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="ContributionWay" Caption="具/匿" ReadOnly="True" VisibleIndex="6">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="Email2" Caption="電郵" ReadOnly="True" VisibleIndex="7">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataDateColumn FieldName="DonateTime" Caption="捐款時間" ReadOnly="True" VisibleIndex="8">
                </dx:GridViewDataDateColumn>
            </Columns>
        </dx:ASPxGridView>
    </div>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="Data Source=(LocalDB)\v11.0;AttachDbFilename=|DataDirectory|\Donate.mdf;Integrated Security=True;MultipleActiveResultSets=True;Application Name=候選人捐款網站" ProviderName="System.Data.SqlClient" SelectCommand="select  a.Amount,'' as DonorName, '' as PhoneNumber, a.ComesFrom as Address , '' as DonorID, a.Sponsor,a.ContributionWay,a.Email2,A.DonateTime from AnonymousDonate  a inner join ATMInfo atm on a.DonateID=atm.DonateID
union all
select  n.Amount, n.DonorName,n.PhoneNumber,n.Address1, Convert(char(10),n.DonorID), n.Sponsor,n.ContributionWay,n.Email1,n.DonateTime from NamedDonate n  inner join ATMInfo atm on n.DonateID=atm.DonateID; 
"></asp:SqlDataSource>
    </form>
</body>
</html>
