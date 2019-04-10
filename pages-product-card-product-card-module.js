(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-card-product-card-module"],{

/***/ "./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtY2FyZC9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(route) {
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumbs.component.scss */ "./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-card/product-card-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/product-card/product-card-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductCardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardRoutingModule", function() { return ProductCardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-card.component */ "./src/app/pages/product-card/product-card.component.ts");




var routes = [
    { path: "", component: _product_card_component__WEBPACK_IMPORTED_MODULE_3__["ProductCardComponent"] }
];
var ProductCardRoutingModule = /** @class */ (function () {
    function ProductCardRoutingModule() {
    }
    ProductCardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductCardRoutingModule);
    return ProductCardRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/product-card/product-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-card/product-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>\n<div class=\"container\">\n  <div class=\"product-card\">\n    <div class=\"product-card__img-collapse\">\n      <div class=\"img-collapse\">\n        <div class=\"img-collapse__side\">\n          <button (click)=\"select()\" class=\"img-collapse__button\">\n            <img src=\"{{product.imgURL}}\" class=\"img-collapse__min-img\" alt=\"\">\n          </button>\n          <button (click)=\"select2()\" class=\"img-collapse__button\">\n            <img src=\"{{product.imgURL2}}\" class=\"img-collapse__min-img\" alt=\"\">\n          </button>\n          <button (click)=\"select3()\" class=\"img-collapse__button\">\n            <img src=\"{{product.imgURL3}}\" class=\"img-collapse__min-img\" alt=\"\">\n          </button>\n          <button (click)=\"select4()\" class=\"img-collapse__button\">\n            <img src=\"{{product.imgURL4}}\" class=\"img-collapse__min-img\" alt=\"\">\n          </button>\n        </div>\n        <div class=\"img-collapse__select-img\">\n          <img src=\"{{selectImg}}\" class=\"img-collapse__img\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"card-info\">\n      <div class=\"card-info__name\"> {{product.name}}</div>\n      <div class=\"card-info__code\"> Код товара {{product.id}} </div>\n      <div class=\"card-info__availability\">\n        <div class=\"card-info__indicator\"></div> В\n        наличии\n      </div>\n      <div class=\"info-purchase\">\n        <div class=\"info-purchase__price\">\n          {{product.price | currency:' ':'':'0.0-0'}} ₽ </div>\n        <button type=\"button\" name=\"button\" class=\"btn\" (click)=\"addCart(product)\">Купить</button>\n      </div>\n    </div>\n    <div class=\"card-description\">\n      <h3>Описание</h3>\n      {{product.description}}\n      <h3>{{product.additionalDescriptionHeadline}}</h3>\n      {{product.additionalDescription}}\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product-card/product-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-card/product-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 30px 100px 92px 0;\n  margin: 68px 0 118px;\n  background-color: white; }\n  .product-card__img-collapse {\n    width: calc((100% + 30px) / 12 * 7 - 30px);\n    box-sizing: border-box; }\n  .product-card .card-info {\n    margin-top: 55px; }\n  .product-card .card-info__name {\n      font-size: 36px;\n      font-weight: 700; }\n  .product-card .card-info__code {\n      color: #a1a8bd;\n      font-size: 16px;\n      font-weight: 400;\n      margin: 11px 0; }\n  .product-card .card-info__availability {\n      display: flex;\n      align-items: center; }\n  .product-card .card-info__indicator {\n      width: 8px;\n      height: 8px;\n      border-radius: 100%;\n      background-color: #44b759;\n      margin-right: 5px; }\n  .product-card .card-info .info-purchase {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: baseline;\n      justify-content: space-between;\n      width: 370px;\n      height: 230px;\n      border-radius: 10px;\n      background-color: #f5f8fa;\n      margin: 35px 0;\n      padding: 38px 30px;\n      box-sizing: border-box; }\n  .product-card .card-info .info-purchase__price {\n        font-size: 30px;\n        font-weight: 700;\n        line-height: 21px; }\n  .product-card .card-description {\n    margin-top: -40px;\n    margin-left: calc((100% + 30px) / 12 * 2);\n    width: calc((100% + 30px) / 12 * 9 - 30px);\n    color: #828aa2;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 24px; }\n  .img-collapse {\n  display: flex; }\n  .img-collapse__side {\n    margin: 30px 83px 0 51px;\n    width: 65px; }\n  .img-collapse__button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 65px;\n    height: 65px;\n    border-radius: 5px;\n    border: 2px solid white;\n    margin: 5px 0; }\n  .img-collapse__button:active {\n      border-radius: 5px;\n      border: 2px solid #e3e8f0; }\n  .img-collapse__button:focus {\n      border-radius: 5px;\n      border: 2px solid #e3e8f0; }\n  .img-collapse__min-img {\n    width: 61px;\n    height: 61px; }\n  .img-collapse__select-img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 473px; }\n  .img-collapse__select-img img {\n      max-width: 100%; }\n  .img-collapse__img {\n    height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LWNhcmRcXHByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsdUJBQXVCLEVBQUE7RUFFdkI7SUFDRSwwQ0FBMEM7SUFDMUMsc0JBQXNCLEVBQUE7RUFWNUI7SUFjUSxnQkFBZ0IsRUFBQTtFQWR4QjtNQWlCWSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFsQjVCO01Bc0JZLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWMsRUFBQTtFQXpCMUI7TUE2QlksYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBOUIvQjtNQWtDWSxVQUFVO01BQ1YsV0FBVztNQUNYLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsaUJBQWlCLEVBQUE7RUF0QzdCO01BMENZLGFBQWE7TUFDYixlQUFlO01BQ2YscUJBQXFCO01BQ3JCLDhCQUE4QjtNQUM5QixZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixzQkFBc0IsRUFBQTtFQXBEbEM7UUF1RGdCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCLEVBQUE7RUF6RGpDO0lBK0RRLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBSXpCO0VBQ0UsYUFBYSxFQUFBO0VBRWI7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVyxFQUFBO0VBR2I7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsYUFBYSxFQUFBO0VBUmQ7TUFXRyxrQkFBa0I7TUFDbEIseUJBQXlCLEVBQUE7RUFaNUI7TUFnQkcsa0JBQWtCO01BQ2xCLHlCQUF5QixFQUFBO0VBSTdCO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWEsRUFBQTtFQUxkO01BT0csZUFBZSxFQUFBO0VBSW5CO0lBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTAwcHggOTJweCAwO1xyXG4gICAgbWFyZ2luOiA2OHB4IDAgMTE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmX19pbWctY29sbGFwc2Uge1xyXG4gICAgICB3aWR0aDogY2FsYygoMTAwJSArIDMwcHgpIC8gMTIgKiA3IC0gMzBweCk7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTVweDtcclxuXHJcbiAgICAgICAgJl9fbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2NvZGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ExYThiZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDExcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2F2YWlsYWJpbGl0eSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0Yjc1OTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mby1wdXJjaGFzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzNXB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDM4cHggMzBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgICZfX3ByaWNlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoKDEwMCUgKyAzMHB4KSAvIDEyICogMik7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgKyAzMHB4KSAvIDEyICogOSAtIDMwcHgpO1xyXG4gICAgICAgIGNvbG9yOiAjODI4YWEyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1nLWNvbGxhcHNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmX19zaWRlIHtcclxuICAgIG1hcmdpbjogMzBweCA4M3B4IDAgNTFweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2UzZThmMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNlOGYwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbWluLWltZyB7XHJcbiAgICB3aWR0aDogNjFweDtcclxuICAgIGhlaWdodDogNjFweDtcclxuICB9XHJcblxyXG4gICZfX3NlbGVjdC1pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NzNweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product-card/product-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-card/product-card.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");




var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(route, _cartService) {
        var _this = this;
        this.route = route;
        this._cartService = _cartService;
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.querySubscription = route.queryParams.subscribe(function (queryParam) {
            _this.product = queryParam;
            _this.selectImg = _this.product.imgURL;
        });
    }
    ProductCardComponent.prototype.select = function () {
        this.selectImg = this.product.imgURL;
    };
    ProductCardComponent.prototype.select2 = function () {
        this.selectImg = this.product.imgURL2;
    };
    ProductCardComponent.prototype.select3 = function () {
        this.selectImg = this.product.imgURL3;
    };
    ProductCardComponent.prototype.select4 = function () {
        this.selectImg = this.product.imgURL4;
    };
    ProductCardComponent.prototype.addCart = function (product) {
        this._cartService.add(product);
    };
    ProductCardComponent.prototype.ngOnInit = function () { };
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/pages/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.scss */ "./src/app/pages/product-card/product-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-card/product-card.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-card/product-card.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardModule", function() { return ProductCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_card_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-card-routing.module */ "./src/app/pages/product-card/product-card-routing.module.ts");
/* harmony import */ var _product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-card.component */ "./src/app/pages/product-card/product-card.component.ts");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.ts");






var ProductCardModule = /** @class */ (function () {
    function ProductCardModule() {
    }
    ProductCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _product_card_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductCardRoutingModule"],
            ]
        })
    ], ProductCardModule);
    return ProductCardModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-card-product-card-module.js.map