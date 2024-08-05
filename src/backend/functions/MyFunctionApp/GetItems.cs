// GetItems.cs
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Data.SqlClient;
using Dapper;
using System.Threading.Tasks;
using System.Collections.Generic;

public static class GetItems
{
    [FunctionName("GetItems")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
        ILogger log)
    {
        string connectionString = Environment.GetEnvironmentVariable("SqlConnectionString");

        using (var connection = new SqlConnection(connectionString))
        {
            var items = await connection.QueryAsync<Item>("SELECT id, name, value FROM items");
            return new OkObjectResult(items);
        }
    }
}

public class Item
{
    public int ID { get; set; }
    public string Name { get; set; }
    public string Value { get; set; }
}













// using System;
// using System.IO;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.Azure.WebJobs;
// using Microsoft.Azure.WebJobs.Extensions.Http;
// using Microsoft.AspNetCore.Http;
// using Microsoft.Extensions.Logging;
// using Newtonsoft.Json;

// namespace MyFunctionApp
// {
//     public static class GetItems
//     {
//         [FunctionName("GetItems")]
//         public static async Task<IActionResult> Run(
//             [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
//             ILogger log)
//         {
//             log.LogInformation("C# HTTP trigger function processed a request.");

//             string name = req.Query["name"];

//             string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
//             dynamic data = JsonConvert.DeserializeObject(requestBody);
//             name = name ?? data?.name;

//             string responseMessage = string.IsNullOrEmpty(name)
//                 ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
//                 : $"Hello, {name}. This HTTP triggered function executed successfully.";

//             return new OkObjectResult(responseMessage);
//         }
//     }
// }
