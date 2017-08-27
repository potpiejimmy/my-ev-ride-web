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

  @ViewChild("carlocation")
  carLocation: ChooseLocationComponent;

  editform: FormGroup;
  
  mycars = [];

  car: any = null;

  images = [
    {label:'<Choose Image>', value:''},
    {label:'i3 White', value:'bmw_i3_white'},
    {label:'Model 3 White',  value:'tesla_model3_white'}
  ]

  constructor(public app: AppService,
    private fb: FormBuilder,
    private router: Router,
    private assetsService: AssetsService) {}

  ngOnInit() {
    this.buildEditForm();
    this.refresh();
  }

  private buildEditForm() {
    this.editform = this.fb.group({
      'make': new FormControl('', Validators.required),
      'model': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required),
      'value': new FormControl('', Validators.required),
      'sharecount': new FormControl('', Validators.required),
  });
}

  refresh() {
    this.assetsService.getMyCars().then(c => this.mycars = c);
  }

  newCar() {
    this.car = {
      currency: 'EUR'
    };
  }

  save() {
    if (!this.editform.valid) {
      this.app.setMessage("Form validation failure", "Please enter all required fields", "error");
      return;
    }

    this.car.lat = this.carLocation.latitude;
    this.car.lon = this.carLocation.longitude;
    this.car.location = this.carLocation.formattedAddressInput;
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
