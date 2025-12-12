import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'popover-calendario',
  templateUrl: './popover-calendario.component.html',
  styleUrls: ['./popover-calendario.component.scss'],
})
export class PopoverCalendarioComponent implements OnInit {
  
  titulo: string
  data: Date
  dataSelecionada: Date

  constructor(private popover: PopoverController) { }

  ngOnInit() {} 

  dateSelected(ev: any){
    this.dataSelecionada = ev
  }

  cancelar(){
    this.popover.dismiss()
  }

  confirmar(){
    if(this.dataSelecionada && this.dataSelecionada != null){
      this.popover.dismiss(this.dataSelecionada)
    }else{
      this.popover.dismiss(this.data)
    }  
  }
  
}