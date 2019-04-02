(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-status-order-status-module"],{

/***/ "./src/app/pages/order-status/order-status-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/order-status/order-status-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusRoutingModule", function() { return OrderStatusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _status_auth_status_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-auth/status-auth.component */ "./src/app/pages/order-status/status-auth/status-auth.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status/status.component */ "./src/app/pages/order-status/status/status.component.ts");





var routes = [
    { path: "", component: _status_auth_status_auth_component__WEBPACK_IMPORTED_MODULE_3__["StatusAuthComponent"] },
    { path: "order_number", component: _status_status_component__WEBPACK_IMPORTED_MODULE_4__["StatusComponent"] }
];
var OrderStatusRoutingModule = /** @class */ (function () {
    function OrderStatusRoutingModule() {
    }
    OrderStatusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OrderStatusRoutingModule);
    return OrderStatusRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/order-status/order-status.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-status/order-status.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusModule", function() { return OrderStatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order_status_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-status-routing.module */ "./src/app/pages/order-status/order-status-routing.module.ts");
/* harmony import */ var _status_auth_status_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status-auth/status-auth.component */ "./src/app/pages/order-status/status-auth/status-auth.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status/status.component */ "./src/app/pages/order-status/status/status.component.ts");
/* harmony import */ var _status_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status/product/product.component */ "./src/app/pages/order-status/status/product/product.component.ts");







var OrderStatusModule = /** @class */ (function () {
    function OrderStatusModule() {
    }
    OrderStatusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_status_auth_status_auth_component__WEBPACK_IMPORTED_MODULE_4__["StatusAuthComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_5__["StatusComponent"], _status_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _order_status_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderStatusRoutingModule"]
            ]
        })
    ], OrderStatusModule);
    return OrderStatusModule;
}());



/***/ }),

/***/ "./src/app/pages/order-status/status-auth/status-auth.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/order-status/status-auth/status-auth.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"headline\"><h2>Проверить статус заказа</h2></div>\n  <div class=\"status-auth\">\n  <span class=\"status-auth__text\">\n    Введите номер Вашего заказа и электронный адрес, указанный при его оформлении.\n  </span>\n    <form action=\"\">\n      <input type=\"text\" placeholder=\"Номер заказа\" name=\"\" value=\"\" class=\"input-main\">\n      <input type=\"text\" placeholder=\"Электронная почта\" name=\"\" value=\"\" class=\"input-main\">\n      <a routerLink=\"order_number\" class=\"btn\">Проверить статус</a>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/order-status/status-auth/status-auth.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/order-status/status-auth/status-auth.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headline {\n  margin: 70px 0 40px;\n  text-align: center; }\n\n.status-auth {\n  width: 571px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  padding: 43px 128px 57px;\n  box-sizing: border-box;\n  margin: 0 auto; }\n\n.status-auth__text {\n    width: 291px;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 21px; }\n\n@media (max-width: 575.98px) {\n    .status-auth {\n      width: 100%;\n      padding: 43px 23px 57px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItc3RhdHVzL3N0YXR1cy1hdXRoL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1YlxcMTIzL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXItc3RhdHVzXFxzdGF0dXMtYXV0aFxcc3RhdHVzLWF1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBRWQ7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTs7QUFFckI7SUFkSjtNQWVNLFdBQVc7TUFDWCx1QkFBdUIsRUFBQSxFQUU1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLXN0YXR1cy9zdGF0dXMtYXV0aC9zdGF0dXMtYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkbGluZSB7XHJcbiAgICBtYXJnaW46IDcwcHggMCA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdHVzLWF1dGgge1xyXG4gICAgd2lkdGg6IDU3MXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDQzcHggMTI4cHggNTdweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgICB3aWR0aDogMjkxcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDQzcHggMjNweCA1N3B4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/order-status/status-auth/status-auth.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/order-status/status-auth/status-auth.component.ts ***!
  \*************************************************************************/
