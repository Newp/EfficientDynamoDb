(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(121)),o={id:"setup",title:"Accessing the API",slug:"../dev-guide/setup"},c={unversionedId:"dev_guide/setup",id:"dev_guide/setup",isDocsHomePage:!1,title:"Accessing the API",description:"Accessing both the low-level and high-level APIs is possible through an instance of DynamoDbContext.",source:"@site/docs/dev_guide/setup.md",slug:"/dev-guide/setup",permalink:"/EfficientDynamoDb/docs/dev-guide/setup",editUrl:"https://github.com/alloczero/EfficientDynamoDb/edit/master/website/docs/dev_guide/setup.md",version:"current",sidebar:"someSidebar",previous:{title:"Design Principles",permalink:"/EfficientDynamoDb/docs/design"},next:{title:"Attributes",permalink:"/EfficientDynamoDb/docs/dev_guide/dev-guide/high-level/attributes"}},s=[{value:"Credentials",id:"credentials",children:[{value:"Compatibility with the official .NET AWS SDK",id:"compatibility-with-the-official-net-aws-sdk",children:[]}]},{value:"Region",id:"region",children:[]},{value:"DynamoDbContextConfig",id:"dynamodbcontextconfig",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Accessing both the low-level and high-level APIs is possible through an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"DynamoDbContext"),".\nIts creation requires setting up credentials and a region.\nAdditionally, you can setup retry strategies, the table name prefix, and default converters."),Object(i.b)("h2",{id:"credentials"},"Credentials"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/AllocZero/EfficientDynamoDb/blob/master/src/EfficientDynamoDb/Configs/AwsCredentials.cs"},"AwsCredentials")," class is used to pass credentials to ",Object(i.b)("inlineCode",{parentName:"p"},"DynamoDbContext"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Important note:")," Never put your credentials as plain text in your code! Use some secure store instead."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var accessKey = Environment.GetEnvironmentVariable("accessKeyVariable");\nvar secretKey = Environment.GetEnvironmentVariable("secretKeyVariable");\n\nvar credentials = new AwsCredentials(accessKey, secretKey);\n')),Object(i.b)("p",null,"If you want to use token authentication, you can pass it to the ",Object(i.b)("inlineCode",{parentName:"p"},"AwsCredentials")," constructor as well:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var accessKey = Environment.GetEnvironmentVariable("accessKeyVariable");\nvar secretKey = Environment.GetEnvironmentVariable("secretKeyVariable");\nvar token = "YourToken";\n\nvar credentials = new AwsCredentials(accessKey, secretKey, token);\n')),Object(i.b)("h3",{id:"compatibility-with-the-official-net-aws-sdk"},"Compatibility with the official .NET AWS SDK"),Object(i.b)("p",null,"Refer to the ",Object(i.b)("a",{parentName:"p",href:"/EfficientDynamoDb/docs/dev-guide/sdk-compatibility#credentials"},"SDK credentials compatibility section")," for information about AWS SDK credential entities usage in EfficientDynamoDb."),Object(i.b)("h2",{id:"region"},"Region"),Object(i.b)("p",null,"AWS Region selection allows you to access DynamoDb in a specific geographic region.\nIt can be useful for redundancy and to keep your data and applications running close to where you and your users access them."),Object(i.b)("p",null,"There are static properties in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/AllocZero/EfficientDynamoDb/blob/master/src/EfficientDynamoDb/Context/Config/RegionEndpoint.cs"},"RegionEndpoint")," class for each available region. For the full list of supported regions check ",Object(i.b)("a",{parentName:"p",href:"/EfficientDynamoDb/docs/api-reference/region-endpoint"},"RegionEndpoint reference"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"var region = RegionEndpoint.USEast1;\n")),Object(i.b)("h2",{id:"dynamodbcontextconfig"},"DynamoDbContextConfig"),Object(i.b)("p",null,"You can create a ",Object(i.b)("inlineCode",{parentName:"p"},"DynamoDbContextConfig")," from the region and credentials explained in the previous steps."),Object(i.b)("p",null,"In the following example, it's assumed that the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials")," variable already exists and is initialized with your access and secret keys:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"var config = new DynamoDbContextConfig(RegionEndpoint.USEast1, credentials);\n")),Object(i.b)("p",null,"Optionally, you can set the table name prefix, HTTP client factory, and retry strategies:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var config = new DynamoDbContextConfig(RegionEndpoint.USEast1, credentials)\n{\n    TableNamePrefix = "your_prefix",\n    HttpClientFactory = yourFactory\n};\nconfig.RetryStrategies.ThrottlingStrategy = DefaultRetryStrategy.Instance;\n')),Object(i.b)("p",null,"For more info about retry strategies and possible options, check the ",Object(i.b)("a",{parentName:"p",href:"/EfficientDynamoDb/docs/dev-guide/retry-strategies"},"retry strategies page"),"."))}p.isMDXComponent=!0}}]);