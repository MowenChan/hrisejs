/// <reference path="../../d/state.d.ts" />
/// <reference path="../../d/snr.d.ts" />
/// <reference path="../../d/ioc.d.ts" />
/// <reference path="../../d/type.d.ts" />
declare namespace hrise {
    namespace H$.StateLib {
        interface Flow {
            selectTo(index: any): boolean;
        }
        interface Actor {
            action(arg?: any): boolean;
        }
        abstract class StateBase extends state.Mealy implements ioc.Object, Actor {
            H$private: type.SSIT<any>;
            constructor(parent: Flow, stasig: string);
            action(arg?: any): boolean;
            translate(alpha: any): void;
            die(): void;
            abstract init(): boolean;
            abstract execute(): any;
            abstract onEvent(s: snr.Signal): any;
            H$getter(prop: string): any;
            H$setter(prop: string, value: any): void;
        }
        class FlowBase extends state.Mealy implements ioc.Object, Flow, Actor {
            H$private: type.SSIT<any>;
            constructor(parent: Flow, stasig: string);
            action(arg?: any): boolean;
            selectTo(index: any): boolean;
            translate(alpha: any): void;
            die(): void;
            onEvent(s: snr.Signal): any;
            H$getter(prop: string): any;
            H$setter(prop: string, value: any): void;
        }
        class FlowBreaker implements Actor, ioc.Object {
            H$private: type.SSIT<any>;
            constructor();
            action(): boolean;
            H$getter(prop: string): any;
            H$setter(prop: string, value: any): void;
        }
    }
}
