export declare class FileFormatDialogHtmlElement extends HTMLDialogElement {
    constructor();
    private connectedCallback;
    /**
     * Opens file format dialog for create.
     */
    openCreate(): Promise<boolean>;
    /**
     * Gets data from the tool dialog.
     */
    getDialogData(): string;
}
/**
 * Creates and registers FileFormatDialogHtmlElement to DOM.
 */
export declare const defineFileFormatDialogHtmlElement: () => void;
