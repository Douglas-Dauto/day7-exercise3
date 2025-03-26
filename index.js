// Day 7 - Exercise 3
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var text = document.getElementById("texto");
var Furniture = /** @class */ (function () {
    function Furniture(manufacturer) {
        if (manufacturer === void 0) { manufacturer = 'IKEA'; }
        this.manufacturer = manufacturer;
    }
    return Furniture;
}());
var Desk = /** @class */ (function (_super) {
    __extends(Desk, _super);
    function Desk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Desk.prototype.kind = function () {
        var valueText = "This is a desk made by ".concat(this.manufacturer, "<br>");
        console.log(valueText);
        text.innerHTML += valueText;
    };
    return Desk;
}(Furniture));
var Chair = /** @class */ (function (_super) {
    __extends(Chair, _super);
    function Chair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chair.prototype.kind = function () {
        var valueText = "This is a chair made by ".concat(this.manufacturer, "<br>");
        console.log(valueText);
        text.innerHTML += valueText;
    };
    return Chair;
}(Furniture));
var desk = new Desk();
desk.kind();
// desk.manufacturer // Deve retornar um erro // Descomente para ver o erro
var chair = new Chair();
chair.kind();
// chair.manufacturer // Deve retornar um erro // Descomente para ver o erro
