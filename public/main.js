(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\OneDrive\Escritorio\dev\web\PAE\card-trading-front\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CcaC":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
class UserService {
    constructor() {
        this.users = [];
    }
    add(name, age) {
        this.users.push({ name, age });
    }
    edit(i, name, age) {
        const u = this.users[i];
        this.users[i] = {
            name: name ? name : u.name,
            age: age ? age : u.age
        };
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/user.service */ "CcaC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-form/register-form.component */ "czHB");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");








function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-register-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function AppComponent_div_12_Template_app_register_form_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const a_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.attributes[a_r3].value = $event; })("isFilledChanged", function AppComponent_div_12_Template_app_register_form_isFilledChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.attributes[a_r3].value)("type", ctx_r0.attributes[a_r3].type)("label", ctx_r0.attributes[a_r3].label);
} }
function AppComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", c_r7.id)("title", c_r7.title)("description", c_r7.description)("img", c_r7.img)("type", c_r7.type);
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
const _c1 = function (a0, a1) { return { "grid-template-columns": a0, "grid-template-rows": a1 }; };
class AppComponent {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.title = 'adopt-me-front';
        this.attributes = {
            name: { value: '', label: 'Name' },
            lastname: { value: '', label: 'Last_Name' },
            email: { value: '', label: 'Email', type: 'email' },
            username: { value: '', label: 'Username' },
            password: { value: '', label: 'Password', type: 'password' },
            password1: { value: '', label: 'Confirm password', type: 'password' },
        };
        this.matchingPassword = false;
        this.attributesKeys = Object.keys(this.attributes);
        this.isFull = false;
        this.users = [];
        this.cards = [
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 1, title: 'Zapatos de payaso', description: 'Unos zapatos con los que podrás decir cualquier cosa sin que te tomen en serio.', img: 'https://http2.mlstatic.com/D_NQ_NP_819765-MLM32344851522_092019-O.jpg', type: 3 },
            { id: 2, title: 'Bosque de eucaliptos', description: 'Un gran bosque que te hará perderte.', img: 'https://image.freepik.com/foto-gratis/bosque-eucaliptos-galicia-espana_79295-16167.jpg', type: 1 },
            { id: 3, title: 'Pistola', description: 'Dispara.', img: 'https://cdn.britannica.com/s:690x388,c:crop/73/130773-050-080A8034/Browning-Hi-Power-pistol.jpg', type: 2 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 2, title: 'Bosque de eucaliptos', description: 'Un gran bosque que te hará perderte.', img: 'https://image.freepik.com/foto-gratis/bosque-eucaliptos-galicia-espana_79295-16167.jpg', type: 1 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 1, title: 'Zapatos de payaso', description: 'Unos zapatos con los que podrás decir cualquier cosa sin que te tomen en serio.', img: 'https://http2.mlstatic.com/D_NQ_NP_819765-MLM32344851522_092019-O.jpg', type: 3 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 2, title: 'Bosque de eucaliptos', description: 'Un gran bosque que te hará perderte.', img: 'https://image.freepik.com/foto-gratis/bosque-eucaliptos-galicia-espana_79295-16167.jpg', type: 1 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 1, title: 'Zapatos de payaso', description: 'Unos zapatos con los que podrás decir cualquier cosa sin que te tomen en serio.', img: 'https://http2.mlstatic.com/D_NQ_NP_819765-MLM32344851522_092019-O.jpg', type: 3 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 3, title: 'Pistola', description: 'Dispara.', img: 'https://cdn.britannica.com/s:690x388,c:crop/73/130773-050-080A8034/Browning-Hi-Power-pistol.jpg', type: 2 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 2, title: 'Bosque de eucaliptos', description: 'Un gran bosque que te hará perderte.', img: 'https://image.freepik.com/foto-gratis/bosque-eucaliptos-galicia-espana_79295-16167.jpg', type: 1 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 3, title: 'Pistola', description: 'Dispara.', img: 'https://cdn.britannica.com/s:690x388,c:crop/73/130773-050-080A8034/Browning-Hi-Power-pistol.jpg', type: 2 },
            { id: 1, title: 'Zapatos de payaso', description: 'Unos zapatos con los que podrás decir cualquier cosa sin que te tomen en serio.', img: 'https://http2.mlstatic.com/D_NQ_NP_819765-MLM32344851522_092019-O.jpg', type: 3 },
            { id: 3, title: 'Pistola', description: 'Dispara.', img: 'https://cdn.britannica.com/s:690x388,c:crop/73/130773-050-080A8034/Browning-Hi-Power-pistol.jpg', type: 2 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 2, title: 'Bosque de eucaliptos', description: 'Un gran bosque que te hará perderte.', img: 'https://image.freepik.com/foto-gratis/bosque-eucaliptos-galicia-espana_79295-16167.jpg', type: 1 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 1, title: 'Zapatos de payaso', description: 'Unos zapatos con los que podrás decir cualquier cosa sin que te tomen en serio.', img: 'https://http2.mlstatic.com/D_NQ_NP_819765-MLM32344851522_092019-O.jpg', type: 3 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 2, title: 'Bosque de eucaliptos', description: 'Un gran bosque que te hará perderte.', img: 'https://image.freepik.com/foto-gratis/bosque-eucaliptos-galicia-espana_79295-16167.jpg', type: 1 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 3, title: 'Pistola', description: 'Dispara.', img: 'https://cdn.britannica.com/s:690x388,c:crop/73/130773-050-080A8034/Browning-Hi-Power-pistol.jpg', type: 2 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 2, title: 'Bosque de eucaliptos', description: 'Un gran bosque que te hará perderte.', img: 'https://image.freepik.com/foto-gratis/bosque-eucaliptos-galicia-espana_79295-16167.jpg', type: 1 },
            { id: 0, title: 'Calabaza', description: 'Una calabaza naranja.', img: 'https://s03.s3c.es/imag/_v0/770x420/a/b/3/600x400_calabaza-770.jpg', type: 0 },
            { id: 2, title: 'Bosque de eucaliptos', description: 'Un gran bosque que te hará perderte.', img: 'https://image.freepik.com/foto-gratis/bosque-eucaliptos-galicia-espana_79295-16167.jpg', type: 1 },
            { id: 3, title: 'Pistola', description: 'Dispara.', img: 'https://cdn.britannica.com/s:690x388,c:crop/73/130773-050-080A8034/Browning-Hi-Power-pistol.jpg', type: 2 },
            { id: 1, title: 'Zapatos de payaso', description: 'Unos zapatos con los que podrás decir cualquier cosa sin que te tomen en serio.', img: 'https://http2.mlstatic.com/D_NQ_NP_819765-MLM32344851522_092019-O.jpg', type: 3 }
        ];
        this.nnn = 6;
    }
    getUsers() {
        this.http.get('http://localhost:3000/u/40000').subscribe((user) => console.log(user));
    }
    createUser() {
        console.log("posting user...");
        const user = {
            name: this.attributes.name.value,
            lastName: this.attributes.lastname.value,
            username: this.attributes.email.value,
            email: this.attributes.email.value,
            password: this.attributes.password.value
        };
        this.http.post('http://localhost:3000/u', user).subscribe(data => {
            console.log(data);
        });
    }
    ngAfterContentInit() {
        const { password, password1 } = this.attributes;
        this.matchingPassword = password.value === password1.value;
        this.isFull = this.verifyAllFilled();
    }
    onChange(property) {
        this.isFull = this.verifyAllFilled();
        if (['Password', 'Confirm password'].includes(property)) {
            this.verifyMatchingPasswords();
            console.log(this.matchingPassword);
        }
    }
    verifyAllFilled() {
        return Object.keys(this.attributes).every((key) => {
            this.attributes[key].value.length > 4;
        });
    }
    verifyMatchingPasswords() {
        const { password, password1 } = this.attributes;
        this.matchingPassword = password.value === password1.value;
    }
    genCols(i) {
        let s = '';
        for (let c = 0; c < i; c++)
            s += `${2 * (i + 0.5)}em `;
        return s;
    }
    genRows() {
        let i = this.cards.length / 4, rows = '', f = -2.0 / 19.0 * this.cards.length + 6.0;
        for (let c = 0; c < i; c++)
            rows += `${f * (i + 0.5)}em `;
        return rows;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])], decls: 18, vars: 10, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["role", "main", 1, "content"], [1, "register-form", "container"], [1, "register-fields"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "ngStyle", "click"], [1, "cardsss", 3, "ngStyle"], [3, "value", "type", "label", "valueChange", "isFilledChanged"], [3, "id", "title", "description", "img", "type"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Card-trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_div_12_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_p_13_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "create user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_div_17_Template, 2, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.attributesKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.matchingPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.matchingPassword && ctx.isFull ? "auto" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c1, ctx.genCols(ctx.nnn), ctx.genRows()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]], styles: [".cardsss[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n  justify-items: center;\n  align-items: center;\n  width: 100%;\n  height: 40em;\n  display: grid;\n  background-color: lightgray;\n  grid-template-rows: auto;\n  overflow: scroll;\n}\n.register-form[_ngcontent-%COMP%] {\n  background-color: #ebebeb;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.register-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: light-green;\n}\n.register-form[_ngcontent-%COMP%]   .register-fields[_ngcontent-%COMP%] {\n  width: 500px;\n  margin-left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURGO0FBRkE7RUFNSSxrQkFBQTtFQUNBLDZCQUFBO0FBREo7QUFOQTtFQVdJLFlBQUE7RUFDQSxnQkFBQTtBQUZKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkc3NzIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgLy9hbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4ucmVnaXN0ZXItZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0LWdyZWVuO1xuICB9XG5cbiAgLnJlZ2lzdGVyLWZpZWxkcyB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbn1cbiJdfQ== */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px 8% 32px 8%;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  body[_ngcontent-%COMP%]{\n    background-color: #333;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-form/register-form.component */ "czHB");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
        _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__["RegisterFormComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "czHB":
/*!**********************************************************!*\
  !*** ./src/app/register-form/register-form.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1) { return { "color": a0, "border": a1 }; };
class RegisterFormComponent {
    constructor() {
        this.type = 'text';
        this.isFilledChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onAdd(e) {
        this.valueChange.emit(e.target.value);
        this.isFilledChanged.emit(this.label);
    }
}
RegisterFormComponent.ɵfac = function RegisterFormComponent_Factory(t) { return new (t || RegisterFormComponent)(); };
RegisterFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterFormComponent, selectors: [["app-register-form"]], inputs: { value: "value", type: "type", label: "label" }, outputs: { isFilledChanged: "isFilledChanged", valueChange: "valueChange" }, decls: 5, vars: 8, consts: [[1, "form-group"], [3, "for"], [1, "form-control", 3, "type", "id", "ngStyle", "input"]], template: function RegisterFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterFormComponent_Template_input_input_4_listener($event) { return ctx.onAdd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.value.length > 4 ? "green" : "red", ctx.value.length > 4 ? "1px solid green" : "1px solid red"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxpQkFBQTtBQURKO0FBRkE7RUFPSSxZQUFBO0FBRkoiLCJmaWxlIjoicmVnaXN0ZXItZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcblxuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG5cblxufVxuIl19 */"] });


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const colors = [[148, 129, 61], [83, 137, 71], [102, 73, 42], [149, 77, 77], [179, 131, 162], [71, 137, 101]];
class CardComponent {
    constructor() { }
    fromType(t) {
        return `url('../../assets/bgs/${t}.png')`;
    }
    rgbaType(t) {
        return `rgba(${colors[t][0]},${colors[t][1]},${colors[t][2]}, 0.75)`;
    }
    hover(e) {
        console.log(e);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { id: "id", title: "title", description: "description", img: "img", type: "type" }, decls: 6, vars: 9, consts: [[1, "cardo", 3, "click"], [1, "title"], [3, "src"], [1, "desc"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_div_click_0_listener($event) { return ctx.hover($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.fromType(ctx.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.rgbaType(ctx.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.rgbaType(ctx.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, styles: [".cardo[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 12em;\n  height: 18em;\n  align-content: center;\n  border: 2px solid black;\n}\n.cardo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n.cardo[_ngcontent-%COMP%]   .imgback[_ngcontent-%COMP%] {\n  top: inherit;\n  margin-top: -40em;\n  margin-left: unset;\n  position: relative;\n  z-index: 1;\n  width: inherit;\n  height: inherit;\n  border: none;\n  opacity: 0;\n}\n.cardo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 50%;\n  margin-left: 4%;\n  border: 2px ridge gray;\n}\n.cardo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.cardo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cardo[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  color: black;\n  height: 10%;\n  width: 95%;\n  margin: 0% 2.5% 1% 1.5%;\n  padding-left: 0.5%;\n  border: 1px solid black;\n}\n.cardo[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: small;\n  height: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBTkE7RUFPUSxrQkFBQTtFQUNBLFVBQUE7QUFFUjtBQVZBO0VBV1EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRVI7QUFyQkE7RUFzQlEsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFFUjtBQTNCQTtFQThCUSxpQkFBQTtBQUFSO0FBOUJBOztFQWlDUSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQXZDQTtFQXlDUSxnQkFBQTtFQUNBLFdBQUE7QUFDUiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRve1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEyZW07XG4gICAgaGVpZ2h0OiAxOGVtO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAqe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuICAgIC5pbWdiYWNre1xuICAgICAgICB0b3A6aW5oZXJpdDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgICAgICBib3JkZXI6IDJweCByaWRnZSBncmF5O1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIC8vcGFkZGluZy10b3A6IDEuNSU7XG4gICAgICAgIC8vZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC50aXRsZSwuZGVzY3tcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luOiAwJSAyLjUlIDElIDEuNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41JTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxuICAgIC5kZXNje1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICBoZWlnaHQ6IDM1JTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function LoginComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSubmit(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login with google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.exampleEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.status);
} }
function LoginComponent_ng_template_6_Template(rf, ctx) { }
class LoginComponent {
    constructor() {
        this.status = "no se ha enviado";
        this.exampleEmail = "example@...";
        this.displayLoginForm = false;
    }
    ngOnInit() {
    }
    onLoginForm() {
        this.displayLoginForm = true;
    }
    onSubmit(email) {
        console.log(email);
        this.status = "se ha enviado";
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 8, vars: 3, consts: [[3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["showLoginForm", ""], ["hideLoginForm", ""], ["type", "text", 3, "value"], ["email", ""], ["type", "text", "pass", ""], ["type", "button", "id", "google-login"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_0_listener() { return ctx.onLoginForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Iniciar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_ng_template_4_Template, 16, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_ng_template_6_Template, 0, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayLoginForm)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map