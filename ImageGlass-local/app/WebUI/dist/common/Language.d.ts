export default class Language {
    /**
     * Loads language for all elements.
     */
    static load(): void;
    /**
     * Loads language for the given element.
     */
    static loadForEl(parentEl: HTMLElement): void;
    /**
     * Loads language for the given element.
     */
    static loadFor(selector: string): void;
}
