using System.Text.Json.Serialization;

namespace Chatgptgenerator;

public class OpenAIRequestDto
{
    [JsonPropertyName("model")]
    public required string Model { get; set; }

    [JsonPropertyName("messages")]
    public required List<OpenAIMessageRequestDto> Messages { get; set; }

    [JsonPropertyName("max_tokens")]
    public int MaxTokens { get; set; }
}

public class OpenAIMessageRequestDto
{
    [JsonPropertyName("role")]
    public required string Role { get; set; }

    [JsonPropertyName("content")]
    public required string Content { get; set; }
}
public class OpenAIResponseDto
{
    [JsonPropertyName("choices")]
    public required List<Choice> Choices { get; set; }
}

public class Choice
{
    [JsonPropertyName("message")]
    public required Message Message { get; set; }
}

public class Message
{
    [JsonPropertyName("content")]
    public required string Content { get; set; }
}
