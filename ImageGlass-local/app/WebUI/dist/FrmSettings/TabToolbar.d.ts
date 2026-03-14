export default class TabToolbar {
    #private;
    /**
     * Gets current selected theme.
     */
    static get currentTheme(): import("@/@types/FrmSettings").ITheme;
    /**
     * Loads settings for tab Toolbar.
     */
    static loadSettings(): void;
    /**
     * Adds events for tab Toolbar.
     */
    static addEvents(): void;
    /**
     * Save settings as JSON object.
     */
    static exportSettings(): Record<string, any>;
    private static onBtnResetToolbarButtonsClick;
    private static onBtnAddCustomToolbarButtonClick;
    private static onEditToolbarButton;
}
