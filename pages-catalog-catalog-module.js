(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-catalog-catalog-module"],{

/***/ "./src/app/pages/catalog/catalog-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/catalog/catalog-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CatalogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogRoutingModule", function() { return CatalogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog.component */ "./src/app/pages/catalog/catalog.component.ts");




var routes = [
    { path: "", component: _catalog_component__WEBPACK_IMPORTED_MODULE_3__["CatalogComponent"] },
];
var CatalogRoutingModule = /** @class */ (function () {
    function CatalogRoutingModule() {
    }
    CatalogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CatalogRoutingModule);
    return CatalogRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/catalog/catalog.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/catalog/catalog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner\">\r\n  <div class=\"container\">\r\n    <h1>Стулья <br>и кресла</h1>\r\n    <img src=\"/assets/img/general/head-banner.png\" alt=\"\" class=\"head-banner__img\">\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"catalog\">\r\n    <app-sorting></app-sorting>\r\n    <div class=\"product-list\">\r\n      <app-product-card-min\r\n        *ngFor=\"let product of products | search:search.searchStr\"\r\n        [product] = \"product\"\r\n      ></app-product-card-min>\r\n    </div>\r\n    <app-pagination></app-pagination>\r\n  </div>\r\n</div>\r\na\r\n"

/***/ }),

/***/ "./src/app/pages/catalog/catalog.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/catalog/catalog.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-banner {\n  background-color: white; }\n  .head-banner .container {\n    display: flex;\n    height: 236px;\n    align-items: center;\n    justify-content: space-between; }\n  .head-banner__img {\n    align-self: flex-end;\n    margin-right: 84px;\n    pointer-events: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  @media (max-width: 991.98px) {\n    .head-banner__img {\n      margin-right: 10px; } }\n  @media (max-width: 767.98px) {\n    .head-banner .container {\n      height: 120px; }\n    .head-banner__img {\n      width: 123px;\n      height: 101px; } }\n  .catalog {\n  margin: 48px 0 97px; }\n  .product-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 13px -15px; }\n  app-product-card-min {\n  width: calc(100% / 12 * 3 - 30px);\n  margin: 13px 15px; }\n  .search {\n  width: 100%;\n  margin: 0 15px; }\n  .search input {\n    height: 40px;\n    width: 300px;\n    border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9FOlxc0KDQsNCx0L7RgtGLXFxnaXRodWJcXHN0b3JlL3NyY1xcYXBwXFxwYWdlc1xcY2F0YWxvZ1xcY2F0YWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QixFQUFBO0VBRHpCO0lBSUksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7RUFHaEM7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQUVuQjtJQUNFO01BQ0Usa0JBQWtCLEVBQUEsRUFDbkI7RUFFSDtJQXhCRjtNQTBCTSxhQUFhLEVBQUE7SUFHZjtNQUNFLFlBQVk7TUFDWixhQUFhLEVBQUEsRUFDZDtFQUlMO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQixFQUFBO0VBR25CO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUZoQjtJQUlJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAyMzZweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDg0cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgJl9faW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHdpZHRoOiAxMjNweDtcclxuICAgICAgaGVpZ2h0OiAxMDFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXRhbG9nIHtcclxuICBtYXJnaW46IDQ4cHggMCA5N3B4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDEzcHggLTE1cHg7XHJcbn1cclxuXHJcbmFwcC1wcm9kdWN0LWNhcmQtbWluIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC8gMTIgKiAzIC0gMzBweCk7XHJcbiAgbWFyZ2luOiAxM3B4IDE1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG4gIGlucHV0IHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/catalog/catalog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/catalog/catalog.component.ts ***!
  \****************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/products */ "./src/app/pages/products/products.ts");
/* harmony import */ var src_app_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/search.service */ "./src/app/search.service.ts");




var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(search) {
        this.search = search;
        this.products = _products_products__WEBPACK_IMPORTED_MODULE_2__["Products"];
    }
    CatalogComponent.prototype.ngOnInit = function () {
    };
    CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/pages/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.scss */ "./src/app/pages/catalog/catalog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/pages/catalog/catalog.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/catalog/catalog.module.ts ***!
  \*************************************************/
