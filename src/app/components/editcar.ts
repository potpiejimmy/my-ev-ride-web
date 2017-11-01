import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetsService } from '../services/api/assets.service';
import { AppService } from '../services/app.service';
import { ChooseLocationComponent } from '../components/chooselocation';
import { CarConfig } from '../services/carconfig.service';

@Component({
  selector: 'edit-car',
  templateUrl: 'editcar.html'
})
export class EditCarComponent {

  @ViewChild("carlocation")
  carLocation: ChooseLocationComponent;

  editform: FormGroup;

  _imagesForModel = null;
  
  @Input() car: any = null;
  @Output() done = new EventEmitter<any>();

  constructor(public app: AppService,
    private fb: FormBuilder,
    private router: Router,
    private assetsService: AssetsService,
    public carCfg: CarConfig) {}

  ngOnInit() {
    this.buildEditForm();
  }

  private buildEditForm() {
    this.editform = this.fb.group({
      'make': new FormControl('', Validators.required),
      'model': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required),
      'infotext': new FormControl('', Validators.required),
      'teasertext': new FormControl('', Validators.required),
      'value': new FormControl('', Validators.required),
      'sharecount': new FormControl('', Validators.required),
    });
  }

  imagesForModel(make: string, model: string): any {
      if (!this._imagesForModel) {
        let models = this.carCfg.images[make];
        if (!model) return [];
        let images = models[model];
        let options = images ? images.slice(0) : [];
        options.splice(0,0,{label:'<Choose Image>', value:''})
        this._imagesForModel = options;
      }
      return this._imagesForModel;
  }

  onMakeChanged() {
      this.car.model = null;
      this.onModelChanged();
  }

  onModelChanged() {
      this.car.image = null;
      this._imagesForModel = null;
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
    this.done.emit();
  }
}
