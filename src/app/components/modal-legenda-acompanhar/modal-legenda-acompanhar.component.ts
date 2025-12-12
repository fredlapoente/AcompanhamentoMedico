import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-legenda-acompanhar',
  templateUrl: './modal-legenda-acompanhar.component.html',
  styleUrls: ['./modal-legenda-acompanhar.component.scss'],
})
export class ModalLegendaAcompanharComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async fecharModal() {
    return await this.modalCtrl.dismiss()
  }

}