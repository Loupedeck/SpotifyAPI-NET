using System;
using System.Diagnostics;

namespace SpotifyAPI.Web.Auth
{
    internal static class AuthUtil
    {
        public static void OpenBrowser(string url)
        {
            if (PlatformID.Win32NT == Environment.OSVersion.Platform)
            {
                Process.Start(url);
            }
            else if (PlatformID.Unix == Environment.OSVersion.Platform)
            {
                Process.Start("open", url);
            }
        }
    }
}
