(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-single-news-single-module"],{

/***/ "./src/app/news-single/news-single.module.ts":
/*!***************************************************!*\
  !*** ./src/app/news-single/news-single.module.ts ***!
  \***************************************************/
/*! exports provided: NewsSinglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsSinglePageModule", function() { return NewsSinglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-single.page */ "./src/app/news-single/news-single.page.ts");







var routes = [
    {
        path: '',
        component: _news_single_page__WEBPACK_IMPORTED_MODULE_6__["NewsSinglePage"]
    }
];
var NewsSinglePageModule = /** @class */ (function () {
    function NewsSinglePageModule() {
    }
    NewsSinglePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_single_page__WEBPACK_IMPORTED_MODULE_6__["NewsSinglePage"]]
        })
    ], NewsSinglePageModule);
    return NewsSinglePageModule;
}());



/***/ }),

/***/ "./src/app/news-single/news-single.page.html":
/*!***************************************************!*\
  !*** ./src/app/news-single/news-single.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{singleArticle.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card >\n\t  <img [src]=\"singleArticle.urlToImage\"/>\n\t  <ion-card-content>\n\t    <ion-card-title>{{singleArticle.title}}</ion-card-title>\n\t    <p>{{singleArticle.description}}</p>\n\t  </ion-card-content>\n\t</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/news-single/news-single.page.scss":
/*!***************************************************!*\
  !*** ./src/app/news-single/news-single.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3Mtc2luZ2xlL25ld3Mtc2luZ2xlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/news-single/news-single.page.ts":
/*!*************************************************!*\
  !*** ./src/app/news-single/news-single.page.ts ***!
  \*************************************************/
/*! exports provided: NewsSinglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsSinglePage", function() { return NewsSinglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");



var NewsSinglePage = /** @class */ (function () {
    function NewsSinglePage(newsService) {
        this.newsService = newsService;
    }
    NewsSinglePage.prototype.ngOnInit = function () {
        this.singleArticle = this.newsService.currentArticle;
        console.log(this.newsService.currentArticle);
    };
    NewsSinglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-single',
            template: __webpack_require__(/*! ./news-single.page.html */ "./src/app/news-single/news-single.page.html"),
            styles: [__webpack_require__(/*! ./news-single.page.scss */ "./src/app/news-single/news-single.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], NewsSinglePage);
    return NewsSinglePage;
}());



/***/ })

}]);
//# sourceMappingURL=news-single-news-single-module.js.map