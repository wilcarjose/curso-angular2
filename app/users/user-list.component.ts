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
import { Router } from '@angular/router';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';

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
		MD_LIST_DIRECTIVES,
		MD_PROGRESS_CIRCLE_DIRECTIVES
	],
	providers: [UserService,MdIconRegistry]
})

export class UserListComponent implements OnInit {

	users: User[];

	error: any;

	listo: boolean = false;

	constructor(private userService : UserService,
				private router : Router
		){}

	getUsers(){
		this.listo = false;
		this.userService
			 .getUsers()
			 .subscribe(
				users => {
					this.users = users;
					this.listo = true
				},
				error => { this.error = error;
						   this.listo = true
				}
			 );

	}

	verUsuario(user: User){
		this.router.navigate(['/user',user.id]);
	}

	ngOnInit(){
		this.getUsers();
	}

	nuevo(){
		this.router.navigate(['/user']);
	}

	eliminar(user: User){

		if (confirm("Esta seguro")){
			this.listo = false;
			this.userService
				.delete(user)
				.subscribe(
					users => this.getUsers(),
					error => this.error = error
				);
			} 
	}

	buscar(event: any){
		this.listo = false;
		let key = event.target.value;
		//console.log(key);
		if (key == '') {
			this.getUsers();
		} else {
			this.userService
				.getByUsername(key)
				.subscribe(
				users => { this.users = users;
	     					this.listo = true;
					},
				error => this.error = error
				);
		}
	} 

}

