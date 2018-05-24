webpackJsonp([13],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__available_bookdetail_bookdetail__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AvailablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvailablePage = /** @class */ (function () {
    function AvailablePage(navCtrl, navParams, UserProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserProvider = UserProvider;
        this.click = false;
        this.user = this.UserProvider.user;
    }
    AvailablePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad AvailablePage');
        this.UserProvider.getBooks().subscribe(function (res) {
            console.log("books", res);
            _this.books = res;
            // console.log(_.difference(res,this.user.booksissued))
            console.log('ionViewDidLoad AvailablePage', _this.books);
        });
    };
    AvailablePage.prototype.view = function (id) {
        var _this = this;
        console.log(id);
        this.UserProvider.getBook(id).subscribe(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__available_bookdetail_bookdetail__["a" /* BookdetailPage */]);
        });
    };
    AvailablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-available',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/available/available.html"*/'<!--\n  Generated template for the AvailablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>available</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- <ion-searchbar></ion-searchbar> -->\n      <ion-list *ngFor=\'let book of books;let i=index\'>\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="https://marketplace.canva.com/MACBTyJGXXY/1/0/thumbnail_large/canva-purple-paint-strokes-abstract-art-creativity-book-cover-MACBTyJGXXY.jpg">            \n          </ion-thumbnail>\n          <h2>{{book.name}}</h2>\n          <h3>{{book.author}}</h3>\n          <button (click)=\'view(book._id)\' ion-button clear item-end>View</button>\n        </ion-item>\n      </ion-list>\n         \n          \n                    \n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/available/available.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], AvailablePage);
    return AvailablePage;
}());

//# sourceMappingURL=available.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IssuedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssuedPage = /** @class */ (function () {
    function IssuedPage(navCtrl, navParams, UserProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserProvider = UserProvider;
        this.user = this.UserProvider.user;
    }
    IssuedPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad IssuedPage');
        this.UserProvider.IsssuedBook().subscribe(function (books) {
            _this.books = books;
            console.log("books", _this.books);
        });
    };
    IssuedPage.prototype.view = function (id) {
        console.log("u", this.user._id, "b", this.books);
        this.UserProvider.onReturnBook(this.books, this.user._id).subscribe();
    };
    IssuedPage.prototype.onReturn = function (book) {
        var _this = this;
        console.log('return book', book);
        this.UserProvider.onReturnBook(book, this.user._id).subscribe(function (books) {
            _this.books = books;
            // this.router.navigate(['user/issuedbooks']);
        });
    };
    IssuedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-issued',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/issued/issued.html"*/'<!--\n  Generated template for the IssuedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>issued</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-searchbar></ion-searchbar> -->\n    <ion-list *ngFor=\'let book of books;let i=index\'>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="https://marketplace.canva.com/MACBTyJGXXY/1/0/thumbnail_large/canva-purple-paint-strokes-abstract-art-creativity-book-cover-MACBTyJGXXY.jpg">            \n        </ion-thumbnail>\n        <h2>{{book.name}}</h2>\n        <h3>{{book.author}}</h3>\n        <button (click)=\'onReturn(book)\' ion-button  item-end>Return</button>\n      </ion-item>\n    </ion-list>\n       \n        \n                  \n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/issued/issued.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], IssuedPage);
    return IssuedPage;
}());

