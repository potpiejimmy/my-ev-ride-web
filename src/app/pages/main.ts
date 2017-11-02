import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { AssetsService } from '../services/api/assets.service';
import { AppService } from '../services/app.service';
import { ChooseLocationComponent } from '../components/chooselocation';
import { CarConfig } from '../services/carconfig.service';

@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class MainComponent implements AfterViewInit {

  @ViewChild("yourlocation")
  public yourLocation: ChooseLocationComponent;

  cars = [];
  expandedRows = [];
  selectedRow: any;
  lastSelectedRow: any;

  constructor(public app: AppService,
    private assetsService: AssetsService,
    private router: Router,
    public carCfg: CarConfig) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.refresh();
  }

  onRowSelect(sel: any) {
    this.expandedRows.pop();
    if (this.lastSelectedRow && this.lastSelectedRow.id === sel.data.id) {
      // deselect if already selected
      this.selectedRow = this.lastSelectedRow = null;
    } else {
      // select and expand the new row
      this.expandedRows.push(sel.data);
      this.lastSelectedRow = sel.data;
    }
  }
    
  refresh() {
    this.assetsService.getCars(this.yourLocation.longitude, this.yourLocation.latitude).then(c => {
      c.forEach(e => {
        let isM = false;
        e.distance = this.distance(e.lat, e.lon);
        if (e.distance < 1) {
          isM = true;
          e.distance *= 1000; // m
        }
        e.distance = isM ? Math.round(e.distance) : Math.round(e.distance * 10) / 10;
        e.distance = e.distance + (isM ? " m" : " km");
      });
      this.cars = c;
    });
  }

  onLocationChanged() {
    this.refresh();
  }

  carItemAction() {
    this.router.navigate(['/campaign']);
  }

  arrayOfLength(len: number) {
    return new Array(len);
  }

  distance(lat2, lon2) {
    let lat1 = this.yourLocation.latitude;
    let lon1 = this.yourLocation.longitude;
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist *= 180/Math.PI
    dist *= 60 * 1.1515
    dist *= 1.609344 // km
    return dist;
  }
}
