﻿using Microsoft.AspNetCore.Mvc;

namespace SearchQuery.API.Controllers
{
    [ApiController]
    [Route("test/{action}")]
    public class CitiesController : ControllerBase
    {
        public string Get()
        {
            return "Returning from Cities Controller";
        }

        public string Get2()
        {
            return "Returning from Cities Controller";
        }
    }
}
