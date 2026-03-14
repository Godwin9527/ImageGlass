import { ITool } from '@/@types/FrmSettings';
export declare class ToolDialogHtmlElement extends HTMLDialogElement {
    constructor();
    private connectedCallback;
    /**
     * Opens tool dialog for create.
     */
    openCreate(): Promise<boolean>;
    /**
     * Opens tool dialog for edit.
     * @param toolId Tool ID
     */
    openEdit(toolId: string): Promise<boolean>;
    /**
     * Gets data from the tool dialog.
     */
    getDialogData(): ITool;
    private addDialogEvents;
    private updateToolCommandPreview;
    private handleBtnBrowseToolClickEvent;
}
/**
 * Creates and registers ToolDialogHtmlElement to DOM.
 */
export declare const defineToolDialogHtmlElement: () => void;
