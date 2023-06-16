using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using SocialNetwworkBE.Models;

namespace SocialNetwworkBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        Dal dal = new Dal();
        Response response = new Response();
        public ArticleController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("AddArticle")]
        public Response AddArticle(Article article)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.AddArticle(article, connection);
            return response;
        }

        [HttpPost]
        [Route("ArticleList")]
        public Response ArticleList(Article article)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.ArticleList(article,connection);
            return response;
        }

        [HttpPost]
        [Route("ArticleApproval")]
        public Response ArticleApproval(Article article)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.ArticleApproval(article, con);
            return response;
        }
    }
}
