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

module.exports = ".headline {\n  margin: 70px 0 40px;\n  text-align: center; }\n\n.status-auth {\n  width: 571px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  padding: 43px 128px 57px;\n  box-sizing: border-box;\n  margin: 0 auto; }\n\n.status-auth__text {\n    width: 291px;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 21px; }\n\n@media (max-width: 575.98px) {\n    .status-auth {\n      width: 100%;\n      padding: 43px 23px 57px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItc3RhdHVzL3N0YXR1cy1hdXRoL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxvcmRlci1zdGF0dXNcXHN0YXR1cy1hdXRoXFxzdGF0dXMtYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFZDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQUVyQjtJQWRKO01BZU0sV0FBVztNQUNYLHVCQUF1QixFQUFBLEVBRTVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXItc3RhdHVzL3N0YXR1cy1hdXRoL3N0YXR1cy1hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRsaW5lIHtcclxuICAgIG1hcmdpbjogNzBweCAwIDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0dXMtYXV0aCB7XHJcbiAgICB3aWR0aDogNTcxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogNDNweCAxMjhweCA1N3B4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICAgIHdpZHRoOiAyOTFweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogNDNweCAyM3B4IDU3cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

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

module.exports = ".status-product {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 21px;\n  margin-top: 65px; }\n  .status-product__quantity {\n    padding-bottom: 14px;\n    border-bottom: 1px solid #f0f2f7; }\n  .status-product__item {\n    display: flex;\n    align-items: center;\n    height: 100px;\n    border-bottom: 1px solid #f0f2f7; }\n  .status-product__img {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 99px;\n    width: 99px; }\n  .status-product__name {\n    font-size: 16px;\n    font-weight: 400;\n    margin-left: 20px; }\n  .status-product__code {\n    color: #a1a8bd;\n    font-size: 14px;\n    font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItc3RhdHVzL3N0YXR1cy9wcm9kdWN0L0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxvcmRlci1zdGF0dXNcXHN0YXR1c1xccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBRWhCO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQyxFQUFBO0VBR3BDO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0NBQWdDLEVBQUE7RUFHcEM7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVyxFQUFBO0VBR2I7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLXN0YXR1cy9zdGF0dXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1wcm9kdWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcblxyXG4gICAgJl9fcXVhbnRpdHkge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMmY3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMmY3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDk5cHg7XHJcbiAgICAgIHdpZHRoOiA5OXB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX25hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2NvZGUge1xyXG4gICAgICAgIGNvbG9yOiAjYTFhOGJkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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

