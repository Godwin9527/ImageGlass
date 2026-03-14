import { IHapplaBoxOptions, InterpolationMode, PanDirection, ZoomMode } from './HapplaBoxTypes';
import { DOMPadding } from './DOMPadding';
export declare class HapplaBox {
    #private;
    private boxEl;
    private boxContentEl;
    private domMatrix;
    private isPointerDown;
    private panningAnimationFrame;
    private zoomingAnimationFrame;
    private isPanning;
    private isZooming;
    /**
     * Initializes HapplaBox element.
     * @param boxEl Box element
     * @param boxContentEl Content element
     * @param options Options
     */
    constructor(boxEl: HTMLElement, boxContentEl: HTMLElement, options?: IHapplaBoxOptions);
    get options(): IHapplaBoxOptions;
    get pointerLocation(): {
        x?: number;
        y?: number;
    };
    get imageRendering(): InterpolationMode;
    set imageRendering(value: InterpolationMode);
    get scaleRatio(): number;
    set scaleRatio(value: number);
    get padding(): DOMPadding;
    set padding(value: DOMPadding);
    /**
     * Gets zoom factor after computing device ratio (DPI)
     */
    get zoomFactor(): number;
    private onContentElDOMChanged;
    private onResizing;
    private onMouseWheel;
    private onPointerEnter;
    private onPointerLeave;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    private dpi;
    private updateImageRendering;
    private getCenterPoint;
    private checkIfNeedRecenter;
    private animatePanning;
    private animateZooming;
    loadHtmlContent(html: string): Promise<void>;
    startPanningAnimation(direction: PanDirection, panSpeed?: number): Promise<void>;
    stopPanningAnimation(): void;
    startZoomingAnimation(isZoomOut: boolean, zoomSpeed?: number): Promise<void>;
    stopZoomingAnimation(): void;
    recenter(duration?: number): Promise<void>;
    panToDistance(dx?: number, dy?: number, duration?: number): Promise<void>;
    panTo(x: number, y: number, duration?: number): Promise<void>;
    zoomByDelta(delta: number, // zoom in: delta > 1, zoom out: delta < 1
    pageX?: number, pageY?: number, isManualZoom?: boolean, duration?: number): Promise<void>;
    setZoomMode(mode?: ZoomMode, zoomLockFactor?: number, duration?: number): Promise<void>;
    zoomToCenter(factor: number, options?: {
        isManualZoom?: boolean;
        duration?: number;
        isZoomModeChanged?: boolean;
    }): Promise<void>;
    zoomToPoint(factor: number, options?: {
        x?: number;
        y?: number;
        duration?: number;
        useDelta?: boolean;
        isManualZoom?: boolean;
        isZoomModeChanged?: boolean;
    }): Promise<void>;
    applyTransform(duration?: number): Promise<void>;
    enable(): void;
    disable(): void;
}
declare const _default: {
    HapplaBox: typeof HapplaBox;
};
export default _default;
