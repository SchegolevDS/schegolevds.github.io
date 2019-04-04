(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-catalog-catalog-module"],{

/***/ "./node_modules/angular-pipes/fesm5/angular-pipes.js":
/*!***********************************************************!*\
  !*** ./node_modules/angular-pipes/fesm5/angular-pipes.js ***!
  \***********************************************************/
/*! exports provided: NgAggregatePipesModule, NgArrayPipesModule, NgBooleanPipesModule, NgMathPipesModule, NgObjectPipesModule, NgStringPipesModule, NgPipesModule, GroupByPipe, MaxPipe, MeanPipe, MinPipe, SumPipe, EmptyPipe, HeadPipe, InitialPipe, LastPipe, JoinPipe, TailPipe, UniqPipe, WithoutPipe, MapPipe, WherePipe, FirstOrDefaultPipe, RangePipe, PluckPipe, ReversePipe, OrderByPipe, CountPipe, SomePipe, EveryPipe, ShufflePipe, TakePipe, DropPipe, DeepPipe, ChunkPipe, FlattenPipe, IntersectionPipe, UnionPipe, TakeWhilePipe, TakeUntilPipe, IsEqualPipe, IsGreaterOrEqualPipe, IsGreaterPipe, IsLessOrEqualPipe, IsIdenticalPipe, IsLessPipe, IsNotEqualPipe, IsNotIdenticalPipe, IsArrayPipe, IsDefinedPipe, IsFunctionPipe, IsNilPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, BytesPipe, CeilPipe, FloorPipe, RoundPipe, DegreesPipe, RadiansPipe, RandomPipe, SqrtPipe, PowPipe, AbsPipe, OrdinalPipe, KeysPipe, ToArrayPipe, DefaultsPipe, LeftPadPipe, MatchPipe, PadPipe, ReplacePipe, RightPadPipe, SplitPipe, TestPipe, TrimPipe, NewlinesPipe, CapitalizePipe, UpperFirstPipe, TemplatePipe, EncodeURIPipe, EncodeURIComponentPipe, DecodeURIPipe, DecodeURIComponentPipe, TruncatePipe, RepeatPipe, SlugifyPipe, StripTagsPipe, LatinizePipe, WrapPipe, WithPipe, ReverseStrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAggregatePipesModule", function() { return NgAggregatePipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgArrayPipesModule", function() { return NgArrayPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBooleanPipesModule", function() { return NgBooleanPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMathPipesModule", function() { return NgMathPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgObjectPipesModule", function() { return NgObjectPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStringPipesModule", function() { return NgStringPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPipesModule", function() { return NgPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPipe", function() { return MaxPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeanPipe", function() { return MeanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return MinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumPipe", function() { return SumPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPipe", function() { return EmptyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadPipe", function() { return HeadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPipe", function() { return InitialPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastPipe", function() { return LastPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return JoinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailPipe", function() { return TailPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqPipe", function() { return UniqPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutPipe", function() { return WithoutPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPipe", function() { return MapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WherePipe", function() { return WherePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstOrDefaultPipe", function() { return FirstOrDefaultPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePipe", function() { return RangePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluckPipe", function() { return PluckPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountPipe", function() { return CountPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomePipe", function() { return SomePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EveryPipe", function() { return EveryPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShufflePipe", function() { return ShufflePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakePipe", function() { return TakePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropPipe", function() { return DropPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepPipe", function() { return DeepPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChunkPipe", function() { return ChunkPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenPipe", function() { return FlattenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionPipe", function() { return IntersectionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionPipe", function() { return UnionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeWhilePipe", function() { return TakeWhilePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeUntilPipe", function() { return TakeUntilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEqualPipe", function() { return IsEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterOrEqualPipe", function() { return IsGreaterOrEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterPipe", function() { return IsGreaterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessOrEqualPipe", function() { return IsLessOrEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIdenticalPipe", function() { return IsIdenticalPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessPipe", function() { return IsLessPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotEqualPipe", function() { return IsNotEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotIdenticalPipe", function() { return IsNotIdenticalPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsArrayPipe", function() { return IsArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDefinedPipe", function() { return IsDefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFunctionPipe", function() { return IsFunctionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNilPipe", function() { return IsNilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNullPipe", function() { return IsNullPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumberPipe", function() { return IsNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObjectPipe", function() { return IsObjectPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStringPipe", function() { return IsStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUndefinedPipe", function() { return IsUndefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesPipe", function() { return BytesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeilPipe", function() { return CeilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPipe", function() { return FloorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreesPipe", function() { return DegreesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiansPipe", function() { return RadiansPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomPipe", function() { return RandomPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqrtPipe", function() { return SqrtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowPipe", function() { return PowPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsPipe", function() { return AbsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinalPipe", function() { return OrdinalPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToArrayPipe", function() { return ToArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultsPipe", function() { return DefaultsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPadPipe", function() { return LeftPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPipe", function() { return MatchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadPipe", function() { return PadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPadPipe", function() { return RightPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPipe", function() { return SplitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPipe", function() { return TestPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewlinesPipe", function() { return NewlinesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpperFirstPipe", function() { return UpperFirstPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePipe", function() { return TemplatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeURIPipe", function() { return EncodeURIPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeURIComponentPipe", function() { return EncodeURIComponentPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeURIPipe", function() { return DecodeURIPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeURIComponentPipe", function() { return DecodeURIComponentPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatPipe", function() { return RepeatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function() { return StripTagsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatinizePipe", function() { return LatinizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPipe", function() { return WrapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithPipe", function() { return WithPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReverseStrPipe", function() { return ReverseStrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}
/**
 * @param {?} value
 * @return {?}
 */
function isNull(value) {
    return value === null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return typeof value === 'number';
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
// Not strict positive
/**
 * @param {?} value
 * @return {?}
 */
function isPositive(value) {
    return value >= 0;
}
/**
 * @param {?} value
 * @return {?}
 */
function isInteger(value) {
    // No rest, is an integer
    return (value % 1) === 0;
}
/**
 * @param {?} value
 * @return {?}
 */
function isNil(value) {
    return value === null || typeof (value) === 'undefined';
}
/**
 * @param {?} value
 * @return {?}
 */
function isString(value) {
    return typeof value === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return value !== null && typeof value === 'object';
}
/**
 * @param {?} value
 * @return {?}
 */
function isArray(value) {
    return Array.isArray(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * @param {?} value
 * @param {?} decimal
 * @return {?}
 */
function toDecimal(value, decimal) {
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
/**
 * @param {?} value
 * @return {?}
 */
function upperFirst(value) {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
}
/**
 * @param {?} method
 * @return {?}
 */
function createRound(method) {
    // <any>Math to suppress error
    /** @type {?} */
    var func = ((/** @type {?} */ (Math)))[method];
    return function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (typeof value === 'string') {
            throw new TypeError('Rounding method needs a number');
        }
        if (typeof precision !== 'number' || isNaN(precision)) {
            precision = 0;
        }
        if (precision) {
            /** @type {?} */
            var pair = (value + "e").split('e');
            /** @type {?} */
            var val = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (val + "e").split('e');
            return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(value);
    };
}
/**
 * @param {?} str
 * @param {?=} len
 * @param {?=} ch
 * @return {?}
 */
function leftPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    /** @type {?} */
    var i = -1;
    /** @type {?} */
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str = ch + str;
    }
    return str;
}
/**
 * @param {?} str
 * @param {?=} len
 * @param {?=} ch
 * @return {?}
 */
function rightPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    /** @type {?} */
    var i = -1;
    /** @type {?} */
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str += ch;
    }
    return str;
}
/**
 * @param {?} value
 * @return {?}
 */
function toString(value) {
    return "" + value;
}
/**
 * @param {?} str
 * @param {?=} len
 * @param {?=} ch
 * @return {?}
 */
function pad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    /** @type {?} */
    var i = -1;
    /** @type {?} */
    var length = len - str.length;
    /** @type {?} */
    var left = true;
    while (++i < length) {
        /** @type {?} */
        var l = (str.length + ch.length <= len) ? (str.length + ch.length) : (str.length + 1);
        if (left) {
            str = leftPad(str, l, ch);
        }
        else {
            str = rightPad(str, l, ch);
        }
        left = !left;
    }
    return str;
}
/**
 * @param {?} input
 * @param {?=} index
 * @return {?}
 */
function flatten(input, index) {
    if (index === void 0) { index = 0; }
    if (index >= input.length) {
        return input;
    }
    if (isArray(input[index])) {
        return flatten(input.slice(0, index).concat(input[index], input.slice(index + 1)), index);
    }
    return flatten(input, index + 1);
}
/**
 * @param {?} value
 * @param {?} key
 * @return {?}
 */
