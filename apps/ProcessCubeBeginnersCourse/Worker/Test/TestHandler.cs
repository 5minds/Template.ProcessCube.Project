namespace ProcessCubeBeginnersCourse.Worker.Test
{
    using System.Threading;
    using System.Threading.Tasks;

    using AtlasEngine;
    using AtlasEngine.ExternalTasks;

    #pragma warning disable CS0618
    [ExternalTaskHandler("TestETW")]
    #pragma warning restore CS0618
    public class TestHandler : IExternalTaskHandler<TestPayload, TestResult>
    {
        public Task<TestResult> HandleAsync(TestPayload input, ExternalTask task,
            CancellationToken cancellationToken = new CancellationToken())
        {
            Console.WriteLine("input.TestPayloadInput" + input.TestPayloadInput);
            
            var result = new TestResult(input.TestPayloadInput);

            Console.WriteLine("Test Result: "+ result.TestResultOutput);
            
            return Task.FromResult(result);
        }
    }
}
