import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { User } from './user'
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';

@Component({
	selector: "user-detail",
	templateUrl: 'app/users/user-detail.component.html',
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
	providers: [MdIconRegistry, UserService]
})

export class UserDetailComponent implements OnInit, OnDestroy {

	//@Input() user : User;
	user: User;
	error: any;
	param: any;
	listo: boolean = true;

	constructor(private userService : UserService,
				private route: ActivatedRoute,
				private router: Router
		){}

	guardar(){
		this.listo = false;
		this.userService.save(this.user)
			.subscribe( user => {this.user = user; 
								 this.listo = true },
			            			error => this.error = error
						);
	}

	ngOnInit(){
		this.param = this.route
						 .params
						 .subscribe(
						 	parametro => { 
						 		  // Obetenemos el id del la url
								  let id = parametro['id'];

								  	if(id) {
									  // Obtenemos un usuario desde un servicio
									  this.userService
									      .getUser(id)
									  	  .subscribe( // Como es un metodo observable debemos subscribirlo
											  user => this.user = user,
											  error => this.error = error
									  	  )
								  	} else {
										this.user = new User();
								  	}
						 	 } 
						 );
	}

	ngOnDestroy(){
		this.param.unsubscribe();
	}

	listar(){
		this.router.navigate(['/users']);
	}



}



/*

UserDetailComponent


UserListComponent


 */