function getProperty(value, key) {
    var e_1, _a;
    if (isNil(value) || !isObject(value)) {
        return undefined;
    }
    /** @type {?} */
    var keys = key.split('.');
    /** @type {?} */
    var result = value[(/** @type {?} */ (keys.shift()))];
    try {
        for (var keys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key_1 = keys_1_1.value;
            if (isNil(result) || !isObject(result)) {
                return undefined;
            }
            result = result[key_1];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
/**
 * @param {?} input
 * @param {?=} initial
 * @return {?}
 */
function sum(input, initial) {
    if (initial === void 0) { initial = 0; }
    return input.reduce(function (previous, current) { return previous + current; }, initial);
}
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
/**
 * @param {?} input
 * @return {?}
 */
function shuffle(input) {
    if (!isArray(input)) {
        return input;
    }
    /** @type {?} */
    var copy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input);
    for (var i = copy.length; i; --i) {
        /** @type {?} */
        var j = Math.floor(Math.random() * i);
        /** @type {?} */
        var x = copy[i - 1];
        copy[i - 1] = copy[j];
        copy[j] = x;
    }
    return copy;
}
/**
 * @param {?} collection
 * @param {?} value
 * @return {?}
 */
function deepIndexOf(collection, value) {
    /** @type {?} */
    var index = -1;
    /** @type {?} */
    var length = collection.length;
    while (++index < length) {
        if (deepEqual(value, collection[index])) {
            return index;
        }
    }
    return -1;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!(typeof a === 'object' && typeof b === 'object')) {
        return a === b;
    }
    /** @type {?} */
    var keysA = Object.keys(a);
    /** @type {?} */
    var keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    /** @type {?} */
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i = 0; i < keysA.length; i++) {
        /** @type {?} */
        var key = keysA[i];
        if (!hasOwn.call(b, keysA[i]) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} object
 * @return {?}
 */
function isDeepObject(object) {
    return object.__isDeepObject__;
}
/**
 * @param {?} object
 * @return {?}
 */
function wrapDeep(object) {
    return new DeepWrapper(object);
}
/**
 * @param {?} object
 * @return {?}
 */
function unwrapDeep(object) {
    if (isDeepObject(object)) {
        return object.data;
    }
    return object;
}
var DeepWrapper = /** @class */ (function () {
    function DeepWrapper(data) {
        this.data = data;
        this.__isDeepObject__ = true;
    }
    return DeepWrapper;
}());
/**
 * @param {?} input
 * @return {?}
 */
function count(input) {
    if (!isArray(input) && !isObject(input) && !isString(input)) {
        return input;
    }
    if (isObject(input)) {
        return Object.keys(input).map(function (value) { return input[value]; }).length;
    }
    return input.length;
}
/**
 * @param {?} input
 * @return {?}
 */
function empty(input) {
    if (!isArray(input)) {
        return input;
    }
    return input.length === 0;
}
/**
 * @param {?} input
 * @param {?} predicate
 * @return {?}
 */
function every(input, predicate) {
    if (!isArray(input) || !predicate) {
        return input;
    }
    /** @type {?} */
    var result = true;
    /** @type {?} */
    var i = -1;
    while (++i < input.length && result) {
        result = predicate(input[i], i, input);
    }
    return result;
}
/**
 * @param {?} input
 * @param {?} predicate
 * @return {?}
 */
function takeUntil(input, predicate) {
    /** @type {?} */
    var i = -1;
    /** @type {?} */
    var result = [];
    while (++i < input.length && !predicate(input[i], i, input)) {
        result[i] = input[i];
    }
    return result;
}
/**
 * @param {?} input
 * @param {?} predicate
 * @return {?}
 */
function takeWhile(input, predicate) {
    return takeUntil(input, function (item, index, collection) { return !predicate(item, index, collection); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    /**
     * @param {?} input
     * @param {?} prop
     * @return {?}
     */
    GroupByPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} prop
     * @return {?}
     */
    function (input, prop) {
        var e_1, _a;
        if (!isArray(input)) {
            return input;
        }
        /** @type {?} */
        var arr = {};
        try {
            for (var input_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
                var value = input_1_1.value;
                /** @type {?} */
                var field = getProperty(value, prop);
                if (isUndefined(arr[field])) {
                    arr[field] = [];
                }
                arr[field].push(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Object.keys(arr).map(function (key) { return ({ key: key, 'value': arr[key] }); });
    };
    GroupByPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'groupBy'
                },] }
    ];
    return GroupByPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MaxPipe = /** @class */ (function () {
    function MaxPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    MaxPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        if (input.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var max = input[0];
        input.forEach(function (value) {
            if (max < value) {
                max = value;
            }
        });
        return max;
    };
    MaxPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'max'
                },] }
    ];
    return MaxPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MeanPipe = /** @class */ (function () {
    function MeanPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    MeanPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        /** @type {?} */
        var count$$1 = input.length;
        if (count$$1 === 0) {
            return undefined;
        }
        return sum(input) / count$$1;
    };
    MeanPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'mean'
                },] }
    ];
    return MeanPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MinPipe = /** @class */ (function () {
    function MinPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    MinPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        if (input.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var min = input[0];
        input.forEach(function (value) {
            if (min > value) {
                min = value;
            }
        });
        return min;
    };
    MinPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'min'
                },] }
    ];
    return MinPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SumPipe = /** @class */ (function () {
    function SumPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    SumPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return !isArray(input) ? input : sum(input);
    };
    SumPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'sum' },] }
    ];
    return SumPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgAggregatePipesModule = /** @class */ (function () {
    function NgAggregatePipesModule() {
    }
    NgAggregatePipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        GroupByPipe,
                        MaxPipe,
                        MeanPipe,
                        MinPipe,
                        SumPipe
                    ],
                    exports: [
                        GroupByPipe,
                        MaxPipe,
                        MeanPipe,
                        MinPipe,
                        SumPipe
                    ]
                },] }
    ];
    return NgAggregatePipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EmptyPipe = /** @class */ (function () {
    function EmptyPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    EmptyPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return empty(input);
    };
    EmptyPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'empty'
                },] }
    ];
    return EmptyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HeadPipe = /** @class */ (function () {
    function HeadPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    HeadPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        // Will return undefined if length is 0
        return input[0];
    };
    HeadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'head'
                },] }
    ];
    return HeadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InitialPipe = /** @class */ (function () {
    function InitialPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    InitialPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        return input.slice(0, input.length - 1);
    };
    InitialPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'initial'
                },] }
    ];
    return InitialPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LastPipe = /** @class */ (function () {
    function LastPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    LastPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        // Returns undefined if empty
        return input[input.length - 1];
    };
    LastPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'last'
                },] }
    ];
    return LastPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} character
     * @return {?}
     */
    JoinPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} character
     * @return {?}
     */
    function (input, character) {
        if (character === void 0) { character = ''; }
        if (!isArray(input)) {
            return input;
        }
        return input.join(character);
    };
    JoinPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'join'
                },] }
    ];
    return JoinPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TailPipe = /** @class */ (function () {
    function TailPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    TailPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        return input.slice(1, input.length);
    };
    TailPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'tail'
                },] }
    ];
    return TailPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UniqPipe = /** @class */ (function () {
    function UniqPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    UniqPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input) && !isDeepObject(input)) {
            return input;
        }
        if (isDeepObject(input)) {
            /** @type {?} */
            var unwrappedInput_1 = unwrapDeep(input);
            if (!isArray(unwrappedInput_1)) {
                return unwrappedInput_1;
            }
            return unwrappedInput_1.filter(function (value, index) {
                return deepIndexOf(unwrappedInput_1, value) === index;
            });
        }
        return input.filter(function (value, index) { return input.indexOf(value) === index; });
    };
    UniqPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'uniq'
                },] }
    ];
    return UniqPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WithoutPipe = /** @class */ (function () {
    function WithoutPipe() {
    }
    /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    WithoutPipe.prototype.transform = /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(input) && !isDeepObject(input)) {
            return input;
        }
        if (isDeepObject(input)) {
            /** @type {?} */
            var unwrappedInput = unwrapDeep(input);
            if (!isArray(unwrappedInput)) {
                return unwrappedInput;
            }
            return unwrappedInput.filter(function (value) {
                return deepIndexOf(args, value) === -1;
            });
        }
        return input.filter(function (value) { return args.indexOf(value) === -1; });
    };
    WithoutPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'without'
                },] }
    ];
    return WithoutPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MapPipe = /** @class */ (function () {
    function MapPipe() {
    }
    /**
     * @param {?} input
     * @param {?} fn
     * @return {?}
     */
    MapPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} fn
     * @return {?}
     */
    function (input, fn) {
        if (!isArray(input) || !fn) {
            return input;
        }
        return input.map(fn);
    };
    MapPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'map'
                },] }
    ];
    return MapPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WherePipe = /** @class */ (function () {
    function WherePipe() {
    }
    /**
    * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
    */
    /**
     * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
     * @param {?} input
     * @param {?} fn
     * @return {?}
     */
    WherePipe.prototype.transform = /**
     * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
     * @param {?} input
     * @param {?} fn
     * @return {?}
     */
    function (input, fn) {
        if (!isArray(input)) {
            return input;
        }
        if (isFunction(fn)) {
            return input.filter(fn);
        }
        else if (isArray(fn)) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(fn, 2), key_1 = _a[0], value_1 = _a[1];
            return input.filter(function (item) { return getProperty(item, key_1) === value_1; });
        }
        else if (fn) {
            return input.filter(function (item) { return item === fn; });
        }
        else {
            return input;
        }
    };
    WherePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'where'
                },] }
    ];
    return WherePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FirstOrDefaultPipe = /** @class */ (function () {
    function FirstOrDefaultPipe() {
    }
    /**
     * @param {?} input
     * @param {?} predicate
     * @param {?=} defaultValue
     * @return {?}
     */
    FirstOrDefaultPipe.find = /**
     * @param {?} input
     * @param {?} predicate
     * @param {?=} defaultValue
     * @return {?}
     */
    function (input, predicate, defaultValue) {
        /** @type {?} */
        var found = false;
        /** @type {?} */
        var result;
        /** @type {?} */
        var i = -1;
        while (!found && ++i < input.length) {
            found = predicate(input[i], i, input);
        }
        if (found) {
            result = input[i];
        }
        if (typeof result === 'undefined' && typeof defaultValue !== 'undefined') {
            result = defaultValue;
        }
        return result;
    };
    /**
     * @param {?} input
     * @param {?} predicate
     * @param {?=} defaultValue
     * @return {?}
     */
    FirstOrDefaultPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} predicate
     * @param {?=} defaultValue
     * @return {?}
     */
    function (input, predicate, defaultValue) {
        if (!isArray(input)) {
            return input;
        }
        if (isFunction(predicate)) {
            return FirstOrDefaultPipe.find(input, (/** @type {?} */ (predicate)), defaultValue);
        }
        else if (isArray(predicate)) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])((/** @type {?} */ (predicate)), 2), key_1 = _a[0], value_1 = _a[1];
            return FirstOrDefaultPipe.find(input, function (item) { return getProperty(item, key_1) === value_1; }, defaultValue);
        }
        else if (predicate) {
            return FirstOrDefaultPipe.find(input, function (item) { return item === (/** @type {?} */ (predicate)); }, defaultValue);
        }
        else {
            return input;
        }
    };
    FirstOrDefaultPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'firstOrDefault'
                },] }
    ];
    return FirstOrDefaultPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RangePipe = /** @class */ (function () {
    function RangePipe() {
    }
    /**
     * @param {?} _input
     * @param {?=} size
     * @param {?=} start
     * @param {?=} step
     * @return {?}
     */
    RangePipe.prototype.transform = /**
     * @param {?} _input
     * @param {?=} size
     * @param {?=} start
     * @param {?=} step
     * @return {?}
     */
    function (_input, size, start, step) {
        if (size === void 0) { size = 0; }
        if (start === void 0) { start = 1; }
        if (step === void 0) { step = 1; }
        /** @type {?} */
        var range = [];
        for (var length_1 = 0; length_1 < size; ++length_1) {
            range.push(start);
            start += step;
        }
        return range;
    };
    RangePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'range'
                },] }
    ];
    return RangePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PluckPipe = /** @class */ (function () {
    function PluckPipe() {
    }
    /**
     * @param {?} input
     * @param {?} key
     * @return {?}
     */
    PluckPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} key
     * @return {?}
     */
    function (input, key) {
        if (!isArray(input) || !key) {
            return input;
        }
        return input.map(function (value) {
            return getProperty(value, key);
        });
    };
    PluckPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'pluck'
                },] }
    ];
    return PluckPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    ReversePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input).reverse();
    };
    ReversePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'reverse'
                },] }
    ];
    return ReversePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderByPipe._orderBy = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (a instanceof Date && b instanceof Date) {
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }
        /** @type {?} */
        var floatA = parseFloat(a);
        /** @type {?} */
        var floatB = parseFloat(b);
        if (typeof a === 'string' && typeof b === 'string' && (isNaN(floatA) || isNaN(floatB))) {
            /** @type {?} */
            var lowerA = a.toLowerCase();
            /** @type {?} */
            var lowerB = b.toLowerCase();
            return (lowerA < lowerB) ? -1 : (lowerA > lowerB) ? 1 : 0;
        }
        return (floatA < floatB) ? -1 : (floatA > floatB) ? 1 : 0;
    };
    /**
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */
    OrderByPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */
    function (input, config) {
        if (config === void 0) { config = '+'; }
        if (!isArray(input)) {
            return input;
        }
        /** @type {?} */
        var configIsArray = isArray(config);
        // If config === 'param' OR ['param'] 
        if (!configIsArray || (configIsArray && config.length === 1)) {
            /** @type {?} */
            var propertyToCheck = configIsArray ? config[0] : config;
            /** @type {?} */
            var first = propertyToCheck.substr(0, 1);
            /** @type {?} */
            var desc_1 = (first === '-');
            // Basic array (if only + or - is present)
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input).sort(function (a, b) {
                    /** @type {?} */
                    var comparator = OrderByPipe._orderBy(a, b);
                    return desc_1 ? -comparator : comparator;
                });
            }
            else {
                // If contains + or -, substring the property
                /** @type {?} */
                var property_1 = (first === '+' || desc_1) ? propertyToCheck.substr(1) : propertyToCheck;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input).sort(function (a, b) {
                    /** @type {?} */
                    var comparator = OrderByPipe._orderBy(a[property_1], b[property_1]);
                    return desc_1 ? -comparator : comparator;
                });
            }
        }
        else { // Config is an array of property
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input).sort(function (a, b) {
                for (var i = 0; i < config.length; ++i) {
                    /** @type {?} */
                    var first = config[i].substr(0, 1);
                    /** @type {?} */
                    var desc = (first === '-');
                    /** @type {?} */
                    var property = (first === '+' || desc) ? config[i].substr(1) : config[i];
                    /** @type {?} */
                    var comparator = OrderByPipe._orderBy(a[property], b[property]);
                    /** @type {?} */
                    var comparison = desc ? -comparator : comparator;
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0;
            });
        }
    };
    OrderByPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'orderBy'
                },] }
    ];
    return OrderByPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CountPipe = /** @class */ (function () {
    function CountPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    CountPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return count(input);
    };
    CountPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'count'
                },] }
    ];
    return CountPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SomePipe = /** @class */ (function () {
    function SomePipe() {
    }
    /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    SomePipe.prototype.transform = /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    function (input, predicate) {
        if (!isArray(input) || !predicate) {
            return input;
        }
        /** @type {?} */
        var result = false;
        /** @type {?} */
        var i = -1;
        while (++i < input.length && !result) {
            result = predicate(input[i], i, input);
        }
        return result;
    };
    SomePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'some'
                },] }
    ];
    return SomePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EveryPipe = /** @class */ (function () {
    function EveryPipe() {
    }
    /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    EveryPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    function (input, predicate) {
        return every(input, predicate);
    };
    EveryPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'every'
                },] }
    ];
    return EveryPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ShufflePipe = /** @class */ (function () {
    function ShufflePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    ShufflePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return shuffle(input);
    };
    ShufflePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'shuffle'
                },] }
    ];
    return ShufflePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TakePipe = /** @class */ (function () {
    function TakePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} quantity
     * @return {?}
     */
    TakePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} quantity
     * @return {?}
     */
    function (input, quantity) {
        if (!isArray(input)) {
            return input;
        }
        return input.slice(0, quantity || 1);
    };
    TakePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'take'
                },] }
    ];
    return TakePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DropPipe = /** @class */ (function () {
    function DropPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} quantity
     * @return {?}
     */
    DropPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} quantity
     * @return {?}
     */
    function (input, quantity) {
        if (!isArray(input)) {
            return input;
        }
        return input.slice(quantity || 1, input.lenth);
    };
    DropPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'drop'
                },] }
    ];
    return DropPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DeepPipe = /** @class */ (function () {
    function DeepPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DeepPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (isDeepObject(value)) {
            return value;
        }
        return wrapDeep(value);
    };
    DeepPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'deep'
                },] }
    ];
    return DeepPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ChunkPipe = /** @class */ (function () {
    function ChunkPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} size
     * @return {?}
     */
    ChunkPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} size
     * @return {?}
     */
    function (input, size) {
        if (size === void 0) { size = 1; }
        if (!isArray(input)) {
            return input;
        }
        return [].concat.apply([], input.map(function (_elem, i) {
            return i % size ? [] : [input.slice(i, i + size)];
        }));
    };
    ChunkPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'chunk'
                },] }
    ];
    return ChunkPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FlattenPipe = /** @class */ (function () {
    function FlattenPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    FlattenPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        /** @type {?} */
        var isDeep = isDeepObject(input);
        if (!isArray(input) && !isDeep) {
            return input;
        }
        if (isDeep) {
            /** @type {?} */
            var unwrapped = unwrapDeep(input);
            if (!isArray(unwrapped)) {
                return unwrapped;
            }
            return flatten(unwrapped, 0);
        }
        return [].concat.apply([], input);
    };
    FlattenPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'flatten' },] }
    ];
    return FlattenPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IntersectionPipe = /** @class */ (function () {
    function IntersectionPipe() {
    }
    /**
     * @param {?=} a
     * @param {?=} b
     * @return {?}
     */
    IntersectionPipe.prototype.transform = /**
     * @param {?=} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        if ((!isArray(a) && !isDeepObject(a)) || !isArray(b)) {
            return [];
        }
        if (isDeepObject(a)) {
            /** @type {?} */
            var unwrapped = unwrapDeep(a);
            if (!isArray(unwrapped)) {
                return [];
            }
            return unwrapped.reduce(function (intersection, value) { return intersection.concat((deepIndexOf(b, value) !== -1 && deepIndexOf(intersection, value) === -1) ? value : []); }, []);
        }
        return a.reduce(function (intersection, value) { return intersection.concat((b.indexOf(value) !== -1 && intersection.indexOf(value) === -1) ? value : []); }, []);
    };
    IntersectionPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'intersection'
                },] }
    ];
    return IntersectionPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UnionPipe = /** @class */ (function () {
    function UnionPipe() {
    }
    /**
     * @param {?=} a
     * @param {?=} b
     * @return {?}
     */
    UnionPipe.prototype.transform = /**
     * @param {?=} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        if ((!isArray(a) && !isDeepObject(a)) || !isArray(b)) {
            return [];
        }
        if (isDeepObject(a)) {
            /** @type {?} */
            var unwrapped = unwrapDeep(a);
            if (!isArray(unwrapped)) {
                return [];
            }
            return []
                .concat(unwrapped)
                .concat(b)
                .filter(function (value, index, input) { return deepIndexOf(input, value) === index; });
        }
        return [].concat(a).concat(b).filter(function (value, index, input) { return input.indexOf(value) === index; });
    };
    UnionPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'union'
                },] }
    ];
    return UnionPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TakeWhilePipe = /** @class */ (function () {
    function TakeWhilePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} predicate
     * @return {?}
     */
    TakeWhilePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} predicate
     * @return {?}
     */
    function (input, predicate) {
        if (!isArray(input) || isNil(predicate)) {
            return input;
        }
        return takeWhile(input, predicate);
    };
    TakeWhilePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'takeWhile'
                },] }
    ];
    return TakeWhilePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TakeUntilPipe = /** @class */ (function () {
    function TakeUntilPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} predicate
     * @return {?}
     */
    TakeUntilPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} predicate
     * @return {?}
     */
    function (input, predicate) {
        if (!isArray(input) || isNil(predicate)) {
            return input;
        }
        return takeUntil(input, predicate);
    };
    TakeUntilPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'takeUntil'
                },] }
    ];
    return TakeUntilPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgArrayPipesModule = /** @class */ (function () {
    function NgArrayPipesModule() {
    }
    NgArrayPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        EmptyPipe,
                        HeadPipe,
                        InitialPipe,
                        LastPipe,
                        JoinPipe,
                        TailPipe,
                        UniqPipe,
                        WithoutPipe,
                        MapPipe,
                        WherePipe,
                        RangePipe,
                        PluckPipe,
                        ReversePipe,
                        OrderByPipe,
                        CountPipe,
                        SomePipe,
                        EveryPipe,
                        ShufflePipe,
                        TakePipe,
                        DropPipe,
                        DeepPipe,
                        ChunkPipe,
                        FlattenPipe,
                        FirstOrDefaultPipe,
                        IntersectionPipe,
                        UnionPipe,
                        TakeWhilePipe,
                        TakeUntilPipe
                    ],
                    exports: [
                        EmptyPipe,
                        HeadPipe,
                        InitialPipe,
                        LastPipe,
                        JoinPipe,
                        TailPipe,
                        UniqPipe,
                        WithoutPipe,
                        MapPipe,
                        WherePipe,
                        RangePipe,
                        PluckPipe,
                        ReversePipe,
                        OrderByPipe,
                        CountPipe,
                        SomePipe,
                        EveryPipe,
                        ShufflePipe,
                        TakePipe,
                        DropPipe,
                        DeepPipe,
                        ChunkPipe,
                        FlattenPipe,
                        FirstOrDefaultPipe,
                        IntersectionPipe,
                        UnionPipe,
                        TakeWhilePipe,
                        TakeUntilPipe
                    ]
                },] }
    ];
    return NgArrayPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IsGreaterPipe = /** @class */ (function () {
    function IsGreaterPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsGreaterPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first > second;
    };
    IsGreaterPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'greater'
                },] }
    ];
    return IsGreaterPipe;
}());
var IsGreaterOrEqualPipe = /** @class */ (function () {
    function IsGreaterOrEqualPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsGreaterOrEqualPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first >= second;
    };
    IsGreaterOrEqualPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'greaterOrEqual'
                },] }
    ];
    return IsGreaterOrEqualPipe;
}());
var IsLessPipe = /** @class */ (function () {
    function IsLessPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsLessPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first < second;
    };
    IsLessPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'less'
                },] }
    ];
    return IsLessPipe;
}());
var IsLessOrEqualPipe = /** @class */ (function () {
    function IsLessOrEqualPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsLessOrEqualPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first <= second;
    };
    IsLessOrEqualPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'lessOrEqual'
                },] }
    ];
    return IsLessOrEqualPipe;
}());
var IsEqualPipe = /** @class */ (function () {
    function IsEqualPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsEqualPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first == second;
    };
    IsEqualPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'equal'
                },] }
    ];
    return IsEqualPipe;
}());
var IsNotEqualPipe = /** @class */ (function () {
    function IsNotEqualPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsNotEqualPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first != second;
    };
    IsNotEqualPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'notEqual'
                },] }
    ];
    return IsNotEqualPipe;
}());
var IsIdenticalPipe = /** @class */ (function () {
    function IsIdenticalPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsIdenticalPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first === second;
    };
    IsIdenticalPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'identical'
                },] }
    ];
    return IsIdenticalPipe;
}());
var IsNotIdenticalPipe = /** @class */ (function () {
    function IsNotIdenticalPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsNotIdenticalPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first !== second;
    };
    IsNotIdenticalPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'notIdentical'
                },] }
    ];
    return IsNotIdenticalPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IsNullPipe = /** @class */ (function () {
    function IsNullPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsNullPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isNull(value);
    };
    IsNullPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isNull'
                },] }
    ];
    return IsNullPipe;
}());
var IsUndefinedPipe = /** @class */ (function () {
    function IsUndefinedPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsUndefinedPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isUndefined(value);
    };
    IsUndefinedPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isUndefined'
                },] }
    ];
    return IsUndefinedPipe;
}());
var IsNilPipe = /** @class */ (function () {
    function IsNilPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsNilPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isNil(value);
    };
    IsNilPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isNil'
                },] }
    ];
    return IsNilPipe;
}());
var IsFunctionPipe = /** @class */ (function () {
    function IsFunctionPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsFunctionPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isFunction(value);
    };
    IsFunctionPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isFunction'
                },] }
    ];
    return IsFunctionPipe;
}());
var IsNumberPipe = /** @class */ (function () {
    function IsNumberPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsNumberPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isNumber(value);
    };
    IsNumberPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isNumber'
                },] }
    ];
    return IsNumberPipe;
}());
var IsStringPipe = /** @class */ (function () {
    function IsStringPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsStringPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isString(value);
    };
    IsStringPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isString'
                },] }
    ];
    return IsStringPipe;
}());
var IsArrayPipe = /** @class */ (function () {
    function IsArrayPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsArrayPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isArray(value);
    };
    IsArrayPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isArray'
                },] }
    ];
    return IsArrayPipe;
}());
var IsObjectPipe = /** @class */ (function () {
    function IsObjectPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsObjectPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isObject(value);
    };
    IsObjectPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isObject'
                },] }
    ];
    return IsObjectPipe;
}());
var IsDefinedPipe = /** @class */ (function () {
    function IsDefinedPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsDefinedPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return !isUndefined(value);
    };
    IsDefinedPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isDefined'
                },] }
    ];
    return IsDefinedPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgBooleanPipesModule = /** @class */ (function () {
    function NgBooleanPipesModule() {
    }
    NgBooleanPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        IsGreaterPipe,
                        IsGreaterOrEqualPipe,
                        IsLessPipe,
                        IsLessOrEqualPipe,
                        IsEqualPipe,
                        IsNotEqualPipe,
                        IsIdenticalPipe,
                        IsNotIdenticalPipe,
                        IsNilPipe,
                        IsNullPipe,
                        IsUndefinedPipe,
                        IsFunctionPipe,
                        IsNumberPipe,
                        IsStringPipe,
                        IsArrayPipe,
                        IsObjectPipe,
                        IsDefinedPipe
                    ],
                    exports: [
                        IsGreaterPipe,
                        IsGreaterOrEqualPipe,
                        IsLessPipe,
                        IsLessOrEqualPipe,
                        IsEqualPipe,
                        IsNotEqualPipe,
                        IsIdenticalPipe,
                        IsNotIdenticalPipe,
                        IsNilPipe,
                        IsNullPipe,
                        IsUndefinedPipe,
                        IsFunctionPipe,
                        IsNumberPipe,
                        IsStringPipe,
                        IsArrayPipe,
                        IsObjectPipe,
                        IsDefinedPipe
                    ]
                },] }
    ];
    return NgBooleanPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BytesPipe = /** @class */ (function () {
    function BytesPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} decimal
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    BytesPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} decimal
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    function (input, decimal, from, to) {
        if (decimal === void 0) { decimal = 0; }
        if (from === void 0) { from = 'B'; }
        if (!(isNumberFinite(input) &&
            isNumberFinite(decimal) &&
            isInteger(decimal) &&
            isPositive(decimal))) {
            return input;
        }
        /** @type {?} */
        var bytes = input;
        /** @type {?} */
        var unit = from;
        while (unit !== 'B') {
            bytes *= 1024;
            unit = (/** @type {?} */ (BytesPipe.formats[unit].prev));
        }
        if (to) {
            /** @type {?} */
            var format = BytesPipe.formats[to];
            /** @type {?} */
            var result = toDecimal(BytesPipe.calculateResult(format, bytes), decimal);
            return BytesPipe.formatResult(result, to);
        }
        for (var key in BytesPipe.formats) {
            /** @type {?} */
            var format = BytesPipe.formats[key];
            if (bytes < format.max) {
                /** @type {?} */
                var result = toDecimal(BytesPipe.calculateResult(format, bytes), decimal);
                return BytesPipe.formatResult(result, key);
            }
        }
    };
    /**
     * @param {?} result
     * @param {?} unit
     * @return {?}
     */
    BytesPipe.formatResult = /**
     * @param {?} result
     * @param {?} unit
     * @return {?}
     */
    function (result, unit) {
        return result + " " + unit;
    };
    /**
     * @param {?} format
     * @param {?} bytes
     * @return {?}
     */
    BytesPipe.calculateResult = /**
     * @param {?} format
     * @param {?} bytes
     * @return {?}
     */
    function (format, bytes) {
        /** @type {?} */
        var prev = format.prev ? BytesPipe.formats[format.prev] : undefined;
        return prev ? bytes / prev.max : bytes;
    };
    BytesPipe.formats = {
        'B': { max: 1024 },
        'kB': { max: Math.pow(1024, 2), prev: 'B' },
        'KB': { max: Math.pow(1024, 2), prev: 'B' },
        // Backward compatible
        'MB': { max: Math.pow(1024, 3), prev: 'kB' },
        'GB': { max: Math.pow(1024, 4), prev: 'MB' },
        'TB': { max: Number.MAX_SAFE_INTEGER, prev: 'GB' }
    };
    BytesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'bytes'
                },] }
    ];
    return BytesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CeilPipe = /** @class */ (function () {
    function CeilPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    CeilPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (isString(precision)) {
            precision = parseInt(precision);
        }
        return createRound('ceil')(value, precision);
    };
    CeilPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'ceil'
                },] }
    ];
    return CeilPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FloorPipe = /** @class */ (function () {
    function FloorPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    FloorPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (isString(precision)) {
            precision = parseInt(precision);
        }
        return createRound('floor')(value, precision);
    };
    FloorPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'floor'
                },] }
    ];
    return FloorPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    RoundPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (isString(precision)) {
            precision = parseInt(precision);
        }
        return createRound('round')(value, precision);
    };
    RoundPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'round'
                },] }
    ];
    return RoundPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DegreesPipe = /** @class */ (function () {
    function DegreesPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    DegreesPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return (input * 180) / Math.PI;
    };
    DegreesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'degrees'
                },] }
    ];
    return DegreesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RadiansPipe = /** @class */ (function () {
    function RadiansPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    RadiansPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return (input * Math.PI) / 180;
    };
    RadiansPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'radians'
                },] }
    ];
    return RadiansPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RandomPipe = /** @class */ (function () {
    function RandomPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    RandomPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    function (input, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        if (!isNumberFinite(min) || !isNumberFinite(max)) {
            return input;
        }
        if (min > max) {
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min;
    };
    RandomPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'random'
                },] }
    ];
    return RandomPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SqrtPipe = /** @class */ (function () {
    function SqrtPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    SqrtPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return Math.sqrt(input);
    };
    SqrtPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'sqrt'
                },] }
    ];
    return SqrtPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PowPipe = /** @class */ (function () {
    function PowPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} power
     * @return {?}
     */
    PowPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} power
     * @return {?}
     */
    function (input, power) {
        if (power === void 0) { power = 2; }
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return Math.pow(input, power);
    };
    PowPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'pow'
                },] }
    ];
    return PowPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AbsPipe = /** @class */ (function () {
    function AbsPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    AbsPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return Math.abs(input);
    };
    AbsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'abs'
                },] }
    ];
    return AbsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OrdinalPipe = /** @class */ (function () {
    function OrdinalPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    OrdinalPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        /** @type {?} */
        var cardinal = input.toString().charAt(input.toString().length - 1);
        switch (cardinal) {
            case '1':
                return input + 'st';
            case '2':
                return input + 'nd';
            case '3':
                return input + 'rd';
            default:
                return input + 'th';
        }
    };
    OrdinalPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'ordinal'
                },] }
    ];
    return OrdinalPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgMathPipesModule = /** @class */ (function () {
    function NgMathPipesModule() {
    }
    NgMathPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        BytesPipe,
                        CeilPipe,
                        FloorPipe,
                        RoundPipe,
                        DegreesPipe,
                        RadiansPipe,
                        RandomPipe,
                        SqrtPipe,
                        PowPipe,
                        AbsPipe,
                        OrdinalPipe
                    ],
                    exports: [
                        BytesPipe,
                        CeilPipe,
                        FloorPipe,
                        RoundPipe,
                        DegreesPipe,
                        RadiansPipe,
                        RandomPipe,
                        SqrtPipe,
                        PowPipe,
                        AbsPipe,
                        OrdinalPipe
                    ]
                },] }
    ];
    return NgMathPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    KeysPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isObject(input)) {
            return input;
        }
        return Object.keys(input);
    };
    KeysPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'keys' },] }
    ];
    return KeysPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToArrayPipe = /** @class */ (function () {
    function ToArrayPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    ToArrayPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isObject(input)) {
            return input;
        }
        return Object.keys(input).map(function (value) { return input[value]; });
    };
    ToArrayPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'toArray' },] }
    ];
    return ToArrayPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DefaultsPipe = /** @class */ (function () {
    function DefaultsPipe() {
    }
    /**
     * @param {?} input
     * @param {?} defaults
     * @return {?}
     */
    DefaultsPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} defaults
     * @return {?}
     */
    function (input, defaults) {
        if (!isObject(defaults)) {
            return input;
        }
        if (isNil(input)) {
            return defaults;
        }
        if (isArray(input)) {
            return input.map(function (item) {
                if (isObject(item)) {
                    return Object.assign({}, defaults, item);
                }
                if (isNil(item)) {
                    return defaults;
                }
                return item;
            });
        }
        if (isObject(input)) {
            return Object.assign({}, defaults, input);
        }
        return input;
    };
    DefaultsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'defaults' },] }
    ];
    return DefaultsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgObjectPipesModule = /** @class */ (function () {
    function NgObjectPipesModule() {
    }
    NgObjectPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        KeysPipe,
                        ToArrayPipe,
                        DefaultsPipe
                    ],
                    exports: [
                        KeysPipe,
                        ToArrayPipe,
                        DefaultsPipe
                    ]
                },] }
    ];
    return NgObjectPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LeftPadPipe = /** @class */ (function () {
    function LeftPadPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    LeftPadPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    function (input, length, character) {
        if (length === void 0) { length = 0; }
        if (character === void 0) { character = ' '; }
        if (!isString(input)) {
            return input;
        }
        return leftPad(input, length, character);
    };
    LeftPadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'leftpad'
                },] }
    ];
    return LeftPadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatchPipe = /** @class */ (function () {
    function MatchPipe() {
    }
    /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} flag
     * @return {?}
     */
    MatchPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} flag
     * @return {?}
     */
    function (input, pattern, flag) {
        if (!isString(input)) {
            return input;
        }
        /** @type {?} */
        var regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);
        return input.match(regexp);
    };
    MatchPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'match'
                },] }
    ];
    return MatchPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PadPipe = /** @class */ (function () {
    function PadPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    PadPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    function (input, length, character) {
        if (length === void 0) { length = 0; }
        if (character === void 0) { character = ' '; }
        if (!isString(input)) {
            return input;
        }
        return pad(input, length, character);
    };
    PadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'pad'
                },] }
    ];
    return PadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReplacePipe = /** @class */ (function () {
    function ReplacePipe() {
    }
    /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} replacement
     * @return {?}
     */
    ReplacePipe.prototype.transform = /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} replacement
     * @return {?}
     */
    function (input, pattern, replacement) {
        if (!isString(input) || isUndefined(pattern) || isUndefined(replacement)) {
            return input;
        }
        return input.replace(pattern, replacement);
    };
    ReplacePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'replace'
                },] }
    ];
    return ReplacePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RightPadPipe = /** @class */ (function () {
    function RightPadPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    RightPadPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    function (input, length, character) {
        if (length === void 0) { length = 0; }
        if (character === void 0) { character = ' '; }
        if (!isString(input)) {
            return input;
        }
        return rightPad(input, length, character);
    };
    RightPadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'rightpad'
                },] }
    ];
    return RightPadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SplitPipe = /** @class */ (function () {
    function SplitPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} separator
     * @param {?=} limit
     * @return {?}
     */
    SplitPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} separator
     * @param {?=} limit
     * @return {?}
     */
    function (input, separator, limit) {
        if (separator === void 0) { separator = ' '; }
        if (!isString(input)) {
            return input;
        }
        return input.split(separator, limit);
    };
    SplitPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'split'
                },] }
    ];
    return SplitPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TestPipe = /** @class */ (function () {
    function TestPipe() {
    }
    /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} flag
     * @return {?}
     */
    TestPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} flag
     * @return {?}
     */
    function (input, pattern, flag) {
        if (!isString(input) || !pattern) {
            return input;
        }
        /** @type {?} */
        var regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);
        return regexp.test(input);
    };
    TestPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'test'
                },] }
    ];
    return TestPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TrimPipe = /** @class */ (function () {
    function TrimPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    TrimPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return input.trim();
    };
    TrimPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'trim'
                },] }
    ];
    return TrimPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NewlinesPipe = /** @class */ (function () {
    function NewlinesPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    NewlinesPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return input.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
    NewlinesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'newlines'
                },] }
    ];
    return NewlinesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} all
     * @return {?}
     */
    CapitalizePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} all
     * @return {?}
     */
    function (input, all) {
        if (all === void 0) { all = false; }
        if (!isString(input)) {
            return input;
        }
        if (!all) {
            return upperFirst(input.toLowerCase());
        }
        else {
            return input.toLowerCase()
                .split(' ')
                .map(function (value) { return upperFirst(value); })
                .join(' ');
        }
    };
    CapitalizePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'capitalize'
                },] }
    ];
    return CapitalizePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UpperFirstPipe = /** @class */ (function () {
    function UpperFirstPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    UpperFirstPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return upperFirst(input);
    };
    UpperFirstPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'upperfirst'
                },] }
    ];
    return UpperFirstPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TemplatePipe = /** @class */ (function () {
    function TemplatePipe() {
    }
    /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    TemplatePipe.prototype.transform = /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isString(input) || args.length === 0) {
            return input;
        }
        /** @type {?} */
        var template = input;
        for (var i = 0; i < args.length; ++i) {
            template = template.replace("$" + (i + 1), args[i]);
        }
        return template;
    };
    TemplatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'template'
                },] }
    ];
    return TemplatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EncodeURIPipe = /** @class */ (function () {
    function EncodeURIPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    EncodeURIPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return encodeURI(input);
    };
    EncodeURIPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'encodeURI'
                },] }
    ];
    return EncodeURIPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EncodeURIComponentPipe = /** @class */ (function () {
    function EncodeURIComponentPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    EncodeURIComponentPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return encodeURIComponent(input);
    };
    EncodeURIComponentPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'encodeURIComponent'
                },] }
    ];
    return EncodeURIComponentPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DecodeURIPipe = /** @class */ (function () {
    function DecodeURIPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    DecodeURIPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return decodeURI(input);
    };
    DecodeURIPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'decodeURI'
                },] }
    ];
    return DecodeURIPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DecodeURIComponentPipe = /** @class */ (function () {
    function DecodeURIComponentPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    DecodeURIComponentPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return decodeURIComponent(input);
    };
    DecodeURIComponentPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'decodeURIComponent'
                },] }
    ];
    return DecodeURIComponentPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} suffix
     * @param {?=} preserve
     * @return {?}
     */
    TruncatePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} suffix
     * @param {?=} preserve
     * @return {?}
     */
    function (input, length, suffix, preserve) {
        if (!isString(input)) {
            return input;
        }
        length = isUndefined(length) ? input.length : length;
        if (input.length <= length) {
            return input;
        }
        preserve = preserve || false;
        suffix = suffix || '';
        /** @type {?} */
        var index = length;
        if (preserve) {
            if (input.indexOf(' ', length) === -1) {
                index = input.length;
            }
            else {
                index = input.indexOf(' ', length);
            }
        }
        return input.substring(0, index) + suffix;
    };
    TruncatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'truncate'
                },] }
    ];
    return TruncatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RepeatPipe = /** @class */ (function () {
    function RepeatPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} times
     * @param {?=} characters
     * @return {?}
     */
    RepeatPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} times
     * @param {?=} characters
     * @return {?}
     */
    function (input, times, characters) {
        if (times === void 0) { times = 1; }
        if (characters === void 0) { characters = ''; }
        if (!isString(input)) {
            return input;
        }
        if (times <= 0) {
            times = 1;
        }
        /** @type {?} */
        var repeated = [input];
        for (var i = 1; i < times; ++i) {
            repeated.push(input);
        }
        return repeated.join(characters);
    };
    RepeatPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'repeat'
                },] }
    ];
    return RepeatPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SlugifyPipe = /** @class */ (function () {
    function SlugifyPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    SlugifyPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return (input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, ' ')
            .replace(/[\s-]+/g, '-'));
    };
    SlugifyPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'slugify' },] }
    ];
    return SlugifyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StripTagsPipe = /** @class */ (function () {
    function StripTagsPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    StripTagsPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input) || isUndefined(input))
            return input;
        return input.replace(/<\S[^><]*>/g, '');
    };
    StripTagsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'stripTags'
                },] }
    ];
    return StripTagsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LatinizePipe = /** @class */ (function () {
    function LatinizePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    LatinizePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input) || isUndefined(input)) {
            return input;
        }
        /** @type {?} */
        var replacementList = [
            { base: ' ', chars: "\u00A0" },
            { base: '0', chars: "\u07C0" },
            { base: 'A', chars: "\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F" },
            { base: 'AA', chars: "\uA732" },
            { base: 'AE', chars: "\u00C6\u01FC\u01E2" },
            { base: 'AO', chars: "\uA734" },
            { base: 'AU', chars: "\uA736" },
            { base: 'AV', chars: "\uA738\uA73A" },
            { base: 'AY', chars: "\uA73C" },
            { base: 'B', chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181" },
            { base: 'C', chars: "\u24b8\uff23\uA73E\u1E08\u0106\u0043\u0108\u010A\u010C\u00C7\u0187\u023B" },
            { base: 'D', chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779" },
            { base: 'Dh', chars: "\u00D0" },
            { base: 'DZ', chars: "\u01F1\u01C4" },
            { base: 'Dz', chars: "\u01F2\u01C5" },
            { base: 'E', chars: "\u025B\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07" },
            { base: 'F', chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B" },
            { base: 'G', chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262" },
            { base: 'H', chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D" },
            { base: 'I', chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197" },
            { base: 'J', chars: "\u24BF\uFF2A\u0134\u0248\u0237" },
            { base: 'K', chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2" },
            { base: 'L', chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780" },
            { base: 'LJ', chars: "\u01C7" },
            { base: 'Lj', chars: "\u01C8" },
            { base: 'M', chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB" },
            { base: 'N', chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E" },
            { base: 'NJ', chars: "\u01CA" },
            { base: 'Nj', chars: "\u01CB" },
            { base: 'O', chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C" },
            { base: 'OE', chars: "\u0152" },
            { base: 'OI', chars: "\u01A2" },
            { base: 'OO', chars: "\uA74E" },
            { base: 'OU', chars: "\u0222" },
            { base: 'P', chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754" },
            { base: 'Q', chars: "\u24C6\uFF31\uA756\uA758\u024A" },
            { base: 'R', chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782" },
            { base: 'S', chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784" },
            { base: 'T', chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786" },
            { base: 'Th', chars: "\u00DE" },
            { base: 'TZ', chars: "\uA728" },
            { base: 'U', chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244" },
            { base: 'V', chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245" },
            { base: 'VY', chars: "\uA760" },
            { base: 'W', chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72" },
            { base: 'X', chars: "\u24CD\uFF38\u1E8A\u1E8C" },
            { base: 'Y', chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE" },
            { base: 'Z', chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762" },
            { base: 'a', chars: "\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251" },
            { base: 'aa', chars: "\uA733" },
            { base: 'ae', chars: "\u00E6\u01FD\u01E3" },
            { base: 'ao', chars: "\uA735" },
            { base: 'au', chars: "\uA737" },
            { base: 'av', chars: "\uA739\uA73B" },
            { base: 'ay', chars: "\uA73D" },
            { base: 'b', chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182" },
            { base: 'c', chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184" },
            { base: 'd', chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA" },
            { base: 'dh', chars: "\u00F0" },
            { base: 'dz', chars: "\u01F3\u01C6" },
            { base: 'e', chars: "\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD", }, { base: 'f', chars: "\u24D5\uFF46\u1E1F\u0192" },
            { base: 'ff', chars: "\uFB00" },
            { base: 'fi', chars: "\uFB01" },
            { base: 'fl', chars: "\uFB02" },
            { base: 'ffi', chars: "\uFB03" },
            { base: 'ffl', chars: "\uFB04" },
            { base: 'g', chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79" },
            { base: 'h', chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265" },
            { base: 'hv', chars: "\u0195" },
            { base: 'i', chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131" },
            { base: 'j', chars: "\u24D9\uFF4A\u0135\u01F0\u0249" },
            { base: 'k', chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3" },
            { base: 'l', chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D" },
            { base: 'lj', chars: "\u01C9" },
            { base: 'm', chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F" },
            { base: 'n', chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509" },
            { base: 'nj', chars: "\u01CC" },
            { base: 'o', chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11" },
            { base: 'oe', chars: "\u0153" },
            { base: 'oi', chars: "\u01A3" },
            { base: 'oo', chars: "\uA74F" },
            { base: 'ou', chars: "\u0223" },
            { base: 'p', chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1" },
            { base: 'q', chars: "\u24E0\uFF51\u024B\uA757\uA759" },
            { base: 'r', chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783" },
            { base: 's', chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282" },
            { base: 'ss', chars: "\xDF" },
            { base: 't', chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787" },
            { base: 'th', chars: "\u00FE" },
            { base: 'tz', chars: "\uA729" },
            { base: 'u', chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289" },
            { base: 'v', chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C" },
            { base: 'vy', chars: "\uA761" },
            { base: 'w', chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73" },
            { base: 'x', chars: "\u24E7\uFF58\u1E8B\u1E8D" },
            { base: 'y', chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF" },
            { base: 'z', chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763" }
        ];
        /** @type {?} */
        var diacriticsMap = {};
        for (var i = 0; i < replacementList.length; i += 1) {
            /** @type {?} */
            var chars = replacementList[i].chars;
            for (var j = 0; j < chars.length; j += 1) {
                diacriticsMap[chars[j]] = replacementList[i].base;
            }
        }
        return input.replace(/[^\u0000-\u007e]/g, function (c) { return diacriticsMap[c] || c; });
    };
    LatinizePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'latinize' },] }
    ];
    return LatinizePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WrapPipe = /** @class */ (function () {
    function WrapPipe() {
    }
    /**
     * @param {?} input
     * @param {?} wrap
     * @param {?=} ends
     * @return {?}
     */
    WrapPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} wrap
     * @param {?=} ends
     * @return {?}
     */
    function (input, wrap, ends) {
        return (isString(input) && !isUndefined(wrap)) ? [wrap, input, ends || wrap].join('') : input;
    };
    WrapPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'wrap'
                },] }
    ];
    return WrapPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WithPipe = /** @class */ (function () {
    function WithPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} start
     * @param {?=} ends
     * @param {?=} csensitive
     * @return {?}
     */
    WithPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} start
     * @param {?=} ends
     * @param {?=} csensitive
     * @return {?}
     */
    function (input, start, ends, csensitive) {
        if (start === void 0) { start = null; }
        if (ends === void 0) { ends = null; }
        if (csensitive === void 0) { csensitive = false; }
        if (!isString(input) || (isNull(start) && isNull(ends)) || (start == '') || (ends == '')) {
            return input;
        }
        input = (csensitive) ? input : input.toLowerCase();
        if (!isNull(start) && !isNull(ends)) {
            /** @type {?} */
            var a = !input.indexOf((csensitive) ? start : start.toLowerCase());
            /** @type {?} */
            var b = input.indexOf((csensitive) ? ends : ends.toLowerCase(), (input.length - ends.length)) !== -1;
            if (a == true && b == true) {
                return true;
            }
            else {
                return false;
            }
        }
        if (!isNull(start)) {
            return !input.indexOf((csensitive) ? start : start.toLowerCase());
        }
        if (!isNull(ends)) {
            /** @type {?} */
            var position = input.length - ends.length;
            return input.indexOf((csensitive) ? ends : ends.toLowerCase(), position) !== -1;
        }
    };
    WithPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'with' },] }
    ];
    return WithPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReverseStrPipe = /** @class */ (function () {
    function ReverseStrPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    ReverseStrPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return Array.from(input).reverse().join('');
    };
    ReverseStrPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'reverseStr'
                },] }
    ];
    return ReverseStrPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgStringPipesModule = /** @class */ (function () {
    function NgStringPipesModule() {
    }
    NgStringPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        LeftPadPipe,
                        MatchPipe,
                        PadPipe,
                        ReplacePipe,
                        RightPadPipe,
                        SplitPipe,
                        TestPipe,
                        TrimPipe,
                        NewlinesPipe,
                        CapitalizePipe,
                        UpperFirstPipe,
                        TemplatePipe,
                        EncodeURIPipe,
                        EncodeURIComponentPipe,
                        DecodeURIPipe,
                        DecodeURIComponentPipe,
                        TruncatePipe,
                        RepeatPipe,
                        SlugifyPipe,
                        StripTagsPipe,
                        LatinizePipe,
                        WrapPipe,
                        WithPipe,
                        ReverseStrPipe
                    ],
                    exports: [
                        LeftPadPipe,
                        MatchPipe,
                        PadPipe,
                        ReplacePipe,
                        RightPadPipe,
                        SplitPipe,
                        TestPipe,
                        TrimPipe,
                        NewlinesPipe,
                        CapitalizePipe,
                        UpperFirstPipe,
                        TemplatePipe,
                        EncodeURIPipe,
                        EncodeURIComponentPipe,
                        DecodeURIPipe,
                        DecodeURIComponentPipe,
                        TruncatePipe,
                        RepeatPipe,
                        SlugifyPipe,
                        StripTagsPipe,
                        LatinizePipe,
                        WrapPipe,
                        WithPipe,
                        ReverseStrPipe
                    ]
                },] }
    ];
    return NgStringPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgPipesModule = /** @class */ (function () {
    function NgPipesModule() {
    }
    NgPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [
                        NgArrayPipesModule,
                        NgMathPipesModule,
                        NgBooleanPipesModule,
                        NgStringPipesModule,
                        NgObjectPipesModule,
                        NgAggregatePipesModule
                    ]
                },] }
    ];
    return NgPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1waXBlcy91dGlscy91dGlscy50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hZ2dyZWdhdGUvZ3JvdXAtYnkucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hZ2dyZWdhdGUvbWF4LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYWdncmVnYXRlL21lYW4ucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hZ2dyZWdhdGUvbWluLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYWdncmVnYXRlL3N1bS5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L2VtcHR5LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvaGVhZC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L2luaXRpYWwucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9sYXN0LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvam9pbi5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3RhaWwucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS91bmlxLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvd2l0aG91dC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L21hcC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3doZXJlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvZmlyc3Qtb3ItZGVmYXVsdC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3JhbmdlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvcGx1Y2sucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9yZXZlcnNlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvb3JkZXItYnkucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9jb3VudC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3NvbWUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9ldmVyeS5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3NodWZmbGUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS90YWtlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvZHJvcC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L2RlZXAucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9jaHVuay5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L2ZsYXR0ZW4ucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9pbnRlcnNlY3Rpb24ucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS91bmlvbi5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3Rha2Utd2hpbGUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS90YWtlLXVudGlsLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvYXJyYXkubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2Jvb2xlYW4vY29uZGl0aW9ucy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2Jvb2xlYW4vdHlwZXMucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9ib29sZWFuL2Jvb2xlYW4ubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvYnl0ZXMucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9tYXRoL2NlaWwucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9tYXRoL2Zsb29yLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvbWF0aC9yb3VuZC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvZGVncmVlcy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvcmFkaWFucy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvcmFuZG9tLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvbWF0aC9zcXJ0LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvbWF0aC9wb3cucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9tYXRoL2Ficy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvb3JkaW5hbC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvbWF0aC5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvb2JqZWN0L2tleXMucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9vYmplY3QvdG8tYXJyYXkucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9vYmplY3QvZGVmYXVsdHMucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9vYmplY3Qvb2JqZWN0Lm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvbGVmdC1wYWQucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvbWF0Y2gucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvcGFkLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3JlcGxhY2UucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvcmlnaHQtcGFkLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3NwbGl0LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3Rlc3QucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvdHJpbS5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9uZXdsaW5lcy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9jYXBpdGFsaXplLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3VwcGVyZmlyc3QucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvdGVtcGxhdGUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvZW5jb2RlLXVyaS5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9lbmNvZGUtdXJpLWNvbXBvbmVudC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9kZWNvZGUtdXJpLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL2RlY29kZS11cmktY29tcG9uZW50LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3RydW5jYXRlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3JlcGVhdC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9zbHVnaWZ5LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3N0cmlwLXRhZ3MucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvbGF0aW5pemUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvd3JhcC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy93aXRoLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3JldmVyc2Utc3RyLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3N0cmluZy5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvcGlwZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIENvbGxlY3Rpb25QcmVkaWNhdGUgPSAoaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIsIGNvbGxlY3Rpb24/OiBhbnlbXSkgPT4gYm9vbGVhbjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCAodmFsdWU6IGFueSk6IHZhbHVlIGlzIHVuZGVmaW5lZCB7XHJcbiAgXHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBudWxsIHtcclxuICBcclxuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlciAodmFsdWU6IGFueSk6IHZhbHVlIGlzIG51bWJlciB7XHJcbiAgXHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlckZpbml0ZSAodmFsdWU6IGFueSk6IHZhbHVlIGlzIG51bWJlciB7XHJcbiAgXHJcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XHJcbn1cclxuXHJcbi8vIE5vdCBzdHJpY3QgcG9zaXRpdmVcclxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9zaXRpdmUgKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICBcclxuICByZXR1cm4gdmFsdWUgPj0gMDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIgKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICBcclxuICAvLyBObyByZXN0LCBpcyBhbiBpbnRlZ2VyXHJcbiAgcmV0dXJuICh2YWx1ZSAlIDEpID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOaWwgKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyAobnVsbHx1bmRlZmluZWQpIHtcclxuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mICh2YWx1ZSkgPT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcgKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBzdHJpbmcge1xyXG4gIFxyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICBcclxuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICBcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uICh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgXHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVjaW1hbCAodmFsdWU6IG51bWJlciwgZGVjaW1hbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICBcclxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHBlckZpcnN0ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBcclxuICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm91bmQgKG1ldGhvZDogc3RyaW5nKTogRnVuY3Rpb24ge1xyXG4gIFxyXG4gIC8vIDxhbnk+TWF0aCB0byBzdXBwcmVzcyBlcnJvclxyXG4gIGNvbnN0IGZ1bmM6IGFueSA9ICg8YW55Pk1hdGgpW21ldGhvZF07XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciA9IDApIHtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUm91bmRpbmcgbWV0aG9kIG5lZWRzIGEgbnVtYmVyJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2YgcHJlY2lzaW9uICE9PSAnbnVtYmVyJyB8fCBpc05hTihwcmVjaXNpb24pKSB7XHJcbiAgICAgIHByZWNpc2lvbiA9IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwcmVjaXNpb24pIHtcclxuICAgICAgXHJcbiAgICAgIGxldCBwYWlyID0gYCR7dmFsdWV9ZWAuc3BsaXQoJ2UnKTtcclxuICAgICAgY29uc3QgdmFsID0gZnVuYyggYCR7cGFpclswXX1lYCArICgrcGFpclsxXSArIHByZWNpc2lvbikpO1xyXG4gICAgICBcclxuICAgICAgcGFpciA9IGAke3ZhbH1lYC5zcGxpdCgnZScpO1xyXG4gICAgICByZXR1cm4gKyhwYWlyWzBdICsgJ2UnICsgKCtwYWlyWzFdIC0gcHJlY2lzaW9uKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVmdFBhZCAoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyID0gMCwgY2g6IGFueSA9ICcgJykge1xyXG4gIFxyXG4gIHN0ciA9IFN0cmluZyhzdHIpO1xyXG4gIGNoID0gdG9TdHJpbmcoY2gpO1xyXG4gIGxldCBpID0gLTE7XHJcbiAgY29uc3QgbGVuZ3RoID0gbGVuIC0gc3RyLmxlbmd0aDtcclxuICBcclxuICB3aGlsZSAoKytpIDwgbGVuZ3RoICYmIChzdHIubGVuZ3RoICsgY2gubGVuZ3RoKSA8PSBsZW4pIHtcclxuICAgIHN0ciA9IGNoICsgc3RyO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRQYWQgKHN0cjogc3RyaW5nLCBsZW46IG51bWJlciA9IDAsIGNoOiBhbnkgPSAnICcpIHtcclxuICBcclxuICBzdHIgPSBTdHJpbmcoc3RyKTtcclxuICBjaCA9IHRvU3RyaW5nKGNoKTtcclxuICBcclxuICBsZXQgaSA9IC0xO1xyXG4gIGNvbnN0IGxlbmd0aCA9IGxlbiAtIHN0ci5sZW5ndGg7XHJcbiAgXHJcbiAgd2hpbGUgKCsraSA8IGxlbmd0aCAmJiAoc3RyLmxlbmd0aCArIGNoLmxlbmd0aCkgPD0gbGVuKSB7XHJcbiAgICBzdHIgKz0gY2g7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyAodmFsdWU6IG51bWJlcnxzdHJpbmcpIHtcclxuICBcclxuICByZXR1cm4gYCR7dmFsdWV9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZCAoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyID0gMCwgY2g6IGFueSA9ICcgJyk6IHN0cmluZ3tcclxuICBcclxuICBzdHIgPSBTdHJpbmcoc3RyKTtcclxuICBjaCA9IHRvU3RyaW5nKGNoKTtcclxuICBsZXQgaSA9IC0xO1xyXG4gIGNvbnN0IGxlbmd0aCA9IGxlbiAtIHN0ci5sZW5ndGg7XHJcbiAgXHJcbiAgXHJcbiAgbGV0IGxlZnQgPSB0cnVlO1xyXG4gIHdoaWxlICgrK2kgPCBsZW5ndGgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbCA9IChzdHIubGVuZ3RoICsgY2gubGVuZ3RoIDw9IGxlbikgPyAoc3RyLmxlbmd0aCArIGNoLmxlbmd0aCkgOiAoc3RyLmxlbmd0aCArIDEpO1xyXG4gICAgXHJcbiAgICBpZiAobGVmdCkge1xyXG4gICAgICBzdHIgPSBsZWZ0UGFkKHN0ciwgbCwgY2gpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHN0ciA9IHJpZ2h0UGFkKHN0ciwgbCwgY2gpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZWZ0ID0gIWxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuIChpbnB1dDogYW55W10sIGluZGV4OiBudW1iZXIgPSAwKTogYW55W10ge1xyXG4gIFxyXG4gIGlmIChpbmRleCA+PSBpbnB1dC5sZW5ndGgpIHtcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGlzQXJyYXkoaW5wdXRbaW5kZXhdKSkge1xyXG4gICAgcmV0dXJuIGZsYXR0ZW4oXHJcbiAgICBpbnB1dC5zbGljZSgwLCBpbmRleCkuY29uY2F0KGlucHV0W2luZGV4XSwgaW5wdXQuc2xpY2UoaW5kZXggKyAxKSksXHJcbiAgICBpbmRleFxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGZsYXR0ZW4oaW5wdXQsIGluZGV4ICsgMSk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHkgKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IGFueX0sIGtleTogc3RyaW5nKTogYW55IHtcclxuICBcclxuICBpZiAoaXNOaWwodmFsdWUpIHx8ICFpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGtleXM6IHN0cmluZ1tdID0ga2V5LnNwbGl0KCcuJyk7XHJcbiAgbGV0IHJlc3VsdDogYW55ID0gdmFsdWVba2V5cy5zaGlmdCgpIV07XHJcbiAgXHJcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgaWYgKGlzTmlsKHJlc3VsdCkgfHwgIWlzT2JqZWN0KHJlc3VsdCkpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVzdWx0ID0gcmVzdWx0W2tleV07XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW0gKGlucHV0OiBBcnJheTxudW1iZXI+LCBpbml0aWFsID0gMCk6IG51bWJlciB7XHJcbiAgXHJcbiAgcmV0dXJuIGlucHV0LnJlZHVjZSgocHJldmlvdXM6IG51bWJlciwgY3VycmVudDogbnVtYmVyKSA9PiBwcmV2aW91cyArIGN1cnJlbnQsIGluaXRpYWwpO1xyXG59XHJcblxyXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYyNzQzMzkvaG93LWNhbi1pLXNodWZmbGUtYW4tYXJyYXktaW4tamF2YXNjcmlwdFxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgXHJcbiAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuICBcclxuICBjb25zdCBjb3B5ID0gWy4uLmlucHV0XTtcclxuICBcclxuICBmb3IgKGxldCBpID0gY29weS5sZW5ndGg7IGk7IC0taSkge1xyXG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xyXG4gICAgY29uc3QgeCA9IGNvcHlbaSAtIDFdO1xyXG4gICAgY29weVtpIC0gMV0gPSBjb3B5W2pdO1xyXG4gICAgY29weVtqXSA9IHg7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBjb3B5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcEluZGV4T2YgKGNvbGxlY3Rpb246IGFueVtdLCB2YWx1ZTogYW55KSB7XHJcbiAgXHJcbiAgbGV0IGluZGV4ID0gLTE7XHJcbiAgY29uc3QgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XHJcbiAgXHJcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgIGlmIChkZWVwRXF1YWwodmFsdWUsIGNvbGxlY3Rpb25baW5kZXhdKSkge1xyXG4gICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAtMTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWwgKGE6IGFueSwgYjogYW55KSB7XHJcbiAgXHJcbiAgaWYgKGEgPT09IGIpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBpZiAoISh0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSkge1xyXG4gICAgcmV0dXJuIGEgPT09IGI7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMoYSk7XHJcbiAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcclxuICBcclxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cclxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBrZXkgPSBrZXlzQVtpXTtcclxuICAgIGlmICghaGFzT3duLmNhbGwoYiwga2V5c0FbaV0pIHx8ICFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RlZXBPYmplY3QgKG9iamVjdDogYW55KSB7XHJcbiAgXHJcbiAgcmV0dXJuIG9iamVjdC5fX2lzRGVlcE9iamVjdF9fO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcERlZXAgKG9iamVjdDogYW55KSB7XHJcbiAgXHJcbiAgcmV0dXJuIG5ldyBEZWVwV3JhcHBlcihvYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW53cmFwRGVlcCAob2JqZWN0OiBhbnkpIHtcclxuICBcclxuICBpZiAoaXNEZWVwT2JqZWN0KG9iamVjdCkpIHtcclxuICAgIHJldHVybiBvYmplY3QuZGF0YTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIG9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlZXBXcmFwcGVyIHtcclxuICBcclxuICBwdWJsaWMgX19pc0RlZXBPYmplY3RfXzogYm9vbGVhbiA9IHRydWU7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBkYXRhOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudCAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgXHJcbiAgaWYgKCFpc0FycmF5KGlucHV0KSAmJiAhaXNPYmplY3QoaW5wdXQpICYmICFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGlucHV0KS5tYXAoKHZhbHVlKSA9PiBpbnB1dFt2YWx1ZV0pLmxlbmd0aDtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGlucHV0Lmxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5IChpbnB1dDogYW55KTogYW55IHtcclxuICBcclxuICBpZiAoIWlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBpbnB1dC5sZW5ndGggPT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVyeSAoaW5wdXQ6IGFueSwgcHJlZGljYXRlOiBDb2xsZWN0aW9uUHJlZGljYXRlKSB7XHJcbiAgXHJcbiAgaWYgKCFpc0FycmF5KGlucHV0KSB8fCAhcHJlZGljYXRlKSB7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gIGxldCBpID0gLTE7XHJcbiAgXHJcbiAgd2hpbGUgKCsraSA8IGlucHV0Lmxlbmd0aCAmJiByZXN1bHQpIHtcclxuICAgIHJlc3VsdCA9IHByZWRpY2F0ZShpbnB1dFtpXSwgaSwgaW5wdXQpO1xyXG4gIH1cclxuICBcclxuICBcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFrZVVudGlsIChpbnB1dDogYW55W10sIHByZWRpY2F0ZTogQ29sbGVjdGlvblByZWRpY2F0ZSkge1xyXG5cclxuICBsZXQgaSA9IC0xO1xyXG4gIGNvbnN0IHJlc3VsdDogYW55ID0gW107XHJcbiAgd2hpbGUgKCsraSA8IGlucHV0Lmxlbmd0aCAmJiAhcHJlZGljYXRlKGlucHV0W2ldLCBpLCBpbnB1dCkpIHtcclxuICAgIHJlc3VsdFtpXSA9IGlucHV0W2ldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRha2VXaGlsZSAoaW5wdXQ6IGFueVtdLCBwcmVkaWNhdGU6IENvbGxlY3Rpb25QcmVkaWNhdGUpIHtcclxuICByZXR1cm4gdGFrZVVudGlsKGlucHV0LCAoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCBjb2xsZWN0aW9uOiBhbnlbXSkgPT4gIXByZWRpY2F0ZShpdGVtLCBpbmRleCwgY29sbGVjdGlvbikpO1xyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZ2V0UHJvcGVydHksIGlzQXJyYXksIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdncm91cEJ5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHByb3A6IHN0cmluZyk6IEFycmF5PGFueT4ge1xyXG5cclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFycjogeyBba2V5OiBzdHJpbmddOiBBcnJheTxhbnk+IH0gPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGlucHV0KSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkOiBhbnkgPSBnZXRQcm9wZXJ0eSh2YWx1ZSwgcHJvcCk7XHJcblxyXG4gICAgICBpZiAoaXNVbmRlZmluZWQoYXJyW2ZpZWxkXSkpIHtcclxuICAgICAgICBhcnJbZmllbGRdID0gW107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFycltmaWVsZF0ucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFycikubWFwKGtleSA9PiAoeyBrZXksICd2YWx1ZSc6IGFycltrZXldIH0pKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHsgXHJcbiAgbmFtZTogJ21heCcgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IG1heCA9IGlucHV0WzBdO1xyXG4gICAgXHJcbiAgICBpbnB1dC5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBpZiAobWF4IDwgdmFsdWUpIHtcclxuICAgICAgICBtYXggPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBtYXg7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgc3VtIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdtZWFuJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVhblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY291bnQgPSBpbnB1dC5sZW5ndGg7XHJcbiAgICBcclxuICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gc3VtKGlucHV0KSAvIGNvdW50O1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7IFxyXG4gIG5hbWU6ICdtaW4nIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWluUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBtaW4gPSBpbnB1dFswXTtcclxuICAgIFxyXG4gICAgaW5wdXQuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgaWYgKG1pbiA+IHZhbHVlKSB7XHJcbiAgICAgICAgbWluID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbWluO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgc3VtIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnc3VtJyB9KVxyXG5leHBvcnQgY2xhc3MgU3VtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYW55IHtcclxuICAgIHJldHVybiAhaXNBcnJheShpbnB1dCkgPyBpbnB1dCA6IHN1bShpbnB1dCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBHcm91cEJ5UGlwZSB9IGZyb20gJy4vZ3JvdXAtYnkucGlwZSc7XHJcbmltcG9ydCB7IE1heFBpcGUgfSBmcm9tICcuL21heC5waXBlJztcclxuaW1wb3J0IHsgTWVhblBpcGUgfSBmcm9tICcuL21lYW4ucGlwZSc7XHJcbmltcG9ydCB7IE1pblBpcGUgfSBmcm9tICcuL21pbi5waXBlJztcclxuaW1wb3J0IHsgU3VtUGlwZSB9IGZyb20gJy4vc3VtLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEdyb3VwQnlQaXBlLFxyXG4gICAgTWF4UGlwZSxcclxuICAgIE1lYW5QaXBlLFxyXG4gICAgTWluUGlwZSxcclxuICAgIFN1bVBpcGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEdyb3VwQnlQaXBlLFxyXG4gICAgTWF4UGlwZSxcclxuICAgIE1lYW5QaXBlLFxyXG4gICAgTWluUGlwZSxcclxuICAgIFN1bVBpcGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0FnZ3JlZ2F0ZVBpcGVzTW9kdWxlIHt9XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZW1wdHkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2VtcHR5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1wdHlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVtcHR5KGlucHV0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnaGVhZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiBsZW5ndGggaXMgMFxyXG4gICAgcmV0dXJuIGlucHV0WzBdO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2luaXRpYWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbml0aWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuc2xpY2UoMCwgaW5wdXQubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbGFzdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJldHVybnMgdW5kZWZpbmVkIGlmIGVtcHR5XHJcbiAgICByZXR1cm4gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV07XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnam9pbidcclxufSlcclxuZXhwb3J0IGNsYXNzIEpvaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBjaGFyYWN0ZXI6IHN0cmluZyA9ICcnKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5qb2luKGNoYXJhY3Rlcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndGFpbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhaWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5zbGljZSgxLCBpbnB1dC5sZW5ndGgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRGVlcE9iamVjdCwgdW53cmFwRGVlcCwgZGVlcEluZGV4T2YgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3VuaXEnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmlxUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkgJiYgIWlzRGVlcE9iamVjdChpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaXNEZWVwT2JqZWN0KGlucHV0KSkge1xyXG4gICAgICBjb25zdCB1bndyYXBwZWRJbnB1dCA9IHVud3JhcERlZXAoaW5wdXQpO1xyXG4gICAgICBpZiAoIWlzQXJyYXkodW53cmFwcGVkSW5wdXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVud3JhcHBlZElucHV0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdW53cmFwcGVkSW5wdXQuZmlsdGVyKCh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBcclxuICAgICAgICBkZWVwSW5kZXhPZih1bndyYXBwZWRJbnB1dCwgdmFsdWUpID09PSBpbmRleFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuZmlsdGVyKCh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBpbnB1dC5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRGVlcE9iamVjdCwgdW53cmFwRGVlcCwgZGVlcEluZGV4T2YgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3dpdGhvdXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXRob3V0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpICYmICFpc0RlZXBPYmplY3QoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGlzRGVlcE9iamVjdChpbnB1dCkpIHtcclxuICAgICAgY29uc3QgdW53cmFwcGVkSW5wdXQgPSB1bndyYXBEZWVwKGlucHV0KTtcclxuICAgICAgaWYgKCFpc0FycmF5KHVud3JhcHBlZElucHV0KSkge1xyXG4gICAgICAgIHJldHVybiB1bndyYXBwZWRJbnB1dDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHVud3JhcHBlZElucHV0LmZpbHRlcigodmFsdWU6IGFueSkgPT4gXHJcbiAgICAgICAgZGVlcEluZGV4T2YoYXJncywgdmFsdWUpID09PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5maWx0ZXIoKHZhbHVlOiBhbnkpID0+IGFyZ3MuaW5kZXhPZih2YWx1ZSkgPT09IC0xKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdtYXAnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBmbjogRnVuY3Rpb24pOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpIHx8ICFmbikge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5tYXAoZm4pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRnVuY3Rpb24sIGdldFByb3BlcnR5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd3aGVyZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdoZXJlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIC8qKiBcclxuICAqIFN1cHBvcnQgYSBmdW5jdGlvbiBvciBhIHZhbHVlIG9yIHRoZSBzaG9ydGhhbmQgWydrZXknLCB2YWx1ZV0gbGlrZSB0aGUgbG9kYXNoIHNob3J0aGFuZC5cclxuICAqL1xyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgZm46IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQuZmlsdGVyKGZuKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzQXJyYXkoZm4pKSB7XHJcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGZuO1xyXG4gICAgICByZXR1cm4gaW5wdXQuZmlsdGVyKChpdGVtOiBhbnkpID0+IGdldFByb3BlcnR5KGl0ZW0sIGtleSkgPT09IHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZuKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbSA9PT0gZm4pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRnVuY3Rpb24sIGdldFByb3BlcnR5LCBDb2xsZWN0aW9uUHJlZGljYXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZmlyc3RPckRlZmF1bHQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJzdE9yRGVmYXVsdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICBwcml2YXRlIHN0YXRpYyBmaW5kIChcclxuICAgIGlucHV0OiBhbnlbXSwgXHJcbiAgICBwcmVkaWNhdGU6IENvbGxlY3Rpb25QcmVkaWNhdGUsXHJcbiAgICBkZWZhdWx0VmFsdWU/OiBhbnlcclxuICApOiBhbnkge1xyXG4gICAgXHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgIGxldCBpID0gLTE7XHJcbiAgICBcclxuICAgIHdoaWxlICghZm91bmQgJiYgKytpIDwgaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgIGZvdW5kID0gcHJlZGljYXRlKGlucHV0W2ldLCBpLCBpbnB1dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICByZXN1bHQgPSBpbnB1dFtpXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJlc3VsdCA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChcclxuICAgIGlucHV0OiBhbnksXHJcbiAgICBwcmVkaWNhdGU6IENvbGxlY3Rpb25QcmVkaWNhdGV8c3RyaW5nW118YW55LFxyXG4gICAgZGVmYXVsdFZhbHVlPzogYW55XHJcbiAgKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXRcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGlzRnVuY3Rpb24ocHJlZGljYXRlKSkge1xyXG4gICAgICByZXR1cm4gRmlyc3RPckRlZmF1bHRQaXBlLmZpbmQoaW5wdXQsIDxDb2xsZWN0aW9uUHJlZGljYXRlPnByZWRpY2F0ZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzQXJyYXkocHJlZGljYXRlKSkge1xyXG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSA8c3RyaW5nW10+IHByZWRpY2F0ZTtcclxuICAgICAgcmV0dXJuIEZpcnN0T3JEZWZhdWx0UGlwZS5maW5kKGlucHV0LCAoaXRlbTogYW55KSA9PiBnZXRQcm9wZXJ0eShpdGVtLCBrZXkpID09PSB2YWx1ZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByZWRpY2F0ZSkge1xyXG4gICAgICByZXR1cm4gRmlyc3RPckRlZmF1bHRQaXBlLmZpbmQoaW5wdXQsIChpdGVtKSA9PiBpdGVtID09PSA8YW55PnByZWRpY2F0ZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmFuZ2UnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYW5nZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKF9pbnB1dDogYW55LCBzaXplOiBudW1iZXIgPSAwLCBzdGFydDogbnVtYmVyID0gMSwgc3RlcDogbnVtYmVyID0gMSk6IGFueSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHJhbmdlOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgbGVuZ3RoID0gMDsgbGVuZ3RoIDwgc2l6ZTsgKytsZW5ndGgpIHtcclxuICAgICAgcmFuZ2UucHVzaChzdGFydCk7XHJcbiAgICAgIHN0YXJ0ICs9IHN0ZXA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiByYW5nZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgZ2V0UHJvcGVydHkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3BsdWNrJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGx1Y2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkgfHwgIWtleSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5tYXAoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIGdldFByb3BlcnR5KHZhbHVlLCBrZXkpOyBcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmV2ZXJzZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJldmVyc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBbLi4uaW5wdXRdLnJldmVyc2UoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ29yZGVyQnknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcmRlckJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHByaXZhdGUgc3RhdGljIF9vcmRlckJ5IChhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XHJcbiAgICBcclxuICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGEgPCBiKSA/IC0xIDogKGEgPiBiKSA/IDEgOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBmbG9hdEEgPSBwYXJzZUZsb2F0KGEpO1xyXG4gICAgY29uc3QgZmxvYXRCID0gcGFyc2VGbG9hdChiKTtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYiA9PT0gJ3N0cmluZycgJiYgKGlzTmFOKGZsb2F0QSkgfHwgaXNOYU4oZmxvYXRCKSkpIHtcclxuICAgICAgY29uc3QgbG93ZXJBID0gYS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBsb3dlckIgPSBiLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiAobG93ZXJBIDwgbG93ZXJCKSA/IC0xIDogKGxvd2VyQSA+IGxvd2VyQikgPyAxIDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChmbG9hdEEgPCBmbG9hdEIpID8gLTEgOiAoZmxvYXRBID4gZmxvYXRCKSA/IDEgOiAwOyBcclxuICB9XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBjb25maWc6IGFueSA9ICcrJyk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBjb25maWdJc0FycmF5ID0gaXNBcnJheShjb25maWcpO1xyXG4gICAgXHJcbiAgICAvLyBJZiBjb25maWcgPT09ICdwYXJhbScgT1IgWydwYXJhbSddIFxyXG4gICAgaWYgKCFjb25maWdJc0FycmF5IHx8IChjb25maWdJc0FycmF5ICYmIGNvbmZpZy5sZW5ndGggPT09IDEpKSB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwcm9wZXJ0eVRvQ2hlY2s6IHN0cmluZyA9IGNvbmZpZ0lzQXJyYXkgPyBjb25maWdbMF0gOiBjb25maWc7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gcHJvcGVydHlUb0NoZWNrLnN1YnN0cigwLCAxKTtcclxuICAgICAgY29uc3QgZGVzYyA9IChmaXJzdCA9PT0gJy0nKTsgLy8gRmlyc3QgY2hhcmFjdGVyIGlzICctJ1xyXG4gICAgICBcclxuICAgICAgLy8gQmFzaWMgYXJyYXkgKGlmIG9ubHkgKyBvciAtIGlzIHByZXNlbnQpXHJcbiAgICAgIGlmICghcHJvcGVydHlUb0NoZWNrIHx8IHByb3BlcnR5VG9DaGVjayA9PT0gJy0nIHx8IHByb3BlcnR5VG9DaGVjayA9PT0gJysnKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5pbnB1dF0uc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBPcmRlckJ5UGlwZS5fb3JkZXJCeShhLCBiKTtcclxuICAgICAgICAgIHJldHVybiBkZXNjID8gLWNvbXBhcmF0b3IgOiBjb21wYXJhdG9yOyBcclxuICAgICAgICB9KTtcclxuICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvLyBJZiBjb250YWlucyArIG9yIC0sIHN1YnN0cmluZyB0aGUgcHJvcGVydHlcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IChmaXJzdCA9PT0gJysnIHx8IGRlc2MpID8gcHJvcGVydHlUb0NoZWNrLnN1YnN0cigxKSA6IHByb3BlcnR5VG9DaGVjaztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gWy4uLmlucHV0XS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBjb21wYXJhdG9yID0gT3JkZXJCeVBpcGUuX29yZGVyQnkoYVtwcm9wZXJ0eV0sIGJbcHJvcGVydHldKTtcclxuICAgICAgICAgIHJldHVybiBkZXNjID8gLWNvbXBhcmF0b3IgOiBjb21wYXJhdG9yOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7IC8vIENvbmZpZyBpcyBhbiBhcnJheSBvZiBwcm9wZXJ0eVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIFsuLi5pbnB1dF0uc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgY29uZmlnLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdCA9IGNvbmZpZ1tpXS5zdWJzdHIoMCwgMSk7XHJcbiAgICAgICAgICBjb25zdCBkZXNjID0gKGZpcnN0ID09PSAnLScpO1xyXG4gICAgICAgICAgY29uc3QgcHJvcGVydHkgPSAoZmlyc3QgPT09ICcrJyB8fCBkZXNjKSA/IGNvbmZpZ1tpXS5zdWJzdHIoMSkgOiBjb25maWdbaV07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBPcmRlckJ5UGlwZS5fb3JkZXJCeShhW3Byb3BlcnR5XSwgYltwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgY29uc3QgY29tcGFyaXNvbiA9IGRlc2MgPyAtY29tcGFyYXRvciA6IGNvbXBhcmF0b3I7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChjb21wYXJpc29uICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuXHJcbkBQaXBlKHsgXHJcbiAgbmFtZTogJ2NvdW50JyBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvdW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIHJldHVybiBjb3VudChpbnB1dCk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc29tZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBwcmVkaWNhdGU6IEZ1bmN0aW9uKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSB8fCAhcHJlZGljYXRlKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIFxyXG4gICAgd2hpbGUgKCsraSA8IGlucHV0Lmxlbmd0aCAmJiAhcmVzdWx0KSB7XHJcbiAgICAgIHJlc3VsdCA9IHByZWRpY2F0ZShpbnB1dFtpXSwgaSwgaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGV2ZXJ5LCBDb2xsZWN0aW9uUHJlZGljYXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdldmVyeSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZXJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgcHJlZGljYXRlOiBDb2xsZWN0aW9uUHJlZGljYXRlKTogYW55IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGV2ZXJ5KGlucHV0LCBwcmVkaWNhdGUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNodWZmbGUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3NodWZmbGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaHVmZmxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIHJldHVybiBzaHVmZmxlKGlucHV0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndGFrZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRha2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBxdWFudGl0eT86IG51bWJlcik6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuc2xpY2UoMCwgcXVhbnRpdHkgfHwgMSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZHJvcCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3BQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBxdWFudGl0eT86IG51bWJlcik6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuc2xpY2UocXVhbnRpdHkgfHwgMSwgaW5wdXQubGVudGgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd3JhcERlZXAsIGlzRGVlcE9iamVjdCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZGVlcCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERlZXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpIDogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKGlzRGVlcE9iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gd3JhcERlZXAodmFsdWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2NodW5rJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2h1bmtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHNpemU6IG51bWJlciA9IDEpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgaW5wdXQubWFwKChfZWxlbTogYW55LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgcmV0dXJuIGkgJSBzaXplID8gW10gOiBbaW5wdXQuc2xpY2UoaSwgaSArIHNpemUpXTtcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgaXNEZWVwT2JqZWN0LCB1bndyYXBEZWVwLCBmbGF0dGVuIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZmxhdHRlbicgfSlcclxuZXhwb3J0IGNsYXNzIEZsYXR0ZW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgY29uc3QgaXNEZWVwID0gaXNEZWVwT2JqZWN0KGlucHV0KTtcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkgJiYgIWlzRGVlcCkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpc0RlZXApIHtcclxuICAgICAgY29uc3QgdW53cmFwcGVkID0gdW53cmFwRGVlcChpbnB1dCk7XHJcbiAgICAgIGlmICghaXNBcnJheSh1bndyYXBwZWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVud3JhcHBlZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGZsYXR0ZW4odW53cmFwcGVkLCAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgaW5wdXQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRGVlcE9iamVjdCwgdW53cmFwRGVlcCwgZGVlcEluZGV4T2YgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2ludGVyc2VjdGlvbidcclxufSlcclxuZXhwb3J0IGNsYXNzIEludGVyc2VjdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGE/OiBhbnksIGI/OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoKCFpc0FycmF5KGEpICYmICFpc0RlZXBPYmplY3QoYSkpIHx8ICFpc0FycmF5KGIpKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGlzRGVlcE9iamVjdChhKSkge1xyXG4gICAgICBjb25zdCB1bndyYXBwZWQgPSB1bndyYXBEZWVwKGEpO1xyXG4gICAgICBpZiAoIWlzQXJyYXkodW53cmFwcGVkKSkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHVud3JhcHBlZC5yZWR1Y2UoKGludGVyc2VjdGlvbjogYW55W10sIHZhbHVlOiBhbnkpID0+IGludGVyc2VjdGlvbi5jb25jYXQoXHJcbiAgICAgICAgKGRlZXBJbmRleE9mKGIsIHZhbHVlKSAhPT0gLTEgJiYgZGVlcEluZGV4T2YoaW50ZXJzZWN0aW9uLCB2YWx1ZSkgPT09IC0xKSA/IHZhbHVlIDogW11cclxuICAgICAgKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhLnJlZHVjZSgoaW50ZXJzZWN0aW9uOiBhbnlbXSwgdmFsdWU6IGFueSkgPT4gaW50ZXJzZWN0aW9uLmNvbmNhdChcclxuICAgICAgKGIuaW5kZXhPZih2YWx1ZSkgIT09IC0xICYmIGludGVyc2VjdGlvbi5pbmRleE9mKHZhbHVlKSA9PT0gLTEpID8gdmFsdWUgOiBbXVxyXG4gICAgKSwgW10pXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgaXNEZWVwT2JqZWN0LCB1bndyYXBEZWVwLCBkZWVwSW5kZXhPZiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndW5pb24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGE/OiBhbnksIGI/OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoKCFpc0FycmF5KGEpICYmICFpc0RlZXBPYmplY3QoYSkpIHx8ICFpc0FycmF5KGIpKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGlzRGVlcE9iamVjdChhKSkge1xyXG4gICAgICBjb25zdCB1bndyYXBwZWQgPSB1bndyYXBEZWVwKGEpO1xyXG4gICAgICBpZiAoIWlzQXJyYXkodW53cmFwcGVkKSkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgLmNvbmNhdCh1bndyYXBwZWQpXHJcbiAgICAgICAgLmNvbmNhdChiKVxyXG4gICAgICAgIC5maWx0ZXIoKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIsIGlucHV0OiBhbnlbXSkgPT4gZGVlcEluZGV4T2YoaW5wdXQsIHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXS5jb25jYXQoYSkuY29uY2F0KGIpLmZpbHRlcigodmFsdWU6IGFueSwgaW5kZXg6IG51bWJlciwgaW5wdXQ6IGFueVtdKSA9PiBpbnB1dC5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIHRha2VXaGlsZSwgQ29sbGVjdGlvblByZWRpY2F0ZSwgaXNOaWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3Rha2VXaGlsZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRha2VXaGlsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIHByZWRpY2F0ZT86IENvbGxlY3Rpb25QcmVkaWNhdGUpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpIHx8IGlzTmlsKHByZWRpY2F0ZSkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGFrZVdoaWxlKGlucHV0LCBwcmVkaWNhdGUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIHRha2VVbnRpbCwgQ29sbGVjdGlvblByZWRpY2F0ZSwgaXNOaWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3Rha2VVbnRpbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRha2VVbnRpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIHByZWRpY2F0ZT86IENvbGxlY3Rpb25QcmVkaWNhdGUpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpIHx8IGlzTmlsKHByZWRpY2F0ZSkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGFrZVVudGlsKGlucHV0LCBwcmVkaWNhdGUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFbXB0eVBpcGUgfSBmcm9tICcuL2VtcHR5LnBpcGUnO1xyXG5pbXBvcnQgeyBIZWFkUGlwZSB9IGZyb20gJy4vaGVhZC5waXBlJztcclxuaW1wb3J0IHsgSW5pdGlhbFBpcGUgfSBmcm9tICcuL2luaXRpYWwucGlwZSc7XHJcbmltcG9ydCB7IExhc3RQaXBlIH0gZnJvbSAnLi9sYXN0LnBpcGUnO1xyXG5pbXBvcnQgeyBKb2luUGlwZSB9IGZyb20gJy4vam9pbi5waXBlJztcclxuaW1wb3J0IHsgVGFpbFBpcGUgfSBmcm9tICcuL3RhaWwucGlwZSc7XHJcbmltcG9ydCB7IFVuaXFQaXBlIH0gZnJvbSAnLi91bmlxLnBpcGUnO1xyXG5pbXBvcnQgeyBXaXRob3V0UGlwZSB9IGZyb20gJy4vd2l0aG91dC5waXBlJztcclxuaW1wb3J0IHsgTWFwUGlwZSB9IGZyb20gJy4vbWFwLnBpcGUnO1xyXG5pbXBvcnQgeyBXaGVyZVBpcGUgfSBmcm9tICcuL3doZXJlLnBpcGUnO1xyXG5pbXBvcnQgeyBGaXJzdE9yRGVmYXVsdFBpcGUgfSBmcm9tICcuL2ZpcnN0LW9yLWRlZmF1bHQucGlwZSc7XHJcbmltcG9ydCB7IFJhbmdlUGlwZSB9IGZyb20gJy4vcmFuZ2UucGlwZSc7XHJcbmltcG9ydCB7IFBsdWNrUGlwZSB9IGZyb20gJy4vcGx1Y2sucGlwZSc7XHJcbmltcG9ydCB7IFJldmVyc2VQaXBlIH0gZnJvbSAnLi9yZXZlcnNlLnBpcGUnO1xyXG5pbXBvcnQgeyBPcmRlckJ5UGlwZSB9IGZyb20gJy4vb3JkZXItYnkucGlwZSc7XHJcbmltcG9ydCB7IENvdW50UGlwZSB9IGZyb20gJy4vY291bnQucGlwZSc7XHJcbmltcG9ydCB7IFNvbWVQaXBlIH0gZnJvbSAnLi9zb21lLnBpcGUnO1xyXG5pbXBvcnQgeyBFdmVyeVBpcGUgfSBmcm9tICcuL2V2ZXJ5LnBpcGUnO1xyXG5pbXBvcnQgeyBTaHVmZmxlUGlwZSB9IGZyb20gJy4vc2h1ZmZsZS5waXBlJztcclxuaW1wb3J0IHsgVGFrZVBpcGUgfSBmcm9tICcuL3Rha2UucGlwZSc7XHJcbmltcG9ydCB7IERyb3BQaXBlIH0gZnJvbSAnLi9kcm9wLnBpcGUnO1xyXG5pbXBvcnQgeyBEZWVwUGlwZSB9IGZyb20gJy4vZGVlcC5waXBlJztcclxuaW1wb3J0IHsgQ2h1bmtQaXBlIH0gZnJvbSAnLi9jaHVuay5waXBlJztcclxuaW1wb3J0IHsgRmxhdHRlblBpcGUgfSBmcm9tICcuL2ZsYXR0ZW4ucGlwZSc7XHJcbmltcG9ydCB7IEludGVyc2VjdGlvblBpcGUgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5waXBlJztcclxuaW1wb3J0IHsgVW5pb25QaXBlIH0gZnJvbSAnLi91bmlvbi5waXBlJztcclxuaW1wb3J0IHsgVGFrZVdoaWxlUGlwZSB9IGZyb20gJy4vdGFrZS13aGlsZS5waXBlJztcclxuaW1wb3J0IHsgVGFrZVVudGlsUGlwZSB9IGZyb20gJy4vdGFrZS11bnRpbC5waXBlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRW1wdHlQaXBlLFxyXG4gICAgSGVhZFBpcGUsXHJcbiAgICBJbml0aWFsUGlwZSxcclxuICAgIExhc3RQaXBlLFxyXG4gICAgSm9pblBpcGUsXHJcbiAgICBUYWlsUGlwZSxcclxuICAgIFVuaXFQaXBlLFxyXG4gICAgV2l0aG91dFBpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgV2hlcmVQaXBlLFxyXG4gICAgUmFuZ2VQaXBlLFxyXG4gICAgUGx1Y2tQaXBlLFxyXG4gICAgUmV2ZXJzZVBpcGUsXHJcbiAgICBPcmRlckJ5UGlwZSxcclxuICAgIENvdW50UGlwZSxcclxuICAgIFNvbWVQaXBlLFxyXG4gICAgRXZlcnlQaXBlLFxyXG4gICAgU2h1ZmZsZVBpcGUsXHJcbiAgICBUYWtlUGlwZSxcclxuICAgIERyb3BQaXBlLFxyXG4gICAgRGVlcFBpcGUsXHJcbiAgICBDaHVua1BpcGUsXHJcbiAgICBGbGF0dGVuUGlwZSxcclxuICAgIEZpcnN0T3JEZWZhdWx0UGlwZSxcclxuICAgIEludGVyc2VjdGlvblBpcGUsXHJcbiAgICBVbmlvblBpcGUsXHJcbiAgICBUYWtlV2hpbGVQaXBlLFxyXG4gICAgVGFrZVVudGlsUGlwZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRW1wdHlQaXBlLFxyXG4gICAgSGVhZFBpcGUsXHJcbiAgICBJbml0aWFsUGlwZSxcclxuICAgIExhc3RQaXBlLFxyXG4gICAgSm9pblBpcGUsXHJcbiAgICBUYWlsUGlwZSxcclxuICAgIFVuaXFQaXBlLFxyXG4gICAgV2l0aG91dFBpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgV2hlcmVQaXBlLFxyXG4gICAgUmFuZ2VQaXBlLFxyXG4gICAgUGx1Y2tQaXBlLFxyXG4gICAgUmV2ZXJzZVBpcGUsXHJcbiAgICBPcmRlckJ5UGlwZSxcclxuICAgIENvdW50UGlwZSxcclxuICAgIFNvbWVQaXBlLFxyXG4gICAgRXZlcnlQaXBlLFxyXG4gICAgU2h1ZmZsZVBpcGUsXHJcbiAgICBUYWtlUGlwZSxcclxuICAgIERyb3BQaXBlLFxyXG4gICAgRGVlcFBpcGUsXHJcbiAgICBDaHVua1BpcGUsXHJcbiAgICBGbGF0dGVuUGlwZSxcclxuICAgIEZpcnN0T3JEZWZhdWx0UGlwZSxcclxuICAgIEludGVyc2VjdGlvblBpcGUsXHJcbiAgICBVbmlvblBpcGUsXHJcbiAgICBUYWtlV2hpbGVQaXBlLFxyXG4gICAgVGFrZVVudGlsUGlwZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQXJyYXlQaXBlc01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZ3JlYXRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIElzR3JlYXRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGZpcnN0OiBhbnksIHNlY29uZDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBcclxuICAgIHJldHVybiBmaXJzdCA+IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZ3JlYXRlck9yRXF1YWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0dyZWF0ZXJPckVxdWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoZmlyc3Q6IGFueSwgc2Vjb25kOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpcnN0ID49IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbGVzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIElzTGVzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGZpcnN0OiBhbnksIHNlY29uZDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBcclxuICAgIHJldHVybiBmaXJzdCA8IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbGVzc09yRXF1YWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0xlc3NPckVxdWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoZmlyc3Q6IGFueSwgc2Vjb25kOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpcnN0IDw9IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZXF1YWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0VxdWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoZmlyc3Q6IGFueSwgc2Vjb25kOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpcnN0ID09IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbm90RXF1YWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc05vdEVxdWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoZmlyc3Q6IGFueSwgc2Vjb25kOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpcnN0ICE9IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnaWRlbnRpY2FsJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNJZGVudGljYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChmaXJzdDogYW55LCBzZWNvbmQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbm90SWRlbnRpY2FsJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNOb3RJZGVudGljYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChmaXJzdDogYW55LCBzZWNvbmQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmlyc3QgIT09IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgaXNOdWxsLFxyXG4gIGlzTmlsLFxyXG4gIGlzVW5kZWZpbmVkLCBcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzQXJyYXksXHJcbiAgaXNTdHJpbmcsXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNOdW1iZXIgXHJcbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc051bGwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc051bGxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtICh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBcclxuICAgIHJldHVybiBpc051bGwodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc1VuZGVmaW5lZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzVW5kZWZpbmVkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc05pbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzTmlsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gaXNOaWwodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc0Z1bmN0aW9uJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNGdW5jdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGlzRnVuY3Rpb24odmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc051bWJlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIElzTnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gaXNOdW1iZXIodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc1N0cmluZydcclxufSlcclxuZXhwb3J0IGNsYXNzIElzU3RyaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnaXNBcnJheSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzQXJyYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtICh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBcclxuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnaXNPYmplY3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc09iamVjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2lzRGVmaW5lZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzRGVmaW5lZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElzR3JlYXRlclBpcGUsXHJcbiAgICBJc0dyZWF0ZXJPckVxdWFsUGlwZSxcclxuICAgIElzTGVzc1BpcGUsXHJcbiAgICBJc0xlc3NPckVxdWFsUGlwZSxcclxuICAgIElzRXF1YWxQaXBlLFxyXG4gICAgSXNOb3RFcXVhbFBpcGUsXHJcbiAgICBJc0lkZW50aWNhbFBpcGUsXHJcbiAgICBJc05vdElkZW50aWNhbFBpcGUsXHJcbn0gZnJvbSAnLi9jb25kaXRpb25zLnBpcGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElzTnVsbFBpcGUsXHJcbiAgICBJc05pbFBpcGUsXHJcbiAgICBJc1VuZGVmaW5lZFBpcGUsXHJcbiAgICBJc0Z1bmN0aW9uUGlwZSxcclxuICAgIElzTnVtYmVyUGlwZSxcclxuICAgIElzU3RyaW5nUGlwZSxcclxuICAgIElzQXJyYXlQaXBlLFxyXG4gICAgSXNPYmplY3RQaXBlLFxyXG4gICAgSXNEZWZpbmVkUGlwZVxyXG59IGZyb20gJy4vdHlwZXMucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSXNHcmVhdGVyUGlwZSxcclxuICAgICAgICBJc0dyZWF0ZXJPckVxdWFsUGlwZSxcclxuICAgICAgICBJc0xlc3NQaXBlLFxyXG4gICAgICAgIElzTGVzc09yRXF1YWxQaXBlLFxyXG4gICAgICAgIElzRXF1YWxQaXBlLFxyXG4gICAgICAgIElzTm90RXF1YWxQaXBlLFxyXG4gICAgICAgIElzSWRlbnRpY2FsUGlwZSxcclxuICAgICAgICBJc05vdElkZW50aWNhbFBpcGUsXHJcbiAgICAgICAgSXNOaWxQaXBlLFxyXG4gICAgICAgIElzTnVsbFBpcGUsXHJcbiAgICAgICAgSXNVbmRlZmluZWRQaXBlLFxyXG4gICAgICAgIElzRnVuY3Rpb25QaXBlLFxyXG4gICAgICAgIElzTnVtYmVyUGlwZSxcclxuICAgICAgICBJc1N0cmluZ1BpcGUsXHJcbiAgICAgICAgSXNBcnJheVBpcGUsXHJcbiAgICAgICAgSXNPYmplY3RQaXBlLFxyXG4gICAgICAgIElzRGVmaW5lZFBpcGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgSXNHcmVhdGVyUGlwZSxcclxuICAgICAgICBJc0dyZWF0ZXJPckVxdWFsUGlwZSxcclxuICAgICAgICBJc0xlc3NQaXBlLFxyXG4gICAgICAgIElzTGVzc09yRXF1YWxQaXBlLFxyXG4gICAgICAgIElzRXF1YWxQaXBlLFxyXG4gICAgICAgIElzTm90RXF1YWxQaXBlLFxyXG4gICAgICAgIElzSWRlbnRpY2FsUGlwZSxcclxuICAgICAgICBJc05vdElkZW50aWNhbFBpcGUsXHJcbiAgICAgICAgSXNOaWxQaXBlLFxyXG4gICAgICAgIElzTnVsbFBpcGUsXHJcbiAgICAgICAgSXNVbmRlZmluZWRQaXBlLFxyXG4gICAgICAgIElzRnVuY3Rpb25QaXBlLFxyXG4gICAgICAgIElzTnVtYmVyUGlwZSxcclxuICAgICAgICBJc1N0cmluZ1BpcGUsXHJcbiAgICAgICAgSXNBcnJheVBpcGUsXHJcbiAgICAgICAgSXNPYmplY3RQaXBlLFxyXG4gICAgICAgIElzRGVmaW5lZFBpcGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQm9vbGVhblBpcGVzTW9kdWxlIHt9XHJcblxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVtYmVyRmluaXRlLCBpc1Bvc2l0aXZlLCBpc0ludGVnZXIsIHRvRGVjaW1hbCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ5dGVVbml0ID0gJ0InIHwgJ2tCJyB8ICdLQicgfCAnTUInIHwgJ0dCJyB8ICdUQic7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2J5dGVzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnl0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgc3RhdGljIGZvcm1hdHM6IHsgW2tleTogc3RyaW5nXTogeyBtYXg6IG51bWJlciwgcHJldj86IEJ5dGVVbml0IH0gfSA9IHtcclxuICAgICAgICAnQic6IHttYXg6IDEwMjR9LFxyXG4gICAgICAgICdrQic6IHttYXg6IE1hdGgucG93KDEwMjQsIDIpLCBwcmV2OiAnQid9LFxyXG4gICAgICAgICdLQic6IHttYXg6IE1hdGgucG93KDEwMjQsIDIpLCBwcmV2OiAnQid9LCAvLyBCYWNrd2FyZCBjb21wYXRpYmxlXHJcbiAgICAgICAgJ01CJzoge21heDogTWF0aC5wb3coMTAyNCwgMyksIHByZXY6ICdrQid9LFxyXG4gICAgICAgICdHQic6IHttYXg6IE1hdGgucG93KDEwMjQsIDQpLCBwcmV2OiAnTUInfSxcclxuICAgICAgICAnVEInOiB7bWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgcHJldjogJ0dCJ31cclxuICAgIH07XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55LCBkZWNpbWFsOiBudW1iZXIgPSAwLCBmcm9tOiBCeXRlVW5pdCA9ICdCJywgdG8/OiBCeXRlVW5pdCk6IGFueSB7XHJcblxyXG4gICAgICAgIGlmICghKGlzTnVtYmVyRmluaXRlKGlucHV0KSAmJlxyXG4gICAgICAgICAgICAgICAgaXNOdW1iZXJGaW5pdGUoZGVjaW1hbCkgJiZcclxuICAgICAgICAgICAgICAgIGlzSW50ZWdlcihkZWNpbWFsKSAmJlxyXG4gICAgICAgICAgICAgICAgaXNQb3NpdGl2ZShkZWNpbWFsKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ5dGVzID0gaW5wdXQ7XHJcbiAgICAgICAgbGV0IHVuaXQgPSBmcm9tO1xyXG4gICAgICAgIHdoaWxlICh1bml0ICE9PSAnQicpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKj0gMTAyNDtcclxuICAgICAgICAgICAgdW5pdCA9IEJ5dGVzUGlwZS5mb3JtYXRzW3VuaXRdLnByZXYhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IEJ5dGVzUGlwZS5mb3JtYXRzW3RvXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRvRGVjaW1hbChCeXRlc1BpcGUuY2FsY3VsYXRlUmVzdWx0KGZvcm1hdCwgYnl0ZXMpLCBkZWNpbWFsKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBCeXRlc1BpcGUuZm9ybWF0UmVzdWx0KHJlc3VsdCwgdG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gQnl0ZXNQaXBlLmZvcm1hdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gQnl0ZXNQaXBlLmZvcm1hdHNba2V5XTtcclxuICAgICAgICAgICAgaWYgKGJ5dGVzIDwgZm9ybWF0Lm1heCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRvRGVjaW1hbChCeXRlc1BpcGUuY2FsY3VsYXRlUmVzdWx0KGZvcm1hdCwgYnl0ZXMpLCBkZWNpbWFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnl0ZXNQaXBlLmZvcm1hdFJlc3VsdChyZXN1bHQsIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZvcm1hdFJlc3VsdChyZXN1bHQ6IG51bWJlciwgdW5pdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7cmVzdWx0fSAke3VuaXR9YDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2FsY3VsYXRlUmVzdWx0KGZvcm1hdDogeyBtYXg6IG51bWJlciwgcHJldj86IEJ5dGVVbml0IH0sIGJ5dGVzOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBwcmV2ID0gZm9ybWF0LnByZXYgPyBCeXRlc1BpcGUuZm9ybWF0c1tmb3JtYXQucHJldl0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHByZXYgPyBieXRlcyAvIHByZXYubWF4IDogYnl0ZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb3VuZCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2NlaWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWlsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSwgcHJlY2lzaW9uOiBhbnkgPSAwKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKGlzU3RyaW5nKHByZWNpc2lvbikpIHtcclxuICAgICAgcHJlY2lzaW9uID0gcGFyc2VJbnQocHJlY2lzaW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGNyZWF0ZVJvdW5kKCdjZWlsJykodmFsdWUsIHByZWNpc2lvbik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY3JlYXRlUm91bmQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdmbG9vcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb29yUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSwgcHJlY2lzaW9uOiBhbnkgPSAwKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKGlzU3RyaW5nKHByZWNpc2lvbikpIHtcclxuICAgICAgcHJlY2lzaW9uID0gcGFyc2VJbnQocHJlY2lzaW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGNyZWF0ZVJvdW5kKCdmbG9vcicpKHZhbHVlLCBwcmVjaXNpb24pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvdW5kLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncm91bmQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb3VuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKHZhbHVlOiBhbnksIHByZWNpc2lvbjogYW55ID0gMCk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmIChpc1N0cmluZyhwcmVjaXNpb24pKSB7XHJcbiAgICAgIHByZWNpc2lvbiA9IHBhcnNlSW50KHByZWNpc2lvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBjcmVhdGVSb3VuZCgncm91bmQnKSh2YWx1ZSwgcHJlY2lzaW9uKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVtYmVyRmluaXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdkZWdyZWVzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVncmVlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG4gIFxyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNOdW1iZXJGaW5pdGUoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiAnTmFOJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChpbnB1dCAqIDE4MCkgLyBNYXRoLlBJO1xyXG4gICAgXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmFkaWFucydcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlhbnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc051bWJlckZpbml0ZShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuICdOYU4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKGlucHV0ICogTWF0aC5QSSkgLyAxODA7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmFuZG9tJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFuZG9tUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgbWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzTnVtYmVyRmluaXRlKG1pbikgfHwgIWlzTnVtYmVyRmluaXRlKG1heCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAobWluID4gbWF4KSB7XHJcbiAgICAgIG1heCA9IG1pbjtcclxuICAgICAgbWluID0gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc3FydCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNxcnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc051bWJlckZpbml0ZShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuICdOYU4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGlucHV0KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncG93J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG93UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgcG93ZXI6IG51bWJlciA9IDIpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzTnVtYmVyRmluaXRlKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gJ05hTic7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBNYXRoLnBvdyhpbnB1dCwgcG93ZXIpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVtYmVyRmluaXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhYnMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc051bWJlckZpbml0ZShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuICdOYU4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gTWF0aC5hYnMoaW5wdXQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVtYmVyRmluaXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdvcmRpbmFsJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkaW5hbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICAgIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcblxyXG4gICAgICAgIGlmICghaXNOdW1iZXJGaW5pdGUoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnTmFOJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRpbmFsID0gaW5wdXQudG9TdHJpbmcoKS5jaGFyQXQoaW5wdXQudG9TdHJpbmcoKS5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKGNhcmRpbmFsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0ICsgJ3N0JztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQgKyAnbmQnO1xyXG4gICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dCArICdyZCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0ICsgJ3RoJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnl0ZXNQaXBlIH0gZnJvbSAnLi9ieXRlcy5waXBlJztcclxuaW1wb3J0IHsgQ2VpbFBpcGUgfSBmcm9tICcuL2NlaWwucGlwZSc7XHJcbmltcG9ydCB7IEZsb29yUGlwZSB9IGZyb20gJy4vZmxvb3IucGlwZSc7XHJcbmltcG9ydCB7IFJvdW5kUGlwZSB9IGZyb20gJy4vcm91bmQucGlwZSc7XHJcbmltcG9ydCB7IERlZ3JlZXNQaXBlIH0gZnJvbSAnLi9kZWdyZWVzLnBpcGUnO1xyXG5pbXBvcnQgeyBSYWRpYW5zUGlwZSB9IGZyb20gJy4vcmFkaWFucy5waXBlJztcclxuaW1wb3J0IHsgUmFuZG9tUGlwZSB9IGZyb20gJy4vcmFuZG9tLnBpcGUnO1xyXG5pbXBvcnQgeyBTcXJ0UGlwZSB9IGZyb20gJy4vc3FydC5waXBlJztcclxuaW1wb3J0IHsgUG93UGlwZSB9IGZyb20gJy4vcG93LnBpcGUnO1xyXG5pbXBvcnQgeyBBYnNQaXBlIH0gZnJvbSAnLi9hYnMucGlwZSc7XHJcbmltcG9ydCB7IE9yZGluYWxQaXBlIH0gZnJvbSAnLi9vcmRpbmFsLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJ5dGVzUGlwZSxcclxuICAgIENlaWxQaXBlLFxyXG4gICAgRmxvb3JQaXBlLFxyXG4gICAgUm91bmRQaXBlLFxyXG4gICAgRGVncmVlc1BpcGUsXHJcbiAgICBSYWRpYW5zUGlwZSxcclxuICAgIFJhbmRvbVBpcGUsXHJcbiAgICBTcXJ0UGlwZSxcclxuICAgIFBvd1BpcGUsXHJcbiAgICBBYnNQaXBlLFxyXG4gICAgT3JkaW5hbFBpcGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJ5dGVzUGlwZSxcclxuICAgIENlaWxQaXBlLFxyXG4gICAgRmxvb3JQaXBlLFxyXG4gICAgUm91bmRQaXBlLFxyXG4gICAgRGVncmVlc1BpcGUsXHJcbiAgICBSYWRpYW5zUGlwZSxcclxuICAgIFJhbmRvbVBpcGUsXHJcbiAgICBTcXJ0UGlwZSxcclxuICAgIFBvd1BpcGUsXHJcbiAgICBBYnNQaXBlLFxyXG4gICAgT3JkaW5hbFBpcGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ01hdGhQaXBlc01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcblxyXG5AUGlwZSh7IG5hbWU6ICdrZXlzJyB9KVxyXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzT2JqZWN0KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhpbnB1dCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoeyBuYW1lOiAndG9BcnJheScgfSlcclxuZXhwb3J0IGNsYXNzIFRvQXJyYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc09iamVjdChpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5wdXQpLm1hcCgodmFsdWUpID0+IGlucHV0W3ZhbHVlXSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNPYmplY3QsIGlzQXJyYXksIGlzTmlsIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZGVmYXVsdHMnIH0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIGRlZmF1bHRzOiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzT2JqZWN0KGRlZmF1bHRzKSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpc05pbChpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoaXNOaWwoaXRlbSkpIHtcclxuICAgICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2V5c1BpcGUgfSBmcm9tICcuL2tleXMucGlwZSc7XHJcbmltcG9ydCB7IFRvQXJyYXlQaXBlIH0gZnJvbSAnLi90by1hcnJheS5waXBlJztcclxuaW1wb3J0IHsgRGVmYXVsdHNQaXBlIH0gZnJvbSAnLi9kZWZhdWx0cy5waXBlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgS2V5c1BpcGUsXHJcbiAgICBUb0FycmF5UGlwZSxcclxuICAgIERlZmF1bHRzUGlwZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgS2V5c1BpcGUsXHJcbiAgICBUb0FycmF5UGlwZSxcclxuICAgIERlZmF1bHRzUGlwZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nT2JqZWN0UGlwZXNNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbGVmdFBhZCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdsZWZ0cGFkJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGVmdFBhZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIGxlbmd0aDogbnVtYmVyID0gMCwgY2hhcmFjdGVyOiBzdHJpbmcgPSAnICcpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBsZWZ0UGFkKGlucHV0LCBsZW5ndGgsIGNoYXJhY3Rlcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ21hdGNoJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0Y2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBwYXR0ZXJuOiBhbnksIGZsYWc6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmVnZXhwID0gcGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCA/IHBhdHRlcm4gOiBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWcpO1xyXG4gICAgcmV0dXJuIGlucHV0Lm1hdGNoKHJlZ2V4cCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGFkLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3BhZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIGxlbmd0aDogbnVtYmVyID0gMCwgY2hhcmFjdGVyOiBzdHJpbmcgPSAnICcpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBwYWQoaW5wdXQsIGxlbmd0aCwgY2hhcmFjdGVyKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZywgaXNVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3JlcGxhY2UnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBsYWNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgcGF0dGVybjogYW55LCByZXBsYWNlbWVudDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkgfHwgaXNVbmRlZmluZWQocGF0dGVybikgfHwgaXNVbmRlZmluZWQocmVwbGFjZW1lbnQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByaWdodFBhZCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdyaWdodHBhZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJpZ2h0UGFkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgbGVuZ3RoOiBudW1iZXIgPSAwLCBjaGFyYWN0ZXI6IHN0cmluZyA9ICcgJyk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJpZ2h0UGFkKGlucHV0LCBsZW5ndGgsIGNoYXJhY3Rlcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzcGxpdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwbGl0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgc2VwYXJhdG9yOiBzdHJpbmcgPSAnICcsIGxpbWl0PzogbnVtYmVyKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0ZXN0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIHBhdHRlcm46IGFueSwgZmxhZzogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkgfHwgIXBhdHRlcm4pIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByZWdleHAgPSBwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwID8gcGF0dGVybiA6IG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZyk7XHJcbiAgICBcclxuICAgIHJldHVybiByZWdleHAudGVzdChpbnB1dCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RyaW0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmltUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGlucHV0LnRyaW0oKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbmV3bGluZXMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdsaW5lc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJzxiciAvPicpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcsIHVwcGVyRmlyc3QgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2NhcGl0YWxpemUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXBpdGFsaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBhbGw6IGJvb2xlYW4gPSBmYWxzZSkgOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghYWxsKSB7XHJcbiAgICAgIHJldHVybiB1cHBlckZpcnN0KGlucHV0LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB1cHBlckZpcnN0KHZhbHVlKSlcclxuICAgICAgICAuam9pbignICcpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcsIHVwcGVyRmlyc3QgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3VwcGVyZmlyc3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcHBlckZpcnN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdXBwZXJGaXJzdChpbnB1dCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RlbXBsYXRlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRlbXBsYXRlID0gaW5wdXQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCBgJCR7aSArIDF9YCwgYXJnc1tpXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0ZW1wbGF0ZTsgICBcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdlbmNvZGVVUkknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbmNvZGVVUklQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGVuY29kZVVSSShpbnB1dCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZW5jb2RlVVJJQ29tcG9uZW50J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW5jb2RlVVJJQ29tcG9uZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2RlY29kZVVSSSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERlY29kZVVSSVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnkpIHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZGVjb2RlVVJJKGlucHV0KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdkZWNvZGVVUklDb21wb25lbnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWNvZGVVUklDb21wb25lbnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XHJcbiAgfVxyXG59IiwiLy8gSW5zcGlyZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYThtL2FuZ3VsYXItZmlsdGVyL2Jsb2IvbWFzdGVyL3NyYy9fZmlsdGVyL3N0cmluZy90cnVuY2F0ZS5qc1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0cnVuY2F0ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgbGVuZ3RoPzogbnVtYmVyLCBzdWZmaXg/OiBzdHJpbmcsIHByZXNlcnZlPzogYm9vbGVhbik6IGFueSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZW5ndGggPSBpc1VuZGVmaW5lZChsZW5ndGgpID8gaW5wdXQubGVuZ3RoIDogbGVuZ3RoO1xyXG4gICAgXHJcbiAgICBpZiAoaW5wdXQubGVuZ3RoIDw9IGxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByZXNlcnZlID0gcHJlc2VydmUgfHwgZmFsc2U7XHJcbiAgICBzdWZmaXggPSBzdWZmaXggfHwgJyc7XHJcbiAgICBsZXQgaW5kZXggPSBsZW5ndGg7XHJcbiAgICBcclxuICAgIGlmIChwcmVzZXJ2ZSkge1xyXG4gICAgICBpZiAoaW5wdXQuaW5kZXhPZignICcsIGxlbmd0aCkgPT09IC0xKSB7XHJcbiAgICAgICAgaW5kZXggPSBpbnB1dC5sZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaW5kZXggID0gaW5wdXQuaW5kZXhPZignICcsIGxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGlucHV0LnN1YnN0cmluZygwLCBpbmRleCkgKyBzdWZmaXg7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmVwZWF0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwZWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgdGltZXM6IG51bWJlciA9IDEsIGNoYXJhY3RlcnM6IHN0cmluZyA9ICcnKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGltZXMgPD0gMCkge1xyXG4gICAgICB0aW1lcyA9IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlcGVhdGVkID0gW2lucHV0XTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGltZXM7ICsraSkge1xyXG4gICAgICByZXBlYXRlZC5wdXNoKGlucHV0KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcmVwZWF0ZWQuam9pbihjaGFyYWN0ZXJzKTtcclxuICB9XHJcbn0iLCJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzU3RyaW5nfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdzbHVnaWZ5JyB9KVxyXG5leHBvcnQgY2xhc3MgU2x1Z2lmeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnkpOiBhbnkge1xyXG5cclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgaW5wdXRcclxuICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgLnRyaW0oKVxyXG4gICAgICAucmVwbGFjZSgvW15hLXowLTlcXHMtXS9nLCAnICcpXHJcbiAgICAgIC5yZXBsYWNlKC9bXFxzLV0rL2csICctJylcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGlkZWEgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYThtL2FuZ3VsYXItZmlsdGVyXHJcblxyXG5pbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzU3RyaW5nLCBpc1VuZGVmaW5lZH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzdHJpcFRhZ3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHJpcFRhZ3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSB8fCBpc1VuZGVmaW5lZChpbnB1dCkpXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC88XFxTW14+PF0qPi9nLCAnJyk7XHJcbiAgfVxyXG59IiwiLy8gaWRlYSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hOG0vYW5ndWxhci1maWx0ZXJcclxuXHJcbmltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7aXNTdHJpbmcsIGlzVW5kZWZpbmVkfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2xhdGluaXplJ30pXHJcbmV4cG9ydCBjbGFzcyBMYXRpbml6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBhbnkge1xyXG5cclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpIHx8IGlzVW5kZWZpbmVkKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlcGxhY2VtZW50TGlzdCA9IFtcclxuICAgICAge2Jhc2U6ICcgJywgY2hhcnM6IFwiXFx1MDBBMFwifSxcclxuICAgICAge2Jhc2U6ICcwJywgY2hhcnM6IFwiXFx1MDdDMFwifSxcclxuICAgICAge2Jhc2U6ICdBJywgY2hhcnM6IFwiXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXCJ9LFxyXG4gICAgICB7YmFzZTogJ0FBJywgY2hhcnM6IFwiXFx1QTczMlwifSxcclxuICAgICAge2Jhc2U6ICdBRScsIGNoYXJzOiBcIlxcdTAwQzZcXHUwMUZDXFx1MDFFMlwifSxcclxuICAgICAge2Jhc2U6ICdBTycsIGNoYXJzOiBcIlxcdUE3MzRcIn0sXHJcbiAgICAgIHtiYXNlOiAnQVUnLCBjaGFyczogXCJcXHVBNzM2XCJ9LFxyXG4gICAgICB7YmFzZTogJ0FWJywgY2hhcnM6IFwiXFx1QTczOFxcdUE3M0FcIn0sXHJcbiAgICAgIHtiYXNlOiAnQVknLCBjaGFyczogXCJcXHVBNzNDXCJ9LFxyXG4gICAgICB7YmFzZTogJ0InLCBjaGFyczogXCJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgxXCJ9LFxyXG4gICAgICB7YmFzZTogJ0MnLCBjaGFyczogXCJcXHUyNGI4XFx1ZmYyM1xcdUE3M0VcXHUxRTA4XFx1MDEwNlxcdTAwNDNcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MDE4N1xcdTAyM0JcIn0sXHJcbiAgICAgIHtiYXNlOiAnRCcsIGNoYXJzOiBcIlxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEFcXHUwMTg5XFx1MUQwNVxcdUE3NzlcIn0sXHJcbiAgICAgIHtiYXNlOiAnRGgnLCBjaGFyczogXCJcXHUwMEQwXCJ9LFxyXG4gICAgICB7YmFzZTogJ0RaJywgY2hhcnM6IFwiXFx1MDFGMVxcdTAxQzRcIn0sXHJcbiAgICAgIHtiYXNlOiAnRHonLCBjaGFyczogXCJcXHUwMUYyXFx1MDFDNVwifSxcclxuICAgICAge2Jhc2U6ICdFJywgY2hhcnM6IFwiXFx1MDI1QlxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXFx1MUQwN1wifSxcclxuICAgICAge2Jhc2U6ICdGJywgY2hhcnM6IFwiXFx1QTc3Q1xcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXCJ9LFxyXG4gICAgICB7YmFzZTogJ0cnLCBjaGFyczogXCJcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RVxcdTAyNjJcIn0sXHJcbiAgICAgIHtiYXNlOiAnSCcsIGNoYXJzOiBcIlxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERcIn0sXHJcbiAgICAgIHtiYXNlOiAnSScsIGNoYXJzOiBcIlxcdTI0QkVcXHVGRjI5XFx4Q0NcXHhDRFxceENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxceENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XCJ9LFxyXG4gICAgICB7YmFzZTogJ0onLCBjaGFyczogXCJcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XFx1MDIzN1wifSxcclxuICAgICAge2Jhc2U6ICdLJywgY2hhcnM6IFwiXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMlwifSxcclxuICAgICAge2Jhc2U6ICdMJywgY2hhcnM6IFwiXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBcIn0sXHJcbiAgICAgIHtiYXNlOiAnTEonLCBjaGFyczogXCJcXHUwMUM3XCJ9LFxyXG4gICAgICB7YmFzZTogJ0xqJywgY2hhcnM6IFwiXFx1MDFDOFwifSxcclxuICAgICAge2Jhc2U6ICdNJywgY2hhcnM6IFwiXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q1xcdTAzRkJcIn0sXHJcbiAgICAgIHtiYXNlOiAnTicsIGNoYXJzOiBcIlxcdUE3QTRcXHUwMjIwXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xceEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDE5RFxcdUE3OTBcXHUxRDBFXCJ9LCBcclxuICAgICAge2Jhc2U6ICdOSicsIGNoYXJzOiBcIlxcdTAxQ0FcIn0sIFxyXG4gICAgICB7YmFzZTogJ05qJywgY2hhcnM6IFwiXFx1MDFDQlwifSxcclxuICAgICAge2Jhc2U6ICdPJywgY2hhcnM6IFwiXFx1MjRDNFxcdUZGMkZcXHhEMlxceEQzXFx4RDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx4RDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHhENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHhEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXCJ9LFxyXG4gICAgICB7YmFzZTogJ09FJywgY2hhcnM6IFwiXFx1MDE1MlwifSxcclxuICAgICAge2Jhc2U6ICdPSScsIGNoYXJzOiBcIlxcdTAxQTJcIn0sXHJcbiAgICAgIHtiYXNlOiAnT08nLCBjaGFyczogXCJcXHVBNzRFXCJ9LFxyXG4gICAgICB7YmFzZTogJ09VJywgY2hhcnM6IFwiXFx1MDIyMlwifSxcclxuICAgICAge2Jhc2U6ICdQJywgY2hhcnM6IFwiXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XCJ9LFxyXG4gICAgICB7YmFzZTogJ1EnLCBjaGFyczogXCJcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QVwifSxcclxuICAgICAge2Jhc2U6ICdSJyxjaGFyczogXCJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXCJ9LFxyXG4gICAgICB7YmFzZTogJ1MnLGNoYXJzOiBcIlxcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRcIn0sXHJcbiAgICAgIHtiYXNlOiAnVCcsY2hhcnM6IFwiXFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZcIn0sXHJcbiAgICAgIHtiYXNlOiAnVGgnLCBjaGFyczogXCJcXHUwMERFXCJ9LFxyXG4gICAgICB7YmFzZTogJ1RaJywgY2hhcnM6IFwiXFx1QTcyOFwifSxcclxuICAgICAge2Jhc2U6ICdVJywgY2hhcnM6IFwiXFx1MjRDQVxcdUZGMzVcXHhEOVxceERBXFx4REJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xceERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NFwifSxcclxuICAgICAge2Jhc2U6ICdWJywgY2hhcnM6IFwiXFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NVwifSxcclxuICAgICAge2Jhc2U6ICdWWScsIGNoYXJzOiBcIlxcdUE3NjBcIn0sXHJcbiAgICAgIHtiYXNlOiAnVycsIGNoYXJzOiBcIlxcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3MlwifSxcclxuICAgICAge2Jhc2U6ICdYJywgY2hhcnM6IFwiXFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q1wifSxcclxuICAgICAge2Jhc2U6ICdZJywgY2hhcnM6IFwiXFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx4RERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXCJ9LFxyXG4gICAgICB7YmFzZTogJ1onLCBjaGFyczogXCJcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXCJ9LFxyXG4gICAgICB7YmFzZTogJ2EnLCBjaGFyczogXCJcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXFx1MDI1MVwifSxcclxuICAgICAge2Jhc2U6ICdhYScsIGNoYXJzOiBcIlxcdUE3MzNcIn0sXHJcbiAgICAgIHtiYXNlOiAnYWUnLGNoYXJzOiBcIlxcdTAwRTZcXHUwMUZEXFx1MDFFM1wifSxcclxuICAgICAge2Jhc2U6ICdhbycsY2hhcnM6IFwiXFx1QTczNVwifSxcclxuICAgICAge2Jhc2U6ICdhdScsY2hhcnM6IFwiXFx1QTczN1wifSxcclxuICAgICAge2Jhc2U6ICdhdicsY2hhcnM6IFwiXFx1QTczOVxcdUE3M0JcIn0sXHJcbiAgICAgIHtiYXNlOiAnYXknLGNoYXJzOiBcIlxcdUE3M0RcIn0sXHJcbiAgICAgIHtiYXNlOiAnYicsY2hhcnM6IFwiXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNcXHUwMTgyXCJ9LFxyXG4gICAgICB7YmFzZTogJ2MnLGNoYXJzOiBcIlxcdUZGNDNcXHUyNEQyXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NFwifSxcclxuICAgICAge2Jhc2U6ICdkJyxjaGFyczogXCJcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHUwMThCXFx1MTNFN1xcdTA1MDFcXHVBN0FBXCJ9LFxyXG4gICAgICB7YmFzZTogJ2RoJyxjaGFyczogXCJcXHUwMEYwXCJ9LFxyXG4gICAgICB7YmFzZTogJ2R6JyxjaGFyczogXCJcXHUwMUYzXFx1MDFDNlwifSxcclxuICAgICAge2Jhc2U6ICdlJyxjaGFyczogXCJcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDFERFwiLCAgICAgICAgICAgIH0sIHtiYXNlOiAnZicsY2hhcnM6IFwiXFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlwifSxcclxuICAgICAge2Jhc2U6ICdmZicsY2hhcnM6IFwiXFx1RkIwMFwifSxcclxuICAgICAge2Jhc2U6ICdmaScsY2hhcnM6IFwiXFx1RkIwMVwifSxcclxuICAgICAge2Jhc2U6ICdmbCcsY2hhcnM6IFwiXFx1RkIwMlwifSxcclxuICAgICAge2Jhc2U6ICdmZmknLGNoYXJzOiBcIlxcdUZCMDNcIn0sXHJcbiAgICAgIHtiYXNlOiAnZmZsJyxjaGFyczogXCJcXHVGQjA0XCJ9LFxyXG4gICAgICB7YmFzZTogJ2cnLGNoYXJzOiBcIlxcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdUE3N0ZcXHUxRDc5XCJ9LFxyXG4gICAgICB7YmFzZTogJ2gnLCBjaGFyczogXCJcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NVwifSxcclxuICAgICAge2Jhc2U6ICdodicsY2hhcnM6IFwiXFx1MDE5NVwifSxcclxuICAgICAge2Jhc2U6ICdpJywgY2hhcnM6IFwiXFx1MjREOFxcdUZGNDlcXHhFQ1xceEVEXFx4RUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHhFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFcIn0sXHJcbiAgICAgIHtiYXNlOiAnaicsY2hhcnM6IFwiXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDlcIn0sXHJcbiAgICAgIHtiYXNlOiAnaycsIGNoYXJzOiBcIlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNcIn0sXHJcbiAgICAgIHtiYXNlOiAnbCcsIGNoYXJzOiBcIlxcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N1xcdTAyNkRcIn0sXHJcbiAgICAgIHtiYXNlOiAnbGonLCBjaGFyczogXCJcXHUwMUM5XCJ9LFxyXG4gICAgICB7YmFzZTogJ20nLCBjaGFyczogXCJcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXCJ9LFxyXG4gICAgICB7YmFzZTogJ24nLCBjaGFyczogXCJcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx4RjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNVxcdTA0M0JcXHUwNTA5XCJ9LFxyXG4gICAgICB7YmFzZTogJ25qJywgY2hhcnM6IFwiXFx1MDFDQ1wifSxcclxuICAgICAge2Jhc2U6ICdvJywgY2hhcnM6IFwiXFx1MjRERVxcdUZGNEZcXHhGMlxceEYzXFx4RjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx4RjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHhGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHhGOFxcdTAxRkZcXHVBNzRCXFx1QTc0RFxcdTAyNzVcXHUwMjU0XFx1MUQxMVwifSxcclxuICAgICAge2Jhc2U6ICdvZScsIGNoYXJzOiBcIlxcdTAxNTNcIn0sXHJcbiAgICAgIHtiYXNlOiAnb2knLCBjaGFyczogXCJcXHUwMUEzXCJ9LFxyXG4gICAgICB7YmFzZTogJ29vJywgY2hhcnM6IFwiXFx1QTc0RlwifSxcclxuICAgICAge2Jhc2U6ICdvdScsIGNoYXJzOiBcIlxcdTAyMjNcIn0sXHJcbiAgICAgIHtiYXNlOiAncCcsIGNoYXJzOiBcIlxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NVxcdTAzQzFcIn0sXHJcbiAgICAgIHtiYXNlOiAncScsIGNoYXJzOiBcIlxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XCJ9LFxyXG4gICAgICB7YmFzZTogJ3InLCBjaGFyczogXCJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXCJ9LFxyXG4gICAgICB7YmFzZTogJ3MnLCBjaGFyczogXCJcXHUyNEUyXFx1RkY1M1xcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXFx1MDI4MlwifSxcclxuICAgICAge2Jhc2U6ICdzcycsIGNoYXJzOiBcIlxceERGXCJ9LFxyXG4gICAgICB7YmFzZTogJ3QnLCBjaGFyczogXCJcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODdcIn0sXHJcbiAgICAgIHtiYXNlOiAndGgnLCBjaGFyczogXCJcXHUwMEZFXCJ9LFxyXG4gICAgICB7YmFzZTogJ3R6JywgY2hhcnM6IFwiXFx1QTcyOVwifSxcclxuICAgICAge2Jhc2U6ICd1JywgY2hhcnM6IFwiXFx1MjRFNFxcdUZGNTVcXHhGOVxceEZBXFx4RkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxceEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OVwifSxcclxuICAgICAge2Jhc2U6ICd2JywgY2hhcnM6IFwiXFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q1wifSxcclxuICAgICAge2Jhc2U6ICd2eScsIGNoYXJzOiBcIlxcdUE3NjFcIn0sXHJcbiAgICAgIHtiYXNlOiAndycsIGNoYXJzOiBcIlxcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNcIn0sXHJcbiAgICAgIHtiYXNlOiAneCcsIGNoYXJzOiBcIlxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERcIn0sXHJcbiAgICAgIHtiYXNlOiAneScsIGNoYXJzOiBcIlxcdTI0RThcXHVGRjU5XFx1MUVGM1xceEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxceEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXCJ9LFxyXG4gICAgICB7YmFzZTogJ3onLCBjaGFyczogXCJcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXCJ9XHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBkaWFjcml0aWNzTWFwOiBhbnkgPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVwbGFjZW1lbnRMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGxldCBjaGFycyA9IHJlcGxhY2VtZW50TGlzdFtpXS5jaGFycztcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGFycy5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgIGRpYWNyaXRpY3NNYXBbY2hhcnNbal1dID0gcmVwbGFjZW1lbnRMaXN0W2ldLmJhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvW15cXHUwMDAwLVxcdTAwN2VdL2csIChjKSA9PiBkaWFjcml0aWNzTWFwW2NdIHx8IGMpO1xyXG4gIH1cclxufSIsIi8vIGlkZWEgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYThtL2FuZ3VsYXItZmlsdGVyXHJcblxyXG5pbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzU3RyaW5nLCBpc1VuZGVmaW5lZH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd3cmFwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV3JhcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZywgd3JhcDogc3RyaW5nLCBlbmRzPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoaXNTdHJpbmcoaW5wdXQpICYmICFpc1VuZGVmaW5lZCh3cmFwKSkgPyBbd3JhcCwgaW5wdXQsIGVuZHMgfHwgd3JhcF0uam9pbignJykgOiBpbnB1dDtcclxuICB9XHJcbn0iLCJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzU3RyaW5nLCBpc051bGx9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtuYW1lOiAnd2l0aCd9KVxyXG5leHBvcnQgY2xhc3MgV2l0aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZywgc3RhcnQ6IHN0cmluZ3xudWxsID0gbnVsbCwgZW5kczogc3RyaW5nfG51bGwgPSBudWxsLCBjc2Vuc2l0aXZlOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSB8fCAoaXNOdWxsKHN0YXJ0KSAmJiBpc051bGwoZW5kcykpIHx8IChzdGFydCA9PSAnJykgfHwgKGVuZHMgPT0gJycpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQgPSAoY3NlbnNpdGl2ZSkgPyBpbnB1dCA6IGlucHV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBcclxuICAgIGlmICghaXNOdWxsKHN0YXJ0KSAmJiAhaXNOdWxsKGVuZHMpKSB7XHJcbiAgICAgIGxldCBhOiBib29sZWFuID0gIWlucHV0LmluZGV4T2YoKGNzZW5zaXRpdmUpID8gc3RhcnQgOiBzdGFydC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgbGV0IGI6IGJvb2xlYW4gPSBpbnB1dC5pbmRleE9mKChjc2Vuc2l0aXZlKSA/IGVuZHMgOiBlbmRzLnRvTG93ZXJDYXNlKCksIChpbnB1dC5sZW5ndGggLSBlbmRzLmxlbmd0aCkpICE9PSAtMTtcclxuICAgICAgXHJcbiAgICAgIGlmIChhID09IHRydWUgJiYgYiA9PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCFpc051bGwoc3RhcnQpKSB7XHJcbiAgICAgIHJldHVybiAhaW5wdXQuaW5kZXhPZigoY3NlbnNpdGl2ZSkgPyBzdGFydCA6IHN0YXJ0LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIWlzTnVsbChlbmRzKSkge1xyXG4gICAgICBsZXQgcG9zaXRpb246IGFueSA9IGlucHV0Lmxlbmd0aCAtIGVuZHMubGVuZ3RoO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGlucHV0LmluZGV4T2YoKGNzZW5zaXRpdmUpID8gZW5kcyA6IGVuZHMudG9Mb3dlckNhc2UoKSwgcG9zaXRpb24pICE9PSAtMTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdyZXZlcnNlU3RyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV2ZXJzZVN0clBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oaW5wdXQpLnJldmVyc2UoKS5qb2luKCcnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0xlZnRQYWRQaXBlfSBmcm9tICcuL2xlZnQtcGFkLnBpcGUnO1xyXG5pbXBvcnQge01hdGNoUGlwZX0gZnJvbSAnLi9tYXRjaC5waXBlJztcclxuaW1wb3J0IHtQYWRQaXBlfSBmcm9tICcuL3BhZC5waXBlJztcclxuaW1wb3J0IHtSZXBsYWNlUGlwZX0gZnJvbSAnLi9yZXBsYWNlLnBpcGUnO1xyXG5pbXBvcnQge1JpZ2h0UGFkUGlwZX0gZnJvbSAnLi9yaWdodC1wYWQucGlwZSc7XHJcbmltcG9ydCB7U3BsaXRQaXBlfSBmcm9tICcuL3NwbGl0LnBpcGUnO1xyXG5pbXBvcnQge1Rlc3RQaXBlfSBmcm9tICcuL3Rlc3QucGlwZSc7XHJcbmltcG9ydCB7VHJpbVBpcGV9IGZyb20gJy4vdHJpbS5waXBlJztcclxuaW1wb3J0IHtOZXdsaW5lc1BpcGV9IGZyb20gJy4vbmV3bGluZXMucGlwZSc7XHJcbmltcG9ydCB7Q2FwaXRhbGl6ZVBpcGV9IGZyb20gJy4vY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHtVcHBlckZpcnN0UGlwZX0gZnJvbSAnLi91cHBlcmZpcnN0LnBpcGUnO1xyXG5pbXBvcnQge1RlbXBsYXRlUGlwZX0gZnJvbSAnLi90ZW1wbGF0ZS5waXBlJztcclxuaW1wb3J0IHtFbmNvZGVVUklQaXBlfSBmcm9tICcuL2VuY29kZS11cmkucGlwZSc7XHJcbmltcG9ydCB7RW5jb2RlVVJJQ29tcG9uZW50UGlwZX0gZnJvbSAnLi9lbmNvZGUtdXJpLWNvbXBvbmVudC5waXBlJztcclxuaW1wb3J0IHtEZWNvZGVVUklQaXBlfSBmcm9tICcuL2RlY29kZS11cmkucGlwZSc7XHJcbmltcG9ydCB7RGVjb2RlVVJJQ29tcG9uZW50UGlwZX0gZnJvbSAnLi9kZWNvZGUtdXJpLWNvbXBvbmVudC5waXBlJztcclxuaW1wb3J0IHtUcnVuY2F0ZVBpcGV9IGZyb20gJy4vdHJ1bmNhdGUucGlwZSc7XHJcbmltcG9ydCB7UmVwZWF0UGlwZX0gZnJvbSAnLi9yZXBlYXQucGlwZSc7XHJcbmltcG9ydCB7U2x1Z2lmeVBpcGV9IGZyb20gJy4vc2x1Z2lmeS5waXBlJztcclxuaW1wb3J0IHtTdHJpcFRhZ3NQaXBlfSBmcm9tIFwiLi9zdHJpcC10YWdzLnBpcGVcIjtcclxuaW1wb3J0IHtMYXRpbml6ZVBpcGV9IGZyb20gXCIuL2xhdGluaXplLnBpcGVcIjtcclxuaW1wb3J0IHtXcmFwUGlwZX0gZnJvbSBcIi4vd3JhcC5waXBlXCI7XHJcbmltcG9ydCB7V2l0aFBpcGV9IGZyb20gXCIuL3dpdGgucGlwZVwiO1xyXG5pbXBvcnQge1JldmVyc2VTdHJQaXBlfSBmcm9tIFwiLi9yZXZlcnNlLXN0ci5waXBlXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExlZnRQYWRQaXBlLFxyXG4gICAgTWF0Y2hQaXBlLFxyXG4gICAgUGFkUGlwZSxcclxuICAgIFJlcGxhY2VQaXBlLFxyXG4gICAgUmlnaHRQYWRQaXBlLFxyXG4gICAgU3BsaXRQaXBlLFxyXG4gICAgVGVzdFBpcGUsXHJcbiAgICBUcmltUGlwZSxcclxuICAgIE5ld2xpbmVzUGlwZSxcclxuICAgIENhcGl0YWxpemVQaXBlLFxyXG4gICAgVXBwZXJGaXJzdFBpcGUsXHJcbiAgICBUZW1wbGF0ZVBpcGUsXHJcbiAgICBFbmNvZGVVUklQaXBlLFxyXG4gICAgRW5jb2RlVVJJQ29tcG9uZW50UGlwZSxcclxuICAgIERlY29kZVVSSVBpcGUsXHJcbiAgICBEZWNvZGVVUklDb21wb25lbnRQaXBlLFxyXG4gICAgVHJ1bmNhdGVQaXBlLFxyXG4gICAgUmVwZWF0UGlwZSxcclxuICAgIFNsdWdpZnlQaXBlLFxyXG4gICAgU3RyaXBUYWdzUGlwZSxcclxuICAgIExhdGluaXplUGlwZSxcclxuICAgIFdyYXBQaXBlLFxyXG4gICAgV2l0aFBpcGUsXHJcbiAgICBSZXZlcnNlU3RyUGlwZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTGVmdFBhZFBpcGUsXHJcbiAgICBNYXRjaFBpcGUsXHJcbiAgICBQYWRQaXBlLFxyXG4gICAgUmVwbGFjZVBpcGUsXHJcbiAgICBSaWdodFBhZFBpcGUsXHJcbiAgICBTcGxpdFBpcGUsXHJcbiAgICBUZXN0UGlwZSxcclxuICAgIFRyaW1QaXBlLFxyXG4gICAgTmV3bGluZXNQaXBlLFxyXG4gICAgQ2FwaXRhbGl6ZVBpcGUsXHJcbiAgICBVcHBlckZpcnN0UGlwZSxcclxuICAgIFRlbXBsYXRlUGlwZSxcclxuICAgIEVuY29kZVVSSVBpcGUsXHJcbiAgICBFbmNvZGVVUklDb21wb25lbnRQaXBlLFxyXG4gICAgRGVjb2RlVVJJUGlwZSxcclxuICAgIERlY29kZVVSSUNvbXBvbmVudFBpcGUsXHJcbiAgICBUcnVuY2F0ZVBpcGUsXHJcbiAgICBSZXBlYXRQaXBlLFxyXG4gICAgU2x1Z2lmeVBpcGUsXHJcbiAgICBTdHJpcFRhZ3NQaXBlLFxyXG4gICAgTGF0aW5pemVQaXBlLFxyXG4gICAgV3JhcFBpcGUsXHJcbiAgICBXaXRoUGlwZSxcclxuICAgIFJldmVyc2VTdHJQaXBlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdTdHJpbmdQaXBlc01vZHVsZSB7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5nQWdncmVnYXRlUGlwZXNNb2R1bGUgfSBmcm9tICcuL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUubW9kdWxlJztcclxuaW1wb3J0IHsgTmdBcnJheVBpcGVzTW9kdWxlIH0gZnJvbSAnLi9hcnJheS9hcnJheS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ0Jvb2xlYW5QaXBlc01vZHVsZSB9IGZyb20gJy4vYm9vbGVhbi9ib29sZWFuLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5nTWF0aFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9tYXRoL21hdGgubW9kdWxlJztcclxuaW1wb3J0IHsgTmdPYmplY3RQaXBlc01vZHVsZSB9IGZyb20gJy4vb2JqZWN0L29iamVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ1N0cmluZ1BpcGVzTW9kdWxlIH0gZnJvbSAnLi9zdHJpbmcvc3RyaW5nLm1vZHVsZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ0FycmF5UGlwZXNNb2R1bGUsXHJcbiAgICBOZ01hdGhQaXBlc01vZHVsZSxcclxuICAgIE5nQm9vbGVhblBpcGVzTW9kdWxlLFxyXG4gICAgTmdTdHJpbmdQaXBlc01vZHVsZSxcclxuICAgIE5nT2JqZWN0UGlwZXNNb2R1bGUsXHJcbiAgICBOZ0FnZ3JlZ2F0ZVBpcGVzTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdQaXBlc01vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyIsImNvdW50IiwidHNsaWJfMS5fX3NwcmVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxTQUFnQixXQUFXLENBQUUsS0FBVTtJQUVyQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsQ0FBQztDQUNyQzs7Ozs7QUFFRCxTQUFnQixNQUFNLENBQUUsS0FBVTtJQUVoQyxPQUFPLEtBQUssS0FBSyxJQUFJLENBQUM7Q0FDdkI7Ozs7O0FBRUQsU0FBZ0IsUUFBUSxDQUFFLEtBQVU7SUFFbEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7Q0FDbEM7Ozs7O0FBRUQsU0FBZ0IsY0FBYyxDQUFFLEtBQVU7SUFFeEMsT0FBTyxRQUFRLENBQUMs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

/***/ }),

/***/ "./node_modules/detect-passive-events/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),

/***/ "./node_modules/ng5-slider/esm5/ng5-slider.js":
/*!****************************************************!*\
  !*** ./node_modules/ng5-slider/esm5/ng5-slider.js ***!
  \****************************************************/
/*! exports provided: Ng5SliderModule, ChangeContext, PointerType, LabelType, Options, ɵo, ɵi, ɵl, ɵh, ɵd, ɵc, ɵg, ɵk, ɵf, ɵj, ɵb, ɵe, ɵn, ɵa, ɵm, ɵp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng5SliderModule", function() { return Ng5SliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeContext", function() { return ChangeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerType", function() { return PointerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelType", function() { return LabelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return JqLiteWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CeilLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return CmbLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return FlrLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return FullBarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return LeftOutSelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return MaxHDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return MaxLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return MinHDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return MinLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RightOutSelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SelBarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return TicksDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return TooltipWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! detect-passive-events */ "./node_modules/detect-passive-events/lib/index.js");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(detect_passive_events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var PointerType = {
    Min: 0,
    Max: 1,
};
PointerType[PointerType.Min] = "Min";
PointerType[PointerType.Max] = "Max";
var LabelType = {
    Low: 0,
    High: 1,
    Floor: 2,
    Ceil: 3,
    TickValue: 4,
};
LabelType[LabelType.Low] = "Low";
LabelType[LabelType.High] = "High";
LabelType[LabelType.Floor] = "Floor";
LabelType[LabelType.Ceil] = "Ceil";
LabelType[LabelType.TickValue] = "TickValue";
var Options = /** @class */ (function () {
    function Options() {
        this.floor = 0;
        this.ceil = null;
        this.step = 1;
        this.minRange = null;
        this.maxRange = null;
        this.pushRange = false;
        this.minLimit = null;
        this.maxLimit = null;
        this.translate = null;
        this.combineLabels = null;
        this.getLegend = null;
        this.stepsArray = null;
        this.bindIndexForStepsArray = false;
        this.draggableRange = false;
        this.draggableRangeOnly = false;
        this.showSelectionBar = false;
        this.showSelectionBarEnd = false;
        this.showSelectionBarFromValue = null;
        this.showOuterSelectionBars = false;
        this.hidePointerLabels = false;
        this.hideLimitLabels = false;
        this.autoHideLimitLabels = true;
        this.readOnly = false;
        this.disabled = false;
        this.interval = 350;
        this.showTicks = false;
        this.showTicksValues = false;
        this.tickStep = null;
        this.tickValueStep = 1;
        this.ticksArray = null;
        this.ticksTooltip = null;
        this.ticksValuesTooltip = null;
        this.vertical = false;
        this.getSelectionBarColor = null;
        this.getTickColor = null;
        this.getPointerColor = null;
        this.keyboardSupport = true;
        this.scale = 1;
        this.enforceStep = true;
        this.enforceRange = false;
        this.noSwitching = false;
        this.onlyBindHandles = false;
        this.rightToLeft = false;
        this.reversedControls = false;
        this.boundPointerLabels = true;
        this.logScale = false;
        this.customValueToPosition = null;
        this.customPositionToValue = null;
        this.precisionLimit = 12;
        this.selectionBarGradient = null;
        this.ariaLabel = null;
        this.ariaLabelledBy = null;
        this.ariaLabelHigh = null;
        this.ariaLabelledByHigh = null;
        this.handleDimension = null;
        this.barDimension = null;
    }
    return Options;
}());
var ChangeContext = /** @class */ (function () {
    function ChangeContext() {
    }
    return ChangeContext;
}());
var ValueHelper = /** @class */ (function () {
    function ValueHelper() {
    }
    ValueHelper.linearValueToPosition = function (val, minVal, maxVal) {
        var range = maxVal - minVal;
        return (val - minVal) / range;
    };
    ValueHelper.logValueToPosition = function (val, minVal, maxVal) {
        val = Math.log(val);
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        var range = maxVal - minVal;
        return (val - minVal) / range;
    };
    ValueHelper.linearPositionToValue = function (percent, minVal, maxVal) {
        return percent * (maxVal - minVal) + minVal;
    };
    ValueHelper.logPositionToValue = function (percent, minVal, maxVal) {
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        var value = percent * (maxVal - minVal) + minVal;
        return Math.exp(value);
    };
    ValueHelper.findStepIndex = function (modelValue, stepsArray) {
        var differences = stepsArray.map(function (step) { return Math.abs(modelValue - step.value); });
        var minDifferenceIndex = 0;
        for (var index = 0; index < stepsArray.length; index++) {
            if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
                minDifferenceIndex = index;
            }
        }
        return minDifferenceIndex;
    };
    return ValueHelper;
}());
var JqLiteWrapper = /** @class */ (function () {
    function JqLiteWrapper(elemRef, renderer) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.eventListeners = {};
    }
    JqLiteWrapper.prototype.addClass = function (clazz) {
        this.renderer.addClass(this.elemRef.nativeElement, clazz);
    };
    JqLiteWrapper.prototype.removeClass = function (clazz) {
        this.renderer.removeClass(this.elemRef.nativeElement, clazz);
    };
    JqLiteWrapper.prototype.hasClass = function (clazz) {
        return this.elemRef.nativeElement.classList.contains(clazz);
    };
    JqLiteWrapper.prototype.html = function (html) {
        this.elemRef.nativeElement.innerHTML = html;
    };
    JqLiteWrapper.prototype.css = function (style, value) {
        if (value !== '') {
            this.renderer.setStyle(this.elemRef.nativeElement, style, value);
        }
        else {
            this.renderer.removeStyle(this.elemRef.nativeElement, style);
        }
    };
    JqLiteWrapper.prototype.attr = function (attr, value) {
        if (value !== null) {
            this.renderer.setAttribute(this.elemRef.nativeElement, attr, value);
        }
        else {
            this.renderer.removeAttribute(this.elemRef.nativeElement, attr);
        }
    };
    JqLiteWrapper.prototype.getBoundingClientRect = function () {
        return this.elemRef.nativeElement.getBoundingClientRect();
    };
    JqLiteWrapper.prototype.focus = function () {
        this.elemRef.nativeElement.focus();
    };
    JqLiteWrapper.prototype.on = function (eventName, callback) {
        if (!this.eventListeners.hasOwnProperty(eventName)) {
            this.eventListeners[eventName] = [];
        }
        var unsubscribe = this.renderer.listen(this.elemRef.nativeElement, eventName, callback);
        this.eventListeners[eventName].push(unsubscribe);
    };
    JqLiteWrapper.prototype.onPassive = function (eventName, callback) {
        var _this = this;
        if (!detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport) {
            this.on(eventName, callback);
            return;
        }
        if (!this.eventListeners.hasOwnProperty(eventName)) {
            this.eventListeners[eventName] = [];
        }
        this.elemRef.nativeElement.addEventListener(eventName, callback, { passive: true, capture: false });
        var unsubscribe = function () {
            _this.elemRef.nativeElement.removeEventListener(eventName, callback, { passive: true, capture: false });
        };
        this.eventListeners[eventName].push(unsubscribe);
    };
    JqLiteWrapper.prototype.off = function (eventName) {
        if (eventName) {
            if (this.eventListeners.hasOwnProperty(eventName)) {
                try {
                    for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.eventListeners[eventName]), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var unsubscribe = _b.value;
                        unsubscribe();
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                delete this.eventListeners[eventName];
            }
        }
        else {
            try {
                for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(this.eventListeners)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var eName = _e.value;
                    this.off(eName);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        var e_1, _c, e_2, _f;
    };
    return JqLiteWrapper;
}());
var ThrottledFunc = /** @class */ (function () {
    function ThrottledFunc(func, wait) {
        this.previous = 0;
        this.timeout = null;
        this.func = func;
        this.wait = wait;
    }
    ThrottledFunc.prototype.call = function () {
        var _this = this;
        var now = this.getTime();
        var remaining = this.wait - (now - this.previous);
        if (remaining <= 0) {
            clearTimeout(this.timeout);
            this.timeout = null;
            this.previous = now;
            this.func();
        }
        else if (this.timeout === null) {
            this.timeout = setTimeout(function () { return _this.callLater(); }, remaining);
        }
    };
    ThrottledFunc.prototype.getTime = function () {
        return Date.now();
    };
    ThrottledFunc.prototype.callLater = function () {
        this.previous = this.getTime();
        this.timeout = null;
        this.func();
    };
    return ThrottledFunc;
}());
var CompatibilityHelper = /** @class */ (function () {
    function CompatibilityHelper() {
    }
    CompatibilityHelper.isTouchEvent = function (event) {
        if (((window)).TouchEvent !== undefined) {
            return event instanceof TouchEvent;
        }
        return event.touches !== undefined;
    };
    return CompatibilityHelper;
}());
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.roundToPrecisionLimit = function (value, precisionLimit) {
        return +(value.toPrecision(precisionLimit));
    };
    MathHelper.clampToRange = function (value, floor, ceil) {
        return Math.min(Math.max(value, floor), ceil);
    };
    return MathHelper;
}());
var Tick = /** @class */ (function () {
    function Tick() {
    }
    return Tick;
}());
var Dragging = /** @class */ (function () {
    function Dragging() {
        this.active = false;
        this.value = 0;
        this.difference = 0;
        this.position = 0;
        this.lowLimit = 0;
        this.highLimit = 0;
    }
    return Dragging;
}());
var HandleType = {
    Low: 0,
    High: 1,
};
HandleType[HandleType.Low] = "Low";
HandleType[HandleType.High] = "High";
var HandleLabelType = {
    Min: 0,
    Max: 1,
};
HandleLabelType[HandleLabelType.Min] = "Min";
HandleLabelType[HandleLabelType.Max] = "Max";
var SliderElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SliderElement, _super);
    function SliderElement(elemRef, renderer) {
        var _this = _super.call(this, elemRef, renderer) || this;
        _this.position = 0;
        _this.alwaysHide = false;
        return _this;
    }
    return SliderElement;
}(JqLiteWrapper));
var RightOutSelDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RightOutSelDirective, _super);
    function RightOutSelDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return RightOutSelDirective;
}(SliderElement));
RightOutSelDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderRightOutSelElem]' },] },
];
RightOutSelDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var LeftOutSelDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LeftOutSelDirective, _super);
    function LeftOutSelDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return LeftOutSelDirective;
}(SliderElement));
LeftOutSelDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderLeftOutSelElem]' },] },
];
LeftOutSelDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var FullBarDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FullBarDirective, _super);
    function FullBarDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return FullBarDirective;
}(SliderElement));
FullBarDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderFullBarElem]' },] },
];
FullBarDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var SelBarDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelBarDirective, _super);
    function SelBarDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return SelBarDirective;
}(SliderElement));
SelBarDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderSelBarElem]' },] },
];
SelBarDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var MinHDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MinHDirective, _super);
    function MinHDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return MinHDirective;
}(SliderElement));
MinHDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderMinHElem]' },] },
];
MinHDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var MaxHDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MaxHDirective, _super);
    function MaxHDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return MaxHDirective;
}(SliderElement));
MaxHDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderMaxHElem]' },] },
];
MaxHDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var FlrLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlrLabDirective, _super);
    function FlrLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return FlrLabDirective;
}(SliderElement));
FlrLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderFlrLabElem]' },] },
];
FlrLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var CeilLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CeilLabDirective, _super);
    function CeilLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return CeilLabDirective;
}(SliderElement));
CeilLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderCeilLabElem]' },] },
];
CeilLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var MinLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MinLabDirective, _super);
    function MinLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return MinLabDirective;
}(SliderElement));
MinLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderMinLabElem]' },] },
];
MinLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var MaxLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MaxLabDirective, _super);
    function MaxLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return MaxLabDirective;
}(SliderElement));
MaxLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderMaxLabElem]' },] },
];
MaxLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var CmbLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CmbLabDirective, _super);
    function CmbLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return CmbLabDirective;
}(SliderElement));
CmbLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderCmbLabElem]' },] },
];
CmbLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var TicksDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TicksDirective, _super);
    function TicksDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return TicksDirective;
}(SliderElement));
TicksDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderTicksElem]' },] },
];
TicksDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var NG5_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SliderComponent; }),
    multi: true,
};
var SliderComponent = /** @class */ (function () {
    function SliderComponent(renderer, elementRef, changeDetectionRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectionRef = changeDetectionRef;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.highValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userChangeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._options = new Options();
        this.viewOptions = new Options();
        this.barStyle = {};
        this.minPointerStyle = {};
        this.maxPointerStyle = {};
        this.showTicks = false;
        this.ticks = [];
        this.sliderElementVerticalClass = false;
        this.sliderElementDisabledAttr = null;
        this.dragging = new Dragging();
        this.handleHalfDim = 0;
        this.maxPos = 0;
        this.precisionLimit = 12;
        this.step = 1;
        this.tracking = null;
        this.minValue = 0;
        this.maxValue = 0;
        this.valueRange = 0;
        this.intermediateTicks = false;
        this.initHasRun = false;
        this.firstKeyDown = false;
        this.cmbLabelShown = false;
        this.currentFocusElement = null;
        this.onMoveUnsubscribe = null;
        this.onEndUnsubscribe = null;
        this.onTouchedCallback = null;
        this.onChangeCallback = null;
    }
    Object.defineProperty(SliderComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            this._value = +newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "highValue", {
        get: function () {
            return this._highValue;
        },
        set: function (newHighValue) {
            this._highValue = +newHighValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (newOptions) {
            this._options = newOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "manualRefresh", {
        set: function (manualRefresh) {
            var _this = this;
            this.unsubscribeManualRefresh();
            this.manualRefreshSubscription = manualRefresh.subscribe(function () {
                setTimeout(function () { return _this.calcViewDimensions(); });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "range", {
        get: function () {
            return this.value !== undefined && this.highValue !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnInit = function () {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        this.setDisabledStateAttr();
        this.setVerticalClass();
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.thrOnLowHandleChange = new ThrottledFunc(function () { _this.onLowHandleChange(); }, this.viewOptions.interval);
        this.thrOnHighHandleChange = new ThrottledFunc(function () { _this.onHighHandleChange(); }, this.viewOptions.interval);
        this.applyOptions();
        this.syncLowValue();
        if (this.range) {
            this.syncHighValue();
        }
        this.manageElementsStyle();
        this.setDisabledStateAttr();
        this.calcViewDimensions();
        this.setMinAndMax();
        this.addAccessibility();
        this.updateCeilLab();
        this.updateFloorLab();
        this.initHandles();
        this.manageEventsBindings();
        this.initHasRun = true;
        if (this.value !== this.viewLowValue || (this.range && this.highValue !== this.viewHighValue)) {
            setTimeout(function () { return _this.applyModel(false); });
        }
        this.changeDetectionRef.detectChanges();
    };
    SliderComponent.prototype.ngOnChanges = function (changes) {
        if (changes["options"]) {
            this.onChangeOptions(changes["options"].previousValue, changes["options"].currentValue);
        }
        if (changes["value"]) {
            this.onChangeValue(changes["value"].previousValue, changes["value"].currentValue);
        }
        if (changes["highValue"]) {
            this.onChangeHighValue(changes["highValue"].previousValue, changes["highValue"].currentValue);
        }
    };
    SliderComponent.prototype.onChangeOptions = function (oldValue, newValue) {
        if (!this.initHasRun || newValue === oldValue) {
            return;
        }
        this.applyOptions();
        this.syncLowValue();
        if (this.range) {
            this.syncHighValue();
        }
        this.resetSlider();
    };
    SliderComponent.prototype.onChangeValue = function (oldValue, newValue) {
        if (!this.initHasRun || newValue === oldValue) {
            return;
        }
        this.thrOnLowHandleChange.call();
    };
    SliderComponent.prototype.onChangeHighValue = function (oldValue, newValue) {
        if (!this.initHasRun || newValue === oldValue) {
            return;
        }
        if (newValue != null) {
            this.thrOnHighHandleChange.call();
        }
        if ((this.range && newValue == null) ||
            (!this.range && newValue != null)) {
            this.applyOptions();
            this.resetSlider();
        }
    };
    SliderComponent.prototype.onResize = function (event) {
        this.calcViewDimensions();
    };
    SliderComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeManualRefresh();
        this.unbindEvents();
        this.currentFocusElement = null;
    };
    SliderComponent.prototype.writeValue = function (obj) {
        if (obj instanceof Array) {
            var oldValue = this.value;
            var oldHighValue = this.highValue;
            this.value = obj[0];
            this.highValue = obj[1];
            this.onChangeValue(oldValue, this.value);
            this.onChangeHighValue(oldHighValue, this.highValue);
        }
        else {
            var oldValue = this.value;
            this.value = obj;
            this.onChangeValue(oldValue, this.value);
        }
    };
    SliderComponent.prototype.registerOnChange = function (onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    };
    SliderComponent.prototype.registerOnTouched = function (onTouchedCallback) {
        this.onTouchedCallback = onTouchedCallback;
    };
    SliderComponent.prototype.setDisabledState = function (isDisabled) {
        if (this.viewOptions) {
            this.viewOptions.disabled = isDisabled;
            this.setDisabledStateAttr();
        }
    };
    SliderComponent.prototype.unsubscribeManualRefresh = function () {
        if (this.manualRefreshSubscription) {
            this.manualRefreshSubscription.unsubscribe();
            this.manualRefreshSubscription = null;
        }
    };
    SliderComponent.prototype.getCurrentTrackingValue = function () {
        if (this.tracking === null) {
            return null;
        }
        return this.tracking === HandleType.Low ? this.viewLowValue : this.viewHighValue;
    };
    SliderComponent.prototype.syncLowValue = function () {
        if (this.viewOptions.stepsArray) {
            if (!this.viewOptions.bindIndexForStepsArray) {
                this.viewLowValue = ValueHelper.findStepIndex(this.value, this.viewOptions.stepsArray);
            }
            else {
                this.viewLowValue = this.value;
            }
        }
        else {
            this.viewLowValue = this.value;
        }
    };
    SliderComponent.prototype.syncHighValue = function () {
        if (this.viewOptions.stepsArray) {
            if (!this.viewOptions.bindIndexForStepsArray) {
                this.viewHighValue = ValueHelper.findStepIndex(this.highValue, this.viewOptions.stepsArray);
            }
            else {
                this.viewHighValue = this.highValue;
            }
        }
        else {
            this.viewHighValue = this.highValue;
        }
    };
    SliderComponent.prototype.getStepValue = function (sliderValue) {
        var step = this.viewOptions.stepsArray[sliderValue];
        return step.value;
    };
    SliderComponent.prototype.applyLowValue = function () {
        if (this.viewOptions.stepsArray) {
            if (!this.viewOptions.bindIndexForStepsArray) {
                this.value = this.getStepValue(this.viewLowValue);
            }
            else {
                this.value = this.viewLowValue;
            }
        }
        else {
            this.value = this.viewLowValue;
        }
    };
    SliderComponent.prototype.applyHighValue = function () {
        if (this.viewOptions.stepsArray) {
            if (!this.viewOptions.bindIndexForStepsArray) {
                this.highValue = this.getStepValue(this.viewHighValue);
            }
            else {
                this.highValue = this.viewHighValue;
            }
        }
        else {
            this.highValue = this.viewHighValue;
        }
    };
    SliderComponent.prototype.onLowHandleChange = function () {
        this.normaliseLowValue();
        if (this.range) {
            this.normaliseRange(PointerType.Min);
        }
        this.syncLowValue();
        if (this.range) {
            this.syncHighValue();
        }
        this.setMinAndMax();
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        this.updateSelectionBar();
        this.updateTicksScale();
        this.updateAriaAttributes();
        if (this.range) {
            this.updateCmbLabel();
        }
    };
    SliderComponent.prototype.onHighHandleChange = function () {
        this.normaliseHighValue();
        this.normaliseRange(PointerType.Max);
        this.syncLowValue();
        this.syncHighValue();
        this.setMinAndMax();
        this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        this.updateSelectionBar();
        this.updateTicksScale();
        this.updateCmbLabel();
        this.updateAriaAttributes();
    };
    SliderComponent.prototype.normaliseLowValue = function () {
        var _this = this;
        if (this.viewOptions.stepsArray) {
            return;
        }
        var normalisedValue = MathHelper.clampToRange(this.value, this.viewOptions.floor, this.viewOptions.ceil);
        if (this.value !== normalisedValue) {
            this.value = normalisedValue;
            setTimeout(function () { return _this.applyModel(false); });
        }
    };
    SliderComponent.prototype.normaliseHighValue = function () {
        var _this = this;
        if (this.viewOptions.stepsArray) {
            return;
        }
        var normalisedHighValue = MathHelper.clampToRange(this.highValue, this.viewOptions.floor, this.viewOptions.ceil);
        if (this.highValue !== normalisedHighValue) {
            this.highValue = normalisedHighValue;
            setTimeout(function () { return _this.applyModel(false); });
        }
    };
    SliderComponent.prototype.normaliseRange = function (changedPointer) {
        var _this = this;
        if (this.viewOptions.stepsArray) {
            return;
        }
        if (this.range && this.value > this.highValue) {
            if (this.viewOptions.noSwitching) {
                if (changedPointer === PointerType.Max) {
                    this.highValue = this.value;
                }
                else if (changedPointer === PointerType.Min) {
                    this.value = this.highValue;
                }
                setTimeout(function () { return _this.applyModel(false); });
            }
            else {
                var tempValue = this.value;
                this.value = this.highValue;
                this.highValue = tempValue;
                if (changedPointer === PointerType.Max) {
                    setTimeout(function () { return _this.thrOnLowHandleChange.call(); });
                }
                else if (changedPointer === PointerType.Min) {
                    setTimeout(function () { return _this.thrOnHighHandleChange.call(); });
                }
                setTimeout(function () { return _this.applyModel(false); });
            }
        }
    };
    SliderComponent.prototype.applyOptions = function () {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        if (this.viewOptions.precisionLimit) {
            this.precisionLimit = this.viewOptions.precisionLimit;
        }
        if (this.viewOptions.step <= 0) {
            this.viewOptions.step = 1;
        }
        this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
        this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
        if (this.viewOptions.draggableRangeOnly) {
            this.viewOptions.draggableRange = true;
        }
        this.viewOptions.showTicks = this.viewOptions.showTicks ||
            this.viewOptions.showTicksValues ||
            !!this.viewOptions.ticksArray;
        if (this.viewOptions.showTicks && (this.viewOptions.tickStep !== null || this.viewOptions.ticksArray)) {
            this.intermediateTicks = true;
        }
        this.showTicks = this.viewOptions.showTicks;
        this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar ||
            this.viewOptions.showSelectionBarEnd ||
            this.viewOptions.showSelectionBarFromValue !== null;
        if (this.viewOptions.stepsArray) {
            this.parseStepsArray();
        }
        else {
            if (this.viewOptions.translate) {
                this.translate = this.viewOptions.translate;
            }
            else {
                this.translate = function (value) { return String(value); };
            }
            this.getLegend = this.viewOptions.getLegend;
        }
        if (this.viewOptions.combineLabels) {
            this.combineLabels = this.viewOptions.combineLabels;
        }
        else {
            this.combineLabels = function (minValue, maxValue) {
                return minValue + ' - ' + maxValue;
            };
        }
    };
    SliderComponent.prototype.parseStepsArray = function () {
        var _this = this;
        this.viewOptions.floor = 0;
        this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
        this.viewOptions.step = 1;
        if (this.viewOptions.translate) {
            this.translate = this.viewOptions.translate;
        }
        else {
            this.translate = function (modelValue) {
                if (_this.viewOptions.bindIndexForStepsArray) {
                    return String(_this.getStepValue(modelValue));
                }
                return String(modelValue);
            };
        }
        this.getLegend = function (index) {
            var step = _this.viewOptions.stepsArray[index];
            return step.legend;
        };
    };
    SliderComponent.prototype.resetSlider = function () {
        this.manageElementsStyle();
        this.addAccessibility();
        this.setMinAndMax();
        this.updateCeilLab();
        this.updateFloorLab();
        this.unbindEvents();
        this.manageEventsBindings();
        this.setDisabledStateAttr();
        this.calcViewDimensions();
        this.refocusPointerIfNeeded();
    };
    SliderComponent.prototype.refocusPointerIfNeeded = function () {
        if (this.currentFocusElement) {
            this.onPointerFocus(this.currentFocusElement.pointer, this.currentFocusElement.ref);
            this.focusElement(this.currentFocusElement.pointer);
        }
    };
    SliderComponent.prototype.manageElementsStyle = function () {
        var _this = this;
        if (!this.range) {
            this.maxHElem.css('display', 'none');
        }
        else {
            this.maxHElem.css('display', '');
        }
        this.alwaysHide(this.flrLabElem, this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        this.alwaysHide(this.ceilLabElem, this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        var hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
        this.alwaysHide(this.minLabElem, hideLabelsForTicks || this.viewOptions.hidePointerLabels);
        this.alwaysHide(this.maxLabElem, hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.alwaysHide(this.cmbLabElem, hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.alwaysHide(this.selBarElem, !this.range && !this.viewOptions.showSelectionBar);
        this.alwaysHide(this.leftOutSelBar, !this.range || !this.viewOptions.showOuterSelectionBars);
        this.alwaysHide(this.rightOutSelBar, !this.range || !this.viewOptions.showOuterSelectionBars);
        if (this.range && this.viewOptions.showOuterSelectionBars) {
            this.fullBarElem.addClass('ng5-slider-transparent');
        }
        if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
            this.setVerticalClass();
            setTimeout(function () { _this.resetSlider(); });
        }
        if (this.viewOptions.draggableRange) {
            this.selBarElem.addClass('ng5-slider-draggable');
        }
        else {
            this.selBarElem.removeClass('ng5-slider-draggable');
        }
        if (this.intermediateTicks && this.options.showTicksValues) {
            this.ticksElem.addClass('ng5-slider-ticks-values-under');
        }
    };
    SliderComponent.prototype.alwaysHide = function (el, hide) {
        el.alwaysHide = hide;
        if (hide) {
            this.hideEl(el);
        }
        else {
            this.showEl(el);
        }
    };
    SliderComponent.prototype.manageEventsBindings = function () {
        if (this.viewOptions.disabled || this.viewOptions.readOnly) {
            this.unbindEvents();
        }
        else {
            this.bindEvents();
        }
    };
    SliderComponent.prototype.setDisabledStateAttr = function () {
        this.sliderElementDisabledAttr = this.viewOptions.disabled ? 'disabled' : null;
    };
    SliderComponent.prototype.setVerticalClass = function () {
        this.sliderElementVerticalClass = this.viewOptions.vertical;
    };
    SliderComponent.prototype.resetLabelsValue = function () {
        this.minLabElem.value = undefined;
        this.maxLabElem.value = undefined;
    };
    SliderComponent.prototype.initHandles = function () {
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        if (this.range) {
            this.updateCmbLabel();
        }
        this.updateTicksScale();
    };
    SliderComponent.prototype.setLabelValue = function (value, label) {
        var recalculateDimension = false;
        var noLabelInjection = label.hasClass('no-label-injection');
        if (!label.alwaysHide &&
            (label.value === undefined ||
                label.value.length !== value.length ||
                (label.value.length > 0 && label.dimension === 0))) {
            recalculateDimension = true;
            label.value = value;
        }
        if (!noLabelInjection) {
            label.html(value);
        }
        if (recalculateDimension) {
            this.calculateElementDimension(label);
        }
    };
    SliderComponent.prototype.setMinAndMax = function () {
        this.step = +this.viewOptions.step;
        this.minValue = this.viewOptions.floor;
        if (this.viewOptions.logScale && this.minValue === 0) {
            throw Error('Can\'t use floor=0 with logarithmic scale');
        }
        if (this.viewOptions.enforceStep) {
            this.viewLowValue = this.roundStep(this.viewLowValue);
            if (this.range) {
                this.viewHighValue = this.roundStep(this.viewHighValue);
            }
        }
        if (this.viewOptions.ceil != null) {
            this.maxValue = this.viewOptions.ceil;
        }
        else {
            this.maxValue = this.viewOptions.ceil = this.range ? this.viewHighValue : this.viewLowValue;
        }
        if (this.viewOptions.enforceRange) {
            this.viewLowValue = this.sanitizeValue(this.viewLowValue);
            if (this.range) {
                this.viewHighValue = this.sanitizeValue(this.viewHighValue);
            }
        }
        this.applyLowValue();
        if (this.range) {
            this.applyHighValue();
        }
        this.valueRange = this.maxValue - this.minValue;
    };
    SliderComponent.prototype.addAccessibility = function () {
        this.updateAriaAttributes();
        this.minHElem.attr('role', 'slider');
        if (this.viewOptions.keyboardSupport &&
            !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
            this.minHElem.attr('tabindex', '0');
        }
        else {
            this.minHElem.attr('tabindex', '');
        }
        if (this.viewOptions.vertical) {
            this.minHElem.attr('aria-orientation', 'vertical');
        }
        if (this.viewOptions.ariaLabel) {
            this.minHElem.attr('aria-label', this.viewOptions.ariaLabel);
        }
        else if (this.viewOptions.ariaLabelledBy) {
            this.minHElem.attr('aria-labelledby', this.viewOptions.ariaLabelledBy);
        }
        if (this.range) {
            this.maxHElem.attr('role', 'slider');
            if (this.viewOptions.keyboardSupport &&
                !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
                this.maxHElem.attr('tabindex', '0');
            }
            else {
                this.maxHElem.attr('tabindex', '');
            }
            if (this.viewOptions.vertical) {
                this.maxHElem.attr('aria-orientation', 'vertical');
            }
            if (this.viewOptions.ariaLabelHigh) {
                this.maxHElem.attr('aria-label', this.viewOptions.ariaLabelHigh);
            }
            else if (this.viewOptions.ariaLabelledByHigh) {
                this.maxHElem.attr('aria-labelledby', this.viewOptions.ariaLabelledByHigh);
            }
        }
    };
    SliderComponent.prototype.updateAriaAttributes = function () {
        this.minHElem.attr('aria-valuenow', this.value.toString());
        this.minHElem.attr('aria-valuetext', this.translate(this.value, LabelType.Low));
        this.minHElem.attr('aria-valuemin', this.minValue.toString());
        this.minHElem.attr('aria-valuemax', this.maxValue.toString());
        if (this.range) {
            this.maxHElem.attr('aria-valuenow', this.highValue.toString());
            this.maxHElem.attr('aria-valuetext', this.translate(this.highValue, LabelType.High));
            this.maxHElem.attr('aria-valuemin', this.minValue.toString());
            this.maxHElem.attr('aria-valuemax', this.maxValue.toString());
        }
    };
    SliderComponent.prototype.calcViewDimensions = function () {
        if (this.viewOptions.handleDimension) {
            this.minHElem.dimension = this.viewOptions.handleDimension;
        }
        else {
            this.calculateElementDimension(this.minHElem);
        }
        var handleWidth = this.minHElem.dimension;
        this.handleHalfDim = handleWidth / 2;
        if (this.viewOptions.barDimension) {
            this.fullBarElem.dimension = this.viewOptions.barDimension;
        }
        else {
            this.calculateElementDimension(this.fullBarElem);
        }
        this.barDimension = this.fullBarElem.dimension;
        this.maxPos = this.barDimension - handleWidth;
        if (this.initHasRun) {
            this.updateFloorLab();
            this.updateCeilLab();
            this.initHandles();
        }
    };
    SliderComponent.prototype.updateTicksScale = function () {
        var _this = this;
        if (!this.viewOptions.showTicks) {
            return;
        }
        var ticksArray = this.viewOptions.ticksArray || this.getTicksArray();
        var translate = this.viewOptions.vertical ? 'translateY' : 'translateX';
        if (this.viewOptions.rightToLeft) {
            ticksArray.reverse();
        }
        this.ticks = ticksArray.map(function (value) {
            var position = _this.valueToPosition(value);
            if (_this.viewOptions.vertical) {
                position = _this.maxPos - position;
            }
            var translation = translate + '(' + Math.round(position) + 'px)';
            var tick = new Tick();
            tick.selected = _this.isTickSelected(value);
            tick.style = {
                '-webkit-transform': translation,
                '-moz-transform': translation,
                '-o-transform': translation,
                '-ms-transform': translation,
                transform: translation,
            };
            if (tick.selected && _this.viewOptions.getSelectionBarColor) {
                tick.style['background-color'] = _this.getSelectionBarColor();
            }
            if (!tick.selected && _this.viewOptions.getTickColor) {
                tick.style['background-color'] = _this.getTickColor(value);
            }
            if (_this.viewOptions.ticksTooltip) {
                tick.tooltip = _this.viewOptions.ticksTooltip(value);
                tick.tooltipPlacement = _this.viewOptions.vertical ? 'right' : 'top';
            }
            if (_this.viewOptions.showTicksValues && (value % _this.viewOptions.tickValueStep === 0)) {
                tick.value = _this.getDisplayValue(value, LabelType.TickValue);
                if (_this.viewOptions.ticksValuesTooltip) {
                    tick.valueTooltip = _this.viewOptions.ticksValuesTooltip(value);
                    tick.valueTooltipPlacement = _this.viewOptions.vertical
                        ? 'right'
                        : 'top';
                }
            }
            if (_this.getLegend) {
                var legend = _this.getLegend(value);
                if (legend) {
                    tick.legend = legend;
                }
            }
            return tick;
        });
    };
    SliderComponent.prototype.getTicksArray = function () {
        var step = (this.viewOptions.tickStep !== null) ? this.viewOptions.tickStep : this.step;
        var ticksArray = [];
        for (var value = this.minValue; value <= this.maxValue; value += step) {
            ticksArray.push(value);
        }
        return ticksArray;
    };
    SliderComponent.prototype.isTickSelected = function (value) {
        if (!this.range) {
            if (this.viewOptions.showSelectionBarFromValue !== null) {
                var center = this.viewOptions.showSelectionBarFromValue;
                if (this.viewLowValue > center &&
                    value >= center &&
                    value <= this.viewLowValue) {
                    return true;
                }
                else if (this.viewLowValue < center &&
                    value <= center &&
                    value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBarEnd) {
                if (value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
                return true;
            }
        }
        if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
            return true;
        }
        return false;
    };
    SliderComponent.prototype.updateFloorLab = function () {
        if (!this.flrLabElem.alwaysHide) {
            this.setLabelValue(this.getDisplayValue(this.minValue, LabelType.Floor), this.flrLabElem);
            this.calculateElementDimension(this.flrLabElem);
            var position = this.viewOptions.rightToLeft
                ? this.barDimension - this.flrLabElem.dimension
                : 0;
            this.setPosition(this.flrLabElem, position);
        }
    };
    SliderComponent.prototype.updateCeilLab = function () {
        if (!this.ceilLabElem.alwaysHide) {
            this.setLabelValue(this.getDisplayValue(this.maxValue, LabelType.Ceil), this.ceilLabElem);
            this.calculateElementDimension(this.ceilLabElem);
            var position = this.viewOptions.rightToLeft
                ? 0
                : this.barDimension - this.ceilLabElem.dimension;
            this.setPosition(this.ceilLabElem, position);
        }
    };
    SliderComponent.prototype.updateHandles = function (which, newPos) {
        if (which === HandleType.Low) {
            this.updateLowHandle(newPos);
        }
        else {
            this.updateHighHandle(newPos);
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        if (this.range) {
            this.updateCmbLabel();
        }
    };
    SliderComponent.prototype.getHandleLabelPos = function (labelType, newPos) {
        var labelDimension = labelType === HandleLabelType.Min ? this.minLabElem.dimension : this.maxLabElem.dimension;
        var nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDim;
        var endOfBarPos = this.barDimension - labelDimension;
        if (!this.viewOptions.boundPointerLabels) {
            return nearHandlePos;
        }
        if ((this.viewOptions.rightToLeft && labelType === HandleLabelType.Min) ||
            (!this.viewOptions.rightToLeft && labelType === HandleLabelType.Max)) {
            return Math.min(nearHandlePos, endOfBarPos);
        }
        else {
            return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
        }
    };
    SliderComponent.prototype.updateLowHandle = function (newPos) {
        this.setPosition(this.minHElem, newPos);
        this.setLabelValue(this.getDisplayValue(this.viewLowValue, LabelType.Low), this.minLabElem);
        this.setPosition(this.minLabElem, this.getHandleLabelPos(HandleLabelType.Min, newPos));
        if (this.viewOptions.getPointerColor) {
            var pointercolor = this.getPointerColor(PointerType.Min);
            this.minPointerStyle = {
                backgroundColor: pointercolor,
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.shFloorCeil();
        }
    };
    SliderComponent.prototype.updateHighHandle = function (newPos) {
        this.setPosition(this.maxHElem, newPos);
        this.setLabelValue(this.getDisplayValue(this.viewHighValue, LabelType.High), this.maxLabElem);
        this.setPosition(this.maxLabElem, this.getHandleLabelPos(HandleLabelType.Max, newPos));
        if (this.viewOptions.getPointerColor) {
            var pointercolor = this.getPointerColor(PointerType.Max);
            this.maxPointerStyle = {
                backgroundColor: pointercolor,
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.shFloorCeil();
        }
    };
    SliderComponent.prototype.shFloorCeil = function () {
        if (this.viewOptions.hidePointerLabels) {
            return;
        }
        var flHidden = false;
        var clHidden = false;
        var isMinLabAtFloor = this.isLabelBelowFloorLab(this.minLabElem);
        var isMinLabAtCeil = this.isLabelAboveCeilLab(this.minLabElem);
        var isMaxLabAtCeil = this.isLabelAboveCeilLab(this.maxLabElem);
        var isCmbLabAtFloor = this.isLabelBelowFloorLab(this.cmbLabElem);
        var isCmbLabAtCeil = this.isLabelAboveCeilLab(this.cmbLabElem);
        if (isMinLabAtFloor) {
            flHidden = true;
            this.hideEl(this.flrLabElem);
        }
        else {
            flHidden = false;
            this.showEl(this.flrLabElem);
        }
        if (isMinLabAtCeil) {
            clHidden = true;
            this.hideEl(this.ceilLabElem);
        }
        else {
            clHidden = false;
            this.showEl(this.ceilLabElem);
        }
        if (this.range) {
            var hideCeil = this.cmbLabelShown ? isCmbLabAtCeil : isMaxLabAtCeil;
            var hideFloor = this.cmbLabelShown
                ? isCmbLabAtFloor
                : isMinLabAtFloor;
            if (hideCeil) {
                this.hideEl(this.ceilLabElem);
            }
            else if (!clHidden) {
                this.showEl(this.ceilLabElem);
            }
            if (hideFloor) {
                this.hideEl(this.flrLabElem);
            }
            else if (!flHidden) {
                this.showEl(this.flrLabElem);
            }
        }
    };
    SliderComponent.prototype.isLabelBelowFloorLab = function (label) {
        var isRTL = this.viewOptions.rightToLeft;
        var pos = label.position;
        var dim = label.dimension;
        var floorPos = this.flrLabElem.position;
        var floorDim = this.flrLabElem.dimension;
        return isRTL
            ? pos + dim >= floorPos - 2
            : pos <= floorPos + floorDim + 2;
    };
    SliderComponent.prototype.isLabelAboveCeilLab = function (label) {
        var isRTL = this.viewOptions.rightToLeft;
        var pos = label.position;
        var dim = label.dimension;
        var ceilPos = this.ceilLabElem.position;
        var ceilDim = this.ceilLabElem.dimension;
        return isRTL ? pos <= ceilPos + ceilDim + 2 : pos + dim >= ceilPos - 2;
    };
    SliderComponent.prototype.updateSelectionBar = function () {
        var position = 0;
        var dimension = 0;
        var isSelectionBarFromRight = this.viewOptions.rightToLeft
            ? !this.viewOptions.showSelectionBarEnd
            : this.viewOptions.showSelectionBarEnd;
        var positionForRange = this.viewOptions.rightToLeft
            ? this.maxHElem.position + this.handleHalfDim
            : this.minHElem.position + this.handleHalfDim;
        if (this.range) {
            dimension = Math.abs(this.maxHElem.position - this.minHElem.position);
            position = positionForRange;
        }
        else {
            if (this.viewOptions.showSelectionBarFromValue !== null) {
                var center = this.viewOptions.showSelectionBarFromValue;
                var centerPosition = this.valueToPosition(center);
                var isModelGreaterThanCenter = this.viewOptions.rightToLeft
                    ? this.viewLowValue <= center
                    : this.viewLowValue > center;
                if (isModelGreaterThanCenter) {
                    dimension = this.minHElem.position - centerPosition;
                    position = centerPosition + this.handleHalfDim;
                }
                else {
                    dimension = centerPosition - this.minHElem.position;
                    position = this.minHElem.position + this.handleHalfDim;
                }
            }
            else if (isSelectionBarFromRight) {
                dimension = Math.ceil(Math.abs(this.maxPos - this.minHElem.position) + this.handleHalfDim);
                position = Math.floor(this.minHElem.position + this.handleHalfDim);
            }
            else {
                dimension = this.minHElem.position + this.handleHalfDim;
                position = 0;
            }
        }
        this.setDimension(this.selBarElem, dimension);
        this.setPosition(this.selBarElem, position);
        if (this.range && this.viewOptions.showOuterSelectionBars) {
            if (this.viewOptions.rightToLeft) {
                this.setDimension(this.rightOutSelBar, position);
                this.setPosition(this.rightOutSelBar, 0);
                this.calculateElementDimension(this.fullBarElem);
                this.setDimension(this.leftOutSelBar, this.fullBarElem.dimension - (position + dimension));
                this.setPosition(this.leftOutSelBar, position + dimension);
            }
            else {
                this.setDimension(this.leftOutSelBar, position);
                this.setPosition(this.leftOutSelBar, 0);
                this.calculateElementDimension(this.fullBarElem);
                this.setDimension(this.rightOutSelBar, this.fullBarElem.dimension - (position + dimension));
                this.setPosition(this.rightOutSelBar, position + dimension);
            }
        }
        if (this.viewOptions.getSelectionBarColor) {
            var color = this.getSelectionBarColor();
            this.barStyle = {
                backgroundColor: color,
            };
        }
        else if (this.viewOptions.selectionBarGradient) {
            var offset = this.viewOptions.showSelectionBarFromValue !== null
                ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue)
                : 0;
            var reversed = (offset - position > 0 && !isSelectionBarFromRight) || (offset - position <= 0 && isSelectionBarFromRight);
            var direction = this.viewOptions.vertical
                ? reversed ? 'bottom' : 'top'
                : reversed ? 'left' : 'right';
            this.barStyle = {
                backgroundImage: 'linear-gradient(to ' +
                    direction +
                    ', ' +
                    this.viewOptions.selectionBarGradient.from +
                    ' 0%,' +
                    this.viewOptions.selectionBarGradient.to +
                    ' 100%)',
            };
            if (this.viewOptions.vertical) {
                this.barStyle.backgroundPosition =
                    'center ' +
                        (offset +
                            dimension +
                            position +
                            (reversed ? -this.handleHalfDim : 0)) +
                        'px';
                this.barStyle.backgroundSize =
                    '100% ' + (this.barDimension - this.handleHalfDim) + 'px';
            }
            else {
                this.barStyle.backgroundPosition =
                    offset -
                        position +
                        (reversed ? this.handleHalfDim : 0) +
                        'px center';
                this.barStyle.backgroundSize =
                    this.barDimension - this.handleHalfDim + 'px 100%';
            }
        }
    };
    SliderComponent.prototype.getSelectionBarColor = function () {
        if (this.range) {
            return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
        }
        return this.viewOptions.getSelectionBarColor(this.value);
    };
    SliderComponent.prototype.getPointerColor = function (pointerType) {
        if (pointerType === PointerType.Max) {
            return this.viewOptions.getPointerColor(this.highValue, pointerType);
        }
        return this.viewOptions.getPointerColor(this.value, pointerType);
    };
    SliderComponent.prototype.getTickColor = function (value) {
        return this.viewOptions.getTickColor(value);
    };
    SliderComponent.prototype.updateCmbLabel = function () {
        var isLabelOverlap = null;
        if (this.viewOptions.rightToLeft) {
            isLabelOverlap =
                this.minLabElem.position - this.minLabElem.dimension - 10 <= this.maxLabElem.position;
        }
        else {
            isLabelOverlap =
                this.minLabElem.position + this.minLabElem.dimension + 10 >= this.maxLabElem.position;
        }
        if (isLabelOverlap) {
            var lowTr = this.getDisplayValue(this.viewLowValue, LabelType.Low);
            var highTr = this.getDisplayValue(this.viewHighValue, LabelType.High);
            var labelVal = this.viewOptions.rightToLeft
                ? this.combineLabels(highTr, lowTr)
                : this.combineLabels(lowTr, highTr);
            this.setLabelValue(labelVal, this.cmbLabElem);
            var pos = this.viewOptions.boundPointerLabels
                ? Math.min(Math.max(this.selBarElem.position +
                    this.selBarElem.dimension / 2 -
                    this.cmbLabElem.dimension / 2, 0), this.barDimension - this.cmbLabElem.dimension)
                : this.selBarElem.position + this.selBarElem.dimension / 2 - this.cmbLabElem.dimension / 2;
            this.setPosition(this.cmbLabElem, pos);
            this.cmbLabelShown = true;
            this.hideEl(this.minLabElem);
            this.hideEl(this.maxLabElem);
            this.showEl(this.cmbLabElem);
        }
        else {
            this.cmbLabelShown = false;
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
            this.updateLowHandle(this.valueToPosition(this.viewLowValue));
            this.showEl(this.maxLabElem);
            this.showEl(this.minLabElem);
            this.hideEl(this.cmbLabElem);
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.shFloorCeil();
        }
    };
    SliderComponent.prototype.getDisplayValue = function (value, which) {
        if (this.viewOptions.stepsArray && !this.viewOptions.bindIndexForStepsArray) {
            value = this.getStepValue(value);
        }
        return this.translate(value, which);
    };
    SliderComponent.prototype.roundStep = function (value, customStep) {
        var step = customStep ? customStep : this.step;
        var steppedDifference = MathHelper.roundToPrecisionLimit((value - this.minValue) / step, this.precisionLimit);
        steppedDifference = Math.round(steppedDifference) * step;
        return MathHelper.roundToPrecisionLimit(this.minValue + steppedDifference, this.precisionLimit);
    };
    SliderComponent.prototype.hideEl = function (element) {
        element.css('visibility', 'hidden');
    };
    SliderComponent.prototype.showEl = function (element) {
        if (!!element.alwaysHide) {
            return;
        }
        element.css('visibility', 'visible');
    };
    SliderComponent.prototype.setPosition = function (elem, pos) {
        elem.position = pos;
        if (this.viewOptions.vertical) {
            elem.css('bottom', Math.round(pos) + 'px');
        }
        else {
            elem.css('left', Math.round(pos) + 'px');
        }
    };
    SliderComponent.prototype.calculateElementDimension = function (elem) {
        var val = elem.getBoundingClientRect();
        if (this.viewOptions.vertical) {
            elem.dimension = (val.bottom - val.top) * this.viewOptions.scale;
        }
        else {
            elem.dimension = (val.right - val.left) * this.viewOptions.scale;
        }
    };
    SliderComponent.prototype.setDimension = function (elem, dim) {
        elem.dimension = dim;
        if (this.viewOptions.vertical) {
            elem.css('height', Math.round(dim) + 'px');
        }
        else {
            elem.css('width', Math.round(dim) + 'px');
        }
        return dim;
    };
    SliderComponent.prototype.sanitizeValue = function (val) {
        return Math.min(Math.max(val, this.minValue), this.maxValue);
    };
    SliderComponent.prototype.valueToPosition = function (val) {
        var fn = ValueHelper.linearValueToPosition;
        if (this.viewOptions.customValueToPosition) {
            fn = this.viewOptions.customValueToPosition;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logValueToPosition;
        }
        val = this.sanitizeValue(val);
        var percent = fn(val, this.minValue, this.maxValue) || 0;
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        return percent * this.maxPos;
    };
    SliderComponent.prototype.positionToValue = function (position) {
        var percent = position / this.maxPos;
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        var fn = ValueHelper.linearPositionToValue;
        if (this.viewOptions.customPositionToValue) {
            fn = this.viewOptions.customPositionToValue;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logPositionToValue;
        }
        return fn(percent, this.minValue, this.maxValue) || 0;
    };
    SliderComponent.prototype.getEventXY = function (event, targetTouchId) {
        if (event instanceof MouseEvent) {
            return this.viewOptions.vertical ? event.clientY : event.clientX;
        }
        var touchIndex = 0;
        var touches = event.touches;
        if (targetTouchId !== undefined) {
            for (var i = 0; i < touches.length; i++) {
                if (touches[i].identifier === targetTouchId) {
                    touchIndex = i;
                    break;
                }
            }
        }
        return this.viewOptions.vertical ? touches[touchIndex].clientY : touches[touchIndex].clientX;
    };
    SliderComponent.prototype.getEventPosition = function (event, targetTouchId) {
        var sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
        var sliderPos = this.viewOptions.vertical ?
            sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
        var eventPos = 0;
        if (this.viewOptions.vertical) {
            eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
        }
        else {
            eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
        }
        return eventPos * this.viewOptions.scale - this.handleHalfDim;
    };
    SliderComponent.prototype.getNearestHandle = function (event) {
        if (!this.range) {
            return this.minHElem;
        }
        var position = this.getEventPosition(event);
        var distanceMin = Math.abs(position - this.minHElem.position);
        var distanceMax = Math.abs(position - this.maxHElem.position);
        if (distanceMin < distanceMax) {
            return this.minHElem;
        }
        else if (distanceMin > distanceMax) {
            return this.maxHElem;
        }
        else if (!this.viewOptions.rightToLeft) {
            return position < this.minHElem.position ? this.minHElem : this.maxHElem;
        }
        else {
            return position > this.minHElem.position ? this.minHElem : this.maxHElem;
        }
    };
    SliderComponent.prototype.focusElement = function (el) {
        el.focus();
    };
    SliderComponent.prototype.bindEvents = function () {
        var _this = this;
        var draggableRange = this.viewOptions.draggableRange;
        if (!this.viewOptions.onlyBindHandles) {
            this.selBarElem.on('mousedown', function (event) { return _this.onBarStart(draggableRange, null, event, true, true, true); });
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHElem.on('mousedown', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
            this.maxHElem.on('mousedown', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
        }
        else {
            this.minHElem.on('mousedown', function (event) { return _this.onStart(_this.minHElem, HandleType.Low, event, true, true); });
            if (this.range) {
                this.maxHElem.on('mousedown', function (event) { return _this.onStart(_this.maxHElem, HandleType.High, event, true, true); });
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElem.on('mousedown', function (event) { _this.onStart(null, null, event, true, true, true); });
                this.ticksElem.on('mousedown', function (event) { _this.onStart(null, null, event, true, true, true, true); });
            }
        }
        if (!this.viewOptions.onlyBindHandles) {
            this.selBarElem.onPassive('touchstart', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHElem.onPassive('touchstart', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
            this.maxHElem.onPassive('touchstart', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
        }
        else {
            this.minHElem.onPassive('touchstart', function (event) { return _this.onStart(_this.minHElem, HandleType.Low, event, true, true); });
            if (this.range) {
                this.maxHElem.onPassive('touchstart', function (event) { return _this.onStart(_this.maxHElem, HandleType.High, event, true, true); });
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElem.onPassive('touchstart', function (event) { return _this.onStart(null, null, event, true, true, true); });
                this.ticksElem.onPassive('touchstart', function (event) { return _this.onStart(null, null, event, false, false, true, true); });
            }
        }
        if (this.viewOptions.keyboardSupport) {
            this.minHElem.on('focus', function () { return _this.onPointerFocus(_this.minHElem, HandleType.Low); });
            if (this.range) {
                this.maxHElem.on('focus', function () { return _this.onPointerFocus(_this.maxHElem, HandleType.High); });
            }
        }
    };
    SliderComponent.prototype.unbindEvents = function () {
        this.minHElem.off();
        this.maxHElem.off();
        this.fullBarElem.off();
        this.selBarElem.off();
        this.ticksElem.off();
    };
    SliderComponent.prototype.onBarStart = function (draggableRange, pointer, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        if (draggableRange) {
            this.onDragStart(pointer, HandleType.High, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
        }
        else {
            this.onStart(pointer, HandleType.Low, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
        }
    };
    SliderComponent.prototype.onStart = function (pointer, ref, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        var _this = this;
        var moveEvent = '';
        var endEvent = '';
        if (CompatibilityHelper.isTouchEvent(event)) {
            moveEvent = 'touchmove';
            endEvent = 'touchend';
        }
        else {
            moveEvent = 'mousemove';
            endEvent = 'mouseup';
        }
        event.stopPropagation();
        if (!CompatibilityHelper.isTouchEvent(event) || !detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport) {
            event.preventDefault();
        }
        this.calcViewDimensions();
        if (pointer) {
            this.tracking = ref;
        }
        else {
            pointer = this.getNearestHandle(event);
            this.tracking = pointer === this.minHElem ? HandleType.Low : HandleType.High;
        }
        pointer.addClass('ng5-slider-active');
        if (this.viewOptions.keyboardSupport) {
            this.focusElement(pointer);
        }
        if (bindMove) {
            var ehMove = function (e) { return _this.dragging.active ? _this.onDragMove(pointer, e) : _this.onMove(pointer, e); };
            if (this.onMoveUnsubscribe !== null) {
                this.onMoveUnsubscribe();
            }
            this.onMoveUnsubscribe = this.renderer.listen('document', moveEvent, ehMove);
        }
        if (bindEnd) {
            var ehEnd = function (e) { return _this.onEnd(e); };
            if (this.onEndUnsubscribe !== null) {
                this.onEndUnsubscribe();
            }
            this.onEndUnsubscribe = this.renderer.listen('document', endEvent, ehEnd);
        }
        this.userChangeStart.emit(this.getChangeContext());
        if (CompatibilityHelper.isTouchEvent(event) && ((event)).changedTouches) {
            if (!this.touchId) {
                this.isDragging = true;
                this.touchId = ((event)).changedTouches[0].identifier;
            }
        }
        if (simulateImmediateMove) {
            this.onMove(pointer, event, true);
        }
        if (simulateImmediateEnd) {
            this.onEnd(event);
        }
    };
    SliderComponent.prototype.onMove = function (pointer, event, fromTick) {
        var touchForThisSlider;
        if (CompatibilityHelper.isTouchEvent(event)) {
            var changedTouches = ((event)).changedTouches;
            for (var i = 0; i < changedTouches.length; i++) {
                if (changedTouches[i].identifier === this.touchId) {
                    touchForThisSlider = changedTouches[i];
                    break;
                }
            }
            if (!touchForThisSlider) {
                return;
            }
        }
        var newPos = this.getEventPosition(event, touchForThisSlider ? touchForThisSlider.identifier : undefined);
        var newValue;
        var ceilValue = this.viewOptions.rightToLeft
            ? this.minValue
            : this.maxValue;
        var flrValue = this.viewOptions.rightToLeft ? this.maxValue : this.minValue;
        if (newPos <= 0) {
            newValue = flrValue;
        }
        else if (newPos >= this.maxPos) {
            newValue = ceilValue;
        }
        else {
            newValue = this.positionToValue(newPos);
            if (fromTick && this.viewOptions.tickStep !== null) {
                newValue = this.roundStep(newValue, this.viewOptions.tickStep);
            }
            else {
                newValue = this.roundStep(newValue);
            }
        }
        this.positionTrackingHandle(newValue);
    };
    SliderComponent.prototype.onEnd = function (event) {
        if (CompatibilityHelper.isTouchEvent(event)) {
            var changedTouches = ((event)).changedTouches;
            if (changedTouches[0].identifier !== this.touchId) {
                return;
            }
        }
        this.isDragging = false;
        this.touchId = null;
        if (!this.viewOptions.keyboardSupport) {
            this.minHElem.removeClass('ng5-slider-active');
            this.maxHElem.removeClass('ng5-slider-active');
            this.tracking = null;
        }
        this.dragging.active = false;
        if (this.onMoveUnsubscribe !== null) {
            this.onMoveUnsubscribe();
        }
        if (this.onEndUnsubscribe !== null) {
            this.onEndUnsubscribe();
        }
        this.userChangeEnd.emit(this.getChangeContext());
    };
    SliderComponent.prototype.onPointerFocus = function (pointer, ref) {
        var _this = this;
        this.tracking = ref;
        pointer.on('blur', function () { return _this.onPointerBlur(pointer); });
        pointer.on('keydown', function (event) { return _this.onKeyboardEvent(event); });
        pointer.on('keyup', function () { return _this.onKeyUp(); });
        this.firstKeyDown = true;
        pointer.addClass('ng5-slider-active');
        this.currentFocusElement = {
            pointer: pointer,
            ref: ref,
        };
    };
    SliderComponent.prototype.onKeyUp = function () {
        this.firstKeyDown = true;
        this.userChangeEnd.emit(this.getChangeContext());
    };
    SliderComponent.prototype.onPointerBlur = function (pointer) {
        pointer.off('blur');
        pointer.off('keydown');
        pointer.off('keyup');
        pointer.removeClass('ng5-slider-active');
        if (!this.isDragging) {
            this.tracking = null;
            this.currentFocusElement = null;
        }
    };
    SliderComponent.prototype.getKeyActions = function (currentValue) {
        var increaseStep = currentValue + this.step;
        var decreaseStep = currentValue - this.step;
        var increasePage = currentValue + this.valueRange / 10;
        var decreasePage = currentValue - this.valueRange / 10;
        if (this.viewOptions.reversedControls) {
            increaseStep = currentValue - this.step;
            decreaseStep = currentValue + this.step;
            increasePage = currentValue - this.valueRange / 10;
            decreasePage = currentValue + this.valueRange / 10;
        }
        var actions = {
            UP: increaseStep,
            DOWN: decreaseStep,
            LEFT: decreaseStep,
            RIGHT: increaseStep,
            PAGEUP: increasePage,
            PAGEDOWN: decreasePage,
            HOME: this.viewOptions.reversedControls ? this.maxValue : this.minValue,
            END: this.viewOptions.reversedControls ? this.minValue : this.maxValue,
        };
        if (this.viewOptions.rightToLeft) {
            actions["LEFT"] = increaseStep;
            actions["RIGHT"] = decreaseStep;
            if (this.viewOptions.vertical) {
                actions["UP"] = decreaseStep;
                actions["DOWN"] = increaseStep;
            }
        }
        return actions;
    };
    SliderComponent.prototype.onKeyboardEvent = function (event) {
        var currentValue = this.getCurrentTrackingValue();
        var keyCode = event.keyCode || event.which;
        var keys = {
            38: 'UP',
            40: 'DOWN',
            37: 'LEFT',
            39: 'RIGHT',
            33: 'PAGEUP',
            34: 'PAGEDOWN',
            36: 'HOME',
            35: 'END',
        };
        var actions = this.getKeyActions(currentValue);
        var key = keys[keyCode];
        var action = actions[key];
        if (action == null || this.tracking === null) {
            return;
        }
        event.preventDefault();
        if (this.firstKeyDown) {
            this.firstKeyDown = false;
            this.userChangeStart.emit(this.getChangeContext());
        }
        var newValue = this.roundStep(this.sanitizeValue(action));
        if (!this.viewOptions.draggableRangeOnly) {
            this.positionTrackingHandle(newValue);
        }
        else {
            var difference = this.viewHighValue - this.viewLowValue;
            var newMinValue = void 0;
            var newMaxValue = void 0;
            if (this.tracking === HandleType.Low) {
                newMinValue = newValue;
                newMaxValue = newValue + difference;
                if (newMaxValue > this.maxValue) {
                    newMaxValue = this.maxValue;
                    newMinValue = newMaxValue - difference;
                }
            }
            else {
                newMaxValue = newValue;
                newMinValue = newValue - difference;
                if (newMinValue < this.minValue) {
                    newMinValue = this.minValue;
                    newMaxValue = newMinValue + difference;
                }
            }
            this.positionTrackingBar(newMinValue, newMaxValue);
        }
    };
    SliderComponent.prototype.onDragStart = function (pointer, ref, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        var position = this.getEventPosition(event);
        this.dragging = new Dragging();
        this.dragging.active = true;
        this.dragging.value = this.positionToValue(position);
        this.dragging.difference = this.viewHighValue - this.viewLowValue;
        this.dragging.lowLimit = this.viewOptions.rightToLeft
            ? this.minHElem.position - position
            : position - this.minHElem.position;
        this.dragging.highLimit = this.viewOptions.rightToLeft
            ? position - this.maxHElem.position
            : this.maxHElem.position - position;
        this.onStart(pointer, ref, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
    };
    SliderComponent.prototype.getMinValue = function (newPos, outOfBounds, isAbove) {
        var isRTL = this.viewOptions.rightToLeft;
        var value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.minValue
                    : this.maxValue - this.dragging.difference;
            }
            else {
                value = isRTL
                    ? this.maxValue - this.dragging.difference
                    : this.minValue;
            }
        }
        else {
            value = isRTL
                ? this.positionToValue(newPos + this.dragging.lowLimit)
                : this.positionToValue(newPos - this.dragging.lowLimit);
        }
        return this.roundStep(value);
    };
    SliderComponent.prototype.getMaxValue = function (newPos, outOfBounds, isAbove) {
        var isRTL = this.viewOptions.rightToLeft;
        var value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.minValue + this.dragging.difference
                    : this.maxValue;
            }
            else {
                value = isRTL
                    ? this.maxValue
                    : this.minValue + this.dragging.difference;
            }
        }
        else {
            if (isRTL) {
                value =
                    this.positionToValue(newPos + this.dragging.lowLimit) +
                        this.dragging.difference;
            }
            else {
                value =
                    this.positionToValue(newPos - this.dragging.lowLimit) +
                        this.dragging.difference;
            }
        }
        return this.roundStep(value);
    };
    SliderComponent.prototype.onDragMove = function (pointer, event) {
        var newPos = this.getEventPosition(event);
        var ceilLimit, flrLimit, flrHElem, ceilHElem;
        if (this.viewOptions.rightToLeft) {
            ceilLimit = this.dragging.lowLimit;
            flrLimit = this.dragging.highLimit;
            flrHElem = this.maxHElem;
            ceilHElem = this.minHElem;
        }
        else {
            ceilLimit = this.dragging.highLimit;
            flrLimit = this.dragging.lowLimit;
            flrHElem = this.minHElem;
            ceilHElem = this.maxHElem;
        }
        var isUnderFlrLimit = newPos <= flrLimit;
        var isOverCeilLimit = newPos >= this.maxPos - ceilLimit;
        var newMinValue;
        var newMaxValue;
        if (isUnderFlrLimit) {
            if (flrHElem.position === 0) {
                return;
            }
            newMinValue = this.getMinValue(newPos, true, false);
            newMaxValue = this.getMaxValue(newPos, true, false);
        }
        else if (isOverCeilLimit) {
            if (ceilHElem.position === this.maxPos) {
                return;
            }
            newMaxValue = this.getMaxValue(newPos, true, true);
            newMinValue = this.getMinValue(newPos, true, true);
        }
        else {
            newMinValue = this.getMinValue(newPos, false, false);
            newMaxValue = this.getMaxValue(newPos, false, false);
        }
        this.positionTrackingBar(newMinValue, newMaxValue);
    };
    SliderComponent.prototype.positionTrackingBar = function (newMinValue, newMaxValue) {
        if (this.viewOptions.minLimit != null &&
            newMinValue < this.viewOptions.minLimit) {
            newMinValue = this.viewOptions.minLimit;
            newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.precisionLimit);
        }
        if (this.viewOptions.maxLimit != null &&
            newMaxValue > this.viewOptions.maxLimit) {
            newMaxValue = this.viewOptions.maxLimit;
            newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.precisionLimit);
        }
        this.viewLowValue = newMinValue;
        this.viewHighValue = newMaxValue;
        this.applyLowValue();
        if (this.range) {
            this.applyHighValue();
        }
        this.applyModel(true);
        this.updateHandles(HandleType.Low, this.valueToPosition(newMinValue));
        this.updateHandles(HandleType.High, this.valueToPosition(newMaxValue));
    };
    SliderComponent.prototype.positionTrackingHandle = function (newValue) {
        var valueChanged = false;
        newValue = this.applyMinMaxLimit(newValue);
        if (this.range) {
            if (this.viewOptions.pushRange) {
                newValue = this.applyPushRange(newValue);
                valueChanged = true;
            }
            else {
                if (this.viewOptions.noSwitching) {
                    if (this.tracking === HandleType.Low && newValue > this.viewHighValue) {
                        newValue = this.applyMinMaxRange(this.viewHighValue);
                    }
                    else if (this.tracking === HandleType.High &&
                        newValue < this.viewLowValue) {
                        newValue = this.applyMinMaxRange(this.viewLowValue);
                    }
                }
                newValue = this.applyMinMaxRange(newValue);
                if (this.tracking === HandleType.Low && newValue > this.viewHighValue) {
                    this.viewLowValue = this.viewHighValue;
                    this.applyLowValue();
                    this.applyModel(false);
                    this.updateHandles(HandleType.Low, this.maxHElem.position);
                    this.updateAriaAttributes();
                    this.tracking = HandleType.High;
                    this.minHElem.removeClass('ng5-slider-active');
                    this.maxHElem.addClass('ng5-slider-active');
                    if (this.viewOptions.keyboardSupport) {
                        this.focusElement(this.maxHElem);
                    }
                    valueChanged = true;
                }
                else if (this.tracking === HandleType.High &&
                    newValue < this.viewLowValue) {
                    this.viewHighValue = this.viewLowValue;
                    this.applyHighValue();
                    this.applyModel(false);
                    this.updateHandles(HandleType.High, this.minHElem.position);
                    this.updateAriaAttributes();
                    this.tracking = HandleType.Low;
                    this.maxHElem.removeClass('ng5-slider-active');
                    this.minHElem.addClass('ng5-slider-active');
                    if (this.viewOptions.keyboardSupport) {
                        this.focusElement(this.minHElem);
                    }
                    valueChanged = true;
                }
            }
        }
        if (this.getCurrentTrackingValue() !== newValue) {
            if (this.tracking === HandleType.Low) {
                this.viewLowValue = newValue;
                this.applyLowValue();
            }
            else {
                this.viewHighValue = newValue;
                this.applyHighValue();
            }
            this.applyModel(false);
            this.updateHandles(this.tracking, this.valueToPosition(newValue));
            this.updateAriaAttributes();
            valueChanged = true;
        }
        if (valueChanged) {
            this.applyModel(true);
        }
    };
    SliderComponent.prototype.applyMinMaxLimit = function (newValue) {
        if (this.viewOptions.minLimit != null && newValue < this.viewOptions.minLimit) {
            return this.viewOptions.minLimit;
        }
        if (this.viewOptions.maxLimit != null && newValue > this.viewOptions.maxLimit) {
            return this.viewOptions.maxLimit;
        }
        return newValue;
    };
    SliderComponent.prototype.applyMinMaxRange = function (newValue) {
        var oppositeValue = this.tracking === HandleType.Low ? this.viewHighValue : this.viewLowValue;
        var difference = Math.abs(newValue - oppositeValue);
        if (this.viewOptions.minRange != null) {
            if (difference < this.viewOptions.minRange) {
                if (this.tracking === HandleType.Low) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.precisionLimit);
                }
                else {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.precisionLimit);
                }
            }
        }
        if (this.viewOptions.maxRange != null) {
            if (difference > this.viewOptions.maxRange) {
                if (this.tracking === HandleType.Low) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.precisionLimit);
                }
                else {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.precisionLimit);
                }
            }
        }
        return newValue;
    };
    SliderComponent.prototype.applyPushRange = function (newValue) {
        var difference = this.tracking === HandleType.Low
            ? this.viewHighValue - newValue
            : newValue - this.viewLowValue;
        var minRange = this.viewOptions.minRange !== null
            ? this.viewOptions.minRange
            : this.viewOptions.step;
        var maxRange = this.viewOptions.maxRange;
        if (difference < minRange) {
            if (this.tracking === HandleType.Low) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.maxValue), this.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.precisionLimit);
                this.applyHighValue();
                this.updateHandles(HandleType.High, this.valueToPosition(this.viewHighValue));
            }
            else {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.minValue), this.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.precisionLimit);
                this.applyLowValue();
                this.updateHandles(HandleType.Low, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        else if (maxRange !== null && difference > maxRange) {
            if (this.tracking === HandleType.Low) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.precisionLimit);
                this.applyHighValue();
                this.updateHandles(HandleType.High, this.valueToPosition(this.viewHighValue));
            }
            else {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.precisionLimit);
                this.applyLowValue();
                this.updateHandles(HandleType.Low, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        return newValue;
    };
    SliderComponent.prototype.applyModel = function (callUserChange) {
        this.valueChange.emit(this.value);
        this.highValueChange.emit(this.highValue);
        if (callUserChange) {
            this.userChange.emit(this.getChangeContext());
        }
        if (this.onChangeCallback) {
            if (this.range) {
                this.onChangeCallback([this.value, this.highValue]);
            }
            else {
                this.onChangeCallback(this.value);
            }
        }
        if (this.onTouchedCallback) {
            if (this.range) {
                this.onTouchedCallback([this.value, this.highValue]);
            }
            else {
                this.onTouchedCallback(this.value);
            }
        }
    };
    SliderComponent.prototype.getChangeContext = function () {
        var changeContext = new ChangeContext();
        changeContext.pointerType = this.tracking === HandleType.Low ? PointerType.Min : PointerType.Max;
        changeContext.value = this.value;
        changeContext.highValue = this.highValue;
        return changeContext;
    };
    return SliderComponent;
}());
SliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ng5-slider',
                template: "<!-- // 0 (left) Highlight outside two handles -->\n<span ng5SliderLeftOutSelElem class=\"ng5-slider-span ng5-slider-bar-wrapper ng5-slider-left-out-selection\">\n  <span class=\"ng5-slider-span ng5-slider-bar\"></span>\n</span>\n<!-- // 1 (right) Highlight outside two handles -->\n<span ng5SliderRightOutSelElem class=\"ng5-slider-span ng5-slider-bar-wrapper ng5-slider-right-out-selection\">\n  <span class=\"ng5-slider-span ng5-slider-bar\"></span>\n</span>\n<!-- // 2 The slider bar -->\n<span ng5SliderFullBarElem class=\"ng5-slider-span ng5-slider-bar-wrapper\">\n  <span class=\"ng5-slider-span ng5-slider-bar\"></span>\n</span>\n<!-- // 3 Highlight between two handles -->\n<span ng5SliderSelBarElem class=\"ng5-slider-span ng5-slider-bar-wrapper\">\n  <span class=\"ng5-slider-span ng5-slider-bar ng5-slider-selection\" [ngStyle]=\"barStyle\"></span>\n</span>\n<!-- // 4 Left slider handle -->\n<span ng5SliderMinHElem class=\"ng5-slider-span ng5-slider-pointer ng5-slider-pointer-min\" [ngStyle]=minPointerStyle></span>\n<!-- // 5 Right slider handle -->\n<span ng5SliderMaxHElem class=\"ng5-slider-span ng5-slider-pointer ng5-slider-pointer-max\" [ngStyle]=maxPointerStyle></span>\n<!-- // 6 Floor label -->\n<span ng5SliderFlrLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-floor\"></span>\n<!-- // 7 Ceiling label -->\n<span ng5SliderCeilLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-ceil\"></span>\n<!-- // 8 Label above left slider handle -->\n<span ng5SliderMinLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-model-value\"></span>\n<!-- // 9 Label above right slider handle -->\n<span ng5SliderMaxLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-model-high\"></span>\n<!-- // 10 Range label when the slider handles are close ex. 15 - 17 -->\n<span ng5SliderCmbLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-combined\"></span>\n<!-- // 11 The ticks -->\n<span ng5SliderTicksElem [hidden]=\"!showTicks\" class=\"ng5-slider-ticks\">\n  <span *ngFor=\"let t of ticks\" class=\"ng5-slider-tick\" [ngClass]=\"{'ng5-slider-selected': t.selected}\" [ngStyle]=\"t.style\">\n    <ng5-slider-tooltip-wrapper [template]=\"tooltipTemplate\" [tooltip]=\"t.tooltip\" [placement]=\"t.tooltipPlacement\"></ng5-slider-tooltip-wrapper>\n    <ng5-slider-tooltip-wrapper *ngIf=\"t.value != null\" class=\"ng5-slider-span ng5-slider-tick-value\"\n        [template]=\"tooltipTemplate\" [tooltip]=\"t.valueTooltip\" [placement]=\"t.valueTooltipPlacement\" [content]=\"t.value\"></ng5-slider-tooltip-wrapper>\n    <span *ngIf=\"t.legend != null\" class=\"ng5-slider-span ng5-slider-tick-legend\" [innerHTML]=\"t.legend\"></span>\n  </span>\n</span>",
                styles: ["::ng-deep .ng5-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y}::ng-deep .ng5-slider.with-legend{margin-bottom:40px}::ng-deep .ng5-slider[disabled]{cursor:not-allowed}::ng-deep .ng5-slider[disabled] .ng5-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ng5-slider[disabled] .ng5-slider-draggable{cursor:not-allowed}::ng-deep .ng5-slider[disabled] .ng5-slider-selection{background:#8b91a2}::ng-deep .ng5-slider[disabled] .ng5-slider-tick{cursor:not-allowed}::ng-deep .ng5-slider[disabled] .ng5-slider-tick.ng5-slider-selected{background:#8b91a2}::ng-deep .ng5-slider .ng5-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ng5-slider .ng5-slider-base{width:100%;height:100%;padding:0}::ng-deep .ng5-slider .ng5-slider-bar-wrapper{left:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ng5-slider .ng5-slider-draggable{cursor:move}::ng-deep .ng5-slider .ng5-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}::ng-deep .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-transparent .ng5-slider-bar{background:0 0}::ng-deep .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-left-out-selection .ng5-slider-bar{background:#df002d}::ng-deep .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-right-out-selection .ng5-slider-bar{background:#03a688}::ng-deep .ng5-slider .ng5-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}::ng-deep .ng5-slider .ng5-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}::ng-deep .ng5-slider .ng5-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}::ng-deep .ng5-slider .ng5-slider-pointer:hover:after{background-color:#fff}::ng-deep .ng5-slider .ng5-slider-pointer.ng5-slider-active{z-index:4}::ng-deep .ng5-slider .ng5-slider-pointer.ng5-slider-active:after{background-color:#451aff}::ng-deep .ng5-slider .ng5-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ng5-slider .ng5-slider-bubble.ng5-slider-limit{color:#55637d}::ng-deep .ng5-slider .ng5-slider-ticks{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ng5-slider .ng5-slider-ticks-values-under .ng5-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ng5-slider .ng5-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ng5-slider .ng5-slider-tick.ng5-slider-selected{background:#0db9f0}::ng-deep .ng5-slider .ng5-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}::ng-deep .ng5-slider .ng5-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}::ng-deep .ng5-slider.ng5-slider-vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;-ms-touch-action:pan-x;touch-action:pan-x}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-base{width:100%;height:100%;padding:0}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-bubble{left:16px!important;bottom:0}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-ticks-values-under .ng5-slider-tick-value{bottom:auto;left:auto;right:24px}"],
                host: { class: 'ng5-slider' },
                providers: [NG5_SLIDER_CONTROL_VALUE_ACCESSOR]
            },] },
];
SliderComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
SliderComponent.propDecorators = {
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "valueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "highValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "highValueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "userChangeStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "userChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "userChangeEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "manualRefresh": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "leftOutSelBar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [LeftOutSelDirective,] },],
    "rightOutSelBar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [RightOutSelDirective,] },],
    "fullBarElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [FullBarDirective,] },],
    "selBarElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [SelBarDirective,] },],
    "minHElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MinHDirective,] },],
    "maxHElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MaxHDirective,] },],
    "flrLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [FlrLabDirective,] },],
    "ceilLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [CeilLabDirective,] },],
    "minLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MinLabDirective,] },],
    "maxLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MaxLabDirective,] },],
    "cmbLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [CmbLabDirective,] },],
    "ticksElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TicksDirective,] },],
    "tooltipTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['tooltipTemplate',] },],
    "sliderElementVerticalClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng5-slider-vertical',] },],
    "sliderElementDisabledAttr": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.disabled',] },],
    "onResize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize', ['$event'],] },],
};
var TooltipWrapperComponent = /** @class */ (function () {
    function TooltipWrapperComponent() {
    }
    return TooltipWrapperComponent;
}());
TooltipWrapperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ng5-slider-tooltip-wrapper',
                template: "<ng-container *ngIf=\"template\">\n  <ng-template *ngTemplateOutlet=\"template; context: {tooltip: tooltip, placement: placement, content: content}\"></ng-template>\n</ng-container>\n\n<ng-container *ngIf=\"!template\">\n  <div class=\"ng5-slider-inner-tooltip\" [attr.title]=\"tooltip\" [attr.data-tooltip-placement]=\"placement\">\n    {{content}}\n  </div>\n</ng-container>",
                styles: [".ng5-slider-inner-tooltip{height:100%}"]
            },] },
];
TooltipWrapperComponent.ctorParameters = function () { return []; };
TooltipWrapperComponent.propDecorators = {
    "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var Ng5SliderModule = /** @class */ (function () {
    function Ng5SliderModule() {
    }
    return Ng5SliderModule;
}());
Ng5SliderModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                declarations: [
                    SliderComponent,
                    RightOutSelDirective,
                    LeftOutSelDirective,
                    FullBarDirective,
                    SelBarDirective,
                    MinHDirective,
                    MaxHDirective,
                    FlrLabDirective,
                    CeilLabDirective,
                    MinLabDirective,
                    MaxLabDirective,
                    CmbLabDirective,
                    TicksDirective,
                    TooltipWrapperComponent
                ],
                exports: [
                    SliderComponent
                ]
            },] },
];
Ng5SliderModule.ctorParameters = function () { return []; };


