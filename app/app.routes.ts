import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list.component';
import { UserDetailComponent } from './users/user-detail.component';


export const routes: RouterConfig = [
	{ path: '', component: AppComponent },
	{ path: 'users', component: UserListComponent },
	{ path: 'user', component: UserDetailComponent },
	{ path: 'user/:id', component: UserDetailComponent }
]

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];