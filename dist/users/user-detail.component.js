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
var user_1 = require('./user');
var toolbar_1 = require('@angular2-material/toolbar');
var list_1 = require('@angular2-material/list');
var sidenav_1 = require('@angular2-material/sidenav');
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var user_service_1 = require('./user.service');
var router_1 = require('@angular/router');
var progress_circle_1 = require('@angular2-material/progress-circle');
var UserDetailComponent = (function () {
    function UserDetailComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.listo = true;
    }
    UserDetailComponent.prototype.guardar = function () {
        var _this = this;
        this.listo = false;
        this.userService.save(this.user)
            .subscribe(function (user) {
            _this.user = user;
            _this.listo = true;
        }, function (error) { return _this.error = error; });
    };
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.param = this.route
            .params
            .subscribe(function (parametro) {
            // Obetenemos el id del la url
            var id = parametro['id'];
            if (id) {
                // Obtenemos un usuario desde un servicio
                _this.userService
                    .getUser(id)
                    .subscribe(// Como es un metodo observable debemos subscribirlo
                function (// Como es un metodo observable debemos subscribirlo
                    user) { return _this.user = user; }, function (error) { return _this.error = error; });
            }
            else {
                _this.user = new user_1.User();
            }
        });
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.param.unsubscribe();
    };
    UserDetailComponent.prototype.listar = function () {
        this.router.navigate(['/users']);
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: "user-detail",
            templateUrl: 'app/users/user-detail.component.html',
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
            providers: [icon_1.MdIconRegistry, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
/*

UserDetailComponent


UserListComponent


 */ 
//# sourceMappingURL=user-detail.component.js.map