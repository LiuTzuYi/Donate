using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DevExpress.Web;
namespace Donate
{
    public partial class MaintainDonateSiteData : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ASPxGridView1.FocusedRowIndex = -1;
            ASPxGridView1.AutoFilterCellEditorCreate += ASPxGridView1_AutoFilterCellEditorCreate;
            
        }

        void ASPxGridView1_AutoFilterCellEditorCreate(object sender, DevExpress.Web.ASPxGridViewEditorCreateEventArgs e)
        {
            e.EditorProperties.NullDisplayText = "搜";
        }

        protected void ASPxButton1_Click(object sender, EventArgs e)
        {
            ASPxGridViewExporter1.Styles.Cell.Font.Name = "Microsoft JhengHei";
            ASPxGridViewExporter1.WritePdfToResponse();
        }
        protected void ASPxButton2_Click(object sender, EventArgs e)
        {
            ASPxGridViewExporter1.WriteXlsxToResponse();
        }
    }
}