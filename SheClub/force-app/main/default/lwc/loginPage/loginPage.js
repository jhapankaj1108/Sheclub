import { LightningElement, api } from 'lwc';
import She_Pic from '@salesforce/resourceUrl/ShePic';

export default class LoginPage extends LightningElement {
 ShePicLogo = She_Pic + '?She_Pic.jpg';
  ShePicLogo = She_Pic + '?';
 
    @api buttonText;
    handleClick() {
      console.log("Button Clicked!");
    }
   }