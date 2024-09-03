using Microsoft.OpenApi.Any;

namespace Chatgptgenerator.Models;

public class UserInfo
{
    public int Id { get; set; }
    public required string UserName { get; set; }
    public required string Gender { get; set; }
    public double Weight { get; set; }

    public double Height { get; set; }

    public int Age { get; set; }

    public required string Token { get; set; }

    public required string WorkoutProgram { get; set; }
}
