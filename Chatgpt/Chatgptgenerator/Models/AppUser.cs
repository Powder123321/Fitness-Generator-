using System.ComponentModel.DataAnnotations;
using Chatgptgenerator.Models;

namespace Chatgptgenerator;

public class AppUser
{
    [Key]
    public int Id { get; set; }
    public required string Username { get; set; }

    public required byte[] PasswordHash { get; set; }

    public required byte[] PasswordSalt { get; set; }
}
