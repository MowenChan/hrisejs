declare namespace hrise {
    const TIME_BASE: number;
    const HRISE_ENV: any;
    function indexer<T>(path: type.NSIT<string> | string, scope?: type.NS): type.Of<T> | undefined;
    function forceMount(path: type.NSIT<string>, scope: type.SSIT<any> | undefined, element: any): void;
}
