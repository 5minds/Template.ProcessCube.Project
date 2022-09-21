namespace external_task_worker.Handler.Test
{
    public class TestPayload
    {
        public TestPayload(string testPayloadInput)
        {
            this.TestPayloadInput = testPayloadInput;
        }
        public string TestPayloadInput {get; set;}
    }
}
