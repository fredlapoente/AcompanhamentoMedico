import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-exibir-imagem',
  templateUrl: './modal-exibir-imagem.component.html',
  styleUrls: ['./modal-exibir-imagem.component.scss'],
})
export class ModalExibirImagemComponent implements OnInit {

  public imagem: string

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async fecharModal() {
    return await this.modalCtrl.dismiss()
  }

}