"use strict";
var hrise;
(function (hrise) {
    var H$;
    (function (H$) {
        var StateLib;
        (function (StateLib) {
            function addMetaData(_this, _super, group, param, exit, icon) {
                if (_super === void 0) { _super = undefined; }
                if (group === void 0) { group = ""; }
                if (param === void 0) { param = {}; }
                if (exit === void 0) { exit = {}; }
                if (icon === void 0) { icon = ""; }
                _this.H$StateMetaData = {};
                if (_super === undefined) {
                    _this.H$StateMetaData.icon = icon;
                    _this.H$StateMetaData.group = group;
                    _this.H$StateMetaData.param = param;
                    _this.H$StateMetaData.exit = exit;
                }
                else {
                    _this.H$StateMetaData.icon = icon || _super.H$StateMetaData.icon;
                    _this.H$StateMetaData.group = group || _super.H$StateMetaData.group;
                    var _param = _super.H$StateMetaData.param;
                    for (var i in _param) {
                        for (var j in param) {
                            if (i === j)
                                console.warn("duplicate parameter name: ", i, "declared in class :", _this.name, " with it's super class");
                            param[i] = _param[i];
                        }
                    }
                    _this.H$StateMetaData.param = param;
                    var _exit = _super.H$StateMetaData.exit;
                    for (var i in _exit) {
                        for (var j in exit) {
                            if (i === j)
                                console.warn("duplicate exit alphabet(value): ", i, "declared in class :", _this.name, " with it's super class");
                            exit[i] = _exit[i];
                        }
                    }
                    _this.H$StateMetaData.exit = exit;
                }
            }
            StateLib.addMetaData = addMetaData;
            ;
            function ExportState(State) {
                StateLib.H$StateLibMetaData[StateLib.H$StateLibMetaData.length] = State;
            }
            StateLib.H$StateLibMetaData = [];
            addMetaData(StateLib.FlowBase);
            ExportState(StateLib.FlowBase);
            addMetaData(StateLib.FlowBreaker);
            ExportState(StateLib.FlowBreaker);
        })(StateLib = H$.StateLib || (H$.StateLib = {}));
    })(H$ = hrise.H$ || (hrise.H$ = {}));
})(hrise || (hrise = {}));