/*! exports provided: CatalogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogModule", function() { return CatalogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _catalog_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog-routing.module */ "./src/app/pages/catalog/catalog-routing.module.ts");
/* harmony import */ var _catalog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog.component */ "./src/app/pages/catalog/catalog.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pages/catalog/pagination/pagination.component.ts");
/* harmony import */ var _sorting_sorting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sorting/sorting.component */ "./src/app/pages/catalog/sorting/sorting.component.ts");
/* harmony import */ var _product_card_min_product_card_min_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-card-min/product-card-min.component */ "./src/app/pages/catalog/product-card-min/product-card-min.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search.pipe */ "./src/app/pages/catalog/search.pipe.ts");










var CatalogModule = /** @class */ (function () {
    function CatalogModule() {
    }
    CatalogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_catalog_component__WEBPACK_IMPORTED_MODULE_5__["CatalogComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"],
                _sorting_sorting_component__WEBPACK_IMPORTED_MODULE_7__["SortingComponent"],
                _product_card_min_product_card_min_component__WEBPACK_IMPORTED_MODULE_8__["ProductCardMinComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _catalog_routing_module__WEBPACK_IMPORTED_MODULE_4__["CatalogRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], CatalogModule);
    return CatalogModule;
}());



/***/ }),

/***/ "./src/app/pages/catalog/pagination/pagination.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/catalog/pagination/pagination.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination\">\n    <button type=\"button\" name=\"button\" class=\"pagination__btn-switch\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\" height=\"11px\">\n            <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M2.534,5.015 L5.702,8.172 C6.126,8.594 6.126,9.279 5.702,9.701 C5.278,10.124 4.592,10.124 4.168,9.701 L0.333,5.879 C0.095,5.642 0.005,5.324 0.034,5.015 C0.005,4.705 0.095,4.388 0.333,4.150 L4.168,0.328 C4.592,-0.095 5.278,-0.095 5.702,0.328 C6.126,0.750 6.126,1.434 5.702,1.857 L2.534,5.015 Z\" />\n        </svg>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\" height=\"11px\">\n            <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M2.534,5.015 L5.702,8.172 C6.126,8.594 6.126,9.279 5.702,9.701 C5.278,10.124 4.592,10.124 4.168,9.701 L0.333,5.879 C0.095,5.642 0.005,5.324 0.034,5.015 C0.005,4.705 0.095,4.388 0.333,4.150 L4.168,0.328 C4.592,-0.095 5.278,-0.095 5.702,0.328 C6.126,0.750 6.126,1.434 5.702,1.857 L2.534,5.015 Z\" />\n        </svg>\n    </button>\n    <button type=\"button\" name=\"button\" class=\"pagination__btn-switch\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\" height=\"11px\">\n            <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M2.534,5.015 L5.702,8.172 C6.126,8.594 6.126,9.279 5.702,9.701 C5.278,10.124 4.592,10.124 4.168,9.701 L0.333,5.879 C0.095,5.642 0.005,5.324 0.034,5.015 C0.005,4.705 0.095,4.388 0.333,4.150 L4.168,0.328 C4.592,-0.095 5.278,-0.095 5.702,0.328 C6.126,0.750 6.126,1.434 5.702,1.857 L2.534,5.015 Z\" />\n        </svg>\n    </button>\n    <a href=\"\" class=\"pagination__page\">1</a>\n    <a href=\"\" class=\"pagination__page\">2</a>\n    <a href=\"\" class=\"pagination__page\">3</a>\n    <a href=\"\" class=\"pagination__page pagination__page--active\">4</a>\n    <a href=\"\" class=\"pagination__page\">5</a>\n    <a href=\"\" class=\"pagination__page\">6</a>\n    <a href=\"\" class=\"pagination__page\">7</a>\n    <a href=\"\" class=\"pagination__page\">8</a>\n    <button type=\"button\" name=\"button\" class=\"pagination__btn-switch\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"6px\" height=\"11px\">\n            <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M5.666,5.879 L1.831,9.701 C1.408,10.124 0.721,10.124 0.297,9.701 C-0.127,9.280 -0.127,8.595 0.297,8.172 L3.465,5.015 L0.297,1.857 C-0.127,1.434 -0.127,0.750 0.297,0.328 C0.721,-0.094 1.408,-0.094 1.831,0.328 L5.666,4.151 C5.904,4.388 5.993,4.705 5.964,5.015 C5.993,5.324 5.904,5.642 5.666,5.879 Z\" />\n            </svg>\n    </button>\n    <button type=\"button\" name=\"button\" class=\"pagination__btn-switch\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"6px\" height=\"11px\">\n            <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M5.666,5.879 L1.831,9.701 C1.408,10.124 0.721,10.124 0.297,9.701 C-0.127,9.280 -0.127,8.595 0.297,8.172 L3.465,5.015 L0.297,1.857 C-0.127,1.434 -0.127,0.750 0.297,0.328 C0.721,-0.094 1.408,-0.094 1.831,0.328 L5.666,4.151 C5.904,4.388 5.993,4.705 5.964,5.015 C5.993,5.324 5.904,5.642 5.666,5.879 Z\" />\n            </svg>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"6px\" height=\"11px\">\n                <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M5.666,5.879 L1.831,9.701 C1.408,10.124 0.721,10.124 0.297,9.701 C-0.127,9.280 -0.127,8.595 0.297,8.172 L3.465,5.015 L0.297,1.857 C-0.127,1.434 -0.127,0.750 0.297,0.328 C0.721,-0.094 1.408,-0.094 1.831,0.328 L5.666,4.151 C5.904,4.388 5.993,4.705 5.964,5.015 C5.993,5.324 5.904,5.642 5.666,5.879 Z\" />\n            </svg>\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/pagination/pagination.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/catalog/pagination/pagination.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 90px;\n  background-color: #ffffff;\n  margin-bottom: 97px;\n  padding: 0 242px;\n  box-sizing: border-box; }\n  @media (max-width: 991.98px) {\n    .pagination {\n      padding: 10px; } }\n  .pagination__btn-switch {\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n    border: 2px solid #e3e8f0;\n    background: none; }\n  .pagination__page {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    background: none;\n    border: none;\n    border-radius: 100%; }\n  @media (max-width: 575.98px) {\n      .pagination__page {\n        display: none; } }\n  .pagination__page:hover {\n      color: #f54732; }\n  .pagination__page--active {\n      box-shadow: 0 9px 18px rgba(168, 172, 185, 0.53);\n      background-color: #ffffff;\n      color: #f54732;\n      font-weight: 700; }\n  @media (max-width: 575.98px) {\n        .pagination__page--active {\n          display: flex; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9wYWdpbmF0aW9uL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxjYXRhbG9nXFxwYWdpbmF0aW9uXFxwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBO0VBQ3RCO0lBVEo7TUFVTSxhQUFhLEVBQUEsRUFzQ2xCO0VBbkNHO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFBO0VBSXBCO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQixFQUFBO0VBQ25CO01BVEo7UUFVTSxhQUFhLEVBQUEsRUFlbEI7RUF6QkE7TUFjTyxjQUFjLEVBQUE7RUFFbEI7TUFDRSxnREFBZ0Q7TUFDaEQseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTtFQUNoQjtRQUxGO1VBTUksYUFBYSxFQUFBLEVBRWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0YWxvZy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5N3B4O1xyXG4gICAgcGFkZGluZzogMCAyNDJweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19idG4tc3dpdGNoIHtcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNlOGYwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICZfX3BhZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNTQ3MzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtLWFjdGl2ZSB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDlweCAxOHB4IHJnYmEoMTY4LCAxNzIsIDE4NSwgMC41Myk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICNmNTQ3MzI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/catalog/pagination/pagination.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/catalog/pagination/pagination.component.ts ***!
  \******************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pages/catalog/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/pages/catalog/pagination/pagination.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/pages/catalog/product-card-min/product-card-min.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/catalog/product-card-min/product-card-min.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"product-card\">\n  <div class=\"product-card__img\">\n    <img src=\".{{product.imgURL}}\" alt=\"\">\n  </div>\n  <div class=\"product-card__name\">\n    <a routerLink=\"product\">{{product.name}}</a>\n  </div>\n  <div class=\"product-card__price\">\n    {{product.price | currency:' ':'':'0.0-0'}} ₽\n  </div>\n  <button type=\"button\" name=\"button\" class=\"btn-min\">В корзину</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/product-card-min/product-card-min.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/catalog/product-card-min/product-card-min.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 384px;\n  background-color: white;\n  border-radius: 5px; }\n  .product-card:hover {\n    box-shadow: 0 9px 21px rgba(168, 172, 185, 0.44); }\n  .product-card__img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 229px;\n    height: 223px; }\n  .product-card__img img {\n      width: auto; }\n  .product-card__name {\n    margin: 15px 0;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 20px; }\n  .product-card__price {\n    margin-bottom: 25px;\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 20px; }\n  @media (max-width: 991.98px) {\n    .product-card {\n      width: calc(100% / 12 * 4 - 30px); } }\n  @media (max-width: 767.98px) {\n    .product-card {\n      width: calc(100% - 30px); } }\n  .banner {\n  display: flex;\n  flex-direction: column;\n  height: 384px;\n  margin: 13px 15px;\n  padding-left: 40px;\n  box-sizing: border-box;\n  width: calc(100% / 12 * 6 - 30px); }\n  .banner:hover {\n    box-shadow: 0 9px 21px rgba(168, 172, 185, 0.44); }\n  .banner__img {\n    margin-left: -40px;\n    position: relative;\n    z-index: 0; }\n  .banner__img img {\n      height: 100%;\n      width: 100%; }\n  .banner__name {\n    margin-top: 123px;\n    position: absolute;\n    z-index: 1;\n    width: 300px; }\n  .banner__name a {\n      font-size: 36px;\n      font-weight: 700; }\n  .banner__price {\n    display: none; }\n  .banner .btn-min {\n    margin-top: 228px;\n    position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9wcm9kdWN0LWNhcmQtbWluL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxjYXRhbG9nXFxwcm9kdWN0LWNhcmQtbWluXFxwcm9kdWN0LWNhcmQtbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTtFQU5wQjtJQVNJLGdEQUFnRCxFQUFBO0VBR2xEO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUxkO01BUUcsV0FBVyxFQUFBO0VBSWY7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQUduQjtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRW5CO0lBckNGO01Bc0NJLGlDQUFpQyxFQUFBLEVBS3BDO0VBSEM7SUF4Q0Y7TUF5Q0ksd0JBQXdCLEVBQUEsRUFFM0I7RUFFRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlDQUFpQyxFQUFBO0VBUG5DO0lBVUksZ0RBQWdELEVBQUE7RUFHbEQ7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQUhYO01BS0csWUFBWTtNQUNaLFdBQVcsRUFBQTtFQUlmO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBSmI7TUFPRyxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFJcEI7SUFDRSxhQUFhLEVBQUE7RUFwQ2pCO0lBd0NJLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cvcHJvZHVjdC1jYXJkLW1pbi9wcm9kdWN0LWNhcmQtbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzODRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA5cHggMjFweCByZ2JhKDE2OCwgMTcyLCAxODUsIDAuNDQpO1xyXG4gIH1cclxuXHJcbiAgJl9faW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjI5cHg7XHJcbiAgICBoZWlnaHQ6IDIyM3B4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gICZfX3ByaWNlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDEyICogNCAtIDMwcHgpO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDM4NHB4O1xyXG4gIG1hcmdpbjogMTNweCAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAxMiAqIDYgLSAzMHB4KTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDlweCAyMXB4IHJnYmEoMTY4LCAxNzIsIDE4NSwgMC40NCk7XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDEyM3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcHJpY2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5idG4tbWluIHtcclxuICAgIG1hcmdpbi10b3A6IDIyOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/catalog/product-card-min/product-card-min.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/catalog/product-card-min/product-card-min.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductCardMinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardMinComponent", function() { return ProductCardMinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductCardMinComponent = /** @class */ (function () {
    function ProductCardMinComponent() {
    }
    ProductCardMinComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCardMinComponent.prototype, "product", void 0);
    ProductCardMinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card-min',
            template: __webpack_require__(/*! ./product-card-min.component.html */ "./src/app/pages/catalog/product-card-min/product-card-min.component.html"),
            styles: [__webpack_require__(/*! ./product-card-min.component.scss */ "./src/app/pages/catalog/product-card-min/product-card-min.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductCardMinComponent);
    return ProductCardMinComponent;
}());



/***/ }),

