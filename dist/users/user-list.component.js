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
var user_service_1 = require('./user.service');
var toolbar_1 = require('@angular2-material/toolbar');
var list_1 = require('@angular2-material/list');
var sidenav_1 = require('@angular2-material/sidenav');
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var UserListComponent = (function () {
    function UserListComponent(userService) {
        this.userService = userService;
    }
    UserListComponent.prototype.getUsers = function () {
        this.users = this.userService.getUsers();
    };
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: "user-list",
            templateUrl: 'app/users/user-list.component.html',
            directives: [
                toolbar_1.MD_TOOLBAR_DIRECTIVES,
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                icon_1.MdIcon,
                button_1.MD_BUTTON_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                input_1.MD_INPUT_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES
            ],
            providers: [user_service_1.UserService, icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map