/**
 * Pauses the thread for a period
 * @param time Duration to pause in millisecond
 * @param data Data to return after resuming
 * @returns a promise
 */
export declare const pause: <T>(time: number, data?: T) => Promise<T>;
/**
 * Gets the settings that are changed by user (`_pageSettings.config`) from the input tab.
 */
export declare const getChangedSettingsFromTab: (tab: string) => Record<string, any>;
/**
 * Escapes HTML characters.
 */
export declare const escapeHtml: (html: string) => string;
/**
 * Creates tagged template function.
 * @example
 * ```ts
 * const imgTemplate = taggedTemplate`<img src="${'src'}" alt="${'alt'}" />`;
 * const html = imgTemplate({
 *    src: 'https://imageglass.org/photo.jpg',
 *    alt: 'Photo from imageglass.org',
 * });
 * ```
 * which is compiled as:
 * ```html
 * <img src="https://imageglass.org/photo.jpg" alt="Photo from imageglass.org" />
 * ```
 */
export declare const taggedTemplate: <T = Record<string, any>>(strings: TemplateStringsArray, ...keys: string[]) => (data: T) => string;
/**
 * Moves the item to the new position in the input array.
 * Useful for huge arrays where absolute performance is needed.
 * @param array - The array to modify.
 * @param fromIndex - The index of the item to move. If negative, it will begin that many elements from the end.
 * @param toIndex - The index of where to move the item. If negative, it will begin that many elements from the end.
 * @example
 *  ```ts
 *  const input = ['a', 'b', 'c'];
 *  arrayMoveMutable(input, 1, 2);
 *
 *  console.log(input); // => ['a', 'c', 'b']
 *  ```
 */
export declare const arrayMoveMutable: (array: Array<any>, fromIndex: number, toIndex: number) => void;
/**
 * Opens modal dialog.
 * It returns `true` if the dialog form is submitted, otherwise `false`.
 * @param dialogEl Dialog HTML element.
 * @param data The data to pass to the dialog.
 */
export declare const openModalDialogEl: (dialogEl: HTMLDialogElement, purpose: "create" | "edit", data?: Record<string, any>, onOpen?: (el: HTMLDialogElement) => any, onSubmit?: (e: SubmitEvent) => boolean | Promise<boolean>) => Promise<boolean>;
/**
 * Opens modal dialog.
 * It returns `true` if the dialog form is submitted, otherwise `false`.
 * @param selector Dialog selector.
 * @param data The data to pass to the dialog.
 */
export declare const openModalDialog: (selector: string, purpose: "create" | "edit", data?: Record<string, any>, onOpen?: (el: HTMLDialogElement) => any, onSubmit?: (e: SubmitEvent) => boolean | Promise<boolean>) => Promise<boolean>;
/**
 * Open file picker.
 */
export declare const openFilePicker: (options?: {
    multiple?: boolean;
    filter?: string;
}) => Promise<string[]>;
/**
 * Open hotkey picker.
 */
export declare const openHotkeyPicker: () => Promise<string | null>;
/**
 * Renders hotkey list
 * @param ulEl The list HTML element
 * @param hotkeys Hotkey list to render
 */
export declare const renderHotkeyListEl: (ulEl: HTMLUListElement, hotkeys: string[], onChange?: (action: "delete" | "add") => any) => Promise<void>;
/**
 * Renders hotkey list
 * @param ulSelector CSS selector of the list element
 * @param hotkeys Hotkey list to render
 */
export declare const renderHotkeyList: (ulSelector: string, hotkeys: string[], onChange?: (action: "delete" | "add") => any) => Promise<void>;
