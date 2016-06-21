import { Injectable } from "@angular/core"
import { usersData } from './user-data'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { User } from './user'

@Injectable()
export class UserService {

	urlBackend: string = "http://jsonplaceholder.typicode.com/users"

	//urlBackend: string = "http://10.119.27.87:3004/users"
	constructor(private http: Http) {}

	getUsersData(){
		return usersData;
	}

	private getData(r: Response) {
		return r.json()
	}

	private getError(error: any) {
		return Observable.throw(error);
	}

	getUsers(): Observable<User[]> {

		return this.http.get(this.urlBackend)
				        .map(this.getData)
				        .catch(this.getError);

	}

	getUser(id: number): Observable<User> {

		return this.http.get(this.urlBackend+'/'+id)
				        .map(this.getData)
				        .catch(this.getError);

	}

	private getOptions() {

		let headers = new Headers({
			'Content-Type': 'application/json'
		})

		let options = new RequestOptions({ headers: headers })

		return options
	}

	save(user: User){

		if (user.id){
			return this.update(user);
		} else {
			return this.create(user);
		}
	}

	private create(user: User): Observable<User> {
		
		let body = JSON.stringify(user);	

		let option = this.getOptions();

		return this.http.post(this.urlBackend, body, option)
				        .map(this.getData)
				        .catch(this.getError);

	}

	private update(user: User): Observable<User> {

		let body = JSON.stringify(user);

		let option = this.getOptions();

		let id: number = user.id;

		return this.http.put(this.urlBackend+'/'+id, body, option)
				        .map(this.getData)
				        .catch(this.getError);

	}

	delete(user: User): Observable<User> {

		let body = JSON.stringify(user);

		let option = this.getOptions();

		let id: number = user.id;

		return this.http.delete(this.urlBackend + '/' + id, option)
				        .map(this.getData)
				        .catch(this.getError);

	}

	getByUsername(username: string): Observable<User[]> {

		return this.http.get(this.urlBackend+'?username_like='+username)
				        .map(this.getData)
				        .catch(this.getError);

	}


}