namespace external_task_worker.Handler.Test
{
   public class TestResult
   {
      public TestResult(string testResultOutput)
      {
         this.TestResultOutput = testResultOutput;
      }

      public string TestResultOutput {get; set;}
   }
}
