using Preflight.Api;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls(Environment.GetEnvironmentVariable("ASPNETCORE_URLS") ?? "http://localhost:5000");

var app = builder.Build();
var indexHtml = File.ReadAllText(Path.Combine(AppContext.BaseDirectory, "Web", "index.html"));

app.MapGet("/", () => Results.Content(indexHtml, "text/html"));
app.MapGet("/hello", (string? name) => Results.Ok(new { message = GreetingService.BuildGreeting(name) }));

app.Run();
