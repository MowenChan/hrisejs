declare namespace hrise {
    namespace type {
        type Tree<T> = {
            [sig: number]: (Tree<T> | string);
        };
        type NS = SSIT<any>;
        type SSIT<T> = {
            [sig: string]: T;
        };
        type NSIT<T> = {
            [sig: number]: T;
        };
        type SIT<T> = SSIT<T> & NSIT<T>;
        type Of<T> = new (args?: any) => T;
        class Comparator {
            static isString(obj: any): boolean;
            static isFunction(obj: any): boolean;
            static isUndef(obj: any): boolean;
            static isNull(obj: any): boolean;
        }
        class util {
            static sizeOf(set: SIT<any>): number;
        }
    }
}