//# sourceMappingURL=ng5-slider.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'responsive': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/app/pages/catalog/beds/beds.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/catalog/beds/beds.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner\">\n  <div class=\"container\">\n    <h1>Кровати <br>и матрасы</h1>\n    <img src=\"/assets/img/general/head-banner.png\" alt=\"\" class=\"head-banner__img\">\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"catalog\">\n    <app-sorting></app-sorting>\n    <div class=\"product-list\">\n      <app-product-card-min *ngFor=\"let product of productsBeds\n        | search: _filterService.searchStr\n        | orderBy: _filterService.Type\n        | paginate: config\"\n        [product]=\"product\">\n      </app-product-card-min>\n    </div>\n\n\n\n<pagination-template #p=\"paginationApi\"\n                     [id]=\"config.id\"\n                     (pageChange)=\"config.currentPage = $event\"\n                     [maxSize]=\"10\">\n\n\n    <div class=\"pagination\">\n        <div class=\"pagination__previous\" [class.disabled]=\"p.isFirstPage()\">\n            <a (click)=\"p.previous()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M2.534,5.015 L5.702,8.172 C6.126,8.594 6.126,9.279 5.702,9.701 C5.278,10.124 4.592,10.124 4.168,9.701 L0.333,5.879 C0.095,5.642 0.005,5.324 0.034,5.015 C0.005,4.705 0.095,4.388 0.333,4.150 L4.168,0.328 C4.592,-0.095 5.278,-0.095 5.702,0.328 C6.126,0.750 6.126,1.434 5.702,1.857 L2.534,5.015 Z\" />\n              </svg>\n            </a>\n        </div>\n\n        <div *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span>{{ page.label }}</span>\n            </div>\n        </div>\n\n        <div class=\"pagination__next\" [class.disabled]=\"p.isLastPage()\">\n            <a (click)=\"p.next()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"6px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M5.666,5.879 L1.831,9.701 C1.408,10.124 0.721,10.124 0.297,9.701 C-0.127,9.280 -0.127,8.595 0.297,8.172 L3.465,5.015 L0.297,1.857 C-0.127,1.434 -0.127,0.750 0.297,0.328 C0.721,-0.094 1.408,-0.094 1.831,0.328 L5.666,4.151 C5.904,4.388 5.993,4.705 5.964,5.015 C5.993,5.324 5.904,5.642 5.666,5.879 Z\" />\n              </svg>\n            </a>\n        </div>\n    </div>\n</pagination-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/beds/beds.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/catalog/beds/beds.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-banner {\n  margin-top: -1px;\n  background-color: white; }\n  .head-banner .container {\n    display: flex;\n    height: 236px;\n    align-items: center;\n    justify-content: space-between; }\n  .head-banner__img {\n    align-self: flex-end;\n    margin-right: 84px;\n    pointer-events: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  @media (max-width: 1000px) {\n    .head-banner__img {\n      margin-right: 10px; } }\n  @media (max-width: 768px) {\n    .head-banner .container {\n      height: 120px; }\n    .head-banner__img {\n      width: 123px;\n      height: 101px; } }\n  .catalog {\n  margin: 48px 0 97px; }\n  .product-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 13px -15px; }\n  app-product-card-min {\n  width: calc(100% / 12 * 3 - 30px);\n  margin: 13px 15px; }\n  @media (max-width: 1000px) {\n    app-product-card-min {\n      width: calc(100% / 12 * 4 - 30px); } }\n  @media (max-width: 768px) {\n    app-product-card-min {\n      width: calc(100% - 30px); } }\n  .search {\n  width: 100%;\n  margin: 0 15px; }\n  .search input {\n    height: 40px;\n    width: 300px;\n    border: none; }\n  .pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 90px;\n  background-color: #ffffff;\n  margin-bottom: 97px;\n  padding: 0 242px;\n  box-sizing: border-box; }\n  @media (max-width: 991.98px) {\n    .pagination {\n      padding: 10px; } }\n  .pagination .current {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    background: none;\n    border: none;\n    border-radius: 100%;\n    box-shadow: 0 9px 18px rgba(168, 172, 185, 0.53);\n    background-color: #ffffff;\n    color: #f54732;\n    font-weight: 700;\n    box-sizing: border-box; }\n  .pagination__previous, .pagination__next {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n    border: 2px solid #e3e8f0;\n    background: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9iZWRzL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxjYXRhbG9nXFxiZWRzXFxiZWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0VBRnpCO0lBS0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7RUFHaEM7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQUVuQjtJQUNFO01BQ0Usa0JBQWtCLEVBQUEsRUFDbkI7RUFFSDtJQXpCRjtNQTJCTSxhQUFhLEVBQUE7SUFHZjtNQUNFLFlBQVk7TUFDWixhQUFhLEVBQUEsRUFDZDtFQUlMO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQixFQUFBO0VBQ2pCO0lBSEY7TUFJSSxpQ0FBaUMsRUFBQSxFQUtwQztFQUhDO0lBTkY7TUFPSSx3QkFBd0IsRUFBQSxFQUUzQjtFQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUZoQjtJQUlJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBT2hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBO0VBQ3RCO0lBVEY7TUFVSSxhQUFhLEVBQUEsRUE4QmQ7RUF4Q0g7SUFjSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cvYmVkcy9iZWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtYmFubmVyIHtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDIzNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogODRweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgJl9faW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHdpZHRoOiAxMjNweDtcclxuICAgICAgaGVpZ2h0OiAxMDFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXRhbG9nIHtcclxuICBtYXJnaW46IDQ4cHggMCA5N3B4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDEzcHggLTE1cHg7XHJcbn1cclxuXHJcbmFwcC1wcm9kdWN0LWNhcmQtbWluIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC8gMTIgKiAzIC0gMzBweCk7XHJcbiAgbWFyZ2luOiAxM3B4IDE1cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDEyICogNCAtIDMwcHgpO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG4gIGlucHV0IHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vL3BhZ2luYXRpb25cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDk3cHg7XHJcbiAgcGFkZGluZzogMCAyNDJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDlweCAxOHB4IHJnYmEoMTY4LCAxNzIsIDE4NSwgMC41Myk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNmNTQ3MzI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gICZfX3ByZXZpb3VzLCAmX19uZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNlOGYwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/catalog/beds/beds.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/catalog/beds/beds.component.ts ***!
  \******************************************************/
