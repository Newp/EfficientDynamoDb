(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(121)),o={id:"converters",title:"Converters",slug:"../dev-guide/high-level/converters"},l={unversionedId:"dev_guide/high_level/converters",id:"dev_guide/high_level/converters",isDocsHomePage:!1,title:"Converters",description:"A converter is a class that converts a .NET type to and from DynamoDB JSON or low-level Document object. A custom converter allows working with unsupported types or overriding the default converter behavior.",source:"@site/docs/dev_guide/high_level/converters.md",slug:"/dev_guide/dev-guide/high-level/converters",permalink:"/EfficientDynamoDb/docs/dev_guide/dev-guide/high-level/converters",editUrl:"https://github.com/alloczero/EfficientDynamoDb/edit/master/website/docs/dev_guide/high_level/converters.md",version:"current",sidebar:"someSidebar",previous:{title:"Transactions",permalink:"/EfficientDynamoDb/docs/dev_guide/dev-guide/high-level/transact"},next:{title:"Building Conditions",permalink:"/EfficientDynamoDb/docs/dev_guide/dev-guide/high-level/conditions"}},c=[{value:"Built-in converters",id:"built-in-converters",children:[]},{value:"Applying converters",id:"applying-converters",children:[{value:"For a property",id:"for-a-property",children:[]},{value:"For a type",id:"for-a-type",children:[]},{value:"For a context",id:"for-a-context",children:[]}]},{value:"Basic converter",id:"basic-converter",children:[]},{value:"Direct JSON converter",id:"direct-json-converter",children:[{value:"JSON reading",id:"json-reading",children:[]},{value:"JSON writing",id:"json-writing",children:[]}]},{value:"Sparse converters",id:"sparse-converters",children:[]},{value:"Set converters",id:"set-converters",children:[]},{value:"Dictionary key converters",id:"dictionary-key-converters",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A converter is a class that converts a .NET type to and from DynamoDB JSON or low-level ",Object(i.b)("inlineCode",{parentName:"p"},"Document")," object. A custom converter allows working with unsupported types or overriding the default converter behavior."),Object(i.b)("p",null,"Converters, along with with DynamoDB JSON parsing, are one of the most critical components from a performance perspective.\nAll ",Object(i.b)("strong",{parentName:"p"},"EfficientDynamoDb")," built-in converters are optimized separately for both ",Object(i.b)("inlineCode",{parentName:"p"},"Document")," and JSON conversion, in order to allocate no additional memory."),Object(i.b)("h2",{id:"built-in-converters"},"Built-in converters"),Object(i.b)("p",null,"EfficientDynamoDb does not require specifying a converter explicitly for the following built-in types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Classes "),Object(i.b)("li",{parentName:"ul"},"Strings"),Object(i.b)("li",{parentName:"ul"},"Numbers: ",Object(i.b)("inlineCode",{parentName:"li"},"byte"),", ",Object(i.b)("inlineCode",{parentName:"li"},"short"),", ",Object(i.b)("inlineCode",{parentName:"li"},"int"),", ",Object(i.b)("inlineCode",{parentName:"li"},"long"),", ",Object(i.b)("inlineCode",{parentName:"li"},"decimal"),", ",Object(i.b)("inlineCode",{parentName:"li"},"float"),", ",Object(i.b)("inlineCode",{parentName:"li"},"double"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ushort"),", ",Object(i.b)("inlineCode",{parentName:"li"},"uint"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ulong")),Object(i.b)("li",{parentName:"ul"},"Enums (saved as numbers)"),Object(i.b)("li",{parentName:"ul"},"DateTimes (saved in ISO8601 format)"),Object(i.b)("li",{parentName:"ul"},"Guids"),Object(i.b)("li",{parentName:"ul"},"Booleans"),Object(i.b)("li",{parentName:"ul"},"Collections: arrays, lists, dictionaries, sets (including their read-only and mutable interfaces)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AttributeValue")," structs (low-level API representation of the DynamoDB attribute)")),Object(i.b)("p",null,"In addition, you can use one of the following converters to change the default behavior:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringEnumDdbConverter<T>")," - saves enums as strings instead of numbers."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DateTimeDdbConverter")," - allows to customize ",Object(i.b)("inlineCode",{parentName:"li"},"DateTime")," formatting parameters: ",Object(i.b)("inlineCode",{parentName:"li"},"Format"),", ",Object(i.b)("inlineCode",{parentName:"li"},"DateTimeStyles")," and ",Object(i.b)("inlineCode",{parentName:"li"},"CultureInfo"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SdkDateTimeDdbConverter")," - makes ",Object(i.b)("inlineCode",{parentName:"li"},"DateTime")," behavior backward compatible with the official AWS SDK.")),Object(i.b)("h2",{id:"applying-converters"},"Applying converters"),Object(i.b)("h3",{id:"for-a-property"},"For a property"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'[DynamoDbProperty("address", typeof(CompositeAddressConverter))]\npublic Address Address { get; set; }\n')),Object(i.b)("h3",{id:"for-a-type"},"For a type"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"[DynamoDbConverter(typeof(CompositeAddressConverter))]\npublic struct Address { ... }\n")),Object(i.b)("h3",{id:"for-a-context"},"For a context"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"var config = new DynamoDbContextConfig(regionEndpoint, awsCredentials)\n{\n    Converters = new[] {new CompositeAddressConverter()}\n};\n")),Object(i.b)("p",null,"If a converter can't be instantiated in advance and depends on the target value type, a custom converter factory can be implemented by inheriting from the ",Object(i.b)("inlineCode",{parentName:"p"},"DdbConverterFactory")," class and registering it with the context the same way as other custom converters."),Object(i.b)("p",null,"For example, a string enum converter factory can be defined like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"public sealed class StringEnumDdbConverterFactory : DdbConverterFactory\n{\n    public override bool CanConvert(Type typeToConvert) => typeToConvert.IsEnum;\n\n    public override DdbConverter CreateConverter(Type typeToConvert, DynamoDbContextMetadata metadata)\n    {\n        return (DdbConverter) Activator.CreateInstance(typeof(StringEnumDdbConverter<>).MakeGenericType(typeToConvert));\n    }\n}\n")),Object(i.b)("h2",{id:"basic-converter"},"Basic converter"),Object(i.b)("p",null,"To create a custom converter:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Inherit from ",Object(i.b)("inlineCode",{parentName:"li"},"DdbConverter<TValue>")," class."),Object(i.b)("li",{parentName:"ul"},"Implement both ",Object(i.b)("inlineCode",{parentName:"li"},"Read")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Write")," methods.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"public class CompositeAddressConverter : DdbConverter<Address>\n{\n    // Converts DynamoDb attribute to the .NET type\n    public override Address Read(in AttributeValue attributeValue)\n    {\n        var parts = attributeValue.AsString().Split('#');\n        return new Address(parts[0], parts[1]);\n    }\n\n    // Converts .NET type to the DynamoDb attribute\n    public override AttributeValue Write(ref Address address)\n    {\n        return new StringAttributeValue($\"{address.Country}#{address.Street}\");\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Check out the ",Object(i.b)("a",{parentName:"em",href:"/EfficientDynamoDb/docs/dev-guide/low-level#working-with-documents"},"working with documents")," chapter to better understand how to work with attribute values.")),Object(i.b)("h2",{id:"direct-json-converter"},"Direct JSON converter"),Object(i.b)("p",null,"Not all .NET types map nicely to DynamoDb attributes. Creation of intermediate ",Object(i.b)("inlineCode",{parentName:"p"},"AttributeValue")," struct can involve unnecessary allocations that can be avoided by reading/writing directly into JSON buffer.\nIn case when a custom type can't be converted to the ",Object(i.b)("inlineCode",{parentName:"p"},"AttributeValue")," without allocations, it is possible to implement two additional low-level ",Object(i.b)("inlineCode",{parentName:"p"},"Read")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Write")," methods that work with JSON buffers.\nDuring deserialization/serialization of entities to JSON, more optimized low-level implementations will be called."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"public class CustomIntConverter : DdbConverter<int>\n{\n    // Efficient zero-allocation JSON to int conversion\n    public override int Read(ref DdbReader reader)\n    {\n        if (!Utf8Parser.TryParse(reader.JsonReader.ValueSpan, out int value, out _))\n            throw new DdbException($\"Couldn't parse int ddb value from '{reader.JsonReaderValue.GetString()}'.\");\n\n        return value;\n    }\n    \n    // Efficient zero-allocation int to JSON conversion\n    public override void Write(in DdbWriter writer, ref int value)\n    {\n         writer.JsonWriter.WriteStartObject();\n         writer.JsonWriter.WriteString(DdbTypeNames.Number, value);\n         writer.JsonWriter.WriteEndObject();\n    }\n    \n    public override int Read(in AttributeValue attributeValue) => attributeValue.AsNumberAttribute().ToInt();\n    \n    public override AttributeValue Write(ref T value) => new NumberAttributeValue(value.ToString());   \n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"EfficientDynamoDb")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"System.Text.Json")," for all JSON manipulations."),Object(i.b)("h3",{id:"json-reading"},"JSON reading"),Object(i.b)("p",null,"When a low-level read is called, ",Object(i.b)("inlineCode",{parentName:"p"},"DdbReader.JsonReader")," is already pointed to the JSON value. Current attribute type is automatically parsed and can be accessed using ",Object(i.b)("inlineCode",{parentName:"p"},"DdbReader.AttributeType")," property."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"DdbReader.JsonReader.Read")," method should not be explicitly called unless you are writing a converter for a non-primitive JSON type like an object or array."),Object(i.b)("h3",{id:"json-writing"},"JSON writing"),Object(i.b)("p",null,"When a low-level write is called, a converter has to write DynamoDb JSON, including the attribute type.\n",Object(i.b)("inlineCode",{parentName:"p"},"DdbWriter")," class provides various simplified overloads that write attribute types automatically. But in case if suitable overload does not exist, the attribute type has to be written manually like in the ",Object(i.b)("inlineCode",{parentName:"p"},"CustomIntConverter")," example above."),Object(i.b)("h2",{id:"sparse-converters"},"Sparse converters"),Object(i.b)("p",null,"Sparse converters don't save certain values and completely remove an attribute instead. It is a powerful concept that can be used for various purposes like size savings or to conditionally include an entity in the GSI."),Object(i.b)("p",null,"By default, all built-in converters act as sparse converters when it comes to handling ",Object(i.b)("inlineCode",{parentName:"p"},"null")," values, meaning that ",Object(i.b)("inlineCode",{parentName:"p"},"null")," properties are never saved and the entire attribute is deleted."),Object(i.b)("p",null,"To add an additional sparse condition, ",Object(i.b)("inlineCode",{parentName:"p"},"ShouldWrite")," method has to be overridden. For example. here is a simple sparse int converter:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"public class SparseIntConverter : DdbConverter<int>\n{\n    public override bool ShouldWrite(ref int value) => value != 0;\n    \n    ...\n}\n")),Object(i.b)("p",null,"Note: Sparse converters don't remove attributes when they are part of a ",Object(i.b)("inlineCode",{parentName:"p"},"Dictionary")," class."),Object(i.b)("h2",{id:"set-converters"},"Set converters"),Object(i.b)("p",null,"Both string and number sets store values as strings in the DB.\nTo store a custom type inside a set, a converter should implement the ",Object(i.b)("inlineCode",{parentName:"p"},"ISetValueConverter<T>")," interface:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"public class CustomDdbConverter : DdbConverter<CustomType>, ISetValueConverter<CustomType>\n{\n    public string WriteStringValue(ref CustomType value) => value.ToString();\n    \n    // Optionally implement direct write method\n    public void WriteStringValue(in DdbWriter ddbWriter, ref CustomType value) => \n        ddbWriter.JsonWriter.WriteStringValue(value.AsSpan());\n}\n")),Object(i.b)("h2",{id:"dictionary-key-converters"},"Dictionary key converters"),Object(i.b)("p",null,"To store a custom type as a dictionary key, a converter should implement the ",Object(i.b)("inlineCode",{parentName:"p"},"IDicitonaryKeyConverter<T>")," interface:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"public class CustomDdbConverter : DdbConverter<CustomType>, ISetValueConverter<CustomType>\n{\n    public string WriteStringValue(ref CustomType value) => value.ToString();\n    \n    // Optionally implement direct write method\n    public void WritePropertyName(in DdbWriter ddbWriter, ref CustomType value) => \n        ddbWriter.JsonWriter.WritePropertyName(value.AsSpan());\n}\n")))}b.isMDXComponent=!0}}]);