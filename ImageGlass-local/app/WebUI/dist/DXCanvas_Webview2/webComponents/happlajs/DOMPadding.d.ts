export declare class DOMPadding {
    left: number;
    right: number;
    top: number;
    bottom: number;
    constructor(left?: number, top?: number, right?: number, bottom?: number);
    get horizontal(): number;
    get vertical(): number;
    multiply(value: number): DOMPadding;
}
