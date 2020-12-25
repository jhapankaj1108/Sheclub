import { LightningElement, api } from 'lwc';
import Founder_Pic from '@salesforce/resourceUrl/founder';
import Director_Pic from '@salesforce/resourceUrl/director';
import Manager_Pic from '@salesforce/resourceUrl/manager';
import Developer_Pic from '@salesforce/resourceUrl/developer';
import Sheclub_Pic from '@salesforce/resourceUrl/Sheclub';
import Leader_Pic from '@salesforce/resourceUrl/leader';
import Kloudone_Pic from '@salesforce/resourceUrl/Kloudone';

export default class MeetTeam extends LightningElement {
 FounderPicLogo = Founder_Pic + '?Founder_Pic.jpg';
 FounderPicLogo = Founder_Pic + '?';

  
 DirectorPicLogo = Director_Pic + '?Director_Pic.jpg';
 DirectorPicLogo = Director_Pic + '?';

 KloudOneLogo = Kloudone_Pic + '?Kloudone_Pic.jpg';
 KloudOneLogo = Kloudone_Pic + '?';


   
 ManagerPicLogo = Manager_Pic + '?Manager_Pic.jpg';
 ManagerPicLogo = Manager_Pic + '?';

    
 DeveloperPicLogo = Developer_Pic + '?Developer_Pic.jpg';
 DeveloperPicLogo = Developer_Pic + '?';

    
 SheclubPicLogo = Sheclub_Pic + '?Sheclub_Pic.jpg';
 SheclubPicLogo = Sheclub_Pic + '?';        

     
 LeaderPicLogo = Leader_Pic + '?Leader_Pic.jpg';
 LeaderPicLogo = Leader_Pic + '?';
 
    @api buttonText;
    handleClick() {
      console.log("Button Clicked!");
    }
   }