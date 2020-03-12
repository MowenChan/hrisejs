"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hrise;
(function (hrise) {
    var H$;
    (function (H$) {
        var StateLib;
        (function (StateLib) {
            var Lib1;
            (function (Lib1) {
                var TimeOutState = (function (_super) {
                    __extends(TimeOutState, _super);
                    function TimeOutState() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    TimeOutState.prototype.init = function () {
                        var _this = this;
                        console.log("TimeOutState init it's will distroy after ", this.H$getter("timeout") / 1000, " sec");
                        this.H$setter("Timer", setTimeout(function () {
                            return _this.receive(hrise.snr.createSignal(_this, "OVER_TIME", _this, "signal", false));
                        }, this.H$getter("timeout")));
                        return true;
                    };
                    ;
                    TimeOutState.prototype.execute = function () {
                        console.log("TimeOutState excute");
                        return undefined;
                    };
                    ;
                    TimeOutState.prototype.onEvent = function (s) {
                        console.log("TimeOutState onEvent", s.p);
                        if (s.p === "OVER_TIME")
                            return "OVER_TIME";
                    };
                    ;
                    TimeOutState.prototype.die = function () {
                        clearTimeout(this.H$getter("Timer"));
                    };
                    ;
                    return TimeOutState;
                }(StateLib.StateBase));
                Lib1.TimeOutState = TimeOutState;
                var ViewerState = (function (_super) {
                    __extends(ViewerState, _super);
                    function ViewerState() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    ViewerState.prototype.init = function () {
                        console.log("ViewerState init");
                        return true;
                    };
                    ;
                    ViewerState.prototype.execute = function () {
                        var self = this;
                        console.log("ViewerState execute");
                        var view = document.getElementById("boxx");
                        var title = document.createElement("span");
                        title.innerHTML = this.H$getter("title");
                        var button = document.createElement("button");
                        var input = document.createElement("input");
                        button.onclick = function () {
                            hrise.snr.getDispatcher().send(hrise.snr.createSignal(self, input.value, self, "message", false));
                        };
                        view.appendChild(title);
                        view.appendChild(input);
                        view.appendChild(button);
                        return undefined;
                    };
                    ;
                    ViewerState.prototype.onEvent = function (s) {
                        console.log("ViewerState onEvent", s.p);
                        if (s.p === "DEC_AGAIN")
                            return "DEC_AGAIN";
                        if (s.p === "DEC_END")
                            return "DEC_END";
                        else
                            return undefined;
                    };
                    ;
                    return ViewerState;
                }(StateLib.StateBase));
                Lib1.ViewerState = ViewerState;
            })(Lib1 = StateLib.Lib1 || (StateLib.Lib1 = {}));
        })(StateLib = H$.StateLib || (H$.StateLib = {}));
    })(H$ = hrise.H$ || (hrise.H$ = {}));
})(hrise || (hrise = {}));
