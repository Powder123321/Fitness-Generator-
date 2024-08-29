namespace Chatgptgenerator.Models;

public class UserInfo
{
    public required string UserName { get; set; }
    // prop despre user pt ca chatgpt sa poata faca un program 

    public required string Gender { get; set; }
    public int Weight { get; set; }

    public int Height { get; set; }

    public int Age { get; set; }

    public int MyProperty { get; set; }

}
