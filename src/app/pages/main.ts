import { Component, ViewChild } from '@angular/core';
import { AssetsService } from '../services/api/assets.service';
import { AppService } from '../services/app.service';
import { ChooseLocationComponent } from '../components/chooselocation';

@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class MainComponent {

  @ViewChild("yourlocation")
  public yourLocation: ChooseLocationComponent;

  cars = [];
  expandedRows = [];
  
  constructor(public app: AppService, private assetsService: AssetsService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.assetsService.getCars().then(c => this.cars = c);
  }

  onRowSelected(event: any) {
    this.expandedRows.pop();
    this.expandedRows.push(event.data);
  }
}
