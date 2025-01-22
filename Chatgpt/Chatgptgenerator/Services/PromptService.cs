using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace Chatgptgenerator;

public interface IPromptService
{
    Task<string> TriggerOpenAI(string prompt);
}

public class PromptService : IPromptService
{
    private readonly IConfiguration _configuration;

    public PromptService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<string> TriggerOpenAI(string prompt)
    {
        // Obține cheia API și URL-ul de bază din configurație
        var apiKey = _configuration.GetValue<string>("OpenAI:APIKey");
        var baseUrl = _configuration.GetValue<string>("OpenAI:BaseUrl");

        // Configurează clientul HTTP
        using HttpClient client = new HttpClient();
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);

        // Creează cererea pentru API
        var request = new OpenAIRequestDto
        {
            Model = "gpt-3.5-turbo",
            Messages = new List<OpenAIMessageRequestDto>
            {
                new OpenAIMessageRequestDto
                {
                    Role = "user",
                    Content = prompt
                },
                new OpenAIMessageRequestDto
                {
                    Role = "user",
                    Content = "You are a virtual assistant exclusively specialized in fitness and physical health. Your role is to respond to questions with professionalism, empathy, and accuracy, providing detailed and actionable  workout programs"

                }
            },
            MaxTokens = 1000
        };

        // Serializează cererea în JSON
        var json = JsonSerializer.Serialize(request);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        // Trimite cererea și obține răspunsul
        var response = await client.PostAsync(baseUrl, content);
        var resjson = await response.Content.ReadAsStringAsync();

        // Verifică dacă cererea a fost procesată cu succes
        if (!response.IsSuccessStatusCode)
        {
            // Dacă cererea nu a fost reușită, aruncă o excepție cu mesajul de eroare
            throw new Exception("Error calling OpenAI API: " + resjson);
        }

        // Deserializare răspuns JSON într-un obiect OpenAIResponseDto
        var data = JsonSerializer.Deserialize<OpenAIResponseDto>(resjson);

        // Extrage textul răspunsului din prima opțiune
        var responseText = data?.Choices.FirstOrDefault()?.Message.Content;

        return responseText ?? "No response";
    }





}
