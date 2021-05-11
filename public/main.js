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
        this.http.post('https://card-trading-api-dev.herokuapp.com//u', user).subscribe(data => {
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

/***/ "2Q77":
/*!************************************************!*\
  !*** ./src/app/chat-app/chat-app.component.ts ***!
  \************************************************/
/*! exports provided: ChatAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAppComponent", function() { return ChatAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-list/contact-list.component */ "h49d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-inbox/chat-inbox.component */ "VGJ9");




function ChatAppComponent_app_chat_inbox_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-inbox", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addressee", ctx_r0.addressee)("userid", ctx_r0.userid);
} }
class ChatAppComponent {
    constructor() { }
    ngOnInit() {
    }
    addresseeChange($event) {
        this.addressee = {
            id: $event.userid,
            name: $event.username
        };
    }
}
ChatAppComponent.ɵfac = function ChatAppComponent_Factory(t) { return new (t || ChatAppComponent)(); };
ChatAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatAppComponent, selectors: [["app-chat-app"]], inputs: { userid: "userid" }, decls: 5, vars: 2, consts: [[1, "container", "chat-box"], [1, "col-3"], [3, "chat", "changeAddressee"], [1, "col-9"], [3, "addressee", "userid", 4, "ngIf"], [3, "addressee", "userid"]], template: function ChatAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-contact-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeAddressee", function ChatAppComponent_Template_app_contact_list_changeAddressee_2_listener($event) { return ctx.addresseeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatAppComponent_app_chat_inbox_4_Template, 1, 2, "app-chat-inbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chat", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addressee);
    } }, directives: [_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_1__["ContactListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_3__["ChatInboxComponent"]], styles: [".chat-box[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border: 1px solid black;\n  padding-top: 35px;\n  padding-bottom: 50px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiY2hhdC1hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });


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
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact-list/contact-list.component */ "h49d");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");
/* harmony import */ var _chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat-app/chat-app.component */ "2Q77");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register-form/register-form.component */ "czHB");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trade/trade.component */ "6KaB");









