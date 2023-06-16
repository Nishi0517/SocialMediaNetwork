using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using SocialNetwworkBE.Models;

namespace SocialNetwworkBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistartionController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        Dal dal = new Dal();
        Response response = new Response();
        public readonly SqlConnection _sqlConnection;
        public RegistartionController(IConfiguration configuration)
        {
            _configuration = configuration;
            //_sqlConnection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
        }


        [HttpPost]
        [Route("Registration")]
        public Response Registration(Registration registration)
        {
            if (ModelState.IsValid)
            {
                SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
                response = dal.Registration(registration, connection);
                return response;
            }
            return null;
        }
        [HttpPost]
        [Route("Login")]
        public Response Login(Registration registration)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.Login(registration, con);
            return response;
        }

        [HttpPost]
        [Route("UserApproval")]
        public Response UserApproval(Registration registration)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.UserApproval(registration, con);
            return response;
        }

        [HttpPost]
        [Route("StaffRegistration")]
        public Response StaffRegistration(Staff staffregistration)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.StaffRegistration(staffregistration, connection);
            return response;
        }

        [HttpDelete]
        [Route("DeleteStaff")]
        public Response DeleteStaff(Staff staffregistration)
        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.DeleteStaff(staffregistration, connection);
            return response;
        }

        [HttpPost]
        [Route("RegistrationList")]

        public Response RegistrationList(Registration registration)

        {
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            response = dal.RegistrationList(registration,connection);
            return response;
        }
    }
}
