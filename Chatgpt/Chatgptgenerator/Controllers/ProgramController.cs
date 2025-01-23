using System.IdentityModel.Tokens.Jwt;
using Chatgptgenerator.Data;
using Chatgptgenerator.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Chatgptgenerator.Controllers
{

    public class ProgramController : BaseApiController
    {

        private readonly IPromptService _promptService;
        private readonly AppDbContext _appDbContext;


        public ProgramController(IPromptService promptService, AppDbContext appDbContext)
        {
            _promptService = promptService;
            _appDbContext = appDbContext;
        }
        [HttpPost("GenerateWorkoutProgram")]
        public async Task<IActionResult> GenerateWorkoutProgram([FromBody] MessageDto messageDto)
        {
            // Construim mesajul pentru OpenAI
            var gptMessage = $"Generate a workout program for {messageDto.UserName}.";
            string workoutProgram = await _promptService.TriggerOpenAI(gptMessage);

            // Verificăm dacă utilizatorul există deja în baza de date
            var existingUser = await _appDbContext.UserInfo
                .FirstOrDefaultAsync(u => u.UserName == messageDto.UserName);

            if (existingUser != null)
            {
                // Dacă utilizatorul există, actualizăm programul de fitness
                existingUser.WorkoutProgram = workoutProgram;
            }
            else
            {
                // Dacă utilizatorul nu există, creăm un nou utilizator
                var userInfo = new UserInfo
                {
                    UserName = messageDto.UserName,
                    WorkoutProgram = workoutProgram,
                };

                _appDbContext.UserInfo.Add(userInfo);
            }

            // Salvăm modificările în baza de date
            await _appDbContext.SaveChangesAsync();

            // Returnăm programul de fitness generat
            return Ok(workoutProgram);
        }


        [HttpGet("GetWorkoutProgram/{username}")]
        public async Task<IActionResult> GetWorkoutProgram(string username)
        {
            var userInfo = await _appDbContext.UserInfo.FirstOrDefaultAsync(u => u.UserName == username);
            if (userInfo != null)
            {
                return Ok(userInfo.WorkoutProgram);
            }
            return NotFound("User not found");
        }

    };









}