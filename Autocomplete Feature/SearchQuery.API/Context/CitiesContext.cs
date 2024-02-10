using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SearchQuery.API.Models;

namespace SearchQuery.API.Context
{
    public class CitiesContext : DbContext
    {
        public CitiesContext(DbContextOptions<CitiesContext> options) : base(options)
        {
            
        }
        public DbSet<City> Cities { get; set; }
    }
}
