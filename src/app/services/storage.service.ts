import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
@Injectable({
  providedIn: 'root'
})
export class StorageService {
 
  constructor(private storage: Storage){}

  async adicionar(chave: string, item: any): Promise<any>{
    return await this.storage.get(chave).then((items: any[]) =>{
      if(items){
        items.push(item)
        this.storage.set(chave,items)
      }else{
        this.storage.set(chave,[item])
      }
    })
  } 

  async buscarTodos(chave: string): Promise<any[]>{    
    return await this.storage.get(chave)
  }

  async atualizar(chave: string, item: any, nomeAtributo: string): Promise<any[]>{
    return await this.storage.get(chave).then((items: any[]) =>{
      if(!items || items.length === 0){
        return null
      }
      let newItems: any[] = []
      for(let i of items){  
        let atributos = nomeAtributo.split(".")
        let valorArmazenado: any
        let valorAlterar: any
        let indice: number = 0
        for(let x of atributos){
          if(indice === 0 ){
            valorArmazenado = i[x]
            valorAlterar = item[x]
            indice = indice + 1
           }else{
            valorArmazenado = valorArmazenado[x]
            valorAlterar = valorAlterar[x]
            indice = indice + 1
          }         
        }
        if(valorArmazenado === valorAlterar){
          newItems.push(item)
        }else{
          newItems.push(i)
        }  
      }
      this.storage.set(chave,newItems)
    });
  }

  async apagar(chave: string, item: any, nomeAtributo: string): Promise<any[]>{
    return await this.storage.get(chave).then((items: any[]) =>{
      if(!items || items.length === 0){
        return null
      }
      let newItems: any[] = []
      for(let i of items){  
        let atributos = nomeAtributo.split(".")
        let valorArmazenado: any
        let valorAlterar: any
        let indice: number = 0
        for(let x of atributos){
          if(indice === 0 ){
            valorArmazenado = i[x]
            valorAlterar = item[x]
            indice = indice + 1
           }else{
            valorArmazenado = valorArmazenado[x]
            valorAlterar = valorAlterar[x]
            indice = indice + 1
          }         
        }
        if(valorArmazenado != valorAlterar){
          newItems.push(i)
        } 
      }
      this.storage.set(chave,newItems)
    });
  }
  
  apagarTodos(chave: string){
    return this.storage.remove(chave)   
  }
  
  async getRegistro(chave: string, item: any, nomeAtributo: string): Promise<any>{
    return await this.storage.get(chave).then((items: any[]) =>{
      if(!items || items.length === 0){
        return null
      }
      let newItems: any[] = []
      for(let i of items){  
        let atributos = nomeAtributo.split(".")
        let valorArmazenado: any
        let valorRecuperar: any
        let indice: number = 0
        for(let x of atributos){
          if(indice === 0 ){
            valorArmazenado = i[x]
            valorRecuperar = item[x]
            indice = indice + 1
           }else{
            valorArmazenado = valorArmazenado[x]
            valorRecuperar = valorRecuperar[x]
            indice = indice + 1
          }         
        }
        if(valorArmazenado === valorRecuperar){
          return item
        } 
      }      
    });
  }
 
}