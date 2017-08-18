import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class MainComponent {
  bookings = [
    {
      image: "assets/layout/images/logo2x.png",
      distance: "0.2 km",
      make: "Tesla",
      model: "Model 3",
      info: "2",
      value: "49,000.00 $",
      yourprice: "24,500.00 $"
    },
    {
      image: "assets/layout/images/cars/bmw_i3_white.png",
      distance: "0.8 km",
      make: "BMW",
      model: "i3",
      info: "2",
      value: "54,000.00 $",
      yourprice: "27,000.00 $"
    },
    {
      image: "assets/layout/images/logo2x.png",
      distance: "1.1 km",
      make: "Tesla",
      model: "Model S",
      info: "3",
      value: "132,000.00 $",
      yourprice: "44,000.00 $"
    },
    {
      image: "assets/layout/images/cars/bmw_i3_white.png",
      distance: "1.5 km",
      make: "Nissan",
      model: "Leaf",
      info: "2",
      value: "36,000.00 $",
      yourprice: "18,000.00 $"
    },
    {
      image: "assets/layout/images/cars/bmw_i3_white.png",
      distance: "2.3 km",
      make: "Renault",
      model: "Zoé",
      info: "2",
      value: "38,000.00 $",
      yourprice: "19,000.00 $"
    }
  ];  
}
