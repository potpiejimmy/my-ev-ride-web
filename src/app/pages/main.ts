import { Component, AfterViewInit } from '@angular/core';
import { AssetsService } from '../services/api/assets.service';

@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class MainComponent implements AfterViewInit {
  cars = [];
  
  constructor(private assetsService: AssetsService) {
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
