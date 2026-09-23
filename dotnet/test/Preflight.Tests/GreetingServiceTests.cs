using Preflight.Api;
using Xunit;

namespace Preflight.Tests;

public sealed class GreetingServiceTests
{
    [Fact]
    public void Greets_without_a_supplied_name()
    {
        Assert.Equal("Hello!", GreetingService.BuildGreeting());
    }

    [Fact]
    public void Greets_a_supplied_name()
    {
        Assert.Equal("Hello, Engineer!", GreetingService.BuildGreeting("Engineer"));
    }

    [Fact]
    public void Trims_surrounding_whitespace()
    {
        Assert.Equal("Hello, Celo!", GreetingService.BuildGreeting("  Celo  "));
    }
}
