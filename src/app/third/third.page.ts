import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {
  constructor(public router:Router, private alertController: AlertController)
  { }

 async Greenpage(){
    const fat:any = (<HTMLInputElement>document.getElementById("Sfat")).value;
    const Sugar:any = (<HTMLInputElement>document.getElementById("sugar")).value;
    const Sodium:any = (<HTMLInputElement>document.getElementById("sodium")).value;
  if
  ((fat=="" || fat <=-1)||(Sugar=="" || Sugar <=-1)||(Sodium=="" || Sodium <=-1)){
    let alert = this.alertController.create({
      cssClass: "custom-alert",
      subHeader: 'Oops',
      message: 'All Fields MUST be Completed <br>(No Negative and Letters Input)',
      buttons: [{
        text:'OK',
        cssClass: 'alert-button-confirm',
      }]
    });
    (await alert).present();
  }
  else if((fat<=3)&&(Sugar<=10)&&(Sodium<=120)){
    this.router.navigateByUrl('/green');
   }
  else{
    this.router.navigateByUrl('/red');
  }
}
ngOnInit() {}
back(){
  this.router.navigateByUrl('/fourth');
}
}