//# sourceMappingURL=issued.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_tabs_admin_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminHomePage = /** @class */ (function () {
    function AdminHomePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__admin_tabs_admin_tabs__["a" /* AdminTabsPage */];
    }
    AdminHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminHomePage');
    };
    AdminHomePage.prototype.logout = function () {
        this.navCtrl.popToRoot();
        // this.navCtrl.push(HomePage);
        this.auth.onLogOut();
    };
    AdminHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-home',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/admin-home/admin-home.html"*/'<!--\n  Generated template for the AdminHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-nav [root]="rootPage" ></ion-nav>\n\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/admin-home/admin-home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object])
    ], AdminHomePage);
    return AdminHomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=admin-home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_books_all_books__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_edit_create_edit__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requested_requested__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AdminTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminTabsPage = /** @class */ (function () {
    function AdminTabsPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__all_books_all_books__["a" /* AllBooksPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__create_edit_create_edit__["a" /* CreateEditPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__requested_requested__["a" /* RequestedPage */];
    }
    AdminTabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminTabsPage');
        // this.sService.onLogOut();
    };
    AdminTabsPage.prototype.logout = function () {
        this.navCtrl.popToRoot();
        // this.navCtrl.push(HomePage);
        this.auth.onLogOut();
    };
    AdminTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-tabs',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/admin-tabs/admin-tabs.html"*/'<!--\n  Generated template for the AdminTabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="All Books " tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Add New " tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Requested" tabIcon="contacts"></ion-tab>\n  </ion-tabs>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/admin-tabs/admin-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object])
    ], AdminTabsPage);
    return AdminTabsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=admin-tabs.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_adminbooks_adminbooks__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_edit_create_edit__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookPage = /** @class */ (function () {
    function BookPage(navCtrl, navParams, adService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.adService = adService;
        // this.id= this.navParams.get('index')
        this.book = this.adService.book;
        this.tab = navCtrl.parent;
        // console.log(this.id);
    }
    BookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookPage');
        // this.adService.getBook(this.id).subscribe(
        //   (data) =>{
        //     console.log(data)
        //     this.book= data;
        //   }
        // )
    };
    BookPage.prototype.ionViewDidEnter = function () {
    };
    // ionViewDidLeave(){
    //   this.navCtrl.pop();
    // }
    BookPage.prototype.onDeleteBook = function () {
        var _this = this;
        console.log('deleting ', this.book._id);
        this.adService.deleteBook(this.book._id).subscribe(function (book) {
            // this.book=book;
            console.log(book);
            _this.tab.select(0);
        });
    };
    BookPage.prototype.OnEdit = function () {
        var _this = this;
        console.log('editing book', this.book._id);
        this.adService.getBook(this.book._id).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_edit_create_edit__["a" /* CreateEditPage */], {
                edit: true,
                bookid: _this.book._id
            });
        });
    };
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/all-books/book/book.html"*/'<!--\n  Generated template for the BookPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>book</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- Name: {{book.name}} <br>\n  Author: {{book.author}} <br>\n  Desription: {{book.description}} <br>\n\n\n  <button display-inline ion-button large color="warning" (click)="signIn()" >Edit</button>\n  <button display-inline ion-button large color="danger" (click)="signIn()" >Delete</button>   -->\n  <ion-card>\n\n    <img src="https://images.unsplash.com/photo-1421338443272-0dde2463976a?ixlib=rb-0.3.5&s=3dcc426ae786e1147f711821ef382efa&dpr=1&auto=format&fit=crop&w=525&q=60">\n    <!-- <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab> -->\n  \n    <ion-item>\n      <ion-icon name="football" item-start large></ion-icon>\n      <h2>Name: </h2>\n      <!-- <h4>Author: {{book.author}}</h4> -->\n      <p>{{book.name}}</p>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name="wine" item-left large ></ion-icon>\n      <h2>Author: </h2>\n      <p>{{book.author}}</p>\n    </ion-item>\n    <ion-card-content>\n      <!-- <ion-icon name="wine" item-left large ></ion-icon> -->\n      <h2>Description: </h2>\n      <p>{{book.description}}</p>\n    </ion-card-content>\n  \n    <ion-item>\n      <span item-left>\n        <button display-inline ion-button medium color="warning" (click)="OnEdit()" >Edit</button>\n      </span>\n      <span item-right>\n        <button display-inline ion-button medium color="danger" (click)="onDeleteBook()" >Delete</button>\n      </span>\n      <!-- <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button> -->\n    </ion-item>\n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/all-books/book/book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_adminbooks_adminbooks__["a" /* AdminbooksProvider */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_adminbooks_adminbooks__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Tabs } from 'ionic-angular/navigation/nav-interfaces';
/**
 * Generated class for the RequestedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestedPage = /** @class */ (function () {
    function RequestedPage(navCtrl, navParams, adService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.adService = adService;
        this.tab = navCtrl.parent;
    }
    RequestedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestedPage');
    };
    // ionViewDidLeave(){
    //   this.navCtrl.pop();
    // }
    RequestedPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.adService.getRequestedBooks().subscribe(function (books) {
            console.log(books);
            _this.requestedBooks = books;
        });
    };
    RequestedPage.prototype.onAccept = function (bookid, userid) {
        var _this = this;
        console.log(bookid, '   ', userid);
        this.adService.acceptRequestedBooks(bookid, userid).subscribe(function (data) {
            console.log(data);
            // this.navCtrl.push(RequestedPage);
            // this.tab.select(2);
            _this.requestedBooks = data;
        });
    };
    RequestedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-requested',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/requested/requested.html"*/'<!--\n  Generated template for the RequestedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>requested</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let book of requestedBooks;let i = index">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&h=350">\n        </ion-thumbnail>\n        <h2>{{book.bookname}}</h2>\n        <p>Requested By: {{book.username}}</p>\n        <button (click)=\'onAccept(book.bookID,book.userID)\' ion-button clear item-end>Accept</button>\n      </ion-item>\n    </ion-list>\n</ion-content> \n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/requested/requested.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_adminbooks_adminbooks__["a" /* AdminbooksProvider */]])
    ], RequestedPage);
    return RequestedPage;
}());

