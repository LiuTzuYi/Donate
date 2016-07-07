﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MaintainNamed.aspx.cs" Inherits="Donate.Miner.MaintainNamed" %>

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
            <ClientSideEvents CallbackComplete="function(s,e){ ASPxLoadingPanel1.Hide(); }" />
        </dx:ASPxCallback>
        <dx:ASPxLoadingPanel ID="ASPxLoadingPanel1" ClientInstanceName="ASPxLoadingPanel1" runat="server"></dx:ASPxLoadingPanel>
    <div id="div1">
        <dx:ASPxGridView ID="ASPxGridView1" runat="server" DataSourceID="EntityDataSource1" EnableTheming="True" Theme="Office2003Olive" AutoGenerateColumns="False" KeyFieldName="DonateID">
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
                           <dx:GridViewDataTextColumn Caption="匿/具名" FieldName="ContributionWay" VisibleIndex="2">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="捐款金額" FieldName="Amount" VisibleIndex="3">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="捐款方式" FieldName="Sponsor" VisibleIndex="4">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="捐款人" FieldName="DonorName" VisibleIndex="5">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="捐款人ID" FieldName="DonorID" VisibleIndex="6">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="電話" FieldName="PhoneNumber" VisibleIndex="7">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="電郵一" FieldName="Email1" VisibleIndex="8">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="電郵二" FieldName="Email3" VisibleIndex="9">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="通訊地址" FieldName="Address1" VisibleIndex="10">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="戶籍地址" FieldName="Address2" VisibleIndex="11">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataTextColumn Caption="收據地址" FieldName="Address3" VisibleIndex="12">
                           </dx:GridViewDataTextColumn>
                           <dx:GridViewDataCheckColumn Caption="是否需要收據" FieldName="Receipt" VisibleIndex="13">
                           </dx:GridViewDataCheckColumn>
                           <dx:GridViewDataDateColumn Caption="捐款時間" FieldName="DonateTime" VisibleIndex="14">
                           </dx:GridViewDataDateColumn>
                           <dx:GridViewDataDateColumn FieldName="ServerReceiveTime" Visible="False" VisibleIndex="15">
                           </dx:GridViewDataDateColumn>
                       </Columns>
        </dx:ASPxGridView>
    </div>
        <asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=DonateEntities" DefaultContainerName="DonateEntities" EnableDelete="True" EnableFlattening="False" EnableInsert="True" EnableUpdate="True" EntitySetName="NamedDonates"></asp:EntityDataSource>
    </form>
</body>
</html>
