/*
ImageGlass Project - Image viewer for Windows
Copyright (C) 2010 - 2026 DUONG DIEU PHAP
Project homepage: https://imageglass.org

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
using System.Runtime.InteropServices;

namespace ImageGlass.Base.WinApi;

public static class FileShortcutApi
{
    public enum ShortcutWindowStyle
    {
        Normal = 4,
        Maximized = 3,
        Minimized = 7,
    }

    // COM CLSIDs and IIDs for IShellLink
    private static readonly Guid CLSID_ShellLink = new("00021401-0000-0000-C000-000000000046");
    private static readonly Guid IID_IShellLinkW = new("000214F9-0000-0000-C000-000000000046");

    [ComImport]
    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    [Guid("000214F9-0000-0000-C000-000000000046")]
    private interface IShellLinkW
    {
        void GetPath([Out, MarshalAs(UnmanagedType.LPWStr)] System.Text.StringBuilder pszFile, int cch, IntPtr pfd, uint fFlags);
        void GetIDList(out IntPtr ppidl);
        void SetIDList(IntPtr pidl);
        void GetDescription([Out, MarshalAs(UnmanagedType.LPWStr)] System.Text.StringBuilder pszName, int cch);
        void SetDescription([MarshalAs(UnmanagedType.LPWStr)] string pszName);
        void GetWorkingDirectory([Out, MarshalAs(UnmanagedType.LPWStr)] System.Text.StringBuilder pszDir, int cch);
        void SetWorkingDirectory([MarshalAs(UnmanagedType.LPWStr)] string pszDir);
        void GetArguments([Out, MarshalAs(UnmanagedType.LPWStr)] System.Text.StringBuilder pszArgs, int cch);
        void SetArguments([MarshalAs(UnmanagedType.LPWStr)] string pszArgs);
        void GetHotkey(out ushort pwHotkey);
        void SetHotkey(ushort wHotkey);
        void GetShowCmd(out int piShowCmd);
        void SetShowCmd(int iShowCmd);
        void GetIconLocation([Out, MarshalAs(UnmanagedType.LPWStr)] System.Text.StringBuilder pszIconPath, int cch, out int piIcon);
        void SetIconLocation([MarshalAs(UnmanagedType.LPWStr)] string pszIconPath, int iIcon);
        void SetRelativePath([MarshalAs(UnmanagedType.LPWStr)] string pszPathRel, uint dwReserved);
        void Resolve(IntPtr hwnd, uint fFlags);
        void SetPath([MarshalAs(UnmanagedType.LPWStr)] string pszFile);
    }

    [ComImport]
    [Guid("0000010b-0000-0000-C000-000000000046")]
    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    private interface IPersistFile
    {
        void GetClassID(out Guid pClassID);
        [PreserveSig] int IsDirty();
        void Load([MarshalAs(UnmanagedType.LPWStr)] string pszFileName, uint dwMode);
        void Save([MarshalAs(UnmanagedType.LPWStr)] string pszFileName, [MarshalAs(UnmanagedType.Bool)] bool fRemember);
        void SaveCompleted([MarshalAs(UnmanagedType.LPWStr)] string pszFileName);
        void GetCurFile([MarshalAs(UnmanagedType.LPWStr)] out string ppszFileName);
    }


    /// <summary>
    /// Get the target path from shortcut (*.lnk)
    /// </summary>
    public static string GetTargetPathFromShortcut(string shortcutPath)
    {
        try
        {
            var shellLink = (IShellLinkW)Activator.CreateInstance(Type.GetTypeFromCLSID(CLSID_ShellLink)!)!;
            var persistFile = (IPersistFile)shellLink;
            persistFile.Load(shortcutPath, 0);

            var sb = new System.Text.StringBuilder(260);
            shellLink.GetPath(sb, sb.Capacity, IntPtr.Zero, 0);

            return sb.ToString();
        }
        catch
        {
            return "";
        }
    }


    /// <summary>
    /// Create shortcut file
    /// </summary>
    public static void CreateShortcut(string shortcutPath,
        string targetPath,
        string args = "",
        ShortcutWindowStyle windowStyle = ShortcutWindowStyle.Normal)
    {
        try
        {
            var shellLink = (IShellLinkW)Activator.CreateInstance(Type.GetTypeFromCLSID(CLSID_ShellLink)!)!;
            shellLink.SetPath(targetPath);
            shellLink.SetIconLocation(targetPath, 0);
            shellLink.SetArguments(args);
            shellLink.SetShowCmd((int)windowStyle);

            var persistFile = (IPersistFile)shellLink;
            persistFile.Save(shortcutPath, true);
        }
        catch { }
    }
}
