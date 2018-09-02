/// <reference types="@types/googlemaps" />
import { Component, ElementRef, NgZone, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'choose-location',
    templateUrl: 'chooselocation.html'
  })
  export class ChooseLocationComponent implements OnInit {

    @ViewChild("agmMap") map: any;

    @Input() public latitude: number;
    @Input() public longitude: number;
    @Input() public formattedAddressInput: string;

    @Input() public set mapObject(o: any) {
      this._mapObject = o;
      if (o) {
        var bounds = new google.maps.LatLngBounds();
        bounds.extend({lat: this.latitude, lng: this.longitude});
        bounds.extend({lat: o.lat, lng: o.lon});
        this.map._mapsWrapper.fitBounds(bounds);
      } else {
        if (this.latitude && this.longitude) {
          this.map._mapsWrapper.setCenter({lat: this.latitude, lng: this.longitude});
        }
      }
    };
    public get mapObject(): any {return this._mapObject;}

    @Output() onLocationChanged = new EventEmitter<any>();

    public zoom: number;
    _mapObject: any;
    
    @ViewChild("search")
    public searchElementRef: ElementRef;
  
    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,
      private localStorageService: LocalStorageService      
    ) {}
  
    ngOnInit() {
      this.zoom = 12;

      if (!this.latitude && !this.longitude) this.initDefaultPosition();

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
  
            this.lastSavedPlace = {
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              formatted_address: place.formatted_address
            }
            this.applyPlaceToMap();
          });
        });

        // prevent enter form submit
        google.maps.event.addDomListener(this.searchElementRef.nativeElement, 'keydown', function(event) { 
          if (event.keyCode === 13) { 
              event.preventDefault(); 
          }
        }); 
      });
    }

    private initDefaultPosition() {
      //set google maps defaults
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;
  
      let place = this.lastSavedPlace;
      if (place) {
        this.applyPlaceToMap();
      } else {
        //set current browser location position
        this.setAutoPosition();
      }
    }

    private applyPlaceToMap() {
        let place = this.lastSavedPlace;
        //set latitude, longitude and zoom
        this.formattedAddressInput = place.formatted_address;
        this.latitude = place.latitude;
        this.longitude = place.longitude;
        this.zoom = 12;
        this.onLocationChanged.emit();
    }
  
    private setAutoPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
          this.onLocationChanged.emit();
        });
      }
    }

    set lastSavedPlace(place: any) {
      this.localStorageService.set("currentPlace", place);
    }

    get lastSavedPlace(): any {
      return this.localStorageService.get("currentPlace");
    }
}
