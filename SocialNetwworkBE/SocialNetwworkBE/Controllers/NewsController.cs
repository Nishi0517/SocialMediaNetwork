using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using SocialNetwworkBE.Models;

namespace SocialNetwworkBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        Dal dal = new Dal();
        Response response = new Response();
        public NewsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("AddNews")]
        public Response AddNews(News news)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.AddNews(news, connection);
            return response;
        }

        [HttpPost]
        [Route("NewsList")]
        public Response NewsList(News news)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.NewsList(connection);
            return response;
        }
    }
}
