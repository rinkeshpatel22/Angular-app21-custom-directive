import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
@Directive({
  selector: '[appCountryCode]'
})
export class CountryCodeDirective implements OnChanges{
  
  @HostBinding('value') countryCode;

  @Input() countryName: string;

  ngOnChanges(){
    this.countryCode = this.getCountryCode();
  } 

  private getCountryCode(): string{
    switch(this.countryName){
      case "India": return "+91"; break;
      case "US": return "+1"; break;
      case "UK": return "+44"; break;
      case "Australia": return "+61"; break;
      default: return ""; break;
    }
  }
}

