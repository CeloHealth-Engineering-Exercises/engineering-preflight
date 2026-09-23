namespace Preflight.Api;

public static class GreetingService
{
    public static string BuildGreeting(string? name = null)
    {
        var trimmed = name?.Trim();
        return string.IsNullOrEmpty(trimmed) ? "Hello!" : $"Hello, {trimmed}!";
    }
}
