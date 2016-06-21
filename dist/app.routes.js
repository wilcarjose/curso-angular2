"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var user_list_component_1 = require('./users/user-list.component');
var user_detail_component_1 = require('./users/user-detail.component');
exports.routes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'users', component: user_list_component_1.UserListComponent },
    { path: 'user', component: user_detail_component_1.UserDetailComponent },
    { path: 'user/:id', component: user_detail_component_1.UserDetailComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map