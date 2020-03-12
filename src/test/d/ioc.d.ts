declare namespace hrise {
    namespace ioc {
        interface Object {
            H$getter(prop: string): any;
            H$setter(prop: string, value: any): void;
        }
        interface Bean {
            clazz: type.Of<any>;
            args?: type.NSIT<{
                value: string | number;
            } | {
                ref: string;
            }>;
            props?: type.SSIT<{
                value: string | number;
            } | {
                ref: string;
            }>;
            single?: boolean;
        }
        interface Factory {
            createInstance<T>(sig: any): T;
        }
        class HSBeanFactory {
            createInstance<T>(b: string | Bean): T;
            private prepare;
            private resolveRef;
        }
        function setFactory(factory: Factory): void;
        function getFactory<T extends Factory>(): T;
    }
}
