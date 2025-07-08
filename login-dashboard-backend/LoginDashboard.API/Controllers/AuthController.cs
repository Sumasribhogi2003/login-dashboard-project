using LoginDashboard.API.Models;
using LoginDashboard.API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace LoginDashboard.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        private readonly TokenService _tokenService;
        private readonly IMemoryCache _cache;

        public AuthController(AuthService authService, TokenService tokenService, IMemoryCache cache)
        {
            _authService = authService;
            _tokenService = tokenService;
            _cache = cache;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var key = $"login_attempts_{HttpContext.Connection.RemoteIpAddress}";

            int attempts = _cache.GetOrCreate(key, entry =>
            {
                entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(1);
                return 0;
            });

            if (attempts >= 5)
                return BadRequest("Too many login attempts. Please try again later.");

            if (!_authService.ValidateUser(request.Username, request.Password))
            {
                _cache.Set(key, ++attempts);
                return Unauthorized("Invalid username or password.");
            }

            _cache.Remove(key); // reset after success
            var token = _tokenService.CreateToken(request.Username);
            return Ok(new { token });
        }
    }
}
