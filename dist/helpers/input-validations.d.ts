declare type TValidator<T> = (value?: T) => string | undefined;
export declare function composeValidators<T = any>(...validators: Array<TValidator<T>>): (value?: T | undefined) => void;
export declare const required: (value?: string | null | undefined) => "Required" | undefined;
export declare const requiredNumber: (value?: number | null | undefined) => "Required" | undefined;
export declare const minLength: (min: number) => (value?: string | number | object) => string | undefined;
export declare const minValue: (min: number) => (value?: string | number | null | undefined) => string | undefined;
export declare const length: (valLength: number) => (value?: string) => string | undefined;
export declare const email: (value?: string | number | object | undefined) => void;
export declare const lengthRange: (min: number, max: number) => (v?: string) => string | undefined;
export declare const isInt: (value?: string | null | undefined) => boolean | 0;
export {};
//# sourceMappingURL=input-validations.d.ts.map