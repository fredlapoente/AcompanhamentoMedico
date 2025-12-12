import { Injectable } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx'
import { BehaviorSubject, Subscription  } from 'rxjs';
import { Platform } from '@ionic/angular';

 
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
   
  public NetworkStatus: BehaviorSubject<boolean>;
  private WatchConnect: Subscription;
  private WatchDisconnect: Subscription;

  constructor(public platform:Platform, public network: Network) {
      this.NetworkStatus = new BehaviorSubject(false); // Assume Network is offline
      this.CheckNetworkStatus();
      this.CreateNetworkObserverSubscriptions();
  }

  CheckNetworkStatus() {
    if( this.platform.is('cordova') ) { 
      if( this.network.type === undefined || this.network.type === null || this.network.type === 'unknown' || this.network.type === 'none') {
        this.UpdateNetworkStatus(false);
      } else {
        this.UpdateNetworkStatus(true);
      }
    } else {
      this.UpdateNetworkStatus(navigator.onLine);
    }
  }

  CreateNetworkObserverSubscriptions() {
      this.WatchConnect = this.network.onConnect().subscribe(
          data => { this.UpdateNetworkStatus(true); },
          error => { console.log(error); }
      );      
      this.WatchDisconnect = this.network.onDisconnect().subscribe(
          data => { this.UpdateNetworkStatus(false); },
          error => { console.log(error); }
      );      
  }

  UpdateNetworkStatus(IsOnline:boolean) {
    this.NetworkStatus.next(IsOnline);
  }

}