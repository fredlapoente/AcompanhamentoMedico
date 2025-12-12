import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-mensagem-sincronismo',
  templateUrl: './modal-mensagem-sincronismo.component.html',
  styleUrls: ['./modal-mensagem-sincronismo.component.scss'],
})
export class ModalMensagemSincronismoComponent implements OnInit {

  public mensagem: string

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async fecharModal() {
    return await this.modalCtrl.dismiss()
  }

}