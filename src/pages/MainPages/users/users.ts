import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserOptionsPage } from '../../Users/user-options/user-options';
import { NotiPopPage } from '../../Extra/Notifications/noti-pop/noti-pop';



@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  usersRef = this.db.list('User Data/Users', ref=>ref.orderByChild("TimeStamp"));
  users: Array<any> = [];
  usersLoaded: Array<any> = [];


  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public popoverCtrl : PopoverController,
  public navParams: NavParams
  ) {
    this.getUsers();
  }



  getUsers(){
    this.usersRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        tempArray.push(temp);
      })
      this.users = tempArray;
      this.usersLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.users = this.usersLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.users = this.users.filter((v) => {
      if((v.Name) && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1)
          {
          return true;
        }
        return false;
      }
    });
  }






  viewOptions(myEvent,u){
    let popover = this.popoverCtrl.create(UserOptionsPage,{user : u});
    popover.present({
      ev: myEvent
    });
}


gtNoti(myEvent) {
  let popover = this.popoverCtrl.create(NotiPopPage);
  popover.present({
    ev: myEvent
  });
}


}
