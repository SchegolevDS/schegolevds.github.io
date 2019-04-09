(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-card-product-card-module"],{

/***/ "./src/app/pages/product-card/img-collapse/img-collapse.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/product-card/img-collapse/img-collapse.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img-collapse\">\n  <div class=\"img-collapse__side\">\n    <button (click)=\"select()\" class=\"img-collapse__button\">\n      <img src=\"{{productImg[0]}}\" class=\"img-collapse__min-img\" alt=\"\">\n    </button>\n    <button (click)=\"select1()\" class=\"img-collapse__button\">\n      <img src=\"{{productImg[1]}}\" class=\"img-collapse__min-img\" alt=\"\">\n    </button>\n    <button (click)=\"select2()\" class=\"img-collapse__button\">\n      <img src=\"{{productImg[2]}}\" class=\"img-collapse__min-img\" alt=\"\">\n    </button>\n    <button (click)=\"select3()\" class=\"img-collapse__button\">\n      <img src=\"{{productImg[3]}}\" class=\"img-collapse__min-img\" alt=\"\">\n    </button>\n  </div>\n  <div class=\"img-collapse__select-img\">\n    <img src=\"{{selectImg}}\" class=\"img-collapse__img\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product-card/img-collapse/img-collapse.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/product-card/img-collapse/img-collapse.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-collapse {\n  display: flex; }\n  .img-collapse__side {\n    margin: 30px 83px 0 51px;\n    width: 65px; }\n  .img-collapse__button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 65px;\n    height: 65px;\n    border-radius: 5px;\n    border: 2px solid white;\n    margin: 5px 0; }\n  .img-collapse__button:active {\n      border-radius: 5px;\n      border: 2px solid #e3e8f0; }\n  .img-collapse__button:focus {\n      border-radius: 5px;\n      border: 2px solid #e3e8f0; }\n  .img-collapse__min-img {\n    width: 61px;\n    height: 61px; }\n  .img-collapse__select-img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 473px; }\n  .img-collapse__img {\n    height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL2ltZy1jb2xsYXBzZS9FOlxc0KDQsNCx0L7RgtGLXFxnaXRodWJcXHN0b3JlL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdC1jYXJkXFxpbWctY29sbGFwc2VcXGltZy1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQTtFQUViO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVcsRUFBQTtFQUdiO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWEsRUFBQTtFQVJkO01BV0csa0JBQWtCO01BQ2xCLHlCQUF5QixFQUFBO0VBWjVCO01BZ0JHLGtCQUFrQjtNQUNsQix5QkFBeUIsRUFBQTtFQUk3QjtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFHZDtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhLEVBQUE7RUFHZjtJQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtY2FyZC9pbWctY29sbGFwc2UvaW1nLWNvbGxhcHNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1jb2xsYXBzZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgJl9fc2lkZSB7XHJcbiAgICBtYXJnaW46IDMwcHggODNweCAwIDUxcHg7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlM2U4ZjA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2UzZThmMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX21pbi1pbWcge1xyXG4gICAgd2lkdGg6IDYxcHg7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgfVxyXG5cclxuICAmX19zZWxlY3QtaW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDczcHg7XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/product-card/img-collapse/img-collapse.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-card/img-collapse/img-collapse.component.ts ***!
  \***************************************************************************/
/*! exports provided: ImgCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgCollapseComponent", function() { return ImgCollapseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImgCollapseComponent = /** @class */ (function () {
    function ImgCollapseComponent() {
        this.productImg = ['/assets/img/content/01.jpg', '/assets/img/content/2.jpg',
            '/assets/img/content/3.jpg', '/assets/img/content/4.jpg',];
        this.selectImg = this.productImg[0];
    }
    ImgCollapseComponent.prototype.select = function () {
        this.selectImg = this.productImg[0];
    };
    ImgCollapseComponent.prototype.select1 = function () {
        this.selectImg = this.productImg[1];
    };
    ImgCollapseComponent.prototype.select2 = function () {
        this.selectImg = this.productImg[2];
    };
    ImgCollapseComponent.prototype.select3 = function () {
        this.selectImg = this.productImg[3];
    };
    ImgCollapseComponent.prototype.ngOnInit = function () {
    };
    ImgCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-img-collapse',
            template: __webpack_require__(/*! ./img-collapse.component.html */ "./src/app/pages/product-card/img-collapse/img-collapse.component.html"),
            styles: [__webpack_require__(/*! ./img-collapse.component.scss */ "./src/app/pages/product-card/img-collapse/img-collapse.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImgCollapseComponent);
    return ImgCollapseComponent;
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

module.exports = "<div class=\"container\">\n  <div class=\"product-card\">\n    <div class=\"product-card__img-collapse\">\n      <app-img-collapse></app-img-collapse>\n    </div>\n    <div class=\"card-info\">\n      <div class=\"card-info__name\"> {{name}}</div>\n      <div class=\"card-info__code\"> Код товара {{id}} </div>\n      <div class=\"card-info__availability\">\n        <div class=\"card-info__indicator\"></div> В\n        наличии\n      </div>\n      <div class=\"info-purchase\">\n        <div class=\"info-purchase__price\">\n          {{price | currency:' ':'':'0.0-0'}} ₽ </div>\n        <button type=\"button\" name=\"button\" class=\"btn\">Купить</button>\n      </div>\n    </div>\n    <div class=\"card-description\">\n      <h3>Описание</h3>\n      Кресло Ханна — элегантное решение для кухни или столовой,\n      выдержанной в современном стиле. Каркас модели выполнен из\n      массива древесины, видимые элементы отделаны березовым шпоном и\n      покрыты белой эмалью. Велюровая обивка приятна на ощупь, долго\n      сохраняет опрятный вид и первоначальный цвет. Мягкое сиденье\n      обеспечивает комфорт во время длительной трапезы или дружеской\n      беседы за столом. Высокая спинка с легким изгибом позволяет\n      принять удобное положение, расслабив спину. <h3>Материал обивки\n        — ткань</h3> Удовольствие от трапезы за кухонным столом во\n      многом зависит от качества кухонных стульев. При выборе важно\n      все, в том числе материал обивки. Кухонные стулья с тканевой\n      обивкой сиденья и спинки практичны, комфортны и гигиеничны:\n      текстиль приятен на ощупь, не способствует образованию\n      конденсата при соприкосновении с телом, стоек к механическим\n      повреждениям, долго сохраняет первоначальный вид.\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product-card/product-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-card/product-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 30px 100px 92px 0;\n  margin: 69px 0 118px;\n  background-color: white; }\n  .product-card__img-collapse {\n    width: calc((100% + 30px) / 12 * 7 - 30px);\n    box-sizing: border-box; }\n  .product-card .card-info {\n    margin-top: 55px; }\n  .product-card .card-info__name {\n      font-size: 36px;\n      font-weight: 700; }\n  .product-card .card-info__code {\n      color: #a1a8bd;\n      font-size: 16px;\n      font-weight: 400;\n      margin: 11px 0; }\n  .product-card .card-info__availability {\n      display: flex;\n      align-items: center; }\n  .product-card .card-info__indicator {\n      width: 8px;\n      height: 8px;\n      border-radius: 100%;\n      background-color: #44b759;\n      margin-right: 5px; }\n  .product-card .card-info .info-purchase {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: baseline;\n      justify-content: space-between;\n      width: 370px;\n      height: 230px;\n      border-radius: 10px;\n      background-color: #f5f8fa;\n      margin: 35px 0;\n      padding: 38px 30px;\n      box-sizing: border-box; }\n  .product-card .card-info .info-purchase__price {\n        font-size: 30px;\n        font-weight: 700;\n        line-height: 21px; }\n  .product-card .card-description {\n    margin-top: -40px;\n    margin-left: calc((100% + 30px) / 12 * 2);\n    width: calc((100% + 30px) / 12 * 9 - 30px);\n    color: #828aa2;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LWNhcmRcXHByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsdUJBQXVCLEVBQUE7RUFFdkI7SUFDRSwwQ0FBMEM7SUFDMUMsc0JBQXNCLEVBQUE7RUFWNUI7SUFjUSxnQkFBZ0IsRUFBQTtFQWR4QjtNQWlCWSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFsQjVCO01Bc0JZLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWMsRUFBQTtFQXpCMUI7TUE2QlksYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBOUIvQjtNQWtDWSxVQUFVO01BQ1YsV0FBVztNQUNYLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsaUJBQWlCLEVBQUE7RUF0QzdCO01BMENZLGFBQWE7TUFDYixlQUFlO01BQ2YscUJBQXFCO01BQ3JCLDhCQUE4QjtNQUM5QixZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixzQkFBc0IsRUFBQTtFQXBEbEM7UUF1RGdCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCLEVBQUE7RUF6RGpDO0lBK0RRLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTAwcHggOTJweCAwO1xyXG4gICAgbWFyZ2luOiA2OXB4IDAgMTE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmX19pbWctY29sbGFwc2Uge1xyXG4gICAgICB3aWR0aDogY2FsYygoMTAwJSArIDMwcHgpIC8gMTIgKiA3IC0gMzBweCk7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTVweDtcclxuXHJcbiAgICAgICAgJl9fbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2NvZGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ExYThiZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDExcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2F2YWlsYWJpbGl0eSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0Yjc1OTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mby1wdXJjaGFzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzNXB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDM4cHggMzBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgICZfX3ByaWNlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoKDEwMCUgKyAzMHB4KSAvIDEyICogMik7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgKyAzMHB4KSAvIDEyICogOSAtIDMwcHgpO1xyXG4gICAgICAgIGNvbG9yOiAjODI4YWEyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(route) {
        var _this = this;
        this.route = route;
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.querySubscription = route.queryParams.subscribe(function (queryParam) {
            _this.name = queryParam['name'];
            _this.price = queryParam['price'];
            _this.img = queryParam['img'];
            _this.img2 = queryParam['img2'];
            _this.img3 = queryParam['img3'];
            _this.img4 = queryParam['img4'];
            _this.img5 = queryParam['img5'];
            _this.img6 = queryParam['img6'];
        });
    }
    ProductCardComponent.prototype.ngOnInit = function () { };
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/pages/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.scss */ "./src/app/pages/product-card/product-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var _img_collapse_img_collapse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img-collapse/img-collapse.component */ "./src/app/pages/product-card/img-collapse/img-collapse.component.ts");






var ProductCardModule = /** @class */ (function () {
    function ProductCardModule() {
    }
    ProductCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"], _img_collapse_img_collapse_component__WEBPACK_IMPORTED_MODULE_5__["ImgCollapseComponent"],],
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