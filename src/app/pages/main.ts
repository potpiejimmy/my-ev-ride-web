import { Component, AfterViewInit } from '@angular/core';
import { AssetsService } from '../services/api/assets.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class MainComponent implements AfterViewInit {
  cars = [];
  
  constructor(public app: AppService, private assetsService: AssetsService) {
  }

  ngOnInit() {
    this.refresh();
  }

  ngAfterViewInit() {
  }

  refresh() {
    this.assetsService.getCars().then(c => this.cars = c);
  }
}
