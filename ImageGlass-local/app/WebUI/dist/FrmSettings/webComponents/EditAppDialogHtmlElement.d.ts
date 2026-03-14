import { IEditApp } from '@/@types/FrmSettings';
export declare class EditAppDialogHtmlElement extends HTMLDialogElement {
    constructor();
    private connectedCallback;
    /**
     * Opens EditApp dialog for create.
     */
    openCreate(): Promise<boolean>;
    /**
     * Opens EditApp dialog for edit.
     * @param extKey Extension key
     */
    openEdit(extKey: string): Promise<boolean>;
    /**
     * Gets data from the tool dialog.
     */
    getDialogData(): {
        extKey: string;
        app: IEditApp;
    };
    private addDialogEvents;
    private updateToolCommandPreview;
    private handleBtnBrowseAppClickEvent;
}
/**
 * Creates and registers EditAppDialogHtmlElement to DOM.
 */
export declare const defineEditAppDialogHtmlElement: () => void;
