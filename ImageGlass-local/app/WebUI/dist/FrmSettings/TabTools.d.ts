export default class TabTools {
    #private;
    static HOTKEY_SEPARATOR: string;
    static _areToolsChanged: boolean;
    /**
     * Loads settings for tab Tools.
     */
    static loadSettings(): void;
    /**
     * Adds events for tab Tools.
     */
    static addEvents(): void;
    /**
     * Save settings as JSON object.
     */
    static exportSettings(): Record<string, any>;
    /**
     * Loads tool list but do not update `_pageSettings.toolList`.
     */
    private static loadToolList;
    /**
     * Gets tool list from DOM.
     */
    private static getToolListFromDom;
    /**
     * Open tool dialog for create or edit.
     */
    private static openToolDialog;
    /**
     * Sets the tool item to the list.
     * @param oldToolId If not found, the tool will be inserted into the list.
     */
    private static setToolItemToList;
}
