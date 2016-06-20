import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService} from './user.service';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
	selector: "user-list",
	templateUrl: 'app/users/user-list.component.html',
	directives: [
		MD_TOOLBAR_DIRECTIVES,
		MD_SIDENAV_DIRECTIVES,
		MdIcon,
		MD_BUTTON_DIRECTIVES,
		MD_CARD_DIRECTIVES,
		MD_INPUT_DIRECTIVES,
		MD_LIST_DIRECTIVES
	],
	providers: [UserService,MdIconRegistry]
})

export class UserListComponent implements OnInit {

	users: User[];

	constructor(private userService : UserService){}

	getUsers(){

		this.users = this.userService.getUsers();

	}

	ngOnInit(){
		this.getUsers();
	}

}

