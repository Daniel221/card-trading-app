(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\OneDrive\Escritorio\dev\web\PAE\card-trading-front\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/user.service */ "CcaC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register-form/register-form.component */ "czHB");






function RegisterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-register-form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RegisterComponent_div_11_Template_app_register_form_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const a_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.attributes[a_r3].value = $event; })("isFilledChanged", function RegisterComponent_div_11_Template_app_register_form_isFilledChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.attributes[a_r3].value)("type", ctx_r0.attributes[a_r3].type)("label", ctx_r0.attributes[a_r3].label);
} }
function RegisterComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.regMsg.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.regMsg.msg);
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
class RegisterComponent {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
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
    }
    ngAfterContentInit() {
        const { password, password1 } = this.attributes;
        this.matchingPassword = password.value === password1.value;
        this.isFull = this.verifyAllFilled();
    }
    createUser() {
        console.log("posting user...");
        const user = {
            name: this.attributes.name.value,
            lastName: this.attributes.lastname.value,
            username: this.attributes.username.value,
            email: this.attributes.email.value,
            password: this.attributes.password.value
        };
        this.http.post('http://localhost:3000/u', user).subscribe(data => {
            console.log(data);
            this.regMsg = { msg: "Usuario registrado exitosamente.", class: 'text-success' };
        }, error => {
            this.regMsg = { msg: "Usuario existente.", class: 'text-danger' };
        });
    }
    onChange(property) {
        console.log(this.isFull);
        this.isFull = this.verifyAllFilled();
        if (['Password', 'Confirm password'].includes(property)) {
            this.verifyMatchingPasswords();
            console.log(this.matchingPassword);
        }
    }
    verifyAllFilled() {
        return Object.keys(this.attributes).every((key) => this.attributes[key].value.length > 4);
    }
    verifyMatchingPasswords() {
        const { password, password1 } = this.attributes;
        this.matchingPassword = password.value === password1.value;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])], decls: 19, vars: 6, consts: [[1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", "container"], [1, "register-fields"], [4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "btn", "btn-primary", 3, "ngStyle", "click"], [3, "value", "type", "label", "valueChange", "isFilledChanged"], [1, "text-danger"], [3, "ngClass"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterComponent_div_11_Template, 2, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterComponent_p_12_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 2, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_17_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.attributesKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.matchingPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.regMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.matchingPassword && ctx.isFull ? "auto" : "none"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__["RegisterFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".register-form[_ngcontent-%COMP%] {\n  background-color: #ebebeb;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.register-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: light-green;\n}\n.register-form[_ngcontent-%COMP%]   .register-fields[_ngcontent-%COMP%] {\n  width: 500px;\n  margin-left: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUpBO0VBTVEsa0JBQUE7RUFDQSw2QkFBQTtBQUNSO0FBUkE7RUFXUSxZQUFBO0VBQ0EsZUFBQTtBQUFSIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICBoMSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHQtZ3JlZW47XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyLWZpZWxkcyB7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register-form/register-form.component */ "czHB");





function UserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.user.img ? ctx_r0.user.img : "https://i1.sndcdn.com/avatars-000310902564-g2unlt-t240x240.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nombre de usuario: ", ctx_r0.user.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Correo: ", ctx_r0.user.email, "");
} }
function UserComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-register-form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function UserComponent_div_14_Template_app_register_form_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const a_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.attributes[a_r4].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.attributes[a_r4].value)("type", ctx_r1.attributes[a_r4].type)("label", ctx_r1.attributes[a_r4].label);
} }
function UserComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.regMsg.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.regMsg.msg);
} }
function UserComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.regMsg.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.regMsg.msg);
} }
const _c0 = function () { return { "pointer-events": "auto" }; };
class UserComponent {
    constructor(actRoute, http) {
        this.actRoute = actRoute;
        this.http = http;
        this.password = '';
        this.attributes = {
            name: { value: '', label: 'Name' },
            lastname: { value: '', label: 'Last_Name' },
            username: { value: '', label: 'Username' },
            img: { value: '', label: 'Image url' }
        };
        this.attributesKeys = Object.keys(this.attributes);
        this.actRoute.params.subscribe(p => {
            const { id } = p;
            this.http.get('http://localhost:3000/u/' + id).subscribe(data => this.user = data);
        });
    }
    ngAfterContentInit() {
    }
    createUser() {
        if (this.password != this.user.password) {
            this.regMsg = { msg: "Contraseña incorrecta.", class: 'text-danger' };
            return;
        }
        console.log("updating user...");
        const user = {
            name: this.attributes.name.value,
            lastName: this.attributes.lastname.value,
            username: this.attributes.username.value,
            img: this.attributes.img.value
        };
        this.http.put('http://localhost:3000/u/' + this.user.userid, user).subscribe(data => {
            console.log(data);
            this.regMsg = { msg: "Usuario actualizado exitosamente.", class: 'text-success' };
            window.location.reload();
        }, error => {
            console.log(error);
            this.regMsg = { msg: "Error.", class: 'text-danger' };
        });
    }
    onChanged(e) {
        this.password = e.target.value;
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 42, vars: 8, consts: [["class", "userInfo", 4, "ngIf"], [1, "userCards"], ["id", "editModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", "container"], [1, "register-fields"], [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-dismiss", "modal", "data-toggle", "modal", "data-target", "#confirmModal", 1, "btn", "btn-primary", 3, "ngStyle"], ["id", "confirmModal", "tabindex", "-1", 1, "modal", "fade"], ["type", "password", 3, "input"], [1, "btn", "btn-primary", 3, "ngStyle", "click"], [1, "userInfo"], [3, "src"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "btn-warning"], [3, "value", "type", "label", "valueChange"], [3, "ngClass"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserComponent_div_0_Template, 9, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Editar usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserComponent_div_14_Template, 2, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserComponent_div_15_Template, 2, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Editar usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Introduzca su contrase\u00F1a para continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UserComponent_Template_input_input_35_listener($event) { return ctx.onChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UserComponent_div_36_Template, 2, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_40_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributesKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__["RegisterFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".userInfo[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1%;\n  background-color: gray;\n}\n.userInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n.userInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: -webkit-fill-available;\n}\n.userInfo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.userCards[_ngcontent-%COMP%] {\n  height: -webkit-fill-available;\n  width: 90%;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0o7QUFKQTtFQUtRLG1CQUFBO0FBRVI7QUFQQTtFQVFRLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUVSO0FBZEE7RUFlUSxvQkFBQTtBQUVSO0FBQ0E7RUFDSSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InVzZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckluZm97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG4gICAgZGl2e1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgfVxufVxuLnVzZXJDYXJkc3tcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59Il19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5sZXNzIn0= */"] });


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

/***/ "L6jA":
/*!**************************************************!*\
  !*** ./src/app/catalogue/catalogue.component.ts ***!
  \**************************************************/
/*! exports provided: CatalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function() { return CatalogueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CatalogueComponent {
    constructor() { }
    ngOnInit() {
    }
}
CatalogueComponent.ɵfac = function CatalogueComponent_Factory(t) { return new (t || CatalogueComponent)(); };
CatalogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogueComponent, selectors: [["app-catalogue"]], decls: 2, vars: 0, template: function CatalogueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "catalogue works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9ndWUuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "SN7D":
/*!**************************************************!*\
  !*** ./src/app/user-card/user-card.component.ts ***!
  \**************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class UserCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserCardComponent.ɵfac = function UserCardComponent_Factory(t) { return new (t || UserCardComponent)(); };
UserCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCardComponent, selectors: [["app-user-card"]], inputs: { user: "user" }, decls: 8, vars: 3, consts: [[1, "userCard"], ["alt", "", "width", "15%", 3, "src"], [1, "spacer"], [3, "routerLink"], [1, "btn", "btn-primary"]], template: function UserCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "detalles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.img ? ctx.user.img : "https://i1.sndcdn.com/avatars-000310902564-g2unlt-t240x240.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/user/" + ctx.user.userid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".userCard[_ngcontent-%COMP%] {\n  margin: 1%;\n  border: 2px groove black;\n  display: flex;\n}\n.userCard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20%;\n  right: 2%;\n}\n.userCard[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUFDSjtBQUpBO0VBS1Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUVSO0FBVEE7RUFVUSxrQkFBQTtBQUVSIiwiZmlsZSI6InVzZXItY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyQ2FyZHtcbiAgICBtYXJnaW46IDElO1xuICAgIGJvcmRlcjogMnB4IGdyb292ZSBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJ1dHRvbntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgcmlnaHQ6IDIlO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG59Il19 */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-inbox/chat-inbox.component */ "VGJ9");









function AppComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.displayChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_app_chat_inbox_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-chat-inbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("showChatChange", function AppComponent_app_chat_inbox_22_Template_app_chat_inbox_showChatChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.showChat = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showChat", ctx_r1.showChat);
} }
class AppComponent {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.title = 'adopt-me-front';
        this.users = [];
        this.showChat = false;
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
    ngAfterContentInit() {
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
    displayChat() {
        this.showChat = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])], decls: 27, vars: 2, consts: [["role", "banner", 1, "toolbar"], ["routerLink", "/"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "navButts", "col-2"], ["routerLink", "/catalogue"], [1, "btn", "btn-outline-light"], ["routerLink", "/info"], ["routerLink", "/userlist"], [1, "spacer"], ["type", "button", "data-toggle", "modal", "data-target", "#loginModal", 1, "btn", "btn-light"], ["role", "main", 1, "content"], ["id", "chat-box"], ["type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], [3, "showChat", "showChatChange", 4, "ngIf"], ["id", "loginModal", "tabindex", "-1", 1, "modal", "fade"], ["id", "registerModal", "tabindex", "-1", 1, "modal", "fade"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [3, "showChat", "showChatChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Card-trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppComponent_button_21_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AppComponent_app_chat_inbox_22_Template, 1, 1, "app-chat-inbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showChat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showChat);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_7__["ChatInboxComponent"]], styles: [".cardsss[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n  justify-items: center;\n  align-items: center;\n  width: 100%;\n  height: 40em;\n  display: grid;\n  background-color: lightgray;\n  grid-template-rows: auto;\n  overflow: scroll;\n}\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px 8% 32px 8%;\n  flex-direction: column;\n  align-items: center;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n.navButts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n#chat-box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 100px;\n  bottom: 0px;\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSwwSkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBREY7QUFJQTs7Ozs7O0VBTUUsYUFBQTtBQUZGO0FBS0E7RUFDRSxTQUFBO0FBSEY7QUFNQTtFQUNFLE9BQUE7QUFKRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFMRjtBQUxBO0VBYUksWUFBQTtFQUNBLHFCQUFBO0FBTEo7QUFTQTtFQUNFLGNBQUE7QUFQRjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVJGO0FBV0E7RUFDRSxzQkFBQTtBQVRGO0FBQ0Esc0JBQXNCO0FBYXRCO0VBRUU7O0lBRUUsV0FBQTtFQVpGO0VBZUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQWJGO0VBZ0JBO0lBQ0UsaUJBQUE7RUFkRjtFQWlCQTtJQUNFLFlBQUE7SUFDQSx3QkFBQTtFQWZGO0FBQ0Y7QUFrQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQWhCRjtBQUNGO0FBbUJBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBakJGO0FBb0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBbEJGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkc3NzIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgLy9hbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG46aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4udG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4udG9vbGJhciBpbWcge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDgycHggOCUgMzJweCA4JTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cblxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgLmNhcmQtY29udGFpbmVyPio6bm90KC5jaXJjbGUtbGluayksXG4gIC50ZXJtaW5hbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cblxuLm5hdkJ1dHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbiNjaGF0LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwMHB4O1xuICBib3R0b206IDBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "UMdc":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-card/user-card.component */ "SN7D");




function UserListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r1);
} }
class UserListComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.get('http://localhost:3000/u').subscribe(data => this.users = data);
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "user"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserListComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_3__["UserCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "VGJ9":
/*!****************************************************!*\
  !*** ./src/app/chat-inbox/chat-inbox.component.ts ***!
  \****************************************************/
/*! exports provided: ChatInboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInboxComponent", function() { return ChatInboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const SOCKET_ENDPOINT = 'localhost:3000';
class ChatInboxComponent {
    constructor() {
        this.showChat = true;
        this.showChatChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        //this.setupSocketConnection();
    }
    SendMessage() {
        this.socket.emit('send_message', {
            content: this.message,
            senderChatID: this.username,
            receiverChatID: this.receiver
        });
        const element = document.createElement('li');
        element.innerHTML = this.message;
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '10px';
        element.style.textAlign = 'right';
        document.getElementById('message-list').appendChild(element);
        this.message = '';
    }
    setupSocketConnection() {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])({
            query: {
                username: this.username,
            }
        }); //when building to production, leave the parenthesis in blank, delete SOCKET_ENDPOINT var
        this.socket.on('receive_message', (data) => {
            if (data.content) {
                const element = document.createElement('li');
                element.innerHTML = data.content;
                element.style.background = 'white';
                element.style.padding = '15px 30px';
                element.style.margin = '10px';
                document.getElementById('message-list').appendChild(element);
            }
        });
    }
    closeChat() {
        this.showChatChange.emit(false);
    }
}
ChatInboxComponent.ɵfac = function ChatInboxComponent_Factory(t) { return new (t || ChatInboxComponent)(); };
ChatInboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatInboxComponent, selectors: [["app-chat-inbox"]], inputs: { showChat: "showChat" }, outputs: { showChatChange: "showChatChange" }, decls: 26, vars: 3, consts: [[1, "chat-messages"], [1, "users", "container"], [1, "row"], [1, "col-10"], [1, "btn", "btn-danger", 3, "click"], [1, "col-6"], ["for", "senderID"], ["type", "text", "id", "senderID", 3, "ngModel", "ngModelChange"], ["for", "receiverID"], ["type", "text", "id", "receiverID", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "chat-messages-show-container"], ["id", "message-list", 1, "chat-messages-show-list"], [1, "chat-messages-create-container"], ["type", "text", 1, "chat-messages-create-input", 3, "ngModel", "ngModelChange"], [1, "chat-messages-create-button", 3, "click"]], template: function ChatInboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatInboxComponent_Template_button_click_4_listener() { return ctx.closeChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatInboxComponent_Template_input_ngModelChange_11_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "send to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatInboxComponent_Template_input_ngModelChange_16_listener($event) { return ctx.receiver = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatInboxComponent_Template_button_click_18_listener() { return ctx.setupSocketConnection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatInboxComponent_Template_input_ngModelChange_23_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatInboxComponent_Template_button_click_24_listener() { return ctx.SendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.receiver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".chat-messages-show-container[_ngcontent-%COMP%] {\n  background: #c3c3c3;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.chat-messages-show-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.chat-messages-create-container[_ngcontent-%COMP%] {\n  background: #616161;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n}\n.chat-messages-create-input[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 29px 30px;\n  flex: 2;\n}\n.chat-messages-create-button[_ngcontent-%COMP%] {\n  height: 50px;\n  margin: auto 40px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtaW5ib3guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUhGIiwiZmlsZSI6ImNoYXQtaW5ib3guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1tZXNzYWdlcy1zaG93LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNjM2MzYzM7XG4gIGhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY2hhdC1tZXNzYWdlcy1zaG93LWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNoYXQtbWVzc2FnZXMtY3JlYXRlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICM2MTYxNjE7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2hhdC1tZXNzYWdlcy1jcmVhdGUtaW5wdXQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW46IDI5cHggMzBweDtcbiAgZmxleDogMlxufVxuXG4uY2hhdC1tZXNzYWdlcy1jcmVhdGUtYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IGF1dG8gNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "XSv0":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 2, vars: 0, template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLmNvbXBvbmVudC5sZXNzIn0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-form/register-form.component */ "czHB");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catalogue/catalogue.component */ "L6jA");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card-details/card-details.component */ "jXAV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing.module */ "lm+D");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-card/user-card.component */ "SN7D");
/* harmony import */ var _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chat-inbox/chat-inbox.component */ "VGJ9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
        _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_10__["CatalogueComponent"],
        _info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"],
        _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_12__["CardDetailsComponent"],
        _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"],
        _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_15__["UserCardComponent"],
        _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_16__["ChatInboxComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


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
RegisterFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterFormComponent, selectors: [["app-register-form"]], inputs: { value: "value", type: "type", label: "label" }, outputs: { isFilledChanged: "isFilledChanged", valueChange: "valueChange" }, decls: 5, vars: 7, consts: [[1, "form-group"], [3, "for"], [1, "form-control", 3, "type", "ngStyle", "input"]], template: function RegisterFormComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.value.length > 4 ? "green" : "red", ctx.value.length > 4 ? "1px solid green" : "1px solid red"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxpQkFBQTtBQURKO0FBRkE7RUFPSSxZQUFBO0FBRkoiLCJmaWxlIjoicmVnaXN0ZXItZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcblxuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG5cblxufVxuIl19 */"] });


/***/ }),

