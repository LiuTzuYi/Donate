using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.Objects;
using System.Data.Common;
using System.Data;

namespace Donate
{
    public partial class MaintainCreditCard : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //System.Threading.Thread.Sleep(5000);
            //using (var context = new BloggingContext())
            //{
            //    var blogs = context.Blogs.SqlQuery("SELECT * FROM dbo.Blogs").ToList();
            //}


            //DonateEntities entities = new DonateEntities();
            //var result = entities.CardInfoes.SqlQuery("select 1+1").ToList();
        }


        //private PhotoSharingDB db = new PhotoSharingDB();
        //public async Task<ActionResult> Search()
        //{
        //    var sql = "select * from photos where Title like 'B%'";
        //    var r = await db.Photos.SqlQuery(sql).ToListAsync();
        //    return View("Search", r);
        //}
        protected void ExecuteSql(ObjectContext c, string sql)
        {
            var entityConnection = (System.Data.EntityClient.EntityConnection)c.Connection;
            DbConnection conn = entityConnection.StoreConnection;
            ConnectionState initialState = conn.State;
            try
            {
                if (initialState != ConnectionState.Open)
                    conn.Open();
                using (DbCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = sql;
                    cmd.ExecuteNonQuery();
                }
            }
            finally
            {
                if (initialState != ConnectionState.Open)
                    conn.Close();
            }
        }
    }
}