import { IToolbarButton } from '@/@types/FrmSettings';
export type TEditButtonFn = (btn: IToolbarButton) => Promise<IToolbarButton | null>;
export declare class ToolbarEditorHtmlElement extends HTMLElement {
    #private;
    constructor();
    get hasChanges(): boolean;
    get currentButtons(): IToolbarButton[];
    get builtInButtons(): IToolbarButton[];
    get availableButtons(): IToolbarButton[];
    private connectedCallback;
    /**
     * Initializes and loads data into the toolbar editor.
     */
    initialize(onEditButton: TEditButtonFn): void;
    private loadItems;
    loadItemsByIds(btnIds: string[]): void;
    insertItems(btn: IToolbarButton, toIndex: number): void;
    private reloadAvailableItems;
    private reloadCurrentItems;
    private isBuiltInButton;
    private onBtnToolbarDragStart;
    private onToolbarItemDragEnter;
    private onToolbarItemDragOver;
    private onToolbarItemDragLeave;
    private onToolbarItemDragEnd;
    private onToolbarItemDrop;
    private onToolbarActionButtonClicked;
    private moveToolbarButton;
    private deleteToolbarButton;
    private insertButtonFromAvailableList;
    private editToolbarButton;
}
/**
 * Creates and registers ToolbarEditorHtmlElement to DOM.
 */
export declare const defineToolbarEditorHtmlElement: () => void;
