import { IHapplaBoxOptions, PanDirection, ZoomMode } from './happlajs/HapplaBoxTypes';
export declare class HapplaBoxHTMLElement extends HTMLElement {
    #private;
    constructor();
    get options(): IHapplaBoxOptions;
    private disconnectedCallback;
    private createTemplate;
    initialize(options?: IHapplaBoxOptions): void;
    loadImage(url: string, zoomMode?: ZoomMode, zoomLockFactor?: number, dirPath?: string): Promise<void>;
    loadHtml(html: string, zoomMode?: ZoomMode, zoomLockFactor?: number, dirPath?: string): Promise<void>;
    setZoomMode(mode?: ZoomMode, zoomLockFactor?: number, duration?: number): Promise<void>;
    setZoomFactor(zoomFactor: number, isManualZoom: boolean, zoomDelta?: number, duration?: number): Promise<void>;
    startPanningAnimation(direction: PanDirection, speed: number): Promise<void>;
    startZoomingAnimation(isZoomOut: boolean, speed: number): Promise<void>;
    stopAnimations(): void;
    focus(): void;
}
/**
 * Creates and registers HapplaBoxHTMLElement to DOM.
 */
export declare const defineHapplaBoxHTMLElement: () => void;