/*! exports provided: BedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BedsComponent", function() { return BedsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");





var BedsComponent = /** @class */ (function () {
    function BedsComponent(_filterService, _productService, _cartService) {
        this._filterService = _filterService;
        this._productService = _productService;
        this._cartService = _cartService;
        this.productsBeds = [];
        this.config = {
            id: 'custom',
            itemsPerPage: 16,
            currentPage: 1
        };
    }
    BedsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
            this._cartService.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
        }
        this._productService.getProductsBeds().subscribe(function (data) { return _this.productsBeds = data; });
    };
    BedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-beds',
            template: __webpack_require__(/*! ./beds.component.html */ "./src/app/pages/catalog/beds/beds.component.html"),
            providers: [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]],
            styles: [__webpack_require__(/*! ./beds.component.scss */ "./src/app/pages/catalog/beds/beds.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]])
    ], BedsComponent);
    return BedsComponent;
}());



/***/ }),

/***/ "./src/app/pages/catalog/cabinets/cabinets.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/catalog/cabinets/cabinets.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner\">\n  <div class=\"container\">\n    <h1>Шкафы <br>и комоды</h1>\n    <img src=\"/assets/img/general/head-banner.png\" alt=\"\" class=\"head-banner__img\">\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"catalog\">\n    <app-sorting></app-sorting>\n    <div class=\"product-list\">\n      <app-product-card-min *ngFor=\"let product of productsCabinets\n        | search: _filterService.searchStr\n        | orderBy: _filterService.Type\n        | paginate: config\"\n        [product]=\"product\">\n      </app-product-card-min>\n    </div>\n\n\n\n<pagination-template #p=\"paginationApi\"\n                     [id]=\"config.id\"\n                     (pageChange)=\"config.currentPage = $event\"\n                     [maxSize]=\"10\">\n\n\n    <div class=\"pagination\">\n        <div class=\"pagination__previous\" [class.disabled]=\"p.isFirstPage()\">\n            <a (click)=\"p.previous()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M2.534,5.015 L5.702,8.172 C6.126,8.594 6.126,9.279 5.702,9.701 C5.278,10.124 4.592,10.124 4.168,9.701 L0.333,5.879 C0.095,5.642 0.005,5.324 0.034,5.015 C0.005,4.705 0.095,4.388 0.333,4.150 L4.168,0.328 C4.592,-0.095 5.278,-0.095 5.702,0.328 C6.126,0.750 6.126,1.434 5.702,1.857 L2.534,5.015 Z\" />\n              </svg>\n            </a>\n        </div>\n\n        <div *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span>{{ page.label }}</span>\n            </div>\n        </div>\n\n        <div class=\"pagination__next\" [class.disabled]=\"p.isLastPage()\">\n            <a (click)=\"p.next()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"6px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M5.666,5.879 L1.831,9.701 C1.408,10.124 0.721,10.124 0.297,9.701 C-0.127,9.280 -0.127,8.595 0.297,8.172 L3.465,5.015 L0.297,1.857 C-0.127,1.434 -0.127,0.750 0.297,0.328 C0.721,-0.094 1.408,-0.094 1.831,0.328 L5.666,4.151 C5.904,4.388 5.993,4.705 5.964,5.015 C5.993,5.324 5.904,5.642 5.666,5.879 Z\" />\n              </svg>\n            </a>\n        </div>\n    </div>\n</pagination-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/cabinets/cabinets.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/catalog/cabinets/cabinets.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-banner {\n  margin-top: -1px;\n  background-color: white; }\n  .head-banner .container {\n    display: flex;\n    height: 236px;\n    align-items: center;\n    justify-content: space-between; }\n  .head-banner__img {\n    align-self: flex-end;\n    margin-right: 84px;\n    pointer-events: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  @media (max-width: 1000px) {\n    .head-banner__img {\n      margin-right: 10px; } }\n  @media (max-width: 768px) {\n    .head-banner .container {\n      height: 120px; }\n    .head-banner__img {\n      width: 123px;\n      height: 101px; } }\n  .catalog {\n  margin: 48px 0 97px; }\n  .product-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 13px -15px; }\n  app-product-card-min {\n  width: calc(100% / 12 * 3 - 30px);\n  margin: 13px 15px; }\n  @media (max-width: 1000px) {\n    app-product-card-min {\n      width: calc(100% / 12 * 4 - 30px); } }\n  @media (max-width: 768px) {\n    app-product-card-min {\n      width: calc(100% - 30px); } }\n  .search {\n  width: 100%;\n  margin: 0 15px; }\n  .search input {\n    height: 40px;\n    width: 300px;\n    border: none; }\n  .pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 90px;\n  background-color: #ffffff;\n  margin-bottom: 97px;\n  padding: 0 242px;\n  box-sizing: border-box; }\n  @media (max-width: 991.98px) {\n    .pagination {\n      padding: 10px; } }\n  .pagination .current {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    background: none;\n    border: none;\n    border-radius: 100%;\n    box-shadow: 0 9px 18px rgba(168, 172, 185, 0.53);\n    background-color: #ffffff;\n    color: #f54732;\n    font-weight: 700;\n    box-sizing: border-box; }\n  .pagination__previous, .pagination__next {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n    border: 2px solid #e3e8f0;\n    background: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9jYWJpbmV0cy9FOlxc0KDQsNCx0L7RgtGLXFxnaXRodWJcXHN0b3JlL3NyY1xcYXBwXFxwYWdlc1xcY2F0YWxvZ1xcY2FiaW5ldHNcXGNhYmluZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0VBRnpCO0lBS0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7RUFHaEM7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQUVuQjtJQUNFO01BQ0Usa0JBQWtCLEVBQUEsRUFDbkI7RUFFSDtJQXpCRjtNQTJCTSxhQUFhLEVBQUE7SUFHZjtNQUNFLFlBQVk7TUFDWixhQUFhLEVBQUEsRUFDZDtFQUlMO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQixFQUFBO0VBQ2pCO0lBSEY7TUFJSSxpQ0FBaUMsRUFBQSxFQUtwQztFQUhDO0lBTkY7TUFPSSx3QkFBd0IsRUFBQSxFQUUzQjtFQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUZoQjtJQUlJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBT2hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBO0VBQ3RCO0lBVEY7TUFVSSxhQUFhLEVBQUEsRUE4QmQ7RUF4Q0g7SUFjSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cvY2FiaW5ldHMvY2FiaW5ldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZC1iYW5uZXIge1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMjM2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJl9faW1nIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4NHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAmX19pbWcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW1nIHtcclxuICAgICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEwMXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhdGFsb2cge1xyXG4gIG1hcmdpbjogNDhweCAwIDk3cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbjogMTNweCAtMTVweDtcclxufVxyXG5cclxuYXBwLXByb2R1Y3QtY2FyZC1taW4ge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAxMiAqIDMgLSAzMHB4KTtcclxuICBtYXJnaW46IDEzcHggMTVweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMTIgKiA0IC0gMzBweCk7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vcGFnaW5hdGlvblxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogOTdweDtcclxuICBwYWRkaW5nOiAwIDI0MnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgOXB4IDE4cHggcmdiYSgxNjgsIDE3MiwgMTg1LCAwLjUzKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2Y1NDczMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgJl9fcHJldmlvdXMsICZfX25leHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlM2U4ZjA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/catalog/cabinets/cabinets.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/catalog/cabinets/cabinets.component.ts ***!
  \**************************************************************/
