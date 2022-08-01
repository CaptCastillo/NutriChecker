import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fourth1',
  templateUrl: './fourth1.page.html',
  styleUrls: ['./fourth1.page.scss'],
})
export class Fourth1Page implements OnInit {
  

  constructor(public router:Router, private alertController: AlertController) { }
  var1:number;

  var2:number;
  var3:number;
  async custom(){
    const fat:any = (<HTMLInputElement>document.getElementById("sFat1")).value;
    const Sugar:any = (<HTMLInputElement>document.getElementById("sugar1")).value;
    const Sodium:any = (<HTMLInputElement>document.getElementById("sodium1")).value;
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
  else{
    this.router.navigateByUrl('/fifth');
  }
}

  ngOnInit() {
  }

}
