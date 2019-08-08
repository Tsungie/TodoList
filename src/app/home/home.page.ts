import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taskList = [];


  constructor(public navCtrl: NavController, public alertController: AlertController) {}


  addTask() {
    if (this.taskName.length > 0) {
        let task = this.taskName;
        this.taskList.push(task);
        this.taskName = "";
    }
}




/* deleteTask(index){
  this.taskList.splice(index, 1);
} */


async deleteTask(index) {
  const alert = await this.alertController.create({
    header: 'WAIT!',
    message: ' Are you sure you really wanna  delete?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'DELETE',
        handler: () => {
          this.taskList.splice(index, 1);
        }
      }
    ]
  });

  await alert.present();
}





  async updateTask(index) {
  const alert = await this.alertController.create({
      header: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {
                    this.taskList[index] = data.editTask; }
                }
               ]
  });
  alert.present();
}
}