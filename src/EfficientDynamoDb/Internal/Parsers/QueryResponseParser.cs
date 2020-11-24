using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using EfficientDynamoDb.Context.Operations.Query;
using EfficientDynamoDb.DocumentModel;
using EfficientDynamoDb.DocumentModel.AttributeValues;
using EfficientDynamoDb.Internal.Extensions;

namespace EfficientDynamoDb.Internal.Parsers
{
    public static class QueryResponseParser
    {
        public static QueryResponse Parse(Document response) =>
            new QueryResponse
            {
                Count = response.GetOptionalInt("Count"),
                ScannedCount = response.GetOptionalInt("ScannedCount"),
                Items = response.TryGetValue("Items", out var items) ? items._documentListValue.Items : Array.Empty<Document>(),
                ConsumedCapacity = CapacityParser.ParseConsumedCapacity(response),
                LastEvaluatedKey = ParseLastEvaluatedKey(response)
            };


        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private static IReadOnlyDictionary<string, AttributeValue>? ParseLastEvaluatedKey(Document response)
        {
            if(!response.TryGetValue("LastEvaluatedKey", out var attribute))
                return null;

            var document = attribute.AsDocument();
            return document.Count > 0 ? document : null;
        }
    }
}