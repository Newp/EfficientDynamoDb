using System;
using System.Globalization;
using System.Text.Json;
using EfficientDynamoDb.DocumentModel.AttributeValues;
using EfficientDynamoDb.DocumentModel.Converters;
using EfficientDynamoDb.DocumentModel.Extensions;
using EfficientDynamoDb.Internal.Constants;

namespace EfficientDynamoDb.Internal.Converters.Primitives
{
    internal sealed class DateTimeDdbConverter : DdbConverter<DateTime>
    {
        public override DateTime Read(in AttributeValue attributeValue)
        {
            return DateTime.ParseExact(attributeValue.AsString(), "O", CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);
        }

        public override AttributeValue Write(ref DateTime value) => new StringAttributeValue(value.ToString("O"));

        public override void Write(Utf8JsonWriter writer, string attributeName, ref DateTime value)
        {
            writer.WritePropertyName(attributeName);
            
            writer.WriteStartObject();
            writer.WriteIso8601DateTime(DdbTypeNames.String, value);
            writer.WriteEndObject();
        }
    }
}