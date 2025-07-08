using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LoginDashboard.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class DashboardController : ControllerBase
    {
        [HttpGet("data")]
        public IActionResult GetChartData()
        {
            var data = new
            {
                labels = new[] { "Open", "In Progress", "Closed" },
                values = new[] { 10, 15, 5 }
            };

            return Ok(data);
        }
    }
}
