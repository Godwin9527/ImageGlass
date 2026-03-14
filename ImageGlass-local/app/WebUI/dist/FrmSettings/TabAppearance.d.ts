import { ITheme } from '@/@types/FrmSettings';
export default class TabAppearance {
    /**
     * Gets current selected theme.
     */
    static get currentTheme(): ITheme;
    /**
     * Loads settings for tab Appearance.
     */
    static loadSettings(): void;
    /**
     * Loads theme list check status
     */
    static loadThemeListStatus(): void;
    /**
     * Adds events for tab Appearance.
     */
    static addEvents(): void;
    /**
     * Save settings as JSON object.
     */
    static exportSettings(): Record<string, any>;
    /**
     * Updates `_pageSettings.config.BackgroundColor` value and load UI.
     */
    static loadBackgroundColorConfig(hexColor: string): void;
    /**
     * Loads all themes into the list.
     */
    private static loadThemeList;
    /**
     * Resets the background color to the current theme's background color.
     */
    private static resetBackgroundColor;
    /**
     * Handles when `BackgroundColor` is changed.
     */
    private static handleBackgroundColorChanged;
    private static onBtn_BackgroundColor;
    private static onBtn_InstallTheme;
    private static onBtn_RefreshThemeList;
    private static onBtn_OpenThemeFolder;
}
