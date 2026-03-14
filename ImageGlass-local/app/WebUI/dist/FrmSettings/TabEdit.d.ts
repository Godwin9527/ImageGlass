export default class TabEdit {
    #private;
    static _areEditAppsChanged: boolean;
    /**
     * Loads settings for tab Edit.
     */
    static loadSettings(): void;
    /**
     * Adds events for tab Edit.
     */
    static addEvents(): void;
    /**
     * Save settings as JSON object.
     */
    static exportSettings(): Record<string, any>;
    private static loadEditApps;
    private static getEditAppsFromDom;
    private static openEditAppDialog;
    /**
     * Sets the edit app to the list.
     * @param oldExtKey If not found, the app will be inserted into the list.
     */
    private static setEditAppToList;
}
