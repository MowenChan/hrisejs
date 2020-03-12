"use strict";
var hrise;
(function (hrise) {
    var H$;
    (function (H$) {
        var StateLib;
        (function (StateLib) {
            var Lib1;
            (function (Lib1) {
                function ExportState(State) {
                    Lib1.H$StateLibMetaData[Lib1.H$StateLibMetaData.length] = State;
                }
                Lib1.H$StateLibMetaData = [];
                StateLib.addMetaData(Lib1.TimeOutState, StateLib.StateBase, "Lib1", { timeout: 20000 }, { OVER_TIME: "超时" });
                ExportState(Lib1.TimeOutState);
                StateLib.addMetaData(Lib1.ViewerState, StateLib.StateBase, "Lib1", { timeout: 20000 }, { DEC_AGAIN: "超时", DEC_END: "结束" });
                ExportState(Lib1.ViewerState);
            })(Lib1 = StateLib.Lib1 || (StateLib.Lib1 = {}));
        })(StateLib = H$.StateLib || (H$.StateLib = {}));
    })(H$ = hrise.H$ || (hrise.H$ = {}));
})(hrise || (hrise = {}));
