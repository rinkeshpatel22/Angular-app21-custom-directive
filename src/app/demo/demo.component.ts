import { Component} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent{

  private countryList: string[] = ["India", "US", "UK", "Australia"];
  private selectedCountry: string;
 
}
