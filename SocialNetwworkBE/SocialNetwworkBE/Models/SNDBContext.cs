using Microsoft.EntityFrameworkCore;

namespace SocialNetwworkBE.Models
{
    public class SNDBContext : DbContext
    {
        public SNDBContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Registration> Registration { get; set; }
        public DbSet<News> news{ get; set; }
        public DbSet<Article> articles { get; set; }
        public DbSet<Events> events { get; set; }
        public DbSet<Staff> staff { get; set; }
    }
}