//# sourceMappingURL=requested.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    // tab:Tabs;
    function RegisterPage(navCtrl, navParams, sService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sService = sService;
        this.alertCtrl = alertCtrl;
        // this.tab=navCtrl.parent;    
    }
    RegisterPage.prototype.alert = function (msg) {
        this.alertCtrl.create({
            title: 'Info',
            subTitle: msg,
            buttons: ['OK']
        }).present();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.onRegister = function () {
        var _this = this;
        if (!this.name.value || !this.email.value || !this.password.value || !this.cpassword.value) {
            this.alert('Please fill in the details!');
        }
        else {
            if (this.cpassword.value !== this.password.value) {
                this.alert('Passwords don\'t match!');
            }
            else {
                var user = {
                    name: this.name.value,
                    email: this.email.value,
                    password: this.password.value,
                };
                this.sService.registerUser(user).subscribe(function (user) {
                    if (user.success) {
                        console.log('signed up user', user);
                        _this.alert('You are registered!');
                        //  this.tab.select(0);  
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    }
                    else {
                        _this.alert(user.msg);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('name'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('cpassword'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "cpassword", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar   >\n    <ion-title>OUB Library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <h2>Sign-Up</h2>\n        <ion-item>\n          <ion-label floating>name</ion-label>\n          <ion-input type="text" #name></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>E-mail</ion-label>\n            <ion-input type="email" #email></ion-input>\n          </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" #password></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input type="password" #cpassword></ion-input>\n          </ion-item>\n      \n      </ion-list>\n      \n      <div padding>\n        <button block outline ion-button (click)="onRegister()">Register</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__available_available__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__issued_issued__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.chatRoot = __WEBPACK_IMPORTED_MODULE_2__available_available__["a" /* AvailablePage */];
        this.chat = __WEBPACK_IMPORTED_MODULE_3__issued_issued__["a" /* IssuedPage */];
        this.chat1 = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.logout = function () {
        this.navCtrl.popToRoot();
        // this.navCtrl.push(HomePage);
        this.auth.onLogOut();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user<span style="float:right" (click)=\'logout()\'>Logout</span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-tabs>\n    <ion-tab [root]="chatRoot" [rootParams]="chatParams" tabTitle="Available" tabIcon="list-box"></ion-tab>\n    <ion-tab [root]="chat"     [rootParams]="chatParams" tabTitle="Issued"    tabIcon="albums"></ion-tab>\n    <ion-tab [root]="chat1"    [rootParams]="chatParams" tabTitle="Profile"   tabIcon="person"></ion-tab>\n   </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object])
    ], UserPage);
    return UserPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookdetailPage = /** @class */ (function () {
    function BookdetailPage(navCtrl, navParams, UserProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserProvider = UserProvider;
        this.book = this.UserProvider.book;
        console.log(this.book);
    }
    BookdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookdetailPage');
    };
    BookdetailPage.prototype.issue = function (id) {
        var _this = this;
        this.user = this.UserProvider.user;
        console.log(id);
        // this.id = id;
        // this.userService.getBook(id).subscribe(
        //   (book:Book)=>{
        //     console.log('book',book)
        //     this.book=book;
        //     console.log(this.book);
        this.UserProvider.onIssueBook(id, this.user._id).subscribe(function (issuedbook) {
            _this.book = issuedbook;
            // this.books=issuedbook;
            // let index=this.books.findIndex(el=>el._id==id);
            // this.books[index]=issuedbook;
            //  this.router.navigate(['/user/allbooks'],{relativeTo: this.route});
            // 
        });
        // }
        // );
        // this.adminService.addRequestedBook(this.book)
        // console.log(this.book);
    };
    BookdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookdetail',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/available/bookdetail/bookdetail.html"*/'<!--\n  Generated template for the BookdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>bookdetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- <ion-content padding>\n  Name: {{book.name}} <br>\n  Author: {{book.author}} <br>\n  Description: {{book.description}}\n   Description: {{book._id}} \n  <button *ngIf=\'book.availableunits > 0\' ion-button (click)=\'issue(book._id)\'>Issue</button>\n  <button *ngIf=\'book.availableunits == 0\' ion-button disabled (click)=\'issue(book._id)\'>Issue</button>\n</ion-content> -->\n<ion-content padding>\n    <!-- Name: {{book.name}} <br>\n    Author: {{book.author}} <br>\n    Desription: {{book.description}} <br>\n  \n  \n    <button display-inline ion-button large color="warning" (click)="signIn()" >Edit</button>\n    <button display-inline ion-button large color="danger" (click)="signIn()" >Delete</button>   -->\n    <ion-card>\n  \n      <img src="https://images.unsplash.com/photo-1421338443272-0dde2463976a?ixlib=rb-0.3.5&s=3dcc426ae786e1147f711821ef382efa&dpr=1&auto=format&fit=crop&w=525&q=60">\n      <!-- <ion-fab right top>\n        <button ion-fab>\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-fab> -->\n    \n      <ion-item>\n        <ion-icon name="football" item-start large></ion-icon>\n        <h2>Name: </h2>\n        <!-- <h4>Author: {{book.author}}</h4> -->\n        <p>{{book.name}}</p>\n      </ion-item>\n    \n      <ion-item>\n        <ion-icon name="wine" item-left large ></ion-icon>\n        <h2>Author: </h2>\n        <p>{{book.author}}</p>\n      </ion-item>\n      <ion-card-content>\n        <!-- <ion-icon name="wine" item-left large ></ion-icon> -->\n        <h2>Description: </h2>\n        <p>{{book.description}}</p>\n      </ion-card-content>\n      <button *ngIf=\'book.availableunits > 0\' ion-button (click)=\'issue(book._id)\'>Issue</button>\n      <button *ngIf=\'book.availableunits == 0\' ion-button disabled (click)=\'issue(book._id)\'>Issue</button>\n      <!-- <ion-item>\n        <span item-left>\n          <button display-inline ion-button medium color="warning" (click)="OnEdit()" >Edit</button>\n        </span>\n        <span item-right>\n          <button display-inline ion-button medium color="danger" (click)="onDeleteBook()" >Delete</button>\n        </span>\n      </ion-item> -->\n    \n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/available/bookdetail/bookdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], BookdetailPage);
    return BookdetailPage;
}());

//# sourceMappingURL=bookdetail.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.user = this.auth.user;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log(this.user.name);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content has-header="true">\n        <div id="profile-bg"></div>\n        <div id="content">\n          <div id="profile-info">\n            <img id="profile-image" src="http://s21644.pcdn.co/wp-content/uploads/2014/08/Profile-1.jpg">\n            <h3 id="profile-name">{{user.name}}</h3>\n            <span id="profile-description">Co-creator of <a href="http://facebook.com/{{user.name}}">@ionicframework</a>, founder of\n              <a href="http://twitter.com/driftyco">@driftyco</a></span>\n              <!-- <ion-row>\n                <ion-col text-center>Name</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col text-center>Name</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col text-center>Name</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col text-center>Name</ion-col>\n              </ion-row> -->\n          </div>\n        </div>\n      </ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/user/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-home/admin-home.module": [
		700,
		12
	],
	"../pages/admin-tabs/admin-tabs.module": [
		701,
		11
	],
	"../pages/all-books/all-books.module": [
		702,
		10
	],
	"../pages/all-books/book/book.module": [
		703,
		9
	],
	"../pages/create-edit/create-edit.module": [
		704,
		8
	],
	"../pages/login/login.module": [
		706,
		7
	],
	"../pages/register/register.module": [
		705,
		6
	],
	"../pages/requested/requested.module": [
		707,
		5
	],
	"../pages/user/available/available.module": [
		708,
		4
	],
	"../pages/user/available/bookdetail/bookdetail.module": [
		709,
		3
	],
	"../pages/user/issued/issued.module": [
		710,
		2
	],
	"../pages/user/profile/profile.module": [
		711,
		1
	],
	"../pages/user/user.module": [
		712,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title color="dark" >\n      OUB Library\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n  <div style="margin-bottom:40%" >\n    <img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbghWaMSu_V-uIKCjkjskTPyuSuyl9iaNuz9MRz4RJWwwJPeY4g" alt="book">\n    <h1 style="text-align: center;">OUB Library</h1> \n  </div>\n  \n    <div id="topButtons">\n      <button ion-button large color="dark" (click)="signIn()" >Sign In</button>\n      <button ion-button large color="dark" outline (click)="register()" >Sign Up</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_home_admin_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_tabs_admin_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_create_edit_create_edit__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_requested_requested__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_all_books_all_books__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_adminbooks_adminbooks__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_all_books_book_book__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_user_available_available__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_user_issued_issued__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_user_profile_profile__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_user_available_bookdetail_bookdetail__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_user_user__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_user__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























// import {AngularFireDatabaseModule} from 'angularfire2/database';
var firebaseAuth = {
    apiKey: "AIzaSyCEo2S0ti5ACqDTLAtO4Sk9lv38K_uarh8",
    authDomain: "ionicone-50596.firebaseapp.com",
    databaseURL: "https://ionicone-50596.firebaseio.com",
    projectId: "ionicone-50596",
    storageBucket: "ionicone-50596.appspot.com",
    messagingSenderId: "692195408153"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_home_admin_home__["a" /* AdminHomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_tabs_admin_tabs__["a" /* AdminTabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_edit_create_edit__["a" /* CreateEditPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_requested_requested__["a" /* RequestedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_all_books_all_books__["a" /* AllBooksPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_all_books_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_user_available_available__["a" /* AvailablePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_user_issued_issued__["a" /* IssuedPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_user_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_user_available_bookdetail_bookdetail__["a" /* BookdetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_user__["a" /* UserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-home/admin-home.module#AdminHomePageModule', name: 'AdminHomePage', segment: 'admin-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-tabs/admin-tabs.module#AdminTabsPageModule', name: 'AdminTabsPage', segment: 'admin-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-books/all-books.module#AllBooksPageModule', name: 'AllBooksPage', segment: 'all-books', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-books/book/book.module#BookPageModule', name: 'BookPage', segment: 'book', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-edit/create-edit.module#CreateEditPageModule', name: 'CreateEditPage', segment: 'create-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requested/requested.module#RequestedPageModule', name: 'RequestedPage', segment: 'requested', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/available/available.module#AvailablePageModule', name: 'AvailablePage', segment: 'available', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/available/bookdetail/bookdetail.module#BookdetailPageModule', name: 'BookdetailPage', segment: 'bookdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/issued/issued.module#IssuedPageModule', name: 'IssuedPage', segment: 'issued', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_home_admin_home__["a" /* AdminHomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_tabs_admin_tabs__["a" /* AdminTabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_edit_create_edit__["a" /* CreateEditPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_requested_requested__["a" /* RequestedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_all_books_all_books__["a" /* AllBooksPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_all_books_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_user_available_available__["a" /* AvailablePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_user_issued_issued__["a" /* IssuedPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_user_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_user_available_bookdetail_bookdetail__["a" /* BookdetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_user__["a" /* UserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_adminbooks_adminbooks__["a" /* AdminbooksProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_user_user__["a" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    // userr:any;
    function UserProvider(http, auth) {
        this.http = http;
        this.auth = auth;
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.onIssueBook = function (bookid, userid) {
        console.log('id', bookid);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:4000/request/' + bookid + '/' + userid, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserProvider.prototype.onReturnBook = function (book, userid) {
        console.log(book._id);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:4000/return/' + book._id + '/' + userid, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserProvider.prototype.IsssuedBook = function () {
        var user = this.auth.user;
        console.log("qqqqqqqq", user);
        return this.http.get('http://localhost:4000/issuedbooks/' + user._id)
            .map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    UserProvider.prototype.getBooks = function () {
        return this.http.get('http://localhost:4000/allbooks')
            .map(function (res) {
            return res.json();
        });
    };
    UserProvider.prototype.getBook = function (id) {
        var _this = this;
        return this.http.get('http://localhost:4000/bookdetails/' + id)
            .map(function (res) {
            _this.book = res.json();
            console.log(res.json());
            return res.json();
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object])
    ], UserProvider);
    return UserProvider;
    var _a, _b;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminbooksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AdminbooksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AdminbooksProvider = /** @class */ (function () {
    function AdminbooksProvider(http) {
        this.http = http;
        console.log('Hello AdminbooksProvider Provider');
    }
    AdminbooksProvider.prototype.getBooks = function () {
        console.log('get books');
        return this.http.get('http://localhost:4000/adminallbooks')
            .map(function (res) {
            return res.json();
        });
        // return this.books.slice();
    };
    AdminbooksProvider.prototype.saveBooks = function (book) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        console.log("book", book);
        return this.http.post('http://localhost:4000/newbook', book, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdminbooksProvider.prototype.getBook = function (id) {
        var _this = this;
        console.log('getting book', id);
        return this.http.get('http://localhost:4000/bookdetails/' + id)
            .map(function (res) {
            console.log(res.json());
            _this.book = res.json();
            return res.json();
        });
    };
    AdminbooksProvider.prototype.deleteBook = function (index) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:4000/delete/' + index, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AdminbooksProvider.prototype.getRequestedBooks = function () {
        return this.http.get('http://localhost:4000/admin')
            .map(function (res) {
            return res.json();
        });
    };
    AdminbooksProvider.prototype.acceptRequestedBooks = function (bookId, userID) {
        console.log(bookId, '====', userID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:4000/accept/' + bookId + '/' + userID, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AdminbooksProvider.prototype.updateBook = function (index, book) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:4000/update/' + index, book, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AdminbooksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AdminbooksProvider);
    return AdminbooksProvider;
}());

//# sourceMappingURL=adminbooks.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NavController } from 'ionic-angular';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.registerUser = function (user) {
        console.log("service", user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4000/signup', user, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AuthProvider.prototype.login = function (user) {
        var _this = this;
        console.log('login== user', user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4000/login', JSON.stringify(user), { headers: headers }) //JSON.stringify(user) = user
            .map(function (response) {
            console.log('login response', response.json());
            if (response.json().success) {
                console.log(response.json().user);
                // localStorage.setItem('id_token',response.json().token);
                // localStorage.setItem('user',JSON.stringify(response.json().user));     
                _this.user = response.json().user;
                console.log('this user', response.json().user);
                _this.authToken = response.json().token;
                return response.json();
            }
            else {
                return response.json();
            }
        });
    };
    AuthProvider.prototype.onLogOut = function () {
        // if(this.user)
        // {
        // console.log(this.user);
        console.log("this.user");
        return this.http.get("http://localhost:4000/logout").map(function (response) {
            console.log(response.json());
            return response.json();
            // this.user=undefined;
            // this.authToken=undefined;
            // localStorage.clear();
            // this.navCtrl.popToRoot();
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AuthProvider);
    return AuthProvider;
    var _a;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBooksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_adminbooks_adminbooks__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_book__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AllBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllBooksPage = /** @class */ (function () {
    function AllBooksPage(navCtrl, navParams, adService, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.adService = adService;
        this.auth = auth;
        this.books = [];
    }
    AllBooksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad allBooksPage qqqqqqqq');
    };
    // ionViewDidLeave(){
    //   this.navCtrl.pop();
    // }
    AllBooksPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('hello');
        this.adService.getBooks().subscribe(function (book) {
            console.log('qq111qq11', book);
            _this.books = book;
        });
        console.log('111111', this.books);
    };
    AllBooksPage.prototype.onClick = function (index) {
        var _this = this;
        console.log(index);
        this.adService.getBook(index).subscribe(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__book_book__["a" /* BookPage */]);
        });
    };
    AllBooksPage.prototype.onLogout = function () {
        var _this = this;
        console.log('onLogout()');
        this.auth.onLogOut().subscribe(function (data) {
            if (data.success) {
                console.log('hehehe');
                // this.navCtrl.popTo(HomePage);
                // this.navCtrl.setPages([
                //   { page: HomePage }
                // ]);
                // this.navCtrl.setRoot(HomePage);
                _this.navCtrl.popToRoot();
            }
            else {
                console.log('error');
            }
        });
    };
    AllBooksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-books',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/all-books/all-books.html"*/'<!--\n  Generated template for the AllBooksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>All Books <span style="float:right" (click)="onLogout()">Logout</span></ion-title>\n   \n  </ion-navbar>\n\n</ion-header>\n\n<!-- \n<ion-content padding>\n    <ion-list *ngFor="let book of books;let i = index">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&h=350">\n          </ion-thumbnail>\n          <h2>{{book.name}}</h2>\n          <p>{{book.author}}</p>\n          <button (click)=\'onClick(book._id)\' ion-button clear item-end>View</button>\n        </ion-item>\n      </ion-list>\n</ion-content> -->\n\n<ion-content class="card-background-page">\n\n  <ion-card  *ngFor="let book of books;let i = index" (click)=\'onClick(book._id)\'>\n    <img src="https://images.unsplash.com/photo-1421338443272-0dde2463976a?ixlib=rb-0.3.5&s=3dcc426ae786e1147f711821ef382efa&dpr=1&auto=format&fit=crop&w=525&q=60"/>\n    <div class="card-title">{{book.name}}</div>\n    <div class="card-subtitle">{{book.author}}</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/all-books/all-books.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_adminbooks_adminbooks__["a" /* AdminbooksProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], AllBooksPage);
    return AllBooksPage;
}());

//# sourceMappingURL=all-books.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_books_all_books__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_adminbooks_adminbooks__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateEditPage = /** @class */ (function () {
    function CreateEditPage(navCtrl, navParams, adService, alertCtrl, viewCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.adService = adService;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.tab = navCtrl.parent;
        this.editMode = this.navParams.get('edit');
        this.bookid = this.navParams.get('bookid');
    }
    CreateEditPage.prototype.alert = function (msg) {
        this.alertCtrl.create({
            title: 'Info',
            subTitle: msg,
            buttons: ['OK']
        }).present();
    };
    CreateEditPage.prototype.ionViewWillEnter = function () {
        console.log(this.editMode);
        // if(!this.editMode){
        //   this.navCtrl.setRoot(CreateEditPage);
        //   this.navCtrl.
        // }
    };
    // ionViewDidLeave(){
    //   this.navCtrl.pop();
    // }
    CreateEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateEditPage');
        if (this.editMode) {
            console.log(this.bookid);
            this.book = this.adService.book;
            console.log(this.book);
            this.bookname.value = this.book.name;
            this.author.value = this.book.author;
            this.copies.value = this.book.units;
            this.description.value = this.book.description;
        }
    };
    CreateEditPage.prototype.onSubmit = function () {
        var _this = this;
        if (!this.bookname.value || !this.author.value || !this.copies.value || !this.description.value) {
            this.alert('Please Fill in the Details');
        }
        else {
            console.log(this.bookname.value);
            console.log(this.author.value);
            console.log(this.copies.value);
            console.log(this.description.value);
            var book = {
                name: this.bookname.value,
                author: this.author.value,
                units: +this.copies.value,
                description: this.description.value,
                availableunits: +this.copies.value,
                issuedunits: 0
            };
            if (this.editMode) {
                this.adService.updateBook(this.bookid, book).subscribe(function (data) {
                    _this.tab.select(0);
                });
            }
            else {
                this.adService.saveBooks(book).subscribe(function (book) {
                    console.log('qwqwqwqqwq');
                    _this.bookname.value = '';
                    _this.author.value = '';
                    _this.copies.value = '';
                    _this.description.value = '';
                    _this.tab.select(0);
                });
            }
        }
    };
    CreateEditPage.prototype.onCancel = function () {
        if (this.editMode) {
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__all_books_all_books__["a" /* AllBooksPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('bookname'),
        __metadata("design:type", Object)
    ], CreateEditPage.prototype, "bookname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('author'),
        __metadata("design:type", Object)
    ], CreateEditPage.prototype, "author", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('copies'),
        __metadata("design:type", Object)
    ], CreateEditPage.prototype, "copies", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('description'),
        __metadata("design:type", Object)
    ], CreateEditPage.prototype, "description", void 0);
    CreateEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-edit',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/create-edit/create-edit.html"*/'<!--\n  Generated template for the CreateEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createEdit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <h4>editMode: {{editMode}} </h4> -->\n    <ion-list>\n        <ion-item>\n          <ion-label color="primary" floating >Book Name</ion-label>\n          <ion-input type="text" #bookname></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating >Author Name</ion-label>\n            <ion-input type="text" #author></ion-input>\n        </ion-item>\n        <ion-item>\n              <ion-label color="primary" floating >No. of Copies</ion-label>\n              <ion-input type="text" #copies></ion-input>\n        </ion-item>\n        <ion-item style="height:40%">\n            <ion-label color="primary" floating >Description</ion-label>\n            <ion-textarea type="text" #description></ion-textarea>\n        </ion-item>\n      </ion-list>\n      <button (click)="onSubmit()" display-inline ion-button color="secondary" >Submit</button>\n      <button float-right ion-button color="yellow" (click)="onCancel()" >Cancel</button>\n      \n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/create-edit/create-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_adminbooks_adminbooks__["a" /* AdminbooksProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], CreateEditPage);
    return CreateEditPage;
}());

//# sourceMappingURL=create-edit.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_home_admin_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, sService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.sService = sService;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.alert = function (msg) {
        this.alertCtrl.create({
            title: 'Info',
            subTitle: msg,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        if (!this.username.value || !this.password.value) {
            this.alert('Please fill in the details');
        }
        else {
            var user = {
                email: this.username.value,
                password: this.password.value
            };
            this.sService.login(user).subscribe(function (user) {
                console.log(user);
                if (user.success) {
                    _this.alert('You are logged in');
                    if (_this.username.value === 'admin@gmail.com') {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_home_admin_home__["a" /* AdminHomePage */]);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */]);
                    }
                }
                else {
                    _this.alert(user.msg);
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/chanakya/Desktop/Ionic/basics/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      OUB Library\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <h2>Sign-In</h2>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" #username></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" #password></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  \n  <div padding>\n    <button block outline ion-button (click)="signIn()">Sign In</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/chanakya/Desktop/Ionic/basics/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map