using Microsoft.Data.SqlClient;
using System.Data;

namespace SocialNetwworkBE.Models
{
    public class Dal
    {
        Response response = new Response();
        #region regi
        public Response Registration(Registration registration, SqlConnection connection)
        {
            // var response = new Response();
            SqlCommand cmd = new SqlCommand("Insert into Registration(Name,Email,Password,PhoneNo,IsActive,IsApproved) values ('" + registration.Name + "','" + registration.Email + "','" + registration.Password + "','" + registration.PhoneNo + "',1,0)", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Registration SUccessfull!!";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Registration failed!!";
            }
            return response;

        }
        public Response Login(Registration registration, SqlConnection connection)
        {
            //var response = new Response();
            SqlDataAdapter da = new SqlDataAdapter("select * from Registration where Email = '" + registration.Email + "' AND Password='" + registration.Password + "'", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Login SuccessFull!!";
                Registration reg = new Registration();
                reg.Id = Convert.ToInt32(dt.Rows[0]["Id"]);
                reg.Name = Convert.ToString(dt.Rows[0]["Name"]);
                reg.Email = Convert.ToString(dt.Rows[0]["Email"]);
                reg.UserType = Convert.ToString(dt.Rows[0]["UserType"]);
                response.Registration = reg;

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Login failed!!";
                response.Registration = null;
            }

            return response;
        }

        public Response UserApproval(Registration registration, SqlConnection connection)
        {
            // Response response = new Response();
            SqlCommand cmd = new SqlCommand("Update Registration set IsApproved = 1 where Id='" + registration.Id + "' and IsActive =1", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "User Approved!";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User Approval failed!!";
                response.Registration = null;
            }
            return response;
        }

