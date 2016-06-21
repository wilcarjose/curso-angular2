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
var router_1 = require('@angular/router');
var progress_circle_1 = require('@angular2-material/progress-circle');
var UserListComponent = (function () {
    function UserListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.listo = false;
    }
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.listo = false;
        this.userService
            .getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.listo = true;
        }, function (error) {
            _this.error = error;
            _this.listo = true;
        });
    };
    UserListComponent.prototype.verUsuario = function (user) {
        this.router.navigate(['/user', user.id]);
    };
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.nuevo = function () {
        this.router.navigate(['/user']);
    };
    UserListComponent.prototype.eliminar = function (user) {
        var _this = this;
        if (confirm("Esta seguro")) {
            this.listo = false;
            this.userService
                .delete(user)
                .subscribe(function (users) { return _this.getUsers(); }, function (error) { return _this.error = error; });
        }
    };
    UserListComponent.prototype.buscar = function (event) {
        var _this = this;
        this.listo = false;
        var key = event.target.value;
        //console.log(key);
        if (key == '') {
            this.getUsers();
        }
        else {
            this.userService
                .getByUsername(key)
                .subscribe(function (users) {
                _this.users = users;
                _this.listo = true;
            }, function (error) { return _this.error = error; });
        }
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
                list_1.MD_LIST_DIRECTIVES,
                progress_circle_1.MD_PROGRESS_CIRCLE_DIRECTIVES
            ],
            providers: [user_service_1.UserService, icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map