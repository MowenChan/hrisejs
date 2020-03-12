/// <reference path="../../d/StateLib.d.ts" />
/// <reference path="../../d/StateLibExport.d.ts" />
declare namespace hrise {
    namespace H$.StateLib.Lib1 {
        class TimeOutState extends StateLib.StateBase {
            init(): boolean;
            execute(): any;
            onEvent(s: snr.Signal): any;
            die(): void;
        }
        class ViewerState extends StateLib.StateBase {
            init(): boolean;
            execute(): any;
            onEvent(s: snr.Signal): any;
        }
    }
}