/*! exports provided: CabinetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinetsComponent", function() { return CabinetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");





var CabinetsComponent = /** @class */ (function () {
    function CabinetsComponent(_filterService, _productService, _cartService) {
        this._filterService = _filterService;
        this._productService = _productService;
        this._cartService = _cartService;
        this.productsCabinets = [];
        this.config = {
            id: 'custom',
            itemsPerPage: 16,
            currentPage: 1
        };
    }
    CabinetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
            this._cartService.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
        }
        this._productService.getProductsCabinets().subscribe(function (data) { return _this.productsCabinets = data; });
    };
    CabinetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cabinets',
            template: __webpack_require__(/*! ./cabinets.component.html */ "./src/app/pages/catalog/cabinets/cabinets.component.html"),
            providers: [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]],
            styles: [__webpack_require__(/*! ./cabinets.component.scss */ "./src/app/pages/catalog/cabinets/cabinets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]])
    ], CabinetsComponent);
    return CabinetsComponent;
}());



/***/ }),

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
/* harmony import */ var _beds_beds_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beds/beds.component */ "./src/app/pages/catalog/beds/beds.component.ts");
/* harmony import */ var _chairs_chairs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chairs/chairs.component */ "./src/app/pages/catalog/chairs/chairs.component.ts");
/* harmony import */ var _cabinets_cabinets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cabinets/cabinets.component */ "./src/app/pages/catalog/cabinets/cabinets.component.ts");
/* harmony import */ var _kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kitchen/kitchen.component */ "./src/app/pages/catalog/kitchen/kitchen.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/catalog/home/home.component.ts");








