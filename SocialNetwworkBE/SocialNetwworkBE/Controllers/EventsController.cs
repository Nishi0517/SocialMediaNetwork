using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using SocialNetwworkBE.Models;

namespace SocialNetwworkBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        Dal dal = new Dal();
        Response response = new Response();
        public EventsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("AddEvents")]
        public Response AddEvents(Events events)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.AddEvents(events, connection);
            return response;
        }

        [HttpPost]
        [Route("EventsList")]
        public Response EventsList(Events events)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.EventsList(events, connection);
            return response;
        }
    }
}
