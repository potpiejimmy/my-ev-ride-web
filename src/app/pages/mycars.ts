import { Component, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetsService } from '../services/api/assets.service';
import { AppService } from '../services/app.service';
import { ChooseLocationComponent } from '../components/chooselocation';

@Component({
  selector: 'my-cars',
  templateUrl: 'mycars.html'
})
export class MyCarsComponent {

  mycars = [];

  car: any = null;

  constructor(public app: AppService,
    private router: Router,
    private assetsService: AssetsService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.assetsService.getMyCars().then(c => this.mycars = c);
  }

  newCar() {
    this.car = {
      currency: 'EUR'
    };
  }

  doneEditing() {
    this.car = null;
    this.refresh();
  }
}
