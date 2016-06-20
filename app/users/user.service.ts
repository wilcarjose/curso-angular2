import { Injectable } from "@angular/core"
import { usersData } from './user-data'

@Injectable()
export class UserService {

	getUsers(){
		return usersData;
	}
}