var routes = [
    { path: "", component: _chairs_chairs_component__WEBPACK_IMPORTED_MODULE_4__["ChairsComponent"] },
    { path: "beds", component: _beds_beds_component__WEBPACK_IMPORTED_MODULE_3__["BedsComponent"] },
    { path: "cabinets", component: _cabinets_cabinets_component__WEBPACK_IMPORTED_MODULE_5__["CabinetsComponent"] },
    { path: "kitchen", component: _kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_6__["KitchenComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }
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
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var angular_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-pipes */ "./node_modules/angular-pipes/fesm5/angular-pipes.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _catalog_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catalog-routing.module */ "./src/app/pages/catalog/catalog-routing.module.ts");
/* harmony import */ var _sorting_sorting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sorting/sorting.component */ "./src/app/pages/catalog/sorting/sorting.component.ts");
/* harmony import */ var _product_card_min_product_card_min_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-card-min/product-card-min.component */ "./src/app/pages/catalog/product-card-min/product-card-min.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.pipe */ "./src/app/pages/catalog/search.pipe.ts");
/* harmony import */ var _chairs_chairs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chairs/chairs.component */ "./src/app/pages/catalog/chairs/chairs.component.ts");
/* harmony import */ var _beds_beds_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beds/beds.component */ "./src/app/pages/catalog/beds/beds.component.ts");
/* harmony import */ var _cabinets_cabinets_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cabinets/cabinets.component */ "./src/app/pages/catalog/cabinets/cabinets.component.ts");
/* harmony import */ var _kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kitchen/kitchen.component */ "./src/app/pages/catalog/kitchen/kitchen.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/catalog/home/home.component.ts");
















