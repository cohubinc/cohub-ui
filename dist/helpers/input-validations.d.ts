declare type TValidator<T> = (value?: T) => string | undefined;
export declare function composeValidators<T = any>(...validators: Array<TValidator<T>>): (value?: T | undefined) => string | undefined;
export declare function required<T = string>(value?: T): "Required" | undefined;
export declare function minLength<T = number>(min: number): (value?: T | undefined) => string | undefined;
export declare function minValue<T = number>(min: number): (value?: T | undefined) => string | undefined;
export declare function length<T = string>(valLength: number): (value?: T | undefined) => string | undefined;
export declare const email: (value?: string | number | object | null | undefined) => string | undefined;
export declare function isInt<T>(value?: T): "Not an integer" | undefined;
export {};
