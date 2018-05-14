import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { AuthGuard } from './authguard.service';
import { AppService } from './app.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthHttp {
    constructor (
        private http: HttpClient,
        private app: AppService,
        private loginService: LoginService,
        private authGuard : AuthGuard) {
    }

    requestOptions() {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        // note: use lower-case 'authorization' due to https://github.com/auth0/express-jwt/issues/173
        headers = headers.append('authorization', 'Bearer ' + this.loginService.loginTokenEncoded);
        return { headers: headers };
    }

    handleResponse(request: Observable<Object>): Promise<any> {
        this.app.clearMessages();
        return request.toPromise()
               .catch(err => this.handleError(err, this));
    }

    getBlob(url): Promise<any>  {
        let options = this.requestOptions();
        options["responseType"] = "blob";
        return this.handleResponse(this.http.get(url, options));
    }

    get(url): Promise<any>  {
        return this.handleResponse(this.http.get(url, this.requestOptions()));
    }

    post(url, data): Promise<any>  {
        return this.handleResponse(this.http.post(url, data, this.requestOptions()));
    }

    put(url, data): Promise<any>  {
        return this.handleResponse(this.http.put(url, data, this.requestOptions()));
    }

    delete(url): Promise<any>  {
        return this.handleResponse(this.http.delete(url, this.requestOptions()));
    }

    relogin() {
        console.info("loginService", this.loginService);
        this.loginService.logout();
        this.authGuard.checkLogin('/'); // go to main page via login
    }

    private handleError(error: any, me: any): Promise<any> {
        console.error('An error occurred', JSON.stringify(error)); // XXX for debugging purposes
        if (!error.status) error.message = "Sorry, " + environment.apiUrl + " cannot be reached.";
        if (error.status == 401) me.relogin(); // not authorized, go to login
        else me.app.setMessage("Error", error.message || error);
        return Promise.reject(error.message || error);
    }
}