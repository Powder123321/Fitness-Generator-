using System.Security.Cryptography;
using System.Text;
using Chatgptgenerator.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Chatgptgenerator;

public class AccountController : BaseApiController
{

    private readonly AppDbContext _appDbContext;
    private readonly ITokenService _tokenService;

    public AccountController(AppDbContext appDbContext, ITokenService tokenService)
    {
        _appDbContext = appDbContext;
        _tokenService = tokenService;
    }




    [HttpPost("register")]


    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {

        if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");

        using var hmac = new HMACSHA512();

        var user = new AppUser
        {
            Username = registerDto.Username.ToLower(),
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
            PasswordSalt = hmac.Key
        };

        _appDbContext.Users.Add(user);

        await _appDbContext.SaveChangesAsync();
        return new UserDto
        {
            Username = user.Username,
            Token = _tokenService.CreateToken(user)
        };





    }

    private async Task<bool> UserExists(string username)
    {
        return await _appDbContext.Users.AnyAsync(x => x.Username == username.ToLower());



    }


    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {

        var user = await _appDbContext.Users.SingleOrDefaultAsync(x => x.Username == loginDto.Username);
        if (user == null) return Unauthorized("Invalid username ");


        using var hmac = new HMACSHA512(user.PasswordSalt);
        var ComputeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
        for (int i = 0; i < ComputeHash.Length; i++)
        {
            if (ComputeHash[i] != user.PasswordHash[i])
            {
                return Unauthorized("Invalid password");

            }

        }
        return new UserDto
        {
            Username = user.Username,
            Token = _tokenService.CreateToken(user)
        };

    }





}
