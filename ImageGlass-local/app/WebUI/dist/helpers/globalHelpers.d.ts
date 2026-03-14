import { WebviewEventHandlerFn } from './webview';
/**
 * Gets the first matched element with the query selector.
 */
export declare const query: <T = HTMLElement>(selector: string, parentEl?: HTMLElement, hideWarning?: boolean) => T | null;
/**
 * Gets all matched elements with the query selector.
 */
export declare const queryAll: <T = HTMLElement>(selector: string, parentEl?: HTMLElement, hideWarning?: boolean) => T[];
/**
 * Add event listerner from backend.
 * @param name Event name
 * @param handler Function to handle the event
 */
export declare const on: (name: string, handler: WebviewEventHandlerFn) => void;
/**
 * Send an event to backend.
 * @param name Event name.
 * @param data Data to send to backend, it will be converted to JSON string.
 * @param convertToJson Converts {@link data} to JSON. Default value is `false`.
 */
export declare const post: (name: string, data?: any, convertToJson?: boolean) => void;
/**
 * Send an event to backend and wait for the returned data.
 * @param name Event name
 * @param data Data to send to backend, it will be converted to JSON string.
 * @param convertToJson Converts {@link data} to JSON. Default value is `false`.
 */
export declare const postAsync: <T = unknown>(name: string, data?: any, convertToJson?: boolean) => Promise<T>;
