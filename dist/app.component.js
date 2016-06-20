"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_detail_component_1 = require('./users/user-detail.component');
var user_list_component_1 = require('./users/user-list.component');
var toolbar_1 = require('@angular2-material/toolbar');
var list_1 = require('@angular2-material/list');
var sidenav_1 = require('@angular2-material/sidenav');
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var AppComponent = (function () {
    function AppComponent() {
        this.titulo = "Curso de Angular";
        this.sitio = "Anca";
        this.user = {
            id: 1,
            name: "Pedro Lopez",
            username: "plopez",
            email: "plopez@gmail.com"
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app-anca",
            templateUrl: 'app/app.component.html',
            directives: [
                user_detail_component_1.UserDetailComponent,
                user_list_component_1.UserListComponent,
                toolbar_1.MD_TOOLBAR_DIRECTIVES,
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                icon_1.MdIcon,
                button_1.MD_BUTTON_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                input_1.MD_INPUT_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES
            ],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// 1. import 
// 2. @Component()
// 3. class 
//# sourceMappingURL=app.component.js.map