import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-operadora',
  templateUrl: './modal-operadora.component.html',
  styleUrls: ['./modal-operadora.component.scss'],
})
export class ModalOperadoraComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async fecharModal() {
    return await this.modalCtrl.dismiss()
  }

}