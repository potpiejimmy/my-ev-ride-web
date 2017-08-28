import { Injectable }    from '@angular/core';
import { AuthHttp } from '../authhttp.service';
import { LoginService } from '../login.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AssetsService {

    constructor(private http: AuthHttp, private loginService : LoginService) {

    }    
    
    getCars(lon: number, lat: number): Promise<any> {
        return this.http.get(environment.apiUrl+'cars?lon='+lon+'&lat='+lat);
    }

    getMyCars(): Promise<any> {
        return this.http.get(environment.apiUrl+'assets');
    }

    saveCar(car: any): Promise<any> {
        return this.http.post(environment.apiUrl+'assets', car);
    }

    deleteCar(car: any): Promise<any> {
        return this.http.delete(environment.apiUrl+'assets/'+car.id);
    }
}