namespace Handler.Test
{
    using System.Threading;
    using System.Threading.Tasks;

    using AtlasEngine;
    using AtlasEngine.ExternalTasks;

    using external_task_worker.Handler.Test;

    [ExternalTaskHandler("TestETW")]
    public class TestHandler : IExternalTaskHandler<TestPayload, TestResult>
    {
        public Task<TestResult> HandleAsync(TestPayload input, ExternalTask task,
            CancellationToken cancellationToken = new CancellationToken())
        {
            return Task.FromResult(new TestResult{TestResultOutput = input.testPayloadInput});
        }

    }
}
