(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-card-product-card-module"],{

/***/ "./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n  <a routerLink = \"/\">Главная</a>\r\n  <svg\r\n         xmlns=\"http://www.w3.org/2000/svg\"\r\n         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         width=\"6px\" height=\"8px\">\r\n        <path fill-rule=\"evenodd\"  fill=\"rgb(130, 138, 162)\"\r\n         d=\"M5.807,3.930 L2.537,0.504 L2.052,-0.004 L1.446,0.504 L0.719,1.392 L3.142,3.930 L0.719,6.596 L1.446,7.358 L2.052,7.992 L2.537,7.358 L5.807,3.930 Z\"/>\r\n  </svg>\r\n\r\n  <a routerLink = \"/{{category}}\" [ngSwitch]=\"category\">\r\n    <ng-template ngSwitchCase=\"chairs\">\r\n      Стулья и Кресла\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"beds\">\r\n      Кровати и матрасы\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"cabinets\">\r\n      Шкафы и комоды\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"kitchen\">\r\n      Мебель для кухни\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"home\">\r\n      Товары для дома\r\n    </ng-template>\r\n  </a>\r\n\r\n  <svg\r\n         xmlns=\"http://www.w3.org/2000/svg\"\r\n         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         width=\"6px\" height=\"8px\">\r\n        <path fill-rule=\"evenodd\"  fill=\"rgb(130, 138, 162)\"\r\n         d=\"M5.807,3.930 L2.537,0.504 L2.052,-0.004 L1.446,0.504 L0.719,1.392 L3.142,3.930 L0.719,6.596 L1.446,7.358 L2.052,7.992 L2.537,7.358 L5.807,3.930 Z\"/>\r\n  </svg>\r\n  <a routerLink = \"/product/{{id}}\">{{name}}</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-card/breadcrumbs/breadcrumbs.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumbs {\n  display: flex;\n  align-items: center;\n  height: 68px; }\n  .breadcrumbs svg {\n    margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL2JyZWFkY3J1bWJzL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc2NoZWdvbGV2ZHMuZ2l0aHViLmlvXFxteS1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LWNhcmRcXGJyZWFkY3J1bWJzXFxicmVhZGNydW1icy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0VBSGQ7SUFLTSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWNhcmQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDY4cHg7XHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

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
        this.category = this.route.snapshot.paramMap.get('category');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BreadcrumbsComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BreadcrumbsComponent.prototype, "name", void 0);
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