var CatalogModule = /** @class */ (function () {
    function CatalogModule() {
    }
    CatalogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _sorting_sorting_component__WEBPACK_IMPORTED_MODULE_8__["SortingComponent"],
                _product_card_min_product_card_min_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardMinComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"],
                angular_pipes__WEBPACK_IMPORTED_MODULE_5__["OrderByPipe"],
                _chairs_chairs_component__WEBPACK_IMPORTED_MODULE_11__["ChairsComponent"],
                _beds_beds_component__WEBPACK_IMPORTED_MODULE_12__["BedsComponent"],
                _cabinets_cabinets_component__WEBPACK_IMPORTED_MODULE_13__["CabinetsComponent"],
                _kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_14__["KitchenComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _catalog_routing_module__WEBPACK_IMPORTED_MODULE_7__["CatalogRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_4__["Ng5SliderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
            ]
        })
    ], CatalogModule);
    return CatalogModule;
}());



/***/ }),

/***/ "./src/app/pages/catalog/chairs/chairs.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/catalog/chairs/chairs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner\">\n  <div class=\"container\">\n    <h1>Стулья <br>и кресла</h1>\n    <img src=\"/assets/img/general/head-banner.png\" alt=\"\" class=\"head-banner__img\">\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"catalog\">\n    <app-sorting></app-sorting>\n    <div class=\"product-list\">\n      <app-product-card-min *ngFor=\"let product of productsChairs\n        | search: _filterService.searchStr\n        | orderBy: _filterService.Type\n        | paginate: config\"\n        [product]=\"product\">\n      </app-product-card-min>\n    </div>\n\n\n\n<pagination-template #p=\"paginationApi\"\n                     [id]=\"config.id\"\n                     (pageChange)=\"config.currentPage = $event\"\n                     [maxSize]=\"10\">\n\n\n    <div class=\"pagination\">\n        <div class=\"pagination__previous\" [class.disabled]=\"p.isFirstPage()\">\n            <a (click)=\"p.previous()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M2.534,5.015 L5.702,8.172 C6.126,8.594 6.126,9.279 5.702,9.701 C5.278,10.124 4.592,10.124 4.168,9.701 L0.333,5.879 C0.095,5.642 0.005,5.324 0.034,5.015 C0.005,4.705 0.095,4.388 0.333,4.150 L4.168,0.328 C4.592,-0.095 5.278,-0.095 5.702,0.328 C6.126,0.750 6.126,1.434 5.702,1.857 L2.534,5.015 Z\" />\n              </svg>\n            </a>\n        </div>\n\n        <div *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span>{{ page.label }}</span>\n            </div>\n        </div>\n\n        <div class=\"pagination__next\" [class.disabled]=\"p.isLastPage()\">\n            <a (click)=\"p.next()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"6px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M5.666,5.879 L1.831,9.701 C1.408,10.124 0.721,10.124 0.297,9.701 C-0.127,9.280 -0.127,8.595 0.297,8.172 L3.465,5.015 L0.297,1.857 C-0.127,1.434 -0.127,0.750 0.297,0.328 C0.721,-0.094 1.408,-0.094 1.831,0.328 L5.666,4.151 C5.904,4.388 5.993,4.705 5.964,5.015 C5.993,5.324 5.904,5.642 5.666,5.879 Z\" />\n              </svg>\n            </a>\n        </div>\n    </div>\n</pagination-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/chairs/chairs.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/catalog/chairs/chairs.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-banner {\n  margin-top: -1px;\n  background-color: white; }\n  .head-banner .container {\n    display: flex;\n    height: 236px;\n    align-items: center;\n    justify-content: space-between; }\n  .head-banner__img {\n    align-self: flex-end;\n    margin-right: 84px;\n    pointer-events: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  @media (max-width: 1000px) {\n    .head-banner__img {\n      margin-right: 10px; } }\n  @media (max-width: 768px) {\n    .head-banner .container {\n      height: 120px; }\n    .head-banner__img {\n      width: 123px;\n      height: 101px; } }\n  .catalog {\n  margin: 48px 0 97px; }\n  .product-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 13px -15px; }\n  app-product-card-min {\n  width: calc(100% / 12 * 3 - 30px);\n  margin: 13px 15px; }\n  @media (max-width: 1000px) {\n    app-product-card-min {\n      width: calc(100% / 12 * 4 - 30px); } }\n  @media (max-width: 768px) {\n    app-product-card-min {\n      width: calc(100% - 30px); } }\n  .search {\n  width: 100%;\n  margin: 0 15px; }\n  .search input {\n    height: 40px;\n    width: 300px;\n    border: none; }\n  .pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 90px;\n  background-color: #ffffff;\n  margin-bottom: 97px;\n  padding: 0 242px;\n  box-sizing: border-box; }\n  @media (max-width: 991.98px) {\n    .pagination {\n      padding: 10px; } }\n  .pagination .current {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    background: none;\n    border: none;\n    border-radius: 100%;\n    box-shadow: 0 9px 18px rgba(168, 172, 185, 0.53);\n    background-color: #ffffff;\n    color: #f54732;\n    font-weight: 700;\n    box-sizing: border-box; }\n  .pagination__previous, .pagination__next {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n    border: 2px solid #e3e8f0;\n    background: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9jaGFpcnMvRTpcXNCg0LDQsdC+0YLRi1xcZ2l0aHViXFxzdG9yZS9zcmNcXGFwcFxccGFnZXNcXGNhdGFsb2dcXGNoYWlyc1xcY2hhaXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0VBRnpCO0lBS0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7RUFHaEM7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQUVuQjtJQUNFO01BQ0Usa0JBQWtCLEVBQUEsRUFDbkI7RUFFSDtJQXpCRjtNQTJCTSxhQUFhLEVBQUE7SUFHZjtNQUNFLFlBQVk7TUFDWixhQUFhLEVBQUEsRUFDZDtFQUlMO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQixFQUFBO0VBQ2pCO0lBSEY7TUFJSSxpQ0FBaUMsRUFBQSxFQUtwQztFQUhDO0lBTkY7TUFPSSx3QkFBd0IsRUFBQSxFQUUzQjtFQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUZoQjtJQUlJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBT2hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBO0VBQ3RCO0lBVEY7TUFVSSxhQUFhLEVBQUEsRUE4QmQ7RUF4Q0g7SUFjSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cvY2hhaXJzL2NoYWlycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkLWJhbm5lciB7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAyMzZweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDg0cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICZfX2ltZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19pbWcge1xyXG4gICAgICB3aWR0aDogMTIzcHg7XHJcbiAgICAgIGhlaWdodDogMTAxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2F0YWxvZyB7XHJcbiAgbWFyZ2luOiA0OHB4IDAgOTdweDtcclxufVxyXG5cclxuLnByb2R1Y3QtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luOiAxM3B4IC0xNXB4O1xyXG59XHJcblxyXG5hcHAtcHJvZHVjdC1jYXJkLW1pbiB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDEyICogMyAtIDMwcHgpO1xyXG4gIG1hcmdpbjogMTNweCAxNXB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAxMiAqIDQgLSAzMHB4KTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy9wYWdpbmF0aW9uXHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tYm90dG9tOiA5N3B4O1xyXG4gIHBhZGRpbmc6IDAgMjQycHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY3VycmVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA5cHggMThweCByZ2JhKDE2OCwgMTcyLCAxODUsIDAuNTMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjZjU0NzMyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICAmX19wcmV2aW91cywgJl9fbmV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UzZThmMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/catalog/chairs/chairs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/catalog/chairs/chairs.component.ts ***!
  \**********************************************************/
