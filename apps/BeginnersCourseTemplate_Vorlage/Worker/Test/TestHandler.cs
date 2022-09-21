namespace Handler.Test
{
    using System.Threading;
    using System.Threading.Tasks;

    using AtlasEngine;
    using AtlasEngine.ExternalTasks;

    using external_task_worker.Handler.Test;
    #pragma warning disable CS0618
    [ExternalTaskHandler("TestETW")]
    #pragma warning restore CS0618
    public class TestHandler : IExternalTaskHandler<TestPayload, TestResult>
    {
        public Task<TestResult> HandleAsync(TestPayload input, ExternalTask task,
            CancellationToken cancellationToken = new CancellationToken())
        {
            return Task.FromResult(new TestResult(input.TestPayloadInput));
        }

    }
}
