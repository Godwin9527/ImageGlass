export default class TabFileAssocs {
    #private;
    static _areFileFormatsChanged: boolean;
    /**
     * Loads settings for tab FileAssocs.
     */
    static loadSettings(): void;
    /**
     * Adds events for tab FileAssocs.
     */
    static addEvents(): void;
    /**
     * Save settings as JSON object.
     */
    static exportSettings(): Record<string, any>;
    private static onBtn_OpenExtIconFolderClicked;
    private static onBtn_MakeDefaultViewerClicked;
    private static onBtn_RemoveDefaultViewerClicked;
    private static onLnk_OpenDefaultAppsSettingClicked;
    private static onBtn_ResetFileFormatsClicked;
    private static loadFileFormatList;
    private static openFileFormatDialog;
    private static addNewFileFormat;
    private static getFileFormatListFromDom;
}
