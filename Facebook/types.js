var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fb = /** @class */ (function () {
    function Fb(firstName, lastName, email, birthday, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
    }
    return Fb;
}());
var info = /** @class */ (function (_super) {
    __extends(info, _super);
    function info(firstName, lastName, email, birthday, gender) {
        var _this = _super.call(this, firstName, lastName, email, birthday, gender) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.email = email;
        _this.birthday = birthday;
        _this.gender = gender;
        _this.getFirstName = function () {
            return _this.firstName;
        };
        _this.getLasttName = function () {
            return _this.lastName;
        };
        _this.getemail = function () {
            return _this.email;
        };
        _this.getbirthday = function () {
            return _this.birthday;
        };
        _this.getgender = function () {
            return _this.gender;
        };
        return _this;
    }
    return info;
}(Fb));
var obj = new info("Anusha", "Sharma", "anushasharma234@gmail.com", "12-2-12");
console.log("Firstname is:", obj.getFirstName());
console.log("Lastname is:", obj.getLasttName());
console.log("Email is:", obj.getemail());
console.log("Birthday is:", obj.getbirthday());
