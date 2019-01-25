import { Component } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
  selector: 'campagne',
  templateUrl: 'campagne.html'
})
export class CampagneComponent {
  howItWorksUrl() {
    return environment.landingUrl + "/#howitworks";
  }
}
