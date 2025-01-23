// using Chatgptgenerator.Data;
// using Microsoft.AspNetCore.Mvc;

// namespace Chatgptgenerator.Controllers
// {
//     public class PromptController : BaseApiController
//     {
//         private readonly IPromptService _promptService;
//         private readonly AppDbContext _appDbContext;

//         public PromptController(IPromptService promptService, AppDbContext appDbContext)
//         {
//             _promptService = promptService;
//             _appDbContext = appDbContext;

//         }

//         [HttpGet(Name = "TriggerOpenAI")]
//         public async Task<IActionResult> TriggerOpenAI([FromQuery] string input)
//         {
//             var response = await _promptService.TriggerOpenAI(input);
//             return Ok(response);
//         }



//     }

// }