/*! exports provided: StatusAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusAuthComponent", function() { return StatusAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusAuthComponent = /** @class */ (function () {
    function StatusAuthComponent() {
    }
    StatusAuthComponent.prototype.ngOnInit = function () {
    };
    StatusAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status-auth',
            template: __webpack_require__(/*! ./status-auth.component.html */ "./src/app/pages/order-status/status-auth/status-auth.component.html"),
            styles: [__webpack_require__(/*! ./status-auth.component.scss */ "./src/app/pages/order-status/status-auth/status-auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatusAuthComponent);
    return StatusAuthComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-status/status/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/order-status/status/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let product of products\" class=\"status-product__item\">\n    <img src=\".{{product.imgURL}}\" class=\"status-product__img\" alt=\"\">\n    <div class=\"status-product__name\">\n      {{product.name}}\n        <div class=\"status-product__code\">\n        {{product.id}}\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/order-status/status/product/product.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/order-status/status/product/product.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-product {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 21px;\n  margin-top: 65px; }\n  .status-product__quantity {\n    padding-bottom: 14px;\n    border-bottom: 1px solid #f0f2f7; }\n  .status-product__item {\n    display: flex;\n    align-items: center;\n    height: 100px;\n    border-bottom: 1px solid #f0f2f7; }\n  .status-product__img {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 99px;\n    width: 99px; }\n  .status-product__name {\n    font-size: 16px;\n    font-weight: 400;\n    margin-left: 20px; }\n  .status-product__code {\n    color: #a1a8bd;\n    font-size: 14px;\n    font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItc3RhdHVzL3N0YXR1cy9wcm9kdWN0L0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1YlxcMTIzL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXItc3RhdHVzXFxzdGF0dXNcXHByb2R1Y3RcXHByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQUVoQjtJQUNJLG9CQUFvQjtJQUNwQixnQ0FBZ0MsRUFBQTtFQUdwQztJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdDQUFnQyxFQUFBO0VBR3BDO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVcsRUFBQTtFQUdiO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQUdyQjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1zdGF0dXMvc3RhdHVzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMtcHJvZHVjdCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xyXG5cclxuICAgICZfX3F1YW50aXR5IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjJmNztcclxuICAgIH1cclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjJmNztcclxuICAgIH1cclxuXHJcbiAgICAmX19pbWcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiA5OXB4O1xyXG4gICAgICB3aWR0aDogOTlweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb2RlIHtcclxuICAgICAgICBjb2xvcjogI2ExYThiZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/order-status/status/product/product.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/order-status/status/product/product.component.ts ***!
  \************************************************************************/
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
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/order-status/status/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/order-status/status/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-status/status/status.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/order-status/status/status.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"headline\">\n        <h2>Проверить статус заказа</h2>\n    </div>\n    <div class=\"status\">\n        <div class=\"status-head\">\n          <div class=\"status__headline\">\n              Заказ ARU04889781\n              <div class=\"status__date\">\n                  Дата заказа: 7 февраля 2019\n              </div>\n          </div>\n          <a routerLink=\"/order-status\" class=\"status__exit\">Проверить другой заказ</a>\n        </div>\n        <div class=\"current-state\">\n            <div class=\"progress-bar\">\n                <div class=\"progress-bar__circle progress-bar__circle--current\">1</div>\n                <div class=\"progress-bar__line\"></div>\n                <div class=\"progress-bar__circle\">2</div>\n                <div class=\"progress-bar__line\"></div>\n                <div class=\"progress-bar__circle\">3</div>\n            </div>\n            <div class=\"status-name\">\n                <div class=\"status-name__confirm status-name__confirm--current\">Подтверждение</div>\n                <div class=\"status-name__ready\">Готовится к отправке</div>\n                <div class=\"status-name__sent\">Отправлен</div>\n            </div>\n        </div>\n        <div class=\"status-product\">\n            <div class=\"status-product__quantity\">\n                3 товара\n            </div>\n            <app-product></app-product>\n        </div>\n        <div class=\"status-adress\">\n            <div class=\"status__headline\">\n                Адрес доставки\n            </div>\n            Севастополь, Победы пр-кт, д. 2А\n            Россия\n        </div>\n        <div class=\"recipient\">\n            <div class=\"status__headline\">\n                Получатель\n            </div>\n            Иван Иванов\n            ivanov@gmail.com\n            +7 (978) 123-45-67\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/order-status/status/status.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/order-status/status/status.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headline {\n  margin: 70px 0 40px;\n  text-align: center; }\n\n.status {\n  width: 571px;\n  margin: 0 auto 120px;\n  padding: 38px 29px 58px 39px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  box-sizing: border-box; }\n\n.status__headline {\n    color: #142558;\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 21px;\n    margin-bottom: 10px; }\n\n.status__date {\n    color: #a1a8bd;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 21px;\n    margin-top: 10px; }\n\n.status__exit {\n    margin-left: auto;\n    color: #f54732;\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 21px; }\n\n@media (max-width: 575.98px) {\n    .status {\n      width: 100%; } }\n\n.status-head {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start; }\n\n@media (max-width: 575.98px) {\n    .status-head {\n      display: block; } }\n\n.current-state {\n  margin-top: 27px;\n  padding-top: 26px;\n  border-top: 2px solid #f0f2f7;\n  justify-content: space-between; }\n\n.progress-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.progress-bar__circle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    border-radius: 100%;\n    border: 2px solid #a1a8bd;\n    color: #a1a8bd;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 21px; }\n\n@media (max-width: 575.98px) {\n      .progress-bar__circle {\n        display: none; } }\n\n.progress-bar__circle--current {\n      border: 2px solid #142558;\n      background-color: #142558;\n      color: #ffffff; }\n\n@media (max-width: 575.98px) {\n        .progress-bar__circle--current {\n          display: flex; } }\n\n.progress-bar__line {\n    display: flex;\n    flex-grow: 1;\n    border: 1px solid #a1a8bd; }\n\n@media (max-width: 575.98px) {\n      .progress-bar__line {\n        display: none; } }\n\n.progress-bar__line--current {\n      border: 1px solid #142558; }\n\n.status-name {\n  display: flex; }\n\n.status-name__confirm, .status-name__ready, .status-name__sent {\n    width: 100%;\n    color: #888fa7;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 21px;\n    margin-top: 10px; }\n\n@media (max-width: 575.98px) {\n      .status-name__confirm, .status-name__ready, .status-name__sent {\n        display: none; } }\n\n.status-name__confirm--current, .status-name__ready--current, .status-name__sent--current {\n      color: #142558;\n      font-weight: 700; }\n\n@media (max-width: 575.98px) {\n        .status-name__confirm--current, .status-name__ready--current, .status-name__sent--current {\n          display: block; } }\n\n.status-name__ready {\n    text-align: center; }\n\n.status-name__sent {\n    text-align: right;\n    margin-right: 6px; }\n\n.status-product {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 21px;\n  margin-top: 65px; }\n\n.status-product__quantity {\n    padding-bottom: 14px;\n    border-bottom: 1px solid #f0f2f7; }\n\n.status-product__item {\n    display: flex;\n    align-items: center;\n    height: 100px;\n    border-bottom: 1px solid #f0f2f7; }\n\n.status-product__name {\n    font-size: 16px;\n    font-weight: 400;\n    margin-left: 20px; }\n\n.status-product__code {\n    color: #a1a8bd;\n    font-size: 14px;\n    font-weight: 400; }\n\n.status-adress {\n  width: 250px;\n  margin-top: 33px;\n  color: #788099;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 21px; }\n\n.recipient {\n  width: 140px;\n  margin-top: 42px;\n  color: #788099;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 21px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItc3RhdHVzL3N0YXR1cy9FOlxc0KDQsNCx0L7RgtGLXFxnaXRodWJcXDEyMy9zcmNcXGFwcFxccGFnZXNcXG9yZGVyLXN0YXR1c1xcc3RhdHVzXFxzdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0IsRUFBQTs7QUFFdEI7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7O0FBR3ZCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTs7QUFFckI7SUEvQko7TUFnQ1EsV0FBVyxFQUFBLEVBRWxCOztBQUVEO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFDdkI7SUFKSjtNQUtNLGNBQWMsRUFBQSxFQUVuQjs7QUFFRDtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQUNqQjtNQVpKO1FBYU0sYUFBYSxFQUFBLEVBV2xCOztBQVJHO01BQ0kseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUN6QixjQUFjLEVBQUE7O0FBQ2Q7UUFKSjtVQUtNLGFBQWEsRUFBQSxFQUVsQjs7QUFHTDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCLEVBQUE7O0FBQ3pCO01BSko7UUFLTSxhQUFhLEVBQUEsRUFNbEI7O0FBSEc7TUFDSSx5QkFBeUIsRUFBQTs7QUFLckM7RUFDSSxhQUFhLEVBQUE7O0FBRWI7SUFHSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQUNoQjtNQVRKO1FBVU0sYUFBYSxFQUFBLEVBVWxCOztBQVBHO01BQ0ksY0FBYztNQUNkLGdCQUFnQixFQUFBOztBQUNoQjtRQUhKO1VBSU0sY0FBYyxFQUFBLEVBRW5COztBQUdMO0lBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVoQjtJQUNJLG9CQUFvQjtJQUNwQixnQ0FBZ0MsRUFBQTs7QUFHcEM7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQ0FBZ0MsRUFBQTs7QUFHcEM7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBS3hCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXItc3RhdHVzL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGxpbmUge1xyXG4gICAgbWFyZ2luOiA3MHB4IDAgNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgICB3aWR0aDogNTcxcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMjBweDtcclxuICAgIHBhZGRpbmc6IDM4cHggMjlweCA1OHB4IDM5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAmX19oZWFkbGluZSB7XHJcbiAgICAgICAgY29sb3I6ICMxNDI1NTg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19kYXRlIHtcclxuICAgICAgICBjb2xvcjogI2ExYThiZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2V4aXQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIGNvbG9yOiAjZjU0NzMyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdGF0dXMtaGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXJyZW50LXN0YXRlIHtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjZweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjBmMmY3O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICZfX2NpcmNsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNhMWE4YmQ7XHJcbiAgICAgICAgY29sb3I6ICNhMWE4YmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi0tY3VycmVudCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxNDI1NTg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDI1NTg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMWE4YmQ7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi0tY3VycmVudCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNDI1NTg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3RhdHVzLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAmX19jb25maXJtLFxyXG4gICAgJl9fcmVhZHksXHJcbiAgICAmX19zZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogIzg4OGZhNztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLWN1cnJlbnQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE0MjU1ODtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcmVhZHkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX19zZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIH1cclxufVxyXG5cclxuLnN0YXR1cy1wcm9kdWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcblxyXG4gICAgJl9fcXVhbnRpdHkge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMmY3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMmY3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX25hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2NvZGUge1xyXG4gICAgICAgIGNvbG9yOiAjYTFhOGJkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnN0YXR1cy1hZHJlc3Mge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzNweDtcclxuICAgIGNvbG9yOiAjNzg4MDk5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59XHJcblxyXG4ucmVjaXBpZW50IHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDQycHg7XHJcbiAgICBjb2xvcjogIzc4ODA5OTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/order-status/status/status.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/order-status/status/status.component.ts ***!
  \***************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/pages/order-status/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.scss */ "./src/app/pages/order-status/status/status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/shopping-cart-products.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/products/shopping-cart-products.ts ***!
  \**********************************************************/
/*! exports provided: Products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
var Products = [
    { id: 1049556, name: 'Кресло Ханна', price: 9399, imgURL: '/assets/img/content/8.jpg' },
    { id: 1049557, name: 'Кресло Гоа', price: 9399, imgURL: '/assets/img/content/6.jpg' },
    { id: 1049558, name: 'Стул Бланес', price: 9399, imgURL: '/assets/img/content/13.jpg' }
];


/***/ })

}]);
//# sourceMappingURL=pages-order-status-order-status-module.js.map