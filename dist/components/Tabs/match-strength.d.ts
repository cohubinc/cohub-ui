interface IOptions {
    /**
     * Matches beginning of input
     * @default true
     */
    matchFromStart?: boolean;
    /**
     * Weather or not the match is case sensitive
     * @default true
     */
    caseSensitive?: boolean;
}
export default function matchStrength(expression: string, test: string, options?: IOptions): number;
export {};
//# sourceMappingURL=match-strength.d.ts.map