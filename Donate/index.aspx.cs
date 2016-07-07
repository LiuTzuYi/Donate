using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Donate.Code;

namespace Donate
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            InitializationSite();
        }
        private void InitializationSite()
        {

           // DonateEntities1 entity1 = new DonateEntities1();

            using (DonateEntities1 entity = new DonateEntities1())
            {

                var CandidateInfo = from p in entity.SiteInfo where p.DefaultSelect == true select p;
                foreach (var r in CandidateInfo)
                {
                    CandidateSite.CandidatePicture = r.PictureLocation;
                    CandidateSite.Term1 = r.SiteTerm1;
                    CandidateSite.CandidateName = r.Candidate;
                    CandidateSite.Term2 = r.SiteTerm2;
                    CandidateSite.Term3 = r.SiteTerm3;
                    CandidateSite.Term4 = r.SiteTerm4;
                    CandidateSite.Term5 = r.SiteTerm5;
                }
                image1.Src = CandidateSite.CandidatePicture;
            }    
        }
    }
}