(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shopping-cart-shopping-cart-module"],{

/***/ "./src/app/pages/shopping-cart/checkout/checkout.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/shopping-cart/checkout/checkout.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container--shoping-card\">\n  <div class=\"checkout\">\n    <h2>Оформление заказа</h2>\n    <form action=\"\" class=\"chekout-form\">\n      <h4>Адрес доставки</h4>\n      <div class=\"chekout-form__item\">\n        <input type=\"text\" required placeholder=\" \" name=\"\" value=\"\" class=\"input-main\">\n        <label class=\"chekout-form__label\">Город, улица, номер дома*</label>\n      </div>\n      <div class=\"chekout-form__item chekout-form__item--min\">\n        <input type=\"text\" placeholder=\" \" name=\"\" value=\"\" class=\"input-main input-main--min\">\n        <label class=\"chekout-form__label\">Кв/офис</label>\n      </div>\n      <div class=\"chekout-form__item chekout-form__item--min\">\n        <input type=\"text\" placeholder=\" \" name=\"\" value=\"\" class=\"input-main input-main--min\">\n        <label class=\"chekout-form__label\">Этаж</label>\n      </div>\n      <div class=\"chekout-form__item chekout-form__item--min\">\n        <input type=\"text\" placeholder=\" \" name=\"\" value=\"\" class=\"input-main input-main--min\">\n        <label class=\"chekout-form__label\">Подъезд</label>\n      </div>\n      <div class=\"chekout-form__item\">\n          <textarea type=\"text\" placeholder=\" \" name=\"\" value=\"\" class=\"input-main input-main--comment\"></textarea>\n        <label class=\"chekout-form__label\">Комментарий к заказу</label>\n      </div>\n      <h4>Получатель</h4>\n      <div class=\"chekout-form__item\">\n        <input type=\"text\" required placeholder=\" \" name=\"\" value=\"\" class=\"input-main\">\n        <label class=\"chekout-form__label\">Имя*</label>\n      </div>\n      <div class=\"chekout-form__item\">\n        <input type=\"text\" required placeholder=\" \" name=\"\" value=\"\" class=\"input-main\">\n        <label class=\"chekout-form__label\">Фамилия*</label>\n      </div>\n      <div class=\"chekout-form__item\">\n      <input type=\"text\" required placeholder=\" \" name=\"\" value=\"\" class=\"input-main\">\n        <label class=\"chekout-form__label\">Электронная почта*</label>\n      </div>\n      <div class=\"chekout-form__item\">\n      <input type=\"number\" required placeholder=\" \" name=\"\" value=\"\" class=\"input-main\">\n        <label class=\"chekout-form__label\">Номер телефона*</label>\n      </div>\n      <button type=\"submit\" name=\"button\" class=\"btn chekout-form__btn\">Оформить заказ</button>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/shopping-cart/checkout/checkout.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/shopping-cart/checkout/checkout.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout {\n  margin: 18px 0 88px;\n  background: white;\n  padding: 15px 40px 57px 51px;\n  border-radius: 5px; }\n  .checkout .chekout-form {\n    width: 449px; }\n  .checkout .chekout-form__item {\n      width: 100%;\n      display: inline-block;\n      vertical-align: top;\n      position: relative; }\n  .checkout .chekout-form__item--min {\n        width: auto; }\n  .checkout .chekout-form__label {\n      position: absolute;\n      pointer-events: none;\n      left: 16px;\n      top: 13px;\n      line-height: 40px;\n      transition: 0.3s;\n      color: #a1a8bd; }\n  .checkout .chekout-form__btn {\n      margin-top: 36px;\n      width: 100%; }\n  @media (max-width: 991.98px) {\n        .checkout .chekout-form__btn {\n          width: 100%; } }\n  @media (max-width: 575.98px) {\n        .checkout .chekout-form__btn {\n          width: 100%; } }\n  @media (max-width: 991.98px) {\n      .checkout .chekout-form {\n        width: 436px; } }\n  @media (max-width: 575.98px) {\n      .checkout .chekout-form {\n        width: 100%; } }\n  .checkout .input-main:focus ~ .chekout-form__label,\n  .checkout .input-main:not(:placeholder-shown) ~ .chekout-form__label {\n    top: 0px;\n    font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcHBpbmctY2FydC9jaGVja291dC9FOlxc0KDQsNCx0L7RgtGLXFxnaXRodWJcXHN0b3JlL3NyY1xcYXBwXFxwYWdlc1xcc2hvcHBpbmctY2FydFxcY2hlY2tvdXRcXGNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUE7RUFKcEI7SUFPSSxZQUFZLEVBQUE7RUFQaEI7TUFVTSxXQUFXO01BQ1gscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixrQkFBa0IsRUFBQTtFQWJ4QjtRQWVRLFdBQVcsRUFBQTtFQWZuQjtNQW9CTSxrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLFVBQVU7TUFDVixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixjQUFjLEVBQUE7RUExQnBCO01BK0JNLGdCQUFnQjtNQUNoQixXQUFXLEVBQUE7RUFDWDtRQWpDTjtVQWtDUSxXQUFXLEVBQUEsRUFLZDtFQUhDO1FBcENOO1VBcUNRLFdBQVcsRUFBQSxFQUVkO0VBQ0Q7TUF4Q0o7UUF5Q00sWUFBWSxFQUFBLEVBS2Y7RUFIQztNQTNDSjtRQTRDTSxXQUFXLEVBQUEsRUFFZDtFQTlDSDs7SUFrREksUUFBUTtJQUNSLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3BwaW5nLWNhcnQvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQge1xyXG4gIG1hcmdpbjogMThweCAwIDg4cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCA0MHB4IDU3cHggNTFweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIC5jaGVrb3V0LWZvcm0ge1xyXG4gICAgd2lkdGg6IDQ0OXB4O1xyXG5cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICYtLW1pbiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19sYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgIHRvcDogMTNweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIGNvbG9yOiAjYTFhOGJkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmX19idG4ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgICB3aWR0aDogNDM2cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtbWFpbjpmb2N1c34uY2hla291dC1mb3JtX19sYWJlbCxcclxuICAuaW5wdXQtbWFpbjpub3QoOnBsYWNlaG9sZGVyLXNob3duKX4uY2hla291dC1mb3JtX19sYWJlbCB7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/shopping-cart/checkout/checkout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/shopping-cart/checkout/checkout.component.ts ***!
  \********************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/pages/shopping-cart/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/pages/shopping-cart/checkout/checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"shopping-cart-page\">\n    <app-shopping-cart></app-shopping-cart>\n    <app-checkout></app-checkout>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopping-cart-page {\n  max-width: 869px;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcHBpbmctY2FydC9FOlxc0KDQsNCx0L7RgtGLXFxnaXRodWJcXHN0b3JlL3NyY1xcYXBwXFxwYWdlc1xcc2hvcHBpbmctY2FydFxcc2hvcHBpbmctY2FydC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3BwaW5nLWNhcnQtcGFnZSB7XHJcbiAgbWF4LXdpZHRoOiA4NjlweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageComponent", function() { return ShoppingCartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingCartPageComponent = /** @class */ (function () {
    function ShoppingCartPageComponent() {
    }
    ShoppingCartPageComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart-page',
            template: __webpack_require__(/*! ./shopping-cart-page.component.html */ "./src/app/pages/shopping-cart/shopping-cart-page.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-page.component.scss */ "./src/app/pages/shopping-cart/shopping-cart-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingCartPageComponent);
    return ShoppingCartPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartRoutingModule", function() { return ShoppingCartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_cart_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart-page.component */ "./src/app/pages/shopping-cart/shopping-cart-page.component.ts");




var routes = [
    { path: "", component: _shopping_cart_page_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartPageComponent"] }
];
var ShoppingCartRoutingModule = /** @class */ (function () {
    function ShoppingCartRoutingModule() {
    }
    ShoppingCartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ShoppingCartRoutingModule);
    return ShoppingCartRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart.module.ts ***!
  \*************************************************************/
/*! exports provided: ShoppingCartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartModule", function() { return ShoppingCartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart-routing.module */ "./src/app/pages/shopping-cart/shopping-cart-routing.module.ts");
/* harmony import */ var _shopping_cart_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-cart-page.component */ "./src/app/pages/shopping-cart/shopping-cart-page.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/pages/shopping-cart/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/pages/shopping-cart/checkout/checkout.component.ts");
/* harmony import */ var _shopping_cart_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-cart/product/product.component */ "./src/app/pages/shopping-cart/shopping-cart/product/product.component.ts");








var ShoppingCartModule = /** @class */ (function () {
    function ShoppingCartModule() {
    }
    ShoppingCartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_shopping_cart_page_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartPageComponent"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"], _shopping_cart_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartRoutingModule"]
            ]
        })
    ], ShoppingCartModule);
    return ShoppingCartModule;
}());



