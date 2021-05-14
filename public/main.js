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
        this.http.post('https://card-trading-api-dev.herokuapp.com/u', user).subscribe(data => {
            this.regMsg = { msg: "Usuario registrado exitosamente.", class: 'text-success' };
            $("#registerModal").modal("hide");
        }, error => {
            console.log(error);
            this.regMsg = { msg: "Usuario existente.", class: 'text-danger' };
        });
    }
    onChange(property) {
        //console.log(this.isFull);
        this.isFull = this.verifyAllFilled();
        if (['Password', 'Confirm password'].includes(property)) {
            this.verifyMatchingPasswords();
        }
        $("#registerBtn").attr("disabled", !this.isFull || !this.matchingPassword);
    }
    verifyAllFilled() {
        return Object.keys(this.attributes).every((key) => this.attributes[key].value.length > 1);
    }
    verifyMatchingPasswords() {
        const { password, password1 } = this.attributes;
        this.matchingPassword = password.value === password1.value;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])], decls: 19, vars: 6, consts: [[1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", "container"], [1, "register-fields"], [4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "registerBtn", "disabled", "", 1, "btn", "btn-primary", 3, "ngStyle", "click"], [3, "value", "type", "label", "valueChange", "isFilledChanged"], [1, "text-danger"], [3, "ngClass"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
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
ChatAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatAppComponent, selectors: [["app-chat-app"]], inputs: { userid: "userid" }, decls: 5, vars: 2, consts: [[1, "container-fluid", "chat-box"], [1, "col-md-3", "col-4", "contactos"], [3, "chat", "changeAddressee"], [1, "col-md-9", "col-7"], [3, "addressee", "userid", 4, "ngIf"], [3, "addressee", "userid"]], template: function ChatAppComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_1__["ContactListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_3__["ChatInboxComponent"]], styles: [".chat-box[_ngcontent-%COMP%] {\n  display: flex;\n  width: inherit;\n  background-color: #D3D3D3;\n  padding-top: 35px;\n  padding-bottom: 50px;\n  height: 100%;\n}\n.contactos[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUZGIiwiZmlsZSI6ImNoYXQtYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGJhY2tncm91bmQ6ICNEM0QzRDM7XG5cbi5jaGF0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZDtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWN0b3Mge1xuICBoZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _edicion_usuario_edicion_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edicion-usuario/edicion-usuario.component */ "qlmG");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");
/* harmony import */ var _chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat-app/chat-app.component */ "2Q77");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact-list/contact-list.component */ "h49d");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trade/trade.component */ "6KaB");









const _c0 = ["contactos"];
const _c1 = ["tradeMod"];
function UserComponent_div_0_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_0_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.showChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.showMenu.chat ? "linkActive" : "");
} }
function UserComponent_div_0_div_17_app_edicion_usuario_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-edicion-usuario", 17);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userid", ctx_r9.userid)("name", ctx_r9.user.name)("lastname", ctx_r9.user.lastname)("img", ctx_r9.user.img)("bday", ctx_r9.user.birthday)("profileText", ctx_r9.user.profiletext)("username", ctx_r9.user.username);
} }
function UserComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_0_div_17_app_edicion_usuario_1_Template, 1, 7, "app-edicion-usuario", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.user);
} }
function UserComponent_div_0_div_18_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", c_r13.cardid)("title", c_r13.title)("description", c_r13.description)("img", c_r13.img)("type", c_r13.type);
} }
function UserComponent_div_0_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_0_div_18_div_1_div_1_Template, 2, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.userCards);
} }
function UserComponent_div_0_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A1Este usuario no tiene cartas!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_0_div_18_div_1_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_div_0_div_18_div_2_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.userCards && ctx_r5.userCards.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.userCards || ctx_r5.userCards.length < 1);
} }
function UserComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-app", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userid", ctx_r6.myid);
} }
function UserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_0_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.showEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_0_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.showCards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cartas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserComponent_div_0_li_11_Template, 3, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserComponent_div_0_div_17_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserComponent_div_0_div_18_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserComponent_div_0_div_19_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.showMenu.edit ? "linkActive" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.showMenu.cards ? "linkActive" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user && ctx_r0.myid == ctx_r0.user.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.appTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMenu.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMenu.cards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMenu.chat);
} }
function UserComponent_div_1_button_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A\u00F1adir amigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_1_button_10_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Intercambiar");
} }
function UserComponent_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_1_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.addFrend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_1_button_10_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_div_1_button_10_ng_template_2_Template, 1, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.frens)("ngIfElse", _r23);
} }
function UserComponent_div_1_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_1_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", c_r28.cardid)("title", c_r28.title)("description", c_r28.description)("img", c_r28.img)("type", c_r28.type);
} }
function UserComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_1_div_17_div_1_Template, 2, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.userCards);
} }
function UserComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Este usuario no tiene cartas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserComponent_div_1_button_10_Template, 4, 2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserComponent_div_1_button_11_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-contact-list", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Inventario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserComponent_div_1_div_17_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserComponent_div_1_div_18_Template, 3, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.user.img ? ctx_r1.user.img : "https://i1.sndcdn.com/avatars-000310902564-g2unlt-t240x240.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.profiletext);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.myid != ctx_r1.user.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.myid == ctx_r1.user.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userCards && ctx_r1.userCards.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.userCards == null ? null : ctx_r1.userCards.length) == 0);
} }
function UserComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-trade", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user1", ctx_r2.myid)("user2", ctx_r2.userid)("username", ctx_r2.user.username);
} }
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
            cards: false,
            chat: false,
            edit: true
        };
    }
    ngOnInit() {
        this.actRoute.params.subscribe(p => {
            this.userid = p.id;
            this.http.get('https://card-trading-api-dev.herokuapp.com/u/' + this.userid).subscribe(data => this.user = data);
            this.http.get(`https://card-trading-api-dev.herokuapp.com/c?user=${this.userid}`).subscribe(data => {
                this.showEdit();
                this.userCards = data.sort((a, b) => a.cardid - b.cardid);
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
            //alert("Contacto añadido");
        }, err => {
            alert(err.error.error);
        });
    }
    showCards() {
        this.appTitle = 'Inventario';
        this.closeAll();
        this.http.get(`https://card-trading-api-dev.herokuapp.com/c?user=${this.userid}`).subscribe(data => {
            this.userCards = data.sort((a, b) => a.cardid - b.cardid);
        });
        this.showMenu.cards = true;
    }
    showChat() {
        this.appTitle = 'Mensajería';
        this.closeAll();
        this.showMenu.chat = true;
    }
    showEdit() {
        this.appTitle = 'Perfil';
        this.closeAll();
        this.showMenu.edit = true;
    }
    closeAll() {
        this.showMenu.cards = false;
        this.showMenu.chat = false;
        this.showMenu.edit = false;
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
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "modal fade", "id", "tradeModal", "tabindex", "-1", 4, "ngIf"], [1, "userApps", "container-fluid"], [1, "row"], [1, "col-md-1"], [1, "sidebar"], [3, "ngClass"], ["type", "button", 3, "click"], [3, "ngClass", 4, "ngIf"], [1, "col-md-11", "apps"], [1, "offset-1", "col-11"], [1, "text-center"], ["class", "editUser", 4, "ngIf"], ["id", "usersCards", 4, "ngIf"], ["id", "userContacts", 4, "ngIf"], [1, "editUser"], [3, "userid", "name", "lastname", "img", "bday", "profileText", "username", 4, "ngIf"], [3, "userid", "name", "lastname", "img", "bday", "profileText", "username"], ["id", "usersCards"], ["class", "userCards", 4, "ngIf"], ["class", "noUserCards text-center pb-3", 4, "ngIf"], [1, "userCards"], ["class", "card-container", 4, "ngFor", "ngForOf"], [1, "card-container"], [3, "id", "title", "description", "img", "type"], [1, "noUserCards", "text-center", "pb-3"], ["id", "userContacts"], [3, "userid"], [1, "userInfo", "container-fluid"], [1, "col-3", 3, "src"], [1, "col-6"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-warning", "data-toggle", "modal", "data-target", "#editModal", 4, "ngIf"], [1, "col-3", 3, "id"], ["contactos", ""], [1, "cardInventory"], ["class", " userCards", "style", "padding-left: 6%;", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [4, "ngIf", "ngIfElse"], ["yesFrens", ""], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "btn-warning"], [1, "userCards", 2, "padding-left", "6%"], ["id", "tradeModal", "tabindex", "-1", 1, "modal", "fade"], [3, "user1", "user2", "username"], ["tradeMod", ""]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserComponent_div_0_Template, 20, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_1_Template, 19, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_div_2_Template, 3, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myid == (ctx.user == null ? null : ctx.user.userid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.myid != (ctx.user == null ? null : ctx.user.userid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frens);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _edicion_usuario_edicion_usuario_component__WEBPACK_IMPORTED_MODULE_4__["EdicionUsuarioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_6__["ChatAppComponent"], _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"], _trade_trade_component__WEBPACK_IMPORTED_MODULE_8__["TradeComponent"]], styles: ["@media (max-width: 1280px) {\n  .card-container[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n.apps[_ngcontent-%COMP%] {\n  background-color: #D3D3D3;\n  padding-top: 20px;\n}\n.card-inventory[_ngcontent-%COMP%] {\n  padding: 1% 1% 1% 15%;\n}\n.userInfo[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1%;\n  background-color: gray;\n  width: 100%;\n  height: 16em;\n}\n.userInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  width: 15%;\n  aspect-ratio: 1;\n}\n.userInfo[_ngcontent-%COMP%]   app-contact-list[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: grid;\n}\n.userInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: -webkit-fill-available;\n}\n.userInfo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-right: 0.5%;\n}\n.userCards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  height: 35em;\n  width: 100%;\n  background-color: lightgray;\n  overflow-y: scroll;\n  margin-bottom: 20px;\n  padding-left: 4%;\n}\n.userCards[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n.userCards[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  width: 16%;\n}\n.userCards[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n}\nh2[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  margin-bottom: 0px;\n  background-color: #D3D3D3;\n}\n.noUserCards[_ngcontent-%COMP%] {\n  height: -webkit-fill-available;\n  font-weight: bold;\n  text-align: center;\n  margin-left: 100px;\n}\n.userApps[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n}\n.userApps[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.userApps[_ngcontent-%COMP%]   .col-md-1[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.userApps[_ngcontent-%COMP%]   .col-md-11[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.userApps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .userApps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #777777;\n  height: 60px;\n  font-size: 1.2em;\n}\n.userApps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .userApps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n.userApps[_ngcontent-%COMP%]   .linkActive[_ngcontent-%COMP%] {\n  background-color: #D3D3D3;\n  color: black;\n  font-weight: bold;\n}\n.userApps[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 20px;\n}\n.appTittle[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUNFLFVBQUE7RUFERjtBQUNGO0FBSUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBRkY7QUFLQTtFQUNFLHFCQUFBO0FBSEY7QUFRQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5GO0FBQ0E7RUFVSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUko7QUFKQTtFQWdCSSxnQkFBQTtFQUNBLGFBQUE7QUFUSjtBQVJBO0VBcUJJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQVZKO0FBZkE7RUE2Qkksb0JBQUE7RUFDQSxrQkFBQTtBQVhKO0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZEY7QUFNQTtFQVdJLFVBQUE7QUFkSjtBQUdBO0VBZUksVUFBQTtBQWZKO0FBQUE7RUFtQkksV0FBQTtFQUNBLFlBQUE7QUFoQko7QUFzQkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFwQkY7QUF1QkE7RUFDRSw4QkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXRCRjtBQXlCQTtFQUNFLDBCQUFBO0FBdkJGO0FBc0JBO0VBSUksZUFBQTtFQUNBLGdCQUFBO0FBdkJKO0FBa0JBO0VBU0ksZ0JBQUE7RUFDQSxlQUFBO0FBeEJKO0FBY0E7RUFjSSxlQUFBO0FBekJKO0FBV0E7O0VBbUJJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBMUJKO0FBRUE7O0VBNkJJLFlBQUE7QUEzQko7QUFGQTtFQWlDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTVCSjtBQVBBO0VBdUNJLGNBQUE7RUFDQSxrQkFBQTtBQTdCSjtBQWlDQTtFQUNFLDhCQUFBO0FBL0JGIiwiZmlsZSI6InVzZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAYmFja2dyb3VuZDogI0QzRDNEMztcblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuY2FyZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cblxuLmFwcHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5jYXJkLWludmVudG9yeSB7XG4gIHBhZGRpbmc6IDElIDElIDElIDE1JTtcbn1cblxuXG5cbi51c2VySW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNmVtO1xuXG5cblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gIH1cblxuICBhcHAtY29udGFjdC1saXN0IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cblxuICBkaXYge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNSU7XG4gIH1cbn1cblxuXG4udXNlckNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiB3cmFwO1xuICBoZWlnaHQ6IDM1ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcblxuICBhcHAtY2FyZCB7XG4gICAgbWFyZ2luOiAxJTtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE2JTtcbiAgfVxuXG4gIGgyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuXG5cbmgyIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZDtcbn1cblxuLm5vVXNlckNhcmRzIHtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAvL2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4udXNlckFwcHMge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcblxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5jb2wtbWQtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAuY29sLW1kLTExIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICB1bCxcbiAgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgY29sb3I6IHJnYigxMTksIDExOSwgMTE5KTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxuXG4gIHVsLFxuICBsaTpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmxpbmtBY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxufVxuXG4uYXBwVGl0dGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuIl19 */"] });


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
        this.http.get(`https://card-trading-api-dev.herokuapp.com/c?user=${this.user1}`).subscribe(data => this.usersCards[0] = data.sort((a, b) => a.cardid - b.cardid));
        this.http.get(`https://card-trading-api-dev.herokuapp.com/c?user=${this.user2}`).subscribe(data => this.usersCards[1] = data.sort((a, b) => a.cardid - b.cardid));
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
        if (!localStorage.getItem("token") && $("#lasChecas").length)
            location.reload();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 39, vars: 0, consts: [[1, "main"], [1, "main-banner"], [1, "display-3", "text-center"], [1, "my-4"], [1, "lead", "text-center"], ["role", "button", "data-toggle", "modal", "data-target", "#registerModal", 1, "btn", "btn-outline-info", "btn-lg", "mr-3"], ["role", "button", "data-toggle", "modal", "data-target", "#loginModal", 1, "btn", "btn-outline-info", "btn-lg", "ml-3"], [1, "container", "banner"], [1, "row"], [1, "col-6"], [1, "text-jusitfy", 2, "line-height", "45px"], ["src", "https://www.creativefabrica.com/wp-content/uploads/2019/03/Silhouette-Tarot-cards-580x386.jpg"], [1, "col-6", "text-center"], ["src", "../../assets/bgs/cards-example.png", "alt", "show_cards.png"], [1, "col-6", "md-3"], [1, "text-center"], ["routerLink", "catalogue", 1, "btn", "btn-outline-info", 2, "padding", "5px 15px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0\u00A0\u00A0\u00A0Card Trading es una app que te permite obtener cartas originales e intercambiarlas con amigos. Una vez al d\u00EDa al iniciar sesi\u00F3n podr\u00E1s reclamar una carta al azar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00A0 Obten estas y varias otras cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A1Mira todas las cartas aqu\u00ED!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  margin-top: 200px;\n  text-align: center;\n  align-content: center;\n}\n.main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.main[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.main[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 80vw;\n  margin-top: 0;\n}\n.main[_ngcontent-%COMP%]   .main-banner[_ngcontent-%COMP%] {\n  height: 60vh;\n}\n.main[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n#obscure-banner[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n.jumbotron[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQVBBO0VBU0ksZ0JBQUE7QUFDSjtBQVZBO0VBYUksY0FBQTtBQUFKO0FBYkE7RUFpQkksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQURKO0FBbEJBO0VBdUJJLFlBQUE7QUFGSjtBQXJCQTtFQTJCSSxpQkFBQTtBQUhKO0FBT0E7RUFDRSwyQkFBQTtBQUxGO0FBUUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBTkYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmJhbm5lci10ZXh0IHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuXG4gIC5qdW1ib3Ryb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAubWFpbi1iYW5uZXIge1xuICAgIGhlaWdodDogNjB2aDtcbiAgfVxuXG4gIC5iYW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICB9XG59XG5cbiNvYnNjdXJlLWJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


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
    production: false,
    backend: "http://localhost:3000"
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

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.isLoggedIn())
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




function CatalogueComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 4);
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
CatalogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogueComponent, selectors: [["app-catalogue"]], decls: 4, vars: 1, consts: [[1, "text-center"], [1, "cardsss"], ["class", "individualCard", 4, "ngFor", "ngForOf"], [1, "individualCard"], [3, "id", "title", "description", "img", "type"]], template: function CatalogueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cat\u00E1logo de Cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CatalogueComponent_div_3_Template, 2, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: [".cardsss[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80%;\n  margin-left: 8%;\n  padding-left: 2%;\n  height: 40em;\n  display: flex;\n  flex-flow: wrap;\n  background-color: lightgray;\n  overflow-y: scroll;\n}\n.cardsss[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n}\n.cardsss[_ngcontent-%COMP%]   .individualCard[_ngcontent-%COMP%] {\n  width: 20%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2d1ZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQVZBO0VBWUksVUFBQTtFQUNBLFdBQUE7QUFDSjtBQWRBO0VBaUJJLFVBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoiY2F0YWxvZ3VlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzc3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgaGVpZ2h0OiA0MGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gIGFwcC1jYXJkIHtcbiAgICBtYXJnaW46IDElO1xuICAgIHBhZGRpbmc6IDElO1xuICB9XG5cbiAgLmluZGl2aWR1YWxDYXJkIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG4iXX0= */"] });


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



const SOCKET_ENDPOINT = 'wss://card-trading-api-dev.herokuapp.com';
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

/***/ "QNcV":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const API_URL = 'https://card-trading-api-dev.herokuapp.com';
class AuthService {
    constructor(http, socialService, _router) {
        this.http = http;
        this.socialService = socialService;
        this._router = _router;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.getUser());
        this._loginUrl = "https://card-trading-api-dev.herokuapp.com/login";
    }
    loginUser(user) {
        //console.log(user);
        return this.http.post(this._loginUrl, user);
        /*.subscribe(response => {
          console.log(response);
          localStorage.setItem('token', response.token);
        });*/
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
    getUser() {
        const user = localStorage.getItem('user');
        //console.log(user)
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
    login(user) {
        this.user$.next(user);
        //console.log("token de login con google", `Bearer ${user?.idToken}`);
        this.http.get(this._loginUrl, {
            headers: {
                'Authorization': `Bearer ${user === null || user === void 0 ? void 0 : user.idToken}`
            }
        }).subscribe(response => {
            localStorage.setItem('token', response.token);
            this.http.get(`${API_URL}/login?token=${localStorage.getItem("token")}`).subscribe(res => {
                this.userid = res.userid;
                //console.log(this.userid);
                //console.log('/user/'+this.userid);
                this._router.navigate(['/user/' + this.userid]);
                //location.reload();
            });
        });
    }
    logout() {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            this.socialService.signOut();
            this.user$.next(null);
        }
        else
            localStorage.removeItem('token');
    }
    isLoggedIn() {
        if (this.user$.value)
            return Boolean(this.user$.value);
        return !!localStorage.getItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


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
        this.http.delete(`https://card-trading-api-dev.herokuapp.com/u/contacts/?oid=${this.removable}&id=${this.extra}`).subscribe(data => {
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
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "1W4x");











class AppComponent {
    constructor(http, userService, _authService, router) {
        this.http = http;
        this.userService = userService;
        this._authService = _authService;
        this.router = router;
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])], decls: 9, vars: 1, consts: [["role", "main", 3, "ngClass"], [1, ""], ["id", "loginModal", "tabindex", "-1", 1, "modal", "fade"], ["id", "registerModal", "tabindex", "-1", 1, "modal", "fade"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isLoggedIn ? "loggedInContent" : "content");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\ninput[_ngcontent-%COMP%] {\n  border-radius: 100px;\n}\n.content[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  text-align: center;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  min-height: 95vh;\n}\n.loggedInContent[_ngcontent-%COMP%] {\n  margin: 100px 0% 0px 0px;\n  min-height: 80vh;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n.navButts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBKQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUVBOzs7Ozs7RUFNRSxhQUFBO0FBQUY7QUFHQTtFQUNFLFNBQUE7QUFERjtBQUlBO0VBQ0UsT0FBQTtBQUZGO0FBS0E7RUFDRSxvQkFBQTtBQUhGO0FBTUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQUxGO0FBUUE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FBTkY7QUFVQTtFQUNFLHNCQUFBO0FBUkY7QUFDQSxzQkFBc0I7QUFZdEI7RUFFRTs7SUFFRSxXQUFBO0VBWEY7RUFjQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBWkY7RUFlQTtJQUNFLGlCQUFBO0VBYkY7RUFnQkE7SUFDRSxZQUFBO0lBQ0Esd0JBQUE7RUFkRjtBQUNGO0FBaUJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUFmRjtBQUNGO0FBa0JBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBaEJGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vd2lkdGg6IDg0JTtcbiAgbWluLWhlaWdodDogOTV2aDtcbn1cblxuLmxvZ2dlZEluQ29udGVudCB7XG4gIG1hcmdpbjogMTAwcHggMCUgMHB4IDBweDtcbiAgbWluLWhlaWdodDogODB2aDtcblxufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cblxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAuY2FyZC1jb250YWluZXI+Kjpub3QoLmNpcmNsZS1saW5rKSxcbiAgLnRlcm1pbmFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgcmlnaHQ6IDEyMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4ubmF2QnV0dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");








function AdminComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_div_2_Template_app_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const c_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.selectCard(c_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("smol", true)("id", c_r4.cardid)("title", c_r4.title)("description", c_r4.description)("img", c_r4.img)("type", c_r4.type);
} }
function AdminComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_div_41_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const p_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.selPoke(p_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", p_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r8.name);
} }
function AdminComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminComponent_div_41_div_1_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.apiDatos);
} }
function AdminComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
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
        this.apiOffset = 0;
        this.apiDatos = [];
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
                if (!data.role || data.role != "admin")
                    this.router.navigate(["/"]);
            }, err => this.router.navigate(["/"]));
        });
        this.http.get(`${API_URL}/c`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(a => { })).subscribe(data => this.cartas = data);
        $('#deletus').hide();
        this.apiData({ target: { value: 0 } });
    }
    apiData(e) {
        this.apiDatos = [];
        this.http.get(`${API_URL}/api?hundos=${(this.apiOffset = parseInt(e.target.value))}`).subscribe(data => this.apiDatos = data);
    }
    selPoke(poke) {
        this.newCard.title = poke.name;
        this.newCard.cardid = poke.id;
        this.newCard.description = "A " + poke.types.map(type => `${type.type.name}-`).join("") + "pokémon";
        this.newCard.img = poke.img;
        this.newCard.type = Math.floor(Math.random() * 6);
        this.verify();
    }
    refreshCards(died) {
        //alert("updated");
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
        $('#saveCard').prop('disabled', !(this.newCard.cardid > -1 && this.newCard.type > -1 && this.attributesKeys.slice(1, 4).every(k => this.newCard[k].length > 0)));
        this.checkDeletus();
    }
    checkDeletus() {
        if (this.cartas.find(c => c.cardid == this.newCard.cardid))
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
            $("#fileInput").val("");
            this.newCard.img = `${API_URL}/${this.newCard.cardid}.png`;
        }
        if (this.cartas.find(c => c.cardid == this.newCard.cardid))
            this.http.put(`${API_URL}/c`, this.newCard).subscribe(_ => this.refreshCards(false));
        else
            this.http.post(`${API_URL}/c`, this.newCard).subscribe(_ => this.refreshCards(false));
        if (this.file) {
            this.file = undefined;
            this.http.get(`${API_URL}/${this.newCard.cardid}.png`).subscribe(_ => { }, err => console.log("Error: Este error es a propósito"));
        }
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
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 44, vars: 16, consts: [[1, "row", "container"], [1, "cards", "col-3"], [4, "ngFor", "ngForOf"], [2, "align-self", "center"], [3, "id", "title", "description", "img", "type"], [1, "col-6", "register-form", "container"], [1, "register-fields"], ["type", "number", 1, "form-control", 3, "value", "ngStyle", "input"], ["type", "text", 1, "form-control", 3, "value", "input"], ["id", "fileInput", "type", "file", "accept", "image/*", 3, "change"], [1, "together"], ["type", "range", "min", "0", "max", "5", 1, "form-control", 3, "value", "input"], [1, "spacer"], ["id", "deletus", 1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], ["disabled", "", "id", "saveCard", 1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-check-circle"], [2, "margin", "1% auto"], ["type", "number", "min", "0", "max", "9", 3, "value", "change"], ["class", "pokimons", 4, "ngIf", "ngIfElse"], ["elsePokis", ""], [3, "smol", "id", "title", "description", "img", "type", "click"], [1, "pokimons"], ["class", "poke", 3, "click", 4, "ngFor", "ngForOf"], [1, "poke", 3, "click"], ["alt", "", 3, "src"], [1, "noPokimons", "row"], [1, "spinner"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_39_listener($event) { return ctx.apiData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AdminComponent_div_41_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, AdminComponent_ng_template_42_Template, 4, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cartas);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.newCard.cardid)("title", ctx.newCard.title)("description", ctx.newCard.description)("img", ctx.newCard.img)("type", ctx.newCard.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.newCard.cardid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.newCard.cardid > -1 ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.newCard.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.newCard.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.newCard.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.apiOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.apiDatos.length > 0)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".row[_ngcontent-%COMP%] {\n  width: 100em;\n  grid-column-gap: 1%;\n}\n.together[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  justify-content: space-evenly;\n  background-color: #F0F0F0;\n  align-items: center;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  align-self: center;\n}\ninput[type=\"range\"][_ngcontent-%COMP%] {\n  margin-left: 1%;\n  width: 75%;\n}\n.pokimons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: space-evenly;\n  overflow-y: scroll;\n  max-height: 20em;\n  margin: 0 5%;\n}\n.pokimons[_ngcontent-%COMP%]   .poke[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#b97979, #F0F0F0, #F0F0F0);\n  cursor: pointer;\n  border-radius: 5px;\n  border: 2px solid black;\n  margin: 0.2%;\n}\n.pokimons[_ngcontent-%COMP%]   .poke[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 100%;\n  text-align: center;\n  width: -webkit-min-content;\n  width: min-content;\n  margin: auto;\n}\n.noPokimons[_ngcontent-%COMP%] {\n  justify-content: center;\n  height: 5em;\n  align-content: center;\n  width: 100%;\n  margin: 0 5%;\n}\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinner[_ngcontent-%COMP%] {\n  animation: spinner 0.9s ease infinite;\n}\ndiv.row.container[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFDSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFQQTtFQVFRLDREQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRVI7QUFkQTtFQWNZLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FBR1o7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUNBO0VBQ0k7SUFBSSx5QkFBQTtFQUVOO0FBQ0Y7QUFEQTtFQUNJLHFDQUFBO0FBR0o7QUFEQTtFQUNJLFlBQUE7QUFHSiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XG4gICAgd2lkdGg6IDEwMGVtO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMSU7XG59XG4udG9nZXRoZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5jYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuaW5wdXRbdHlwZT1cInJhbmdlXCJde1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB3aWR0aDogNzUlO1xufVxuLnBva2ltb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBtYXgtaGVpZ2h0OiAyMGVtO1xuICAgIG1hcmdpbjogMCA1JTtcbiAgICAucG9rZXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNiOTc5NzksICNGMEYwRjAsICNGMEYwRjApO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMC4yJTtcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG4ubm9Qb2tpbW9uc3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDVlbTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDUlO1xufVxuQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG4uc3Bpbm5lcntcbiAgICBhbmltYXRpb246IHNwaW5uZXIgLjlzIGVhc2UgaW5maW5pdGU7XG59XG5kaXYucm93LmNvbnRhaW5lcntcbiAgICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"] });


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
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "QNcV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-card/user-card.component */ "SN7D");








function UserListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-user-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", user_r1);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { "display": a0 }; };
class UserListComponent {
    constructor(http, _router, authServie) {
        this.http = http;
        this._router = _router;
        this.authServie = authServie;
        this.users = [];
        this.usuarios = [];
        this.usersInPage = [];
        this.currPage = 0;
        this.usersPerPage = 24;
        this.filter = '';
    }
    ngOnInit() {
        this.http.get('https://card-trading-api-dev.herokuapp.com/u').subscribe(data => {
            //console.log(this.authServie.user$.value?.idToken);
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
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 32, vars: 25, consts: [[1, "navbar", "navbar-light", "bg-light", "justify-content-center", 2, "background-color", "transparent!important", "color", "transparent"], [1, "form-inline"], ["name", "search-user", "type", "search", "placeholder", "Usuario", "aria-label", "Search", 1, "form-control", "mr-sm-2", 2, "width", "60vmax", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "my-2", "my-sm-0", 3, "click"], [1, "container"], [1, "users"], [4, "ngFor", "ngForOf"], ["aria-label", "search items pages"], [1, "pagination", "justify-content-center"], [3, "ngClass"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link", 3, "click"], [1, "page-item", 3, "ngStyle"], [1, "page-link", 3, "click"], ["aria-current", "page", 1, "page-item", "active"], [1, "page-link"], [3, "user"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserListComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_12_listener() { return ctx.prevPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_15_listener() { return ctx.prevPage(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_18_listener() { return ctx.prevPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_24_listener() { return ctx.nextPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_27_listener() { return ctx.nextPage(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_30_listener() { return ctx.nextPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Siguiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__["UserCardComponent"]], styles: [".users[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  background-color: lightgray;\n  height: -webkit-fill-available;\n}\n.users[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: -webkit-center;\n  height: 5em;\n  margin: 0% 1.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUpBO0VBTVEsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNSIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnVzZXJze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGRpdntcbiAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgICAgIGhlaWdodDogNWVtO1xuICAgICAgICBtYXJnaW46IDAlIDEuNSU7XG4gICAgfVxufVxuXG4iXX0= */"] });


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
            this.socketService.login(`${this.userid}`, this.currentRoom);
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
        //console.log(this.messages);
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
ChatInboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatInboxComponent, selectors: [["app-chat-inbox"]], inputs: { addressee: "addressee", userid: "userid" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 3, consts: [[1, "chat-messages"], [1, "users"], [1, "username-holder"], [1, "chat-messages-show-container"], ["id", "message-list", 1, "chat-messages-show-list"], ["class", "message-row", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-messages-create-container"], ["type", "text", 1, "chat-messages-create-input", "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "chat-messages-create-button", "btn", "btn-primary", 3, "click"], [1, "message-row", 3, "ngClass"], [1, "chat-msg", 3, "ngClass"], [3, "message", "date"]], template: function ChatInboxComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatInboxComponent_Template_input_ngModelChange_9_listener($event) { return ctx.message = $event; })("keyup.enter", function ChatInboxComponent_Template_input_keyup_enter_9_listener() { return ctx.SendMessage(); });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]], styles: [".chat-messages[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.chat-messages-show-container[_ngcontent-%COMP%] {\n  background: white;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  overflow-y: scroll;\n  margin-top: 0;\n}\n.chat-messages-show-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.chat-messages-create-container[_ngcontent-%COMP%] {\n  background: #616161;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n}\n.chat-messages-create-input[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 29px 30px;\n  flex: 2;\n}\n.chat-messages-create-button[_ngcontent-%COMP%] {\n  height: 50px;\n  margin: auto 40px;\n  width: 100px;\n}\n.message-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chat-msg[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: 15px 30px;\n  margin: 10px;\n  max-width: 78%;\n  color: white;\n  display: inline-block;\n}\n.receiver[_ngcontent-%COMP%] {\n  border-radius: 25px 25px 25px 0;\n  float: left;\n}\n.receiver[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: grey;\n  text-align: left;\n}\n.sender[_ngcontent-%COMP%] {\n  text-align: right;\n  border-radius: 25px 25px 0 25px;\n}\n.sender[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: right;\n  background-color: #00d800;\n}\n.username-holder[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #a1a1a1;\n  text-align: center;\n  border-radius: 10px 10px 0px 0px;\n  border-bottom: 1px solid white;\n}\n.username-holder[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtaW5ib3guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFERjtBQUlBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7QUFIRjtBQU1BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUpGO0FBT0E7RUFDRSxXQUFBO0FBTEY7QUFRQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBTkY7QUFVQTtFQUNFLCtCQUFBO0VBQ0EsV0FBQTtBQVJGO0FBTUE7RUFLSSxzQkFBQTtFQUNBLGdCQUFBO0FBUko7QUFjQTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7QUFaRjtBQVVBO0VBS0ksaUJBQUE7RUFDQSx5QkFBQTtBQVpKO0FBa0JBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQ0FBQTtFQUNBLDhCQUFBO0FBaEJGO0FBU0E7RUFVSSxnQkFBQTtFQUNBLGNBQUE7QUFoQkoiLCJmaWxlIjoiY2hhdC1pbmJveC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LW1lc3NhZ2VzIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY2hhdC1tZXNzYWdlcy1zaG93LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jaGF0LW1lc3NhZ2VzLXNob3ctbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2hhdC1tZXNzYWdlcy1jcmVhdGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzYxNjE2MTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jaGF0LW1lc3NhZ2VzLWNyZWF0ZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMjlweCAzMHB4O1xuICBmbGV4OiAyXG59XG5cbi5jaGF0LW1lc3NhZ2VzLWNyZWF0ZS1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogYXV0byA0MHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5tZXNzYWdlLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hhdC1tc2cge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1heC13aWR0aDogNzglO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxufVxuXG4ucmVjZWl2ZXIge1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAwO1xuICBmbG9hdDogbGVmdDtcblxuICBsaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gIH1cblxufVxuXG4uc2VuZGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDI1cHg7XG5cbiAgbGkge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMTYsIDApO1xuXG4gIH1cblxufVxuXG4udXNlcm5hbWUtaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMTYxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcblxuICBoNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxufVxuIl19 */"] });


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





function NotisComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "T\u00FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotisComponent_div_3_div_2_Template_app_card_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showBig(t_r1.card1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotisComponent_div_3_div_2_Template_app_card_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showBig(t_r1.card2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotisComponent_div_3_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.trade(t_r1, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rechazar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotisComponent_div_3_div_2_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.trade(t_r1, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mini", true)("id", t_r1.card1.cardid)("title", t_r1.card1.title)("description", t_r1.card1.description)("img", t_r1.card1.img)("type", t_r1.card1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mini", true)("id", t_r1.card2.cardid)("title", t_r1.card2.title)("description", t_r1.card2.description)("img", t_r1.card2.img)("type", t_r1.card2.type);
} }
function NotisComponent_div_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](t_r1.tmsg.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1.tmsg.msg);
} }
function NotisComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotisComponent_div_3_div_2_Template, 17, 13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotisComponent_div_3_ng_template_3_Template, 2, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r1.tmsg == null)("ngIfElse", _r3);
} }
class NotisComponent {
    constructor(http) {
        this.http = http;
        this.hasTrades = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cartita = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        const body = {
            c1: trade.card1.cardid,
            c2: trade.card2.cardid,
            u1: trade.userid,
            u2: this.user,
            date: trade.date,
            mode: mode ? 1 : 2
        };
        this.http.post('https://card-trading-api-dev.herokuapp.com/u/trades', body).subscribe(data => {
            const tradeo = this.trades.find(t => t.userid === trade.userid && t.date === trade.date);
            if (tradeo)
                tradeo.tmsg = { msg: `Intercambio ${mode ? "aceptado" : "rechazado"}`, class: "success" };
            setTimeout(() => this.updateTrades(), 1000);
        }, err => {
            const tradeo = this.trades.find(t => t.userid === trade.userid && t.date === trade.date);
            console.log(err);
            if (tradeo)
                tradeo.tmsg = { msg: err.error.error, class: "error" };
            setTimeout(() => this.updateTrades(), 1000);
        });
    }
    showBig(card) {
        this.cartita.emit(card);
    }
}
NotisComponent.ɵfac = function NotisComponent_Factory(t) { return new (t || NotisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NotisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotisComponent, selectors: [["app-notis"]], outputs: { hasTrades: "hasTrades", cartita: "cartita" }, decls: 4, vars: 1, consts: [[1, "dropdown-item"], [1, "trades"], [4, "ngFor", "ngForOf"], [1, "dropdown-divider"], ["class", "trade dropdown-item", "href", "#", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["href", "#", 1, "trade", "dropdown-item"], [1, "spacer"], [3, "mini", "id", "title", "description", "img", "type", "click"], [1, "fas", "fa-sync-alt"], [1, "butts"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "click"]], template: function NotisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Intercambios pendientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotisComponent_div_3_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: [".trades[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 17em;\n}\n.trades[_ngcontent-%COMP%]   .trade[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.trades[_ngcontent-%COMP%]   .trade[_ngcontent-%COMP%]   .butts[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  justify-content: flex-end;\n}\n.trades[_ngcontent-%COMP%]   .trade[_ngcontent-%COMP%]   .butts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0% 1%;\n  width: 30%;\n  font-size: 50%;\n  padding: 1%;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\napp-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n}\nh5.success[_ngcontent-%COMP%] {\n  color: green;\n}\nh5.error[_ngcontent-%COMP%] {\n  color: darkred;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFIQTtFQUtZLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFSQTtFQVVZLGNBQUE7RUFDQSx5QkFBQTtBQUNaO0FBWkE7RUFhZ0IsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVoQjtBQUdBO0VBQ0ksdUJBQUE7QUFESjtBQUdBO0VBQ0ksZUFBQTtBQURKO0FBR0E7RUFDSSxrQkFBQTtBQURKO0FBR0E7RUFDSSxZQUFBO0FBREo7QUFHQTtFQUNJLGNBQUE7QUFESjtBQUdBO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0FBREoiLCJmaWxlIjoibm90aXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhZGVze1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDE3ZW07XG4gICAgLnRyYWRle1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0c3sgXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxJTs7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCUgMSU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5kcm9wZG93bi1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuYXBwLWNhcmR7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuaDV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaDUuc3VjY2Vzc3tcbiAgICBjb2xvcjogZ3JlZW47XG59XG5oNS5lcnJvcntcbiAgICBjb2xvcjogZGFya3JlZDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgd2lkdGg6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth.service */ "QNcV");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/socket.service */ "N0TZ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _notis_notis_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notis/notis.component */ "WC9n");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./trade/trade.component */ "6KaB");
/* harmony import */ var _chat_app_chat_app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chat-app/chat-app.component */ "2Q77");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./message/message.component */ "eUAL");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _edicion_usuario_edicion_usuario_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./edicion-usuario/edicion-usuario.component */ "qlmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "fXoL");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"], _shared_socket_service__WEBPACK_IMPORTED_MODULE_20__["SocketService"], {
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
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
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_27__["ErrorPageComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
        _edicion_usuario_edicion_usuario_component__WEBPACK_IMPORTED_MODULE_29__["EdicionUsuarioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"]] }); })();


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
RegisterFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterFormComponent, selectors: [["app-register-form"]], inputs: { value: "value", type: "type", label: "label" }, outputs: { isFilledChanged: "isFilledChanged", valueChange: "valueChange" }, decls: 5, vars: 8, consts: [[1, "form-group"], [3, "for"], [1, "form-control", 3, "type", "value", "ngStyle", "input"]], template: function RegisterFormComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.value.length > 4 ? "green" : "red", ctx.value.length > 4 ? "1px solid green" : "1px solid red"));
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
        let chatBox = document.querySelector(".chat-messages-show-container");
        chatBox.scrollTo(0, chatBox.scrollHeight);
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
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");
/* harmony import */ var _notis_notis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notis/notis.component */ "WC9n");







