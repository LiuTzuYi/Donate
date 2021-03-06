﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MaintainAnonymous.aspx.cs" Inherits="Donate.Miner.MaintainAnonymous" %>

<%@ Register Assembly="DevExpress.Xpo.v16.1, Version=16.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Xpo" TagPrefix="dx" %>

<%@ Register assembly="DevExpress.Web.v16.1, Version=16.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web" tagprefix="dx" %>

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
            <ClientSideEvents  CallbackComplete="function(s,e){ ASPxLoadingPanel1.Hide(); }" />
        </dx:ASPxCallback>
        <dx:ASPxLoadingPanel ID="ASPxLoadingPanel1" ClientInstanceName="ASPxLoadingPanel1" Theme="Office2003Olive" runat="server"></dx:ASPxLoadingPanel>
    <div id="div1">
        <dx:ASPxGridView ID="ASPxGridView1" runat="server" Theme="Office2003Olive" DataSourceID="EntityDataSource1" AutoGenerateColumns="False" KeyFieldName="DonateID">
            <ClientSideEvents   Init  ="function(s,e){ASPxCallback1.PerformCallback();ASPxLoadingPanel1.Show();}" />
            <SettingsEditing Mode="Inline">
            </SettingsEditing>
            <SettingsBehavior AllowFocusedRow="True" ConfirmDelete="True" EnableRowHotTrack="True" />
            <SettingsCommandButton>
                <NewButton>
                    <Image Url="~/icon/new.png">
                    </Image>
                </NewButton>
                <UpdateButton>
                    <Image Url="~/icon/update.png">
                    </Image>
                </UpdateButton>
                <CancelButton>
                    <Image Url="~/icon/cancel.png">
                    </Image>
                </CancelButton>
                <EditButton>
                    <Image Url="~/icon/edit.png">
                    </Image>
                </EditButton>
                <DeleteButton>
                    <Image Url="~/icon/delete.png">
                    </Image>
                </DeleteButton>
                <SearchPanelApplyButton ButtonType="Link" Text="開始搜尋">
                </SearchPanelApplyButton>
                <SearchPanelClearButton ButtonType="Link" Text="取消搜尋">
                </SearchPanelClearButton>
            </SettingsCommandButton>
            <SettingsSearchPanel Visible="True">
                
            </SettingsSearchPanel>
            <SettingsText SearchPanelEditorNullText="搜" />
            <Columns>
                <dx:GridViewCommandColumn ShowDeleteButton="True" ShowEditButton="True" ShowNewButtonInHeader="True" VisibleIndex="0">
                </dx:GridViewCommandColumn>
                <dx:GridViewDataTextColumn FieldName="DonateID" ReadOnly="True" Visible="False" VisibleIndex="1">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="金額" FieldName="Amount" VisibleIndex="2">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="來自" FieldName="ComesFrom" VisibleIndex="3">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="捐款方式" FieldName="Sponsor" VisibleIndex="4">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="具/匿名" FieldName="ContributionWay" VisibleIndex="5">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="電郵" FieldName="Email2" VisibleIndex="6">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataDateColumn Caption="捐款時間" FieldName="DonateTime" VisibleIndex="7">
                </dx:GridViewDataDateColumn>
                <dx:GridViewDataDateColumn FieldName="ServerReceiveTime" Visible="False" VisibleIndex="8">
                </dx:GridViewDataDateColumn>
            </Columns>
        </dx:ASPxGridView>
    </div>
        <asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=DonateEntities" DefaultContainerName="DonateEntities" EnableDelete="True" EnableFlattening="False" EnableInsert="True" EnableUpdate="True" EntitySetName="AnonymousDonates"></asp:EntityDataSource>
    </form>
</body>
</html>
