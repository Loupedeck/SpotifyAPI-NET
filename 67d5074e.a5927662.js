(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return o}));var r=a(2),l=a(9),b=(a(0),a(186)),i={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},c={id:"version-5.1.1/web/getting_started",title:"Getting Started",description:"This API provides full access to the new SpotifyWebAPI introduced here.",source:"@site/versioned_docs/version-5.1.1/web/getting_started.md",permalink:"/SpotifyAPI-NET/docs/web/getting_started",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/getting_started.md",version:"5.1.1",lastUpdatedBy:"Iztral",lastUpdatedAt:1593529642,sidebar_label:"Getting Started",sidebar:"version-5.1.1/someSidebar",previous:{title:"SpotifyAPI-NET",permalink:"/SpotifyAPI-NET/docs/home"},next:{title:"Albums",permalink:"/SpotifyAPI-NET/docs/web/albums"}},s=[{value:"First steps",id:"first-steps",children:[{value:"Imports",id:"imports",children:[]},{value:"Basic-Usage",id:"basic-usage",children:[]}]},{value:"Error-Handling",id:"error-handling",children:[]},{value:"Sync vs Asynchronous",id:"sync-vs-asynchronous",children:[]},{value:"API-Reference",id:"api-reference",children:[{value:"Albums",id:"albums",children:[]},{value:"Artists",id:"artists",children:[]},{value:"Browse",id:"browse",children:[]},{value:"Follow",id:"follow",children:[]},{value:"Library",id:"library",children:[]},{value:"Personalization",id:"personalization",children:[]},{value:"Player",id:"player",children:[]},{value:"Playlists",id:"playlists",children:[]},{value:"Profiles",id:"profiles",children:[]},{value:"Search",id:"search",children:[]},{value:"Tracks",id:"tracks",children:[]},{value:"Util",id:"util",children:[]}]}],n={rightToc:s};function o(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},n,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This API provides full access to the new SpotifyWebAPI introduced ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/"}),"here"),".\nWith it, you can search for Tracks/Albums/Artists and also get User-based information.\nIt's also possible to create new playlists and add tracks to it."),Object(b.b)("h2",{id:"first-steps"},"First steps"),Object(b.b)("h3",{id:"imports"},"Imports"),Object(b.b)("p",null,"So after you added the API to your project, you may want to add following imports to your files:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"using SpotifyAPI.Web; //Base Namespace\nusing SpotifyAPI.Web.Enums; //Enums\nusing SpotifyAPI.Web.Models; //Models for the JSON-responses\n")),Object(b.b)("h3",{id:"basic-usage"},"Basic-Usage"),Object(b.b)("p",null,"Now you can actually start doing calls to the SpotifyAPI, just create a new Instance of SpotifyWebAPI:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'private static SpotifyWebAPI _spotify;\n\npublic static void Main(String[] args)\n{\n    _spotify = new SpotifyWebAPI()\n    {\n        AccessToken = "XXXXXXXXXXXX",\n        TokenType = "Bearer"\n    }\n    FullTrack track = _spotify.GetTrack("3Hvu1pq89D4R0lyPBoujSv");\n    Console.WriteLine(track.Name); //Yeay! We just printed a tracks name.\n}\n')),Object(b.b)("p",null,"You may note that we used ",Object(b.b)("inlineCode",{parentName:"p"},"AccessToken")," and ",Object(b.b)("inlineCode",{parentName:"p"},"TokenType"),". Spotify does not allow un-authorized access to their API. You will need to implement one of the auth flows. Luckily, ",Object(b.b)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," exists for this reason. A simple way to receive a ",Object(b.b)("inlineCode",{parentName:"p"},"AccessToken")," is via ",Object(b.b)("inlineCode",{parentName:"p"},"CredentialAuth"),":"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'CredentialsAuth auth = new CredentialsAuth("YourClientID", "YourClientSecret");\nToken token = await auth.GetToken();\n_spotify = new SpotifyWebAPI()\n{\n  AccessToken = token.AccessToken,\n  TokenType = token.TokenType\n}\n')),Object(b.b)("p",null,"For more info, visit the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/auth/getting_started/"}),"Getting Started of SpotifyAPI.Web.Auth")),Object(b.b)("h2",{id:"error-handling"},"Error-Handling"),Object(b.b)("p",null,"Every API-Call returns a reponse-model which consists of base-error model. To check if a specific API-Call was successful, use the following approach:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'PrivateProfile profile = _spotify.GetPrivateProfile();\nif (profile.HasError())\n{\n  Console.WriteLine("Error Status: " + profile.Error.Status);\n  Console.WriteLine("Error Msg: " + profile.Error.Message);\n}\n')),Object(b.b)("p",null,"In case some or all of the returned values are null, consult error status and message, they can lead to an explanation!"),Object(b.b)("h2",{id:"sync-vs-asynchronous"},"Sync vs Asynchronous"),Object(b.b)("p",null,"Every API-Call has an ",Object(b.b)("inlineCode",{parentName:"p"},"asynchronous")," and ",Object(b.b)("inlineCode",{parentName:"p"},"synchronous")," method."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"public async void Test()\n{\n  var asyncProfile = await _spotify.GetPrivateProfileAsync();\n  var syncProfile = _spotify.GetPrivateProfile();\n}\n")),Object(b.b)("p",null,"Note that the ",Object(b.b)("inlineCode",{parentName:"p"},"synchronous")," call will block the current Thread!"),Object(b.b)("h2",{id:"api-reference"},"API-Reference"),Object(b.b)("h3",{id:"albums"},"Albums"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/albums#getalbumtracks"}),"GetAlbumTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/albums#getalbum"}),"GetAlbum")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/albums#getseveralalbums"}),"GetSeveralAlbums"))),Object(b.b)("h3",{id:"artists"},"Artists"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/artists#getartist"}),"GetArtist")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/artists#getrelatedartists"}),"GetRelatedArtists")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/artists#getartiststoptracks"}),"GetArtistsTopTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/artists#getartistsalbums"}),"GetArtistsAlbums")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/artists#getseveralartists"}),"GetSeveralArtists"))),Object(b.b)("h3",{id:"browse"},"Browse"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/browse#getfeaturedplaylists"}),"GetFeaturedPlaylists")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/browse#getnewalbumreleases"}),"GetNewAlbumReleases")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/browse#getcategories"}),"GetCategories")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/browse#getcategory"}),"GetCategory")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/browse#getcategoryplaylists"}),"GetCategoryPlaylists"))),Object(b.b)("h3",{id:"follow"},"Follow"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/follow#follow"}),"Follow")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/follow#unfollow"}),"Unfollow")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/follow#isfollowing"}),"IsFollowing")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/follow#followplaylist"}),"FollowPlaylist")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/follow#unfollowplaylist"}),"UnfollowPlaylist")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/follow#isfollowingplaylist"}),"IsFollowingPlaylist"))),Object(b.b)("h3",{id:"library"},"Library"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#savetracks"}),"SaveTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#savetrack"}),"SaveTrack")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#getsavedtracks"}),"GetSavedTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#removesavedtracks"}),"RemoveSavedTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#checksavedtracks"}),"CheckSavedTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#savealbums"}),"SaveAlbums")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#savealbum"}),"SaveAlbum")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#getsavedalbums"}),"GetSavedAlbums")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#removesavedalbums"}),"RemoveSavedAlbums")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/library#checksavedalbums"}),"CheckSavedAlbums"))),Object(b.b)("h3",{id:"personalization"},"Personalization"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/personalization#getuserstoptracks"}),"GetUsersTopTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/personalization#getuserstopartists"}),"GetUsersTopArtists")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/personalization#getusersrecentlyplayedtracks"}),"GetUsersRecentlyPlayedTracks"))),Object(b.b)("h3",{id:"player"},"Player"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#getdevices"}),"GetDevices")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#getplayback"}),"GetPlayback")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#getplayingtrack"}),"GetPlayingTrack")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#transferplayback"}),"TransferPlayback")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#resumeplayback"}),"ResumePlayback")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#pauseplayback"}),"PausePlayback")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#skipplaybacktonext"}),"SkipPlaybackToNext")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#skipplaybacktoprevious"}),"SkipPlaybackToPrevious")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#setrepeatmode"}),"SetRepeatMode")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#setvolume"}),"SetVolume")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/player#setshuffle"}),"SetShuffle"))),Object(b.b)("h3",{id:"playlists"},"Playlists"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#getuserplaylists"}),"GetUserPlaylists")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#getplaylist"}),"GetPlaylist")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#getplaylisttracks"}),"GetPlaylistTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#createplaylist"}),"CreatePlaylist")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#updateplaylist"}),"UpdatePlaylist")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#replaceplaylisttracks"}),"ReplacePlaylistTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#removeplaylisttracks"}),"RemovePlaylistTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#removeplaylisttrack"}),"RemovePlaylistTrack")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#addplaylisttracks"}),"AddPlaylistTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#addplaylisttrack"}),"AddPlaylistTrack")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/playlists#reorderplaylist"}),"ReorderPlaylist"))),Object(b.b)("h3",{id:"profiles"},"Profiles"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/profiles#getpublicprofile"}),"GetPublicProfile")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/profiles#getprivateprofile"}),"GetPrivateProfile"))),Object(b.b)("h3",{id:"search"},"Search"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/search#searchitems"}),"SearchItems")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/search#searchitemsescaped"}),"SearchItemsEscaped"))),Object(b.b)("h3",{id:"tracks"},"Tracks"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/tracks#getseveraltracks"}),"GetSeveralTracks")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/tracks#gettrack"}),"GetTrack")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/SpotifyAPI-NET/docs/web/tracks#getaudioanalysis"}),"GetAudioAnalysis"))),Object(b.b)("h3",{id:"util"},"Util"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/web/utils.md"}),"Utility-Functions"))))}o.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var r=a(0),l=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var n=l.a.createContext({}),o=function(e){var t=l.a.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=o(e.components);return l.a.createElement(n.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,n=s(e,["components","mdxType","originalType","parentName"]),p=o(a),O=r,j=p["".concat(i,".").concat(O)]||p[O]||u[O]||b;return a?l.a.createElement(j,c({ref:t},n,{components:a})):l.a.createElement(j,c({ref:t},n))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var n=2;n<b;n++)i[n]=a[n];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);