const _c0 = ["contactos"];
const _c1 = ["tradeMod"];
function UserComponent_div_0_button_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A\u00F1adir amigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_0_button_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Intercambiar");
} }
function UserComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.addFrend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_0_button_9_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_div_0_button_9_ng_template_2_Template, 1, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.frens)("ngIfElse", _r12);
} }
function UserComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserComponent_div_0_button_9_Template, 4, 2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserComponent_div_0_button_10_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-contact-list", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.user.img ? ctx_r0.user.img : "https://i1.sndcdn.com/avatars-000310902564-g2unlt-t240x240.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.profiletext);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.myid != ctx_r0.user.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.myid == ctx_r0.user.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.userid);
} }
function UserComponent_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", c_r19.cardid)("title", c_r19.title)("description", c_r19.description)("img", c_r19.img)("type", c_r19.type);
} }
function UserComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_2_div_1_div_1_Template, 2, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.userCards);
} }
function UserComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A1Este usuario no tiene cartas! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_2_div_1_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_div_2_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userCards && ctx_r1.userCards.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.userCards || ctx_r1.userCards.length < 1);
} }
function UserComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-app", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userid", ctx_r2.myid);
} }
function UserComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.showChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-register-form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function UserComponent_div_23_Template_app_register_form_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const a_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.attributes[a_r22].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r22 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.attributes[a_r22].value)("type", ctx_r4.attributes[a_r22].type)("label", ctx_r4.attributes[a_r22].label);
} }
function UserComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.regMsg.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.regMsg.msg);
} }
function UserComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.regMsg.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.regMsg.msg);
} }
function UserComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-trade", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user1", ctx_r7.myid)("user2", ctx_r7.userid)("username", ctx_r7.user.username);
} }
const _c2 = function () { return { "pointer-events": "auto" }; };
class UserComponent {
    constructor(actRoute, http) {
        this.actRoute = actRoute;
        this.http = http;
        this.password = '';
        this.attributes = {
            name: { value: '', label: 'Name' },
            lastname: { value: '', label: 'Last_Name' },
            username: { value: '', label: 'Username' },
            img: { value: '', label: 'Image url' },
            profiletext: { value: '', label: 'Description' }
        };
        this.attributesKeys = Object.keys(this.attributes);
        this.frens = false;
        this.showMenu = {
            cards: true,
            chat: false
        };
    }
    ngOnInit() {
        this.actRoute.params.subscribe(p => {
            this.userid = p.id;
            this.http.get('https://card-trading-api-dev.herokuapp.com/u/' + this.userid).subscribe(data => this.user = data);
            this.http.get(`https://card-trading-api-dev.herokuapp.com/c?user=${this.userid}`).subscribe(data => {
                this.showCards();
                this.userCards = data;
            });
            this.http.get('https://card-trading-api-dev.herokuapp.com/login?token=' + localStorage.getItem("token")).subscribe(res => {
                this.myid = res.userid;
                this.http.get(`https://card-trading-api-dev.herokuapp.com/u/contacts/${this.userid}?otherId=${this.myid}`).subscribe(data => this.frens = data.length > 0);
            });
        });
    }
    ngOnChanges() {
        this.showCards();
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
            img: this.attributes.img.value,
            profiletext: this.attributes.profiletext.value
        };
        this.http.put('https://card-trading-api-dev.herokuapp.com/u/' + this.user.userid, user).subscribe(data => {
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
    addFrend() {
        if (this.frens) {
            this.trade.reload();
            $("#tradeModal").modal("show");
            return;
        }
        this.http.post('https://card-trading-api-dev.herokuapp.com/u/contacts/' + this.userid, { id: this.myid }).subscribe(data => {
            this.contactos.update();
            this.frens = true;
            alert("Contacto añadido");
        }, err => {
            alert(err.error.error);
        });
    }
    showCards() {
        this.showMenu.chat = false;
        this.showMenu.cards = true;
    }
    showChat() {
        this.showMenu.cards = false;
        this.showMenu.chat = true;
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], viewQuery: function UserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contactos = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trade = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 52, vars: 12, consts: [["class", "userInfo container", 4, "ngIf"], ["id", "usersCards", 4, "ngIf"], ["id", "userContacts", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-1"], [1, "btn", "btn-primary", 3, "click"], ["class", "col-1", 4, "ngIf"], ["id", "editModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", "container"], [1, "register-fields"], [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-dismiss", "modal", "data-toggle", "modal", "data-target", "#confirmModal", 1, "btn", "btn-primary", 3, "ngStyle"], ["id", "confirmModal", "tabindex", "-1", 1, "modal", "fade"], ["type", "password", 3, "input"], [1, "btn", "btn-primary", 3, "ngStyle", "click"], ["class", "modal fade", "id", "tradeModal", "tabindex", "-1", 4, "ngIf"], [1, "userInfo", "container"], [1, "col-3", 3, "src"], [1, "col-6"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-warning", "data-toggle", "modal", "data-target", "#editModal", 4, "ngIf"], [1, "col-3", 3, "id"], ["contactos", ""], [1, "btn", "btn-success", 3, "click"], [4, "ngIf", "ngIfElse"], ["yesFrens", ""], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "btn-warning"], ["id", "usersCards"], ["class", "userCards container", 4, "ngIf"], ["class", "noUserCards", 4, "ngIf"], [1, "userCards", "container"], [3, "id", "title", "description", "img", "type"], [1, "noUserCards"], ["id", "userContacts"], [3, "userid"], [3, "value", "type", "label", "valueChange"], [3, "ngClass"], ["id", "tradeModal", "tabindex", "-1", 1, "modal", "fade"], [3, "user1", "user2", "username"], ["tradeMod", ""]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserComponent_div_0_Template, 13, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_div_2_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_a_click_8_listener() { return ctx.showCards(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserComponent_div_10_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Editar usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserComponent_div_23_Template, 2, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserComponent_div_24_Template, 2, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Editar usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Introduzca su contrase\u00F1a para continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UserComponent_Template_input_input_44_listener($event) { return ctx.onChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UserComponent_div_45_Template, 2, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_49_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, UserComponent_div_51_Template, 3, 3, "div", 26);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu.chat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.myid == ctx.user.userid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributesKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frens);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_6__["ChatAppComponent"], _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_7__["RegisterFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _trade_trade_component__WEBPACK_IMPORTED_MODULE_8__["TradeComponent"]], styles: [".userInfo[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1%;\n  background-color: gray;\n  width: 100%;\n  height: 14em;\n}\n.userInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  width: 15%;\n  aspect-ratio: 1;\n}\n.userInfo[_ngcontent-%COMP%]   app-contact-list[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: grid;\n}\n.userInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: -webkit-fill-available;\n}\n.userInfo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-right: 0.5%;\n}\n.row[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.userCards[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n  height: 35em;\n  display: flex;\n  flex-flow: wrap;\n  background-color: lightgray;\n  overflow-y: scroll;\n}\n.userCards[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n.noUserCards[_ngcontent-%COMP%] {\n  height: -webkit-fill-available;\n  width: 100%;\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQU5BO0VBUUksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUNKO0FBWEE7RUFjSSxnQkFBQTtFQUNBLGFBQUE7QUFBSjtBQWZBO0VBbUJJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQURKO0FBdEJBO0VBMkJJLG9CQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQU1BO0VBQ0UseUJBQUE7QUFKRjtBQU9BO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBTEY7QUFEQTtFQVNJLFVBQUE7QUFMSjtBQVNBO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVJGIiwiZmlsZSI6InVzZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTRlbTtcblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gIH1cblxuICBhcHAtY29udGFjdC1saXN0IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cblxuICBkaXYge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNSU7XG4gIH1cbn1cblxuLnJvd3tcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnVzZXJDYXJkcyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBoZWlnaHQ6IDM1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgYXBwLWNhcmQge1xuICAgIG1hcmdpbjogMSU7XG4gIH1cbn1cblxuLm5vVXNlckNhcmRzIHtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAvL2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "6KaB":
/*!******************************************!*\
  !*** ./src/app/trade/trade.component.ts ***!
  \******************************************/
/*! exports provided: TradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeComponent", function() { return TradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");




function TradeComponent_div_14_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TradeComponent_div_14_ng_container_1_div_2_Template_app_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const c_r6 = ctx.$implicit; const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.selectInv(i_r3, c_r6.cardid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("smol", true)("id", c_r6.cardid)("title", c_r6.title)("description", c_r6.description)("img", c_r6.img)("type", c_r6.type);
} }
function TradeComponent_div_14_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 10);
} }
function TradeComponent_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TradeComponent_div_14_ng_container_1_div_2_Template, 2, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TradeComponent_div_14_ng_container_1_div_3_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.usersCards[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 == 0);
} }
function TradeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TradeComponent_div_14_ng_container_1_Template, 4, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.usersCards);
} }
const _c0 = function () { return { "pointer-events": "auto" }; };
class TradeComponent {
    constructor(http) {
        this.http = http;
        this.usersCards = [null, null];
        this.selCards = [TradeComponent.defaultCard, TradeComponent.defaultCard];
    }
    ngOnInit() {
        this.reload();
    }
    reload() {
        this.usersCards = [null, null];
        $("#confirmTrade").prop('disabled', true);
        this.http.get(`https://card-trading-api-dev.herokuapp.com/c?user=${this.user1}`).subscribe(data => this.usersCards[0] = data);
        this.http.get(`https://card-trading-api-dev.herokuapp.com/c?user=${this.user2}`).subscribe(data => this.usersCards[1] = data);
        this.selCards[0] = TradeComponent.defaultCard;
        this.selCards[1] = TradeComponent.defaultCard;
    }
    selectInv(inv, card) {
        this.selCards[parseInt(inv)] = this.usersCards[inv].find(e => e.cardid == card);
        $("#confirmTrade").prop('disabled', !this.selCards.every(v => v.img.length > 0));
    }
    addTrade() {
        $("#tradeModal").modal("hide");
        this.http.post(`https://card-trading-api-dev.herokuapp.com/u/trades`, { u1: this.user1, u2: this.user2, c1: this.selCards[0].cardid, c2: this.selCards[1].cardid, date: Date.now(), mode: 0 }).subscribe(data => { });
    }
}
TradeComponent.defaultCard = { cardid: -1, title: "", description: "", img: "", type: "tmp" };
TradeComponent.ɵfac = function TradeComponent_Factory(t) { return new (t || TradeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TradeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TradeComponent, selectors: [["app-trade"]], inputs: { user1: "user1", user2: "user2", username: "username" }, decls: 29, vars: 16, consts: [[1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "exchangeHdr"], ["class", "exchange", 4, "ngIf"], [1, "exchange"], [1, "spacer"], [1, "exchangeDetails"], [3, "smol", "id", "title", "description", "img", "type"], [1, "fas", "fa-sync-alt"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "confirmTrade", 1, "btn", "btn-success", 3, "ngStyle", "click"], [4, "ngFor", "ngForOf"], [1, "cardInv"], ["class", "spacer", 4, "ngIf"], [3, "smol", "id", "title", "description", "img", "type", "click"]], template: function TradeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Intercambiar con usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tus cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TradeComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TradeComponent_Template_button_click_27_listener() { return ctx.addTrade(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cartas de ", ctx.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usersCards[0] && ctx.usersCards[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("smol", true)("id", ctx.selCards[0].cardid)("title", ctx.selCards[0].title)("description", ctx.selCards[0].description)("img", ctx.selCards[0].img)("type", ctx.selCards[0].type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("smol", true)("id", ctx.selCards[1].cardid)("title", ctx.selCards[1].title)("description", ctx.selCards[1].description)("img", ctx.selCards[1].img)("type", ctx.selCards[1].type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".exchange[_ngcontent-%COMP%] {\n  display: flex;\n}\n.exchangeDetails[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.exchangeHdr[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.exchangeHdr[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:last-child {\n  text-align: end;\n}\n.exchangeHdr[_ngcontent-%COMP%], .exchangeDetails[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.cardInv[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n  height: 15em;\n  width: 42%;\n  display: flex;\n  flex-flow: wrap;\n  background-color: lightgray;\n  overflow-y: scroll;\n}\n.cardInv[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWRlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQ0E7RUFDSSxVQUFBO0FBQ0o7QUFDQTtFQUVRLFVBQUE7QUFBUjtBQUZBO0VBS1EsZUFBQTtBQUFSO0FBR0E7O0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUVBO0VBRUksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQURKO0FBUEE7RUFXUSxVQUFBO0FBRFIiLCJmaWxlIjoidHJhZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhjaGFuZ2V7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5leGNoYW5nZURldGFpbHN7XG4gICAgd2lkdGg6IDYwJTtcbn1cbi5leGNoYW5nZUhkciB7XG4gICAgYntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgYjpsYXN0LWNoaWxke1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxufVxuLmV4Y2hhbmdlSGRyLC5leGNoYW5nZURldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmNhcmRJbnZ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgaGVpZ2h0OiAxNWVtO1xuICAgIHdpZHRoOiA0MiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgIGFwcC1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAxJTtcbiAgICB9XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 40, vars: 0, consts: [[1, "main"], [1, "jumbotron", "jumbotron-fluid", "main-banner"], [1, "display-3", "text-center"], [1, "my-4"], [1, "lead", "text-center"], ["role", "button", "data-toggle", "modal", "data-target", "#registerModal", 1, "btn", "btn-outline-info", "btn-lg", "mr-3"], ["role", "button", "data-toggle", "modal", "data-target", "#loginModal", 1, "btn", "btn-outline-info", "btn-lg", "ml-3"], [1, "jumbotron", "jumbotron-fluid"], [1, "container"], [1, "row"], [1, "col-6"], [1, "text-jusitfy", 2, "line-height", "45px"], ["src", "https://www.creativefabrica.com/wp-content/uploads/2019/03/Silhouette-Tarot-cards-580x386.jpg"], [1, "col-6", "text-center"], ["src", "../../assets/bgs/cards-example.png", "alt", "show_cards.png"], [1, "text-center"], ["routerLink", "catalogue", 1, "btn", "btn-outline-info", 2, "padding", "5px 15px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Card Trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A1Colecciona cartas e intercambialas con tus amigos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicia ya!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Inicia Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A0\u00A0\u00A0\u00A0Card Trading es una app que te permite obtener cartas originales e intercambiarlas con amigos. Una vez al d\u00EDa al iniciar sesi\u00F3n se te dar\u00E1 una carta al azar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0 Obten estas y varias otras cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00A1Mira todas las cartas aqu\u00ED!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n.main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.main[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.main[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 80vw;\n  margin-top: 0;\n}\n.main[_ngcontent-%COMP%]   .main-banner[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n#obscure-banner[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjtBQUpBO0VBTUksZ0JBQUE7QUFDSjtBQVBBO0VBVUksY0FBQTtBQUFKO0FBVkE7RUFjSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBREo7QUFmQTtFQW9CSSxZQUFBO0FBRko7QUFNQTtFQUNFLDJCQUFBO0FBSkYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcblxuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5iYW5uZXItdGV4dCB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cblxuICAuanVtYm90cm9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLm1haW4tYmFubmVyIHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gIH1cbn1cblxuI29ic2N1cmUtYmFubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuIl19 */"] });


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

/***/ "FyLO":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 5, vars: 0, template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pagina no encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["span[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0FBQUYiLCJmaWxlIjoiZXJyb3ItcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xuICBmb250LXNpemU6IDRlbTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");




function CatalogueComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", c_r1.cardid)("title", c_r1.title)("description", c_r1.description)("img", c_r1.img)("type", c_r1.type);
} }
class CatalogueComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.get('https://card-trading-api-dev.herokuapp.com/c').subscribe(data => {
            this.cards = data;
        });
    }
}
CatalogueComponent.ɵfac = function CatalogueComponent_Factory(t) { return new (t || CatalogueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CatalogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogueComponent, selectors: [["app-catalogue"]], decls: 2, vars: 1, consts: [[1, "cardsss"], [4, "ngFor", "ngForOf"], [3, "id", "title", "description", "img", "type"]], template: function CatalogueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatalogueComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: [".cardsss[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n  width: 99.9%;\n  height: 40em;\n  display: flex;\n  flex-flow: wrap;\n  background-color: lightgray;\n  overflow-y: scroll;\n}\n.cardsss[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2d1ZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQVJBO0VBU1EsVUFBQTtFQUNBLFdBQUE7QUFFUiIsImZpbGUiOiJjYXRhbG9ndWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHNzc3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB3aWR0aDogOTkuOSU7XG4gICAgaGVpZ2h0OiA0MGVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYXBwLWNhcmR7XG4gICAgICAgIG1hcmdpbjogMSU7XG4gICAgICAgIHBhZGRpbmc6IDElO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "N0TZ":
/*!******************************************!*\
  !*** ./src/app/shared/socket.service.ts ***!
  \******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const SOCKET_ENDPOINT = 'ws://https://card-trading-api-dev.herokuapp.com';
class SocketService {
    constructor() {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])(SOCKET_ENDPOINT);
    }
    logout(room) {
        this.socket.emit('logout', room);
    }
    login(name, room) {
        this.socket.emit('login', { name, room });
    }
    sendMessage(message, receiver, sender, date) {
        this.socket.emit('send_message', { msg: message, addresseeid: receiver, userid: sender, date });
    }
    getMessage() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
            this.socket.on('message', message => {
                observer.next(message);
            });
        });
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function UserCardComponent_div_0_div_1_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.user.profiletext);
} }
function UserCardComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCardComponent_div_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.contactClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserCardComponent_div_0_div_1_h5_5_Template, 2, 1, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.user.img ? ctx_r2.user.img : "https://i1.sndcdn.com/avatars-000310902564-g2unlt-t240x240.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.user.profiletext);
} }
function UserCardComponent_div_0_div_2_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.user.profiletext);
} }
function UserCardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserCardComponent_div_0_div_2_h5_5_Template, 2, 1, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/user/" + ctx_r3.user.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.user.img ? ctx_r3.user.img : "https://i1.sndcdn.com/avatars-000310902564-g2unlt-t240x240.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.user.profiletext);
} }
function UserCardComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCardComponent_div_0_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.activateDeleteAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserCardComponent_div_0_div_1_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserCardComponent_div_0_div_2_Template, 6, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserCardComponent_div_0_button_3_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.chat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.removable > -1);
} }
function UserCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCardComponent_div_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deactivateDeleteAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCardComponent_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r1.user.userid + ctx_r1.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00BFDesea eliminar contacto \"", ctx_r1.user.username, "\"? ");
} }
class UserCardComponent {
    constructor(http) {
        this.http = http;
        this.removable = -1;
        this.rer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeChatUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteAlert = false;
    }
    ngOnInit() {
    }
    hdrSize(b) {
        if (!b)
            return window.location.href.includes("userlist") ? '3em' : 'smaller';
        return window.location.href.includes("userlist") ? '1.5em' : 'xx-small';
    }
    remove() {
        this.http.delete('https://card-trading-api-dev.herokuapp.com/u/contacts?oid=' + this.removable + '&id=' + this.extra).subscribe(data => {
            this.rer.emit();
        });
    }
    activateDeleteAlert() {
        this.deleteAlert = true;
    }
    deactivateDeleteAlert() {
        this.deleteAlert = false;
    }
    contactClick() {
        this.changeChatUser.emit({
            username: this.user.username,
            userid: this.user.userid
        });
    }
}
UserCardComponent.ɵfac = function UserCardComponent_Factory(t) { return new (t || UserCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCardComponent, selectors: [["app-user-card"]], inputs: { user: "user", removable: "removable", extra: "extra", chat: "chat" }, outputs: { rer: "rer", changeChatUser: "changeChatUser" }, decls: 2, vars: 2, consts: [["class", "userCard", 4, "ngIf"], ["class", "deleteAlert", 3, "id", 4, "ngIf"], [1, "userCard"], [3, "click", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [3, "click"], ["alt", "", 3, "src"], [1, "userInfo"], [4, "ngIf"], [3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], [1, "deleteAlert", 3, "id"], [1, "buttons"], [1, "btn", "btn-outline-info", "deleteAlertBtn", 3, "click"], [1, "btn", "btn-outline-danger", "deleteAlertBtn", 3, "click"]], template: function UserCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserCardComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserCardComponent_div_1_Template, 7, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.deleteAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAlert);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".userCard[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 1%;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  min-width: 100%;\n  height: -webkit-fill-available;\n}\n.userCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: inherit;\n  display: flex;\n  cursor: pointer;\n}\n.userCard[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  max-width: 20% !important;\n  aspect-ratio: 1;\n}\n.userCard[_ngcontent-%COMP%]   .userInfo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: initial;\n  width: 60% !important;\n  max-width: 60% !important;\n  margin-left: 1%;\n}\n.userCard[_ngcontent-%COMP%]   .userInfo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 150%;\n  margin: 2% 0 0 0;\n}\n.userCard[_ngcontent-%COMP%]   .userInfo[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 70%;\n  height: 50%;\n  margin: 0%;\n  overflow-y: scroll;\n  word-wrap: break-word;\n  font-style: italic;\n  font-weight: unset;\n}\n.userCard[_ngcontent-%COMP%]   .userInfo[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n  background: transparent;\n}\n.userCard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5%;\n  font-size: 75%;\n  padding: 1% 9% 1% 3%;\n  right: 0.5%;\n  bottom: 0.5%;\n}\n.deleteAlert[_ngcontent-%COMP%] {\n  padding: 3px;\n  position: relative;\n}\n.deleteAlert[_ngcontent-%COMP%]   .deleteAlertBtn[_ngcontent-%COMP%] {\n  padding: 0px 5px 0px 5px;\n  margin: 0px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFFQSw4QkFBQTtBQUFGO0FBTkE7RUFTSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFBSjtBQVhBO0VBZUksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFESjtBQWhCQTtFQXFCSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBRko7QUF4QkE7RUE2Qk0sZUFBQTtFQUNBLGdCQUFBO0FBRk47QUE1QkE7RUFrQ00sY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFITjtBQXJDQTtFQTRDTSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBSk47QUExQ0E7RUFtREksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOSjtBQVVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBUkY7QUFNQTtFQUtJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUkoiLCJmaWxlIjoidXNlci1jYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJDYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDElO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IDEwMCU7XG5cbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuXG4gIGRpdiB7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gIH1cblxuICAudXNlckluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgIG1hcmdpbjogMiUgMCAwIDA7XG4gICAgfVxuXG4gICAgaDUge1xuICAgICAgZm9udC1zaXplOiA3MCU7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIG1hcmdpbjogMCU7XG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXdlaWdodDogdW5zZXQ7XG4gICAgfVxuXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogMHB4O1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cblxuICBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNSU7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgcGFkZGluZzogMSUgOSUgMSUgMyU7XG4gICAgcmlnaHQ6IDAuNSU7XG4gICAgYm90dG9tOiAwLjUlO1xuICB9XG59XG5cbi5kZWxldGVBbGVydCB7XG4gIHBhZGRpbmc6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5kZWxldGVBbGVydEJ0biB7XG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4iXX0= */"] });


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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "1W4x");










class AppComponent {
    constructor(http, userService, _authService) {
        this.http = http;
        this.userService = userService;
        this._authService = _authService;
        this.title = 'Card-Trading';
        this.users = [];
        this.showChat = false;
        this.isLoggedIn = false;
    }
    getUsers() {
        this.http.get('https://card-trading-api-dev.herokuapp.com/u/40000').subscribe((user) => console.log(user));
    }
    ngOnInit() {
        this.isLoggedIn = this._authService.loggedIn();
    }
    ngAfterContentInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])], decls: 7, vars: 1, consts: [["role", "main", 3, "ngClass"], ["id", "loginModal", "tabindex", "-1", 1, "modal", "fade"], ["id", "registerModal", "tabindex", "-1", 1, "modal", "fade"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isLoggedIn ? "loggedInContent" : "content");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20vh 8% 32px 8%;\n  flex-direction: column;\n  align-items: center;\n  width: 84%;\n}\n.loggedInContent[_ngcontent-%COMP%] {\n  margin: 20vh 5% 0px 0px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n.navButts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBKQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUVBOzs7Ozs7RUFNRSxhQUFBO0FBQUY7QUFHQTtFQUNFLFNBQUE7QUFERjtBQUlBO0VBQ0UsT0FBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUhGO0FBUEE7RUFhSSxZQUFBO0VBQ0EscUJBQUE7QUFISjtBQU9BO0VBQ0UsY0FBQTtBQUxGO0FBUUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQU5GO0FBU0E7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVBGO0FBVUE7RUFDRSxzQkFBQTtBQVJGO0FBQ0Esc0JBQXNCO0FBWXRCO0VBRUU7O0lBRUUsV0FBQTtFQVhGO0VBY0E7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQVpGO0VBZUE7SUFDRSxpQkFBQTtFQWJGO0VBZ0JBO0lBQ0UsWUFBQTtJQUNBLHdCQUFBO0VBZEY7QUFDRjtBQWlCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VBZkY7QUFDRjtBQWtCQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQWhCRiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4udG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4udG9vbGJhciBpbWcge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwdmggOCUgMzJweCA4JTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDg0JTtcbn1cblxuLmxvZ2dlZEluQ29udGVudCB7XG4gIG1hcmdpbjogMjB2aCA1JSAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cblxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgLmNhcmQtY29udGFpbmVyPio6bm90KC5jaXJjbGUtbGluayksXG4gIC50ZXJtaW5hbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cblxuLm5hdkJ1dHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4iXX0= */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trade/trade.component */ "6KaB");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");








function AdminComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_div_2_Template_app_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const c_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.selectCard(c_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("smol", true)("id", c_r1.cardid)("title", c_r1.title)("description", c_r1.description)("img", c_r1.img)("type", c_r1.type);
} }
const _c0 = function (a0) { return { "border-color": a0 }; };
const API_URL = 'https://card-trading-api-dev.herokuapp.com';
class AdminComponent {
    constructor(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.cartas = [];
        this.newCard = {};
        this.newImg = "";
        this.reader = new FileReader();
        this.cardComplete = false;
        Object.assign(this.newCard, _trade_trade_component__WEBPACK_IMPORTED_MODULE_0__["TradeComponent"].defaultCard);
        this.attributesKeys = Object.keys(this.newCard);
        this.reader.addEventListener("load", () => {
            this.newCard.img = (this.reader.result);
        });
    }
    ngOnInit() {
        if (!this.authService.loggedIn())
            this.router.navigate(["/"]);
        this.http.get(`${API_URL}/login?token=${localStorage.getItem("token")}`).subscribe(res => {
            this.http.get(`${API_URL}/u/${res.userid}`).subscribe(data => {
                if (data.role != "admin")
                    this.router.navigate(["/"]);
            });
        });
        this.http.get(`${API_URL}/c`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(a => { })).subscribe(data => this.cartas = data);
        $('#deletus').hide();
    }
    refreshCards(died) {
        alert("updated");
        this.http.get(`${API_URL}/c`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(a => { })).subscribe(data => this.cartas = data);
        /*const card=this.cartas.findIndex(c=>c.cardid==this.newCard.cardid);
        if(card<0) this.cartas.push(this.newCard);
        else{
          if(died) this.cartas.splice(card,1);
          else Object.assign(this.cartas[card],this.newCard);
        }*/
    }
    selectCard(c) {
        Object.assign(this.newCard, c);
        this.checkDeletus();
    }
    verify() {
        $('#saveCard').prop('disabled', !(this.newCard.cardid >= 0 && this.newCard.cardid <= this.cartas.length && this.newCard.type > -1 && this.attributesKeys.slice(1, 4).every(k => this.newCard[k].length > 0)));
        this.checkDeletus();
    }
    checkDeletus() {
        if (this.newCard.cardid < this.cartas.length)
            $('#deletus').show();
        else
            $('#deletus').hide();
    }
    clear() {
        Object.assign(this.newCard, _trade_trade_component__WEBPACK_IMPORTED_MODULE_0__["TradeComponent"].defaultCard);
        $('#saveCard').prop('disabled', true);
        $('#deletus').hide();
    }
    createCard() {
        if (this.file) {
            const formData = new FormData();
            formData.append('file', this.file);
            this.http.post(`${API_URL}/file`, formData).subscribe();
            this.file = undefined;
            $("#fileInput").val("");
        }
        this.newCard.img = `${API_URL}/${this.newCard.cardid}.png`;
        if (this.cartas.find(c => c.cardid == this.newCard.cardid))
            this.http.put(`${API_URL}/c`, this.newCard).subscribe(_ => this.refreshCards(false));
        else
            this.http.post(`${API_URL}/c`, this.newCard).subscribe(_ => this.refreshCards(false));
        this.http.get(`${API_URL}/${this.newCard.cardid}.png`).subscribe(_ => { }, err => console.log("Este error es a propósito"));
    }
    deleteCard() {
        this.http.delete(`${API_URL}/c/${this.newCard.cardid}`).subscribe(_ => this.refreshCards(true));
    }
    onChange(thing, event) {
        this.newCard[thing] = event.target.value;
        this.verify();
    }
    fileChanged(e) {
        if (e.target.files.length < 1)
            return;
        const file = e.target.files[0];
        const fail = file.slice(0, file.size, 'image/*');
        this.file = new File([fail], this.newCard.cardid + ".png", { type: 'image/*' });
        this.reader.readAsDataURL(e.target.files[0]);
        this.verify();
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 35, vars: 13, consts: [[1, "row", "container"], [1, "cards", "col-3"], [4, "ngFor", "ngForOf"], [2, "align-self", "center"], [3, "id", "title", "description", "img", "type"], [1, "col-6", "register-form", "container"], [1, "register-fields"], ["type", "number", 1, "form-control", 3, "value", "ngStyle", "input"], ["type", "text", 1, "form-control", 3, "value", "input"], ["id", "fileInput", "type", "file", "accept", "image/*", 3, "change"], [1, "together"], ["type", "range", "min", "0", "max", "5", 1, "form-control", 3, "value", "input"], [1, "spacer"], ["id", "deletus", 1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], ["disabled", "", "id", "saveCard", 1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-check-circle"], [3, "smol", "id", "title", "description", "img", "type", "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AdminComponent_div_2_Template, 2, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "card id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AdminComponent_Template_input_input_10_listener($event) { return ctx.onChange("cardid", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AdminComponent_Template_input_input_14_listener($event) { return ctx.onChange("title", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AdminComponent_Template_input_input_18_listener($event) { return ctx.onChange("description", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_22_listener($event) { return ctx.fileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AdminComponent_Template_input_input_26_listener($event) { return ctx.onChange("type", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_29_listener() { return ctx.deleteCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\uD83D\uDDD1\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_31_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_33_listener() { return ctx.createCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cartas);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.newCard.cardid)("title", ctx.newCard.title)("description", ctx.newCard.description)("img", ctx.newCard.img)("type", ctx.newCard.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.newCard.cardid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.newCard.cardid >= 0 && ctx.newCard.cardid <= ctx.cartas.length ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.newCard.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.newCard.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.newCard.type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: [".row[_ngcontent-%COMP%] {\n  width: 100em;\n  grid-column-gap: 1%;\n}\n.together[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  justify-content: space-evenly;\n  background-color: #F0F0F0;\n  align-items: center;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  align-self: center;\n}\ninput[type=\"range\"][_ngcontent-%COMP%] {\n  margin-left: 1%;\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XG4gICAgd2lkdGg6IDEwMGVtO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMSU7XG59XG4udG9nZXRoZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5jYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuaW5wdXRbdHlwZT1cInJhbmdlXCJde1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB3aWR0aDogNzUlO1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-card/user-card.component */ "SN7D");







function UserListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-user-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", user_r1);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { "display": a0 }; };
class UserListComponent {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this.users = [];
        this.usuarios = [];
        this.usersInPage = [];
        this.currPage = 0;
        this.usersPerPage = 24;
        this.filter = '';
    }
    ngOnInit() {
        this.http.get('https://card-trading-api-dev.herokuapp.com/u').subscribe(data => {
            this.users = data;
            this.usuarios = data;
            this.usersInPage = this.usuarios.slice(0, this.usersPerPage);
        }, err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    this._router.navigate(['/login']);
                }
            }
        });
    }
    updateFilter(e) {
        this.filter = e.target.value;
        if (this.filter.length <= 0) {
            this.users = this.usuarios;
            this.currPage = 0;
            this.updatePageUsers();
        }
    }
    applyFilter() {
        if (this.filter.length > 0)
            this.users = this.usuarios.filter(user => { var _a; return (_a = user.username) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(this.filter.toLowerCase()); });
        else
            this.users = this.usuarios;
        this.currPage = 0;
        this.updatePageUsers();
    }
    updatePageUsers() {
        this.usersInPage = this.users.slice(this.currPage * this.usersPerPage, (this.currPage + 1) * this.usersPerPage);
    }
    nextPage(s) {
        this.currPage += s;
        this.updatePageUsers();
    }
    prevPage(s) {
        this.currPage -= s;
        this.updatePageUsers();
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 31, vars: 25, consts: [[1, "navbar", "navbar-light", "bg-light", "justify-content-center", 2, "background-color", "transparent!important", "color", "transparent"], [1, "form-inline"], ["name", "search-user", "type", "search", "placeholder", "Usuario", "aria-label", "Search", 1, "form-control", "mr-sm-2", 2, "width", "60vmax", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "my-2", "my-sm-0", 3, "click"], [1, "users"], [4, "ngFor", "ngForOf"], ["aria-label", "search items pages"], [1, "pagination", "justify-content-center"], [3, "ngClass"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link", 3, "click"], [1, "page-item", 3, "ngStyle"], [1, "page-link", 3, "click"], ["aria-current", "page", 1, "page-item", "active"], [1, "page-link"], [3, "user"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_2_listener($event) { return ctx.filter = $event; })("ngModelChange", function UserListComponent_Template_input_ngModelChange_2_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_3_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserListComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_11_listener() { return ctx.prevPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_14_listener() { return ctx.prevPage(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_17_listener() { return ctx.prevPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_23_listener() { return ctx.nextPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_26_listener() { return ctx.nextPage(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_29_listener() { return ctx.nextPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Siguiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.usersInPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, "page-item" + (ctx.currPage < 1 ? " disabled" : "")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx.currPage < 2 ? "none" : "initial"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currPage - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, ctx.currPage < 1 ? "none" : "initial"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currPage + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c1, ctx.currPage > ctx.users.length / ctx.usersPerPage - 2 ? "none" : "initial"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currPage + 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c1, ctx.currPage > ctx.users.length / ctx.usersPerPage - 3 ? "none" : "initial"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currPage + 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, "page-item" + (ctx.currPage > ctx.users.length / ctx.usersPerPage - 2 ? " disabled" : "")));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__["UserCardComponent"]], styles: [".users[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 33% 33% 33%;\n  background-color: lightgray;\n  height: -webkit-fill-available;\n}\n.users[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: -webkit-center;\n  height: 5em;\n  margin: 0% 1.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUxBO0VBTVEsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUVSIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2Vyc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBkaXZ7XG4gICAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDVlbTtcbiAgICAgICAgbWFyZ2luOiAwJSAxLjUlO1xuICAgIH1cbn0iXX0= */"] });


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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/socket.service */ "N0TZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message/message.component */ "eUAL");







function ChatInboxComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-message", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", x_r1.senderid == ctx_r0.userid ? "sender" : "receiver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", x_r1.senderid == ctx_r0.userid ? "sender" : "receiver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", x_r1.msg)("date", x_r1.senddate);
} }
const CHAT_API = 'https://card-trading-api-dev.herokuapp.com/chat';
class ChatInboxComponent {
    constructor(socketService, http) {
        this.socketService = socketService;
        this.http = http;
        this.isLoggedIn = false;
        this.messages = ["mensajes para todos"];
    }
    ngOnChanges() {
        if (this.addressee) {
            this.messages.length = 0;
            this.getStoredMessages();
            if (this.currentRoom) {
                this.socketService.logout(this.currentRoom);
            }
            this.currentRoom = `${this.userid}_${this.addressee.id}`;
            this.socketService.login('idk', this.currentRoom);
        }
    }
    ngOnInit() {
        this.socketSubscription = this.socketService.getMessage().subscribe(data => {
            this.messages.push(data);
        });
    }
    ngOnDestroy() {
        this.socketSubscription.unsubscribe();
    }
    SendMessage() {
        if (this.message) {
            let date = moment__WEBPACK_IMPORTED_MODULE_0__().format('MMMM Do YYYY, h:mm:ss a');
            this.socketService.sendMessage(this.message, this.addressee.id, this.userid, date);
            this.messages.push({
                msg: this.message,
                senderid: this.userid,
                senddate: date
            });
            this.http.post(`${CHAT_API}`, {
                msg: this.message,
                addresseeid: this.addressee.id,
                userid: this.userid,
                date
            }).subscribe();
            this.message = '';
        }
    }
    getStoredMessages() {
        this.http.get(`${CHAT_API}?addresseeid=${this.addressee.id}&userid=${this.userid}`).subscribe(res => {
            res.map(element => {
                this.messages.push(element);
            });
        });
    }
}
ChatInboxComponent.ɵfac = function ChatInboxComponent_Factory(t) { return new (t || ChatInboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ChatInboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatInboxComponent, selectors: [["app-chat-inbox"]], inputs: { addressee: "addressee", userid: "userid" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 3, consts: [[1, "chat-messages"], [1, "users"], [1, "username-holder"], [1, "chat-messages-show-container"], ["id", "message-list", 1, "chat-messages-show-list"], ["class", "message-row", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-messages-create-container"], ["type", "text", 1, "chat-messages-create-input", 3, "ngModel", "ngModelChange"], [1, "chat-messages-create-button", "btn", "btn-primary", 3, "click"], [1, "message-row", 3, "ngClass"], [1, "chat-msg", 3, "ngClass"], [3, "message", "date"]], template: function ChatInboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChatInboxComponent_div_7_Template, 3, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatInboxComponent_Template_input_ngModelChange_9_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatInboxComponent_Template_button_click_10_listener() { return ctx.SendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.addressee == null ? null : ctx.addressee.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]], styles: [".chat-messages[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.chat-messages-show-container[_ngcontent-%COMP%] {\n  background: #c3c3c3;\n  height: 65vh;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  margin-top: 0;\n}\n.chat-messages-show-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.chat-messages-create-container[_ngcontent-%COMP%] {\n  background: #616161;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n}\n.chat-messages-create-input[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 29px 30px;\n  flex: 2;\n}\n.chat-messages-create-button[_ngcontent-%COMP%] {\n  height: 50px;\n  margin: auto 40px;\n  width: 100px;\n}\n.message-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chat-msg[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: 15px 30px;\n  margin: 10px;\n  max-width: 78%;\n  color: white;\n  display: inline-block;\n}\n.receiver[_ngcontent-%COMP%] {\n  border-radius: 25px 25px 25px 0;\n}\n.receiver[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: grey;\n  text-align: left;\n}\n.sender[_ngcontent-%COMP%] {\n  text-align: right;\n  border-radius: 25px 25px 0 25px;\n}\n.sender[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: right;\n  background-color: #00d800;\n}\n.username-holder[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #a1a1a1;\n  text-align: center;\n  border-radius: 10px 10px 0px 0px;\n  border-bottom: 1px solid white;\n}\n.username-holder[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtaW5ib3guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGRjtBQUtBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7QUFKRjtBQU9BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0FBTkY7QUFTQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBUEY7QUFXQTtFQUNFLCtCQUFBO0FBVEY7QUFRQTtFQUlJLHNCQUFBO0VBQ0EsZ0JBQUE7QUFUSjtBQWVBO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtBQWJGO0FBV0E7RUFLSSxpQkFBQTtFQUNBLHlCQUFBO0FBYko7QUFtQkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdDQUFBO0VBQ0EsOEJBQUE7QUFqQkY7QUFVQTtFQVVJLGdCQUFBO0VBQ0EsY0FBQTtBQWpCSiIsImZpbGUiOiJjaGF0LWluYm94LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtbWVzc2FnZXMge1xuICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuLmNoYXQtbWVzc2FnZXMtc2hvdy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xuICBoZWlnaHQ6IDY1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY2hhdC1tZXNzYWdlcy1zaG93LWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNoYXQtbWVzc2FnZXMtY3JlYXRlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICM2MTYxNjE7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2hhdC1tZXNzYWdlcy1jcmVhdGUtaW5wdXQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW46IDI5cHggMzBweDtcbiAgZmxleDogMlxufVxuXG4uY2hhdC1tZXNzYWdlcy1jcmVhdGUtYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IGF1dG8gNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4ubWVzc2FnZS1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoYXQtbXNnIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDc4JTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cblxuLnJlY2VpdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDI1cHggMDtcblxuICBsaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gIH1cblxufVxuXG4uc2VuZGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDI1cHg7XG5cbiAgbGkge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMTYsIDApO1xuXG4gIH1cblxufVxuXG4udXNlcm5hbWUtaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMTYxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcblxuICBoNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "WC9n":
/*!******************************************!*\
  !*** ./src/app/notis/notis.component.ts ***!
  \******************************************/
/*! exports provided: NotisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotisComponent", function() { return NotisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");





function NotisComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "T\u00FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotisComponent_div_3_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const t_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.trade(t_r1, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rechazar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotisComponent_div_3_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const t_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.trade(t_r1, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mini", true)("id", t_r1.card1.cardid)("title", t_r1.card1.title)("description", t_r1.card1.description)("img", t_r1.card1.img)("type", t_r1.card1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mini", true)("id", t_r1.card2.cardid)("title", t_r1.card2.title)("description", t_r1.card2.description)("img", t_r1.card2.img)("type", t_r1.card2.type);
} }
class NotisComponent {
    constructor(http) {
        this.http = http;
        this.hasTrades = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    updateTrades() {
        this.http.get('https://card-trading-api-dev.herokuapp.com/u/trades/' + this.user).subscribe(data => {
            this.trades = data;
            this.hasTrades.emit(this.trades.length > 0);
        });
    }
    init(userid) {
        this.user = userid;
        this.updateTrades();
    }
    trade(trade, mode) {
        console.log(trade, mode);
        const body = {
            c1: trade.card1.cardid,
            c2: trade.card2.cardid,
            u1: trade.userid,
            u2: this.user,
            date: trade.date,
            mode: mode ? 1 : 2
        };
        this.http.post('https://card-trading-api-dev.herokuapp.com/u/trades', body).subscribe(data => {
            alert("Intercambio exitoso");
            this.updateTrades();
        }, err => {
            alert(err);
            this.updateTrades();
        });
    }
}
NotisComponent.ɵfac = function NotisComponent_Factory(t) { return new (t || NotisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NotisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotisComponent, selectors: [["app-notis"]], outputs: { hasTrades: "hasTrades" }, decls: 4, vars: 1, consts: [[1, "dropdown-item"], [1, "trades"], [4, "ngFor", "ngForOf"], [1, "dropdown-divider"], ["href", "#", 1, "trade", "dropdown-item"], [1, "spacer"], [3, "mini", "id", "title", "description", "img", "type"], [1, "fas", "fa-sync-alt"], [1, "butts"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "click"]], template: function NotisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Intercambios pendientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotisComponent_div_3_Template, 19, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: [".trades[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 17em;\n}\n.trades[_ngcontent-%COMP%]   .trade[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.trades[_ngcontent-%COMP%]   .trade[_ngcontent-%COMP%]   .butts[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  justify-content: flex-end;\n}\n.trades[_ngcontent-%COMP%]   .trade[_ngcontent-%COMP%]   .butts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0% 1%;\n  width: 30%;\n  font-size: 50%;\n  padding: 1%;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFIQTtFQUtZLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFSQTtFQVVZLGNBQUE7RUFDQSx5QkFBQTtBQUNaO0FBWkE7RUFhZ0IsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVoQjtBQUdBO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0FBREoiLCJmaWxlIjoibm90aXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhZGVze1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDE3ZW07XG4gICAgLnRyYWRle1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0c3sgXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxJTs7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCUgMSU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgd2lkdGg6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card-details/card-details.component */ "jXAV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing.module */ "lm+D");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-card/user-card.component */ "SN7D");
/* harmony import */ var _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat-inbox/chat-inbox.component */ "VGJ9");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "h49d");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/socket.service */ "N0TZ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _notis_notis_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notis/notis.component */ "WC9n");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./trade/trade.component */ "6KaB");
/* harmony import */ var _chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chat-app/chat-app.component */ "2Q77");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./message/message.component */ "eUAL");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"], _shared_socket_service__WEBPACK_IMPORTED_MODULE_20__["SocketService"], {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["GoogleLoginProvider"]('85332580143-t99f1q0ao3577q9d7mqtc0oiqttgrmog.apps.googleusercontent.com')
                    }
                ]
            },
        }
        /*{
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }*/ 
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
        _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_10__["CatalogueComponent"],
        _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_11__["CardDetailsComponent"],
        _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"],
        _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_14__["UserCardComponent"],
        _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_15__["ChatInboxComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
        _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__["ContactListComponent"],
        _notis_notis_component__WEBPACK_IMPORTED_MODULE_22__["NotisComponent"],
        _trade_trade_component__WEBPACK_IMPORTED_MODULE_23__["TradeComponent"],
        _chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_24__["ChatAppComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
        _message_message_component__WEBPACK_IMPORTED_MODULE_26__["MessageComponent"],
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_27__["ErrorPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"]] }); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this._loginUrl = "https://card-trading-api-dev.herokuapp.com/login";
    }
    loginUser(user) {
        return this.http.post(this._loginUrl, user);
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    logoutUser() {
        localStorage.removeItem('token');
        this._router.navigate(['']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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

/***/ "eUAL":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MessageComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.container = document.getElementById("message-list");
        this.container.scrollTop = this.container.scrollHeight;
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], inputs: { message: "message", date: "date" }, decls: 4, vars: 2, template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.message, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("sent: ", ctx.date, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notis_notis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notis/notis.component */ "WC9n");







const _c0 = ["notis"];
function HeaderComponent_li_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r5.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
} }
function HeaderComponent_li_7_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_7_ng_template_2_a_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.process(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-enabled", ctx_r10.canCheckIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
} }
function HeaderComponent_li_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_li_7_ng_template_2_a_0_Template, 2, 2, "a", 26);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLogged);
} }
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_7_a_1_Template, 2, 2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_li_7_ng_template_2_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.link.length > 0)("ngIfElse", _r7);
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login/Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} }
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_li_9_div_2_Template, 1, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-notis", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hasTrades", function HeaderComponent_li_9_Template_app_notis_hasTrades_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.hasTrades($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.hasNotis);
} }
function HeaderComponent_li_10_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_10_a_6_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19._authService.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "user/" + ctx_r3.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isAdmin);
} }
const _c1 = function () { return { "pointer-events": "auto" }; };
const API_URL = 'https://card-trading-api-dev.herokuapp.com';
class HeaderComponent {
    constructor(_authService, http) {
        this._authService = _authService;
        this.http = http;
        this.isLogged = false;
        this.isAdmin = false;
        this.canCheckIn = false;
        this.hasNotis = false;
        this.card = { cardid: "ERROR", title: "ERR_0", description: "An unexpected error has ocurred", img: "", type: 2 };
        this.menuItems = [
            { linkid: 0, name: "FreeCard", link: "" },
            { linkid: 1, name: "Cartas", link: "catalogue" },
            { linkid: 2, name: "Usuarios", link: "userlist" }
        ];
    }
    ngOnInit() {
        if (!(this.isLogged = this._authService.loggedIn()))
            return;
        this.http.get(`${API_URL}/login?token=${localStorage.getItem("token")}`).subscribe(res => {
            this.userid = res.userid;
            this.http.get(`${API_URL}/u/${this.userid}`).subscribe(res => {
                this.isAdmin = res.role === "admin";
            });
            this.notis.init(this.userid);
            if (!res.checkin) {
                this.canCheckIn = true;
            }
            else {
                let todayStart = new Date();
                todayStart.setUTCHours(0, 0, 0, 0);
                this.canCheckIn = todayStart.getTime() - res.checkin > 0;
            }
        });
    }
    process() {
        if (!this.canCheckIn)
            return;
        this.canCheckIn = false;
        this.http.put(`${API_URL}/u/` + this.userid, { checkin: "" + Date.now() }).subscribe(data => {
            this.http.get(`${API_URL}/c`).subscribe(cards => {
                const cardid = Math.floor(Math.random() * cards.length);
                console.log(cardid);
                this.http.post(`${API_URL}/c/` + this.userid, { cardid }).subscribe(_ => {
                    this.http.get(`${API_URL}/c/` + cardid).subscribe(card => {
                        this.card = card;
                        localStorage.setItem('token', data.token);
                        $("#gottenCard").modal("show");
                    });
                });
            });
        }, err => console.error(err));
    }
    hasTrades(b) {
        this.hasNotis = b;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notis = _t.first);
    } }, decls: 26, vars: 11, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "header"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "flex-grow-1", "text-right", "ml-auto", "collapse", "navbar-collapse", "justify-content-end", 2, "margin-right", "8%"], [1, "navbar-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item dropdown", 4, "ngIf"], ["class", "nav-item dropdown", "style", "z-index: 2000;", 4, "ngIf"], ["id", "gottenCard", "tabindex", "-1", 1, "modal", "fade"], ["gotModal", ""], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "id", "title", "description", "img", "type"], [1, "modal-footer"], ["data-dismiss", "modal", 1, "btn", "btn-warning", 3, "ngStyle"], [1, "nav-item"], ["class", "nav-link navbar-link", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["elseA", ""], [1, "nav-link", "navbar-link", 3, "routerLink"], ["class", "nav-link navbar-link", 3, "click", 4, "ngIf"], [1, "nav-link", "navbar-link", 3, "click"], ["data-toggle", "modal", "data-target", "#loginModal", 1, "nav-link", "navbar-link"], [1, "btn", "btn-outline-info"], [1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "href", "", 1, "nav-link", "navbar-link", "icons", "dropdown-toggle"], ["class", "bell-noti", 4, "ngIf"], [1, "fas", "fa-bell"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", 3, "hasTrades"], ["notis", ""], [1, "bell-noti"], [1, "nav-item", "dropdown", 2, "z-index", "2000"], ["href", "", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "navbar-link", "icons", "dropdown-toggle"], [1, "fas", "fa-user"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["class", "dropdown-item", "routerLink", "admin", 4, "ngIf"], [1, "dropdown-divider"], ["href", ".", 1, "dropdown-item", "text-danger", 3, "click"], ["routerLink", "admin", 1, "dropdown-item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Card Trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 4, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 4, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 6, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 10, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A1Conseguiste una carta!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.card.cardid)("title", ctx.card.title)("description", ctx.card.description)("img", ctx.card.img)("type", ctx.card.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _notis_notis_component__WEBPACK_IMPORTED_MODULE_6__["NotisComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-bottom: 10px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.397);\n  height: 12vh;\n}\n.header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-right: 50px;\n  margin-left: 8%;\n  color: rgba(0, 0, 0);\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-link[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  border-radius: 15px;\n  color: rgba(0, 0, 0, 0.5);\n  transition: 0.3s;\n  font-size: 17px;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[data-enabled=\"true\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[data-enabled=\"false\"][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.2);\n  cursor: default;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[data-enabled=\"false\"][_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.2);\n  cursor: default;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-left: 10px;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-link[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 3000;\n}\n.bell-noti[_ngcontent-%COMP%] {\n  background-color: red;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  margin-left: 16%;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7QUFDRjtBQUxBO0VBT0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFYQTtFQWVJLFlBQUE7QUFESjtBQWRBO0VBa0JNLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUROO0FBckJBO0VBMEJNLGVBQUE7QUFGTjtBQXhCQTtFQThCTSx5QkFBQTtFQUNBLGVBQUE7QUFITjtBQTVCQTtFQW1DTSx5QkFBQTtFQUNBLGVBQUE7QUFKTjtBQWhDQTtFQXdDTSxlQUFBO0VBQ0EsaUJBQUE7QUFMTjtBQXBDQTtFQTZDTSxjQUFBO0FBTk47QUF2Q0E7RUFrRE0sYUFBQTtBQVJOO0FBYUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWEY7QUFjQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQVpGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xuICBoZWlnaHQ6IDEydmg7XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCksXG4gIH1cblxuXG4gIC5uYXZiYXItbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAubmF2YmFyLWxpbmsge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cblxuICAgIGFbZGF0YS1lbmFibGVkPVwidHJ1ZVwiXXtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBhW2RhdGEtZW5hYmxlZD1cImZhbHNlXCJde1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICBhW2RhdGEtZW5hYmxlZD1cImZhbHNlXCJdOmhvdmVye1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICAuaWNvbnMge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLm5hdmJhci1saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG5cbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICB6LWluZGV4OiAzMDAwO1xuICAgIH1cbiAgfVxufVxuXG4uYmVsbC1ub3Rpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTYlO1xufVxuXG4ubW9kYWwtYm9keXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "h49d":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: contactillos, ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactillos", function() { return contactillos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-card/user-card.component */ "SN7D");






function ContactListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-user-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rer", function ContactListComponent_li_4_Template_app_user_card_rer_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.update(); })("changeChatUser", function ContactListComponent_li_4_Template_app_user_card_changeChatUser_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeCurrentUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", u_r1)("removable", ctx_r0.id ? -1 : u_r1.userid)("extra", ctx_r0.token)("chat", ctx_r0.chat);
} }
class contactillos {
    static update() {
        contactillos.ay.next(false);
    }
}
contactillos.ay = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
contactillos.obs = contactillos.ay.asObservable();
contactillos.ɵfac = function contactillos_Factory(t) { return new (t || contactillos)(); };
contactillos.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: contactillos, factory: contactillos.ɵfac });
class ContactListComponent {
    constructor(http) {
        this.http = http;
        this.id = undefined;
        this.deleteAlert = false;
        this.changeAddressee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chat = false;
    }
    ngOnChanges(changes) {
        this.getContacts();
    }
    ngOnInit() {
        this.getContacts();
        contactillos.obs.subscribe(_ => {
            this.getContacts();
        });
    }
    getContacts() {
        if (!this.id)
            this.http.get('https://card-trading-api-dev.herokuapp.com/login?token=' + localStorage.getItem("token")).subscribe(res => this.http.get('https://card-trading-api-dev.herokuapp.com/u/contacts/' + (this.token = res.userid)).subscribe(data => this.users = data));
        else
            this.http.get('https://card-trading-api-dev.herokuapp.com/u/contacts/' + this.id).subscribe(data => this.users = data);
    }
    update() {
        contactillos.update();
    }
    changeCurrentUser($event) {
        this.currentUser = {
            username: $event.username,
            userid: $event.userid
        };
        this.changeAddressee.emit(this.currentUser);
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["app-contact-list"]], inputs: { id: "id", chat: "chat" }, outputs: { changeAddressee: "changeAddressee" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([contactillos]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 1, consts: [[1, "contacts"], [2, "list-style", "none"], ["class", "contact", 4, "ngFor", "ngForOf"], [1, "contact"], [3, "user", "removable", "extra", "chat", "rer", "changeChatUser"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contactos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContactListComponent_li_4_Template, 2, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_4__["UserCardComponent"]], styles: [".contacts[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 1%;\n}\n.contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  text-align: -webkit-center;\n  width: 100%;\n  height: 4em;\n  margin-bottom: 12px;\n}\n.contacts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: bolder;\n  position: sticky;\n  z-index: 2;\n  background-color: inherit;\n  margin-bottom: 15px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n  background: transparent;\n}\n.chat-boxes[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 90%;\n  bottom: 0.1%;\n  right: 1%;\n  margin: 0px 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFGQTtFQUtJLFdBQUE7QUFBSjtBQUxBO0VBU0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREo7QUFYQTtFQWdCSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBTUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBSkY7QUFPQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBTEYiLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3RzIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gIHVsIHtcbiAgICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nOiAxJTtcbiAgfVxuXG4gIC5jb250YWN0IHtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG5cbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jaGF0LWJveGVzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogOTAlO1xuICBib3R0b206IDAuMSU7XG4gIHJpZ2h0OiAxJTtcbiAgbWFyZ2luOiAwcHggNXZ3O1xufVxuIl19 */"] });


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
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-details/card-details.component */ "jXAV");
/* harmony import */ var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalogue/catalogue.component */ "L6jA");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'user/:id', component: _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"] },
    { path: 'userlist', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'catalogue', component: _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_4__["CatalogueComponent"] },
    { path: 'card/:id', component: _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_3__["CardDetailsComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: '404', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"] },
    { path: "**", redirectTo: '404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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

const colors = [[148, 129, 61], [83, 137, 71], [128, 101, 64], [149, 77, 77], [179, 131, 162], [71, 137, 101]];
class CardComponent {
    constructor() {
        this.mini = false;
        this.smol = false;
    }
    fromType(t) {
        return `url('../../assets/bgs/${t}.png')`;
    }
    rgbaType(t) {
        if (t == "tmp")
            return `rgba(215,215,215,0.75)`;
        return `rgba(${colors[t][0]},${colors[t][1]},${colors[t][2]}, 0.75)`;
    }
    hover(e) {
        window.location.href = '/card/' + this.id;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { id: "id", title: "title", description: "description", img: "img", type: "type", mini: "mini", smol: "smol" }, decls: 6, vars: 11, consts: [[1, "cardo"], [1, "title"], [3, "src"], [1, "desc"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("mini", ctx.mini)("smol", ctx.smol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.rgbaType(ctx.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img == "" ? "../../assets/bgs/4.png" : ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.rgbaType(ctx.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, styles: [".cardo[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 12em;\n  height: 18em;\n  align-content: center;\n  border: 2px solid black;\n}\n.cardo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.cardo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n}\n.cardo[_ngcontent-%COMP%]   .imgback[_ngcontent-%COMP%] {\n  top: inherit;\n  margin-top: -40em;\n  margin-left: unset;\n  position: relative;\n  z-index: -1;\n  width: inherit;\n  height: inherit;\n  border: none;\n  opacity: 0;\n}\n.cardo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 50%;\n  margin: 1%;\n  background-color: white;\n  margin-left: 4%;\n  border: 2px ridge gray;\n}\n.cardo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n.cardo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cardo[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  color: black;\n  height: 10%;\n  width: 95%;\n  margin: 0% 2.5% 1% 1.5%;\n  padding-left: 0.5%;\n}\n.cardo[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: small;\n  height: 35%;\n  overflow-y: hidden;\n  word-wrap: break-word;\n}\n.cardo[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n  background: transparent;\n}\n.cardo[mini=\"true\"][_ngcontent-%COMP%] {\n  width: 2em;\n  height: 3em;\n}\n.cardo[mini=\"true\"][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cardo[mini=\"true\"][_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 0% 2.5% 1% 1.5%;\n  padding-left: 0.5%;\n}\n.cardo[mini=\"true\"][_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 0.1%;\n  line-height: 1;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%] {\n  width: 4em;\n  height: 6em;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 5%;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cardo[smol=\"true\"][_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 0% 2.5% 1% 1.5%;\n  padding-left: 0.5%;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 0.1%;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUZKO0FBTkE7RUFFUSxxQkFBQTtBQU9SO0FBVEE7RUFVUSxrQkFBQTtFQUNBLFVBQUE7QUFFUjtBQWJBO0VBY1EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRVI7QUF4QkE7RUF5QlEsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFFUjtBQWhDQTtFQWlDUSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQXJDQTs7RUFzQ1EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUdSO0FBN0NBO0VBNkNRLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFHUjtBQW5EQTtFQW1EUSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBR1I7QUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBRUo7QUFKQTs7RUFJUSx1QkFBQTtFQUNBLGtCQUFBO0FBSVI7QUFUQTtFQVFRLGVBQUE7RUFDQSxjQUFBO0FBSVI7QUFEQTtFQUNJLGVBQUE7QUFHSjtBQURBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFHSjtBQUxBO0VBSVEsYUFBQTtBQUlSO0FBUkE7O0VBT1EsdUJBQUE7RUFDQSxrQkFBQTtBQUtSO0FBYkE7RUFXUSxlQUFBO0VBQ0EsY0FBQTtBQUtSIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZG97XG4gICAgYTpob3ZlcntcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMmVtO1xuICAgIGhlaWdodDogMThlbTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgKntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICAuaW1nYmFja3tcbiAgICAgICAgdG9wOmluaGVyaXQ7XG4gICAgICAgIG1hcmdpbi10b3A6IC00MGVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICBtYXJnaW46IDElO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgICAgICBib3JkZXI6IDJweCByaWRnZSBncmF5O1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG4gICAgLnRpdGxlLC5kZXNje1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IDAlIDIuNSUgMSUgMS41JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjUlO1xuICAgIH1cbiAgICAuZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgaGVpZ2h0OiAzNSU7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuLmNhcmRvW21pbmk9XCJ0cnVlXCJde1xuICAgIHdpZHRoOiAyZW07XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgLnRpdGxlLC5kZXNje1xuICAgICAgICBtYXJnaW46IDAlIDIuNSUgMSUgMS41JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjUlO1xuICAgIH1cbiAgICAuZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiAwLjElO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG59XG4uY2FyZG9bc21vbD1cInRydWVcIl06aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmRvW3Ntb2w9XCJ0cnVlXCJde1xuICAgIHdpZHRoOiA0ZW07XG4gICAgaGVpZ2h0OiA2ZW07XG4gICAgLnRpdGxle1xuICAgICAgICBmb250LXNpemU6IDUlO1xuICAgIH1cbiAgICAudGl0bGUsLmRlc2N7XG4gICAgICAgIG1hcmdpbjogMCUgMi41JSAxJSAxLjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNSU7XG4gICAgfVxuICAgIC5kZXNje1xuICAgICAgICBmb250LXNpemU6IDAuMSU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.loggedIn())
            return true;
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
    canActivateChild(childRoute, state) {
        return true;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return true;
    }
    canLoad(route, segments) {
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


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
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(_auth, _router, socialAuthService) {
        this._auth = _auth;
        this._router = _router;
        this.socialAuthService = socialAuthService;
        this.exampleEmail = "ex@mp.le";
        this.loginUserData = {};
    }
    ngOnInit() {
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            this.isLoggedin = (user != null);
            console.log(this.socialUser);
            localStorage.setItem('token', this.socialUser.idToken);
            this._router.navigate(['/userlist']);
        });
    }
    loginWithGoogle() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID);
    }
    logOutGoogle() {
        this.socialAuthService.signOut();
    }
    LoginUser() {
        this._auth.loginUser(this.loginUserData).subscribe(data => {
            localStorage.setItem('token', data.token);
            this._router.navigate(['/userlist']);
            location.reload();
        }, error => {
            this.logMsg = { msg: "Usuario o contraseña incorrectos.", class: 'text-danger' };
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialAuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 33, vars: 3, consts: [[1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", "container"], [1, "register-fields"], ["name", "email", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["email", ""], ["name", "password", "type", "password", "pass", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["href", "", "data-toggle", "modal", "data-target", "#registerModal", "data-dismiss", "modal"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "google-login", 1, "btn", "btn-danger", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Iniciar Sesi\u00F3n");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.loginUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.loginUserData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00BFNo tienes cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "!Reg\u00EDstrate aqu\u00ED!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() { return ctx.LoginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() { return ctx.loginWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Continuar con Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginUserData.email)("placeholder", ctx.exampleEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginUserData.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".register-form[_ngcontent-%COMP%] {\n  background-color: #ebebeb;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.register-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.register-form[_ngcontent-%COMP%]   .register-fields[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 4%;\n}\n.register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUpBO0VBTUksaUJBQUE7QUFDSjtBQVBBO0VBVUksV0FBQTtFQUNBLGVBQUE7QUFBSjtBQVhBO0VBZUksVUFBQTtBQURKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnJlZ2lzdGVyLWZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbiJdfQ== */"] });


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