const _c0 = ["notis"];
function HeaderComponent_li_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r6.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function HeaderComponent_li_7_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_7_ng_template_2_a_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.process(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-enabled", ctx_r11.canCheckIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function HeaderComponent_li_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_li_7_ng_template_2_a_0_Template, 2, 2, "a", 27);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.loggedIn);
} }
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_7_a_1_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_li_7_ng_template_2_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.link.length > 0)("ngIfElse", _r8);
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login/Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 37);
} }
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_li_9_div_2_Template, 1, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-notis", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_9_Template_app_notis_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.menuClick($event); })("hasTrades", function HeaderComponent_li_9_Template_app_notis_hasTrades_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.hasTrades($event); })("cartita", function HeaderComponent_li_9_Template_app_notis_cartita_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.showCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.hasNotis);
} }
function HeaderComponent_li_10_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_10_a_6_Template, 2, 0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onLogout(); });
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
//'https://card-trading-api-dev.herokuapp.com';
class HeaderComponent {
    constructor(_authService, router, http) {
        this._authService = _authService;
        this.router = router;
        this.http = http;
        this.loggedIn = this._authService.isLoggedIn();
        this.isLogged = false;
        this.isAdmin = false;
        this.canCheckIn = false;
        this.hasNotis = false;
        this.cartita = { cardid: "ERROR", title: "ERR_0", description: "An unexpected error has ocurred", img: "", type: 2 };
        this.card = { cardid: "ERROR", title: "ERR_0", description: "An unexpected error has ocurred", img: "", type: 2 };
        this.menuItems = [
            { linkid: 0, name: "Reclamar Carta", link: "" },
            { linkid: 1, name: "Cartas", link: "catalogue" },
            { linkid: 2, name: "Usuarios", link: "userlist" }
        ];
    }
    ngOnInit() {
        this._authService.user$.subscribe((user) => {
            this.user = user;
            if (!(this.loggedIn = this._authService.isLoggedIn())) {
                this.interval = setInterval(() => {
                    if (this.loggedIn = this._authService.isLoggedIn()) {
                        clearInterval(this.interval);
                        this.updateHeader();
                    }
                }, 2000);
                return;
            }
            this.updateHeader();
        });
    }
    updateHeader() {
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
                const cardids = cards.map(c => c.cardid);
                const cardid = Math.floor(Math.random() * cardids.length);
                this.http.post(`${API_URL}/c/` + this.userid, { cardid: cardids[cardid] }).subscribe(_ => {
                    this.http.get(`${API_URL}/c/` + cardids[cardid]).subscribe(card => {
                        this.card = card;
                        localStorage.setItem('token', data.token);
                        $("#gottenCard").modal("show");
                    });
                });
            });
        }, err => console.error(err));
    }
    menuClick(e) {
        e.stopPropagation();
    }
    hasTrades(b) {
        this.hasNotis = b;
    }
    onLogout() {
        this._authService.logout();
        this.updateHeader();
    }
    showCard(e) {
        this.cartita = e;
        $("#cardDetail").modal("show");
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notis = _t.first);
    } }, decls: 41, vars: 18, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "header"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "flex-grow-1", "text-right", "ml-auto", "collapse", "navbar-collapse", "justify-content-end", 2, "margin-right", "8%"], [1, "navbar-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item dropdown", "id", "lasChecas", 4, "ngIf"], ["class", "nav-item dropdown", "style", "z-index: 2000;", 4, "ngIf"], ["id", "gottenCard", "tabindex", "-1", 1, "modal", "fade"], ["gotModal", ""], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "id", "title", "description", "img", "type"], [1, "modal-footer"], ["data-dismiss", "modal", 1, "btn", "btn-warning", 3, "ngStyle"], ["id", "cardDetail", "tabindex", "-1", 1, "modal", "fade"], [1, "nav-item"], ["class", "nav-link navbar-link", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["elseA", ""], [1, "nav-link", "navbar-link", 3, "routerLink"], ["class", "nav-link navbar-link", 3, "click", 4, "ngIf"], [1, "nav-link", "navbar-link", 3, "click"], ["data-toggle", "modal", "data-target", "#loginModal", 1, "nav-link", "navbar-link"], [1, "btn", "btn-outline-info"], ["id", "lasChecas", 1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "href", "", 1, "nav-link", "navbar-link", "icons", "dropdown-toggle"], ["class", "bell-noti", 4, "ngIf"], [1, "fas", "fa-bell"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", 3, "click", "hasTrades", "cartita"], ["notis", ""], [1, "bell-noti"], [1, "nav-item", "dropdown", 2, "z-index", "2000"], ["href", "", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "navbar-link", "icons", "dropdown-toggle"], [1, "fas", "fa-user"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["class", "dropdown-item", "routerLink", "admin", 4, "ngIf"], [1, "dropdown-divider"], ["href", ".", 1, "dropdown-item", "text-danger", 3, "click"], ["routerLink", "admin", 1, "dropdown-item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Detalles de carta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.card.cardid)("title", ctx.card.title)("description", ctx.card.description)("img", ctx.card.img)("type", ctx.card.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.cartita.cardid)("title", ctx.cartita.title)("description", ctx.cartita.description)("img", ctx.cartita.img)("type", ctx.cartita.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _notis_notis_component__WEBPACK_IMPORTED_MODULE_6__["NotisComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-bottom: 10px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.397);\n  height: 75px;\n}\n.header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-right: 50px;\n  margin-left: 8%;\n  color: rgba(0, 0, 0);\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-link[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  border-radius: 15px;\n  color: rgba(0, 0, 0, 0.5);\n  transition: 0.3s;\n  font-size: 17px;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[data-enabled=\"true\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[data-enabled=\"false\"][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.2);\n  cursor: default;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[data-enabled=\"false\"][_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.2);\n  cursor: default;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-left: 10px;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-link[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n.header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 3000;\n}\n.bell-noti[_ngcontent-%COMP%] {\n  background-color: red;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  margin-left: 16%;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7QUFDRjtBQUxBO0VBU0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBREo7QUFYQTtFQWlCSSxZQUFBO0FBSEo7QUFkQTtFQW9CTSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFITjtBQXJCQTtFQTRCTSxlQUFBO0FBSk47QUF4QkE7RUFnQ00seUJBQUE7RUFDQSxlQUFBO0FBTE47QUE1QkE7RUFxQ00seUJBQUE7RUFDQSxlQUFBO0FBTk47QUFoQ0E7RUEwQ00sZUFBQTtFQUNBLGlCQUFBO0FBUE47QUFwQ0E7RUErQ00sY0FBQTtBQVJOO0FBdkNBO0VBb0RNLGFBQUE7QUFWTjtBQWVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWJGO0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBZEYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XG4gIGhlaWdodDogNzVweDtcblxuXG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCksXG4gIH1cblxuXG4gIC5uYXZiYXItbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAubmF2YmFyLWxpbmsge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cblxuICAgIGFbZGF0YS1lbmFibGVkPVwidHJ1ZVwiXSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgYVtkYXRhLWVuYWJsZWQ9XCJmYWxzZVwiXSB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgIGFbZGF0YS1lbmFibGVkPVwiZmFsc2VcIl06aG92ZXIge1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICAuaWNvbnMge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLm5hdmJhci1saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG5cbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICB6LWluZGV4OiAzMDAwO1xuICAgIH1cbiAgfVxufVxuXG4uYmVsbC1ub3RpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE2JTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A9 Card-trading 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 100%;\n  color: white;\n  text-align: center;\n  background-color: #202020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG59XG4iXX0= */"] });


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






