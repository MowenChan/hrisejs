declare namespace hrise {
    namespace snr {
        interface Signal {
            s: Sender | Receiver;
            p: any;
            r: Receiver | Sender;
            t: string;
            _: boolean;
        }
        interface Sender {
            send(s: Signal): void;
        }
        interface Receiver {
            receive(s: Signal): void;
        }
        abstract class Actor implements Sender, Receiver {
            static send(s: Signal): void;
            abstract send(s: Signal): void;
            abstract receive(s: Signal): void;
        }
        class Dispatcher extends Actor {
            actors: type.SSIT<Actor>;
            send(s: Signal): void;
            receive(s: Signal): void;
            regActor<T extends Actor>(id: string, act: T): void;
        }
        function getDispatcher(): Sender & Receiver;
        function setDispatcher(dispatcher: Sender & Receiver): void;
        function createSignal(s: Sender | Receiver, p: any, r: Sender | Receiver, t: string, _: boolean): Signal;
    }
}