module.exports = ".headline {\n  margin: 70px 0 40px;\n  text-align: center; }\n\n.status {\n  width: 571px;\n  margin: 0 auto 120px;\n  padding: 38px 29px 58px 39px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  box-sizing: border-box; }\n\n.status__headline {\n    color: #142558;\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 21px;\n    margin-bottom: 10px; }\n\n.status__date {\n    color: #a1a8bd;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 21px;\n    margin-top: 10px; }\n\n.status__exit {\n    margin-left: auto;\n    color: #f54732;\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 21px; }\n\n@media (max-width: 575.98px) {\n    .status {\n      width: 100%; } }\n\n.status-head {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start; }\n\n@media (max-width: 575.98px) {\n    .status-head {\n      display: block; } }\n\n.current-state {\n  margin-top: 27px;\n  padding-top: 26px;\n  border-top: 2px solid #f0f2f7;\n  justify-content: space-between; }\n\n.progress-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.progress-bar__circle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    border-radius: 100%;\n    border: 2px solid #a1a8bd;\n    color: #a1a8bd;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 21px; }\n\n@media (max-width: 575.98px) {\n      .progress-bar__circle {\n        display: none; } }\n\n.progress-bar__circle--current {\n      border: 2px solid #142558;\n      background-color: #142558;\n      color: #ffffff; }\n\n@media (max-width: 575.98px) {\n        .progress-bar__circle--current {\n          display: flex; } }\n\n.progress-bar__line {\n    display: flex;\n    flex-grow: 1;\n    border: 1px solid #a1a8bd; }\n\n@media (max-width: 575.98px) {\n      .progress-bar__line {\n        display: none; } }\n\n.progress-bar__line--current {\n      border: 1px solid #142558; }\n\n.status-name {\n  display: flex; }\n\n.status-name__confirm, .status-name__ready, .status-name__sent {\n    width: 100%;\n    color: #888fa7;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 21px;\n    margin-top: 10px; }\n\n@media (max-width: 575.98px) {\n      .status-name__confirm, .status-name__ready, .status-name__sent {\n        display: none; } }\n\n.status-name__confirm--current, .status-name__ready--current, .status-name__sent--current {\n      color: #142558;\n      font-weight: 700; }\n\n@media (max-width: 575.98px) {\n        .status-name__confirm--current, .status-name__ready--current, .status-name__sent--current {\n          display: block; } }\n\n.status-name__ready {\n    text-align: center; }\n\n.status-name__sent {\n    text-align: right;\n    margin-right: 6px; }\n\n.status-product {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 21px;\n  margin-top: 65px; }\n\n.status-product__quantity {\n    padding-bottom: 14px;\n    border-bottom: 1px solid #f0f2f7; }\n\n.status-product__item {\n    display: flex;\n    align-items: center;\n    height: 100px;\n    border-bottom: 1px solid #f0f2f7; }\n\n.status-product__name {\n    font-size: 16px;\n    font-weight: 400;\n    margin-left: 20px; }\n\n.status-product__code {\n    color: #a1a8bd;\n    font-size: 14px;\n    font-weight: 400; }\n\n.status-adress {\n  width: 250px;\n  margin-top: 33px;\n  color: #788099;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 21px; }\n\n.recipient {\n  width: 140px;\n  margin-top: 42px;\n  color: #788099;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 21px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItc3RhdHVzL3N0YXR1cy9FOlxc0KDQsNCx0L7RgtGLXFxnaXRodWJcXHN0b3JlL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXItc3RhdHVzXFxzdGF0dXNcXHN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQixFQUFBOztBQUV0QjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQUVyQjtJQS9CSjtNQWdDUSxXQUFXLEVBQUEsRUFFbEI7O0FBRUQ7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUN2QjtJQUpKO01BS00sY0FBYyxFQUFBLEVBRW5COztBQUVEO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7O0FBQ2pCO01BWko7UUFhTSxhQUFhLEVBQUEsRUFXbEI7O0FBUkc7TUFDSSx5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLGNBQWMsRUFBQTs7QUFDZDtRQUpKO1VBS00sYUFBYSxFQUFBLEVBRWxCOztBQUdMO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUIsRUFBQTs7QUFDekI7TUFKSjtRQUtNLGFBQWEsRUFBQSxFQU1sQjs7QUFIRztNQUNJLHlCQUF5QixFQUFBOztBQUtyQztFQUNJLGFBQWEsRUFBQTs7QUFFYjtJQUdJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7O0FBQ2hCO01BVEo7UUFVTSxhQUFhLEVBQUEsRUFVbEI7O0FBUEc7TUFDSSxjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7O0FBQ2hCO1FBSEo7VUFJTSxjQUFjLEVBQUEsRUFFbkI7O0FBR0w7SUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBSXpCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRWhCO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQyxFQUFBOztBQUdwQztJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdDQUFnQyxFQUFBOztBQUdwQztJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFLeEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1zdGF0dXMvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkbGluZSB7XHJcbiAgICBtYXJnaW46IDcwcHggMCA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICAgIHdpZHRoOiA1NzFweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEyMHB4O1xyXG4gICAgcGFkZGluZzogMzhweCAyOXB4IDU4cHggMzlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICZfX2hlYWRsaW5lIHtcclxuICAgICAgICBjb2xvcjogIzE0MjU1ODtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2RhdGUge1xyXG4gICAgICAgIGNvbG9yOiAjYTFhOGJkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZXhpdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgY29sb3I6ICNmNTQ3MzI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnN0YXR1cy1oZWFkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLmN1cnJlbnQtc3RhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNnB4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmMGYyZjc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgJl9fY2lyY2xlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ExYThiZDtcclxuICAgICAgICBjb2xvcjogI2ExYThiZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLS1jdXJyZW50IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzE0MjU1ODtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjU1ODtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ExYThiZDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLS1jdXJyZW50IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE0MjU1ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdGF0dXMtbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICZfX2NvbmZpcm0sXHJcbiAgICAmX19yZWFkeSxcclxuICAgICZfX3NlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjODg4ZmE3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi0tY3VycmVudCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTQyNTU4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19yZWFkeSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3NlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3RhdHVzLXByb2R1Y3Qge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjVweDtcclxuXHJcbiAgICAmX19xdWFudGl0eSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYyZjc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYyZjc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29kZSB7XHJcbiAgICAgICAgY29sb3I6ICNhMWE4YmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uc3RhdHVzLWFkcmVzcyB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzM3B4O1xyXG4gICAgY29sb3I6ICM3ODgwOTk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbn1cclxuXHJcbi5yZWNpcGllbnQge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDJweDtcclxuICAgIGNvbG9yOiAjNzg4MDk5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59XHJcbiJdfQ== */"

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



/***/ })

}]);
//# sourceMappingURL=pages-order-status-order-status-module.js.map