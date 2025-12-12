import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';

@Component({
  selector: 'app-saudi-toast',
  templateUrl: './saudi-toast.component.html',
  styleUrls: ['./saudi-toast.component.scss'],
})
export class SaudiToastComponent implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() { }

  async successToast(msgSuccess: string, duration?: number): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      message: msgSuccess,
      duration: duration || 6000,
      translucent: true,
      mode: 'md',
      animated: true,
      showCloseButton: true,
      closeButtonText: 'Fechar',
      position: 'bottom',
      color: 'success'
    })
    await toast.present()
    return toast
  }

  async errorToast(msgError: string, duration?: number): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      message: msgError,
      duration: duration || 6000,
      translucent: true,
      mode: 'md',
      animated: true,
      showCloseButton: true,
      closeButtonText: 'Fechar',
      position: 'bottom',
      color: 'danger'
    })
    await toast.present()
    return toast
  }

  async infoToast(msgError: string, duration?: number): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      message: msgError,
      duration: duration || 6000,
      translucent: true,
      mode: 'md',
      animated: true,
      showCloseButton: true,
      closeButtonText: 'Fechar',
      position: 'bottom',
      color: 'warning',
    })
    await toast.present()
    return toast
  }


  // Toast personalizavel
  async customToast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      message: 'Custom',
      //duration: 2000,
      animated: true,
      showCloseButton: true,
      closeButtonText: 'Fechar',
      position: 'bottom',
      color: 'warning',
      ...options
    })
    await toast.present()
    return toast
  }


}
