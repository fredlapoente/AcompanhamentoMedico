import {Injectable} from '@angular/core';
import { ParametrosService } from 'src/app/services/parametros.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})

export class VerificaVersao {


constructor(
    private parametrosService: ParametrosService,
    private appVersion: AppVersion,
    private alertController: AlertController,
  ) { }


    async checkAppVersion() {
        const currentVersion = await this.appVersion.getVersionNumber();
        this.parametrosService.getVerificaAppAtualizado(currentVersion).subscribe(async (flgAtualizado: boolean) => {
        if (!flgAtualizado) {
            const alert = await this.alertController.create({
                header: 'Atualização disponível',
                message: 'Existe uma nova versão do app. Atualize para continuar usando.',
                backdropDismiss: false,
                buttons: [
                {
                    text: 'Atualizar',
                    handler: () => {
                    window.open('https://play.google.com/store/apps/details?id=br.acol.com.saudi.acompanhamento.medico', '_system');
                    navigator['app'].exitApp(); // Fecha o app
                    }
                },
                {
                    text: 'Fechar',
                    handler: () => {
                    navigator['app'].exitApp(); // Fecha o app
                    }
                }
                ]
            });
            await alert.present();
        }
    })    
  }    
}