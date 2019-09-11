declare type TValidator<T> = (value?: T) => string | undefined;
export declare function composeValidators<T = any>(...validators: Array<TValidator<T>>): (value?: T | undefined) => string | undefined;
export declare function required<T = string>(value?: T): "Required" | undefined;
export declare function minLength(min: number): (value?: string | undefined) => string | undefined;
export declare function minValue(min: number): (value?: string | number | undefined) => string | undefined;
export declare function length(valLength: number): (value?: string | undefined) => string | undefined;
export declare const email: (value?: string | undefined) => string | undefined;
/**
 * Ensures that number or string is an integer
 * isInt("22")   // true
 * isInt("0.33") // false
 * isInt(22)     // true
 * isInt(0.33)   // false
 */
export declare function isInt<T>(value?: T): "Not an integer" | undefined;
export {};
//# sourceMappingURL=input-validations.d.ts.map