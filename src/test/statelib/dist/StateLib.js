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
            var StateBase = (function (_super) {
                __extends(StateBase, _super);
                function StateBase(parent, stasig) {
                    var _this = _super.call(this) || this;
                    _this.H$private = {};
                    return _this;
                }
                ;
                StateBase.prototype.action = function (arg) {
                    console.log("state ", this.H$private.index, " begin");
                    if (this.init() === true)
                        this.translate(this.execute());
                    hrise.snr.getDispatcher().regActor(this.H$private.stasig, this);
                    return true;
                };
                ;
                StateBase.prototype.translate = function (alpha) {
                    var r = false;
                    if (hrise.type.Comparator.isUndef(alpha))
                        return;
                    else
                        r = this.H$private.parent.selectTo(this.H$private.exit[alpha]);
                    if (r)
                        this.die();
                };
                ;
                StateBase.prototype.die = function () {
                    console.log("state ", this.H$private.index, " end");
                };
                ;
                StateBase.prototype.H$getter = function (prop) {
                    return this.H$private[prop];
                };
                ;
                StateBase.prototype.H$setter = function (prop, value) {
                    this.H$private[prop] = value;
                };
                ;
                return StateBase;
            }(hrise.state.Mealy));
            StateLib.StateBase = StateBase;
            var FlowBase = (function (_super) {
                __extends(FlowBase, _super);
                function FlowBase(parent, stasig) {
                    var _this = _super.call(this) || this;
                    _this.H$private = {};
                    return _this;
                }
                ;
                FlowBase.prototype.action = function (arg) {
                    this.selectTo(0);
                    return true;
                };
                ;
                FlowBase.prototype.selectTo = function (index) {
                    console.log("select to :", index);
                    var state = hrise.ioc.getFactory().createInstance(this.H$private.flow[index]);
                    state.H$setter("parent", this);
                    state.H$setter("statesig", this.H$private.statesig + index);
                    return state.action();
                };
                ;
                FlowBase.prototype.translate = function (alpha) {
                    var r = false;
                    if (hrise.type.Comparator.isUndef(alpha))
                        return;
                    else
                        r = this.H$private.parent.selectTo(this.H$private.exit[alpha]);
                    if (r)
                        this.die();
                };
                ;
                FlowBase.prototype.die = function () {
                    console.log("state ", this.H$private.index, " end");
                };
                ;
                FlowBase.prototype.onEvent = function (s) {
                    "override this method in your class";
                };
                ;
                FlowBase.prototype.H$getter = function (prop) {
                    return this.H$private[prop];
                };
                ;
                FlowBase.prototype.H$setter = function (prop, value) {
                    if (prop === "flow") {
                        this.H$private[prop] = hrise.state.indexer(value);
                        return;
                    }
                    this.H$private[prop] = value;
                };
                ;
                return FlowBase;
            }(hrise.state.Mealy));
            StateLib.FlowBase = FlowBase;
            var FlowBreaker = (function () {
                function FlowBreaker() {
                    this.H$private = {};
                }
                ;
                FlowBreaker.prototype.action = function () {
                    this.H$private.parent.translate(this.H$private.alphabet);
                    return true;
                };
                ;
                FlowBreaker.prototype.H$getter = function (prop) {
                    return this.H$private[prop];
                };
                ;
                FlowBreaker.prototype.H$setter = function (prop, value) {
                    this.H$private[prop] = value;
                };
                ;
                return FlowBreaker;
            }());
            StateLib.FlowBreaker = FlowBreaker;
        })(StateLib = H$.StateLib || (H$.StateLib = {}));
    })(H$ = hrise.H$ || (hrise.H$ = {}));
})(hrise || (hrise = {}));
