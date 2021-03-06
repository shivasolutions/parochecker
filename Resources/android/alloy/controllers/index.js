function Controller() {
    function doClick() {
        var network = Titanium.Network;
        var line = network.getOnline();
        Ti.API;
        if ("1" == line) {
            var loginView = Alloy.createController("login").getView();
            loginView.navBarHidden = true;
            loginView.open();
        } else alert("No hay conexión a internet");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#1176d2",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    doClick ? $.__views.index.addEventListener("open", doClick) : __defers["$.__views.index!open!doClick"] = true;
    $.__views.logo = Ti.UI.createImageView({
        width: 150,
        image: "/logo.png",
        id: "logo"
    });
    $.__views.index.add($.__views.logo);
    doClick ? $.__views.logo.addEventListener("click", doClick) : __defers["$.__views.logo!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    alert("Hola Lupi");
    $.index.navBarHidden = true;
    $.index.open();
    __defers["$.__views.index!open!doClick"] && $.__views.index.addEventListener("open", doClick);
    __defers["$.__views.logo!click!doClick"] && $.__views.logo.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;