/***/ "./src/app/pages/product-card/img-collapse/img-collapse.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/product-card/img-collapse/img-collapse.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img-collapse\">\r\n  <div class=\"img-collapse__side\">\r\n    <button (click)=\"selectImgDown()\" class=\"img-collapse__svg-1\">\r\n      <svg class=\"img-collapse__svg-1\"\r\n         xmlns=\"http://www.w3.org/2000/svg\"\r\n         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         width=\"12px\" height=\"8px\">\r\n        <path fill-rule=\"evenodd\"  fill=\"rgb(130, 138, 162)\"\r\n         d=\"M7.028,0.251 L11.773,5.534 C12.075,5.871 12.075,6.416 11.773,6.752 C11.471,7.087 10.982,7.087 10.680,6.752 L6.481,2.077 L2.284,6.751 C1.982,7.087 1.492,7.087 1.190,6.751 C0.888,6.415 0.888,5.870 1.190,5.534 L5.936,0.251 C6.087,0.083 6.284,-0.000 6.481,-0.000 C6.679,-0.000 6.878,0.083 7.028,0.251 L7.028,0.251 Z\"/>\r\n      </svg>\r\n    </button>\r\n    <ng-container *ngFor=\"let img of images; let i = index; let last = last\">\r\n      <button class=\"img-collapse__button\"\r\n              [ngClass]= \"{'img-collapse__button--active': i == selectedImgIndex}\"\r\n              (click)=\"selectImg(i)\"\r\n              *ngIf=\"i >= imgCollapseFirst && i < imgCollapseLast\">\r\n        <img src=\"{{img}}\" class=\"img-collapse__min-img\" alt=\"{{name}}\">\r\n      </button>\r\n    </ng-container>\r\n    <button (click)=\"selectImgUp()\">\r\n      <svg class=\"img-collapse__svg-2\"\r\n         xmlns=\"http://www.w3.org/2000/svg\"\r\n         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         width=\"14px\" height=\"9px\">\r\n        <path fill-rule=\"evenodd\"  fill=\"rgb(130, 138, 162)\"\r\n         d=\"M6.386,8.710 L1.209,2.641 C0.880,2.254 0.880,1.628 1.209,1.243 C1.538,0.858 2.072,0.858 2.401,1.243 L6.982,6.613 L11.561,1.243 C11.890,0.858 12.425,0.858 12.753,1.243 C13.083,1.629 13.083,2.255 12.753,2.641 L7.577,8.710 C7.413,8.904 7.197,9.000 6.982,9.000 C6.766,9.000 6.549,8.904 6.386,8.710 L6.386,8.710 Z\"/>\r\n      </svg>\r\n    </button>\r\n  </div>\r\n  <div class=\"img-collapse__select-img\">\r\n    <img src=\"{{selectedImg}}\" class=\"img-collapse__img\" alt=\"{{name}}\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/product-card/img-collapse/img-collapse.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/product-card/img-collapse/img-collapse.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-collapse {\n  display: flex; }\n  @media (max-width: 768px) {\n    .img-collapse {\n      flex-direction: column;\n      width: 100%; }\n      .img-collapse__svg-1 {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n      .img-collapse__svg-2 {\n        -webkit-transform: rotate(-90deg);\n                transform: rotate(-90deg); } }\n  .img-collapse__side {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 30px 83px 0 0;\n    width: 65px; }\n  @media (max-width: 768px) {\n      .img-collapse__side {\n        flex-direction: row;\n        order: 1;\n        width: 100%;\n        justify-content: center; } }\n  .img-collapse__button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 65px;\n    height: 65px;\n    border-radius: 5px;\n    border: 2px solid white;\n    margin: 5px 0; }\n  @media (max-width: 768px) {\n      .img-collapse__button {\n        margin: 0 5px; } }\n  .img-collapse__button:hover {\n      border-radius: 5px;\n      border: 2px solid #e3e8f0; }\n  .img-collapse__button--active {\n      border-radius: 5px;\n      border: 2px solid #e3e8f0; }\n  .img-collapse__min-img {\n    width: 61px;\n    height: 61px; }\n  .img-collapse__select-img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 473px; }\n  .img-collapse__select-img img {\n      max-width: 100%; }\n  .img-collapse__img {\n    height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL2ltZy1jb2xsYXBzZS9FOlxc0KDQsNCx0L7RgtGLXFxnaXRodWJcXHNjaGVnb2xldmRzLmdpdGh1Yi5pb1xcbXktYXBwL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdC1jYXJkXFxpbWctY29sbGFwc2VcXGltZy1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQTtFQUNiO0lBRkY7TUFHSSxzQkFBc0I7TUFDdEIsV0FBVyxFQUFBO01BRVg7UUFDRSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QixFQUFBO01BRzNCO1FBQ0UsaUNBQXlCO2dCQUF6Qix5QkFBeUIsRUFBQSxFQUMxQjtFQUdIO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVcsRUFBQTtFQUNYO01BTkY7UUFPSSxtQkFBbUI7UUFDbkIsUUFBUTtRQUNSLFdBQVc7UUFDWCx1QkFBdUIsRUFBQSxFQUUxQjtFQUVEO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWEsRUFBQTtFQUNiO01BVEY7UUFVSSxhQUFhLEVBQUEsRUFZaEI7RUF0QkE7TUFjRyxrQkFBa0I7TUFDbEIseUJBQXlCLEVBQUE7RUFHM0I7TUFDRSxrQkFBa0I7TUFDbEIseUJBQXlCLEVBQUE7RUFJN0I7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBTGQ7TUFPRyxlQUFlLEVBQUE7RUFJbkI7SUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWNhcmQvaW1nLWNvbGxhcHNlL2ltZy1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29sbGFwc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJl9fc3ZnLTEge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3N2Zy0yIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDgzcHggMCAwO1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgb3JkZXI6IDE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2J1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNlOGYwO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWFjdGl2ZSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2UzZThmMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX21pbi1pbWcge1xyXG4gICAgd2lkdGg6IDYxcHg7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgfVxyXG5cclxuICAmX19zZWxlY3QtaW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDczcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
    function ImgCollapseComponent(refresh) {
        this.refresh = refresh;
    }
    ImgCollapseComponent.prototype.selectImg = function (i) {
        this.selectedImgIndex = i;
        this.selectedImg = this.images[this.selectedImgIndex];
        this.refresh.detectChanges();
    };
    ImgCollapseComponent.prototype.selectImgDown = function () {
        if (this.selectedImgIndex > 0) {
            this.selectImg(this.selectedImgIndex - 1);
            if (this.imgCollapseLast > 4) {
                this.imgCollapse(-1);
            }
        }
        this.refresh.detectChanges();
    };
    ImgCollapseComponent.prototype.selectImgUp = function () {
        if (this.selectedImgIndex < this.lastImgIndex) {
            this.selectImg(this.selectedImgIndex + 1);
            if (this.imgCollapseFirst < this.images.length - 4) {
                this.imgCollapse(1);
            }
        }
        this.refresh.detectChanges();
    };
    ImgCollapseComponent.prototype.lastImage = function () {
        this.lastImgIndex = this.images.length - 1;
    };
    ImgCollapseComponent.prototype.imgCollapse = function (value) {
        this.imgCollapseFirst = this.imgCollapseFirst + value;
        this.imgCollapseLast = this.imgCollapseLast + value;
    };
    ImgCollapseComponent.prototype.ngOnInit = function () {
        this.imgCollapseFirst = 0;
        this.imgCollapseLast = 4;
        this.selectImg(0);
        this.lastImage();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ImgCollapseComponent.prototype, "images", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImgCollapseComponent.prototype, "name", void 0);
    ImgCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-img-collapse',
            template: __webpack_require__(/*! ./img-collapse.component.html */ "./src/app/pages/product-card/img-collapse/img-collapse.component.html"),
            styles: [__webpack_require__(/*! ./img-collapse.component.scss */ "./src/app/pages/product-card/img-collapse/img-collapse.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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

module.exports = "<div class=\"container\">\r\n  <app-breadcrumbs  [id]=\"id\"\r\n                    [name]=\"product.name\">\r\n  </app-breadcrumbs>\r\n  <div class=\"product-card\">\r\n    <div class=\"product-card__img-collapse\">\r\n    <app-img-collapse\r\n      [images]=\"product.imgUrls\"\r\n      [name]=\"product.name\">\r\n    </app-img-collapse>\r\n    </div>\r\n    <div class=\"card-info\">\r\n      <div class=\"card-info__name\"> {{product.name}}</div>\r\n      <div class=\"card-info__code\"> Код товара {{product.id}}</div>\r\n      <div class=\"card-info__availability\">\r\n        <div class=\"card-info__indicator\"></div> В\r\n        наличии\r\n      </div>\r\n      <div class=\"info-purchase\">\r\n        <div class=\"info-purchase__price\">\r\n          {{product.price | currency:' ':'':'0.0-0'}} ₽ </div>\r\n        <button type=\"button\" name=\"button\" class=\"info-purchase__btn btn\" (click)=\"addCart(product)\">Купить</button>\r\n        <div class=\"info-purchase__delivery\">\r\n          <div class=\"info-purchase__icon\">\r\n            <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                width=\"20px\" height=\"16px\">\r\n                <path fill-rule=\"evenodd\"  opacity=\"0.761\" fill=\"rgb(126, 134, 159)\"\r\n                d=\"M19.000,14.000 L17.000,14.000 C17.000,12.343 15.656,11.000 14.000,11.000 C13.660,11.000 13.339,11.068 13.035,11.173 C13.024,11.115 13.000,11.061 13.000,11.000 L13.000,4.000 C13.000,3.448 13.448,3.000 14.000,3.000 L16.000,3.000 C18.205,3.000 20.000,4.794 20.000,7.000 L20.000,13.000 C20.000,13.551 19.552,14.000 19.000,14.000 ZM18.000,6.000 L15.000,6.000 L15.000,8.000 L18.000,8.000 L18.000,6.000 ZM16.000,14.000 C16.000,15.104 15.104,16.000 14.000,16.000 C12.895,16.000 12.000,15.104 12.000,14.000 C12.000,12.896 12.895,12.000 14.000,12.000 C15.104,12.000 16.000,12.896 16.000,14.000 ZM8.000,14.000 C8.000,12.343 6.656,11.000 5.000,11.000 C3.344,11.000 2.000,12.343 2.000,14.000 L1.000,14.000 C0.448,14.000 -0.000,13.551 -0.000,13.000 L-0.000,2.000 C-0.000,0.896 0.897,-0.000 2.000,-0.000 L10.000,-0.000 C11.103,-0.000 12.000,0.896 12.000,2.000 L12.000,11.779 C11.390,12.328 11.000,13.115 11.000,14.000 L8.000,14.000 ZM5.000,12.000 C6.104,12.000 7.000,12.896 7.000,14.000 C7.000,15.104 6.104,16.000 5.000,16.000 C3.895,16.000 3.000,15.104 3.000,14.000 C3.000,12.896 3.895,12.000 5.000,12.000 Z\"/>\r\n            </svg>\r\n          </div>\r\n          Бесплатная доставка\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-description\">\r\n      <h3>Описание</h3>\r\n      {{product.description}}\r\n      <h3>{{product.additionalDescriptionHeadline}}</h3>\r\n      {{product.additionalDescription}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/product-card/product-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-card/product-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 30px 100px 92px 51px;\n  margin-bottom: 118px;\n  background-color: white; }\n  @media (max-width: 1000px) {\n    .product-card {\n      padding: 33px; } }\n  .product-card__img-collapse {\n    width: calc((100% + 30px) / 12 * 7 - 30px);\n    box-sizing: border-box; }\n  @media (max-width: 1000px) {\n      .product-card__img-collapse {\n        width: 100%; } }\n  .product-card .card-info {\n    margin-top: 55px; }\n  @media (max-width: 1000px) {\n      .product-card .card-info {\n        width: 100%; } }\n  .product-card .card-info__name {\n      font-size: 36px;\n      font-weight: 700; }\n  .product-card .card-info__code {\n      color: #a1a8bd;\n      font-size: 16px;\n      font-weight: 400;\n      margin: 11px 0; }\n  .product-card .card-info__availability {\n      display: flex;\n      align-items: center; }\n  .product-card .card-info__indicator {\n      width: 8px;\n      height: 8px;\n      border-radius: 100%;\n      background-color: #44b759;\n      margin-right: 5px; }\n  .product-card .card-info .info-purchase {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: baseline;\n      justify-content: space-between;\n      width: 370px;\n      height: 230px;\n      border-radius: 10px;\n      background-color: #f5f8fa;\n      margin: 35px 0;\n      padding: 38px 30px;\n      box-sizing: border-box; }\n  @media (max-width: 1000px) {\n        .product-card .card-info .info-purchase {\n          width: 100%;\n          flex-direction: column;\n          align-items: center;\n          justify-content: space-around; } }\n  .product-card .card-info .info-purchase__delivery {\n        display: flex;\n        align-items: center;\n        color: #a2a9bb; }\n  .product-card .card-info .info-purchase__icon {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 100%;\n        width: 37px;\n        height: 37px;\n        margin-right: 10px;\n        background: #e3e8f0; }\n  .product-card .card-info .info-purchase__btn {\n        width: 370px; }\n  .product-card .card-info .info-purchase__price {\n        font-size: 30px;\n        font-weight: 700;\n        line-height: 21px; }\n  .product-card .card-description {\n    margin-top: -40px;\n    margin-left: calc((100% + 30px) / 12 * 2 - 51px);\n    width: calc((100% + 30px) / 12 * 9 - 30px);\n    color: #828aa2;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 24px; }\n  @media (max-width: 1000px) {\n      .product-card .card-description {\n        width: 100%;\n        margin: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXJkL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc2NoZWdvbGV2ZHMuZ2l0aHViLmlvXFxteS1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LWNhcmRcXHByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsdUJBQXVCLEVBQUE7RUFDdkI7SUFQSjtNQVFNLGFBQWEsRUFBQSxFQXNHbEI7RUFuR0c7SUFDRSwwQ0FBMEM7SUFDMUMsc0JBQXNCLEVBQUE7RUFDdEI7TUFIRjtRQUlJLFdBQVcsRUFBQSxFQUVkO0VBakJMO0lBb0JRLGdCQUFnQixFQUFBO0VBQ2hCO01BckJSO1FBc0JVLFdBQVcsRUFBQSxFQXlFaEI7RUEvRkw7TUF5QlksZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBMUI1QjtNQThCWSxjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjLEVBQUE7RUFqQzFCO01BcUNZLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtFQXRDL0I7TUEwQ1ksVUFBVTtNQUNWLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLGlCQUFpQixFQUFBO0VBOUM3QjtNQWtEWSxhQUFhO01BQ2IsZUFBZTtNQUNmLHFCQUFxQjtNQUNyQiw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsc0JBQXNCLEVBQUE7RUFDdEI7UUE3RFo7VUE4RGMsV0FBVztVQUNYLHNCQUFzQjtVQUN0QixtQkFBbUI7VUFDbkIsNkJBQTZCLEVBQUEsRUE2QmxDO0VBOUZUO1FBcUVjLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsY0FBYyxFQUFBO0VBdkU1QjtRQTJFYyxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CLEVBQUE7RUFsRmpDO1FBc0ZjLFlBQVksRUFBQTtFQXRGMUI7UUEwRmdCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCLEVBQUE7RUE1RmpDO0lBa0dRLGlCQUFpQjtJQUNqQixnREFBZ0Q7SUFDaEQsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBQ2pCO01BekdSO1FBMEdVLFdBQVc7UUFDWCxTQUFTLEVBQUEsRUFFZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwMHB4IDkycHggNTFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDExOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDMzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW1nLWNvbGxhcHNlIHtcclxuICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgKyAzMHB4KSAvIDEyICogNyAtIDMwcHgpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1pbmZvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fY29kZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYTFhOGJkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTFweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fYXZhaWxhYmlsaXR5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2luZGljYXRvciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiNzU5O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvLXB1cmNoYXNlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xyXG4gICAgICAgICAgICBtYXJnaW46IDM1cHggMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMzhweCAzMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19kZWxpdmVyeSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjYTJhOWJiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19pY29uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogMzdweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2U4ZjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICZfX2J0biB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19wcmljZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCgxMDAlICsgMzBweCkgLyAxMiAqIDIgLSA1MXB4KTtcclxuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSArIDMwcHgpIC8gMTIgKiA5IC0gMzBweCk7XHJcbiAgICAgICAgY29sb3I6ICM4MjhhYTI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");





var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(route, _cartService, _productService) {
        this.route = route;
        this._cartService = _cartService;
        this._productService = _productService;
    }
    ProductCardComponent.prototype.getProduct = function () {
        var _this = this;
        this._productService.getProductById(this.id).subscribe(function (product) { return _this.product = product; });
    };
    ProductCardComponent.prototype.addCart = function (product) {
        this._cartService.add(product);
    };
    ProductCardComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getProduct();
    };
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/pages/product-card/product-card.component.html"),
            providers: [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]],
            styles: [__webpack_require__(/*! ./product-card.component.scss */ "./src/app/pages/product-card/product-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
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
/* harmony import */ var _img_collapse_img_collapse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img-collapse/img-collapse.component */ "./src/app/pages/product-card/img-collapse/img-collapse.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ProductCardModule = /** @class */ (function () {
    function ProductCardModule() {
    }
    ProductCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"],
                _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsComponent"],
                _img_collapse_img_collapse_component__WEBPACK_IMPORTED_MODULE_6__["ImgCollapseComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _product_card_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductCardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ]
        })
    ], ProductCardModule);
    return ProductCardModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-card-product-card-module.js.map