/*! exports provided: ChairsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChairsComponent", function() { return ChairsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");





var ChairsComponent = /** @class */ (function () {
    function ChairsComponent(_filterService, _productService, _cartService) {
        this._filterService = _filterService;
        this._productService = _productService;
        this._cartService = _cartService;
        this.productsChairs = [];
        this.config = {
            id: 'custom',
            itemsPerPage: 16,
            currentPage: 1
        };
    }
    ChairsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
            this._cartService.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
        }
        this._productService.getProductsChairs().subscribe(function (data) { return _this.productsChairs = data; });
    };
    ChairsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chairs',
            template: __webpack_require__(/*! ./chairs.component.html */ "./src/app/pages/catalog/chairs/chairs.component.html"),
            providers: [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]],
            styles: [__webpack_require__(/*! ./chairs.component.scss */ "./src/app/pages/catalog/chairs/chairs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]])
    ], ChairsComponent);
    return ChairsComponent;
}());



/***/ }),

/***/ "./src/app/pages/catalog/home/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/catalog/home/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner\">\n  <div class=\"container\">\n    <h1>Товары <br>для дома</h1>\n    <img src=\"/assets/img/general/head-banner.png\" alt=\"\" class=\"head-banner__img\">\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"catalog\">\n    <app-sorting></app-sorting>\n    <div class=\"product-list\">\n      <app-product-card-min *ngFor=\"let product of productsHome\n        | search: _filterService.searchStr\n        | orderBy: _filterService.Type\n        | paginate: config\"\n        [product]=\"product\">\n      </app-product-card-min>\n    </div>\n\n\n\n<pagination-template #p=\"paginationApi\"\n                     [id]=\"config.id\"\n                     (pageChange)=\"config.currentPage = $event\"\n                     [maxSize]=\"10\">\n\n\n    <div class=\"pagination\">\n        <div class=\"pagination__previous\" [class.disabled]=\"p.isFirstPage()\">\n            <a (click)=\"p.previous()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M2.534,5.015 L5.702,8.172 C6.126,8.594 6.126,9.279 5.702,9.701 C5.278,10.124 4.592,10.124 4.168,9.701 L0.333,5.879 C0.095,5.642 0.005,5.324 0.034,5.015 C0.005,4.705 0.095,4.388 0.333,4.150 L4.168,0.328 C4.592,-0.095 5.278,-0.095 5.702,0.328 C6.126,0.750 6.126,1.434 5.702,1.857 L2.534,5.015 Z\" />\n              </svg>\n            </a>\n        </div>\n\n        <div *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span>{{ page.label }}</span>\n            </div>\n        </div>\n\n        <div class=\"pagination__next\" [class.disabled]=\"p.isLastPage()\">\n            <a (click)=\"p.next()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"6px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M5.666,5.879 L1.831,9.701 C1.408,10.124 0.721,10.124 0.297,9.701 C-0.127,9.280 -0.127,8.595 0.297,8.172 L3.465,5.015 L0.297,1.857 C-0.127,1.434 -0.127,0.750 0.297,0.328 C0.721,-0.094 1.408,-0.094 1.831,0.328 L5.666,4.151 C5.904,4.388 5.993,4.705 5.964,5.015 C5.993,5.324 5.904,5.642 5.666,5.879 Z\" />\n              </svg>\n            </a>\n        </div>\n    </div>\n</pagination-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/home/home.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/catalog/home/home.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-banner {\n  margin-top: -1px;\n  background-color: white; }\n  .head-banner .container {\n    display: flex;\n    height: 236px;\n    align-items: center;\n    justify-content: space-between; }\n  .head-banner__img {\n    align-self: flex-end;\n    margin-right: 84px;\n    pointer-events: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  @media (max-width: 1000px) {\n    .head-banner__img {\n      margin-right: 10px; } }\n  @media (max-width: 768px) {\n    .head-banner .container {\n      height: 120px; }\n    .head-banner__img {\n      width: 123px;\n      height: 101px; } }\n  .catalog {\n  margin: 48px 0 97px; }\n  .product-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 13px -15px; }\n  app-product-card-min {\n  width: calc(100% / 12 * 3 - 30px);\n  margin: 13px 15px; }\n  @media (max-width: 1000px) {\n    app-product-card-min {\n      width: calc(100% / 12 * 4 - 30px); } }\n  @media (max-width: 768px) {\n    app-product-card-min {\n      width: calc(100% - 30px); } }\n  .search {\n  width: 100%;\n  margin: 0 15px; }\n  .search input {\n    height: 40px;\n    width: 300px;\n    border: none; }\n  .pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 90px;\n  background-color: #ffffff;\n  margin-bottom: 97px;\n  padding: 0 242px;\n  box-sizing: border-box; }\n  @media (max-width: 991.98px) {\n    .pagination {\n      padding: 10px; } }\n  .pagination .current {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    background: none;\n    border: none;\n    border-radius: 100%;\n    box-shadow: 0 9px 18px rgba(168, 172, 185, 0.53);\n    background-color: #ffffff;\n    color: #f54732;\n    font-weight: 700;\n    box-sizing: border-box; }\n  .pagination__previous, .pagination__next {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n    border: 2px solid #e3e8f0;\n    background: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9ob21lL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxjYXRhbG9nXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0VBRnpCO0lBS0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7RUFHaEM7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQUVuQjtJQUNFO01BQ0Usa0JBQWtCLEVBQUEsRUFDbkI7RUFFSDtJQXpCRjtNQTJCTSxhQUFhLEVBQUE7SUFHZjtNQUNFLFlBQVk7TUFDWixhQUFhLEVBQUEsRUFDZDtFQUlMO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQixFQUFBO0VBQ2pCO0lBSEY7TUFJSSxpQ0FBaUMsRUFBQSxFQUtwQztFQUhDO0lBTkY7TUFPSSx3QkFBd0IsRUFBQSxFQUUzQjtFQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUZoQjtJQUlJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBT2hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBO0VBQ3RCO0lBVEY7TUFVSSxhQUFhLEVBQUEsRUE4QmQ7RUF4Q0g7SUFjSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtYmFubmVyIHtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDIzNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogODRweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgJl9faW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHdpZHRoOiAxMjNweDtcclxuICAgICAgaGVpZ2h0OiAxMDFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXRhbG9nIHtcclxuICBtYXJnaW46IDQ4cHggMCA5N3B4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDEzcHggLTE1cHg7XHJcbn1cclxuXHJcbmFwcC1wcm9kdWN0LWNhcmQtbWluIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC8gMTIgKiAzIC0gMzBweCk7XHJcbiAgbWFyZ2luOiAxM3B4IDE1cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDEyICogNCAtIDMwcHgpO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG4gIGlucHV0IHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vL3BhZ2luYXRpb25cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDk3cHg7XHJcbiAgcGFkZGluZzogMCAyNDJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDlweCAxOHB4IHJnYmEoMTY4LCAxNzIsIDE4NSwgMC41Myk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNmNTQ3MzI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gICZfX3ByZXZpb3VzLCAmX19uZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNlOGYwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/catalog/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/catalog/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_filterService, _productService, _cartService) {
        this._filterService = _filterService;
        this._productService = _productService;
        this._cartService = _cartService;
        this.productsHome = [];
        this.config = {
            id: 'custom',
            itemsPerPage: 16,
            currentPage: 1
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
            this._cartService.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
        }
        this._productService.getProductsHome().subscribe(function (data) { return _this.productsHome = data; });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/catalog/home/home.component.html"),
            providers: [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/catalog/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/catalog/kitchen/kitchen.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/catalog/kitchen/kitchen.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner\">\n  <div class=\"container\">\n    <h1>Товары <br>для кухни</h1>\n    <img src=\"/assets/img/general/head-banner.png\" alt=\"\" class=\"head-banner__img\">\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"catalog\">\n    <app-sorting></app-sorting>\n    <div class=\"product-list\">\n      <app-product-card-min *ngFor=\"let product of productsKitchen\n        | search: _filterService.searchStr\n        | orderBy: _filterService.Type\n        | paginate: config\"\n        [product]=\"product\">\n      </app-product-card-min>\n    </div>\n\n\n\n<pagination-template #p=\"paginationApi\"\n                     [id]=\"config.id\"\n                     (pageChange)=\"config.currentPage = $event\"\n                     [maxSize]=\"10\">\n\n\n    <div class=\"pagination\">\n        <div class=\"pagination__previous\" [class.disabled]=\"p.isFirstPage()\">\n            <a (click)=\"p.previous()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M2.534,5.015 L5.702,8.172 C6.126,8.594 6.126,9.279 5.702,9.701 C5.278,10.124 4.592,10.124 4.168,9.701 L0.333,5.879 C0.095,5.642 0.005,5.324 0.034,5.015 C0.005,4.705 0.095,4.388 0.333,4.150 L4.168,0.328 C4.592,-0.095 5.278,-0.095 5.702,0.328 C6.126,0.750 6.126,1.434 5.702,1.857 L2.534,5.015 Z\" />\n              </svg>\n            </a>\n        </div>\n\n        <div *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span>{{ page.label }}</span>\n            </div>\n        </div>\n\n        <div class=\"pagination__next\" [class.disabled]=\"p.isLastPage()\">\n            <a (click)=\"p.next()\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"6px\" height=\"11px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(58, 64, 91)\" d=\"M5.666,5.879 L1.831,9.701 C1.408,10.124 0.721,10.124 0.297,9.701 C-0.127,9.280 -0.127,8.595 0.297,8.172 L3.465,5.015 L0.297,1.857 C-0.127,1.434 -0.127,0.750 0.297,0.328 C0.721,-0.094 1.408,-0.094 1.831,0.328 L5.666,4.151 C5.904,4.388 5.993,4.705 5.964,5.015 C5.993,5.324 5.904,5.642 5.666,5.879 Z\" />\n              </svg>\n            </a>\n        </div>\n    </div>\n</pagination-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/kitchen/kitchen.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/catalog/kitchen/kitchen.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-banner {\n  margin-top: -1px;\n  background-color: white; }\n  .head-banner .container {\n    display: flex;\n    height: 236px;\n    align-items: center;\n    justify-content: space-between; }\n  .head-banner__img {\n    align-self: flex-end;\n    margin-right: 84px;\n    pointer-events: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  @media (max-width: 1000px) {\n    .head-banner__img {\n      margin-right: 10px; } }\n  @media (max-width: 768px) {\n    .head-banner .container {\n      height: 120px; }\n    .head-banner__img {\n      width: 123px;\n      height: 101px; } }\n  .catalog {\n  margin: 48px 0 97px; }\n  .product-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 13px -15px; }\n  app-product-card-min {\n  width: calc(100% / 12 * 3 - 30px);\n  margin: 13px 15px; }\n  @media (max-width: 1000px) {\n    app-product-card-min {\n      width: calc(100% / 12 * 4 - 30px); } }\n  @media (max-width: 768px) {\n    app-product-card-min {\n      width: calc(100% - 30px); } }\n  .search {\n  width: 100%;\n  margin: 0 15px; }\n  .search input {\n    height: 40px;\n    width: 300px;\n    border: none; }\n  .pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 90px;\n  background-color: #ffffff;\n  margin-bottom: 97px;\n  padding: 0 242px;\n  box-sizing: border-box; }\n  @media (max-width: 991.98px) {\n    .pagination {\n      padding: 10px; } }\n  .pagination .current {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    background: none;\n    border: none;\n    border-radius: 100%;\n    box-shadow: 0 9px 18px rgba(168, 172, 185, 0.53);\n    background-color: #ffffff;\n    color: #f54732;\n    font-weight: 700;\n    box-sizing: border-box; }\n  .pagination__previous, .pagination__next {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n    border: 2px solid #e3e8f0;\n    background: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9raXRjaGVuL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxjYXRhbG9nXFxraXRjaGVuXFxraXRjaGVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0VBRnpCO0lBS0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7RUFHaEM7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQUVuQjtJQUNFO01BQ0Usa0JBQWtCLEVBQUEsRUFDbkI7RUFFSDtJQXpCRjtNQTJCTSxhQUFhLEVBQUE7SUFHZjtNQUNFLFlBQVk7TUFDWixhQUFhLEVBQUEsRUFDZDtFQUlMO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQixFQUFBO0VBQ2pCO0lBSEY7TUFJSSxpQ0FBaUMsRUFBQSxFQUtwQztFQUhDO0lBTkY7TUFPSSx3QkFBd0IsRUFBQSxFQUUzQjtFQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUZoQjtJQUlJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBT2hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBO0VBQ3RCO0lBVEY7TUFVSSxhQUFhLEVBQUEsRUE4QmQ7RUF4Q0g7SUFjSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cva2l0Y2hlbi9raXRjaGVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtYmFubmVyIHtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDIzNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogODRweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgJl9faW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHdpZHRoOiAxMjNweDtcclxuICAgICAgaGVpZ2h0OiAxMDFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXRhbG9nIHtcclxuICBtYXJnaW46IDQ4cHggMCA5N3B4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDEzcHggLTE1cHg7XHJcbn1cclxuXHJcbmFwcC1wcm9kdWN0LWNhcmQtbWluIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC8gMTIgKiAzIC0gMzBweCk7XHJcbiAgbWFyZ2luOiAxM3B4IDE1cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDEyICogNCAtIDMwcHgpO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG4gIGlucHV0IHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vL3BhZ2luYXRpb25cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDk3cHg7XHJcbiAgcGFkZGluZzogMCAyNDJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDlweCAxOHB4IHJnYmEoMTY4LCAxNzIsIDE4NSwgMC41Myk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNmNTQ3MzI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gICZfX3ByZXZpb3VzLCAmX19uZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNlOGYwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/catalog/kitchen/kitchen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/catalog/kitchen/kitchen.component.ts ***!
  \************************************************************/
/*! exports provided: KitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenComponent", function() { return KitchenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");





var KitchenComponent = /** @class */ (function () {
    function KitchenComponent(_filterService, _productService, _cartService) {
        this._filterService = _filterService;
        this._productService = _productService;
        this._cartService = _cartService;
        this.productsKitchen = [];
        this.config = {
            id: 'custom',
            itemsPerPage: 16,
            currentPage: 1
        };
    }
    KitchenComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
            this._cartService.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
        }
        this._productService.getProductsKitchen().subscribe(function (data) { return _this.productsKitchen = data; });
    };
    KitchenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kitchen',
            template: __webpack_require__(/*! ./kitchen.component.html */ "./src/app/pages/catalog/kitchen/kitchen.component.html"),
            providers: [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]],
            styles: [__webpack_require__(/*! ./kitchen.component.scss */ "./src/app/pages/catalog/kitchen/kitchen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]])
    ], KitchenComponent);
    return KitchenComponent;
}());



/***/ }),

/***/ "./src/app/pages/catalog/product-card-min/product-card-min.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/catalog/product-card-min/product-card-min.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"product-card\">\n  <div class=\"product-card__img\">\n    <img src=\"{{product.imgURL}}\" alt=\"\">\n  </div>\n  <div class=\"product-card__name\">\n    <a routerLink=\"product\">{{product.name}}</a>\n  </div>\n  <div class=\"product-card__price\">\n    {{product.price | currency:' ':'':'0.0-0'}} ₽\n  </div>\n  <button type=\"button\" name=\"button\" class=\"btn-min\" (click)=\"addCart(product)\">В корзину</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/product-card-min/product-card-min.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/catalog/product-card-min/product-card-min.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 384px;\n  background-color: white;\n  border-radius: 5px;\n  padding: 0 30px; }\n  .product-card:hover {\n    box-shadow: 0 9px 21px rgba(168, 172, 185, 0.44); }\n  .product-card__img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 229px;\n    height: 223px; }\n  .product-card__img img {\n      width: auto; }\n  .product-card__name {\n    margin: 15px 0;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 20px; }\n  .product-card__price {\n    margin-bottom: 25px;\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 20px; }\n  .banner {\n  display: flex;\n  flex-direction: column;\n  height: 384px;\n  margin: 13px 15px;\n  padding-left: 40px;\n  box-sizing: border-box;\n  width: calc(100% / 12 * 6 - 30px); }\n  .banner:hover {\n    box-shadow: 0 9px 21px rgba(168, 172, 185, 0.44); }\n  .banner__img {\n    margin-left: -40px;\n    position: relative;\n    z-index: 0; }\n  .banner__img img {\n      height: 100%;\n      width: 100%; }\n  .banner__name {\n    margin-top: 123px;\n    position: absolute;\n    z-index: 1;\n    width: 300px; }\n  .banner__name a {\n      font-size: 36px;\n      font-weight: 700; }\n  .banner__price {\n    display: none; }\n  .banner .btn-min {\n    margin-top: 228px;\n    position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9wcm9kdWN0LWNhcmQtbWluL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxjYXRhbG9nXFxwcm9kdWN0LWNhcmQtbWluXFxwcm9kdWN0LWNhcmQtbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0VBUGpCO0lBVUksZ0RBQWdELEVBQUE7RUFHbEQ7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBTGQ7TUFRRyxXQUFXLEVBQUE7RUFJZjtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFLckI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQ0FBaUMsRUFBQTtFQVBuQztJQVVJLGdEQUFnRCxFQUFBO0VBR2xEO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUFIWDtNQUtHLFlBQVk7TUFDWixXQUFXLEVBQUE7RUFJZjtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUpiO01BT0csZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBSXBCO0lBQ0UsYUFBYSxFQUFBO0VBcENqQjtJQXdDSSxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRhbG9nL3Byb2R1Y3QtY2FyZC1taW4vcHJvZHVjdC1jYXJkLW1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMzg0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDlweCAyMXB4IHJnYmEoMTY4LCAxNzIsIDE4NSwgMC40NCk7XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMjlweDtcclxuICAgIGhlaWdodDogMjIzcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19uYW1lIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fcHJpY2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uYmFubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAzODRweDtcclxuICBtYXJnaW46IDEzcHggMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogY2FsYygxMDAlIC8gMTIgKiA2IC0gMzBweCk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA5cHggMjFweCByZ2JhKDE2OCwgMTcyLCAxODUsIDAuNDQpO1xyXG4gIH1cclxuXHJcbiAgJl9faW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3ByaWNlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYnRuLW1pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMjhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");



var ProductCardMinComponent = /** @class */ (function () {
    function ProductCardMinComponent(_cartService) {
        this._cartService = _cartService;
        this.inCart = true;
    }
    ProductCardMinComponent.prototype.addCart = function (product) {
        this._cartService.add(product);
    };
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
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

module.exports = "<div class=\"sorting\">\n    <div class=\"sorting-block\">\n      <div class=\"sorting-price\">\n          Цена\n          <div class=\"sorting-price__form custom-slider\">\n            <input type=\"number\" step=\"{{options.step}}\" class=\"input-main input-main--sorting\" [(ngModel)]=\"minValue\">\n                        —\n            <input type=\"number\" step=\"{{options.step}}\" class=\"input-main input-main--sorting\" [(ngModel)]=\"maxValue\">\n            <ng5-slider [(value)]=\"minValue\" [(highValue)]=\"maxValue\" [options]=\"options\"></ng5-slider>\n          </div>\n      </div>\n      <div class=\"sorting__side\">\n        <div class=\"sorting-view\">\n            <span>Сортировка</span>\n            <div class=\"sorting-view__select\">\n              <select class=\"sorting__select\" name=\"sorting\">\n                  <option class=\"sorting__option\" value=\"\" (click)=\"sortingName()\">По наименованию</option>\n                  <option class=\"sorting__option\" value=\"\" (click)=\"sortingPriceUp()\">Дорогие сверху</option>\n                  <option class=\"sorting__option\" value=\"\" (click)=\"sortingPriceDown()\">Дешевые сверху</option>\n              </select>\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"11px\" height=\"6px\">\n                  <path fill-rule=\"evenodd\" fill=\"rgb(161, 168, 189)\" d=\"M9.701,1.828 L5.866,5.663 C5.628,5.901 5.309,5.991 4.999,5.962 C4.689,5.991 4.370,5.901 4.133,5.663 L0.297,1.828 C-0.126,1.404 -0.126,0.718 0.297,0.294 C0.721,-0.130 1.408,-0.130 1.831,0.294 L4.999,3.461 L8.167,0.294 C8.590,-0.130 9.277,-0.130 9.701,0.294 C10.124,0.718 10.124,1.404 9.701,1.828 Z\" />\n              </svg>\n            </div>\n        </div>\n        <div class=\"sorting-quantity\">\n          <span>Товаров на странице</span>\n          <div class=\"sorting-quantity__select\">\n\n            <select class=\"sorting__select\" name=\"sorting\" [(ngModel)]=\"sortingPage\">\n                <option class=\"sorting__option\" value=\"14\" (click)=\"change()\">14</option>\n                <option class=\"sorting__option\" value=\"22\" (click)=\"change()\">22</option>\n                <option class=\"sorting__option\" value=\"30\" (click)=\"change()\">30</option>\n            </select>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"11px\" height=\"6px\">\n                <path fill-rule=\"evenodd\" fill=\"rgb(161, 168, 189)\" d=\"M9.701,1.828 L5.866,5.663 C5.628,5.901 5.309,5.991 4.999,5.962 C4.689,5.991 4.370,5.901 4.133,5.663 L0.297,1.828 C-0.126,1.404 -0.126,0.718 0.297,0.294 C0.721,-0.130 1.408,-0.130 1.831,0.294 L4.999,3.461 L8.167,0.294 C8.590,-0.130 9.277,-0.130 9.701,0.294 C10.124,0.718 10.124,1.404 9.701,1.828 Z\" />\n            </svg>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/catalog/sorting/sorting.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/catalog/sorting/sorting.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sorting {\n  background-color: #ffffff;\n  border-radius: 5px; }\n  .sorting svg {\n    margin-left: 5px; }\n  .sorting__side {\n    display: flex;\n    width: 515px;\n    justify-content: space-between; }\n  @media (max-width: 768px) {\n      .sorting__side {\n        flex-direction: column;\n        width: auto;\n        align-items: flex-start; } }\n  .sorting__select {\n    border: none;\n    color: #142558;\n    font-size: 16px;\n    -webkit-appearance: none;\n    font-weight: 700; }\n  .sorting__option {\n    color: #142558;\n    font-size: 16px; }\n  .sorting-block {\n  display: flex;\n  height: 92px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 30px; }\n  @media (max-width: 768px) {\n    .sorting-block {\n      flex-direction: column;\n      height: auto;\n      align-items: flex-start;\n      padding: 30px 0; } }\n  .sorting-price {\n  display: flex;\n  align-items: center;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  margin-right: 42px; }\n  @media (max-width: 768px) {\n    .sorting-price {\n      padding: 0 30px;\n      width: 100%;\n      box-sizing: border-box;\n      border-bottom: 1px solid #f0f2f7; } }\n  .sorting-price__form {\n    display: flex;\n    flex-wrap: wrap;\n    width: 208px;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 22px;\n    font-weight: 400;\n    line-height: 24px; }\n  .sorting-view {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n  .sorting-view span {\n    margin-right: 11px; }\n  .sorting-view__select {\n    min-width: 180px; }\n  @media (max-width: 768px) {\n    .sorting-view {\n      margin: 23px 30px; } }\n  .sorting-quantity {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  min-width: 170px;\n  padding: 0; }\n  .sorting-quantity span {\n    margin-right: 11px; }\n  @media (max-width: 768px) {\n    .sorting-quantity {\n      margin: 0 30px; } }\n  ng5-slider {\n  margin-top: 5px; }\n  ::ng-deep .custom-slider .ng5-slider .ng5-slider-bar {\n  background: #a1a8bd;\n  height: 3px;\n  border-radius: 2px; }\n  ::ng-deep .custom-slider .ng5-slider .ng5-slider-selection {\n  background: #f54732; }\n  ::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer {\n  width: 17px;\n  height: 17px;\n  border-radius: 100%;\n  border: 1px solid #d4d8e4;\n  background-color: #ffffff;\n  top: auto;\n  bottom: -6px; }\n  ::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer:after {\n  display: none; }\n  ::ng-deep .custom-slider .ng5-slider .ng5-slider-bubble {\n  bottom: 14px; }\n  ::ng-deep .custom-slider .ng5-slider .ng5-slider-limit {\n  font-weight: bold;\n  color: orange; }\n  ::ng-deep .custom-slider .ng5-slider .ng5-slider-tick {\n  width: 1px;\n  height: 10px;\n  margin-left: 4px;\n  border-radius: 0;\n  background: #ffe4d1;\n  top: -1px; }\n  ::ng-deep .custom-slider .ng5-slider .ng5-slider-tick.ng5-slider-selected {\n  background: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9zb3J0aW5nL0U6XFzQoNCw0LHQvtGC0YtcXGdpdGh1Ylxcc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxjYXRhbG9nXFxzb3J0aW5nXFxzb3J0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBO0VBRnBCO0lBS0ksZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QixFQUFBO0VBQzlCO01BSkY7UUFLSSxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLHVCQUF1QixFQUFBLEVBRTFCO0VBRUQ7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBSW5CO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWUsRUFBQTtFQUNmO0lBTkY7TUFPSSxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixlQUFlLEVBQUEsRUFFbEI7RUFFRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBQ2xCO0lBUkY7TUFTSSxlQUFlO01BQ2YsV0FBVztNQUNYLHNCQUFzQjtNQUN0QixnQ0FBZ0MsRUFBQSxFQWFuQztFQVZDO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUIsRUFBQTtFQUhyQjtJQU1JLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsZ0JBQWdCLEVBQUE7RUFFbEI7SUFaRjtNQWFJLGlCQUFpQixFQUFBLEVBRXBCO0VBRUQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBO0VBTFo7SUFRSSxrQkFBa0IsRUFBQTtFQUlwQjtJQVpGO01BYUksY0FBYyxFQUFBLEVBRWpCO0VBR0Q7RUFDRSxlQUFlLEVBQUE7RUFHakI7RUFFSSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBSnRCO0VBUUksbUJBQW1CLEVBQUE7RUFSdkI7RUFZSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxZQUFZLEVBQUE7RUFsQmhCO0VBc0JJLGFBQWEsRUFBQTtFQXRCakI7RUEwQkksWUFBWSxFQUFBO0VBMUJoQjtFQThCSSxpQkFBaUI7RUFDakIsYUFBYSxFQUFBO0VBL0JqQjtFQW1DSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQTtFQXhDYjtFQTRDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cvc29ydGluZy9zb3J0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcnRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gICZfX3NpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1MTVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zZWxlY3Qge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMxNDI1NTg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgJl9fb3B0aW9uIHtcclxuICAgIGNvbG9yOiAjMTQyNTU4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNvcnRpbmctYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA5MnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5zb3J0aW5nLXByaWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQycHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjJmNztcclxuICB9XHJcblxyXG4gICZfX2Zvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAyMDhweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5zb3J0aW5nLXZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fc2VsZWN0IHtcclxuICAgIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luOiAyM3B4IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc29ydGluZy1xdWFudGl0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fc2VsZWN0IHt9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICB9XHJcbn1cclxuLy9SYW5nZSBzbGlkZXJcclxuXHJcbm5nNS1zbGlkZXIge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ExYThiZDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItc2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNTQ3MzI7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVyIHtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ4ZTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAtNnB4O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItcG9pbnRlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItYnViYmxlIHtcclxuICAgIGJvdHRvbTogMTRweDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tc2xpZGVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLWxpbWl0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tc2xpZGVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLXRpY2sge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZTRkMTtcclxuICAgIHRvcDogLTFweDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tc2xpZGVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLXRpY2submc1LXNsaWRlci1zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");



var SortingComponent = /** @class */ (function () {
    function SortingComponent(filter) {
        this.filter = filter;
        this.minValue = 1;
        this.maxValue = 15000;
        this.sortingPage = 14;
        this.options = {
            floor: 0,
            translate: function () {
                return ' ';
            }
        };
    }
    SortingComponent.prototype.sortingName = function () {
        this.filter.sortingName();
    };
    SortingComponent.prototype.sortingPriceUp = function () {
        this.filter.sortingPriceUp();
    };
    SortingComponent.prototype.sortingPriceDown = function () {
        this.filter.sortingPriceDown();
    };
    SortingComponent.prototype.ngOnInit = function () {
    };
    SortingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sorting',
            template: __webpack_require__(/*! ./sorting.component.html */ "./src/app/pages/catalog/sorting/sorting.component.html"),
            styles: [__webpack_require__(/*! ./sorting.component.scss */ "./src/app/pages/catalog/sorting/sorting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], SortingComponent);
    return SortingComponent;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProductsChairs = function () {
        return this.http.get('assets/json/products.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var productList = data["productList__Chairs"];
            return productList.map(function (product) {
                return { id: product.id,
                    name: product.name,
                    price: product.price,
                    imgURL: product.imgURL,
                };
            });
        }));
    };
    ProductService.prototype.getProductsBeds = function () {
        return this.http.get('assets/json/products.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var productList = data["productList__Beds"];
            return productList.map(function (product) {
                return { id: product.id,
                    name: product.name,
                    price: product.price,
                    imgURL: product.imgURL,
                };
            });
        }));
    };
    ProductService.prototype.getProductsCabinets = function () {
        return this.http.get('assets/json/products.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var productList = data["productList__Cabinets"];
            return productList.map(function (product) {
                return { id: product.id,
                    name: product.name,
                    price: product.price,
                    imgURL: product.imgURL,
                };
            });
        }));
    };
    ProductService.prototype.getProductsKitchen = function () {
        return this.http.get('assets/json/products.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var productList = data["productList__Kitchen"];
            return productList.map(function (product) {
                return { id: product.id,
                    name: product.name,
                    price: product.price,
                    imgURL: product.imgURL,
                };
            });
        }));
    };
    ProductService.prototype.getProductsHome = function () {
        return this.http.get('assets/json/products.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var productList = data["productList__Home"];
            return productList.map(function (product) {
                return { id: product.id,
                    name: product.name,
                    price: product.price,
                    imgURL: product.imgURL,
                };
            });
        }));
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-catalog-catalog-module.js.map