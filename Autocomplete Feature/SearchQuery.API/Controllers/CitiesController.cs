using Microsoft.AspNetCore.Mvc;

namespace SearchQuery.API.Controllers
{
    [ApiController]
    [Route("test")]
    public class CitiesController : ControllerBase
    {
        public string Get()
        {
            return "Returning from Cities Controller";
        }
    }
}
