declare type TValidator<T> = (value?: T) => string | undefined;
export declare function composeValidators(...validators: Array<TValidator<any>>): (value?: any) => void;
export declare const required: (value?: string | number | boolean | object | null | undefined) => "Required" | undefined;
export declare const minLength: (min: number) => (value?: string | number | object | null) => string | undefined;
export declare const minValue: (min: number) => (value?: string | number | object | null | undefined) => string | undefined;
export declare const length: (valLength: number) => (value?: string | number | object | null) => string | undefined;
export declare const email: (value?: any) => void;
export declare const isInt: (value?: string | number | object | null | undefined) => "Not an integer" | undefined;
export {};
