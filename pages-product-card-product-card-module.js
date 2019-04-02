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

module.exports = ".img-collapse {\n  display: flex; }\n  .img-collapse__side {\n    margin: 30px 83px 0 51px;\n    width: 65px; }\n  .img-collapse__button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 65px;\n    height: 65px;\n    border-radius: 5px;\n    border: 2px solid white;\n    margin: 5px 0; }\n  .img-collapse__button:active {\n      border-radius: 5px;\n      border: 2px solid #e3e8f0; }\n  .img-collapse__button:focus {\n      border-radius: 5px;\n      border: 2px solid #e3e8f0; }\n  .img-collapse__min-img {\n    width: 61px;\n    height: 61px; }\n  .img-collapse__select-img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 473px; }\n  .img-collapse__img {\n    height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL2ltZy1jb2xsYXBzZS9FOlxc0KDQsNCx0L7RgtGLXFxnaXRodWJcXDEyMy9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3QtY2FyZFxcaW1nLWNvbGxhcHNlXFxpbWctY29sbGFwc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUE7RUFFYjtJQUNFLHdCQUF3QjtJQUN4QixXQUFXLEVBQUE7RUFHYjtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhLEVBQUE7RUFSZDtNQVdHLGtCQUFrQjtNQUNsQix5QkFBeUIsRUFBQTtFQVo1QjtNQWdCRyxrQkFBa0I7TUFDbEIseUJBQXlCLEVBQUE7RUFJN0I7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBR2Y7SUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWNhcmQvaW1nLWNvbGxhcHNlL2ltZy1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29sbGFwc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICZfX3NpZGUge1xyXG4gICAgbWFyZ2luOiAzMHB4IDgzcHggMCA1MXB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNlOGYwO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlM2U4ZjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19taW4taW1nIHtcclxuICAgIHdpZHRoOiA2MXB4O1xyXG4gICAgaGVpZ2h0OiA2MXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fc2VsZWN0LWltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ3M3B4O1xyXG4gIH1cclxuXHJcbiAgJl9faW1nIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"

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

module.exports = "<div class=\"container\">\n  <div class=\"product-card\">\n    <div class=\"product-card__img-collapse\">\n      <app-img-collapse></app-img-collapse>\n    </div>\n    <div class=\"card-info\">\n      <div class=\"card-info__name\"> Кресло\n        Ханна </div>\n      <div class=\"card-info__code\"> Код товара 1049556 </div>\n      <div class=\"card-info__availability\">\n        <div class=\"card-info__indicator\"></div> В\n        наличии\n      </div>\n      <div class=\"info-purchase\">\n        <div class=\"info-purchase__price\">\n          9 399 ₽ </div>\n        <button type=\"button\" name=\"button\" class=\"btn\">Купить</button>\n      </div>\n    </div>\n    <div class=\"card-description\">\n      <h3>Описание</h3>\n      Кресло Ханна — элегантное решение для кухни или столовой,\n      выдержанной в современном стиле. Каркас модели выполнен из\n      массива древесины, видимые элементы отделаны березовым шпоном и\n      покрыты белой эмалью. Велюровая обивка приятна на ощупь, долго\n      сохраняет опрятный вид и первоначальный цвет. Мягкое сиденье\n      обеспечивает комфорт во время длительной трапезы или дружеской\n      беседы за столом. Высокая спинка с легким изгибом позволяет\n      принять удобное положение, расслабив спину. <h3>Материал обивки\n        — ткань</h3> Удовольствие от трапезы за кухонным столом во\n      многом зависит от качества кухонных стульев. При выборе важно\n      все, в том числе материал обивки. Кухонные стулья с тканевой\n      обивкой сиденья и спинки практичны, комфортны и гигиеничны:\n      текстиль приятен на ощупь, не способствует образованию\n      конденсата при соприкосновении с телом, стоек к механическим\n      повреждениям, долго сохраняет первоначальный вид.\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product-card/product-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-card/product-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 30px 100px 92px 0;\n  margin: 69px 0 118px;\n  background-color: white; }\n  .product-card__img-collapse {\n    width: calc((100% + 30px) / 12 * 7 - 30px);\n    box-sizing: border-box; }\n  .product-card .card-info {\n    margin-top: 55px; }\n  .product-card .card-info__name {\n      font-size: 36px;\n      font-weight: 700; }\n  .product-card .card-info__code {\n      color: #a1a8bd;\n      font-size: 16px;\n      font-weight: 400;\n      margin: 11px 0; }\n  .product-card .card-info__availability {\n      display: flex;\n      align-items: center; }\n  .product-card .card-info__indicator {\n      width: 8px;\n      height: 8px;\n      border-radius: 100%;\n      background-color: #44b759;\n      margin-right: 5px; }\n  .product-card .card-info .info-purchase {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: baseline;\n      justify-content: space-between;\n      width: 370px;\n      height: 230px;\n      border-radius: 10px;\n      background-color: #f5f8fa;\n      margin: 35px 0;\n      padding: 38px 30px;\n      box-sizing: border-box; }\n  .product-card .card-info .info-purchase__price {\n        font-size: 30px;\n        font-weight: 700;\n        line-height: 21px; }\n  .product-card .card-description {\n    margin-top: -40px;\n    margin-left: calc((100% + 30px) / 12 * 2);\n    width: calc((100% + 30px) / 12 * 9 - 30px);\n    color: #828aa2;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1YlxcMTIzL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdC1jYXJkXFxwcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLHVCQUF1QixFQUFBO0VBRXZCO0lBQ0UsMENBQTBDO0lBQzFDLHNCQUFzQixFQUFBO0VBVjVCO0lBY1EsZ0JBQWdCLEVBQUE7RUFkeEI7TUFpQlksZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBbEI1QjtNQXNCWSxjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjLEVBQUE7RUF6QjFCO01BNkJZLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtFQTlCL0I7TUFrQ1ksVUFBVTtNQUNWLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLGlCQUFpQixFQUFBO0VBdEM3QjtNQTBDWSxhQUFhO01BQ2IsZUFBZTtNQUNmLHFCQUFxQjtNQUNyQiw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsc0JBQXNCLEVBQUE7RUFwRGxDO1FBdURnQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQixFQUFBO0VBekRqQztJQStEUSxpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwMHB4IDkycHggMDtcclxuICAgIG1hcmdpbjogNjlweCAwIDExOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgJl9faW1nLWNvbGxhcHNlIHtcclxuICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgKyAzMHB4KSAvIDEyICogNyAtIDMwcHgpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcblxyXG4gICAgICAgICZfX25hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19jb2RlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhMWE4YmQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMXB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19hdmFpbGFiaWxpdHkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGI3NTk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm8tcHVyY2hhc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB3aWR0aDogMzcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzVweCAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzOHB4IDMwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICAmX19wcmljZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCgxMDAlICsgMzBweCkgLyAxMiAqIDIpO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlICsgMzBweCkgLyAxMiAqIDkgLSAzMHB4KTtcclxuICAgICAgICBjb2xvcjogIzgyOGFhMjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

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


var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/pages/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.scss */ "./src/app/pages/product-card/product-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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