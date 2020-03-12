declare namespace hrise {
    namespace state {
        function indexer<T>(path: string): type.Of<T> | undefined;
        abstract class Mealy extends snr.Actor {
            send(s: snr.Signal): void;
            receive(s: snr.Signal): void;
            abstract translate(alpha: any): void;
            abstract onEvent(s: snr.Signal): any;
        }
    }
}
