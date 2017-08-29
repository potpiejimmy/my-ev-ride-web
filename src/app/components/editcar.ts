import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetsService } from '../services/api/assets.service';
import { AppService } from '../services/app.service';
import { ChooseLocationComponent } from '../components/chooselocation';

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

// --- START CAR CONFIGURATION ---

  makes = [
    {label:'<Choose>', value:''},
    {label:'BMW', value: 'BMW'},
    {label:'Chevrolet', value: 'Chevrolet'},
    {label:'Nissan', value: 'Nissan'},
    {label:'Renault', value: 'Renault'},
    {label:'Tesla', value: 'Tesla'},
    {label:'Volkswagen', value: 'Volkswagen'}
  ]

  models = {
    "BMW": [
        {label:'<Choose Model>', value:''},
        {label:'i3', value: 'i3'},
        {label:'i8', value: 'i8'}
    ],
    "Chevrolet": [
        {label:'<Choose Model>', value:''},
        {label:'Bolt', value: 'Bolt'}
    ],
    "Nissan": [
        {label:'<Choose Model>', value:''},
        {label:'Leaf', value: 'Leaf'}
    ],
    "Renault": [
        {label:'<Choose Model>', value:''},
        {label:'Zoe', value: 'Zoe'}
    ],
    "Tesla": [
        {label:'<Choose Model>', value:''},
        {label:'Model S', value: 'Model S'},
        {label:'Model X', value: 'Model X'},
        {label:'Model 3', value: 'Model 3'}
    ],
    "Volkswagen": [
        {label:'<Choose Model>', value:''},
        {label:'e-Golf', value: 'e-Golf'}
    ]
  }
  
  images = {
    "BMW": {
        "i3": [
            {label:'i3 White', value:'bmw_i3_white'}
        ]
    },
    "Tesla": {
        "Model 3": [
            {label:'Model 3 White Aero',  value:'tesla_model3_white_aero'},
            {label:'Model 3 Black Aero',  value:'tesla_model3_black_aero'},
            {label:'Model 3 Blue Aero',  value:'tesla_model3_blue_aero'},
            {label:'Model 3 Signature Red Aero',  value:'tesla_model3_red_aero'},
            {label:'Model 3 Gray Aero',  value:'tesla_model3_gray_aero'},
            {label:'Model 3 Midnight Gray Aero',  value:'tesla_model3_midgray_aero'},
            {label:'Model 3 White 19"',  value:'tesla_model3_white_19'},
            {label:'Model 3 Black 19"',  value:'tesla_model3_black_19'},
            {label:'Model 3 Blue 19"',  value:'tesla_model3_blue_19'},
            {label:'Model 3 Signature Red 19"',  value:'tesla_model3_red_19'},
            {label:'Model 3 Gray 19"',  value:'tesla_model3_gray_19'},
            {label:'Model 3 Midnight Gray 19"',  value:'tesla_model3_midgray_19'}
        ]
    }
  }

// --- END CAR CONFIGURATION ---

  constructor(public app: AppService,
    private fb: FormBuilder,
    private router: Router,
    private assetsService: AssetsService) {}

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
        let models = this.images[make];
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
