import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssetsService } from '../services/api/assets.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'my-cars',
  templateUrl: 'mycars.html'
})
export class MyCarsComponent {
  mycars = [];

  car: any = null;

  images = [
    {label:'<Choose Image>', value:''},
    {label:'i3 White', value:'bmw_i3_white'},
    {label:'Model 3 White',  value:'tesla_model3_white'}
  ]

  constructor(public app: AppService, private router: Router, private assetsService: AssetsService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.assetsService.getMyCars().then(c => this.mycars = c);
  }

  newCar() {
    this.car = {
      lat: 0, lon: 0,
      currency: 'EUR'
    };
  }

  save() {
    this.assetsService.saveCar(this.car).then(() => {
      this.cancel();
    });
  }

  delete() {
    this.assetsService.deleteCar(this.car).then(() => {
      this.cancel();
    });
  }

  cancel() {
    this.car = null;
    this.refresh();
  }
}