/***/ "jXAV":
/*!********************************************************!*\
  !*** ./src/app/card-details/card-details.component.ts ***!
  \********************************************************/
/*! exports provided: CardDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsComponent", function() { return CardDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardDetailsComponent.ɵfac = function CardDetailsComponent_Factory(t) { return new (t || CardDetailsComponent)(); };
CardDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDetailsComponent, selectors: [["app-card-details"]], decls: 2, vars: 0, template: function CardDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "card-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWRldGFpbHMuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "lm+D":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-details/card-details.component */ "jXAV");
/* harmony import */ var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogue/catalogue.component */ "L6jA");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'user/:id', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
    { path: 'userlist', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"] },
    { path: 'catalogue', component: _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_2__["CatalogueComponent"] },
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"] },
    { path: 'card', component: _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_1__["CardDetailsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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


function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function LoginComponent_ng_template_34_Template(rf, ctx) { }
function LoginComponent_ng_template_36_Template(rf, ctx) { }
class LoginComponent {
    constructor() {
        this.status = "no se ha enviado";
        this.exampleEmail = "ex@mp.le";
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
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 38, vars: 4, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", "container"], [1, "register-fields"], ["type", "text", 1, "form-control", 3, "placeholder"], ["email", ""], ["type", "password", "pass", "", 1, "form-control"], ["href", "", "data-toggle", "modal", "data-target", "#registerModal", "data-dismiss", "modal"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "google-login", 1, "btn", "btn-danger"], ["showLoginForm", ""], ["hideLoginForm", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00BFNo tienes cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "!Reg\u00EDstrate aqu\u00ED!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.onSubmit(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Continuar con Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_ng_template_34_Template, 0, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, LoginComponent_ng_template_36_Template, 0, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayLoginForm)("ngIfThen", _r2)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.exampleEmail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".register-form[_ngcontent-%COMP%] {\n  background-color: #ebebeb;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.register-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.register-form[_ngcontent-%COMP%]   .register-fields[_ngcontent-%COMP%] {\n  width: 400px;\n  margin-left: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUpBO0VBTVEsaUJBQUE7QUFDUjtBQVBBO0VBVVEsWUFBQTtFQUNBLGVBQUE7QUFBUiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXItZmllbGRzIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgfVxufSJdfQ== */"] });


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