/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart/product/product.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart/product/product.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let product of products\" class=\"card-product\">\r\n  <div class=\"card-product__info\">\r\n    <img src=\".{{product.imgURL}}\" class=\"card-product__img\" alt=\"\">\r\n    <div class=\"card-product__name\">\r\n      {{product.name}}\r\n      <div class=\"card-product__code\">\r\n        {{product.id}}\r\n      </div>\r\n      <div class=\"card-product__sum\">\r\n        {{product.price}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-product__cost\">\r\n    <div class=\"card-product__price\">\r\n      {{product.price}}\r\n    </div>\r\n    <div class=\"card-product__quantity\">\r\n      <button class=\"card-product__btn\" onclick=\"this.parentNode.querySelector('.card-product__input').stepDown()\">\r\n        <svg\r\n             xmlns=\"http://www.w3.org/2000/svg\"\r\n             xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n             width=\"18px\" height=\"2px\">\r\n            <path fill-rule=\"evenodd\"  fill=\"rgb(242, 72, 65)\"\r\n             d=\"M-0.000,-0.000 L18.000,-0.000 L18.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z\"/>\r\n        </svg>\r\n      </button>\r\n      <input type=\"number\" value=\"1\" class=\"card-product__input\">\r\n      <button class=\"card-product__btn\" onclick=\"this.parentNode.querySelector('.card-product__input').stepUp()\">\r\n        <svg\r\n             xmlns=\"http://www.w3.org/2000/svg\"\r\n             xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n             width=\"18px\" height=\"16px\">\r\n            <path fill-rule=\"evenodd\"  fill=\"rgb(242, 72, 65)\"\r\n             d=\"M10.000,-0.000 L7.999,-0.000 L7.999,7.000 L-0.000,7.000 L-0.000,9.000 L7.999,9.000 L7.999,16.000 L10.000,16.000 L10.000,9.000 L18.000,9.000 L18.000,7.000 L10.000,7.000 L10.000,-0.000 Z\"/>\r\n        </svg>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-product__price\">\r\n      {{product.price}}\r\n    </div>\r\n    <svg\r\n         xmlns=\"http://www.w3.org/2000/svg\"\r\n         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         width=\"14px\" height=\"14px\">\r\n        <path fill-rule=\"evenodd\"  fill=\"rgb(161, 168, 189)\"\r\n         d=\"M8.360,6.993 L13.713,1.642 C14.087,1.265 14.087,0.653 13.713,0.276 C13.335,-0.101 12.721,-0.101 12.346,0.276 L6.993,5.627 L1.642,0.276 C1.265,-0.101 0.653,-0.101 0.275,0.276 C-0.102,0.653 -0.102,1.265 0.275,1.642 L5.627,6.993 L0.275,12.346 C-0.102,12.721 -0.102,13.336 0.275,13.713 C0.653,14.088 1.265,14.088 1.642,13.713 L6.993,8.360 L12.346,13.713 C12.721,14.088 13.335,14.088 13.713,13.713 C14.087,13.336 14.087,12.721 13.713,12.346 L8.360,6.993 Z\"/>\r\n    </svg>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart/product/product.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart/product/product.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-product {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 99px;\n  border-top: 1px solid #f0f2f7; }\n  .card-product__info {\n    display: flex; }\n  .card-product__img {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 99px;\n    width: 99px; }\n  .card-product__name {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 16px;\n    margin-left: 18px; }\n  .card-product__code {\n    margin-top: 8px;\n    color: #a1a8bd;\n    font-size: 14px; }\n  .card-product__cost {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 356px;\n    margin-left: auto;\n    font-size: 18px;\n    font-weight: 700; }\n  .card-product__quantity {\n    display: flex;\n    align-items: stretch; }\n  .card-product__btn {\n    display: flex;\n    align-items: center;\n    background: none;\n    margin: 5px; }\n  .card-product__input {\n    margin: 0;\n    width: 46px;\n    height: 36px;\n    border-radius: 3px;\n    border: 2px solid #e3e8f0;\n    background-color: #ffffff;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 21px;\n    text-align: center; }\n  .card-product__sum {\n    margin-top: 9px;\n    display: none;\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 21px; }\n  @media (max-width: 767.98px) {\n    .card-product {\n      width: 100%;\n      height: 173px; }\n      .card-product__price {\n        display: none; }\n      .card-product__sum {\n        display: block; }\n      .card-product__cost {\n        width: 160px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0L3Byb2R1Y3QvRTpcXNCg0LDQsdC+0YLRi1xcZ2l0aHViXFxzdG9yZS9zcmNcXGFwcFxccGFnZXNcXHNob3BwaW5nLWNhcnRcXHNob3BwaW5nLWNhcnRcXHByb2R1Y3RcXHByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osNkJBQTZCLEVBQUE7RUFFN0I7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXLEVBQUE7RUFHYjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CLEVBQUE7RUFHeEI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUFHZjtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBSXRCO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRW5CO0lBNUVGO01BNkVJLFdBQVc7TUFDWCxhQUFhLEVBQUE7TUFFYjtRQUNFLGFBQWEsRUFBQTtNQUdmO1FBQ0UsY0FBYyxFQUFBO01BR2hCO1FBQ0UsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcHJvZHVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDk5cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYyZjc7XHJcblxyXG4gICZfX2luZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA5OXB4O1xyXG4gICAgd2lkdGg6IDk5cHg7XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICB9XHJcblxyXG4gICZfX2NvZGUge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY29sb3I6ICNhMWE4YmQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAmX19jb3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDM1NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgJl9fcXVhbnRpdHkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcblxyXG4gICZfX2J0biB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcbiAgJl9faW5wdXQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2UzZThmMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gICZfX3N1bSB7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNzNweDtcclxuXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc3VtIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29zdCB7XHJcbiAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart/product/product.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart/product/product.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_shopping_cart_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../products/shopping-cart-products */ "./src/app/pages/products/shopping-cart-products.ts");



