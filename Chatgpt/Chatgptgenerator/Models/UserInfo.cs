using System.ComponentModel.DataAnnotations;
using Microsoft.OpenApi.Any;

namespace Chatgptgenerator.Models;

public class UserInfo
{
    [Key]
    public required string UserName { get; set; }

    public string? Token { get; set; }

    public required string WorkoutProgram { get; set; }


}
