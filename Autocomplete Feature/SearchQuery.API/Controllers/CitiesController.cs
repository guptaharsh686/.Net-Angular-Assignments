using Microsoft.AspNetCore.Mvc;
using SearchQuery.API.Context;
using SearchQuery.API.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace SearchQuery.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CitiesController : ControllerBase
    {
        public CitiesController(CitiesContext context) 
        {
            Context = context;
        }

        public CitiesContext Context { get; }

        [HttpGet]
        public ActionResult<IEnumerable<string>> getcities([FromQuery] string cityName)
        {
            //var result = (from City in Context.Cities
            //             where City.city_name.StartsWith(cityName)
            //             select City.city_name).ToList();
            ActionResult<IEnumerable< string >> result = null;
            if (cityName == null)
            {
                return result = new List<string>()
                {
                    "Please enter valid value in query string"
                };
            }

            result = Context.Cities.Where(city => city.city_name.ToLower().StartsWith(cityName.ToLower())).Select(x => x.city_name).ToList();

            return result;
        }

    }
}