function ContactListComponent_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-user-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rer", function ContactListComponent_div_2_li_2_Template_app_user_card_rer_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.update(); })("changeChatUser", function ContactListComponent_div_2_li_2_Template_app_user_card_changeChatUser_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.changeCurrentUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", u_r3)("removable", ctx_r2.id ? -1 : u_r3.userid)("extra", ctx_r2.token)("chat", ctx_r2.chat);
} }
function ContactListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactListComponent_div_2_li_2_Template, 2, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
function ContactListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sin contactos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        this.users = [];
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
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["app-contact-list"]], inputs: { id: "id", chat: "chat" }, outputs: { changeAddressee: "changeAddressee" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([contactillos]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [["class", "contacts", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "contacts"], [2, "list-style", "none"], ["class", "contact", 4, "ngFor", "ngForOf"], [1, "contact"], [3, "user", "removable", "extra", "chat", "rer", "changeChatUser"], [1, "text-center"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contactos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactListComponent_div_2_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactListComponent_div_3_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.users == null ? null : ctx.users.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.users == null ? null : ctx.users.length) == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_4__["UserCardComponent"]], styles: [".contacts[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 1%;\n}\n.contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  text-align: -webkit-center;\n  width: 100%;\n  height: 4em;\n  margin-bottom: 12px;\n}\n.contacts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: bolder;\n  position: sticky;\n  z-index: 2;\n  background-color: inherit;\n  margin-bottom: 15px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n  background: transparent;\n}\n.chat-boxes[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 90%;\n  bottom: 0.1%;\n  right: 1%;\n  margin: 0px 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFGQTtFQUtJLFdBQUE7QUFBSjtBQUxBO0VBU0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREo7QUFYQTtFQWdCSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBTUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBSkY7QUFPQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBTEYiLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3RzIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gIHVsIHtcbiAgICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nOiAxJTtcbiAgfVxuXG4gIC5jb250YWN0IHtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG5cbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jaGF0LWJveGVzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogOTAlO1xuICBib3R0b206IDAuMSU7XG4gIHJpZ2h0OiAxJTtcbiAgbWFyZ2luOiAwcHggNXZ3O1xufVxuIl19 */"] });


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
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");
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
    { path: 'userlist', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
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
    } }, styles: [".cardo[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 12em;\n  height: 18em;\n  align-content: center;\n  border: 2px solid black;\n}\n.cardo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.cardo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n}\n.cardo[_ngcontent-%COMP%]   .imgback[_ngcontent-%COMP%] {\n  top: inherit;\n  margin-top: -40em;\n  margin-left: unset;\n  position: relative;\n  z-index: -1;\n  width: inherit;\n  height: inherit;\n  border: none;\n  opacity: 0;\n}\n.cardo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 50%;\n  margin: 1% 4%;\n  background-color: white;\n  border: 2px ridge gray;\n}\n.cardo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n.cardo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cardo[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  color: black;\n  height: 10%;\n  width: 95%;\n  margin: 0% 2.5% 1% 1.5%;\n  padding-left: 0.5%;\n}\n.cardo[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: small;\n  height: 35%;\n  overflow-y: hidden;\n  word-wrap: break-word;\n}\n.cardo[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n  background: transparent;\n}\n.cardo[mini=\"true\"][_ngcontent-%COMP%] {\n  width: 2em;\n  height: 3em;\n}\n.cardo[mini=\"true\"][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cardo[mini=\"true\"][_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 0% 2.5% 1% 1.5%;\n  padding-left: 0.5%;\n}\n.cardo[mini=\"true\"][_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 0.1%;\n  line-height: 1;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%] {\n  width: 4em;\n  height: 6em;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 5%;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cardo[smol=\"true\"][_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 0% 2.5% 1% 1.5%;\n  padding-left: 0.5%;\n}\n.cardo[smol=\"true\"][_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 0.1%;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUZKO0FBTkE7RUFFUSxxQkFBQTtBQU9SO0FBVEE7RUFVUSxrQkFBQTtFQUNBLFVBQUE7QUFFUjtBQWJBO0VBY1EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRVI7QUF4QkE7RUF5QlEsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUVSO0FBL0JBO0VBZ0NRLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBcENBOztFQXFDUSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBR1I7QUE1Q0E7RUE0Q1EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUdSO0FBbERBO0VBa0RRLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFHUjtBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFSjtBQUpBOztFQUlRLHVCQUFBO0VBQ0Esa0JBQUE7QUFJUjtBQVRBO0VBUVEsZUFBQTtFQUNBLGNBQUE7QUFJUjtBQURBO0VBQ0ksZUFBQTtBQUdKO0FBREE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUdKO0FBTEE7RUFJUSxhQUFBO0FBSVI7QUFSQTs7RUFPUSx1QkFBQTtFQUNBLGtCQUFBO0FBS1I7QUFiQTtFQVdRLGVBQUE7RUFDQSxjQUFBO0FBS1IiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkb3tcbiAgICBhOmhvdmVye1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEyZW07XG4gICAgaGVpZ2h0OiAxOGVtO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAqe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICAgIC5pbWdiYWNre1xuICAgICAgICB0b3A6aW5oZXJpdDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIG1hcmdpbjogMSUgNCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDJweCByaWRnZSBncmF5O1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG4gICAgLnRpdGxlLC5kZXNje1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IDAlIDIuNSUgMSUgMS41JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjUlO1xuICAgIH1cbiAgICAuZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgaGVpZ2h0OiAzNSU7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuLmNhcmRvW21pbmk9XCJ0cnVlXCJde1xuICAgIHdpZHRoOiAyZW07XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgLnRpdGxlLC5kZXNje1xuICAgICAgICBtYXJnaW46IDAlIDIuNSUgMSUgMS41JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjUlO1xuICAgIH1cbiAgICAuZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiAwLjElO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG59XG4uY2FyZG9bc21vbD1cInRydWVcIl06aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmRvW3Ntb2w9XCJ0cnVlXCJde1xuICAgIHdpZHRoOiA0ZW07XG4gICAgaGVpZ2h0OiA2ZW07XG4gICAgLnRpdGxle1xuICAgICAgICBmb250LXNpemU6IDUlO1xuICAgIH1cbiAgICAudGl0bGUsLmRlc2N7XG4gICAgICAgIG1hcmdpbjogMCUgMi41JSAxJSAxLjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNSU7XG4gICAgfVxuICAgIC5kZXNje1xuICAgICAgICBmb250LXNpemU6IDAuMSU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "qlmG":
/*!**************************************************************!*\
  !*** ./src/app/edicion-usuario/edicion-usuario.component.ts ***!
  \**************************************************************/
/*! exports provided: EdicionUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicionUsuarioComponent", function() { return EdicionUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "QNcV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class EdicionUsuarioComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.name = "";
        this.lastname = "";
        this.birthday = "";
        this.img = "";
        this.profileText = "";
        this.username = "";
    }
    ngOnInit() {
    }
    toggleDel() {
        this.http.delete('https://card-trading-api-dev.herokuapp.com/u/' + this.userid).subscribe(data => {
            $("#confirmModal").modal("hide");
            this.auth.logoutUser();
        }, error => {
            //this.regMsg = { msg: "Error, intente de nuevo más tarde.", class: 'text-danger' };
        });
        return;
    }
    createUser() {
        console.log("updating user...");
        const user = {
            name: this.name,
            lastName: this.lastname,
            username: this.username,
            img: this.img,
            profiletext: this.profileText,
            birthday: this.birthday
        }; //
        //
        this.http.put('https://card-trading-api-dev.herokuapp.com/u/' + this.userid, user).subscribe(data => {
            this.regMsg = { msg: "Usuario actualizado exitosamente.", class: 'text-success' };
            // Object.keys(user).forEach(k => {
            //   if (user[k] != undefined && user[k].length > 0)
            //     this.user[k] = user[k];
            // });
            $("#confirmModal").modal("hide");
        }, error => {
            this.regMsg = { msg: "Error, intente de nuevo más tarde.", class: 'text-danger' };
        });
    }
}
EdicionUsuarioComponent.ɵfac = function EdicionUsuarioComponent_Factory(t) { return new (t || EdicionUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
EdicionUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EdicionUsuarioComponent, selectors: [["app-edicion-usuario"]], inputs: { userid: "userid", name: "name", lastname: "lastname", birthday: "birthday", img: "img", profileText: "profileText", username: "username" }, decls: 38, vars: 9, consts: [[1, "row", "edit-user"], [1, "col-4", "text-center"], [3, "src"], [1, "col-8"], [1, "row"], [1, "form-group", "namesInput"], [1, "col-6"], ["for", "name", 1, "namesLabels"], ["type", "text", "name", "name", 1, "form-control", "mr-3", 3, "ngModel", "ngModelChange"], ["for", "lastname", 1, "namesLabels"], ["type", "text", "name", "lastname", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], [1, ""], ["for", "username", 1, "text-left"], ["type", "text", "name", "username", 1, "form-control", 2, "width", "455px", 3, "ngModel", "ngModelChange"], [1, "col-7"], ["for", "profiletext"], ["name", "profiletext", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn-updateUser"], ["type", "button", "data-toggle", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "click"]], template: function EdicionUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nombre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EdicionUsuarioComponent_Template_input_ngModelChange_15_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EdicionUsuarioComponent_Template_input_ngModelChange_20_listener($event) { return ctx.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nombre de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EdicionUsuarioComponent_Template_input_ngModelChange_25_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Texto de Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EdicionUsuarioComponent_Template_textarea_ngModelChange_31_listener($event) { return ctx.profileText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionUsuarioComponent_Template_button_click_33_listener() { return ctx.toggleDel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Eliminar cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionUsuarioComponent_Template_button_click_36_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Actualizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img ? ctx.img : "https://i1.sndcdn.com/avatars-000310902564-g2unlt-t240x240.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.regMsg == null ? null : ctx.regMsg.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.regMsg == null ? null : ctx.regMsg.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profileText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  width: 50%;\n  aspect-ratio: 1;\n}\n.btn-updateUser[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  text-align: center;\n  padding-bottom: 35px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.namesInput[_ngcontent-%COMP%] {\n  display: flex;\n}\n.namesLabels[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.fileUpload[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaWNpb24tdXN1YXJpby5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFIRjtBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBSkY7QUFPQTtFQUNFLFdBQUE7QUFMRjtBQVFBO0VBQ0UsYUFBQTtBQU5GO0FBU0E7RUFDRSxVQUFBO0FBUEY7QUFVQTtFQUNFLGtCQUFBO0FBUkYiLCJmaWxlIjoiZWRpY2lvbi11c3VhcmlvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGJhY2tncm91bmQ6ICNEM0QzRDM7XG5cbi5lZGl0LXVzZXIge31cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xufVxuXG4uYnRuLXVwZGF0ZVVzZXIge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYW1lc0lucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5hbWVzTGFiZWxzIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmZpbGVVcGxvYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.logMsg.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.logMsg.msg);
} }
const API_URL = 'https://card-trading-api-dev.herokuapp.com';
class LoginComponent {
    constructor(_auth, _router, socialAuthService, http) {
        this._auth = _auth;
        this._router = _router;
        this.socialAuthService = socialAuthService;
        this.http = http;
        this.exampleEmail = "ex@mp.le";
        this.loginUserData = {};
    }
    get formLogin() { return this.form.controls; }
    ngOnInit() {
        this.user = null;
        this.initForm();
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            this.isLoggedin = (user != null);
        });
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    LoginUser() {
        //console.log(this.loginUserData);
        this._auth.loginUser(this.loginUserData).subscribe(data => {
            //console.log(data);
            localStorage.setItem('token', data.token);
            this.http.get(`${API_URL}/login?token=${localStorage.getItem("token")}`).subscribe(res => {
                this.userid = res.userid;
                this._router.navigate(['/user/' + this.userid]);
                $("#loginModal").modal("hide");
            });
        }, error => {
            this.logMsg = { msg: "Usuario o contraseña incorrectos.", class: 'text-danger' };
        });
    }
    signWithGoogle() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID)).subscribe({
            next: (user) => {
                this._auth.login(user);
            },
            error: (error) => {
                console.error(error);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 34, vars: 4, consts: [[1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", "container"], [1, "register-fields"], ["name", "email", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["email", ""], ["name", "password", "type", "password", "pass", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], ["href", "", "data-toggle", "modal", "data-target", "#registerModal", "data-dismiss", "modal"], [3, "class", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-dismiss", "modal", "id", "google-login", 1, "btn", "btn-danger", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.loginUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.loginUserData.password = $event; })("keyup.enter", function LoginComponent_Template_input_keyup_enter_20_listener() { return ctx.LoginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u00BFNo tienes cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "!Reg\u00EDstrate aqu\u00ED!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_30_listener() { return ctx.LoginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() { return ctx.signWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Continuar con Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginUserData.email)("placeholder", ctx.exampleEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginUserData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.logMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".register-form[_ngcontent-%COMP%] {\n  background-color: #ebebeb;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.register-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.register-form[_ngcontent-%COMP%]   .register-fields[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 4%;\n}\n.register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUpBO0VBTUksaUJBQUE7QUFDSjtBQVBBO0VBVUksV0FBQTtFQUNBLGVBQUE7QUFBSjtBQVhBO0VBZUksVUFBQTtBQURKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnJlZ2lzdGVyLWZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbiJdfQ== */"] });


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