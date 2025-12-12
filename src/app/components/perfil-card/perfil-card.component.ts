import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario.model';

@Component({
  selector: 'perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.scss'],
})
export class PerfilCardComponent implements OnInit {
  @Input() usuario: Usuario
  @Input() userInitials: string
  // @Input() dark
  
  public greeting: string

  constructor() {
  }

  ngOnInit() {
    const hour = new Date().getHours()
    if (hour >= 0 && hour <= 12) {
      this.greeting = 'Bom dia'
    } else if (hour >= 12 && hour < 19) {
      this.greeting = 'Boa tarde'
    } else if (hour >= 19 && hour <= 23) {
      this.greeting = 'Boa noite'
    }
  }

}