import { Component } from '@angular/core';
import { User } from './users/user'
import { UserDetailComponent } from './users/user-detail.component'
import { UserListComponent } from './users/user-list.component'
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
	selector: "my-app-anca",
	templateUrl : 'app/app.component.html',
	directives: [
		UserDetailComponent, 
		UserListComponent,
		MD_TOOLBAR_DIRECTIVES,
		MD_SIDENAV_DIRECTIVES,
		MdIcon,
		MD_BUTTON_DIRECTIVES,
		MD_CARD_DIRECTIVES,
		MD_INPUT_DIRECTIVES,
		MD_LIST_DIRECTIVES
	],
	providers: [MdIconRegistry]
})

export class AppComponent {

	titulo = "Curso de Angular";
	sitio = "Anca"

	
	user: User = {
		id: 1,
		name: "Pedro Lopez",
		username: "plopez",
		email: "plopez@gmail.com"
	}
}



// 1. import 
// 2. @Component()
// 3. class