/***/ "./src/app/pages/catalog/search.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/catalog/search.pipe.ts ***!
  \**********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (products, searchStr) {
        if (!products || !searchStr) {
            return products;
        }
        return products.filter(function (product) {
            return product.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1;
        });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/pages/catalog/sorting/sorting.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/catalog/sorting/sorting.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sorting\">\n    <div class=\"sorting-price\">\n        Цена\n        <form action=\"\" class=\"sorting-price__form\">\n            <input type=\"text\" name=\"\" value=\"5300\" class=\"input-main input-main--sorting\">\n            —\n            <input type=\"text\" name=\"\" value=\"12900\" class=\"input-main input-main--sorting\">\n            <div class=\"sorting-price__range\">\n                <div class=\"sorting-price__selected-range\">\n                    <div class=\"sorting-price__circle\"></div>\n                    <div class=\"sorting-price__line\"></div>\n                    <div class=\"sorting-price__circle\"></div>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"sorting-view\">\n        Сортировка\n        <select class=\"sorting-view__select\" name=\"sorting\">\n            <option class=\"sorting-view__option\" value=\"\">По наименованию</option>\n            <option class=\"sorting-view__option\" value=\"\">Дорогие сверху</option>\n            <option class=\"sorting-view__option\" value=\"\">Дешевые сверху</option>\n        </select>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"11px\" height=\"6px\">\n            <path fill-rule=\"evenodd\" fill=\"rgb(161, 168, 189)\" d=\"M9.701,1.828 L5.866,5.663 C5.628,5.901 5.309,5.991 4.999,5.962 C4.689,5.991 4.370,5.901 4.133,5.663 L0.297,1.828 C-0.126,1.404 -0.126,0.718 0.297,0.294 C0.721,-0.130 1.408,-0.130 1.831,0.294 L4.999,3.461 L8.167,0.294 C8.590,-0.130 9.277,-0.130 9.701,0.294 C10.124,0.718 10.124,1.404 9.701,1.828 Z\" />\n        </svg>\n    </div>\n    <div class=\"sorting-quantity\">\n      Товаров на странице\n      <select class=\"sorting-view__select\" name=\"sorting\">\n          <option class=\"sorting-view__option\" value=\"\">14</option>\n          <option class=\"sorting-view__option\" value=\"\">22</option>\n          <option class=\"sorting-view__option\" value=\"\">30</option>\n      </select>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"11px\" height=\"6px\">\n          <path fill-rule=\"evenodd\" fill=\"rgb(161, 168, 189)\" d=\"M9.701,1.828 L5.866,5.663 C5.628,5.901 5.309,5.991 4.999,5.962 C4.689,5.991 4.370,5.901 4.133,5.663 L0.297,1.828 C-0.126,1.404 -0.126,0.718 0.297,0.294 C0.721,-0.130 1.408,-0.130 1.831,0.294 L4.999,3.461 L8.167,0.294 C8.590,-0.130 9.277,-0.130 9.701,0.294 C10.124,0.718 10.124,1.404 9.701,1.828 Z\" />\n      </svg>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/sorting/sorting.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/catalog/sorting/sorting.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sorting {\n  display: flex;\n  height: 92px;\n  align-items: center;\n  padding: 0 30px;\n  border-radius: 5px;\n  background-color: #ffffff; }\n\n.sorting-price {\n  display: flex;\n  align-items: center; }\n\n.sorting-price__form {\n    display: flex;\n    flex-wrap: wrap;\n    width: 208px;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 22px;\n    color: #142558;\n    font-family: 'Montserrat';\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 24px; }\n\n.sorting-price__range {\n    display: flex;\n    align-items: center;\n    width: 208px;\n    height: 3px;\n    border-radius: 2px;\n    background-color: #a1a8bd; }\n\n.sorting-price__selected-range {\n    display: flex;\n    align-items: center; }\n\n.sorting-price__circle {\n    width: 17px;\n    height: 17px;\n    border-radius: 100%;\n    border: 1px solid #d4d8e4;\n    background-color: #ffffff; }\n\n.sorting-price__line {\n    width: 101px;\n    height: 3px;\n    border-radius: 2px;\n    background-color: #f54732; }\n\n.sorting-view {\n  margin-left: auto;\n  font-size: 16px; }\n\n.sorting-view__select {\n    border: none;\n    color: #142558;\n    font-size: 16px;\n    -webkit-appearance: none;\n    font-weight: 700; }\n\n.sorting-view__option {\n    color: #142558;\n    font-size: 16px; }\n\n.sorting-quantity {\n  margin-left: 63px;\n  font-size: 16px; }\n\n.input-main {\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  border: 2px solid #e3e8f0;\n  background-color: #ffffff;\n  margin: 12px 0;\n  color: #a1a8bd;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  resize: none;\n  padding-left: 22px;\n  box-sizing: border-box; }\n\n.input-main:hover {\n    border: 2px solid #a1a8bd; }\n\n.input-main:focus {\n    border: 2px solid #315ad5; }\n\n.input-main:invalid {\n    border: 2px solid #f54732; }\n\n.input-main:disabled {\n    border-color: #e3e8f0;\n    background-color: #f3f6fa; }\n\n.input-main--min {\n    width: 100px;\n    margin-right: 18px; }\n\n@media (max-width: 575.98px) {\n      .input-main--min {\n        width: 100%; } }\n\n.input-main--sorting {\n    width: 88px;\n    color: #142558;\n    font-family: 'Montserrat';\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 24px;\n    padding-left: 10px; }\n\n.input-main--comment {\n    height: 111px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9zb3J0aW5nL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxjYXRhbG9nXFxzb3J0aW5nXFxzb3J0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUE7O0FBRzdCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQUd2QjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUIsRUFBQTs7QUFHN0I7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTs7QUFJakM7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVmO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQixFQUFBOztBQUdwQjtJQUNJLGNBQWM7SUFDZCxlQUFlLEVBQUE7O0FBS3ZCO0VBQ0ksaUJBQWlCO0VBQ2IsZUFBZSxFQUFBOztBQUt2QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQWIxQjtJQWdCUSx5QkFBeUIsRUFBQTs7QUFoQmpDO0lBb0JRLHlCQUF5QixFQUFBOztBQXBCakM7SUF3QlEseUJBQXlCLEVBQUE7O0FBeEJqQztJQTRCUSxxQkFBcUI7SUFDckIseUJBQXlCLEVBQUE7O0FBRzdCO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQixFQUFBOztBQUNsQjtNQUhKO1FBSVEsV0FBVyxFQUFBLEVBRWxCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0lBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0YWxvZy9zb3J0aW5nL3NvcnRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29ydGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA5MnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zb3J0aW5nLXByaWNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHdpZHRoOiAyMDhweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjJweDtcclxuICAgICAgICBjb2xvcjogIzE0MjU1ODtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3JhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDIwOHB4O1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhOGJkO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3NlbGVjdGVkLXJhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY2lyY2xlIHtcclxuICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkOGU0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMXB4O1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU0NzMyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc29ydGluZy12aWV3IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICZfX3NlbGVjdCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMTQyNTU4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19vcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMTQyNTU4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5zb3J0aW5nLXF1YW50aXR5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2M3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLy8vaW5wdXQvLy9cclxuXHJcbi5pbnB1dC1tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UzZThmMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxuICAgIGNvbG9yOiAjYTFhOGJkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYTFhOGJkO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMTVhZDU7XHJcbiAgICB9XHJcblxyXG4gICAgJjppbnZhbGlkIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjU0NzMyO1xyXG4gICAgfVxyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2UzZThmMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmZhO1xyXG4gICAgfVxyXG5cclxuICAgICYtLW1pbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLXNvcnRpbmcge1xyXG4gICAgICAgIHdpZHRoOiA4OHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTQyNTU4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtLWNvbW1lbnQge1xyXG4gICAgICAgIGhlaWdodDogMTExcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/catalog/sorting/sorting.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/catalog/sorting/sorting.component.ts ***!
  \************************************************************/
/*! exports provided: SortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingComponent", function() { return SortingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortingComponent = /** @class */ (function () {
    function SortingComponent() {
    }
    SortingComponent.prototype.ngOnInit = function () {
    };
    SortingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sorting',
            template: __webpack_require__(/*! ./sorting.component.html */ "./src/app/pages/catalog/sorting/sorting.component.html"),
            styles: [__webpack_require__(/*! ./sorting.component.scss */ "./src/app/pages/catalog/sorting/sorting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SortingComponent);
    return SortingComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.ts":
/*!********************************************!*\
  !*** ./src/app/pages/products/products.ts ***!
  \********************************************/
/*! exports provided: Products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
var Products = [
    { type: 'product-card', id: 1, name: 'Стул Ханна', price: 9399, imgURL: '/assets/img/content/1.jpg' },
    { type: 'product-card', id: 2, name: 'Стул Эдинбург', price: 5690, imgURL: '/assets/img/content/2.jpg' },
    { type: 'product-card', id: 3, name: 'Стул Сольер', price: 2390, imgURL: '/assets/img/content/3.jpg' },
    { type: 'product-card', id: 4, name: 'Стул Стелла', price: 3500, imgURL: '/assets/img/content/4.jpg' },
    { type: 'product-card', id: 5, name: 'Стул Бланес', price: 4300, imgURL: '/assets/img/content/5.jpg' },
    { type: 'product-card', id: 6, name: 'Кресло Гоа', price: 8499, imgURL: '/assets/img/content/6.jpg' },
    //  {type:'banner',  id: 15, name: 'Товары для дома со скидкой', price: 8499, imgURL: '/assets/img/content/content-cardbanner.jpg'},
    { type: 'product-card', id: 7, name: 'Кресло Мильтон', price: 12599, imgURL: '/assets/img/content/7.jpg' },
    { type: 'product-card', id: 8, name: 'Кресло Ханна', price: 9399, imgURL: '/assets/img/content/8.jpg' },
    { type: 'product-card', id: 9, name: 'Стул Рикардо', price: 9399, imgURL: '/assets/img/content/9.jpg' },
    { type: 'product-card', id: 10, name: 'Стул Версаль', price: 9399, imgURL: '/assets/img/content/10.jpg' },
    { type: 'product-card', id: 11, name: 'Стул Лина', price: 9399, imgURL: '/assets/img/content/11.jpg' },
    { type: 'product-card', id: 12, name: 'Кресло София', price: 9399, imgURL: '/assets/img/content/12.jpg' },
    { type: 'product-card', id: 13, name: 'Стул Родос', price: 9399, imgURL: '/assets/img/content/13.jpg' },
    { type: 'product-card', id: 14, name: 'Стул Бетти', price: 9399, imgURL: '/assets/img/content/14.jpg' }
];


/***/ })

}]);
//# sourceMappingURL=pages-catalog-catalog-module.js.map