var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.products = _products_shopping_cart_products__WEBPACK_IMPORTED_MODULE_2__["Products"];
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/shopping-cart/shopping-cart/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/shopping-cart/shopping-cart/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart/shopping-cart.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart/shopping-cart.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container--shoping-card\">\n    <div class=\"shopping-card\">\n        <div class=\"shopping-card__headline\">\n            <h2>Корзина</h2>\n        </div>\n        <app-product></app-product>\n        <div class=\"shopping-card__total\">\n          <div class=\"shopping-card__quantity\">\n            3 товара\n          </div>\n          <div class=\"shopping-card__amount\">\n            К оплате:  28 197 ₽\n          </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart/shopping-cart.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart/shopping-cart.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopping-card {\n  margin: 58px 0 18px;\n  background: white;\n  padding: 0 40px 0 51px;\n  border-radius: 5px; }\n  .shopping-card__headline {\n    display: flex;\n    align-items: center;\n    height: 107px; }\n  .shopping-card .card-product {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    height: 99px;\n    border-top: 1px solid #f0f2f7; }\n  .shopping-card .card-product__info {\n      display: flex; }\n  .shopping-card .card-product__name {\n      font-size: 16px;\n      margin-left: 18px; }\n  .shopping-card .card-product__code {\n      margin-top: 8px;\n      color: #a1a8bd;\n      font-size: 14px; }\n  .shopping-card .card-product__cost {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 356px;\n      margin-left: auto;\n      font-size: 18px;\n      font-weight: 700; }\n  .shopping-card .card-product__sum {\n      margin-top: 9px;\n      display: none;\n      font-size: 18px;\n      font-weight: 700;\n      line-height: 21px; }\n  @media (max-width: 767.98px) {\n      .shopping-card .card-product {\n        width: 100%;\n        height: 173px; }\n        .shopping-card .card-product__price {\n          display: none; }\n        .shopping-card .card-product__sum {\n          display: block; }\n        .shopping-card .card-product__cost {\n          width: 160px; } }\n  .shopping-card__total {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    height: 93px;\n    margin: 2px -40px 0 -51px;\n    padding: 0 40px;\n    border-radius: 0 0 5px 5px;\n    background-color: #e3eaef; }\n  @media (max-width: 767.98px) {\n      .shopping-card__total {\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: center;\n        height: 97px; } }\n  .shopping-card__quantity {\n    color: #79848f;\n    font-size: 18px;\n    font-weight: 500; }\n  @media (max-width: 767.98px) {\n      .shopping-card__quantity {\n        font-size: 16px;\n        margin: 5px 0; } }\n  .shopping-card__amount {\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 21px; }\n  @media (max-width: 767.98px) {\n      .shopping-card__amount {\n        font-size: 20px;\n        margin: 5px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0L0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxzaG9wcGluZy1jYXJ0XFxzaG9wcGluZy1jYXJ0XFxzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7RUFFbEI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWEsRUFBQTtFQVRyQjtJQWFRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWiw2QkFBNkIsRUFBQTtFQWpCckM7TUFvQlUsYUFBYSxFQUFBO0VBcEJ2QjtNQXdCWSxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUF6QjdCO01BNkJZLGVBQWU7TUFDZixjQUFjO01BQ2QsZUFBZSxFQUFBO0VBL0IzQjtNQW1DWSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQXpDNUI7TUE2Q1ksZUFBZTtNQUNmLGFBQWE7TUFDYixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGlCQUFpQixFQUFBO0VBRXJCO01BbkRSO1FBb0RZLFdBQVc7UUFDWCxhQUFhLEVBQUE7UUFyRHpCO1VBd0RnQixhQUFhLEVBQUE7UUF4RDdCO1VBNERnQixjQUFjLEVBQUE7UUE1RDlCO1VBZ0VnQixZQUFZLEVBQUEsRUFDZjtFQUlUO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQix5QkFBeUIsRUFBQTtFQUN6QjtNQVZKO1FBV1Esc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsWUFBWSxFQUFBLEVBRW5CO0VBRUQ7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBQ2hCO01BSko7UUFLUSxlQUFlO1FBRWYsYUFBYSxFQUFBLEVBRXBCO0VBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBQ2pCO01BSko7UUFLUSxlQUFlO1FBQ2YsYUFBYSxFQUFBLEVBRXBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvcHBpbmctY2FyZCB7XHJcbiAgICBtYXJnaW46IDU4cHggMCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHggMCA1MXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICZfX2hlYWRsaW5lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDdweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1wcm9kdWN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGhlaWdodDogOTlweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjJmNztcclxuXHJcbiAgICAgICAgJl9faW5mbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19jb2RlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ExYThiZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fY29zdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDM1NnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fc3VtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTczcHg7XHJcblxyXG4gICAgICAgICAgICAmX19wcmljZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19zdW0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICZfX2Nvc3Qge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3RvdGFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBoZWlnaHQ6IDkzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAycHggLTQwcHggMCAtNTFweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZWFlZjtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDk3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3F1YW50aXR5IHtcclxuICAgICAgICBjb2xvcjogIzc5ODQ4ZjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYW1vdW50IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart/shopping-cart.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart/shopping-cart.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/pages/shopping-cart/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/pages/shopping-cart/shopping-cart/shopping-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-shopping-cart-shopping-cart-module.js.map