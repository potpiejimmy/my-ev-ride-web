import { Injectable }    from '@angular/core';
import { AuthHttp } from '../authhttp.service';
import { LoginService } from '../login.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AssetsService {

    constructor(private http: AuthHttp, private loginService : LoginService) {

    }    
    
    getCars(): Promise<any> {
        return this.http.get(environment.apiUrl+'cars');
    }
}