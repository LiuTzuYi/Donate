using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Services;


namespace Donate
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string Method1(string value1)
        {
            return value1;
        }

        [WebMethod(EnableSession=true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string HelloWorld()
        {
            return "Hello World";
        }
        [WebMethod(EnableSession = true )]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string StartQuery(string LastName)
        {
            SqlDataAdapter da = new SqlDataAdapter("select * from Employees" , new SqlConnection("Server=.;Initial Catalog=Northwind;Integrated Security=true"));
            //SqlDataAdapter da = new SqlDataAdapter("update Employees set LastName='" + LastName + "' where EmployeeID=1", new SqlConnection("Server=.;Initial Catalog=Northwind;Integrated Security=true"));
            //da.UpdateCommand = new SqlCommand();
            //da.UpdateCommand.CommandText = "update Employees set LastName='" +LastName+"'where EmployeeID=1";
            DataSet ds = new DataSet();
            da.Fill(ds);
            //int i=da.Update(ds);
            //ds.AcceptChanges();

            //return ds.Tables[0].TableName;
            try
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    return ds.Tables[0].Rows[0][4].ToString();
                }
                else
                {
                    return "Done,";
                }
            }
            catch (SqlException ex)
            {
                return ex.Message;
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void StartUpdate(string LastName,int EmployeeID)
        {
            SqlDataAdapter da = new SqlDataAdapter("select * from Employees",new SqlConnection("Data Source=.;Initial Catalog=Northwind;Integrated Security=true"));
            DataSet ds = new DataSet("ds");
            SqlCommand cmd = new SqlCommand("update Employees set LastName=@LastName where EmployeeID=@EmployeeID");
            cmd.Parameters.Add("@LastName", SqlDbType.Char).Value = LastName;
            cmd.Parameters.Add("@EmployeeID", SqlDbType.Int).Value = EmployeeID;
            da.UpdateCommand = cmd;
            da.Fill(ds);
            da.Update(ds);
        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertMyTable(bool Receipt,DateTime DonateTime)
        {
            using (DonateEntities entity = new DonateEntities())
            {
                DonateTime = DateTime.Now;
                mytable table = new mytable();
                table.Receipt = Receipt;
                table.DonateTime = DonateTime;
                entity.mytables.Add(table);
                entity.SaveChanges();
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertNamed(int Amount, string ContributionWay, string Sponsor, string DonorName, string DonorID, string PhoneNumber, string Email1, string Email3, string Address1, string Address2, string Address3, Boolean Receipt,string DonateTime)
        {
            //DonateID ?
            //金額(Amount) 捐款方式(Contribution 具名/匿名) 捐款方法(sponsor) 捐款人(DonorName) 身分證字號(DonorID) 連絡電話(PhoneNumber) e-mail(Email1) 戶籍地址(Address1) 通訊地址(Address2) 收據地址(Address3) 是否要收據(Receipt) 捐款時間(DonateTime)
            using (DonateEntities entity = new DonateEntities())
            {
                NamedDonate nameDonate = new NamedDonate();
                nameDonate.Amount = Amount;
                nameDonate.ContributionWay = ContributionWay;
                nameDonate.Sponsor = Sponsor;
                nameDonate.DonorName = DonorName;
                nameDonate.DonorID = DonorID;
                nameDonate.PhoneNumber = PhoneNumber;
                nameDonate.Email1 = Email1;
                nameDonate.Email3 = Email3;
                nameDonate.Address1 = Address1;
                nameDonate.Address2 = Address2;
                nameDonate.Address3 = Address3;
                // 0 no 1 yes
                nameDonate.Receipt = Receipt;
                nameDonate.DonateTime = Convert.ToDateTime(DonateTime);


                entity.NamedDonates.Add(nameDonate);
                int result = entity.SaveChanges();
            }
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertAnonymous(int Amount,string ContributionWay,string ComesFrom, string Sponsor, string Email2,DateTime DonateTime)
        {
            //DonateID ?
            //金額(Amount) 捐款方式(ContributionWay) 捐款來自(ComesFrom) e-mail(Email2) 捐款時間(DonateTime)
            using (DonateEntities entity = new DonateEntities())
            {
                AnonymousDonate anonymousDonate = new AnonymousDonate();
                anonymousDonate.Amount = Amount;
                anonymousDonate.ContributionWay = ContributionWay;
                anonymousDonate.ComesFrom = ComesFrom;
                anonymousDonate.Sponsor = Sponsor;
                anonymousDonate.Email2 = Email2;
                anonymousDonate.DonateTime = DonateTime;
                entity.AnonymousDonates.Add(anonymousDonate);

                int result = entity.SaveChanges();
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertCard(string CardNumber,DateTime EffectiveDate,string CVV)
        {
            // DonateID ?
            //卡號(CardNumber) 過期日(EffectiveDate) 驗證碼(CVV)
            using (DonateEntities entity = new DonateEntities())
            {
                CardInfo cardInfo = new CardInfo();
                cardInfo.CardNumber = CardNumber;
                cardInfo.EffectiveDate = new DateTime(2012, 5, 13);
                cardInfo.CVV = CVV;
                entity.CardInfoes.Add(cardInfo);
                int result = entity.SaveChanges();
            }
        }
    }
}
