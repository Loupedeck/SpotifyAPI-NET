(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(186)),i={id:"implicit_grant",title:"Implicit Grant",sidebar_label:"Implicit Grant"},c={id:"version-5.1.1/auth/implicit_grant",title:"Implicit Grant",description:"This way is recommended and the only auth-process which does not need a server-side exchange of keys. With this approach, you directly get a Token object after the user authed your application.",source:"@site/versioned_docs/version-5.1.1/auth/implicit_grant.md",permalink:"/SpotifyAPI-NET/docs/auth/implicit_grant",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/auth/implicit_grant.md",version:"5.1.1",lastUpdatedBy:"Iztral",lastUpdatedAt:1593529642,sidebar_label:"Implicit Grant",sidebar:"version-5.1.1/someSidebar",previous:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/auth/getting_started"},next:{title:"Authorization Code",permalink:"/SpotifyAPI-NET/docs/auth/authorization_code"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This way is ",Object(o.b)("strong",{parentName:"p"},"recommended"),' and the only auth-process which does not need a server-side exchange of keys. With this approach, you directly get a Token object after the user authed your application.\nYou won\'t be able to refresh the token. If you want to use the internal Http server, please add "http://localhost:YOURPORT" to your application redirect URIs.'),Object(o.b)("p",null,"More info: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow"}),"here")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'static async void Main(string[] args)\n{\n  ImplicitGrantAuth auth = new ImplicitGrantAuth(\n    _clientId,\n    "http://localhost:4002",\n    "http://localhost:4002",\n    Scope.UserReadPrivate\n  );\n  auth.AuthReceived += async (sender, payload) =>\n  {\n    auth.Stop(); // `sender` is also the auth instance\n    SpotifyWebAPI api = new SpotifyWebAPI()\n    {\n      TokenType = payload.TokenType,\n      AccessToken = payload.AccessToken\n    };\n    // Do requests with API client\n  };\n  auth.Start(); // Starts an internal HTTP Server\n  auth.OpenBrowser();\n}\n')))}l.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,f=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?a.a.createElement(f,c({ref:t},s,{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);