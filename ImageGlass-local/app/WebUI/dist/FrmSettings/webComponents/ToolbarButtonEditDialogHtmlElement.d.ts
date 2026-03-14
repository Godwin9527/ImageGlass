import { IToolbarButton } from '@/@types/FrmSettings';
export declare class ToolbarButtonEditDialogHtmlElement extends HTMLDialogElement {
    constructor();
    private connectedCallback;
    /**
     * Opens tool dialog for create.
     */
    openCreate(): Promise<boolean>;
    /**
     * Opens tool dialog for edit.
     */
    openEdit(btn: IToolbarButton): Promise<boolean>;
    /**
     * Gets data from the tool dialog.
     */
    getDialogData(): {
        ButtonJson: string;
    };
}
/**
 * Creates and registers ToolbarButtonEditDialogHtmlElement to DOM.
 */
export declare const defineToolbarButtonEditDialogHtmlElement: () => void;
