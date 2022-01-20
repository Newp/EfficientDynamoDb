(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{121:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(121)),o={id:"design",title:"Design Principles",sidebar_label:"Design Principles",slug:"../design"},c={unversionedId:"efficient_dynamo_db/design",id:"efficient_dynamo_db/design",isDocsHomePage:!1,title:"Design Principles",description:"EfficientDynamoDb is built with performance and scalability in mind. Our main goals are:",source:"@site/docs/efficient_dynamo_db/design.md",slug:"/design",permalink:"/EfficientDynamoDb/docs/design",editUrl:"https://github.com/alloczero/EfficientDynamoDb/edit/master/website/docs/efficient_dynamo_db/design.md",version:"current",sidebar_label:"Design Principles",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/EfficientDynamoDb/docs/"},next:{title:"Accessing the API",permalink:"/EfficientDynamoDb/docs/dev-guide/setup"}},l=[{value:"Raw Performance",id:"raw-performance",children:[]},{value:"RAM Usage and GC Pressure",id:"ram-usage-and-gc-pressure",children:[]},{value:"Benchmarks",id:"benchmarks",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"EfficientDynamoDb")," is built with performance and scalability in mind. Our main goals are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reducing CPU cycles required to parse and serialize DynamoDB JSON."),Object(i.b)("li",{parentName:"ul"},"Reducing memory consumed by typical operations.")),Object(i.b)("h2",{id:"raw-performance"},"Raw Performance"),Object(i.b)("p",null,"Major design decisions that significantly improve performance:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Direct DynamoDB JSON conversion to C# objects without intermediate entities."),Object(i.b)("li",{parentName:"ol"},"Custom low-level ",Object(i.b)("inlineCode",{parentName:"li"},"System.Text.Json")," serializer and deserializer thoroughly tuned for DynamoDB syntax."),Object(i.b)("li",{parentName:"ol"},"Using high-performance low-level C# features like spans, ref structs, stackallocs even for non-critical code paths.")),Object(i.b)("h2",{id:"ram-usage-and-gc-pressure"},"RAM Usage and GC Pressure"),Object(i.b)("p",null,"Allocations are slow. GC collections are slow.\nWe mitigate both issues by keeping allocations count as low as possible."),Object(i.b)("p",null,"Preeminent solutions that help with memory pressure:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Excessive use of array pools for large arrays."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"stackalloc")," for small arrays when applicable."),Object(i.b)("li",{parentName:"ol"},'Immutable fluent API is specifically designed to allocate only set properties instead of having a single "god object."'),Object(i.b)("li",{parentName:"ol"},"Not reading redundant info from DDB responses, e.g., repeated data types and attribute names.")),Object(i.b)("h2",{id:"benchmarks"},"Benchmarks"),Object(i.b)("p",null,"Data must back every performance decision.\nBenchmarking is the only way to tell which solution is faster in a given context."),Object(i.b)("p",null,"We use the superb ",Object(i.b)("a",{parentName:"p",href:"https://github.com/dotnet/BenchmarkDotNet"},"BenchmarkDotNet")," to ensure that performance improves with every new version."))}p.isMDXComponent=!0}}]);