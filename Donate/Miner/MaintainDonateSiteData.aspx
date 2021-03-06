﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MaintainDonateSiteData.aspx.cs" Inherits="Donate.MaintainDonateSiteData" %>

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
            <ClientSideEvents CallbackComplete="function(s,e) { ASPxLoadingPanel1.Hide(); }" />
        </dx:ASPxCallback>
        <dx:ASPxLoadingPanel ID="ASPxLoadingPanel1" ClientInstanceName="ASPxLoadingPanel1" runat="server"></dx:ASPxLoadingPanel>
    <div id="div1">
        <dx:ASPxGridView ID="ASPxGridView1"  runat="server" AutoGenerateColumns="False" DataSourceID="EntityDataSource1" EnableTheming="True" KeyFieldName="SiteTermID" Theme="Office2003Olive" Font-Bold="True" Font-Names="Microsoft JhengHei">
            <ClientSideEvents Init="function(s,e) { ASPxCallback1.PerformCallback(); ASPxLoadingPanel1.Show(); }" />
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
            
<%--            <Templates >
                <Header>
                    <dx:ASPxButton runat="server" ID="button1" ></dx:ASPxButton>
                </Header>
            </Templates>--%>
            <Columns>
<%--                <dx:GridViewDataTextColumn  Caption="捐款流水號" FieldName="DonateID" ReadOnly="True" VisibleIndex="1">
                    <EditFormSettings Visible="False" />
                </dx:GridViewDataTextColumn>--%>
                <dx:GridViewCommandColumn ShowDeleteButton="True" ShowEditButton="True" ShowNewButtonInHeader="True" VisibleIndex="0">
                </dx:GridViewCommandColumn>
                <dx:GridViewDataTextColumn FieldName="SiteTermID" VisibleIndex="1" ReadOnly="True" Visible="false">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="Candidate" Caption="候選人" VisibleIndex="2" PropertiesTextEdit-DisplayFormatString="C">
<PropertiesTextEdit DisplayFormatString="C"></PropertiesTextEdit>
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataCheckColumn FieldName="DefaultSelect" Caption="預設人選" VisibleIndex="3">
                </dx:GridViewDataCheckColumn>
                <dx:GridViewDataTextColumn FieldName="SiteTerm1" Caption="網站名詞一" VisibleIndex="4">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="SiteTerm2" Caption="網站名詞二" VisibleIndex="5">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="SiteTerm3" Caption="網站名詞三" VisibleIndex="6">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="SiteTerm4" Caption="網站名詞四" VisibleIndex="7">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="SiteTerm5" Caption="網站名詞五" VisibleIndex="8">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn FieldName="PictureLocation" Caption="照片位置" VisibleIndex="9">
                </dx:GridViewDataTextColumn>
            </Columns>
        </dx:ASPxGridView>
        <dx:ASPxGridViewExporter ID="ASPxGridViewExporter1" runat="server" GridViewID="ASPxGridView1">
            <Styles>
                <Cell Font-Names="Microsoft JhengHei">
                </Cell>
            </Styles>
        </dx:ASPxGridViewExporter>
        <dx:ASPxButton ID="ASPxButton1" runat="server" EnableTheming="True" OnClick="ASPxButton1_Click" Text="PDF" Theme="Office2003Olive">
        </dx:ASPxButton>
        <dx:ASPxButton ID="ASPxButton2" runat="server" EnableTheming="True" OnClick="ASPxButton2_Click" Text="Excel" Theme="Office2003Olive">
        </dx:ASPxButton>
        </div>
        <asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=DonateEntities" DefaultContainerName="DonateEntities" EnableDelete="True" EnableFlattening="False" EnableInsert="True" EnableUpdate="True" EntitySetName="SiteInfoes">
        </asp:EntityDataSource>
    </form>
</body>
</html>
