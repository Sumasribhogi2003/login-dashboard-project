using LoginDashboard.API.Models;
using System.Collections.Generic;
using System.Linq;

namespace LoginDashboard.API.Services
{
    public class AuthService
    {
        private readonly List<User> _users = new()
        {
            new User { Username = "admin", Password = "admin123" }
        };

        public bool ValidateUser(string username, string password)
        {
            return _users.Any(u => u.Username == username && u.Password == password);
        }
    }
}
