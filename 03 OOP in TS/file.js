// Tutorial: https://www.youtube.com/watch?v=fsVL_xrYO0w
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//+ Functional Programming: pure functions
var num = 123;
function ToString(val) {
    return val.toString();
}
var string = ToString(num);
console.log("string:", string);
var data = Object.freeze([1, 2, 3, 4, 5, 6]);
//- Higher Order Functions
//- A function that takes at least a function as its argument(s), and/or returns a new function.
var addEmoji = function (val) { return ToString(val) + "😀"; };
var emojiData = data.map(addEmoji);
console.log("emojiData:", emojiData);
//- Function Composition (Compound Function)
//- It's the ability to combine behaviors together in a specific order, transforming data little by little from an initial shape into a new one.
var appendEmoji = function (fixed) { return function (dynamic) { return fixed + dynamic; }; };
var rain = appendEmoji("🌧️");
var sun = appendEmoji("🌞");
console.log(rain("today"));
console.log(sun("tomorrow"));
//+ Object Oriented Programming
var Emoji = /** @class */ (function () {
    function Emoji(icon) {
        this.icon = icon;
    }
    return Emoji;
}());
var sun2 = new Emoji("🌞");
console.log("sun2:", sun2);
//- Static Method
var Emoji2 = /** @class */ (function () {
    function Emoji2() {
    }
    Emoji2.addOneTo = function (val) {
        return 1 + val;
    };
    return Emoji2;
}());
console.log("Emoji2.addOneTo(1):", Emoji2.addOneTo(1));
//- Inheritance (dziedziczenie z wyższej klasy) vs Composition (dzielenie wyższej klasy na mniejsze obiekty)
//- Inheritance
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
        this.name = name;
    }
    Human.prototype.sayHi = function () {
        return "Hello, " + this.name;
    };
    return Human;
}());
var prezes = new Human("Prezes Pis");
console.log("prezes.sayHi():", prezes.sayHi());
var SuperHuman = /** @class */ (function (_super) {
    __extends(SuperHuman, _super);
    function SuperHuman(name) {
        var _this = _super.call(this, name) || this;
        _this.heroName = "HERO " + name;
        return _this;
    }
    SuperHuman.prototype.superPower = function () {
        return this.heroName + " pops trays \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25";
    };
    return SuperHuman;
}(Human));
var pele = new SuperHuman("Pele");
console.log("pele.superPower():", pele.superPower());
console.log("pele.sayHi():", pele.sayHi());
//- Composition
function applyMixins(derivedCtor, baseCtor) {
    baseCtor.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
var hasName = function (name) {
    return { name: name };
};
var canSayHi = function (name) {
    return {
        sayHi: function () { return "Hello, " + name; }
    };
};
var Person = function (name) {
    return __assign(__assign({}, hasName(name)), canSayHi(name));
};
var person = Person("Michal");
console.log("person.sayHi():", person.sayHi());
var CanSayHi = /** @class */ (function () {
    function CanSayHi(name) {
        this.name = name;
    }
    CanSayHi.prototype.sayHi = function () {
        return "Hello " + this.name;
    };
    return CanSayHi;
}());
var HasSuperPower = /** @class */ (function () {
    function HasSuperPower(heroName) {
        this.heroName = heroName;
    }
    HasSuperPower.prototype.super_power = function () {
        return this.heroName + " \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25";
    };
    return HasSuperPower;
}());
var SuperHero = /** @class */ (function () {
    function SuperHero(name) {
        this.name = name;
        this.heroName = "SUPER " + name;
    }
    return SuperHero;
}());
applyMixins(SuperHero, [CanSayHi, HasSuperPower]);
var ts = new SuperHero("TypeScript");
console.log("ts.super_power():", ts.super_power());
