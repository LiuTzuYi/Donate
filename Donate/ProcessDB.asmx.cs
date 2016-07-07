using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Services;
using System.Data.Entity.Validation;
using System.IO;


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
    public class ProcessDB : System.Web.Services.WebService
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
            return "Hello World" ;
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
            using (DonateEntities1 entity = new DonateEntities1())
            {
                DonateTime = DateTime.Now;
                mytable table = new mytable();
                table.Receipt = Receipt;
                table.DonateTime = DonateTime;
                entity.mytable.Add(table);
                entity.SaveChanges();
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertNamed(string DonateID,int Amount, string ContributionWay, string Sponsor, string DonorName, string DonorID, string PhoneNumber, string Email1, string Email3, string Address1, string Address2, string Address3, Boolean Receipt,string DonateTime)
        {
            //DonateID ?
            //金額(Amount) 捐款方式(Contribution 具名/匿名) 捐款方法(sponsor) 捐款人(DonorName) 身分證字號(DonorID) 連絡電話(PhoneNumber) e-mail(Email1) 戶籍地址(Address1) 通訊地址(Address2) 收據地址(Address3) 是否要收據(Receipt) 捐款時間(DonateTime)
            using (DonateEntities1 entity = new DonateEntities1())
            {
                NamedDonate nameDonate = new NamedDonate();
                nameDonate.DonateID = Guid.Parse(DonateID);
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
                nameDonate.ServerReceiveTime = DateTime.Now;

                entity.NamedDonate.Add(nameDonate);
                try
                {
                    int result = entity.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    var entityError = ex.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);
                    var getFullMessage = string.Join("; ", entityError);
                    var exceptionMessage = string.Concat(ex.Message, "errors are: ", getFullMessage);
                    File.WriteAllText("d:\\log001.txt", exceptionMessage);
                    //NLog
                    //LogException(new Exception(string.Format("File : {0} {1}.", logFile.FullName, exceptionMessage), ex));
                }

            }
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertAnonymous(string DonateID,int Amount,string ContributionWay,string ComesFrom, string Sponsor, string Email2,DateTime DonateTime)
        {
            //DonateID ?
            //金額(Amount) 捐款方式(ContributionWay) 捐款來自(ComesFrom) e-mail(Email2) 捐款時間(DonateTime)
            using (DonateEntities1 entity = new DonateEntities1())
            {
                AnonymousDonate anonymousDonate = new AnonymousDonate();
                anonymousDonate.DonateID = Guid.Parse(DonateID);
                anonymousDonate.Amount = Amount;
                anonymousDonate.ContributionWay = ContributionWay;
                anonymousDonate.ComesFrom = ComesFrom;
                anonymousDonate.Sponsor = Sponsor;
                anonymousDonate.Email2 = Email2;
                anonymousDonate.DonateTime = DonateTime;
                anonymousDonate.ServerReceiveTime = DateTime.Now;
                entity.AnonymousDonate.Add(anonymousDonate);

                try
                {
                    int result = entity.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    var entityError = ex.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);
                    var getFullMessage = string.Join("; ", entityError);
                    var exceptionMessage = string.Concat(ex.Message, "errors are: ", getFullMessage);
                    File.WriteAllText("d:\\log001.txt", exceptionMessage);
                    //NLog
                    //LogException(new Exception(string.Format("File : {0} {1}.", logFile.FullName, exceptionMessage), ex));
                }
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertCard(string DonateID,string CardNumber,String EffectiveDate,string CVC,  string ContributionWay, string Email3)
        {
            // DonateID ?
            //卡號(CardNumber) 過期日(EffectiveDate) 驗證碼(CVV)
            using (DonateEntities1 entity = new DonateEntities1())
            {

                //while (CardNumber.IndexOf(" ") >= 0)
                //{
                //    CardNumber = CardNumber.Replace(" ","");
                //}
                while (EffectiveDate.IndexOf(" ") >= 0)
                {
                    EffectiveDate = EffectiveDate.Replace(" ","");
                }
                
                CardInfo cardInfo = new CardInfo();
                cardInfo.DonateID = Guid.Parse(DonateID);
                cardInfo.CardNumber = CardNumber;
                cardInfo.EffectiveDate = EffectiveDate;
                cardInfo.CVC = CVC;
                cardInfo.ContributionWay = ContributionWay;
                cardInfo.Email3 = Email3;
                cardInfo.ServerReceiveTime = DateTime.Now;
                entity.CardInfo.Add(cardInfo);
                try
                {
                    int result = entity.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    var entityError = ex.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);
                    var getFullMessage = string.Join("; ", entityError);
                    var exceptionMessage = string.Concat(ex.Message, "errors are: ", getFullMessage);
                    File.WriteAllText("d:\\log001.txt", exceptionMessage);
                    //NLog
                    //LogException(new Exception(string.Format("File : {0} {1}.", logFile.FullName, exceptionMessage), ex));
                }
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertWebATM(string DonateID, int Amount ,string ContributionWay)
        {
            using (DonateEntities1 entity = new DonateEntities1())
            {
                WebATMInfo WebATM = new WebATMInfo();
                WebATM.DonateID = Guid.Parse(DonateID);
                WebATM.Amount = Amount;
                WebATM.ContributionWay = ContributionWay;
                entity.WebATMInfo.Add(WebATM);
                try
                {
                    int result = entity.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    var entityError = ex.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);
                    var getFullMessage = string.Join("; ", entityError);
                    var exceptionMessage = string.Concat(ex.Message, "errors are: ", getFullMessage);
                    File.WriteAllText("d:\\log001.txt", exceptionMessage);
                }
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertATM(string DonateID, int Amount, string ContributionWay)
        {
            using (DonateEntities1 entity = new DonateEntities1())
            {
                ATMInfo ATM = new ATMInfo();
                ATM.DonateID = Guid.Parse(DonateID);
                ATM.Amount = Amount;
                ATM.ContributionWay = ContributionWay;
                entity.ATMInfo.Add(ATM);
                try
                {
                    int result = entity.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    var entityError = ex.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);
                    var getFullMessage = string.Join("; ", entityError);
                    var exceptionMessage = string.Concat(ex.Message, "errors are: ", getFullMessage);
                    File.WriteAllText("d:\\log001.txt", exceptionMessage);
                }
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertChainStore(string DonateID, int Amount, string ContributionWay)
        {
            using (DonateEntities1 entity=new DonateEntities1())
            {
                ChainStoreInfo ChainStore = new ChainStoreInfo();
                ChainStore.DonateID = Guid.Parse(DonateID);
                ChainStore.Amount = Amount;
                ChainStore.ContributionWay = ContributionWay;
                entity.ChainStoreInfo.Add(ChainStore);
                try
                {
                    int result = entity.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    var entityError = ex.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);
                    var getFullMessage = string.Join("; ", entityError);
                    var exceptionMessage = string.Concat(ex.Message, "errors are: ", getFullMessage);
                    File.WriteAllText("d:\\log001.txt", exceptionMessage);
                }
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void insertBarCode(string DonateID, int Amount, string ContributionWay)
        {
            using (DonateEntities1 entity = new DonateEntities1())
            {
                BarCodeInfo BarCode = new BarCodeInfo();
                BarCode.DonateID = Guid.Parse(DonateID);
                BarCode.Amount = Amount;
                BarCode.ContributionWay = ContributionWay;
                entity.BarCodeInfo.Add(BarCode);

                try
                {
                    int result = entity.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    var entityError = ex.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);
                    var getFullMessage = string.Join("; ", entityError);
                    var exceptionMessage = string.Concat(ex.Message, "errors are: ", getFullMessage);
                    File.WriteAllText("d:\\log001.txt", exceptionMessage);
                }

            }
   
        }
    }
}
