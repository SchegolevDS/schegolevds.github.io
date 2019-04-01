(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        this.cart = [];
        this.cartPrice = [];
    }
    ShoppingCartService.prototype.add = function (product) {
        this.cart.push(product);
        this.cartPrice.push(product.price);
        localStorage.setItem('Shopping-cart-Product', JSON.stringify(this.cart));
        this.arraySum(this.cartPrice);
    };
    ShoppingCartService.prototype.arraySum = function (cartPrice) {
        this.cartSum = 0;
        for (var i = 0; i < cartPrice.length; i++) {
            this.cartSum += cartPrice[i];
        }
    };
    ShoppingCartService.prototype.delete = function (id) {
        this.cart.splice(id, 1);
        localStorage.setItem('Shopping-cart-Product', JSON.stringify(this.cart));
    };
    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map