import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.page.html',
  styleUrls: ['./fifth.page.scss'],
})
export class FifthPage implements OnInit {

  constructor(public router:Router, private alertController: AlertController,public navCtrl: NavController) { }
  vary1:number;
  vary2:number;
  vary3:number;
  async Greenpage(){
    const fat1:any = ((<HTMLInputElement>document.getElementById("sFat1"))).value;
    let fat11:number = parseInt(fat1);
    const Sugar1:any = (<HTMLInputElement>document.getElementById("sugar1")).value;
    let Sugar11:number = parseInt(Sugar1);
    const Sodium1:any = (<HTMLInputElement>document.getElementById("sodium1")).value;
    let Sodium11:number = parseInt(Sodium1);

    const fat:any = (<HTMLInputElement>document.getElementById("Sfat")).value;
    let fat01:number = parseInt(fat);
    const Sugar:any = (<HTMLInputElement>document.getElementById("sugar")).value;
    let Sugar01:number = parseInt(Sugar);
    const Sodium:any = (<HTMLInputElement>document.getElementById("sodium")).value;
    let Sodium01:number = parseInt(Sodium);
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
  if((fat01>fat11)||(Sugar01>Sugar11)||(Sodium01>Sodium11)){
    this.router.navigateByUrl('/red');
    console.log(fat1+Sugar1+Sodium1,fat+Sugar+Sodium)
   }
  else{
    this.router.navigateByUrl('/green');
    console.log(fat1+Sugar1+Sodium1,fat+Sugar+Sodium)
  }
}

  ngOnInit() {
  }

}
