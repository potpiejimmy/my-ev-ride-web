import { Component } from '@angular/core';
import { AssetsService } from '../services/api/assets.service';

@Component({
  selector: 'newcar',
  templateUrl: 'newcar.html'
})
export class NewCarComponent {
  car: any = {};

  images = [
    {label:'<Choose Image>', value:''},
    {label:'i3 White', value:'bmw_i3_white'},
    {label:'Model 3 White',  value:'tesla_model3_white'}
  ]

  constructor(private assetsService: AssetsService) {}

  save() {
    console.log(this.car);
    this.assetsService.saveCar(this.car);
  }
}
