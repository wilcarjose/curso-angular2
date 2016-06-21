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
var core_1 = require("@angular/core");
var user_data_1 = require('./user-data');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/throw');
var UserService = (function () {
    //urlBackend: string = "http://10.119.27.87:3004/users"
    function UserService(http) {
        this.http = http;
        this.urlBackend = "http://jsonplaceholder.typicode.com/users";
    }
    UserService.prototype.getUsersData = function () {
        return user_data_1.usersData;
    };
    UserService.prototype.getData = function (r) {
        return r.json();
    };
    UserService.prototype.getError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.urlBackend)
            .map(this.getData)
            .catch(this.getError);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.urlBackend + '/' + id)
            .map(this.getData)
            .catch(this.getError);
    };
    UserService.prototype.getOptions = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    UserService.prototype.save = function (user) {
        if (user.id) {
            return this.update(user);
        }
        else {
            return this.create(user);
        }
    };
    UserService.prototype.create = function (user) {
        var body = JSON.stringify(user);
        var option = this.getOptions();
        return this.http.post(this.urlBackend, body, option)
            .map(this.getData)
            .catch(this.getError);
    };
    UserService.prototype.update = function (user) {
        var body = JSON.stringify(user);
        var option = this.getOptions();
        var id = user.id;
        return this.http.put(this.urlBackend + '/' + id, body, option)
            .map(this.getData)
            .catch(this.getError);
    };
    UserService.prototype.delete = function (user) {
        var body = JSON.stringify(user);
        var option = this.getOptions();
        var id = user.id;
        return this.http.delete(this.urlBackend + '/' + id, option)
            .map(this.getData)
            .catch(this.getError);
    };
    UserService.prototype.getByUsername = function (username) {
        return this.http.get(this.urlBackend + '?username_like=' + username)
            .map(this.getData)
            .catch(this.getError);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map