import { Injectable, Signal } from '@angular/core';
import { login } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public validaUsuario( usuario: Signal<any>, password: Signal<any>):boolean{
    if(usuario() && password()){
      localStorage.setItem('Valido', '1');
      return true;
    }

    return false;
  }
}
