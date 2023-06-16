using System.ComponentModel.DataAnnotations;

namespace SocialNetwworkBE.Models
{
    public class Registration
    {
        public int Id { get;set; }
        //[Required]
        public string Name { get; set; }
        //[Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string PhoneNo { get; set; }
        public int IsActive { get; set; }
        public int IsApproved { get; set; }
        public string  UserType { get; set; }
    }
}