        public Response RegistrationList(Registration registration,SqlConnection connection)
        {

            SqlDataAdapter da = new SqlDataAdapter("select * from Registration where IsActive=1 ", connection);
            //and(UserType = '" + registration.UserType + "' and UserType = '" + registration.UserType + "')
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Registration> lstRegistration = new List<Registration>();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    
                    Registration reg = new Registration();
                    reg.Id = Convert.ToInt32(dt.Rows[i]["Id"]);
                    reg.Name = Convert.ToString(dt.Rows[i]["Name"]);
                    reg.Email = Convert.ToString(dt.Rows[i]["Email"]);
                    reg.UserType = Convert.ToString(dt.Rows[i]["UserType"]);
                    reg.PhoneNo = Convert.ToString(dt.Rows[i]["phoneNo"]);
                    reg.IsApproved = Convert.ToInt32(dt.Rows[i]["isApproved"]);
                    reg.IsActive = Convert.ToInt32(dt.Rows[i]["isActive"]);


                    lstRegistration.Add(reg);
                }
                response.StatusCode = 200;
                response.StatusMessage = "Registration data found!!";
                response.ListRegistration = lstRegistration;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "No data found for Registration!!";
                response.ListRegistration = null;
            }
            return response;

        }

        #endregion
        #region News
        public Response AddNews(News news, SqlConnection connection)
        {
            //Response response = new Response();
            SqlCommand cmd = new SqlCommand("Insert into News(Title,Content,Email,IsActive,CreatedOn) values ('" + news.Title + "','" + news.Content + "','" + news.Email + "',1,GETDATE())", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "New Created!";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "New creation failed!!";
                response.Registration = null;
            }
            return response;
        }

        public Response NewsList(SqlConnection connection)
        {
            //Response response
            SqlDataAdapter da = new SqlDataAdapter("select * from News where IsActive=1", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<News> lstNews = new List<News>();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    News news = new News();

                    news.Id = Convert.ToInt32(dt.Rows[0]["Id"]);
                    news.Title = Convert.ToString(dt.Rows[0]["Title"]);
                    news.Email = Convert.ToString(dt.Rows[0]["Email"]);
                    news.Content = Convert.ToString(dt.Rows[0]["Content"]);
                    news.IsActive = Convert.ToInt32(dt.Rows[0]["IsActive"]);
                    news.CreatedOn = Convert.ToString(dt.Rows[0]["CreatedOn"]);

                    lstNews.Add(news);
                }
                response.StatusCode = 200;
                response.StatusMessage = "News data found!!";
                response.listNews = lstNews;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "No data found for news!!";
                response.listNews = null;
            }
            return response;
        }

        #endregion
        #region Article
        public Response AddArticle(Article article, SqlConnection connection)
        {
            //Response response = new Response();
            SqlCommand cmd = new SqlCommand("Insert into Article(Title,Content,Email,Image,IsActive,CreatedOn) values ('" + article.Title + "','" + article.Content + "','" + article.Email + "','" + article.Image + "',1 ,0)", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Article Created!";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Article creation failed!!";
                response.Registration = null;
            }
            return response;
        }
        public Response ArticleList(Article article, SqlConnection connection)
        {
            //Response response
            SqlDataAdapter da = new SqlDataAdapter("select * from Article where  IsActive =1", connection); 
            //if (article.Type == "User")
            //{
                //new SqlDataAdapter("select * from Article where Email = '" + article.Email + "' and  IsActive =1", connection);
            //}
            //if(article.Type=="Page")
            //{
            //    new SqlDataAdapter("select * from Article where IsActive =1", connection);
            //}
            
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Article> lstArticles = new List<Article>();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Article art = new Article();

                    art.Id = Convert.ToInt32(dt.Rows[i]["Id"]);
                    art.Title = Convert.ToString(dt.Rows[i]["Title"]);
                    art.Email = Convert.ToString(dt.Rows[i]["Email"]);
                    art.Content = Convert.ToString(dt.Rows[i]["Content"]);
                    art.Image = Convert.ToString(dt.Rows[i]["Image"]);
                    art.IsActive = Convert.ToInt32(dt.Rows[i]["IsActive"]);
                    art.IsApproved = Convert.ToInt32(dt.Rows[i]["IsApproved"]);
                    //art.CreatedOn = Convert.ToString(dt.Rows[0]["CreatedOn"]);

                    lstArticles.Add(art);
                }
                response.StatusCode = 200;
                response.StatusMessage = "article data found!!";
                response.listArticles = lstArticles;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "No data found for article!!";
                response.listArticles = null;
            }
            return response;
        }

        public Response ArticleApproval(Article article, SqlConnection connection)
        {
            // Response response = new Response();
            SqlCommand cmd = new SqlCommand("Update Article set IsApproved = 1 where Id='" + article.Id + "' and IsActive =1", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                SqlDataAdapter da = new SqlDataAdapter("select * from Article where  IsActive =1", connection);
                DataTable dt = new DataTable();
                da.Fill(dt);
                List<Article> lstArticles = new List<Article>();
                if (dt.Rows.Count > 0)
                {
                    for (int ii = 0; ii < dt.Rows.Count; ii++)
                    {
                        Article art = new Article();

                        art.Id = Convert.ToInt32(dt.Rows[ii]["Id"]);
                        art.Title = Convert.ToString(dt.Rows[ii]["Title"]);
                        art.Email = Convert.ToString(dt.Rows[ii]["Email"]);
                        art.Content = Convert.ToString(dt.Rows[ii]["Content"]);
                        art.Image = Convert.ToString(dt.Rows[ii]["Image"]);
                        art.IsActive = Convert.ToInt32(dt.Rows[ii]["IsActive"]);
                        art.IsApproved = Convert.ToInt32(dt.Rows[ii]["IsApproved"]);
                        lstArticles.Add(art);
                    }
                    response.StatusCode = 200;
                    response.StatusMessage = "Article Approved!";
                    response.listArticles = lstArticles;
                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Article Approval failed!!";
                    response.listArticles = null;
                }
            }
          return response;

        }

        #endregion

        #region staff
        public Response StaffRegistration(Staff registration, SqlConnection connection)
        {
            // var response = new Response();
            SqlCommand cmd = new SqlCommand("Insert into Staff(Name,Email,Password,IsActive) values ('" + registration.Name + "','" + registration.Email + "','" + registration.Password + "',1)", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Staff SUccessfull!!";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Staff failed!!";
            }
            return response;

        }
        public Response DeleteStaff(Staff staff, SqlConnection connection)
        {
            // var response = new Response();
            SqlCommand cmd = new SqlCommand("Delete from Staff where Id= '" + staff.Id + "' And IsActive=1)", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Staff Deleted Successfull!!";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Staff Deletion is failed!!";
            }
            return response;

        }


        #endregion

        #region events
        public Response AddEvents(Events events, SqlConnection connection)
        {
            //Response response = new Response();
            SqlCommand cmd = new SqlCommand("Insert into Events(Title,Content,Email,IsActive,CreatedOn) values ('" + events.Title + "','" + events.Content + "','" + events.Email + "','" + events.IsActive+ "',1 ,GetDate())", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Events Created!";

            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Events creation failed!!";
                response.Registration = null;
            }
            return response;
        }
        public Response EventsList(Events events, SqlConnection connection)
        {
            //Response response
            SqlDataAdapter da = new SqlDataAdapter("Select * from Events where IsActive=1",connection);
            
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Events> lstEvents = new List<Events>();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Events eve = new Events();

                    eve.Id = Convert.ToInt32(dt.Rows[0]["Id"]);
                    eve.Title = Convert.ToString(dt.Rows[0]["Title"]);
                    eve.Email = Convert.ToString(dt.Rows[0]["Email"]);
                    eve.Content = Convert.ToString(dt.Rows[0]["Content"]);
                    eve.IsActive = Convert.ToInt32(dt.Rows[0]["IsActive"]);
                    eve.CreatedOn = Convert.ToString(dt.Rows[0]["CreatedOn"]);

                    lstEvents.Add(events);
                }
                response.StatusCode = 200;
                response.StatusMessage = "article data found!!";
                response.listEvents = lstEvents;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "No data found for article!!";
                response.listEvents = null;
            }
            return response;
        }

        #endregion
    }
}
